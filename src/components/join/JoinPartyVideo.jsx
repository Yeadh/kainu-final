"use client";

import { motion } from "framer-motion";
import { bottomAnimVariant, leftAnimVariant } from "../anim";

const JoinPartyVideo = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-14 xl:gap-16 justify-between items-center w-full 2xl:px-20">
      {/* left content */}
      <motion.div
        variants={leftAnimVariant}
        initial="initial"
        whileInView={"enter"}
        className="flex flex-col gap-2 md:gap-3 lg:gap-4 2xl:gap-5 flex-1"
      >
        <h2 className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.8125rem] font-poppins font-extrabold">
          join the <span className="text-[#00FFAE]">party</span>
        </h2>
        <div className="flex flex-col gap-2">
          <p className="font-poppins text-white capitalize text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            Connecting with a own Profil System for finding friends,
            eSportTeams, Tournaments, Matchmaking, Games, Streams and more. This
            plattform is the dream of all gamers for all Plattforms. Included
            reward system to earn money for beeing active.
          </p>
        </div>
      </motion.div>
      {/* right video */}
      <motion.div
        variants={bottomAnimVariant}
        initial="initial"
        whileInView={"enter"}
        className="flex-1 flex justify-end w-full md:w-auto"
      >
        {/* <div className="">
          <video
            src="https://themebeyond.com/videos/VID_20240627_140233_636.mp4"
            autoPlay
            muted
            loop
            poster="/assets/images/joinParty/media-1.png"
            width={"100%"}
            height={"100%"}
            className="object-cover"
          />
        </div> */}
        {/* baby doge video☝️ */}
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/agaQbuSlyIU?si=SCeN_9zCBMJZyENE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default JoinPartyVideo;
