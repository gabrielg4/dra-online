"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { HeroMetricsCarousel } from "../mobile/hero-metrics-carousel";

gsap.registerPlugin(ScrollTrigger);

export const HeroAnimationMobile = () => {
  const sectionRef = useRef(null);
  const rightContainer = useRef(null);
  const midContainer = useRef(null);
  const leftContainer = useRef(null);
  const metricsRef = useRef(null);

  const card2 = useRef(null);
  const card3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        end: "top: 40%",
        scrub: 2,
        // markers: true,
      },
    });

    tl.to(
      leftContainer.current,
      {
        opacity: 0.5,
        x: -150,
      },
      0,
    )
      .to(
        card2.current,
        {
          x: -160,
          y: -90,
          skewY: -15,
        },
        0,
      )
      .to(
        midContainer.current,
        {
          opacity: 0,
          y: -300,
        },
        0,
      )
      .to(
        rightContainer.current,
        {
          opacity: 0.5,
          x: 315,
        },
        0,
      )
      .to(
        metricsRef.current,
        {
          y: -250,
          opacity: 1,
        },
        0,
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <div className="relative mt-32 block w-full md:hidden">
      {/* CARDS */}
      <div ref={sectionRef} className="flex justify-center gap-4">
        <div
          ref={leftContainer}
          className="flex w-full max-w-[calc(100%-150px)] gap-4"
        >
          <div
            ref={card2}
            className="bg-brand-main-green h-[200px] w-full rounded-xl p-5"
          >
            <p className="text-sm font-bold text-white">
              <span className="text-brand-dark-green">Tecnologia</span> própria
            </p>
          </div>
        </div>
        <div ref={midContainer} className="w-[340px] -translate-y-16">
          <Image
            src="/images/img-placeholder-hero-3.webp"
            alt=""
            width={340}
            height={417}
            className="h-full w-full"
          />
        </div>
        <div
          ref={rightContainer}
          className="flex w-full max-w-[calc(100%-150px)] gap-4"
        >
          <div
            ref={card3}
            className="bg-brand-light-green relative z-10 h-[200px] w-full rounded-xl p-5"
          >
            <p className="text-sm font-bold text-white">
              <span className="text-brand-dark-green">Implantação ágil,</span>
              escalável e com ROI comprovado.
            </p>
          </div>
        </div>
      </div>

      {/* Metricas */}
      <div
        ref={metricsRef}
        className="absolute left-1/2 w-full -translate-x-1/2 translate-y-20 opacity-0"
      >
        <HeroMetricsCarousel />
      </div>
    </div>
  );
};
