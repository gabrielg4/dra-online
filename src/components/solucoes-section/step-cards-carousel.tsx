"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { StepCard } from "../cards/step-card";

interface StepCardsCarouselProps {
  onSlideChange?: (slideIndex: number) => void;
  onApiReady?: (api: CarouselApi) => void;
}

export const StepCardsCarousel = ({
  onSlideChange,
  onApiReady,
}: StepCardsCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    onSlideChange?.(api.selectedScrollSnap());
    onApiReady?.(api); // Passa a API para o componente pai

    api.on("select", () => {
      const newIndex = api.selectedScrollSnap();

      onSlideChange?.(newIndex);
    });
  }, [api, onSlideChange, onApiReady]);

  const scrollPrev = () => {
    if (api) {
      api.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (api) {
      api.scrollNext();
    }
  };

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      className="relative z-[2] block max-sm:z-20 md:hidden"
    >
      <CarouselContent>
        <CarouselItem className="basis-1/2 max-sm:basis-full">
          <StepCard
            stepNumber={1}
            content={
              <>
                Captação pelo
                <br />
                Whatsapp
              </>
            }
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 max-sm:basis-full">
          <StepCard
            stepNumber={2}
            content={
              <>
                Consultas pelo
                <br />
                médico da família
              </>
            }
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 max-sm:basis-full">
          <StepCard
            stepNumber={3}
            content={
              <>
                Inserção do paciente
                <br />
                nas linhas de cuidado
              </>
            }
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 max-sm:basis-full">
          <StepCard
            stepNumber={4}
            content={
              <>
                Telemonitoramento
                <br />
                do paciente
              </>
            }
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 max-sm:basis-full">
          <StepCard
            stepNumber={5}
            content={
              <>
                Engajamento
                <br /> ativo
              </>
            }
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 max-sm:basis-full">
          <StepCard
            stepNumber={6}
            content={
              <>
                Referência e <br />
                contrareferência
              </>
            }
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 max-sm:basis-full">
          <StepCard
            stepNumber={7}
            content={
              <>
                Relatório sobre <br />
                evolução dos casos
              </>
            }
          />
        </CarouselItem>
      </CarouselContent>

      {/* Custom Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute top-2/3 left-14 z-30 -translate-y-1/2 text-white transition-colors hover:text-white/70"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-8 w-8" strokeWidth={2} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-2/3 right-14 z-30 -translate-y-1/2 text-white transition-colors hover:text-white/70"
        aria-label="Next slide"
      >
        <ArrowRight className="h-8 w-8" strokeWidth={2} />
      </button>
    </Carousel>
  );
};
