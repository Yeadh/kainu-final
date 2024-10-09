import { bookCards } from "@/data";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import BookappCards from "./BookappCards";

export default function Bookapp() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-[#010A0E] to-transparent">
      <div className="main-container py-8 sm:py-10 md:py-14 lg:py-16 xl:py-24 2xl:py-28 flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
        <div className="flex items-center gap-8 justify-center">
          <h2 className="sub-heading font-poppins uppercase font-semibold">
            Explore <span className=" text-[#00FFAE]">App & services</span>
          </h2>
        </div>

        {/* cards */}
        <BookappCards />
      </div>
    </section>
  );
}
