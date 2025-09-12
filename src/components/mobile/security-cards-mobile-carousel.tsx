"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export const SecurityCardsMobileCarousel = () => {
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

  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#security-mobile",
        start: "top 80%",
        end: "top: 80%",
        // markers: true,
      },
    });

    tl.to(".security-carousel", {
      y: 0,
      opacity: 1,
      duration: 2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <div
      id="security-mobile"
      className="mt-10 flex w-full items-end justify-center gap-8 px-20 md:hidden"
    >
      <Carousel
        setApi={setApi}
        className="security-carousel translate-y-10 opacity-0"
      >
        <CarouselContent className="-ml-4">
          <CarouselItem className={"basis-full pl-4"}>
            <div className="w-full">
              <Image
                src="/images/ic-shield-check.svg"
                alt="Ícone check"
                width={72}
                height={72}
                className="mx-auto"
              />
              <p className="text-center text-lg font-bold text-white">
                Adequação total
                <br /> à LGPD
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className={"basis-full pl-4"}>
            <div className="w-full">
              <Image
                src="/images/ic-shield-check.svg"
                alt="Ícone check"
                width={72}
                height={72}
                className="mx-auto"
              />
              <p className="text-center text-lg font-bold text-white">
                Arquitetura em nuvem (AWS) que
                <br /> garante segurança, estabilidade e<br />
                rastreabilidade
              </p>
            </div>
          </CarouselItem>
          <CarouselItem className={"basis-full pl-4"}>
            <div className="w-full">
              <Image
                src="/images/ic-shield-check.svg"
                alt="Ícone check"
                width={72}
                height={72}
                className="mx-auto"
              />
              <p className="text-center text-lg font-bold text-white">
                Conformidade com
                <br />
                normas da Anvisa
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
