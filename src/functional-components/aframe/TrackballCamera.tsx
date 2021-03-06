import { FunctionalComponent, h } from "@stencil/core";

interface TrackballCameraProps extends FunctionalComponentProps {
  animating: boolean;
  controlPosition: string;
  controlTarget: string;
  dampingFactor: number;
  enabled: boolean;
  far: number;
  fov: number;
  near: number;
  panSpeed: number;
  rotateSpeed: number;
  screenHeight: number;
  screenWidth: number;
  zoomSpeed: number;
}

export const TrackballCamera: FunctionalComponent<TrackballCameraProps> = (
  {
    animating,
    cb,
    controlPosition,
    controlTarget,
    dampingFactor,
    enabled,
    far,
    fov,
    near,
    panSpeed,
    rotateSpeed,
    screenHeight,
    screenWidth,
    zoomSpeed
  },
  _children
) => (
  <a-camera
    fov={fov}
    near={near}
    look-controls="enabled: false"
    far={far}
    id="mainCamera"
    al-cursor="rayOrigin: mouse"
    raycaster="objects: .collidable;"
    al-trackball-control={`
      screenLeft: ${0};
      screenTop: ${0};
      screenWidth: ${screenWidth};
      screenHeight: ${screenHeight};
      rotateSpeed: ${rotateSpeed};
      zoomSpeed: ${zoomSpeed};
      panSpeed: ${panSpeed};
      dynamicDampingFactor: ${dampingFactor};
      controlTarget: ${controlTarget};
      controlPosition: ${controlPosition};
      enabled: ${enabled};
      animating: ${animating}
    `}
    al-control-lights
    ref={ref => cb(ref)}
  />
);
