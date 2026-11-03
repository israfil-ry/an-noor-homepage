import { HugeiconsIcon } from "@hugeicons/react";
import { ShieldCheckIcon, HeartIcon } from "@hugeicons/core-free-icons";
import { APP_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { AppDownloadBadges } from "@/components/shared/AppDownloadBadges";
import { FooterLinks } from "./FooterLinks";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "w-full border-t border-border bg-card text-card-foreground transition-colors",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-border">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Logo variant="footer" />

            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              {APP_CONFIG.subTagline}
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-primary">
              <HugeiconsIcon icon={ShieldCheckIcon} size={16} strokeWidth={1.5} className="text-primary shrink-0" />
              <span>100% Free • Zero Disruptive Ads • Privacy-First</span>
            </div>

            {/* App Store Download Badges */}
            <div className="pt-2">
              <AppDownloadBadges variant="compact" showDirectApk={false} />
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7">
            <FooterLinks />
          </div>
        </div>

        {/* Bottom Copyright & Ummah Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-muted-foreground">
          <p>
            © {APP_CONFIG.copyrightYear} {APP_CONFIG.name} App. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span>Crafted with sincerity for the global</span>
            <span className="font-semibold text-foreground">Ummah</span>
            <HugeiconsIcon icon={HeartIcon} size={14} strokeWidth={1.5} className="text-primary fill-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
}
