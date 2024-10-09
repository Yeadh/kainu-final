import { featuresBtn } from "@/data";
import CustomButton from "../ui/CustomButton";
import MobileFeaturesHeader from "./MobileFeaturesHeader";

export default function FeaturesHeader({ handleActiveMenuIdx }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="sub-heading font-poppins font-semibold uppercase text-center">
        Features of the <span className="text-[#00FFAE]">gaming Platfrom</span>
      </h1>
      <p className="text-xs xl:text-sm 2xl:text-base font-poppins text-white w-[300px] sm:w-[400px] md:w-[510px] 2xl:w-[750px] text-center capitalize">
        We’ve set on the path to make a gamer’s dream come true by offering an
        advanced Social Gaming Platform catering to both web2 and web3 users.
      </p>

      {/* btn */}
      <div className="flex flex-col gap-2 mt-6 md:mt-8 lg:mt-10">
        <div className="max-w-[300px] sm:max-w-[500px] md:max-w-screen-sm xl:max-w-[1190px] 2xl:max-w-screen-xl mx-auto">
          <MobileFeaturesHeader handleActiveMenuIdx={handleActiveMenuIdx} />
        </div>
        {/* devider */}
        {/* <div className="bg-gradient-to-r from-transparent via-lightBlue to-transparent min-w-[900px] h-[2px]" /> */}
      </div>
    </div>
  );
}
