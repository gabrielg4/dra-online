"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const CardsCarousel = () => {
  const isTablet = useMediaQuery({
    minWidth: 641,
    maxWidth: 768,
  });
  const isSmartphone = useMediaQuery({
    maxWidth: 640,
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

  useGSAP(() => {
    gsap.from(".card-carousel", {
      y: -100,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#cards-carousel",
        start: "top 70%",
        end: "top 50%",
        scrub: 3,
        // markers: true,
      },
    });
  }, []);

  return (
    <section id="cards-carousel" className="pb-10 md:pt-16 md:pb-0">
      <div className="container">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
          }}
          className="relative z-20"
        >
          <CarouselContent className="">
            <CarouselItem className="pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="card-carousel flex h-full flex-col items-center gap-4">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone missão"
                  width={80}
                  height={80}
                  className="h-[100px] w-[100px] object-contain md:h-auto md:w-auto"
                />
                <p className="text-center text-lg font-bold text-white">
                  Tecnologia responsiva que permite incluir o acesso do seu
                  cliente direto ao seu App, Site ou WhatsApp.
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="card-carousel flex h-full flex-col items-center gap-4">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone missão"
                  width={80}
                  height={80}
                  className="h-[100px] w-[100px] object-contain md:h-auto md:w-auto"
                />
                <p className="text-center text-lg font-bold text-white">
                  Tempo de atendimento médio de no máximo 6 minutos
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="card-carousel flex h-full flex-col items-center gap-4">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone missão"
                  width={80}
                  height={80}
                  className="h-[100px] w-[100px] object-contain md:h-auto md:w-auto"
                />
                <p className="text-center text-lg font-bold text-white">
                  NPS DE 93 na zona de Excelência por +2 anos consecutivos
                </p>
              </div>
            </CarouselItem>

            <CarouselItem className="pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="card-carousel flex h-full flex-col items-center gap-4">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone missão"
                  width={80}
                  height={80}
                  className="h-[100px] w-[100px] object-contain md:h-auto md:w-auto"
                />
                <p className="text-center text-lg font-bold text-white">
                  Propostas modulares que permite o melhor custo-benefício do
                  mercado
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="mt-8 flex items-center justify-center gap-3 lg:hidden">
            {Array.from({ length: isTablet ? 2 : isSmartphone ? 4 : 4 }).map(
              (item, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-3 w-3 cursor-pointer rounded-full bg-white/50 hover:bg-white/100",
                    current === index && "bg-brand-light-green",
                  )}
                  onClick={() => handleGoToSlide({ slide: index })}
                />
              ),
            )}
          </div>
        </Carousel>
      </div>
    </section>
  );
};
