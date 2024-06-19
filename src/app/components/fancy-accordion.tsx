"use client";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { fancyAccordionInput } from "./accordion-input";
import { Route } from "next";
import { FancyAccordionItem } from "./fancy-accordion-item";

export type FancyAccordionItem = {
  cta: string | null;
  ctaUrl?: Route;
  description: string;
  id: number;
  title: string;
};

export const FancyAccordion = ({ title }: { title: string }) => {
  const [openedItem, setOpenedItem] = useState(1);

  return (
    <>
      <div>
        <h3 className="mb-8 text-4xl font-extrabold sm:text-6xl md:mb-10">
          {title}
        </h3>
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        {fancyAccordionInput.map((item) => (
          <div
            key={item.id}
            onClick={() => setOpenedItem(item.id)}
            className={cn(openedItem === item.id && "flex-shrink flex-grow")}
          >
            <FancyAccordionItem isOpen={openedItem === item.id} item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

FancyAccordion.displayName = "FancyAccordion";
