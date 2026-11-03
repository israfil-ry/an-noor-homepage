"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { QrCode01Icon, Download01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { APP_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface QrCodeModalProps {
  className?: string;
}

export function QrCodeModal({ className }: QrCodeModalProps) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "gap-2 rounded-xl border-border bg-card text-foreground hover:bg-muted active:scale-[0.98] min-h-[44px] px-3.5 cursor-pointer shadow-xs",
              className
            )}
          >
            <HugeiconsIcon
              icon={QrCode01Icon}
              size={18}
              strokeWidth={1.5}
              className="text-primary"
            />
            <span className="text-xs sm:text-sm font-medium">Scan QR Code</span>
          </Button>
        }
      />

      <DialogContent className="sm:max-w-md rounded-2xl bg-card border-border p-6 text-foreground shadow-lg">
        <DialogHeader className="text-center sm:text-center space-y-2">
          <DialogTitle className="text-xl font-bold tracking-tight text-foreground">
            Download An-Noor on Android
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Point your mobile camera at this QR code to open the Google Play Store directly.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center py-4 space-y-4">
          {/* Branded QR Code Container */}
          <div className="relative flex size-52 items-center justify-center rounded-2xl border-2 border-primary/20 bg-muted/40 p-4 shadow-inner">
            <svg
              className="size-44 text-foreground"
              viewBox="0 0 100 100"
              fill="currentColor"
              aria-label="QR Code to Download An-Noor"
            >
              {/* Stylized QR Code SVG Pattern */}
              <rect x="0" y="0" width="30" height="30" rx="4" fill="currentColor" />
              <rect x="6" y="6" width="18" height="18" rx="2" fill="var(--color-card)" />
              <rect x="10" y="10" width="10" height="10" rx="1" fill="var(--color-primary)" />

              <rect x="70" y="0" width="30" height="30" rx="4" fill="currentColor" />
              <rect x="76" y="6" width="18" height="18" rx="2" fill="var(--color-card)" />
              <rect x="80" y="10" width="10" height="10" rx="1" fill="var(--color-primary)" />

              <rect x="0" y="70" width="30" height="30" rx="4" fill="currentColor" />
              <rect x="6" y="76" width="18" height="18" rx="2" fill="var(--color-card)" />
              <rect x="10" y="80" width="10" height="10" rx="1" fill="var(--color-primary)" />

              {/* Data Blocks */}
              <rect x="36" y="6" width="8" height="8" rx="1" fill="currentColor" />
              <rect x="48" y="6" width="8" height="8" rx="1" fill="currentColor" />
              <rect x="36" y="18" width="8" height="8" rx="1" fill="currentColor" />
              <rect x="48" y="24" width="8" height="8" rx="1" fill="currentColor" />
              <rect x="18" y="36" width="8" height="8" rx="1" fill="currentColor" />
              <rect x="36" y="36" width="12" height="12" rx="2" fill="var(--color-accent)" />
              <rect x="54" y="36" width="8" height="8" rx="1" fill="currentColor" />
              <rect x="72" y="36" width="8" height="8" rx="1" fill="currentColor" />
              <rect x="84" y="44" width="8" height="8" rx="1" fill="currentColor" />
              <rect x="36" y="54" width="8" height="8" rx="1" fill="currentColor" />
              <rect x="52" y="54" width="14" height="8" rx="1" fill="currentColor" />
              <rect x="72" y="54" width="8" height="8" rx="1" fill="currentColor" />
              <rect x="36" y="72" width="8" height="8" rx="1" fill="currentColor" />
              <rect x="50" y="72" width="12" height="12" rx="2" fill="currentColor" />
              <rect x="70" y="70" width="10" height="10" rx="2" fill="currentColor" />
              <rect x="84" y="84" width="10" height="10" rx="2" fill="currentColor" />
            </svg>
          </div>

          <p className="text-xs text-muted-foreground text-center max-w-xs">
            Compatible with Android 8.0 and above. 100% ad-free & privacy-respecting.
          </p>
        </div>

        {/* Fallback Direct Action Links */}
        <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-border">
          <Link
            href={APP_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button
              className="w-full gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary-hover active:scale-[0.98] min-h-[44px]"
            >
              <span>Open in Google Play</span>
            </Button>
          </Link>
          <Link href={APP_CONFIG.apkDownloadUrl} className="flex-1">
            <Button
              variant="outline"
              className="w-full gap-2 rounded-xl border-border bg-card text-foreground hover:bg-muted active:scale-[0.98] min-h-[44px]"
            >
              <HugeiconsIcon icon={Download01Icon} size={15} />
              <span>Direct APK</span>
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
