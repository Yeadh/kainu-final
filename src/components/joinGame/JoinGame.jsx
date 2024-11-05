import Image from "next/image";
import JoinGameContent from "./JoinGameContent";

const JoinGame = () => {
  return (
    <section className="overflow-hidden relative flex banner bg-[#011219]">
      {/* kainu text element */}
      <div className="bg-[url('/assets/images/joinGame-bg.webp')] bg-no-repeat bg-cover absolute top-0 w-full h-full mx-auto max-w-[2000px] block md:hidden opacity-40 sm:opacity-100" />
      {/* main content */}
      <div className=" pt-20 sm:pt-[120px] md:pt-[140px] lg:pt-[250px] xl:pt-[330px] 2xl:pt-[430px] main-container banner__content flex flex-col justify-center w-full join-game__content-container">
        {/* banner container */}
        <div className="flex flex-col lg:flex-row justify-end items-center sm:items-end gap-7 sm:gap-8 md:gap-9 lg:gap-0">
          <div className="relative z-20 max-w-[622px] bottom-5 mb-8 md:mb-14 lg:mb-20 xl:mb-24 2xl:mb-52 join-game__content-pb">
            <JoinGameContent />
          </div>
          {/* banner image */}
          <div className="hidden md:block sm:absolute right-0">
            <div className="relative">
              {/* shadow element */}
              <div className="absolute w-full h-1/4 left-0 bottom-0 bg-gradient-to-b from-transparent to-[#010B0E] z-20" />
              <Image
                src={"/assets/images/joinGame-bg.webp"}
                alt=""
                width={1920}
                height={720}
                priority={true}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinGame;
