import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type LogoVariant = "navbar" | "mobile" | "footer" | "compact";

export interface LogoProps {
  className?: string;
  variant?: LogoVariant;
  asLink?: boolean;
  priority?: boolean;
}

const VARIANT_CONFIG: Record<
  LogoVariant,
  { width: number; height: number; imgClass: string }
> = {
  navbar: { width: 108, height: 36, imgClass: "h-9 w-auto object-contain" },
  mobile: { width: 96, height: 32, imgClass: "h-8 w-auto object-contain" },
  footer: { width: 120, height: 40, imgClass: "h-10 w-auto object-contain" },
  compact: { width: 84, height: 28, imgClass: "h-7 w-auto object-contain" },
};

export function Logo({
  className,
  variant = "navbar",
  asLink = true,
  priority = false,
}: LogoProps) {
  const config = VARIANT_CONFIG[variant] ?? VARIANT_CONFIG.navbar;

  const imageElement = (
    <Image
      src="/images/logo.png"
      alt="AnNoor Logo"
      width={config.width}
      height={config.height}
      priority={priority}
      className={cn(config.imgClass, className)}
    />
  );

  if (!asLink) {
    return imageElement;
  }

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2 rounded-lg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="An-Noor Homepage"
    >
      {imageElement}
    </Link>
  );
}

