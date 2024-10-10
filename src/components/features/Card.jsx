import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { cardVariant } from "../anim";
import CustomButtonVariantTwo from "../ui/CustomButtonVariantTwo";
import { Dialog, DialogContent, DialogOverlay } from "../ui/dialog";
import { useState } from "react";

const Card = ({ card, idx }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <motion.div
        key={card.heading}
        initial="initial"
        variants={cardVariant}
        whileInView="enter"
        className="flex flex-col gap-2 lg:gap-3 max-w-[600px] items-center rounded-md group cursor-pointer"
        onClick={handleDialogToggle} // Open dialog on card click
      >
        <Image src={card.imgUrl} alt={card.heading} width={650} height={900} />

        {/* btn */}
        {/* <div className="w-fit mt-2 lg:mt-3 md:ml-3 lg:ml-5"> */}
        <div className="w-fit mt-2 lg:mt-3 absolute bottom-8 z-20">
          <CustomButtonVariantTwo
            buttonLink=""
            buttonPadding="2xl:px-10"
            buttonHeight="h-7 2xl:h-9"
          />
        </div>
      </motion.div>

      {/* Dialog */}
      <Dialog open={isOpen} onOpenChange={handleDialogToggle}>
        <DialogOverlay />
        <DialogContent className="flex justify-center items-center">
          <Image
            src={card.imgUrl}
            alt={card.heading}
            width={650}
            height={900}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Card;
