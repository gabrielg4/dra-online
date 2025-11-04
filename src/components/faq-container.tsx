"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useMediaQuery } from "react-responsive";

interface FAQContainerProps {
  faqItems: {
    question: string;
    answer: string;
  }[];
}

export const FAQContainer = ({ faqItems }: FAQContainerProps) => {
  const [showAll, setShowAll] = useState(false);

  // Detecta se está no mobile
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Número de perguntas a mostrar inicialmente no mobile
  const INITIAL_MOBILE_ITEMS = 3;

  // Determina quantas perguntas mostrar
  // No mobile: controla pela quantidade; No desktop: mostra todas
  const itemsToShow =
    isMobile && !showAll ? faqItems.slice(0, INITIAL_MOBILE_ITEMS) : faqItems;

  const midPoint = Math.ceil(itemsToShow.length / 2);
  const firstSplit = itemsToShow.slice(0, midPoint);
  const secondSplit = itemsToShow.slice(midPoint);

  // Verifica se há mais perguntas para mostrar (apenas relevante no mobile)
  const hasMoreItems = isMobile && faqItems.length > INITIAL_MOBILE_ITEMS;

  return (
    <div className="flex w-full flex-col items-start justify-center gap-4">
      <div className="relative w-full">
        <div className="flex w-full flex-col items-start justify-center gap-4 md:flex-row">
          {firstSplit.length > 0 && (
            <Accordion type="single" collapsible className="w-full md:w-1/2">
              {firstSplit.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={item.question}
                  className="border-brand-light-green mb-4 items-center rounded-2xl border !border-b bg-white/10 shadow-2xl/10 last:mb-0"
                >
                  <AccordionTrigger className="min-h-[90px] cursor-pointer items-center p-4 text-lg font-medium text-white no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-[16px] leading-normal text-white">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
          {secondSplit.length > 0 && (
            <Accordion type="single" collapsible className="w-full md:w-1/2">
              {secondSplit.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={item.question}
                  className="border-brand-light-green mb-4 rounded-2xl border !border-b bg-white/10 shadow-2xl/10 last:mb-0"
                >
                  <AccordionTrigger className="min-h-[90px] cursor-pointer items-center p-4 text-lg font-medium text-white no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-[16px] leading-normal text-white">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>

        {/* Degradê com blur - apenas visível no mobile quando há mais itens */}
        {hasMoreItems && !showAll && (
          <div className="background: linear-gradient(180deg, rgba(7, 95, 85, 0) 0%, #075f55 100%); -webkit-backdrop-filter: blur(2px) pointer-events-none absolute bottom-0 left-0 h-[100px] w-full backdrop-blur-[3px] transition-opacity duration-[0.5s] ease-[ease] content-['']" />
        )}
      </div>

      {/* Botão "Ver mais" - apenas visível no mobile e quando há mais itens */}
      {hasMoreItems && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-brand-light-green text-brand-dark-green hover:bg-brand-main-green relative z-10 mx-auto mt-4 rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 hover:text-white"
        >
          {showAll ? "Ver menos perguntas" : "Ver mais perguntas"}
        </button>
      )}
    </div>
  );
};
