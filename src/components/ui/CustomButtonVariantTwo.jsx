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
  buttonLink = "#",
}) => {
  return (
    <>
      {primary ? (
        <Link
          href={buttonLink}
          target="_blank"
          rel="norefferer"
          className="relative border border-[#848589] flex justify-center items-center"
        >
          {/* border element start */}
          <div className="flex justify-between items-center w-[102%] h-1 absolute z-20">
            <div className={`w-2 h-1.5 ${horizontalElementColor}`} />
            <div className={`w-2 h-1.5 ${horizontalElementColor}`} />
          </div>
          {/* border element ends */}
          <Button
            variant="customAnimated"
            className={`px-6 rounded-none hover:text-black whitespace-nowrap uppercase font-bold bg-[#54ACD0] m-1 relative z-30 2xl:tracking-wider ${buttonPadding} ${buttonHeight} ${textSize} ${
              primary
                ? "text-white hover:text-black"
                : "text-black hover:text-white"
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
        </Link>
      ) : (
        <Link
          href={buttonLink}
          target="_blank"
          rel="norefferer"
          className="relative border border-[#848589] flex justify-center items-center"
        >
          {/* border element start */}
          <div className="flex justify-between items-center w-[102%] h-1 absolute z-20">
            <div className={`w-2 h-1.5 ${horizontalElementColor}`} />
            <div className={`w-2 h-1.5 ${horizontalElementColor}`} />
          </div>
          {/* border element ends */}
          <Button
            variant="customAnimatedVersionTwo"
            className={`px-6 rounded-none whitespace-nowrap uppercase font-bold bg-[#00ffae] m-1 relative z-30 2xl:tracking-wider ${buttonPadding} ${buttonHeight} ${textSize} ${
              primary
                ? "text-white hover:text-black"
                : "text-black hover:text-white"
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
        </Link>
      )}
    </>
  );
};

export default CustomButtonVariantTwo;
