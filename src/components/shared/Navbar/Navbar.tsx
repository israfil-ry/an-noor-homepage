"use client";

import { Logo } from "@/components/shared/Logo";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import { cn } from "@/lib/utils";
import { NavLinks } from "./NavLinks";
import { MobileNavSheet } from "./MobileNavSheet";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { HeartIcon } from "@hugeicons/core-free-icons";

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { isScrolled } = useHeaderScroll({ threshold: 12 });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md shadow-xs py-3"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm py-4",
        className,
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Logo variant="navbar" priority />

        {/* Center Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-1">
          <NavLinks />
        </div>

        {/* Right Action Group */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Link
            href="/donate"
            className="group inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-full bg-primary px-3.5 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary-hover active:scale-[0.98] cursor-pointer select-none"
            aria-label="Support AnNoor"
          >
            <HugeiconsIcon
              icon={HeartIcon}
              size={15}
              color="#FDA4AF"
              strokeWidth={1.8}
              className="animate-pulse [&_path]:fill-current"
            />
            <span>Support AnNoor</span>
          </Link>

          {/* Mobile Sheet Navigation Drawer */}
          <MobileNavSheet className="flex md:hidden" />
        </div>
      </div>
    </header>
  );
}
