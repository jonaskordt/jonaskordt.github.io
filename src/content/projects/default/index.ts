import ResizeSensor from "css-element-queries/src/ResizeSensor";

import Controls, { noControls } from "../../../lib/types/controls";

class CanvasController {
  public controls: Controls = noControls;

  private resizeSensor: ResizeSensor;

  constructor(
    protected canvas: HTMLCanvasElement,
    protected updateUI: () => void,
  ) {
    this.resizeSensor = new ResizeSensor(canvas.parentElement!, () =>
      this.resizeCanvas(),
    );
  }

  public dispose(): void {
    this.resizeSensor.detach();
  }

  protected resizeCanvas(): void {
    const parent = this.canvas.parentElement;
    if (!parent) return;

    this.canvas.width = parent.clientWidth - 2;
    this.canvas.height = parent.clientHeight - 2;
  }
}

export default CanvasController;
