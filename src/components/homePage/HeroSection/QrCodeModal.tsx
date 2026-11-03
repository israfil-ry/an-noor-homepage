"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { QrCode01Icon } from "@hugeicons/core-free-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QrPlatformCard } from "./QrPlatformCard";
import { cn } from "@/lib/utils";

export interface QrCodeModalProps {
  className?: string;
  defaultOpen?: boolean;
}

export function QrCodeModal({ className, defaultOpen }: QrCodeModalProps) {
  return (
    <Dialog defaultOpen={defaultOpen}>
      <DialogTrigger
        render={
          <button
            type="button"
            aria-label="Scan QR Code to Download An-Noor"
            className={cn(
              "group inline-flex items-center gap-2.5 rounded-xl border border-border/40 bg-foreground text-background font-medium transition-all duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring h-[44px] px-3.5 sm:px-4 cursor-pointer select-none shadow-xs",
              className
            )}
          >
            <HugeiconsIcon
              icon={QrCode01Icon}
              size={20}
              strokeWidth={1.8}
              className="shrink-0 text-background"
            />
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[9px] font-normal uppercase tracking-wider text-background/80">
                Scan To Get
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-tight">
                QR Code
              </span>
            </div>
          </button>
        }
      />

      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border-border p-6 text-foreground shadow-lg">
        <DialogHeader className="text-center sm:text-center space-y-1.5">
          <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Download An-Noor App
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
            Scan the QR code with your smartphone camera to open the official app store directly.
          </DialogDescription>
        </DialogHeader>

        {/* Dual Platform QR Cards (Android & iOS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3">
          <QrPlatformCard
            platform="android"
            title="Android"
            subtitle="For Android 8.0 & above"
            badgeSrc="/images/badges/google-play-badge.png"
            badgeAlt="GET IT ON Google Play"
            badgeHref="#"
          />
          <QrPlatformCard
            platform="ios"
            title="iPhone & iPad"
            subtitle="For iOS 15.0 & above"
            badgeSrc="/images/badges/app-store-badge.png"
            badgeAlt="Download on the App Store"
            badgeHref="#"
          />
        </div>

        {/* Trust & Compatibility Footnote */}
        <p className="text-center text-xs text-muted-foreground pt-2 border-t border-border">
          Compatible with Android 8.0+ and iOS 15.0+. 100% free, ad-free & privacy-respecting.
        </p>
      </DialogContent>
    </Dialog>
  );
}
