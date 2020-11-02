import ResizeSensor from "css-element-queries/src/ResizeSensor";

class CanvasHandler {
  private resizeSensor: ResizeSensor;

  constructor(protected canvas: HTMLCanvasElement) {
    this.resizeSensor = new ResizeSensor(canvas.parentElement!, () => {
      const parent = this.canvas.parentElement!;

      this.canvas.width = parent.clientWidth - 5;
      this.canvas.height = parent.clientHeight - 5;
    });
  }

  public dispose: () => void = () => {
    this.resizeSensor.detach();
  };
}

export default CanvasHandler;
