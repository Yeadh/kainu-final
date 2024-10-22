"use client";

import { bookCards } from "@/data";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { cardVariant, cardVariants, containerVariants } from "./anim";
import Link from "next/link";
import { useEffect, useRef } from "react";

const BookappCards = () => {
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
    <motion.div
      ref={ref} // Attach ref here
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 relative"
    >
      {bookCards.map((card, i) => (
        <Link href={"#"} key={card.heading}>
          <motion.div
            variants={cardVariants}
            className=" flex flex-col justify-center items-center relative rounded-lg overflow-hidden"
          >
            {/* overlay */}
            <div className="bg-gradient-to-b from-transparent to-black absolute w-full h-full left-0 top-0 z-10" />
            {/* content */}
            <div className="absolute bottom-3 z-20">
              <h3 className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-center uppercase font-poppins">
                {card.heading}{" "}
                <span className="text-[#00E5FF]">{card.label}</span>
              </h3>
            </div>

            <Image
              src={card.img}
              alt={card.heading}
              width={640}
              height={500}
              className="max-h-[385px] object-top object-cover"
            />
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};

export default BookappCards;
