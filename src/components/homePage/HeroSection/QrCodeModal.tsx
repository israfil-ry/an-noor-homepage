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
import GooglePlayButton from "@/components/shared/GooglePlayButton";
import AppStoreButton from "@/components/shared/AppStoreButton";
import { APP_CONFIG } from "@/lib/constants";

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
              "group inline-flex h-[3.25rem] min-w-[10.5rem] items-center gap-3 rounded-2xl bg-[#0f1f14] px-4 text-white shadow-[0_10px_24px_-12px_rgb(15_31_20/0.6)] transition duration-200 hover:-translate-y-0.5 hover active:scale-[0.98] cursor-pointer select-none",
              className,
            )}
          >
            <HugeiconsIcon
              icon={QrCode01Icon}
              size={24}
              strokeWidth={1.8}
              className="shrink-0 text-white"
            />
            <span className="flex flex-col text-start leading-none">
              <span className="text-[0.68rem] font-medium tracking-wide text-white/70">
                Scan To Get
              </span>

              <span className="mt-1 font-display text-[1.05rem] font-semibold tracking-tight">
                QR Code
              </span>
            </span>
          </button>
        }
      />

      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border-border p-6 text-foreground shadow-lg">
        <DialogHeader className="text-center sm:text-center space-y-1.5">
          <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Download An-Noor App
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
            Scan the QR code with your smartphone camera to open the official
            app store directly.
          </DialogDescription>
        </DialogHeader>

        {/* Dual Platform QR Cards (Android & iOS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3">
          <QrPlatformCard
            platform="android"
            title="Android"
            subtitle="For Android 8.0 & above"
            DownloadButton={GooglePlayButton}
            badgeHref={APP_CONFIG.playStoreUrl}
            badgeAlt="Get it on Google Play"
            qrCodeSrc={APP_CONFIG.androidQrCodeUrl}
          />
          <QrPlatformCard
            platform="ios"
            title="iPhone & iPad"
            subtitle="For iOS 15.0 & above"
            DownloadButton={AppStoreButton}
            badgeHref="#"
            badgeAlt="Download on the App Store"
            qrCodeSrc={APP_CONFIG.androidQrCodeUrl}
          />
        </div>

        {/* Trust & Compatibility Footnote */}
        <p className="text-center text-xs text-muted-foreground pt-2 border-t border-border">
          Compatible with Android 8.0+ and iOS 15.0+. 100% free, ad-free &
          privacy-respecting.
        </p>
      </DialogContent>
    </Dialog>
  );
}
