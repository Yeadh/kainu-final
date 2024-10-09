"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { bottomAnimVariant } from "../anim";
import bannerBgImg from "../../../public/assets/images/banner/kainu-banner.png";

const BannerImage = () => {
  return (
    <motion.div
      variants={bottomAnimVariant}
      initial="initial"
      whileInView={"enter"}
      viewport={{
        once: true,
      }}
      className="relative"
    >
      {/* shadow element */}
      <div className="absolute w-full h-1/4 left-0 bottom-0 bg-gradient-to-b from-transparent to-[#06171E] z-20" />
      <Image
        src={bannerBgImg}
        alt="kainu character together"
        width={1006}
        height={665}
        priority={true}
        className="relative z-10 lg:max-w-[580px] xl:max-w-[740px] 2xl:max-w-[1006px]"
      />
    </motion.div>
  );
};

export default BannerImage;
