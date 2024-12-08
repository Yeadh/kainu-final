import BookAppCarousel from "./BookAppCarousel";
import BookappCards from "./BookappCards";
import CustomButtonVariantTwo from "./ui/CustomButtonVariantTwo";

export default function Bookapp() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-[#010A0E] to-transparent">
      <div className="main-container py-8 sm:py-10 md:py-14 lg:py-16 xl:py-24 2xl:py-28 flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
        <div className="flex items-center gap-8 justify-center">
          <h2 className="sub-heading font-poppins uppercase font-semibold">
            GAME LAUNCHER <span className=" text-[#00FFAE]">WEB2 & WEB3</span>
          </h2>
        </div>

        {/* cards */}
        <div className="flex justify-center items-center">
          <BookAppCarousel />
        </div>

        {/* btn */}
        <div className="flex justify-center">
          <CustomButtonVariantTwo
            textLable="Go to launcher"
            buttonLink="https://launcher.katanainu.com/"
          />
        </div>
      </div>
    </section>
  );
}
