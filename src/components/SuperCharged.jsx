"use client";

import Image from "next/image";
import CustomButton from "./ui/CustomButton";
import aiImg from "../../public/assets/images/ai-img.png";
import { motion } from "framer-motion";
import { bottomAnimVariant, leftAnimVariant } from "./anim";
import CustomButtonForLargeAndSmallDevice from "./shared/CustomButtonForLargeAndSmallDevice";
import CustomButtonVariantTwo from "./ui/CustomButtonVariantTwo";

const SuperCharged = () => {
  return (
    <section className="relative overflow-x-hidden overflow-y-hidden bg-gradient-to-r from-[#010A0E] to-transparent">
      <div className="main-container py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20 flex flex-col sm:flex-row items-center justify-around gap-8 md:gap-10 lg:gap-12 relative z-10">
        {/* left content */}
        <motion.div
          variants={leftAnimVariant}
          initial="initial"
          whileInView={"enter"}
          // viewport={{
          //   once: true
          // }}
          className="flex flex-col gap-1 lg:gap-2"
        >
          <p className="font-poppins text-white font-medium text-lg sm:text-xl md:text-2xl md:tracking-wide lg:text-3xl lg:tracking-wide xl:text-[2.5rem] xl:tracking-wide xl:leading-[1] 2xl:text-5xl 2xl:tracking-wider capitalize">
            AI is the <span className="text-[#00FFAE]">key to success</span>
          </p>
          <h3 className="font-poppins font-extrabold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 2xl:leading-[1.1] text-csAccent-foreground md:mb-4 lg:mt-1 lg:mb-5 xl:mt-2 xl:mb-6 2xl:mt-4 2xl:mb-4 uppercase">
            We will implement <span className="text-[#97DDFA]">AI System</span>{" "}
            <br /> To Find Matches
          </h3>
          <p className="font-poppins font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white capitalize">
            Friends,{" "}
            <span className="text-[#97DDFA] font-extrabold">Tournaments</span>{" "}
            and more.
          </p>
          <p className="text-[10px] lg:text-xs xl:text-sm 2xl:text-base text-white sm:max-w-[400px] md:max-w-[310px] lg:max-w-full capitalize">
            We’ve set on the path to make gamer dream come true by offering{" "}
            <br className="hidden lg:block" />
            an advanced Social Media Gaming Platform catering to both web2{" "}
            <br className="hidden lg:block" />
            and web3 users. Kainu Platform is a dream.
          </p>
          {/* btn */}
          <div className="w-fit mt-3 md:mt-4 lg:mt-5 xl:mt-7 2xl:mt-8">
            <CustomButtonVariantTwo
              primary={false}
              textSize=" xl:text-base 2xl:text-lg"
              buttonPadding="xl:px-10 2xl:px-12"
              buttonHeight="h-8 xl:h-10 2xl:h-12"
            />
          </div>
        </motion.div>
        {/* right content */}
        <motion.div
          variants={bottomAnimVariant}
          initial="initial"
          whileInView={"enter"}
          // viewport={{
          //   once: true
          // }}
        >
          <Image
            src={aiImg}
            alt="mine craft avatar for web 2 and web 3"
            width={640}
            height={500}
            sizes="(max-width: 1280px) 100vw, 50vw"
            placeholder="blur"
            className="sm:w-[270px] md:w-[240px] md:h-[240px] lg:w-[350px] lg:h-[350px] xl:w-[420px] xl:h-[420px] 2xl:w-[500px] 2xl:h-[500px] border border-white/50 px-3 py-2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SuperCharged;
