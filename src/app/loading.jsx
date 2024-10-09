"use client";

import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <PulseLoader color="#cf22f1" size={15} speedMultiplier={0.6} />
    </div>
  );
};

export default Loading;
