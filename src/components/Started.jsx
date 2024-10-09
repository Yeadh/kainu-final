"use client";

import { startedData } from "@/data";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { cardVariant, cardVariants, containerVariants } from "./anim";
import { useEffect, useRef } from "react";

const Started = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-50px" }); // Adjust margin or threshold as needed

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="bg-[url('/assets/images/started/get-started-bg.webp')] bg-no-repeat bg-cover relative">
      {/* element */}
      <div className="bg-[#010A0E]/80 absolute top-0 left-0 w-full h-full z-10" />
      {/* content */}
      <div className="main-container py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-28 flex flex-col gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 relative z-20">
        <h2 className="text-center sub-heading uppercase font-poppins font-semibold">
          How to get <span className="text-[#00E5FF]">Started?</span>
        </h2>
        <motion.div
          ref={ref} // Attach ref here
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-8 md:gap-4 lg:gap-6 xl:gap-8"
        >
          {startedData.map((data, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-7"
            >
              <p className="font-poppins text-white font-extrabold text-center uppercase text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Step {idx + 1}
              </p>
              <div className="flex flex-col justify-between gap-4 md:gap-5 lg:gap-6 xl:gap-7 h-full bg-[#172225] border border-white/50 p-1.5">
                <div className="rounded-2xl ">
                  <Image
                    src={data.img}
                    alt={data.title}
                    width={500}
                    height={300}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 lg:gap-2">
                <h3 className="font-poppins font-semibold uppercase text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#54ACD0] -mt-1">
                  {data.title}
                </h3>
                <p className="link-text text-white tracking-wider capitalize">
                  {data.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Started;
