"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const HeroMetricsCarousel = () => {
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
    api.scrollTo(slide);
  };

  return (
    <Carousel
      setApi={setApi}
      className="px-10"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="-ml-4">
        <CarouselItem className={cn("basis-full pl-4")}>
          <div className="flex items-center justify-center gap-4">
            <p className="text-brand-light-green text-[70px] leading-[110%] font-bold">
              7,5
            </p>
            <span className="text-lg leading-normal text-white">
              <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                +
              </span>
              <br />
              milhões de
              <br /> clientes ativos
            </span>
          </div>
        </CarouselItem>
        <CarouselItem className={cn("basis-full pl-4")}>
          <div className="flex items-center justify-center gap-4">
            <p className="text-brand-light-green text-[70px] leading-[110%] font-bold">
              950
            </p>
            <span className="text-lg leading-normal text-white">
              <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                +
              </span>
              <br />
              mil consultas
              <br /> por ano
            </span>
          </div>
        </CarouselItem>
        <CarouselItem className={cn("basis-full pl-4")}>
          <div className="flex items-center justify-center gap-4">
            <p className="text-brand-light-green text-[70px] leading-[110%] font-bold">
              79
            </p>
            <span className="text-lg leading-normal text-white">
              <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                +
              </span>
              <br />
              mil consultas
              <br /> por mês
            </span>
          </div>
        </CarouselItem>
      </CarouselContent>
      <div className="mt-8 flex items-center justify-center gap-3">
        <div
          className={cn(
            "h-3 w-3 cursor-pointer rounded-full bg-white/50 hover:bg-white/100",
            current === 0 && "bg-brand-light-green",
          )}
          onClick={() => handleGoToSlide({ slide: 0 })}
        />
        <div
          className={cn(
            "h-3 w-3 cursor-pointer rounded-full bg-white/50 hover:bg-white/100",
            current === 1 && "bg-brand-light-green",
          )}
          onClick={() => handleGoToSlide({ slide: 1 })}
        />
        <div
          className={cn(
            "h-3 w-3 cursor-pointer rounded-full bg-white/50 hover:bg-white/100",
            current === 2 && "bg-brand-light-green",
          )}
          onClick={() => handleGoToSlide({ slide: 2 })}
        />
      </div>
    </Carousel>
  );
};
