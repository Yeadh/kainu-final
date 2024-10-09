import Image from "next/image";
import Link from "next/link";

const PrimaryCard = () => {
  return (
    <Link href={"#"} className="p-1.5">
      <div className="relative">
        <Image
          src={"/assets/images/second-section-card/card-1.png"}
          alt={"the super gaming"}
          width={626}
          height={180}
        />
        <p className="text-sm sm:text-[0.625rem] lg:text-xs 2xl:text-sm font-medium absolute bottom-2 left-2 z-10">
          Platform Earning By <span className="text-[#54ACD0]">KAINU</span>
        </p>
      </div>
      <div className="px-2 py-3 sm:py-1.5 2xl:py-2 flex flex-col items-center">
        <h1 className="uppercase font-poppins font-semibold text-xl sm:text-base lg:text-lg 2xl:text-xl">
          THE SUPER <span className="text-[#00FFAE]">GAMING</span>
        </h1>
        <p className="text-sm sm:text-[0.625rem] lg:text-xs 2xl:text-sm text-white italic capitalize text-center">
          We’ve set on the path to make gamer dream come true by offering an
          advanced Social Media Gaming Platform catering to both web2 and web3
          users. Kainu Platform is a dream.
        </p>
      </div>
    </Link>
  );
};

export default PrimaryCard;
