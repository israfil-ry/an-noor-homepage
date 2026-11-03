import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { FaqItem } from "@/types/trust-faq.types";
import { cn } from "@/lib/utils";

export interface FaqAccordionListProps {
  items: readonly FaqItem[];
  className?: string;
}

export function FaqAccordionList({ items, className }: FaqAccordionListProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border border-dashed border-border bg-card">
        <p className="text-sm font-medium text-foreground">
          No questions found in this category.
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Try selecting another category above or search all questions.
        </p>
      </div>
    );
  }

  return (
    <Accordion
      className={cn(
        "w-full divide-y divide-border/60 rounded-3xl border border-border bg-card p-2 sm:p-4 shadow-xs",
        className
      )}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="border-none px-3 sm:px-4 py-1"
        >
          <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary py-4 transition-colors">
            <span className="pr-4">{item.question}</span>
          </AccordionTrigger>

          <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4">
            <p>{item.answer}</p>
            {item.keyTakeaway && (
              <div className="mt-3 inline-flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="text-[10px] sm:text-xs font-semibold py-0.5 px-2.5 border-primary/20 bg-primary/5 text-primary"
                >
                  Key Takeaway
                </Badge>
                <span className="text-xs text-foreground/80 font-medium">
                  {item.keyTakeaway}
                </span>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

