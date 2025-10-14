"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { TimelineCard } from "./cards/timeline-card";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const HistoryTimeline = () => {
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
        <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
          <TimelineCard year={2023} title="Expansão acelerada">
            Inauguramos nosso novo escritório em São Paulo e ampliamos nossa
            sede em Brasília. Alcançamos mais de{" "}
            <strong>3 milhões de vidas expostas</strong> aos nossos produtos,
            consolidando nossa presença no mercado e{" "}
            <strong>ampliando o acesso à saúde</strong> digital em todo o
            Brasil.
          </TimelineCard>
        </CarouselItem>
        <CarouselItem className="sm:basis-1/2 sm:pl-0 md:basis-1/3 lg:basis-1/4">
          <TimelineCard year={2024} title="Inovação em escala">
            Chegamos a <strong>mais de 7 milhões de vidas atendidas</strong> e
            inauguramos mais de <strong>35 Consultórios Digitais</strong>,
            aproximando ainda mais a tecnologia de quem mais precisa e
            expandindo a rede de cuidado com qualidade e segurança.
          </TimelineCard>
        </CarouselItem>
        <CarouselItem className="sm:basis-1/2 sm:pl-0 md:basis-1/3 lg:basis-1/4">
          <TimelineCard year={2025} title="Um marco histórico">
            Batemos a marca de <strong>10 milhões de vidas alcançadas.</strong>{" "}
            Esse crescimento reafirma nossa posição como{" "}
            <strong>referência nacional em saúde digital</strong> e reforça o
            propósito que nos move desde o início: tornar o cuidado em saúde
            mais humano, acessível e inteligente.
          </TimelineCard>
        </CarouselItem>
        <CarouselItem className="sm:basis-1/2 sm:pl-0 md:basis-1/3 lg:basis-1/4">
          <TimelineCard
            year={2025}
            title="Seguimos Transformando a saúde no Brasil"
          >
            Seguimos impulsionando a transformação digital da saúde, sempre com
            o mesmo propósito que nos move desde o início:{" "}
            <strong>
              tornar o cuidado mais humano, acessível e eficiente.
            </strong>
          </TimelineCard>
        </CarouselItem>
      </CarouselContent>

      <div className="flex items-center justify-center gap-3 lg:hidden">
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            key={index}
            className={cn(
              "h-3 w-3 cursor-pointer rounded-full bg-white/50 hover:bg-white/100",
              current === index && "bg-brand-light-green",
            )}
            onClick={() => handleGoToSlide({ slide: index })}
          />
        ))}
      </div>
    </Carousel>
  );
};
