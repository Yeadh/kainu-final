"use client";

import { statisticsData } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { leftAnimVariant } from "./anim";
import Link from "next/link";
import CustomButtonVariantTwo from "./ui/CustomButtonVariantTwo";

const Statistics = () => {
  return (
    <section className="py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-28 bg-[#010A0E]">
      <div className="main-container flex flex-col sm:flex-row gap-2 lg:gap-3 2xl:gap-4">
        <motion.div
          variants={leftAnimVariant}
          initial="initial"
          whileInView={"enter"}
          className="flex flex-col gap-2 md:gap-3 lg:gap-4 2xl:gap-5 flex-1"
        >
          <h2 className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.8125rem] font-poppins font-extrabold">
            More <span className="text-[#00FFAE]">Information</span>
          </h2>
          <div className="flex flex-col gap-2">
            <p className="font-poppins text-white capitalize text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Join our community of friendly, motivated people and start earning
               every month and find friends, esport Teams, games and more
            </p>
          </div>
        </motion.div>

        {/* content */}
        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6 lg:gap-7 xl:gap-8 mx-auto flex-1 mt-5 sm:mt-0">
          {statisticsData.map((data, idx) => (
            <Link
              href={data?.socialLink}
              target="_blank"
              rel="norefferer"
              key={idx}
            >
              <CustomButtonVariantTwo
                textLable={data?.label}
                buttonHeight="lg:h-12"
                buttonPadding="lg:px-10"
                buttonLink={data?.socialLink}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Statistics;
