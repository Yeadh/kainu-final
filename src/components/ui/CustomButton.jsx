"use client";

import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import PerspectiveText from "../shared/PerspectiveText";

const CustomButton = ({
  children,
  hoverColor1 = "bg-[#FFC947]",
  hoverColor2 = "bg-csPrimary",
  hoverColor3 = "bg-csSecondary",
  btnBgColor = "bg-transparent",
  textColor = "text-white",
  borderColor = "border border-gray-400",
  extraStyle = "rounded-lg",
  hoverPerspective = "",
  textLabel,
  ...attributes
}) => {
  const circle = useRef(null);
  const timeline = useRef(gsap.timeline({ paused: true }));
  let timeoutId = null;
  // useEffect(() => {
  //   if (timeline.current) {
  //     timeline.current = gsap.timeline({ paused: true });
  //     timeline.current
  //       .to(
  //         circle.current,
  //         {
  //           top: "-170%",
  //           width: "240%",
  //           height: "250%",
  //           duration: 0.4,
  //           ease: "power3.in",
  //         },
  //         "enter"
  //       )
  //       .to(
  //         circle.current,
  //         { top: "-295%", width: "125%", height: "100%", duration: 0.4 },
  //         "exit"
  //       );
  //   }
  // }, []);
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Only run the animation on screens wider than 768px (for example)
      if (timeline.current) {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current
          .to(
            circle.current,
            {
              top: "-170%",
              width: "240%",
              height: "250%",
              duration: 0.4,
              ease: "power3.in",
            },
            "enter"
          )
          .to(
            circle.current,
            { top: "-295%", width: "125%", height: "100%", duration: 0.4 },
            "exit"
          );
      }
    });

    return () => {
      // Clean up the matchMedia
      mm.revert();
    };
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline?.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline?.current?.play();
    }, 300);
  };

  return (
    <div
      className={`cursor-pointer relative flex justify-center items-center px-6 py-3 sm:py-2 lg:py-3 customButton ${btnBgColor} ${borderColor} ${extraStyle}`}
      style={{ overflow: "hidden" }}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      {...attributes}
    >
      {children ? (
        children
      ) : (
        <PerspectiveText
          label={textLabel}
          textColor={textColor}
          hoverPerspective={hoverPerspective}
        />
      )}

      <div
        ref={circle}
        className="w-full h-[150%] absolute rounded-[50%] top-[102%]"
      >
        <div
          className={`${hoverColor1} w-full h-full rounded-[50%] absolute top-0`}
        />
        <div
          className={`${hoverColor2} w-full h-full rounded-[50%] absolute top-7`}
        />
        <div
          className={`${hoverColor3} w-full h-full rounded-[50%] absolute top-16`}
        />
      </div>
    </div>
  );
};

export default CustomButton;
