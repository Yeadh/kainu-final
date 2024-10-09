import CustomButton from "../ui/CustomButton";

const CustomButtonForLargeAndSmallDevice = ({ btnLabel = "Get started" }) => {
  return (
    <div>
      <div className="hidden sm:block">
        <CustomButton
          textLabel={btnLabel}
          btnBgColor="bg-[#F264FF]"
          borderColor="border"
          hoverColor1="bg-black"
          hoverColor2="bg-sky-300"
          hoverColor3="bg-[#F264FF]"
          extraStyle="rounded-none"
          textColor="text-black "
        />
      </div>
      <div className="block sm:hidden">
        <CustomButton
          btnBgColor="bg-[#F264FF]"
          borderColor="border"
          hoverColor1="bg-black"
          hoverColor2="bg-sky-300"
          hoverColor3="bg-[#F264FF]"
          extraStyle="rounded-none hover:bg-[#00E5FF] all-transition"
          textColor="text-black"
        >
          <p className="font-bold text-black text-[0.625rem] md:text-xs xl:text-sm whitespace-nowrap uppercase">
            {btnLabel}
          </p>
        </CustomButton>
      </div>
    </div>
  );
};

export default CustomButtonForLargeAndSmallDevice;
