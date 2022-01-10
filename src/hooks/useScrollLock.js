import { useCallback } from "react";

export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    const page = document.querySelector(".page");
    const scrollBarCompensation = window.innerWidth - page.offsetWidth;
    document.body.style.overflow = "hidden";
    page.style.paddingRight = `${scrollBarCompensation}px`;
  }, []);

  const unlockScroll = useCallback(() => {
    const page = document.querySelector(".page");
    document.body.style.overflow = "";
    page.style.paddingRight = "";
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};
