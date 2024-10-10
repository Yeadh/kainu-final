import Link from "next/link";
import { Button } from "./button";

const CustomButtonVariantTwo = ({
  primary = true,
  textLable = "Get started",
  horizontalElementColor = "bg-black",
  qubeElementColor = "bg-black",
  buttonPadding = "2xl:px-8",
  buttonHeight = "sm:h-8 lg:h-9 xl:h-10",
  textSize = "text-[0.625rem] md:text-xs xl:text-sm",
  buttonLink = "",
}) => {
  const ButtonContent = (
    <>
      {/* border element start */}
      <div className="flex justify-between items-center w-[102%] h-1 absolute z-20">
        <div className={`w-2 h-1.5 ${horizontalElementColor}`} />
        <div className={`w-2 h-1.5 ${horizontalElementColor}`} />
      </div>
      {/* border element ends */}
      <Button
        variant={primary ? "customAnimated" : "customAnimatedVersionTwo"}
        className={`px-6 rounded-none hover:text-black whitespace-nowrap uppercase font-bold m-1 relative z-30 2xl:tracking-wider ${buttonPadding} ${buttonHeight} ${textSize} ${
          primary
            ? "bg-[#4000FF] text-[#FFE100] hover:text-black"
            : "bg-[#00ffae] text-black hover:text-[#FFE100]"
        }`}
      >
        {/* qube element start */}
        <div
          className={`absolute top-0 left-0 w-1 h-1 z-40 ${qubeElementColor}`}
        />
        <div
          className={`absolute bottom-0 right-0 w-1 h-1 z-40 ${qubeElementColor}`}
        />
        {/* qube element ends */}

        {/* text */}
        {textLable}
      </Button>
    </>
  );

  return buttonLink ? (
    <Link
      href={buttonLink}
      target={buttonLink && "_blank"}
      rel="noreferrer"
      className="relative border border-[#848589] flex justify-center items-center"
    >
      {ButtonContent}
    </Link>
  ) : (
    <div className="relative border border-[#848589] flex justify-center items-center">
      {ButtonContent}
    </div>
  );
};

export default CustomButtonVariantTwo;
