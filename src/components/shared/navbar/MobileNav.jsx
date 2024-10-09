"use client";
import { useRef, useState } from "react";
// import Hamburger from "./Hamburger";
import { AnimatePresence, motion } from "framer-motion";
import useOutSideClick from "@/hooks/useOutsideClick";
import Hamburger from "./Hamburger";
import { mobileNavVariants } from "./anim";
import MobileNavOptions from "./MobileNavOptions";
// import MobileNavOptions from "./MobileNavOptions";

export default function MobileNav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navRef = useRef(null);

  // closing mobile navbar on outside click
  useOutSideClick(navRef, handleShowMobileNav);

  function handleShowMobileNav() {
    if (mobileNavOpen) {
      setMobileNavOpen(false);
    }
  }

  return (
    <div ref={navRef} className="relative">
      <Hamburger
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <motion.div
        variants={mobileNavVariants}
        initial="initial"
        animate={mobileNavOpen ? "open" : "closed"}
        className="text-black absolute z-40 bg-[#000000] border border-[#1a1a1a] top-2 right-2 rounded-2xl"
      >
        <AnimatePresence>
          {mobileNavOpen && <MobileNavOptions />}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
