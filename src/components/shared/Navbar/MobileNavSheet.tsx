"use client";

import { useState } from "react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Location01Icon } from "@hugeicons/core-free-icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/shared/Logo";
import { StoreDownloadBadges } from "@/components/shared/StoreDownloadBadges";
import { APP_CONFIG, NAV_ITEMS } from "@/lib/constants";

export interface MobileNavSheetProps {
  className?: string;
  defaultOpen?: boolean;
}

export function MobileNavSheet({ className, defaultOpen = false }: MobileNavSheetProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={className}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          aria-label="Open mobile navigation menu"
          className="inline-flex size-10 items-center justify-center rounded-xl hover:bg-muted text-foreground cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
        >
          <HugeiconsIcon icon={Menu01Icon} size={20} strokeWidth={1.5} />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="flex flex-col justify-between w-[300px] sm:w-[340px] bg-background p-6 border-l border-border"
        >
          <div className="flex flex-col gap-6">
            <SheetHeader className="text-left">
              <SheetTitle className="flex items-center">
                <Logo variant="mobile" asLink={false} />
              </SheetTitle>
            </SheetHeader>

            {/* Location Pill */}
            <div className="flex items-center">
              <Badge
                variant="outline"
                className="flex items-center gap-1.5 py-1 px-2.5 text-xs font-normal border-border bg-muted/50 text-muted-foreground"
              >
                <HugeiconsIcon
                  icon={Location01Icon}
                  size={12}
                  strokeWidth={1.5}
                  className="text-primary"
                />
                <span>{APP_CONFIG.defaultLocation}</span>
              </Badge>
            </div>

            {/* Navigation Anchor Links */}
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted active:bg-muted/80"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-muted-foreground">→</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom Mobile Download Action Group */}
          <div className="flex flex-col gap-3 pt-5 border-t border-border">
            <StoreDownloadBadges
              direction="column"
              size="md"
              googlePlayHref="#"
              appStoreHref="#"
              className="w-full"
            />
            <p className="text-center text-[11px] text-muted-foreground">
              100% Free • Ad-Free • Privacy First
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
