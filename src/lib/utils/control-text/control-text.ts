export const controlText: (controls: string[]) => string = (
  controls: string[],
) =>
  controls
    .map((control) => (control.length === 1 ? control.toUpperCase() : control))
    .join(" + ");
