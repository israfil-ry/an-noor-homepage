import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShieldCheckIcon } from "@hugeicons/core-free-icons";
import { APP_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { StoreDownloadBadges } from "@/components/shared/StoreDownloadBadges";

export interface FooterProps {
  className?: string;
}

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Contact & Support", href: "/contact" },
] as const;

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "w-full border-border bg-primary/5 text-card-foreground transition-colors",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-border items-center">
          {/* Left: Logo & Description */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <Logo variant="footer" />

            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              {APP_CONFIG.subTagline}
            </p>
          </div>

          {/* Right: Download Section */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4 lg:text-center">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground text-center">
                Get the An-Noor App
              </h3>
              {/* <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Download free on your phone and keep prayer, Quran, and halal
                finds with you.
              </p> */}
            </div>

            {/* Official Store Download Badges */}
            <StoreDownloadBadges
              size="sm"
              direction="row"
              googlePlayHref="#"
              appStoreHref="#"
            />

            <div className="flex items-center gap-2 text-xs font-medium text-primary">
              <HugeiconsIcon
                icon={ShieldCheckIcon}
                size={16}
                strokeWidth={1.5}
                className="text-primary shrink-0"
              />
              <span>100% Free • Zero Disruptive Ads • Privacy-First</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-muted-foreground">
          <p className="text-center sm:text-left">
            © {APP_CONFIG.copyrightYear} {APP_CONFIG.name} App. All rights
            reserved.
          </p>

          <nav
            aria-label="Legal and support"
            className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2"
          >
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium transition-colors duration-150 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
