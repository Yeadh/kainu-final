import Image from "next/image";
import Example from "./PlatFormContent";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const GamingPlatform = () => {
  return (
    <section className="pt-8 sm:pt-10 md:pt-14 lg:pt-16 xl:pt-20 2xl:pt-28">
      <div className="main-container">
        <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-4 items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-poppins uppercase font-semibold">
            The new <span className="text-[#00FFAE]">Gaming</span> Platform
          </h1>
          <p className="text-xs lg:text-sm 2xl:text-base font-poppins text-white text-center sm:max-w-[460px] md:max-w-[580px] lg:max-w-full capitalize">
            We’ve set on the path to make a gamer’s{" "}
            <br className="block sm:hidden" /> dream come true by offering an{" "}
            advanced <br className="block sm:hidden" /> Social{" "}
            <br className="hidden md:block" /> Gaming Platform catering to both
            web2 <br className="block sm:hidden" /> and web3 users.
          </p>
        </div>
      </div>

      {/* content */}
      <div className="hidden lg:block">
        <Example />
      </div>
      <div className="grid grid-cols-3 mt-8 lg:mt-14 xl:mt-16 mx-auto lg:hidden pb-8 sm:pb-10 md:pb-12 lg:pb-0">
        {imgData?.map((url, idx) => (
          <Dialog key={idx}>
            <DialogTrigger>
              <Image
                src={url}
                alt=""
                width={450}
                height={250}
                sizes="(max-width: 1280px) 100vw, 50vw"
                className="hover:shadow-slate-100/30 hover:shadow-md all-transition hover:opacity-80"
              />
            </DialogTrigger>
            <DialogContent className="mx-auto">
              <Image
                src={url}
                alt=""
                width={450}
                height={250}
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
      {/* </div> */}
    </section>
  );
};

export default GamingPlatform;

const imgData = [
  "/assets/images/platform/game-1.png",
  "/assets/images/platform/game-2.png",
  "/assets/images/platform/game-3.png",
  "/assets/images/platform/game-4.png",
  "/assets/images/platform/game-5.png",
  "/assets/images/platform/game-6.png",
];
