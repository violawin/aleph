'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-c0ba63d2.js');
const helpers = require('./helpers-cb44ca7a.js');

const TRANSITION = 'all 0.2s ease-in-out';
const cloneElement = (tagName) => {
    const getCachedEl = document.querySelector(`${tagName}.ion-cloned-element`);
    if (getCachedEl !== null) {
        return getCachedEl;
    }
    const clonedEl = document.createElement(tagName);
    clonedEl.classList.add('ion-cloned-element');
    clonedEl.style.setProperty('display', 'none');
    document.body.appendChild(clonedEl);
    return clonedEl;
};
const createHeaderIndex = (headerEl) => {
    if (!headerEl) {
        return;
    }
    const toolbars = headerEl.querySelectorAll('ion-toolbar');
    return {
        el: headerEl,
        toolbars: Array.from(toolbars).map((toolbar) => {
            const ionTitleEl = toolbar.querySelector('ion-title');
            return {
                el: toolbar,
                background: toolbar.shadowRoot.querySelector('.toolbar-background'),
                ionTitleEl,
                innerTitleEl: (ionTitleEl) ? ionTitleEl.shadowRoot.querySelector('.toolbar-title') : null,
                ionButtonsEl: Array.from(toolbar.querySelectorAll('ion-buttons')) || []
            };
        }) || [[]]
    };
};
const handleContentScroll = (scrollEl, scrollHeaderIndex) => {
    core.readTask(() => {
        const scrollTop = scrollEl.scrollTop;
        const scale = helpers.clamp(1, 1 + (-scrollTop / 500), 1.1);
        core.writeTask(() => {
            scaleLargeTitles(scrollHeaderIndex.toolbars, scale);
        });
    });
};
const setToolbarBackgroundOpacity = (toolbar, opacity) => {
    if (opacity === undefined) {
        toolbar.background.style.removeProperty('--opacity');
    }
    else {
        toolbar.background.style.setProperty('--opacity', opacity.toString());
    }
};
const handleToolbarBorderIntersection = (ev, mainHeaderIndex) => {
    if (!ev[0].isIntersecting) {
        return;
    }
    const scale = ((1 - ev[0].intersectionRatio) * 100) / 75;
    setToolbarBackgroundOpacity(mainHeaderIndex.toolbars[0], (scale === 1) ? undefined : scale);
};
/**
 * If toolbars are intersecting, hide the scrollable toolbar content
 * and show the primary toolbar content. If the toolbars are not intersecting,
 * hide the primary toolbar content and show the scrollable toolbar content
 */
const handleToolbarIntersection = (ev, mainHeaderIndex, scrollHeaderIndex) => {
    core.writeTask(() => {
        handleToolbarBorderIntersection(ev, mainHeaderIndex);
        const event = ev[0];
        const intersection = event.intersectionRect;
        const intersectionArea = intersection.width * intersection.height;
        const rootArea = event.rootBounds.width * event.rootBounds.height;
        const isPageHidden = intersectionArea === 0 && rootArea === 0;
        const leftDiff = Math.abs(intersection.left - event.boundingClientRect.left);
        const rightDiff = Math.abs(intersection.right - event.boundingClientRect.right);
        const isPageTransitioning = intersectionArea > 0 && (leftDiff >= 5 || rightDiff >= 5);
        if (isPageHidden || isPageTransitioning) {
            return;
        }
        if (event.isIntersecting) {
            setHeaderActive(mainHeaderIndex, false);
            setHeaderActive(scrollHeaderIndex);
        }
        else {
            /**
             * There is a bug with IntersectionObserver on Safari
             * where `event.isIntersecting === false` when cancelling
             * a swipe to go back gesture. Checking the intersection
             * x, y, width, and height provides a workaround. This bug
             * does not happen when using Safari + Web Animations,
             * only Safari + CSS Animations.
             */
            const hasValidIntersection = (intersection.x === 0 && intersection.y === 0) || (intersection.width !== 0 && intersection.height !== 0);
            if (hasValidIntersection) {
                setHeaderActive(mainHeaderIndex);
                setHeaderActive(scrollHeaderIndex, false);
                setToolbarBackgroundOpacity(mainHeaderIndex.toolbars[0], 1);
            }
        }
    });
};
const setHeaderActive = (headerIndex, active = true) => {
    core.writeTask(() => {
        if (active) {
            headerIndex.el.classList.remove('header-collapse-condense-inactive');
        }
        else {
            headerIndex.el.classList.add('header-collapse-condense-inactive');
        }
    });
};
const scaleLargeTitles = (toolbars = [], scale = 1, transition = false) => {
    toolbars.forEach(toolbar => {
        const ionTitle = toolbar.ionTitleEl;
        const titleDiv = toolbar.innerTitleEl;
        if (!ionTitle || ionTitle.size !== 'large') {
            return;
        }
        titleDiv.style.transformOrigin = 'left center';
        titleDiv.style.transition = (transition) ? TRANSITION : '';
        titleDiv.style.transform = `scale3d(${scale}, ${scale}, 1)`;
    });
};

const Header = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.collapsibleHeaderInitialized = false;
        /**
         * If `true`, the header will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         *
         * Note: In order to scroll content behind the header, the `fullscreen`
         * attribute needs to be set on the content.
         */
        this.translucent = false;
    }
    async componentDidLoad() {
        await this.checkCollapsibleHeader();
    }
    async componentDidUpdate() {
        await this.checkCollapsibleHeader();
    }
    componentDidUnload() {
        this.destroyCollapsibleHeader();
    }
    async checkCollapsibleHeader() {
        // Determine if the header can collapse
        const hasCollapse = this.collapse === 'condense';
        const canCollapse = (hasCollapse && core.getIonMode(this) === 'ios') ? hasCollapse : false;
        if (!canCollapse && this.collapsibleHeaderInitialized) {
            this.destroyCollapsibleHeader();
        }
        else if (canCollapse && !this.collapsibleHeaderInitialized) {
            const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
            const contentEl = (pageEl) ? pageEl.querySelector('ion-content') : null;
            await this.setupCollapsibleHeader(contentEl, pageEl);
        }
    }
    destroyCollapsibleHeader() {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
            this.intersectionObserver = undefined;
        }
        if (this.scrollEl && this.contentScrollCallback) {
            this.scrollEl.removeEventListener('scroll', this.contentScrollCallback);
            this.contentScrollCallback = undefined;
        }
    }
    async setupCollapsibleHeader(contentEl, pageEl) {
        if (!contentEl || !pageEl) {
            console.error('ion-header requires a content to collapse, make sure there is an ion-content.');
            return;
        }
        this.scrollEl = await contentEl.getScrollElement();
        core.readTask(() => {
            const headers = pageEl.querySelectorAll('ion-header');
            const mainHeader = Array.from(headers).find((header) => header.collapse !== 'condense');
            if (!mainHeader || !this.scrollEl) {
                return;
            }
            const mainHeaderIndex = createHeaderIndex(mainHeader);
            const scrollHeaderIndex = createHeaderIndex(this.el);
            if (!mainHeaderIndex || !scrollHeaderIndex) {
                return;
            }
            setHeaderActive(mainHeaderIndex, false);
            core.readTask(() => {
                const mainHeaderHeight = mainHeaderIndex.el.clientHeight;
                /**
                 * Handle interaction between toolbar collapse and
                 * showing/hiding content in the primary ion-header
                 * as well as progressively showing/hiding the main header
                 * border as the top-most toolbar collapses or expands.
                 */
                const toolbarIntersection = (ev) => { handleToolbarIntersection(ev, mainHeaderIndex, scrollHeaderIndex); };
                this.intersectionObserver = new IntersectionObserver(toolbarIntersection, { threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], rootMargin: `-${mainHeaderHeight}px 0px 0px 0px` });
                this.intersectionObserver.observe(scrollHeaderIndex.toolbars[0].el);
            });
            /**
             * Handle scaling of large iOS titles and
             * showing/hiding border on last toolbar
             * in primary header
             */
            this.contentScrollCallback = () => { handleContentScroll(this.scrollEl, scrollHeaderIndex); };
            this.scrollEl.addEventListener('scroll', this.contentScrollCallback);
        });
        core.writeTask(() => {
            cloneElement('ion-title');
            cloneElement('ion-back-button');
        });
        this.collapsibleHeaderInitialized = true;
    }
    render() {
        const mode = core.getIonMode(this);
        const collapse = this.collapse || 'none';
        return (core.h(core.Host, { role: "banner", class: {
                [mode]: true,
                // Used internally for styling
                [`header-${mode}`]: true,
                [`header-translucent`]: this.translucent,
                [`header-collapse-${collapse}`]: true,
                [`header-translucent-${mode}`]: this.translucent,
            } }));
    }
    get el() { return core.getElement(this); }
    static get style() { return "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md:after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:\"\"}:host-context([dir=rtl]) .header-md:after,[dir=rtl] .header-md:after{left:unset;right:unset;right:0;background-position:right 0 top -2px}.header-collapse-condense,.header-md[no-border]:after{display:none}"; }
};

exports.ion_header = Header;
