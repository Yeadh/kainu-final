"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariant, leftAnimVariant, rightAnimVariant } from "./anim";
import MultiChainContent from "./MultiChainContent";

const Multichain = () => {
  return (
    <section className="overflow-hidden py-8 sm:py-10 md:py-14 lg:py-16 xl:py-24 2xl:py-28 relative flex justify-center">
      <div className="bg-gradient-to-r from-[#031015] to-transparent absolute top-0 left-0 w-full h-full z-10" />
      <div className="absolute inset-0 bg-[url('/assets/images/multichain-bg-img.webp')] bg-no-repeat bg-cover filter grayscale z-20 lg:hidden" />

      <div className="hidden lg:block absolute top-0 max-w-[1920px] mx-auto">
        <Image
          src={"/assets/images/multichain-bg-img.webp"}
          alt="background-image"
          width={2400}
          height={720}
          className="grayscale lg:h-[600px] xl:h-[700px] 2xl:h-[900px] object-cover"
        />
      </div>

      <div className="main-container relative z-20 w-full">
        <motion.div
          variants={leftAnimVariant}
          initial="initial"
          whileInView={"enter"}
          className="flex flex-col gap-2 lg:gap-3 2xl:gap-4 items-center md:items-start"
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-poppins uppercase font-semibold">
            Building with <span className="text-[#00FFAE]">multichain</span>{" "}
          </h1>
          <p className="text-xs lg:text-sm 2xl:text-base font-poppins text-white capitalize text-center md:text-left sm:max-w-[500px] md:max-w-[380px] lg:max-w-[450px] xl:max-w-[550px]">
            Our token will be bridge to different chains, to get different benefits from  different chains thats provide web3 solution like Avalanche, IMX, Wax  and more. These Chains can reward users if they use their chain. Also web3 games that are on these chains, can use our system very easy.
          </p>
        </motion.div>

        {/* content */}
        <MultiChainContent />
      </div>
    </section>
  );
};

export default Multichain;
