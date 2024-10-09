import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { cardVariant } from "../anim";
import CustomButtonVariantTwo from "../ui/CustomButtonVariantTwo";

const Card = ({ card, idx }) => {
  return (
    <motion.div
      key={card.heading}
      initial="initial"
      variants={cardVariant}
      whileInView="enter"
      className="flex flex-col gap-2 lg:gap-3 max-w-[600px] items-center p-4 rounded-md group cursor-pointer"
    >
      <Image src={card.imgUrl} alt={card.heading} width={650} height={900} />

      {/* btn */}
      {/* <div className="w-fit mt-2 lg:mt-3 md:ml-3 lg:ml-5"> */}
      <div className="w-fit mt-2 lg:mt-3 absolute bottom-8 z-20">
        <CustomButtonVariantTwo
          buttonPadding="2xl:px-10"
          buttonHeight="h-7 2xl:h-9"
        />
      </div>
    </motion.div>
  );
};

export default Card;
