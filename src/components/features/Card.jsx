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
        <Image src={card.imgUrl} alt={card.heading} width={650} height={900} className="max-h-[220px] sm:max-h-[270px] md:max-h-[320px] lg:max-h-[280px] xl:max-h-[350px] 2xl:max-h-[400px] object-cover object-top" />

        {/* btn */}
        {/* <div className="w-fit mt-2 lg:mt-3 md:ml-3 lg:ml-5"> */}
        <div className="w-fit mt-2 lg:mt-3 absolute bottom-4 sm:bottom-6 lg:bottom-8 z-20">
          <CustomButtonVariantTwo
            primary={true}
            buttonLink=""
            buttonPadding="2xl:px-10"
            buttonHeight="h-7 2xl:h-9"
          />
        </div>
      </motion.div>

      {/* Dialog */}
      <Dialog open={isOpen} onOpenChange={handleDialogToggle} className="">
        <DialogOverlay />
        <DialogContent className="flex justify-center items-center max-h-[90vh]">
          <Image
            src={card.imgUrl}
            alt={card.heading}
            width={1200}
            height={900}
            className="max-h-[90vh] object-contain"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Card;
