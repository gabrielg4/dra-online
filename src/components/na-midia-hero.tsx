"use client";

import React from "react";
import { VerticalCarouselAboutUs } from "./animated-sections/vertical-carousel-about-us";
import { CtaButton } from "./cta-button";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export const NaMidiaHero = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".na-midia-hero-title", {
      type: "chars, words",
    });
    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.05,
    });
  }, []);
  return (
    <section className="relative overflow-hidden bg-[url(/images/img-bg-midia.webp)] bg-cover bg-center bg-no-repeat pt-48 pb-16 sm:pt-32 sm:pb-32">
      <div className="relative z-30 container">
        <div className="flex w-full max-w-[450px] flex-col items-center lg:max-w-[510px]">
          <h1 className="na-midia-hero-title text-center text-white">
            <span className="text-[72px]">
              <span className="font-bold">dr</span>
              <span className="text-brand-light-green leading-[100%]">.</span>
              online <br />
            </span>
            <span className="-mt-8 inline-block text-[92px] font-bold">
              na Mídia
            </span>
          </h1>
          <p className="mb-6 text-center text-xl leading-normal font-normal text-white md:mb-10 lg:mb-14">
            Veja o que os grandes portais <br />
            estão falando sobre a dr.online
          </p>

          <CtaButton url="#noticias" title="Ver notícias" />
        </div>
      </div>
      <div className="to-brand-dark-green absolute -bottom-2 left-0 z-20 h-full w-full bg-gradient-to-b from-transparent sm:h-[500px]" />
      <VerticalCarouselAboutUs
        videosColumn1={["/videos/video18.mp4", "/videos/video19.mp4"]}
        videosColumn2={["/videos/video20.mp4", "/videos/video21.mp4"]}
        videosColumn3={["/videos/video5.mp4", "/videos/video6.mp4"]}
      />
    </section>
  );
};
