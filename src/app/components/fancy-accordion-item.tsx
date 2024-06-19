import { motion } from "framer-motion";
import { type Route } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";

export type AccordionItemType = {
  cta: string | null;
  ctaUrl?: Route;
  description: string;
  id: number;
  title: string;
};

export const FancyAccordionItem = ({
  isOpen,
  item,
}: {
  isOpen: boolean;
  item: AccordionItemType;
}) => {
  return (
    <motion.div
      layout
      transition={{ duration: 0.5 }}
      className={cn(
        "h-full min-h-0 cursor-pointer items-center overflow-hidden rounded-2xl border p-8 md:min-h-[420px] md:pb-16",
        { "border-backgroundGray bg-backgroundGray": isOpen }
      )}
    >
      <motion.div
        layout="position"
        className={cn(
          "flex flex-row items-center gap-3 md:flex-col md:items-start md:gap-9",
          {
            "flex-col items-start": isOpen,
          }
        )}
      >
        <h3
          className={cn(
            "mb-2 inline-block w-20 scale-75 text-lg font-bold leading-6 transition-all duration-500 md:mb-6 md:w-16 md:rotate-90 md:text-4xl md:leading-10",
            { "scale-100 md:rotate-0": isOpen }
          )}
        >
          {item.title}
        </h3>
      </motion.div>
      {isOpen && (
        <div>
          <motion.div
            transition={{ duration: 0.5, delay: 0.25 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <p className="text-xs leading-5 md:text-lg md:leading-7">
              {item.description}
            </p>
          </motion.div>
          {item.cta && (
            <motion.div
              transition={{ duration: 0.5, delay: 0.5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }}
              exit={{ opacity: 0, y: 50 }}
            >
              {item.ctaUrl ? (
                <Link href={item.ctaUrl}>
                  <button className="mt-6 md:mt-12">{item.cta}</button>
                </Link>
              ) : (
                <button className="mt-6 md:mt-12">{item.cta}</button>
              )}
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
};

FancyAccordionItem.displayName = "FancyAccordionItem";
