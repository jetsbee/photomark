export const storeResetFns = new Set<() => void>();

export const resetAllStores = () => {
  storeResetFns.forEach((resetFn) => {
    resetFn();
  });
};
// Ref. https://github.com/pmndrs/zustand/blob/main/docs/guides/how-to-reset-state.md
// Usage example: storeResetFns.add(() => set(DEFAULT_PROPS));
