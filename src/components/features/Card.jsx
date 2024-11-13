// import Image from "next/image";
// import { Button } from "../ui/button";
// import { motion } from "framer-motion";
// import { cardVariant } from "../anim";
// import CustomButtonVariantTwo from "../ui/CustomButtonVariantTwo";
// import { Dialog, DialogContent, DialogOverlay } from "../ui/dialog";
// import { useState, useCallback } from "react";
// import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'

// const Card = ({ card, idx }) => {
//   const [isOpen, setIsOpen] = useState(false);
//     const [isZoomed, setIsZoomed] = useState(false)

//   const handleZoomChange = useCallback(shouldZoom => {
//     setIsZoomed(shouldZoom)
//   }, [])

//   const handleDialogToggle = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
//       <motion.div
//         key={card.heading}
//         initial="initial"
//         variants={cardVariant}
//         whileInView="enter"
//         className="flex flex-col gap-2 lg:gap-3 max-w-[600px] items-center rounded-md group cursor-pointer"
//         onClick={handleDialogToggle} // Open dialog on card click
//       >
//         <Image src={card.imgUrl} alt={card.heading} width={650} height={900} className="max-h-[220px] sm:max-h-[270px] md:max-h-[320px] lg:max-h-[280px] xl:max-h-[350px] 2xl:max-h-[400px] object-cover object-top" />

//         {/* btn */}
//         {/* <div className="w-fit mt-2 lg:mt-3 md:ml-3 lg:ml-5"> */}
//         <div className="w-fit mt-2 lg:mt-3 absolute bottom-4 sm:bottom-6 lg:bottom-8 z-20">
//           <CustomButtonVariantTwo
//             primary={true}
//             buttonLink=""
//             buttonPadding="2xl:px-10"
//             buttonHeight="h-7 2xl:h-9"
//           />
//         </div>
//       </motion.div>

//       {/* Dialog */}
//       <Dialog open={isOpen} onOpenChange={handleDialogToggle} className="">
//         <DialogOverlay />
//         <DialogContent className="flex justify-center items-center max-h-[90vh]">
//           <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
//             <Image
//               src={card.imgUrl}
//               alt={card.heading}
//               width={1200}
//               height={900}
//               className="max-h-[90vh] object-contain"
//             />
//           </ControlledZoom>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default Card;

import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariant } from "../anim";
import CustomButtonVariantTwo from "../ui/CustomButtonVariantTwo";
import { Dialog, DialogContent, DialogOverlay } from "../ui/dialog";
import { useState, useRef } from "react";
import { useScrollControl } from "@/app/_scrollProvider";

const Card = ({ card, idx }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { disableScroll, enableScroll } = useScrollControl(); // Get the scroll control functions

  const handleDialogToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      disableScroll(); // Disable Lenis scroll when dialog is open
    } else {
      enableScroll(); // Enable Lenis scroll when dialog is closed
    }
  };

  return (
    <>
      <motion.div
        key={card.heading}
        initial="initial"
        variants={cardVariant}
        whileInView="enter"
        className="flex flex-col gap-2 lg:gap-3 max-w-[600px] items-center rounded-md group cursor-pointer"
        onClick={handleDialogToggle}
      >
        <Image
          src={card.imgUrl}
          alt={card.heading}
          width={650}
          height={900}
          className="max-h-[220px] sm:max-h-[270px] md:max-h-[320px] lg:max-h-[280px] xl:max-h-[350px] 2xl:max-h-[400px] object-cover object-top"
        />

        <div className="w-fit mt-2 lg:mt-3 absolute bottom-4 sm:bottom-6 lg:bottom-8 z-20">
          <CustomButtonVariantTwo
            primary={true}
            buttonLink=""
            buttonPadding="2xl:px-10"
            buttonHeight="h-7 2xl:h-9"
          />
        </div>
      </motion.div>

      {/* Dialog with zoom functionality */}
      <Dialog open={isOpen} onOpenChange={handleDialogToggle}>
        <DialogOverlay />
        <DialogContent className="flex justify-center items-center max-h-[90vh] overflow-hidden">
          <div className="relative">
            <Image
              src={card.imgUrl}
              alt={card.heading}
              width={1200}
              height={900}
              className="max-h-[90vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Card;
