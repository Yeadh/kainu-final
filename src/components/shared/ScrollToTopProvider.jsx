"use client";

import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopProvider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowScrollBtn(scrollPosition >= window.innerHeight);
  }, [scrollPosition]);

  return (
    <div
      className={`text-white fixed right-12 w-10 h-10 md:w-12 md:h-12 text-base rounded-full bg-[#4000FF] transition-all duration-1000 ease-in-out opacity-0 z-50 flex justify-center items-center cursor-pointer ${
        showScrollBtn ? "opacity-100 bottom-8" : "bottom-[105%] "
      }`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <IoIosArrowUp size={18} color="#fff" />
    </div>
  );
};

export default ScrollToTopProvider;
