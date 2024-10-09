"use client";

import Image from "next/image";
import MultiChainContentBox from "./MultiChainContentBox";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { cardVariants, containerVariants, rightAnimVariant } from "./anim";

const MultiChainContent = () => {
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
    <div className=" mt-8 lg:mt-5 xl:mt-10 2xl:mt-14 flex items-center justify-center md:justify-start md:items-start">
      <div className=" flex md:gap-5 lg:gap-6 items-center">
        <motion.div
          ref={ref} // Attach ref here
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col gap-10 md:gap-16 lg:gap-20 2xl:gap-28"
        >
          {/* 1st card */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col gap-10 group"
          >
            <div className="block md:hidden">
              <div className="flex flex-col items-center gap-2 right-[104px]">
                <span className="text-[10px] md:text-xs 2xl:text-sm text-white font-poppins font-bold">
                  STAPE 1
                </span>
                <Image
                  src={"/assets/icons/multichain-card-icon-2.png"}
                  alt=""
                  width={60}
                  height={60}
                  className="w-12 lg:w-[60px] grayscale"
                />
              </div>
            </div>
            <MultiChainContentBox
              title={"Rewards system"}
              desc={
                "Active gamers on different Chains can participate into web3 events and earn rewards"
              }
            />
          </motion.div>
          {/* 2nd card */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col gap-10 group"
          >
            <div className="block md:hidden">
              <div className="flex flex-col items-center gap-2 right-[104px]">
                <span className="text-[10px] md:text-xs 2xl:text-sm text-white font-poppins font-bold">
                  STAPE 2
                </span>
                <Image
                  src={"/assets/icons/multichain-card-icon-1.svg"}
                  alt=""
                  width={60}
                  height={60}
                  className="w-12 lg:w-[60px] grayscale"
                />
              </div>
            </div>
            <MultiChainContentBox
              title={"Blockchains like"}
              desc={
                "Polygon or Avalanche can particapte and sponsor events or gamers."
              }
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={rightAnimVariant}
          initial="initial"
          whileInView={"enter"}
          className="hidden md:flex gap-5"
        >
          <div className="flex flex-col items-center">
            {/* 1st card circle */}
            <div className="w-7 h-7 2xl:w-10 2xl:h-10 bg-transparent border border-[#00FFAE] rounded-full hover:bg-[#00FFAE] hover:border-none all-transition" />
            {/* line start */}
            <div className="w-[1px] h-[160px] 2xl:h-[245px] bg-[#00FFAE]" />
            {/* line ends */}
            {/* 2nd card circle */}
            <div className="w-7 h-7 2xl:w-10 2xl:h-10 bg-transparent border border-[#00FFAE] rounded-full hover:bg-[#00FFAE] hover:border-none all-transition"></div>
          </div>

          <div className=" flex flex-col justify-between -my-1.5">
            <div className="flex items-center gap-5">
              {/* text */}
              <p className="uppercase font-semibold text-sm 2xl:text-base">
                stape 1
              </p>
              {/* image */}
              <div>
                <Image
                  src={"/assets/images/stape-1.png"}
                  alt=""
                  width={54}
                  height={54}
                  className="grayscale lg:w-10 2xl:w-14"
                />
              </div>
            </div>
            <div className="flex items-center gap-5">
              {/* text */}
              <p className="uppercase font-semibold text-sm 2xl:text-base">
                stape 2
              </p>
              {/* image */}
              <div>
                <Image
                  src={"/assets/images/stape-2.png"}
                  alt=""
                  width={54}
                  height={54}
                  className="grayscale lg:w-10 2xl:w-14"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MultiChainContent;
