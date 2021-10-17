export const preventDefault: (
  f: (e: PointerEvent) => void,
) => (e: PointerEvent) => void = (f: (e: PointerEvent) => void) => {
  return (e: PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    f(e);
  };
};
