import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import CanvasController from "../default";
import {
  createCamera,
  createCameraControls,
  createMaterials,
  createRenderer,
  createSplitPlanes,
} from "./creators";
import {
  getIntersectionsFromPointer,
  removeEventListeners,
  setUpEventListeners,
} from "./interaction";
import { getOctant, getOctantPlanes } from "./octants";
import transparentPlanesControls from "./transparentPlanes.controls";

class TransparentPlanes extends CanvasController {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;

  private materials: THREE.MeshBasicMaterial[][];
  private planes: THREE.Mesh[][];
  private planeGroup: THREE.Group = new THREE.Group();

  private cameraControls: OrbitControls;

  private cameraOctant?: number;
  private defaultTransparency = false;

  private lastMouseEvent?: MouseEvent;

  private renderDirty = true;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.controls = transparentPlanesControls(this);

    this.renderer = createRenderer(canvas);
    this.camera = createCamera(canvas);

    this.materials = createMaterials(this.render);

    this.planes = createSplitPlanes(this.materials);
    this.planeGroup.add(...this.planes.flat());
    this.scene.add(this.planeGroup);

    this.cameraControls = createCameraControls(
      this.camera,
      this.canvas,
      this.onCameraMove,
    );

    setUpEventListeners(this.canvas, this.onMouseMove, this.onScroll);

    this.updateRenderOrder();
    this.scalePlaneParts();

    this.animate();
  }

  public dispose(): void {
    super.dispose();
    removeEventListeners(this.canvas, this.onMouseMove, this.onScroll);
  }

  protected resizeCanvas(): void {
    const parent = this.canvas.parentElement;
    if (!parent) return;

    this.renderer.setSize(parent.clientWidth, parent.clientHeight);
    this.camera.aspect = this.canvas.width / this.canvas.height;
    this.camera.updateProjectionMatrix();
    this.forceRender();
  }

  private animate = () => {
    window.requestAnimationFrame(this.animate);

    this.cameraControls.update();

    if (this.renderDirty) this.forceRender();
  };

  public render: () => void = () => {
    this.renderDirty = true;
  };

  public setOpacity: (opacity: number) => void = (opacity: number) => {
    this.materials
      .flat()
      .forEach((material) => material.setValues({ opacity }));
    this.render();
  };

  public setDefaultTransparency: (state: boolean) => void = (
    state: boolean,
  ) => {
    this.defaultTransparency = state;

    if (state) {
      this.planes.flat().forEach((planePart) => {
        // eslint-disable-next-line no-param-reassign
        planePart.renderOrder = 0;
      });
    } else {
      this.updateRenderOrder(true);
    }

    this.render();
  };

  public setSeperatePlaneParts: (state: boolean) => void = (state: boolean) => {
    if (state) {
      const dist = 0.3;

      this.planes[0][0].position.set(-dist, -dist, 0);
      this.planes[0][1].position.set(dist, -dist, 0);
      this.planes[0][2].position.set(-dist, dist, 0);
      this.planes[0][3].position.set(dist, dist, 0);
      this.planes[1][0].position.set(0, -dist, -dist);
      this.planes[1][1].position.set(0, dist, -dist);
      this.planes[1][2].position.set(0, -dist, dist);
      this.planes[1][3].position.set(0, dist, dist);
      this.planes[2][0].position.set(-dist, 0, -dist);
      this.planes[2][1].position.set(dist, 0, -dist);
      this.planes[2][2].position.set(-dist, 0, dist);
      this.planes[2][3].position.set(dist, 0, dist);
    } else {
      this.planes.flat().forEach((planePart) => {
        planePart.position.set(0, 0, 0);
      });
    }

    this.render();
  };

  public setEnableTextures = (state: boolean) => {
    let materialIndex = 1;
    if (state) {
      materialIndex = 0;
    }

    this.planes.forEach((plane, index) => {
      plane.forEach((planePart) => {
        // eslint-disable-next-line no-param-reassign
        planePart.material = this.materials[index][materialIndex];
      });
    });

    this.render();
  };

  private onMouseMove = (e: MouseEvent) => {
    this.lastMouseEvent = e;
  };

  private onScroll = (e: WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      // Stop the event to propagate to the orbit controls if custom control conditions apply
      e.stopPropagation();

      if (e.deltaY === 0) return;
      if (!this.moveIntersectionPoint(e.deltaY)) return;
      this.scalePlaneParts();
      this.updateRenderOrder();

      this.render();
    }
  };

  private onCameraMove = () => {
    this.updateRenderOrder();
    this.render();
  };

  private moveIntersectionPoint = (deltaY: number) => {
    if (!this.lastMouseEvent) return false;
    const lastPointerPosition = {
      x: this.lastMouseEvent.x,
      y: this.lastMouseEvent.y,
    };
    const intersections = getIntersectionsFromPointer(
      lastPointerPosition,
      this.planes.flat(),
      this.canvas,
      this.camera,
    );

    if (!intersections.length) return false;

    const hoveredPlaneIndex = intersections[0].object.userData.index as number;

    const step = deltaY > 0 ? 1 / 100 : -1 / 100;

    const { position } = this.planeGroup;

    switch (hoveredPlaneIndex) {
      case 0:
        position.z = Math.min(1, Math.max(-1, position.z + step));
        break;
      case 1:
        position.x = Math.min(1, Math.max(-1, position.x + step));
        break;
      case 2:
        position.y = Math.min(1, Math.max(-1, position.y + step));
        break;
      default:
        break;
    }

    this.planeGroup.updateMatrixWorld(true);

    return true;
  };

  private scalePlaneParts = () => {
    const intersection = this.planeGroup.position;

    this.planes.forEach((plane, index) => {
      // Get the axes of the scene colinear with the x and y axes of the plane.

      const xAxis: "x" | "y" = ["x", "y", "x"][index] as "x" | "y";
      const yAxis: "y" | "z" = ["y", "z", "z"][index] as "y" | "z";

      // Scale the plane parts to the correct size.

      plane[0].scale.set(1 + intersection[xAxis], 1 + intersection[yAxis], 1);
      plane[1].scale.set(1 - intersection[xAxis], 1 + intersection[yAxis], 1);
      plane[2].scale.set(1 + intersection[xAxis], 1 - intersection[yAxis], 1);
      plane[3].scale.set(1 - intersection[xAxis], 1 - intersection[yAxis], 1);

      // Set the correct uv coordinates.

      const geometryUVs = plane.map(
        (planePart) =>
          (planePart.geometry as THREE.BufferGeometry).getAttribute(
            "uv",
          ) as THREE.BufferAttribute,
      );

      // Width and height of plane quadrant 0.
      // See split plane creation for quadrant locations.
      const width0 = (1 + intersection[xAxis]) / 2;
      const height0 = (1 + intersection[yAxis]) / 2;

      geometryUVs[0].setY(0, height0);
      geometryUVs[0].setXY(1, width0, height0);
      geometryUVs[0].setX(3, width0);
      geometryUVs[0].needsUpdate = true;

      geometryUVs[1].setXY(0, width0, height0);
      geometryUVs[1].setY(1, height0);
      geometryUVs[1].setX(2, width0);
      geometryUVs[1].needsUpdate = true;

      geometryUVs[2].setX(1, width0);
      geometryUVs[2].setY(2, height0);
      geometryUVs[2].setXY(3, width0, height0);
      geometryUVs[2].needsUpdate = true;

      geometryUVs[3].setX(0, width0);
      geometryUVs[3].setXY(2, width0, height0);
      geometryUVs[3].setY(3, height0);
      geometryUVs[3].needsUpdate = true;
    });
  };

  private updateRenderOrder = (forceUpdate = false) => {
    // get the camera position in the local plane group coords
    // (the intersection point is always the origin in the plane group)
    const cameraPosition = this.planeGroup.worldToLocal(
      this.camera.position.clone(),
    );

    const cameraOctant = getOctant(cameraPosition);

    if (this.cameraOctant === cameraOctant && !forceUpdate) return;

    this.cameraOctant = cameraOctant;

    if (this.defaultTransparency) return;

    const renderFirstOctant = 7 - cameraOctant;
    const renderLastOctant = cameraOctant;

    this.planes.flat().forEach((planePart) => {
      // eslint-disable-next-line no-param-reassign
      planePart.renderOrder = 1;
    });

    getOctantPlanes(renderFirstOctant, this.planes).forEach((planePart) => {
      // eslint-disable-next-line no-param-reassign
      planePart.renderOrder = 0;
    });

    getOctantPlanes(renderLastOctant, this.planes).forEach((planePart) => {
      // eslint-disable-next-line no-param-reassign
      planePart.renderOrder = 2;
    });
  };

  private forceRender = () => {
    this.renderDirty = false;

    this.renderer.render(this.scene, this.camera);
  };
}

export default TransparentPlanes;
