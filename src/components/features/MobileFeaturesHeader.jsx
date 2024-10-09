"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { featuresBtn } from "@/data";
import CustomButton from "../ui/CustomButton";
import { IoIosArrowForward } from "react-icons/io";

const MobileFeaturesHeader = ({ handleActiveMenuIdx }) => {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [slides, setSlides] = useState(
    typeof window !== "undefined" && window.innerWidth < 640
      ? 2
      : typeof window !== "undefined" && window.innerWidth < 768
      ? 3
      : typeof window !== "undefined" && window.innerWidth < 1280
      ? 5
      : typeof window !== "undefined" && window.innerWidth < 1536
      ? 7
      : 9
  );
  const swiperRef = useRef(null);

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Navigation]);
      setSwiperLoaded(true);
    });

    function resizeCheck() {
      setSlides(
        typeof window !== "undefined" && window.innerWidth < 640
          ? 2
          : typeof window !== "undefined" && window.innerWidth < 768
          ? 3
          : typeof window !== "undefined" && window.innerWidth < 1280
          ? 5
          : typeof window !== "undefined" && window.innerWidth < 1536
          ? 7
          : 9
      );
    }

    window.addEventListener("resize", resizeCheck);

    return () => {
      window.removeEventListener("resize", resizeCheck);
    };
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  if (!swiperLoaded) {
    return <p className="text-white">loading</p>; // loading state
  }

  return (
    <div className="relative flex justify-center">
      {/* Swiper carousel custom button */}
      <div className="absolute w-full h-full flex justify-between items-center gap-5 text-white">
        {/* previous button */}
        <div
          onClick={handlePrev}
          className={`w-8 h-8 flex justify-center items-center -ml-8 cursor-pointer 
          
          `}
        >
          <IoIosArrowForward className="text-[#00FFAE] w-7 h-7 rotate-180" />
        </div>
        {/* next button */}
        <div
          onClick={handleNext}
          className={`w-8 h-8 flex justify-center items-center -mr-8 cursor-pointer 
          
          `}
        >
          <IoIosArrowForward className="text-[#00FFAE] w-7 h-7" />
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={slides}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Navigation]}
        initialSlide={0}
        className="mySwiper flex justify-center items-center"
      >
        {featuresBtn.map((btn, idx) => (
          <SwiperSlide
            key={btn.label}
            className="bg-transparent hover:bg-[#00FFAE] all-transition"
          >
            {/* <CustomButton
              onClick={() => handleActiveMenuIdx(idx)}
              textLabel={btn.label}
              btnBgColor="bg-none"
              borderColor="border-none"
              hoverPerspective="hover:text-[#00E5FF] all-transition"
              textColor="hover:text-[#00E5FF]"
              hoverColor1=""
              hoverColor2=""
              hoverColor3=""
              extraStyle=""
            /> */}
            <p
              onClick={() => handleActiveMenuIdx(idx)}
              className="text-[0.625rem] md:text-xs xl:text-sm whitespace-nowrap uppercase font-semibold text-white hover:text-black all-transition cursor-pointer text-center p-2"
            >
              {btn.label}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileFeaturesHeader;
