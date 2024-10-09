"use client";

import { useState } from "react";
import FeaturesCard from "./FeaturesCard";
import FeaturesHeader from "./FeaturesHeader";

export default function Features() {
  const [activeMenuIdx, setActiveMenuIdx] = useState(0);
  const [menuContentLoading, setMenuContentLoading] = useState(false);

  const handleActiveMenuIdx = (idx) => {
    setMenuContentLoading(true);
    setActiveMenuIdx(idx);
    setTimeout(() => {
      setMenuContentLoading(false);
    }, 1500); // simulate loading delay for demonstration purposes. In a real-world scenario, this would be replaced with an API call or data fetching mechanism.
  };

  return (
    <section className="main-container pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 2xl:pt-24 overflow-hidden 2xl:px-44">
      <div className="flex flex-col justify-center items-center gap-5 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
        <FeaturesHeader handleActiveMenuIdx={handleActiveMenuIdx} />
        <FeaturesCard
          activeMenuIdx={activeMenuIdx}
          menuContentLoading={menuContentLoading}
        />
      </div>
    </section>
  );
}
