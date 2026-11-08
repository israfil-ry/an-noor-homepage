"use client";

import { APP_CONFIG } from "@/lib/constants";
import Link from "next/link";

interface GooglePlayButtonProps {
  variant?: "dark" | "light";
  downloadLabel?: string;
}

export default function GooglePlayButton({
  variant = "dark",
  downloadLabel = "Download",
}: GooglePlayButtonProps) {
  const isLight = variant === "light";

  return (
    <Link
      href={APP_CONFIG.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on Google Play"
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
      {/* Google Play Icon */}
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          fill="#00d7fe"
          d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l.1.1L13.5 12v-.2L3.7 1.7Z"
        />
        <path
          fill="#ffce00"
          d="m16.8 15.3-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2Z"
        />
        <path
          fill="#ff3a44"
          d="M16.9 15.2 13.5 11.9 3.6 21.8c.4.4 1 .4 1.7.1l11.6-6.7"
        />
        <path fill="#00f076" d="M16.9 8.6 5.3 2c-.7-.4-1.3-.3-1.7.1l9.9 9.8Z" />
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
          Google Play
        </span>
      </span>
    </Link>
  );
}
