import Image from "next/image";

const MultiChainContentBox = ({ title, desc }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-3 md:gap-0">
      <div className="bg-gradient-to-r from-[#0B171C] to-[#142126] border border-white/50 py-6 px-6 lg:py-5 lg:px-5 2xl:py-7 max-w-[650px] flex flex-col justify-center items-center gap-2 lg:gap-1 2xl:gap-4">
        <h2 className=" uppercase text-base sm:text-lg lg:text-lg 2xl:text-3xl font-poppins font-semibold text-[#00FFAE]">
          {title}
        </h2>
        <p className="capitalize text-[0.625rem] sm:text-xs lg:text-xs 2xl:text-xl text-white text-center sm:max-w-[320px] lg:max-w-[320px] 2xl:max-w-[520px]">
          {desc}
        </p>
      </div>
      {/* arrow */}
      <div className="flex gap-2">
        <Image
          src={"/assets/icons/arrow-right.svg"}
          alt="arrow"
          width={64}
          height={4}
          className="rotate-90 md:rotate-0 mb-6 md:mb-0"
        />
      </div>
    </div>
  );
};

export default MultiChainContentBox;
