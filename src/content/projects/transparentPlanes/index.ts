import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import CanvasController from "../default";
import { animate, forceRender } from "./animation";
import {
  createCamera,
  createCameraControls,
  createMaterials,
  createRenderer,
  createSplitPlanes,
} from "./creators";
import { removeEventListeners, setUpEventListeners } from "./interaction";
import {
  getOctant,
  getOctantPlanes,
  moveIntersectionPoint,
  scalePlaneParts,
} from "./octants";
import transparentPlanesControls from "./transparentPlanes.controls";
import {
  updateDefaultOpacity,
  updateOpacity,
  updatePlaneSeparation,
  updateTextureState,
} from "./updaters";

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

    this.renderer.setAnimationLoop(this.animate);
  }

  public dispose(): void {
    super.dispose();
    removeEventListeners(this.canvas, this.onMouseMove, this.onScroll);
    this.renderer.setAnimationLoop(null);
    this.renderer.dispose();
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
    animate(this.cameraControls, this.renderDirty, this.forceRender);
  };

  public render: () => void = () => {
    this.renderDirty = true;
  };

  public setOpacity: (opacity: number) => void = (opacity: number) => {
    updateOpacity(opacity, this.materials);
    this.render();
  };

  public setDefaultTransparency: (state: boolean) => void = (
    state: boolean,
  ) => {
    this.defaultTransparency = state;
    updateDefaultOpacity(state, this.planes, this.updateRenderOrder);
    this.render();
  };

  public setSeperatePlaneParts: (state: boolean) => void = (state: boolean) => {
    updatePlaneSeparation(state, this.planes);
    this.render();
  };

  public setEnableTextures: (state: boolean) => void = (state: boolean) => {
    updateTextureState(state, this.planes, this.materials);
    this.render();
  };

  private onMouseMove = (e: MouseEvent) => {
    this.lastMouseEvent = e;
  };

  private onScroll = (e: WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      // Stop the event to propagate to the orbit controls if custom control conditions apply
      e.stopPropagation();
      e.preventDefault();

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
    return moveIntersectionPoint(
      deltaY,
      this.lastMouseEvent,
      this.planes,
      this.canvas,
      this.camera,
      this.planeGroup,
    );
  };

  private scalePlaneParts = () => {
    scalePlaneParts(this.planeGroup, this.planes);
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

    forceRender(this.renderer, this.scene, this.camera);
  };
}

export default TransparentPlanes;
