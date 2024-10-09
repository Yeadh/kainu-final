import { useEffect, useState, useRef } from "react";

const useInView = (options, once = false) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) {
            observer.disconnect(); // Stop observing after the first intersection if `once` is true
          }
        } else if (!once) {
          setInView(false); // Revert back when out of view if `once` is false
        }
      },
      { ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [once, options]);

  return [ref, inView];
};

export default useInView;
