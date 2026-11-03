import Link from "next/link";
import { FOOTER_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface FooterLinksProps {
  className?: string;
}

export function FooterLinks({ className }: FooterLinksProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10",
        className
      )}
    >
      {FOOTER_CATEGORIES.map((category) => (
        <div key={category.title} className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold tracking-tight text-foreground">
            {category.title}
          </h3>
          <ul className="flex flex-col gap-2.5">
            {category.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-150 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="rounded-full bg-accent/15 px-1.5 py-0.5 text-[10px] font-medium text-accent">
                      {link.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
