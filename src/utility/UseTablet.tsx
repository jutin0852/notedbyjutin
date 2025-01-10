"use client";
import { useEffect, useState } from "react";

export default function UseIsTablet() {
  const [isTablet, setisTablet] = useState(false);

  useEffect(() => {
    const screenSizeUpdate = () => {
      setisTablet(window.innerWidth < 768);
    };

    screenSizeUpdate();
    window.addEventListener("resize", screenSizeUpdate);

    return () => {
      window.removeEventListener("resize", screenSizeUpdate);
    };
  }, []);

  return isTablet;
}
