"use client";
import Image from "next/image";
import React from "react";
import { CtaButton } from "../cta-button";
import { HeroAnimation } from "../animated-sections/hero-animation";
import { HeroAnimationMobile } from "../animated-sections/hero-animation-mobile";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
export const Hero = () => {
  useGSAP(() => {
    const descriptionSplit = new SplitText(".description", { type: "lines" });
    const titleSplit = new SplitText("#title", { type: "chars, words" });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
    });
    gsap.from(descriptionSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.2,
    });

    gsap.from(".cta-button", {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    });

    gsap.from(".image-detail", {
      x: 48,
      opacity: 0,
      duration: 1.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="overflow-hidden bg-[url('/images/img-bg_hero.webp')] bg-cover bg-center pt-40 pb-10 md:pb-20">
      <div className="container flex flex-col items-center justify-center">
        <h1
          id="title"
          className="mb-6 text-center text-[32px] leading-[110%] font-bold text-white md:text-[40px] lg:text-[48px]"
        >
          Somos a maior referência <br className="hidden md:inline-block" />
          de Saúde Digital no Brasil!
        </h1>
        <div className="relative mb-8 sm:mb-12">
          <div className="image-detail from-brand-dark-green to-brand-dark-green/0 absolute -top-1.5 -right-[60px] flex w-[201px] justify-end rounded-full bg-gradient-to-l p-1 sm:-right-[54px]">
            <Image
              className=""
              src="/images/people.webp"
              alt=""
              width={93}
              height={23}
            />
          </div>
          <p className="description relative z-10 text-center text-xl font-normal text-white">
            <span className="mr-8">Cuidamos da sua saúde</span>
            <br />
            <span className="mr-8">quando e onde você estiver.</span>
          </p>
        </div>
        <div className="cta-button">
          <CtaButton title="Agende uma demonstração" url="/" />
        </div>
        <HeroAnimation />
        <HeroAnimationMobile />
      </div>
    </section>
  );
};
