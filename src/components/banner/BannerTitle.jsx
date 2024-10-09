"use client";

import { leftAnimVariant } from "../anim";
import CustomButtonForLargeAndSmallDevice from "../shared/CustomButtonForLargeAndSmallDevice";
import CustomButton from "../ui/CustomButton";
import CustomButtonVariantTwo from "../ui/CustomButtonVariantTwo";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const BannerTitle = () => {
  return (
    <motion.div
      variants={leftAnimVariant}
      initial="initial"
      whileInView={"enter"}
      viewport={{
        once: true,
      }}
      className="flex flex-col gap-1 2xl:gap-2"
    >
      <p className="font-poppins uppercase tracking-wider text-xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#97DDFA] pb-1 xl:pb-2 font-bold">
        Kainu for gamers
      </p>
      {/* heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-[2.5rem] 2xl:text-[2.8125rem] xl:leading-[1] 2xl:leading-[1] uppercase text-left font-poppins whitespace-nowrap">
        <span>social media</span>{" "}
        <span className="text-[#00FFAE]">
          gaming <br /> platform
        </span>{" "}
        for
      </h1>
      <h2 className="capitalize font-poppins text-xs sm:text-sm md:text-base lg:text-sm xl:text-lg 2xl:text-xl font-semibold pt-2 xl:pt-3 whitespace-nowrap text-left">
        web2 and with rewards & more
      </h2>
      {/* sub title */}
      <p className="font-poppins text-xs sm:text-sm md:text-base lg:text-sm xl:text-lg 2xl:text-xl text-white whitespace-nowrap text-left capitalize">
        A world for Gamers, streamers, eSports and for Games <br /> under one
        plattform.
      </p>

      {/* cta btn */}
      <div className="flex items-center gap-4 mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-9">
        {/* <CustomButtonForLargeAndSmallDevice /> */}
        {/* <Button
          variant="customAnimated"
          className="px-6 rounded-none border h-10 sm:h-[2.021rem] md:h-[2.0835rem] lg:h-[2.5835rem] xl:h-[2.875rem] hover:text-black text-[0.625rem] md:text-xs xl:text-sm whitespace-nowrap uppercase font-bold"
        >
          Watch Together
        </Button> */}
        <CustomButtonVariantTwo primary={true} />
        <CustomButtonVariantTwo primary={false} textLable="Watch Together" />
      </div>
    </motion.div>
  );
};

export default BannerTitle;
