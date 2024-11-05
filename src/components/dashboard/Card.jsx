const Card = ({ title = "", data = "000" }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 md:gap-4 lg:gap-5 xl:gap-5 2xl:gap-6 w-full h-full bg-[#081920] border border-white/20 px-6 py-8 2xl:px-8 2xl:py-10">
      <p className="font-poppins font-semibold uppercase text-lg 2xl:text-xl text-[#00FFAE]">
        {title}
      </p>
      <p className="font-poppins font-semibold uppercase text-2xl 2xl:text-3xl text-white">
        {data}
      </p>
    </div>
  );
};

export default Card;
