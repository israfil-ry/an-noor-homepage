"use client";

import Link from "next/link";

interface AppStoreButtonProps {
  url: string;
  variant?: "dark" | "light";
  downloadLabel?: string;
}

export default function AppStoreButton({
  url,
  variant = "dark",
  downloadLabel = "Download",
}: AppStoreButtonProps) {
  const isLight = variant === "light";

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on the App Store"
      className={`
        inline-flex h-[3.25rem] min-w-[10.5rem]
        items-center gap-3 rounded-2xl px-4
        transition duration-200
        hover:-translate-y-0.5
        active:scale-[0.98]
        ${
          isLight
            ? "bg-white text-[#0f1f14] shadow-[0_8px_20px_-12px_rgb(0_0_0/0.2)] hover:bg-gray-50"
            : "bg-[#0f1f14] text-white shadow-[0_10px_24px_-12px_rgb(15_31_20/0.6)] hover:bg-black"
        }
      `}
    >
      {/* Apple Icon */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d="M16.4 12.6c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9s-2-.9-3.3-.9a4.9 4.9 0 0 0-4.1 2.5c-1.8 3-.5 7.5 1.2 10 .8 1.2 1.8 2.6 3.1 2.5 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8 2.2-1.2 3-2.4c.9-1.4 1.3-2.7 1.3-2.8 0 0-2.4-1-2.3-4ZM14 5.2c.7-.8 1.1-1.9 1-3-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.6 2.9-1.4Z" />
      </svg>

      {/* Button Text */}
      <span className="flex flex-col text-start leading-none">
        <span
          className={`text-[0.68rem] font-medium tracking-wide ${
            isLight ? "text-[#526B59]" : "text-white/70"
          }`}
        >
          {downloadLabel}
        </span>

        <span className="mt-1 font-display text-[1.05rem] font-semibold tracking-tight">
          App Store
        </span>
      </span>
    </Link>
  );
}
