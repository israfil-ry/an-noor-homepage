import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mosque01Icon,
  Coins01Icon,
  Location01Icon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MasjidItem } from "@/types/community.types";
import { cn } from "@/lib/utils";

export interface MosqueDetailDialogProps {
  masjid: MasjidItem;
  className?: string;
}

export function MosqueDetailDialog({
  masjid,
  className,
}: MosqueDetailDialogProps) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className={cn(
              "group inline-flex items-center gap-2 rounded-xl border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-xs sm:text-sm py-2 px-4 transition-all duration-200 cursor-pointer shadow-2xs",
              className
            )}
          >
            <HugeiconsIcon
              icon={Mosque01Icon}
              size={16}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            <span>Explore Masjid Profile &amp; Giving</span>
          </Button>
        }
      />

      <DialogContent className="max-w-3xl overflow-hidden rounded-3xl border-border bg-card p-0 shadow-xl max-h-[90vh] flex flex-col">
        <DialogHeader className="p-6 pb-4 border-b border-border bg-muted/20">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/10 text-primary text-[10px] font-bold"
            >
              Partner Islamic Center
            </Badge>
            <Badge
              variant="outline"
              className="border-border bg-background text-muted-foreground text-[10px] font-medium"
            >
              <HugeiconsIcon icon={Location01Icon} size={11} className="mr-1 inline" />
              {masjid.distance} • {masjid.city}, {masjid.state}
            </Badge>
          </div>

          <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground">
            {masjid.name}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
            Imams: {masjid.imamName} • {masjid.address}
          </DialogDescription>
        </DialogHeader>

        <div className="p-6 overflow-y-auto space-y-6">
          {/* Dual Phone Previews: Masjid Profile & Mosque Donation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {/* Screen 1: Masjid Profile */}
            <div className="flex flex-col items-center rounded-2xl border border-border bg-muted/30 p-4">
              <span className="text-xs font-bold text-foreground mb-1">
                Masjid Profile &amp; Timetable
              </span>
              <p className="text-[11px] text-muted-foreground text-center mb-3">
                Live Iqamah updates &amp; community announcements
              </p>
              <div className="relative overflow-hidden rounded-xl border border-foreground/10 bg-background shadow-md max-w-[200px] w-full">
                <Image
                  src={masjid.profileImageSrc}
                  alt={`${masjid.name} Mobile App Profile Screen`}
                  width={780}
                  height={1688}
                  className="w-full h-auto object-cover"
                  sizes="200px"
                />
              </div>
            </div>

            {/* Screen 2: Mosque Donation */}
            <div className="flex flex-col items-center rounded-2xl border border-border bg-muted/30 p-4">
              <span className="text-xs font-bold text-foreground mb-1">
                Zero-Fee Direct Giving
              </span>
              <p className="text-[11px] text-muted-foreground text-center mb-3">
                100% of donations delivered straight to the mosque
              </p>
              <div className="relative overflow-hidden rounded-xl border border-foreground/10 bg-background shadow-md max-w-[200px] w-full">
                <Image
                  src={masjid.donationImageSrc}
                  alt={`${masjid.name} Mosque Donation Screen`}
                  width={780}
                  height={1688}
                  className="w-full h-auto object-cover"
                  sizes="200px"
                />
              </div>
            </div>
          </div>

          {/* Donation Callout Pill */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-2xs">
              <HugeiconsIcon icon={Coins01Icon} size={18} />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-foreground">
                <span>{masjid.donationChannel.campaignTitle}</span>
                <HugeiconsIcon
                  icon={CheckmarkCircle01Icon}
                  size={14}
                  className="text-primary"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                {masjid.donationChannel.description}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
