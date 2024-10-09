import CustomButton from "@/components/ui/CustomButton";
import { Button } from "@/components/ui/button";
import { footerLink, footerPost } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";

export default function FooterLinks() {
  return (
    <div className="main-container grid grid-cols-1 md:flex md:flex-wrap md:flex-row lg:flex-nowrap justify-between gap-10 lg:gap-12 xl:gap-14 2xl:gap-6">
      {/* Logos */}
      <div className="flex flex-col gap-3 md:gap-4">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt="Kainu logo"
            width={150}
            height={50}
            className="w-[110px] 2xl:w-[150px]"
          />
        </Link>
        {/* /////// */}
        <div className="flex flex-col gap-4">
          <p className="font-poppins font-semibold text-base lg:text-lg 2xl:text-xl text-[#7A7977] uppercase">
            Don&apos;t miss our latest news
          </p>
          <label
            htmlFor="email"
            className="bg-[#17182a] px-2 py-2 sm:px-3 sm:py-1 lg:px-2 lg:py-2 rounded-lg flex justify-between sm:justify-start items-center gap-3 w-fit"
          >
            <input
              id="email"
              type="email"
              placeholder="Email address..."
              className="bg-transparent outline-none py-3 px-4 placeholder:text-gray-500 placeholder:text-base 2xl:placeholder:text-lg font-poppins font-medium w-[160px] sm:w-[250px] md:w-[230px] lg:w-[250px] xl:w-[300px] 2xl:w-[400px]"
            />

            {/* btn */}
            <div className="max-w-[180px]">
              <Button
                variant="customAnimated"
                className="px-6 rounded-none h-10 sm:h-[2.021rem] md:h-[2.0835rem] lg:h-[2.5835rem] xl:h-[2.875rem]text-[0.625rem] md:text-xs xl:text-sm whitespace-nowrap uppercase font-bold bg-[#00E5FF] text-black flex items-center gap-2"
              >
                Subscribe
                <Image
                  src={"/assets/icons/subscribe.svg"}
                  alt="subscribe"
                  width={20}
                  height={20}
                />
              </Button>
            </div>
          </label>
        </div>

        {/* ////// */}
        <p className="text-base xl:text-lg text-gray-300 font-poppins font-medium uppercase">
          Kainu is a Project from{" "}
          <span className="uppercase text-[#00E5FF]">CHAINVISION GAMES</span>
        </p>
        <p className="text-xs xl:text-base text-[#7A7977] font-medium max-w-[320px] xl:max-w-[450px] 2xl:max-w-[550px]">
          Nothing on this website constitutes financial advice, and it is always
          recommended to consult a qualified financial advisor before
          participating in any token or NFT purchases.
        </p>
        <p className="text-xs xl:text-base text-[#7A7977] font-medium max-w-[320px] xl:max-w-[450px] 2xl:max-w-[550px]">
          Buy Katana Inu NFTs only from katanainu.com or kainu.io subdomains to
          be safe. Check the website&apos;s address for on our main website
          www.katanainu.com and go to the &quot;Minting NFTs&quot; section to
          verify.{" "}
          <span className="text-[#00E5FF]">
            Ask in our telegram or discord channel for confirmation. Avoid other
            websites!
          </span>
        </p>
      </div>

      {/* all links */}
      <div className="flex flex-col sm:flex-row">
        {/* quick link */}
        <div className="flex flex-col gap-4 sm:min-w-[200px] md:min-w-[240px] lg:min-w-[200px] xl:min-w-[250px] 2xl:min-w-[300px] relative">
          <h3 className="font-urbanist font-extrabold text-xl xl:text-2xl">
            Products
          </h3>
          <div className="mt-2 flex flex-col gap-4 2xl:gap-5">
            {footerLink.quickLink.map((link, idx) => (
              <div key={idx} className="w-fit">
                <Link
                  href={"/"}
                  className="text-gray-400 hover:text-[#00E5FF] transition duration-300 ease-in-out font-poppins font-medium text-base xl:text-lg"
                >
                  {link}
                </Link>
                <div className="w-[160px] h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent mt-2" />
              </div>
            ))}
          </div>

          {/* elements */}
          <div className="flex flex-col items-end absolute top-0 right-0">
            {/* element 1 */}
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#00E5FF]/50" />
            {/* element 2 */}
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#00E5FF]/50 to-transparent" />
          </div>
        </div>
        {/* Need help */}
        <div className="flex flex-col gap-4 sm:min-w-[200px] md:min-w-[240px] lg:min-w-[200px] xl:min-w-[250px] 2xl:min-w-[300px] relative mt-8 sm:mt-20">
          <h3 className="font-urbanist font-extrabold text-xl xl:text-2xl">
            Need Help?
          </h3>
          <div className="mt-2 flex flex-col gap-4">
            {footerLink.needHelp.map((link) => (
              <div key={link} className="w-fit">
                <Link
                  href={"/"}
                  className="text-gray-400 hover:text-[#00E5FF] transition duration-300 ease-in-out font-poppins font-medium text-base xl:text-lg"
                >
                  {link}
                </Link>

                <div className="w-[160px] h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent mt-2" />
              </div>
            ))}
          </div>

          {/* elements */}
          <div className="flex flex-col items-end absolute top-0 right-0">
            {/* element 1 */}
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#00E5FF]/50" />
            {/* element 2 */}
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#00E5FF]/50 to-transparent" />
          </div>
        </div>

        {/* social links */}
        <div className="flex flex-col gap-4 mt-8 sm:mt-40">
          <h3 className="font-urbanist font-extrabold text-xl xl:text-2xl">
            Follow us
          </h3>

          {/* social links */}
          <div className="flex flex-wrap items-center mx-auto md:mx-0 gap-4">
            <Link
              href="https://www.facebook.com/profile.php?id=100069383490342"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-md bg-csDarkBlue p-2 flex justify-center items-center"
            >
              <FaFacebook
                size={44}
                className="w-5 md:w-6 xl:w-8 text-white hover:text-purple transition duration-300 ease-in-out"
              />
            </Link>
            <Link
              href="https://twitter.com/katanainu"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-md bg-csDarkBlue p-2 flex justify-center items-center"
            >
              <FaXTwitter
                size={44}
                className="w-5 md:w-6 xl:w-8 text-white hover:text-purple transition duration-300 ease-in-out"
              />
            </Link>
            <Link
              href="https://www.youtube.com/@KatanaInu"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-md bg-csDarkBlue p-2 flex justify-center items-center"
            >
              <FaYoutube
                size={44}
                className="w-5 md:w-6 xl:w-8 text-white hover:text-purple transition duration-300 ease-in-out"
              />
            </Link>
            <Link
              href="https://www.instagram.com/katanainu"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-md bg-csDarkBlue p-2 flex justify-center items-center"
            >
              <AiFillInstagram
                size={44}
                className="w-5 md:w-6 xl:w-8 text-white hover:text-purple transition duration-300 ease-in-out"
              />
            </Link>
            <Link
              href="https://discord.com/invite/katanainu"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-md bg-csDarkBlue p-2 flex justify-center items-center"
            >
              <IoLogoDiscord
                size={44}
                className="w-5 md:w-6 xl:w-8 text-white hover:text-purple transition duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
