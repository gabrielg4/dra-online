"use client";
import React from "react";
import { CtaButton } from "../cta-button";
import { MetricsMobileCarousel } from "../mobile/metrics-mobile-carousel";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { MetricsContainer } from "../animated-sections/metrics-container";

export const MetricsSection = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title-section-metrics", {
      type: "lines",
    });
    const subtitleSplit = new SplitText(".subtitle-metrics", {
      type: "chars, words",
    });

    gsap.from(titleSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#metrics",
        start: "top 70%",
      },
    });
    gsap.from(subtitleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.4,
      ease: "expo.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#metrics",
        start: "top 70%",
      },
    });

    gsap.from(".cta-button-metrics", {
      xPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#metrics",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section
      id="metrics"
      className="overflow-hidden bg-[url('/images/img-bg-beneficios.webp')] bg-cover bg-center py-20"
    >
      <div className="container flex flex-col items-center gap-8 md:gap-10 lg:flex-row lg:gap-14">
        <div className="gap- flex w-full max-w-none flex-row items-end lg:max-w-[373px] lg:flex-col lg:items-start lg:gap-0">
          <div className="w-full">
            <p className="subtitle-metrics mb-1 text-center font-semibold text-white md:text-start">
              <span className="text-brand-light-green">O impacto da</span> dr.
              <span className="font-normal">online</span>
            </p>
            <h2 className="title-section-metrics mb-0 text-center text-sm text-[32px] leading-[120%] font-medium text-white md:text-start lg:mb-4 lg:text-[40px]">
              A diferença entre oferecer consulta e
              <br className="hidden lg:inline-block" />
              <span className="inline-block font-semibold">
                {" "}
                oferecer resultado
              </span>
            </h2>
          </div>
          <div className="cta-button-metrics hidden w-fit md:block">
            <CtaButton title="Fale com um especialista" url="/contato" />
          </div>
        </div>
        <div className="w-full lg:max-w-[calc(100%-373px)]">
          <MetricsContainer />
          <MetricsMobileCarousel />
          <div className="mx-auto mt-8 block w-fit md:hidden">
            <CtaButton title="Fale com um especialista" url="/" />
          </div>
        </div>
      </div>
    </section>
  );
};
