"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const Example = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 200px", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 2.2], ["25%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[150vh]">
      <div className="sticky top-0 flex lg:pt-32 lg:pb-14 xl:pt-36 xl:pb-16 2xl:pt-48 2xl:pb-20 items-center justify-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Image
          src={card.url}
          alt=""
          width={450}
          height={250}
          sizes="(max-width: 1280px) 100vw, 50vw"
          className="hover:shadow-slate-100/30 hover:shadow-md hover:opacity-80 all-transition"
        />
      </DialogTrigger>
      <DialogContent className="mx-auto">
        <Image
          src={card.url}
          alt=""
          width={450}
          height={250}
          sizes="(max-width: 1280px) 100vw, 50vw"
        />
      </DialogContent>
    </Dialog>
  );
};

export default Example;

const cards = [
  {
    url: "/assets/images/platform/game-1.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/assets/images/platform/game-2.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/assets/images/platform/game-3.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/assets/images/platform/game-4.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/assets/images/platform/game-5.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/assets/images/platform/game-6.png",
    title: "Title 6",
    id: 6,
  },
];
