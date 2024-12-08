import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent } from "./ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { bookCards } from "@/data";

const BookAppSingleCard = ({ card, idx, isOpen, setIsOpen, onClick }) => {
  const handleDialogToggle = () => setIsOpen(false);

  return (
    <>
      <div
        href={"#"}
        key={card.heading}
        onClick={onClick}
        className="cursor-pointer"
      >
        <div className=" flex flex-col justify-center items-center relative rounded-lg overflow-hidden">
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
            className="max-h-[220px] sm:max-h-[270px] md:max-h-[320px] lg:max-h-[280px] xl:max-h-[350px] 2xl:max-h-[400px] object-cover object-top"
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
            {bookCards.map((data, imageIndex) => (
              <SwiperSlide key={imageIndex}>
                <Image
                  src={data?.img}
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

export default BookAppSingleCard;
