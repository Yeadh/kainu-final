import CustomButtonVariantTwo from "../ui/CustomButtonVariantTwo";
import ChainTransaction from "./ChainTransaction";
import Games from "./Games";
import LiveStreams from "./LiveStreams";
import TotalRegistered from "./TotalRegistered";

const DashboardPreview = () => {
  return (
    <section className="pt-8 sm:pt-10 md:pt-14 lg:pt-16 xl:pt-20 2xl:pt-28 pb-8 sm:pb-10 md:pb-14 lg:pb-16 xl:pb-20 2xl:pb-10 bg-[#011219]">
      <div className="main-container flex flex-col w-full items-center gap-5 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-7 lg:gap-12 xl:gap-8 2xl:gap-16 w-full">
          <TotalRegistered />
          <ChainTransaction />
          <LiveStreams />
          <Games />
        </div>

        <CustomButtonVariantTwo primary={false} textLable="Go to dashboard" />
      </div>
    </section>
  );
};

export default DashboardPreview;
