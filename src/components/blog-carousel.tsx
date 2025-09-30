"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BlogCard } from "./blog-card";
import { useEffect, useState } from "react";

import { type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export const BlogCarousel = () => {
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

  const placeholderBlogposts = [
    BlogCard,
    BlogCard,
    BlogCard,
    BlogCard,
    BlogCard,
    BlogCard,
  ];

  return (
    <Carousel
      setApi={setApi}
      className="sm:px-10"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="-ml-8 pt-3">
        {placeholderBlogposts.map((BlogpostCard, index) => (
          <CarouselItem
            key={index + 1}
            className={cn(
              "basis-full pl-8 transition-transform duration-300 sm:basis-1/2 lg:basis-1/3",
              // index + 1 !== current && "scale-90 opacity-70",
            )}
          >
            <BlogpostCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="hover:text-brand-light-green hidden h-10 w-10 cursor-pointer border-0 bg-transparent text-white hover:bg-transparent sm:-right-2 sm:flex lg:-right-12" />
      <CarouselPrevious className="hover:text-brand-light-green hidden h-10 w-10 cursor-pointer border-0 bg-transparent text-white hover:bg-transparent sm:-left-2 sm:flex lg:-left-12" />
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
