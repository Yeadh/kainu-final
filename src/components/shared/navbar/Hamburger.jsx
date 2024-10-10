import { IoIosClose, IoIosMenu } from "react-icons/io";

const Hamburger = ({ mobileNavOpen, setMobileNavOpen }) => {
  return (
    <div
      onClick={() => setMobileNavOpen((prev) => !prev)}
      className={`${
        mobileNavOpen ? "border border-[#4000FF]" : "bg-[#4000FF]"
      } flex justify-center items-center w-9 h-9 md:w-10 md:h-10 rounded-full  color-transition relative z-50 cursor-pointer`}
    >
      {mobileNavOpen ? (
        <IoIosClose size={24} className="w-4 h-4 text-white" />
      ) : (
        <IoIosMenu size={24} className="w-4 h-4 text-white" />
      )}
    </div>
  );
};

export default Hamburger;
