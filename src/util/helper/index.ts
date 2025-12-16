export const range = (start: number, end: number, step = 1) => {
  const length = Math.ceil((end - start) / step) + 1;
  return Array.from({ length }, (_, i) => start + i * step);
};
