"use client";
import { cn } from "@/lib/utils";
import React, { type ReactElement } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { useEffect, useState } from "react";
interface TimelineContentProps {
  isActive: boolean;
  historyData: {
    title: string;
    content: ReactElement;
    videoUrl: string;
  }[];
}

export const TimelineContent = ({
  isActive,
  historyData,
}: TimelineContentProps) => {
  const [api, setApi] = useState<CarouselApi>();
  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  return (
    <div className={cn(isActive && "hidden")}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {historyData.map(({ content, videoUrl, title }, index) => (
            <CarouselItem
              key={index}
              className={cn("flex justify-center md:items-center")}
            >
              <div className={"flex flex-col gap-5 lg:flex-row lg:gap-10"}>
                <div className="flex w-full items-center lg:w-1/2">
                  <video
                    src={videoUrl}
                    className="mx-auto h-[200px] w-[540px] rounded-lg object-cover sm:h-[330px] lg:mx-0"
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}
                  ></video>
                </div>
                <div className="flex w-full flex-col justify-between lg:w-1/2">
                  <div>
                    {historyData.length > 1 && (
                      <span className="text-brand-light-green2/80 text-[16px]">
                        Parte {(index += 1)}
                      </span>
                    )}
                    <h2 className="text-brand-light-green mb-5 text-2xl font-bold md:text-[28px] lg:mb-6">
                      {title}
                    </h2>
                    {content}
                  </div>

                  {historyData.length > 1 && (
                    <div className="relative mt-6 flex items-center gap-3">
                      <CarouselPrevious className="text-brand-dark-green bg-brand-light-green hover:bg-brand-main-green relative left-0 h-10 w-10 cursor-pointer border-0 duration-300 hover:text-white" />
                      <CarouselNext className="text-brand-dark-green bg-brand-light-green hover:bg-brand-main-green relative right-0 h-10 w-10 cursor-pointer border-0 duration-300 hover:text-white" />
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
