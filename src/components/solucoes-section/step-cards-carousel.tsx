"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { StepCard } from "../cards/step-card";

export const StepCardsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleGoToSlide = ({ slide }: { slide: number }) => {
    if (!api) {
      return;
    }
    // setCurrent(slide)
    api.scrollTo(slide);
  };
  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
      }}
      className="block max-sm:z-20 md:hidden"
    >
      <CarouselContent>
        <CarouselItem className="basis-1/2 max-sm:basis-[45%]">
          <StepCard
            stepNumber={1}
            content={
              <>
                {" "}
                Captação pelo
                <br />
                Whatsapp{" "}
              </>
            }
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 max-sm:basis-[45%]">
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
        <CarouselItem className="basis-1/2 max-sm:basis-[45%]">
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
        <CarouselItem className="basis-1/2 max-sm:basis-[45%]">
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
        <CarouselItem className="basis-1/2 max-sm:basis-[45%]">
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
        <CarouselItem className="basis-1/2 max-sm:basis-[45%]">
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
        <CarouselItem className="basis-1/2 max-sm:basis-[45%]">
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
      <div className="mt-8 !hidden items-center justify-center gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "hover:bg-brand-light-green h-3 w-3 cursor-pointer rounded-full bg-white/30",
              current === index && "bg-brand-light-green",
            )}
            onClick={() => handleGoToSlide({ slide: index })}
          />
        ))}
      </div>
    </Carousel>
  );
};
