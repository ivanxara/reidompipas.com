import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { FaqEntry } from "@/app/_seo/schema";

type Props = {
  items: FaqEntry[];
  className?: string;
  centered?: boolean;
  renderExtra?: (item: FaqEntry, index: number) => React.ReactNode;
};

export default function FaqCollapsible({
  items,
  className,
  centered = true,
  renderExtra,
}: Props) {
  return (
    <div className={`${className ?? ""} ${centered ? "text-center" : ""}`}>
      {items.map((item, i) => (
        <div key={i}>
          <Collapsible>
            <CollapsibleTrigger>{item.question}</CollapsibleTrigger>
            <CollapsibleContent>
              <p className="font-inter text-secondary/70 mt-1">{item.answer}</p>
              {renderExtra ? renderExtra(item, i) : null}
            </CollapsibleContent>
          </Collapsible>
          <div className="border-t border-secondary/10" />
        </div>
      ))}
    </div>
  );
}
