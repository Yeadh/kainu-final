"use client";

import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import collectiveImg from "../../public/assets/images/collective-img.png";
import CustomButtonForLargeAndSmallDevice from "./shared/CustomButtonForLargeAndSmallDevice";
import CustomButtonVariantTwo from "./ui/CustomButtonVariantTwo";
import { bottomAnimVariant, leftAnimVariant } from "./anim";
import { motion } from "framer-motion";

const Collective = () => {
  return (
    <section className="overflow-hidden py-8 sm:py-10 md:py-14 lg:py-16 xl:py-24 2xl:py-28 lg:max-w-[1040px] xl:max-w-[1200px] mx-auto 2xl:max-w-full">
      <div className="main-container 2xl:px-20">
        {/* heading */}
        <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-4 items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-poppins uppercase font-semibold">
            at kainu, <span className="text-[#00FFAE]">about collective</span>
          </h1>
          <p className="text-xs lg:text-sm 2xl:text-base font-poppins text-white text-center sm:max-w-[460px] md:max-w-[580px] lg:max-w-full capitalize">
            We’ve set on the path to make a gamer’s{" "}
            <br className="block sm:hidden" /> dream come true by offering an{" "}
            advanced <br className="block sm:hidden" /> Social{" "}
            <br className="hidden md:block" /> Gaming Platform catering to both
            web2 <br className="block sm:hidden" /> and web3 users.
          </p>
        </div>

        {/* content */}
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center md:items-stretch lg:items-center xl:items-stretch justify-between gap-8 mt-8 lg:mt-14 xl:mt-16 relative">
          <motion.div
            variants={leftAnimVariant}
            initial="initial"
            whileInView={"enter"}
            className="flex flex-col gap-6 xl:gap-10"
          >
            {/* left side cards */}
            <div className="flex items-start gap-7 xl:gap-12 md:relative z-10">
              {/* card */}
              <div className="bg-[#0C181D] border border-white/50 w-fit lg:w-full h-full flex justify-center items-center cursor-pointer">
                <div className="px-7 py-7 xl:px-9 xl:py-9 2xl:px-12 2xl:py-12 rounded-lg flex flex-col items-center gap-2 xl:gap-4">
                  <h3 className="font-poppins font-extrabold text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl uppercase w-fit">
                    Play <span className="text-[#FFE100]">rewards</span>
                  </h3>
                  <p className="desc-text opacity-70 max-w-[360px] md:max-w-[400px] lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[507px] text-center text-white mb-2 md:mb-3">
                    Platform with popular streams. Engage with charismatic
                    personalities, witness epic gameplay, and connect with
                    vibrant community.
                  </p>
                  <CustomButtonVariantTwo
                    textLable="Start playing"
                    buttonPadding="2xl:px-9"
                    buttonHeight="h-8 lg:h-9 2xl:h-10"
                    textSize="2xl:text-base"
                  />
                </div>
              </div>
            </div>
            {/* right side cards */}
            <div className="flex items-end gap-7 xl:gap-12 md:relative z-10">
              {/* card */}
              <div className="bg-[#0C181D] border border-white/50 w-fit lg:w-full h-full flex justify-center items-center cursor-pointer">
                <div className="px-7 py-7 xl:px-9 xl:py-9 2xl:px-12 2xl:py-12 rounded-lg flex flex-col items-center gap-2 xl:gap-4">
                  <h3 className="font-poppins font-extrabold text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl uppercase w-fit">
                    Strategic <span className="text-[#FFE100]">support</span>
                  </h3>
                  <p className="desc-text opacity-70 max-w-[360px] md:max-w-[400px] lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[507px] text-center text-white mb-2 md:mb-3">
                    Platform with popular streams. Engage with charismatic
                    personalities, witness epic gameplay, and connect with
                    vibrant community.
                  </p>

                  <CustomButtonVariantTwo
                    textLable="Start playing"
                    buttonPadding="2xl:px-9"
                    buttonHeight="h-8 lg:h-9 2xl:h-10"
                    textSize="2xl:text-base"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* right side image */}
          <motion.div
            variants={bottomAnimVariant}
            initial="initial"
            whileInView={"enter"}
            className="bg-[#11151b] rounded-md border border-slate-700  flex items-center justify-center"
          >
            <Image
              src={collectiveImg}
              alt=""
              width={800}
              height={600}
              sizes="(max-width: 1280px) 100vw, 50vw"
              placeholder="blur"
              className="w-[450px] xl:w-[570px] 2xl:w-[700px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Collective;
