"use client";

import React, { useEffect, useState } from "react";
import Loading from "@/app/loading";

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loading />;

  return <div>{children}</div>;
};

export default LoadingProvider;
