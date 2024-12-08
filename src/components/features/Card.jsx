import { motion } from "framer-motion";

import Image from "next/image";
import { Dialog, DialogContent, DialogOverlay } from "../ui/dialog";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { cardVariant } from "../anim";
import CustomButtonVariantTwo from "../ui/CustomButtonVariantTwo";
import { featuresCard } from "@/data";
import { IoIosArrowForward } from "react-icons/io";

const Card = ({ card, idx, isOpen, setIsOpen, onClick, imgData }) => {
  const handleDialogToggle = () => setIsOpen(false);

  const swiperDialogRef = useRef(null);

  const handlePrev = () => {
    if (swiperDialogRef.current) {
      swiperDialogRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperDialogRef.current) {
      swiperDialogRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <div
        // key={card.heading}
        // initial="initial"
        // variants={cardVariant}
        // whileInView="enter"
        className="flex flex-col gap-2 lg:gap-3 max-w-[600px] items-center rounded-md group cursor-pointer"
        onClick={onClick}
      >
        <Image
          src={card.imgUrl}
          alt={card.heading}
          width={650}
          height={900}
          className="max-h-[220px] sm:max-h-[270px] md:max-h-[320px] lg:max-h-[280px] xl:max-h-[350px] 2xl:max-h-[400px] object-cover object-top"
        />

        <div className="w-fit mt-2 lg:mt-3 absolute bottom-4 sm:bottom-6 lg:bottom-8 z-20">
          <CustomButtonVariantTwo
            primary={true}
            buttonLink=""
            buttonPadding="2xl:px-10"
            buttonHeight="h-7 2xl:h-9"
          />
        </div>
      </div>

      {/* Dialog with zoom functionality */}
      <Dialog open={isOpen} onOpenChange={handleDialogToggle}>
        <DialogContent className="flex justify-center items-center max-h-[90vh] overflow-hidden">
          {/* <div className="relative"> */}
          <Swiper
            initialSlide={idx} // Start carousel at clicked card's index
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {imgData.map((data, imageIndex) => (
              <SwiperSlide key={imageIndex}>
                <Image
                  src={data?.imgUrl}
                  alt={`Slide ${imageIndex + 1}`}
                  width={1200}
                  height={900}
                  className="max-h-[90vh] object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* </div> */}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Card;
