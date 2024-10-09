"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { featuresCard } from "@/data";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { IoIosArrowForward } from "react-icons/io";
import FeaturesCardSkeletonLoader from "./FeaturesCardSkeletonLoader";

export default function FeaturesCard({ activeMenuIdx, menuContentLoading }) {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [slides, setSlides] = useState(
    typeof window !== "undefined" && window.innerWidth < 640
      ? 1
      : typeof window !== "undefined" && window.innerWidth < 768
      ? 1.5
      : typeof window !== "undefined" && window.innerWidth < 1024
      ? 1.7
      : 3
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
          ? 1
          : typeof window !== "undefined" && window.innerWidth < 768
          ? 1.5
          : typeof window !== "undefined" && window.innerWidth < 1024
          ? 1.7
          : 3
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

  if (menuContentLoading) {
    return <FeaturesCardSkeletonLoader />; // loading state
  }

  return (
    <div className=" flex justify-center">
      {/* Swiper carousel custom button */}
      <div className="absolute w-full h-full  justify-between items-center gap-5 text-white hidden">
        {/* previous button */}
        <div
          onClick={handlePrev}
          className={`w-8 h-8  xl:w-10 xl:h-10 flex justify-center items-center -ml-8 xl:-ml-14 cursor-pointer ${
            slides === 3 ? "hidden" : "block"
          }`}
        >
          <IoIosArrowForward className="text-[#00FFAE] w-7 h-7 xl:w-10 xl:h-10 rotate-180" />
        </div>
        {/* next button */}
        <div
          onClick={handleNext}
          className={`w-8 h-8  xl:w-10 xl:h-10 flex justify-center items-center -mr-8 xl:-ml-14 cursor-pointer ${
            slides === 3 ? "hidden" : "block"
          }`}
        >
          <IoIosArrowForward className="text-[#00FFAE] w-7 h-7 xl:w-10 xl:h-10" />
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
        className="mySwiper flex justify-center items-center max-w-[300px] sm:max-w-[570px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1170px] 2xl:max-w-[1280px]"
      >
        {featuresCard[activeMenuIdx].map((card, idx) => (
          <SwiperSlide key={idx}>
            <Card key={idx} card={card} idx={idx} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
