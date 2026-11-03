"use client";

import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface NavLinksProps {
  className?: string;
  onLinkClick?: () => void;
}

export function NavLinks({ className, onLinkClick }: NavLinksProps) {
  return (
    <nav
      aria-label="Main Navigation"
      className={cn("flex items-center gap-1 lg:gap-2", className)}
    >
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onLinkClick}
          className="group relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span>{item.label}</span>
          <span className="absolute inset-x-3 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-primary transition-transform duration-200 group-hover:scale-x-100" />
        </Link>
      ))}
    </nav>
  );
}
