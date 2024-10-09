import Image from "next/image";
import CustomButtonForLargeAndSmallDevice from "../shared/CustomButtonForLargeAndSmallDevice";
import CustomButtonVariantTwo from "../ui/CustomButtonVariantTwo";
import Link from "next/link";

const ProjectConcept = () => {
  return (
    <section className="bg-[url('/assets/images/project-int-bg-img.webp')] bg-no-repeat bg-cover py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-28">
      <div className="main-container">
        <div className="flex flex-col justify-center items-center gap-5 sm:gap-4 lg:gap-5 xl:gap-6">
          {/* heading */}
          <h1 className="uppercase  text-center font-poppins font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Project Conceptualization{" "}
            <span className="text-[#00FFAE]">2009</span> Initial Design{" "}
            <span className="text-[#00FFAE]">2010</span>
          </h1>

          {/* content */}
          <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 xl:gap-7">
            {/* image */}
            <div>
              <Image
                src={"/assets/images/project-int-banner-img.png"}
                alt="author"
                width={751}
                height={390}
                className="w-[400px] md:w-[460px] lg:w-[500px] xl:w-full"
              />
            </div>

            {/* text */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8 2xl:gap-10 w-full lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1270px]">
              <p className="text-white capitalize text-xs sm:text-[0.625rem] lg:text-xs xl:text-sm 2xl:text-base lg:tracking-wide text-center">
                The concept for this project was originally conceived in 2009 by
                Marwan Haddad, a seasoned graphic designer with a career
                starting in 2004. The early web designs were personally
                developed by Marwan, showcasing his deep expertise in digital
                design.
              </p>
              <p className="text-white capitalize text-xs sm:text-[0.625rem] lg:text-xs xl:text-sm 2xl:text-base tracking-wide text-center">
                Now, Marwan is relaunching this innovative project with a focus
                on merging Web 2.0 and Web 3.0 technologies. With 8 years of
                experience in blockchain and over 10 years as an
                entrepreneur—including the last 3 years as the Founder of Katana
                Inu—Marwan is well-positioned to bring this forward-thinking
                project to life in today’s digital landscape.
              </p>
            </div>
          </div>

          {/* btn */}
          <Link href={"#"} className="sm:mt-3 lg:mt-0">
            <CustomButtonVariantTwo
              primary={false}
              buttonPadding="xl:px-9 2xl:px-10"
              buttonHeight="h-8 md:h-9 xl:h-11 2xl:h-12"
              textSize="text-[0.625rem] md:text-xs xl:text-base 2xl:text-lg"
              textLable="to the 2009 webdesign"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectConcept;
