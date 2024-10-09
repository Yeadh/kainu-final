import { navLinks } from "@/constant";
import { motion } from "framer-motion";
import Link from "next/link";
import { perspectice1, perspectice2 } from "./anim";
import CustomButton from "@/components/ui/CustomButton";
import { button } from "@/data";
import CustomButtonVariantTwo from "@/components/ui/CustomButtonVariantTwo";

const MobileNavOptions = () => {
  return (
    <div className="text-white font-medium text-xl px-6 pt-14 pb-8 bg-black rounded-2xl">
      {navLinks.map((link, i) => {
        return (
          <div key={i} className="mobile-link-container">
            <motion.div
              className="py-1.5"
              custom={i}
              variants={perspectice1}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              <Link href={link.link}>{link.label}</Link>
            </motion.div>
          </div>
        );
      })}

      <div className="flex flex-wrap gap-2 pt-5 sm:hidden">
        <CustomButtonVariantTwo />
      </div>
    </div>
  );
};

export default MobileNavOptions;
