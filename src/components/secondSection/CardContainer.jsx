"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { secondSectionCardData } from "@/data";
import PromotionCard from "../PromotionCard";
import PrimaryCard from "./PrimaryCard";
import { cardVariants, containerVariants } from "../anim";

const CardContainer = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-200px" }); // Adjust margin or threshold as needed

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.section
      className="py-8 sm:py-10 md:py-12 lg:py-14 2xl:py-20 bg-[url('/assets/images/second-section-card/second-section-bg-img.png')] bg-no-repeat bg-cover"
      ref={ref} // Attach ref here
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="xl:max-w-screen-2xl mx-auto">
        <motion.div
          className="main-container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 2xl:gap-10 2xl:px-20"
          variants={containerVariants}
        >
          <motion.div variants={cardVariants}>
            <PrimaryCard />
          </motion.div>
          {secondSectionCardData?.map((card, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <PromotionCard card={card} idx={idx} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CardContainer;
