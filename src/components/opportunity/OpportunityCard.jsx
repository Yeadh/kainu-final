import Image from "next/image";
import Link from "next/link";

const OpportunityCard = ({ card }) => {
  return (
    <Link href={"#"} className="group">
      <div className="bg-[#152328] p-1.5 h-full">
        <div className="overflow-hidden">
          <Image
            src={card?.icon}
            alt={card?.label}
            width={626}
            height={180}
            className="group-hover:scale-110 all-transition"
          />
        </div>
        <div className="px-2 py-7 sm:py-5 2xl:py-7 flex flex-col gap-1 2xl:gap-2">
          <h1 className="uppercase font-poppins font-bold text-lg sm:text-base lg:text-lg 2xl:text-xl">
            {card?.label}
          </h1>
          <p className="text-base sm:text-sm lg:text-base 2xl:text-lg italic text-[#D7FFFF]">
            {card?.desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default OpportunityCard;
