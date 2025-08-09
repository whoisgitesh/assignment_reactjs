import React from "react";
import { useState, useEffect } from "react";
const useHeader = () => {
  const [showHeaderTop, setShowHeaderTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeaderTop(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showHeaderTop;
};
export default useHeader;
