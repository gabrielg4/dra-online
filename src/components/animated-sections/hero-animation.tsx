"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { HeroMetricsCarousel } from "../mobile/hero-metrics-carousel";

gsap.registerPlugin(ScrollTrigger);

export const HeroAnimation = () => {
  const sectionRef = useRef(null);
  const rightContainer = useRef(null);
  const midContainer = useRef(null);
  const leftContainer = useRef(null);
  const metricsRef = useRef(null);

  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
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
        card1.current,
        {
          y: -120,
          skewY: -20,
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
        card3.current,
        {
          y: -90,
          skewY: 20,
        },
        0,
      )
      .to(
        card4.current,
        {
          x: -160,
          y: -120,
          skewY: 15,
        },
        0,
      )
      .to(
        metricsRef.current,
        {
          y: -200,
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
    <div className="relative mt-40 hidden md:block">
      {/* CARDS */}
      <div ref={sectionRef} className="flex justify-center gap-8">
        <div
          ref={leftContainer}
          className="flex w-full max-w-[calc(100%-217px)] gap-4 lg:gap-8"
        >
          <div ref={card1} className="w-full max-w-[230px] -translate-y-24">
            <Image
              src="/images/img-placeholder-hero-1.webp"
              alt=""
              width={230}
              height={417}
            />
          </div>
          <div
            ref={card2}
            className="bg-brand-main-green h-[300px] w-full max-w-[216px] rounded-xl p-5 lg:h-[400px]"
          >
            <p className="text-xl font-bold text-white lg:text-2xl">
              <span className="text-brand-dark-green">Tecnologia</span> própria
            </p>
          </div>
        </div>
        <div
          ref={midContainer}
          className="w-full max-w-[217px] -translate-y-16"
        >
          <Image
            src="/images/img-placeholder-hero-3.webp"
            alt=""
            width={217}
            height={417}
          />
        </div>
        <div
          ref={rightContainer}
          className="flex w-full max-w-[calc(100%-217px)] gap-8"
        >
          <div
            ref={card3}
            className="bg-brand-light-green relative z-10 h-[300px] w-full max-w-[216px] rounded-xl p-5 lg:h-[400px]"
          >
            <p className="text-xl font-bold text-white lg:text-2xl">
              <span className="text-brand-dark-green">Implantação ágil,</span>
              escalável e com ROI comprovado.
            </p>
          </div>
          <div ref={card4} className="w-full max-w-[230px] -translate-y-24">
            <Image
              src="/images/img-placeholder-hero-2.webp"
              alt=""
              width={230}
              height={417}
            />
          </div>
        </div>
      </div>
      {/* Metricas */}
      <div
        ref={metricsRef}
        className="absolute left-1/2 -translate-x-1/2 translate-y-20 opacity-0"
      >
        <div className="flex items-center justify-center gap-16">
          <div className="flex items-center gap-4">
            <p className="text-brand-light-green text-[70px] leading-[110%] font-bold">
              7,5
            </p>
            <span className="text-md leading-normal text-white">
              <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                +
              </span>
              <br />
              milhões de
              <br /> clientes ativos
            </span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-brand-light-green text-[70px] leading-[110%] font-bold">
              950
            </p>
            <span className="text-md leading-normal text-white">
              <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                +
              </span>
              <br />
              mil consultas
              <br /> por ano
            </span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-brand-light-green text-[70px] leading-[110%] font-bold">
              79
            </p>
            <span className="text-md leading-normal text-white">
              <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
                +
              </span>
              <br />
              mil consultas
              <br /> por mês
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
