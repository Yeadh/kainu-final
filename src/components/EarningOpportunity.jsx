"use client";

import { opportunityData } from "@/data";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { cardVariant, cardVariants, containerVariants } from "./anim";
import OpportunityCard from "./opportunity/OpportunityCard";
import { useEffect, useRef } from "react";

const EarningOpportunity = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" }); // Adjust margin or threshold as needed

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <motion.section
      ref={ref} // Attach ref here
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="py-8 sm:py-10 md:py-14 lg:py-16 xl:py-24 2xl:py-28"
    >
      <div className="main-container flex flex-col gap-7 md:gap-8 lg:gap-10 2xl:gap-8 2xl:rounded-3xl">
        <h2 className="text-center sub-heading uppercase xl:leading-tight font-poppins font-semibold">
          Utility of the{" "}
          <span className="text-[#00FFAE] font-extrabold">token</span>...
        </h2>
        {/* data card */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 2xl:gap-10 items-stretch 2xl:mx-24 mx-auto auto-rows-fr"
        >
          {opportunityData.map((data, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <OpportunityCard card={data} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EarningOpportunity;
