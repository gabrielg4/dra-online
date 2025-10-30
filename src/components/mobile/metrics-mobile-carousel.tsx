"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const MetricsMobileCarousel = () => {
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
    <div className="block md:hidden">
      <Carousel setApi={setApi}>
        <CarouselContent className="-ml-4 items-center">
          <CarouselItem className={cn("basis-full pl-4 max-sm:basis-60")}>
            <div className="rounded-2xl bg-white/10 p-4 shadow-2xl/10">
              <div className="bg-brand-dark-green mb-5 w-fit rounded-2xl p-3">
                <p className="text-brand-light-green text-[64px] leading-none font-bold">
                  93
                </p>
              </div>
              <p className="text-lg text-white">
                de NPS que representa o nível de satisfação dos beneficiários
                com os atendimentos.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className={cn("basis-full pl-4 max-sm:basis-60")}>
            <div className="rounded-2xl bg-white/10 p-4 shadow-2xl/10">
              <div className="flex items-center justify-between">
                <div className="bg-brand-dark-green mb-5 w-fit rounded-2xl p-3">
                  <p className="text-brand-light-green text-[64px] leading-none font-bold">
                    92<span className="text-[32px] max-sm:hidden">%</span>
                  </p>
                </div>
                <span className="text-brand-light-green hidden w-full max-w-24 text-[32px] font-bold max-sm:block">
                  %
                </span>
              </div>
              <p className="text-lg text-white">
                de resolutividade nos atendimentos, com casos solucionados sem a
                necessidade de encaminhamento para consulta presencial.
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className={cn("basis-full pl-4 max-sm:basis-60")}>
            <div className="rounded-2xl bg-white/10 p-4 shadow-2xl/10">
              <div className="bg-brand-dark-green mb-5 w-fit rounded-2xl p-3">
                <p className="text-brand-light-green text-[64px] leading-none font-bold">
                  94
                </p>
              </div>
              <p className="text-lg text-white">
                protocolos médicos para garantir segurança e cuidado.
              </p>
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
    </div>
  );
};
