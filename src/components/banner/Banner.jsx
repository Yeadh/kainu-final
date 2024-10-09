import BannerImage from "./BannerImage";
import BannerLogo from "./BannerLogo";
import BannerTitle from "./BannerTitle";

const Banner = () => {
  return (
    <section className="pb-6 lg:pb-10 xl:pb-20 2xl:pb-40 overflow-hidden relative flex banner">
      {/* kainu text element */}
      <div className="bg-[url('/assets/images/banner/kainu.png')] bg-no-repeat bg-contain absolute top-0 w-full h-full mx-auto max-w-[2000px]" />
      {/* main content */}
      <div className=" pt-20 sm:pt-24 lg:pt-36 xl:pt-44 2xl:pt-60 main-container banner__content flex flex-col justify-center w-full">
        {/* banner container */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-7 sm:gap-8 md:gap-9 lg:gap-0">
          <div className="relative z-20 max-w-[622px]">
            <BannerTitle />
          </div>

          {/* banner image */}
          <div className="lg:absolute right-0">
            <BannerImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
