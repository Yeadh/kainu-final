import CustomButtonVariantTwo from "../ui/CustomButtonVariantTwo";

const JoinGameContent = () => {
  return (
    <div className="flex flex-col items-center gap-2 xl:gap-3 2xl:gap-4">
      <h1 className="uppercase font-semibold font-poppins text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.8125rem] text-center text-white">
        Join the <span className="text-[#00FFAE]">gaming world</span>
      </h1>
      <p className="capitalize text-white font-poppins text-center text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
        Platform catering to web2 and web3 users.
      </p>

      <div className="w-fit mt-1 2xl:mt-3">
        <CustomButtonVariantTwo
          textLable="to the 2009 webdesign"
          textSize="lg:text-base"
          buttonHeight="h-8 lg:h-9 2xl:h-10"
          buttonPadding=" lg:px-9"
          buttonLink="/2010design/html/pcnews.html"
        />
      </div>
    </div>
  );
};

export default JoinGameContent;
