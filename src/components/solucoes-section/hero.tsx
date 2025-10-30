"use client";
import React, { type ReactElement } from "react";
import { CtaButton } from "../cta-button";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Image from "next/image";

interface HeroSolutionProps {
  title: ReactElement;
  description: ReactElement;
  classHeroVideo: string;
}

export const Hero = ({
  description,
  title,
  classHeroVideo,
}: HeroSolutionProps) => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title-hero", {
      type: "chars, words",
    });
    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.from(".solution-hero p", {
      x: -100,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
    });
  }, []);

  return (
    <section
      className={`solution-hero h-[600px] bg-[url(/images/bg-hero-solucao.svg)] bg-cover bg-bottom-left bg-no-repeat max-sm:h-[420px]`}
    >
      <div className="relative mx-auto h-full w-full max-w-[1600px]">
        <div className="relative h-full w-full">
          <div className="absolute right-0 bottom-0 z-0 h-full max-h-[500px] w-full max-w-[900px] rounded-3xl">
            <video
              src={classHeroVideo}
              style={{
                filter:
                  "sepia(100%) hue-rotate(85deg) saturate(200%) brightness(70%) contrast(90%)",
              }}
              autoPlay
              muted
              loop
              playsInline
              className="pointer-events-none h-full w-full rounded-3xl mask-alpha object-cover"
            ></video>
            <Image
              src="/images/img-detail-video-top.webp"
              alt=""
              width={979}
              height={564}
              className="absolute top-0 right-0 z-10 h-full w-full object-cover"
            />
            <div className="video-solution-blur absolute -top-2 right-0 z-30 h-[calc(100%+50px)] w-[calc(100%+50px)] rounded-3xl" />
          </div>
        </div>
        <div className="absolute top-0 left-0 z-40 h-full w-full">
          <div className="container flex h-full flex-col justify-center max-sm:justify-end max-sm:pb-14">
            <div className="flex w-full flex-col items-center md:max-w-[510px] md:items-start">
              <h1 className="title-hero text-brand-light-green mb-2 text-center leading-[110%] font-bold max-sm:text-4xl md:text-start md:text-[40px]">
                {title}
              </h1>
              <p className="mb-10 text-center text-lg leading-normal font-normal text-white md:mb-14 md:text-start md:text-2xl">
                {description}
              </p>
              <CtaButton url="#contato" title="Falar com nosso time" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
