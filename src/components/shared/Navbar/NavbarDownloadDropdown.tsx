"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Download01Icon, ChevronDownIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { StoreDownloadBadges } from "@/components/shared/StoreDownloadBadges";
import { cn } from "@/lib/utils";

export interface NavbarDownloadDropdownProps {
  className?: string;
  align?: "start" | "center" | "end";
  defaultOpen?: boolean;
}

export function NavbarDownloadDropdown({
  className,
  align = "end",
  defaultOpen,
}: NavbarDownloadDropdownProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <DropdownMenu defaultOpen={defaultOpen}>
        <DropdownMenuTrigger
          render={
            <Button
              size="sm"
              className="gap-1.5 rounded-full bg-primary text-primary-foreground font-medium shadow-xs hover:bg-primary-hover active:scale-[0.98] min-h-[38px] px-3.5 cursor-pointer select-none"
              aria-label="Download An-Noor App options"
            >
              <HugeiconsIcon
                icon={Download01Icon}
                size={15}
                strokeWidth={1.5}
              />
              <span>Get The App</span>
              <HugeiconsIcon
                icon={ChevronDownIcon}
                size={14}
                strokeWidth={1.5}
                className="opacity-80 transition-transform duration-200"
              />
            </Button>
          }
        />
        <DropdownMenuContent
          align={align}
          sideOffset={8}
          className="w-56 p-3 rounded-2xl bg-popover text-popover-foreground border border-border shadow-lg flex flex-col gap-2.5 items-center"
        >
          <div className="w-full text-center pb-1.5 border-b border-border">
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
              Download An-Noor
            </span>
          </div>

          {/* Official Google Play & Apple App Store Badges */}
          <StoreDownloadBadges
            direction="column"
            size="sm"
            googlePlayHref="#"
            appStoreHref="#"
            className="w-full"
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
