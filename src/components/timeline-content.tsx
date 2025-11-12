// timeline-content.tsx
"use client";
import { cn } from "@/lib/utils";
import React, { type ReactElement } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import { useEffect, useState } from "react";

interface TimelineContentProps {
  yearIndex: number;
  isActive: boolean;
  historyData: {
    title: string;
    content: ReactElement;
    videoUrl: string;
  }[];
  onNextYear: () => void;
  onPreviousYear: () => void;
  isFirstYear: boolean;
  isLastYear: boolean;
  onApiReady: (index: number, api: CarouselApi) => void;
}

export const TimelineContent = ({
  yearIndex,
  isActive,
  historyData,
  onNextYear,
  onPreviousYear,
  isFirstYear,
  isLastYear,
  onApiReady,
}: TimelineContentProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Registra a API no componente pai
    onApiReady(yearIndex, api);

    // Atualiza o slide atual quando o carrossel muda
    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api, yearIndex, onApiReady]);

  // Função customizada para o botão "próximo"
  const handleNext = () => {
    if (!api) return;

    const isLastSlide = currentSlide === historyData.length - 1;

    if (isLastSlide && !isLastYear) {
      // Se está no último slide e não é o último ano, avança para o próximo ano
      onNextYear();
    } else if (!isLastSlide) {
      // Se não é o último slide, apenas avança no carrossel
      api.scrollNext();
    }
  };

  // Função customizada para o botão "anterior"
  const handlePrevious = () => {
    if (!api) return;

    const isFirstSlide = currentSlide === 0;

    if (isFirstSlide && !isFirstYear) {
      // Se está no primeiro slide e não é o primeiro ano, volta para o ano anterior
      onPreviousYear();
    } else if (!isFirstSlide) {
      // Se não é o primeiro slide, apenas volta no carrossel
      api.scrollPrev();
    }
  };

  return (
    <div className={cn(isActive && "hidden")}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
        }}
      >
        <CarouselContent>
          {historyData.map(({ content, videoUrl, title }, index) => (
            <CarouselItem
              key={index}
              className={cn("flex justify-center md:items-center")}
            >
              <div
                className={
                  "flex flex-col gap-5 rounded-[24px] max-sm:w-full max-sm:bg-[rgba(255,_255,_255,_0.10)] max-sm:p-5 lg:flex-row lg:gap-10"
                }
              >
                <div className="flex w-full items-center lg:w-1/2">
                  <video
                    src={videoUrl}
                    className="mx-auto h-[200px] w-[540px] rounded-lg object-cover sm:h-[330px] lg:mx-0"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                  ></video>
                </div>
                <div className="flex w-full flex-col justify-between lg:w-1/2">
                  <div>
                    {historyData.length > 1 && (
                      <span className="text-brand-light-green2/80 text-[16px]">
                        202{yearIndex + 2}
                      </span>
                    )}
                    <h2 className="text-brand-light-green mb-5 text-2xl font-bold md:text-[28px] lg:mb-6">
                      {title}
                    </h2>
                    {content}
                  </div>

                  {/* Paginação - APENAS MOBILE quando há múltiplos slides */}
                  {historyData.length > 1 && (
                    <div className="mt-6 flex justify-center gap-2 md:hidden">
                      {historyData.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => api?.scrollTo(dotIndex)}
                          className={cn(
                            "h-[4px] w-14 rounded-full transition-all duration-300",
                            dotIndex === currentSlide
                              ? "bg-brand-light-green w-14"
                              : "bg-[#E1E2E1] hover:bg-white/60",
                          )}
                          aria-label={`Ir para slide ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Botões de navegação - APENAS DESKTOP */}
                  <div className="relative mt-6 hidden items-center gap-3 md:flex">
                    {/* Botão anterior */}
                    <button
                      onClick={handlePrevious}
                      disabled={isFirstYear && currentSlide === 0}
                      className={cn(
                        "text-brand-dark-green bg-brand-light-green hover:bg-brand-main-green flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-0 duration-300 hover:text-white",
                        isFirstYear &&
                          currentSlide === 0 &&
                          "cursor-not-allowed opacity-50",
                      )}
                      aria-label="Anterior"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>

                    {/* Botão próximo */}
                    <button
                      onClick={handleNext}
                      disabled={
                        isLastYear && currentSlide === historyData.length - 1
                      }
                      className={cn(
                        "text-brand-dark-green bg-brand-light-green hover:bg-brand-main-green flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-0 duration-300 hover:text-white",
                        isLastYear &&
                          currentSlide === historyData.length - 1 &&
                          "cursor-not-allowed opacity-50",
                      )}
                      aria-label="Próximo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
