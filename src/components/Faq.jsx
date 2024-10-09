import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <section className="py-8 sm:py-10 md:py-14 lg:py-16 xl:py-24 2xl:py-32">
      <div className="main-container flex flex-col justify-center gap-6 md:gap-8 xl:gap-10 sm:max-w-[380px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[700px] 2xl:max-w-[800px]">
        <div className="flex flex-col gap-2 md:gap-3 xl:gap-4">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-poppins uppercase text-start font-extrabold">
            Frequently <span className="text-[#00E5FF]">asked questions</span>
          </h1>
        </div>

        {/* accordions */}
        <FaqAccordion />
      </div>
    </section>
  );
};

export default Faq;
