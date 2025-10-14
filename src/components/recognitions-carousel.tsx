"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
export const RecognitionsCarousel = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
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
        <CarouselItem className="flex items-center justify-center pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
          <Image
            src="/images/img-reconhecimento.svg"
            alt="Reconhecimento"
            width={120}
            height={200}
            className="object-contain"
          />
        </CarouselItem>
        <CarouselItem className="flex items-center justify-center pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
          <Image
            src="/images/img-reconhecimento.svg"
            alt="Reconhecimento"
            width={120}
            height={200}
            className="object-contain"
          />
        </CarouselItem>
        <CarouselItem className="flex items-center justify-center pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
          <Image
            src="/images/img-reconhecimento.svg"
            alt="Reconhecimento"
            width={120}
            height={200}
            className="object-contain"
          />
        </CarouselItem>
        <CarouselItem className="flex items-center justify-center pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
          <Image
            src="/images/img-reconhecimento.svg"
            alt="Reconhecimento"
            width={120}
            height={200}
            className="object-contain"
          />
        </CarouselItem>
      </CarouselContent>
      <div className="mt-8 flex items-center justify-center gap-3 lg:hidden">
        {Array.from({ length: isTablet ? 2 : isSmartphone ? 4 : 5 }).map(
          (item, index) => (
            <div
              key={index}
              className={cn(
                "bg-brand-dark-gray/30 hover:bg-brand-light-green h-3 w-3 cursor-pointer rounded-full",
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
