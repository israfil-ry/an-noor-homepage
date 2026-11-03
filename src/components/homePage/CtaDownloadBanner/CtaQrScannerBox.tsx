import { HugeiconsIcon } from "@hugeicons/react";
import { QrCode01Icon, SmartPhone01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

export interface CtaQrScannerBoxProps {
  className?: string;
}

export function CtaQrScannerBox({ className }: CtaQrScannerBoxProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-3.5 backdrop-blur-md text-primary-foreground shadow-sm",
        className
      )}
    >
      {/* High-Contrast Stylized QR Code Preview */}
      <div className="relative flex size-20 shrink-0 items-center justify-center rounded-xl bg-primary-foreground p-1.5 shadow-inner">
        <svg
          className="size-full text-brand-emerald-dark"
          viewBox="0 0 100 100"
          fill="currentColor"
          aria-label="QR Code to Install An-Noor on Android"
        >
          {/* Corner Locators */}
          <rect x="0" y="0" width="28" height="28" rx="4" fill="currentColor" />
          <rect x="5" y="5" width="18" height="18" rx="2" fill="white" />
          <rect x="9" y="9" width="10" height="10" rx="1" fill="currentColor" />

          <rect x="72" y="0" width="28" height="28" rx="4" fill="currentColor" />
          <rect x="77" y="5" width="18" height="18" rx="2" fill="white" />
          <rect x="81" y="9" width="10" height="10" rx="1" fill="currentColor" />

          <rect x="0" y="72" width="28" height="28" rx="4" fill="currentColor" />
          <rect x="5" y="77" width="18" height="18" rx="2" fill="white" />
          <rect x="9" y="81" width="10" height="10" rx="1" fill="currentColor" />

          {/* Core Data Cells */}
          <rect x="36" y="6" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="52" y="6" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="36" y="22" width="12" height="12" rx="2" fill="currentColor" />
          <rect x="56" y="22" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="18" y="38" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="36" y="44" width="16" height="12" rx="2" fill="currentColor" />
          <rect x="62" y="38" width="10" height="10" rx="2" fill="currentColor" />
          <rect x="80" y="42" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="36" y="66" width="8" height="8" rx="1" fill="currentColor" />
          <rect x="52" y="62" width="14" height="14" rx="2" fill="currentColor" />
          <rect x="74" y="68" width="12" height="10" rx="2" fill="currentColor" />
          <rect x="36" y="82" width="10" height="10" rx="1" fill="currentColor" />
          <rect x="54" y="84" width="12" height="8" rx="1" fill="currentColor" />
          <rect x="76" y="84" width="14" height="8" rx="1" fill="currentColor" />
        </svg>
      </div>

      {/* Narrative & Instructions */}
      <div className="flex flex-col text-left">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/90 mb-0.5">
          <HugeiconsIcon icon={QrCode01Icon} size={14} />
          <span>Scan to Install</span>
        </div>
        <p className="text-sm font-bold text-primary-foreground leading-tight">
          Point Android Camera
        </p>
        <p className="mt-1 text-[11px] text-primary-foreground/80 leading-normal flex items-center gap-1">
          <HugeiconsIcon icon={SmartPhone01Icon} size={12} />
          <span>Opens directly on Google Play</span>
        </p>
      </div>
    </div>
  );
}

