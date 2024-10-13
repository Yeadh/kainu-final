import Image from "next/image";
import Link from "next/link";

const PromotionCard = ({ card, idx }) => {
  return (
    <Link href={"#"} className="p-1.5 h-full">
      <div>
        <Image
          src={card?.img}
          alt={card?.headingPrimary}
          width={626}
          height={180}
        />
      </div>
      <div className="px-2 py-2 sm:py-3 2xl:py-4 flex flex-col items-center">
        <h1
          className="uppercase font-poppins font-bold text-lg sm:text-base lg:text-lg 2xl:text-xl"
          style={{
            color: `${idx === 4 ? "#00FFAE" : "#FFFFFF"}`,
          }}
        >
          {card?.headingPrimary}{" "}
          <span
            style={{
              color: `${idx !== 4 ? "#00FFAE" : "#FFFFFF"}`,
            }}
          >
            {card?.headingSecondary}
          </span>
        </h1>
        <p className="text-base sm:text-sm lg:text-sm 2xl:text-base italic text-center text-white">
          {card?.desc}
        </p>
      </div>
    </Link>
  );
};

export default PromotionCard;
