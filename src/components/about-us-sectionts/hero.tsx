"use client";
import { useGSAP } from "@gsap/react";
import { VerticalCarouselAboutUs } from "../animated-sections/vertical-carousel-about-us";
import { CtaButton } from "../cta-button";

import React from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export const Hero = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".about-title", {
      type: "chars, words",
    });
    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.from(".about-description", {
      x: -100,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
    });
  }, []);
  return (
    <section className="relative overflow-hidden bg-[url(/images/img-bg-sobre-nos.svg)] bg-cover bg-center bg-no-repeat pt-48 pb-16 sm:pt-32 sm:pb-32 lg:pt-40">
      <div className="relative z-30 container">
        <div className="flex w-full max-w-[450px] flex-col items-center md:items-start lg:max-w-[510px]">
          <h1 className="about-title text-center text-[32px] leading-[110%] font-bold text-white md:text-start md:text-[40px] lg:text-[48px]">
            <span className="text-brand-light-green">
              Transformamos saúde <br className="hidden md:inline-block" />
              digital
            </span>{" "}
            em valor real
          </h1>
          <p className="about-description mt-6 mb-10 text-center text-lg leading-normal font-normal text-white md:text-start md:text-xl">
            A <strong>dr.</strong>online é um ecossistema que combina tecnologia
            de ponta, cuidado humanizado e padrões rigorosos de segurança para
            oferecer às operadoras, empresas e pessoas uma experiência completa
            em saúde, acessível, confiável e resolutiva.
          </p>

          <CtaButton url="#nossa-historia" title="Conheça" />
        </div>
      </div>
      <div className="to-brand-dark-green absolute -bottom-2 left-0 z-20 h-full w-full bg-gradient-to-b from-transparent to-90% sm:h-[500px] md:-bottom-1" />
      <VerticalCarouselAboutUs
        videosColumn1={["/videos/video7.mp4", "/videos/video9.mp4"]}
        videosColumn2={["/videos/video10.mp4", "/videos/video8.mp4"]}
        videosColumn3={["/videos/video5.mp4", "/videos/video6.mp4"]}
      />
    </section>
  );
};
