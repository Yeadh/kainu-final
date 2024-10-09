"use client";

import { teamData } from "@/data";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { cardVariants, containerVariants } from "../anim";

const Team = () => {
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
    <section className="pt-8 sm:pt-10 md:pt-14 lg:pt-16 xl:pt-20 2xl:pt-28 pb-8 sm:pb-10 md:pb-14 lg:pb-16 xl:pb-20 2xl:pb-4 bg-[#010B0F] team__container">
      <h1 className="uppercase text-white font-semibold font-poppins text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.5rem] text-center mb-6 md:mb-8 xl:mb-9 2xl:mb-10">
        Team & advisor
      </h1>
      <motion.div
        ref={ref} // Attach ref here
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="main-container flex flex-wrap items-center gap-5 md:gap-6 lg:gap-12 xl:gap-10 2xl:gap-16 justify-center"
      >
        {teamData?.map((data, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="flex flex-col gap-3 md:gap-4 xl:gap-5 2xl:gap-6 md:w-[170px] lg:w-[200px] xl:w-[180px] 2xl:w-[250px]"
          >
            <Link href={"#"}>
              <Image
                src={data?.img}
                alt={data?.name}
                width={250}
                height={265}
              />
            </Link>

            <div className="flex flex-col gap-2 md:gap-3 2xl:gap-4">
              <div>
                <Link
                  href={"#"}
                  className="text-white font-poppins text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                >
                  {data?.name}
                </Link>
                <p className="text-[#00FFAE] font-poppins text-[0.625rem] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                  ID: {data?.id}
                </p>

                <div className="flex items-center 2xl:justify-between gap-2 mt-1 md:mt-2 2xl:mt-3">
                  {/* twitch */}
                  <Link
                    href={data?.twitchLink}
                    className="p-2 2xl:p-3 rounded-full bg-[#00FFAE] flex justify-center items-center"
                  >
                    <Image
                      src={"/assets/icons/twitch.svg"}
                      alt="twitch"
                      width={22}
                      height={22}
                      className="w-4 xl:w-5 2xl:w-[22px]"
                    />
                  </Link>
                  {/* facebook */}
                  <Link
                    href={data?.facebookLink}
                    className="p-2 2xl:p-3 rounded-full bg-[#00FFAE] flex justify-center items-center"
                  >
                    <FaFacebookF className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-[22px] 2xl:h-[22px] text-black" />
                  </Link>
                  {/* linkedin */}
                  <Link
                    href={data?.linkedinLink}
                    className="p-2 2xl:p-3 rounded-full bg-[#00FFAE] flex justify-center items-center"
                  >
                    <FaLinkedinIn className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-[22px] 2xl:h-[22px] text-black" />
                  </Link>
                  {/* instagram */}
                  <Link
                    href={data?.instagramLink}
                    className="p-2 2xl:p-3 rounded-full bg-[#00FFAE] flex justify-center items-center"
                  >
                    <Image
                      src={"/assets/icons/insta.svg"}
                      alt="twitch"
                      width={22}
                      height={22}
                      className="w-4 xl:w-5 2xl:w-[22px]"
                    />
                  </Link>
                </div>
              </div>

              <p className="text-[0.625rem] md:text-xs 2xl:text-sm text-white font-poppins max-w-[223px]">
                {data?.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
