import { useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";

let timer: NodeJS.Timeout | null = null;

const debounce = (fn: Function, delay: number) => {
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}; // ref. https://velog.io/@cogito/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%A0%81%EC%9A%A9%EA%B8%B0-1-Intersection-Observer-Debouncing#%EB%94%94%EB%B0%94%EC%9A%B4%EC%8B%B1-%EC%BD%94%EB%93%9C

export const useIntersectionObserver = (handler: Function) => {
  const { ref, inView } = useInView();
  const debouncedHandler = useCallback(
    () => debounce(handler, 300)(),
    [handler]
  );

  useEffect(() => {
    if (inView) {
      debouncedHandler();
    }
  }, [debouncedHandler, inView]);

  return ref;
};
