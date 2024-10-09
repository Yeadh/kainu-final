"use client";

import { bannerLogo } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { logoVariant } from "./anim";

const BannerLogo = () => {
  return (
    <motion.div
      variants={logoVariant}
      initial="initial"
      whileInView={"enter"}
      className="flex-center gap-4 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16"
    >
      {bannerLogo.map((logo, idx) => (
        <Link href={"#"} key={idx}>
          <Image
            src={logo.icon}
            alt={logo.label}
            width={100}
            height={80}
            className="w-11 h-6 sm:w-10 sm:h-5 md:w-14 md:h-7 lg:w-16 lg:h-10 xl:w-20 xl:h-12 2xl:w-24 2xl:h-16 object-contain"
          />
        </Link>
      ))}
    </motion.div>
  );
};

export default BannerLogo;
