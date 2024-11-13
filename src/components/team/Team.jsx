"use client";

import { teamData } from "@/data";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { cardVariants, containerVariants } from "../anim";
import { FaXTwitter } from "react-icons/fa6";

const Team = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-50px" }); // Adjust margin or threshold as needed

  const maxWords =
    typeof window !== "undefined" && window?.innerWidth < 1536 ? 60 : 45;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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
        className="main-container flex flex-wrap items-start gap-6 md:gap-6 lg:gap-12 xl:gap-10 2xl:gap-16 justify-center"
      >
        {teamData?.map((data, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="flex flex-col mt-20 md:mt-16 lg:mt-12 xl:mt-8 2xl:mt-6 gap-3 md:gap-4 xl:gap-5 2xl:gap-6"
          >
            <Link
              href={"#"}
              className="border border-white/20 bg-[#0f161b] min-h-[180px] md:min-h-[190px] lg:min-h-[200px] xl:min-w-[250px] xl:min-h-[220px] 2xl:min-w-[270px] 2xl:min-h-[240px] relative"
            >
              <Image
                src={data?.img}
                alt={data?.name}
                width={270}
                height={265}
                className=" absolute bottom-0"
              />
            </Link>

            <div className="flex flex-col gap-2 md:gap-3 2xl:gap-4">
              <div>
                <Link
                  href={"#"}
                  className="text-white font-poppins text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl uppercase"
                >
                  {data?.name}
                </Link>
                <p className="text-[#00FFAE] font-poppins text-[0.625rem] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                  ID: {data?.id}
                </p>

                <div className="flex items-center gap-2 mt-1 md:mt-2 2xl:mt-3">
                  {/* twitter */}
                  {data?.twitterLink && (
                    <Link
                      href={data?.twitterLink}
                      className="p-2 2xl:p-3 rounded-full bg-[#00FFAE] flex justify-center items-center"
                    >
                      {/* <Image
                        src={"/assets/icons/twitch.svg"}
                        alt="twitch"
                        width={22}
                        height={22}
                        className="w-4 xl:w-5 2xl:w-[22px]"
                      /> */}
                      <FaXTwitter className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-[22px] 2xl:h-[22px] text-black" />
                    </Link>
                  )}
                  {/* facebook */}
                  {data?.facebookLink && (
                    <Link
                      href={data?.facebookLink}
                      className="p-2 2xl:p-3 rounded-full bg-[#00FFAE] flex justify-center items-center"
                    >
                      <FaFacebookF className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-[22px] 2xl:h-[22px] text-black" />
                    </Link>
                  )}
                  {/* linkedin */}
                  {data?.linkedinLink && (
                    <Link
                      href={data?.linkedinLink}
                      className="p-2 2xl:p-3 rounded-full bg-[#00FFAE] flex justify-center items-center"
                    >
                      <FaLinkedinIn className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-[22px] 2xl:h-[22px] text-black" />
                    </Link>
                  )}
                  {/* instagram */}
                  {data?.instagramLink && (
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
                  )}
                </div>
              </div>

              <p className="text-[0.625rem] md:text-xs 2xl:text-sm text-white font-poppins max-w-[260px]">
                {isExpanded
                  ? data?.desc
                  : data?.desc?.slice(0, maxWords) +
                    (data?.desc.length > maxWords ? "..." : "")}

                {data?.desc.length > maxWords && (
                  <span
                    onClick={toggleExpand}
                    className="cursor-pointer text-[#00FFAE] hover:underline"
                  >
                    {isExpanded ? " Show less" : " Read more"}
                  </span>
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
