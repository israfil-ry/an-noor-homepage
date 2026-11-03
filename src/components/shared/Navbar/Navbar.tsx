"use client";

import { Logo } from "@/components/shared/Logo";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import { cn } from "@/lib/utils";
import { NavLinks } from "./NavLinks";
import { MobileNavSheet } from "./MobileNavSheet";
import { NavbarDownloadDropdown } from "./NavbarDownloadDropdown";

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
        className
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
          {/* Multi-Store Download Dropdown */}
          <NavbarDownloadDropdown className="hidden sm:inline-flex" />

          {/* Mobile Sheet Navigation Drawer */}
          <MobileNavSheet className="flex md:hidden" />
        </div>
      </div>
    </header>
  );
}
