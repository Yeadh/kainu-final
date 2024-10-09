import Image from "next/image";
import CustomButton from "../ui/CustomButton";
import CustomButtonForLargeAndSmallDevice from "../shared/CustomButtonForLargeAndSmallDevice";

const JoinPartyBanner = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-11 mx-auto">
      {/* content */}
      <div className="flex flex-col items-center gap-1 sm:gap-2 xl:gap-3 2xl:gap-4">
        <h1 className="uppercase font-poppins font-semibold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Join the gaming world
        </h1>
        <p className="capitalize text-[#FCC7FF] text-center text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl ">
          Platform catering to web2 and web3 users.
        </p>
        <div className="xl:w-[170px] 2xl:w-[200px] mt-1.5 sm:mt-1 2xl:mt-2">
          <CustomButtonForLargeAndSmallDevice />
        </div>
      </div>
      {/* image */}
      <div>
        <Image
          width={519}
          height={590}
          src={"/assets/images/joinParty/join-ch.png"}
          alt=""
          className="sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] 2xl:w-full"
        />
      </div>
    </div>
  );
};

export default JoinPartyBanner;
