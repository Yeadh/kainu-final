"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef, useState } from "react";

// Create a ScrollContext to control the state of Lenis
const ScrollContext = createContext({
  disableScroll: () => {},
  enableScroll: () => {},
});

const ScrollProvider = ({ children }) => {
  const container = useRef(null);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis();
    setLenis(lenisInstance);

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  const disableScroll = () => {
    if (lenis) {
      lenis.stop(); // Stops the Lenis scroll handling
    }
  };

  const enableScroll = () => {
    if (lenis) {
      lenis.start(); // Resumes Lenis scroll handling
    }
  };

  return (
    <ScrollContext.Provider value={{ disableScroll, enableScroll }}>
      <div ref={container}>{children}</div>
    </ScrollContext.Provider>
  );
};

// Custom hook to use scroll control
export const useScrollControl = () => useContext(ScrollContext);

export default ScrollProvider;
