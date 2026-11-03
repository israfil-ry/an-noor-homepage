"use client";

import { useEffect, useState } from "react";

export interface HeaderScrollOptions {
  threshold?: number;
}

export function useHeaderScroll(options: HeaderScrollOptions = {}) {
  const { threshold = 10 } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > threshold);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return { isScrolled };
}

