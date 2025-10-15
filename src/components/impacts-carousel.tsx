"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { CardSolucaoImpacto } from "./cards/card-solucao-impacto";

interface ImpactsCarouselProps {
  customClassNames?: string;
}

export const ImpactsCarousel = ({ customClassNames }: ImpactsCarouselProps) => {
  const isSmartphone = useMediaQuery({
    query: "(max-width: 640px)",
  });
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
    >
      <CarouselContent>
        <CarouselItem
          className={cn("flex items-center justify-center", customClassNames)}
        >
          <CardSolucaoImpacto
            content="Para o beneficiário, é acolhimento, clareza e confiança logo na entrada do plano de saúde."
            image={{
              alt: "ícone pessoas",
              src: "/images/ic-pessoas.svg",
            }}
          />
        </CarouselItem>
        <CarouselItem
          className={cn("flex items-center justify-center", customClassNames)}
        >
          <CardSolucaoImpacto
            content="Para a operadora, isso significa previsibilidade, redução de sinistralidade e aderência às normas da ANS."
            image={{
              alt: "ícone hospital",
              src: "/images/ic-hospital.svg",
            }}
          />
        </CarouselItem>
      </CarouselContent>
      <div className="mt-8 flex items-center justify-center gap-3 lg:hidden">
        {Array.from({ length: isSmartphone ? 2 : 0 }).map((item, index) => (
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
