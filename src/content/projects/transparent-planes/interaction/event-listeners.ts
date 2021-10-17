export const setUpEventListeners = (
  canvas: HTMLCanvasElement,
  onMouseMove: (e: MouseEvent) => void,
  onScroll: (e: WheelEvent) => void,
) => {
  window.addEventListener("mousemove", onMouseMove);

  canvas.addEventListener("wheel", onScroll);
};

export const removeEventListeners = (
  canvas: HTMLCanvasElement,
  onMouseMove: (e: MouseEvent) => void,
  onScroll: (e: WheelEvent) => void,
) => {
  window.removeEventListener("mousemove", onMouseMove);

  canvas.removeEventListener("wheel", onScroll);
};
