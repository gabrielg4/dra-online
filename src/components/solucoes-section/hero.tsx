"use client";
import React, { type ReactElement } from "react";
import { CtaButton } from "../cta-button";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

interface HeroSolutionProps {
  title: ReactElement;
  description: ReactElement;
  classHeroImage: string;
}

export const Hero = ({
  description,
  title,
  classHeroImage,
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
      className={`${classHeroImage} solution-hero relative h-[500px] bg-cover bg-center bg-no-repeat md:h-[580px]`}
    >
      <div className="relative z-20 container flex h-full flex-col justify-center">
        <div className="flex w-full flex-col items-center md:max-w-[500px] md:items-start">
          <h1 className="title-hero text-brand-light-green mb-2 text-center text-[32px] leading-[110%] font-bold md:text-start md:text-[40px] lg:text-[48px]">
            {title}
          </h1>
          <p className="mb-10 text-center text-lg leading-normal font-normal text-white md:mb-14 md:text-start md:text-2xl">
            {description}
          </p>
          <CtaButton url="#get-in-touch" title="Falar com especialista" />
        </div>
      </div>
      <div className="to-brand-dark-green absolute -bottom-2 left-0 z-10 h-full w-full bg-gradient-to-b from-transparent sm:h-32" />
    </section>
  );
};
