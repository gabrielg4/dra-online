"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface FAQContainerProps {
  faqItems: {
    question: string;
    answer: string;
  }[];
}

export const FAQContainer = ({ faqItems }: FAQContainerProps) => {
  const midPoint = Math.ceil(faqItems.length / 2);
  const firstSplit = faqItems.slice(0, midPoint);
  const secondSplit = faqItems.slice(midPoint);
  return (
    <div className="flex w-full flex-col items-start gap-4 md:flex-row">
      <Accordion type="single" collapsible className="w-full md:w-1/2">
        {firstSplit.map((item, index) => (
          <AccordionItem
            key={index}
            value={item.question}
            className="border-brand-light-green items-center rounded-2xl border bg-white/10 shadow-2xl/10 not-last:mb-4"
          >
            <AccordionTrigger className="min-h-[90px] cursor-pointer items-center p-4 text-lg font-medium text-white no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 text-[16px] leading-normal text-white">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Accordion type="single" collapsible className="w-full md:w-1/2">
        {secondSplit.map((item, index) => (
          <AccordionItem
            key={index}
            value={item.question}
            className="border-brand-light-green rounded-2xl border bg-white/10 shadow-2xl/10 not-last:mb-4"
          >
            <AccordionTrigger className="min-h-[90px] cursor-pointer items-center p-4 text-lg font-medium text-white no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-md px-4 text-white">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
