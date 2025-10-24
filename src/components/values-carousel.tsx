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

export const ValuesCarousel = () => {
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
    const metricCards = gsap.utils.toArray(".value-card");
    gsap.from(metricCards, {
      yPercent: 100,
      opacity: 0,
      duration: 3,
      ease: "expo.out",
      stagger: 0.6,
      scrollTrigger: {
        trigger: ".s-values",
        start: "top 90%",
        // end: "bottom 70%",
        scrub: true,
      },
    });
  }, []);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
      }}
      className="relative z-20"
    >
      <CarouselContent className="pb-16">
        <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3">
          <div className="value-card flex h-fit flex-col items-center justify-center gap-4 rounded-lg bg-white/10 p-6 shadow-2xl/10">
            <Image
              src="/images/ic-missao.svg"
              alt="Ícone missão"
              width={80}
              height={80}
              className="object-contain"
            />
            <h3 className="text-center text-2xl font-bold text-white">
              Missão
            </h3>
            <p className="text-center text-[16px] leading-normal text-white">
              Democratizar o acesso à saúde digital, promovendo cuidado de
              qualidade, segurança e proximidade entre profissionais da saúde e
              pacientes, contribuindo para uma vida mais saudável para todos.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-8 md:basis-1/2 md:pt-14 lg:basis-1/3">
          <div className="value-card flex h-fit flex-col items-center justify-center gap-4 rounded-lg bg-white/10 p-6 shadow-2xl/10">
            <Image
              src="/images/ic-missao.svg"
              alt="Ícone missão"
              width={80}
              height={80}
              className="object-contain"
            />
            <h3 className="text-center text-2xl font-bold text-white">
              Missão
            </h3>
            <p className="text-center text-[16px] leading-normal text-white">
              Ser referência nacional em saúde digital, promovendo impacto
              positivo na vida das pessoas por meio de soluções tecnológicas
              inovadoras e centradas na humanização do cuidado.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3">
          <div className="value-card flex h-fit flex-col items-center justify-center gap-4 rounded-lg bg-white/10 p-6 shadow-2xl/10 lg:h-[350px]">
            <Image
              src="/images/ic-valores.svg"
              alt="Ícone valores"
              width={80}
              height={80}
              className="object-contain"
            />
            <h3 className="text-center text-2xl font-bold text-white">
              Valores
            </h3>
            <p className="text-center text-[16px] leading-normal font-bold text-white">
              Excelência no atendimento
              <br />
              Modernização
              <br />
              Encantamento
              <br />
              Ética e Transparência
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <div className="flex items-center justify-center gap-3 lg:hidden">
        {Array.from({ length: isTablet ? 2 : isSmartphone ? 3 : 3 }).map(
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
  );
};
