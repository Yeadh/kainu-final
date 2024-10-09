"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

const ScrollProvider = ({ children }) => {
  const container = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <div ref={container}>{children}</div>;
};

export default ScrollProvider;
