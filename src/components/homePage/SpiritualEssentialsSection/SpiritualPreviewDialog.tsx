"use client";

import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { SmartPhone01Icon, CheckmarkCircle01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AppDownloadBadges } from "@/components/shared/AppDownloadBadges";
import { SpiritualToolItem } from "@/types/features.types";
import { cn } from "@/lib/utils";

export interface SpiritualPreviewDialogProps {
  tool: SpiritualToolItem;
  className?: string;
}

export function SpiritualPreviewDialog({
  tool,
  className,
}: SpiritualPreviewDialogProps) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "gap-1.5 rounded-xl border-border bg-card text-foreground hover:bg-muted active:scale-[0.98] min-h-[38px] px-3 cursor-pointer shadow-xs",
              className
            )}
          >
            <HugeiconsIcon
              icon={SmartPhone01Icon}
              size={15}
              className="text-primary"
            />
            <span className="text-xs font-semibold">View Screen</span>
          </Button>
        }
      />

      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border-border p-6 text-foreground shadow-2xl">
        <DialogHeader className="text-left space-y-1 pb-3 border-b border-border/80">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Mobile App Preview
            </span>
            <span className="text-sm font-bold text-muted-foreground font-serif">
              {tool.arabicTitle}
            </span>
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {tool.previewTitle}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
            {tool.subtitle}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-4 items-center">
          {/* Screenshot Display Frame */}
          <div className="md:col-span-6 flex justify-center">
            <div className="relative overflow-hidden rounded-2xl border-4 border-foreground/15 bg-background shadow-lg max-w-[240px] w-full">
              <Image
                src={tool.imageSrc}
                alt={tool.imageAlt}
                width={780}
                height={1688}
                className="w-full h-auto object-cover select-none"
                sizes="(max-width: 768px) 240px, 280px"
              />
            </div>
          </div>

          {/* Feature Highlights & App Action */}
          <div className="md:col-span-6 space-y-4">
            <div className="space-y-2.5">
              <h4 className="text-sm font-bold text-foreground">
                Key Interface Capabilities
              </h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {tool.previewDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <HugeiconsIcon
                      icon={CheckmarkCircle01Icon}
                      size={15}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-border/80 space-y-2">
              <span className="text-xs font-semibold text-foreground block">
                Experience this on your Android device
              </span>
              <AppDownloadBadges variant="compact" showDirectApk={true} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

