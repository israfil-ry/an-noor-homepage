"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, Download01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/shared/Logo";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import { APP_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { NavLinks } from "./NavLinks";
import { MobileNavSheet } from "./MobileNavSheet";

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
          {/* Location Badge */}
          <Badge
            variant="outline"
            className="hidden sm:inline-flex items-center gap-1.5 py-1 px-2.5 text-xs font-normal border-border bg-muted/60 text-muted-foreground"
          >
            <HugeiconsIcon
              icon={Location01Icon}
              size={13}
              strokeWidth={1.5}
              className="text-primary shrink-0"
            />
            <span className="truncate max-w-[100px]">{APP_CONFIG.defaultLocation}</span>
          </Badge>

          {/* Primary CTA Button */}
          <Link
            href={APP_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button
              size="sm"
              className="gap-1.5 rounded-xl bg-primary text-primary-foreground font-medium shadow-xs hover:bg-primary-hover active:scale-[0.98] min-h-[38px] px-3.5 cursor-pointer"
            >
              <HugeiconsIcon icon={Download01Icon} size={14} strokeWidth={1.5} />
              <span>Get The App</span>
            </Button>
          </Link>

          {/* Mobile Sheet Navigation Drawer */}
          <MobileNavSheet className="flex md:hidden" />
        </div>
      </div>
    </header>
  );
}
