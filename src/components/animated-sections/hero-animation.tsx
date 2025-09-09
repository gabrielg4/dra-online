"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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
        markers: true,
      },
    });

    tl.to(
      leftContainer.current,
      {
        opacity: 0.5,
        x: -150,
      },
      0
    )
      .to(
        card1.current,
        {
          y: -120,
          skewY: -20,
        },
        0
      )
      .to(
        card2.current,
        {
          x: -160,
          y: -90,
          skewY: -15,
        },
        0
      )
      .to(
        midContainer.current,
        {
          opacity: 0,
          y: -300,
        },
        0
      )
      .to(
        rightContainer.current,
        {
          opacity: 0.5,
          x: 315,
        },
        0
      )
      .to(
        card3.current,
        {
          y: -90,
          skewY: 20,
        },
        0
      )
      .to(
        card4.current,
        {
          x: -160,
          y: -120,
          skewY: 15,
        },
        0
      )
      .to(
        metricsRef.current,
        {
          y: -200,
          opacity: 1,
        },
        0
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <div className="mt-40 w-full relative">
      {/* CARDS */}
      <div ref={sectionRef} className="flex justify-center gap-8">
        <div
          ref={leftContainer}
          className="w-full max-w-[calc(100%-217px)] flex gap-8"
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
            className="w-full max-w-[216px] h-[400px] p-5 rounded-xl bg-brand-main-green"
          >
            <p className="text-2xl font-bold text-white">
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
          className="w-full max-w-[calc(100%-217px)] flex gap-8"
        >
          <div
            ref={card3}
            className="relative z-10 w-full max-w-[216px] h-[400px] p-5 rounded-xl bg-brand-light-green"
          >
            <p className="text-2xl font-bold text-white">
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
        className="opacity-0 translate-y-20 absolute left-1/2 -translate-x-1/2"
      >
        <div className="flex items-center justify-center gap-16">
          <div className="flex items-center gap-4">
            <p className="text-[70px] font-bold text-brand-light-green leading-[110%]">
              7,5
            </p>
            <span className="text-md leading-normal text-white">
              <span className="text-2xl inline-block -mb-2 font-bold bg-gradient-to-r from-brand-main-green to-brand-light-green bg-clip-text text-transparent">
                +
              </span>
              <br />
              milhões de
              <br /> clientes ativos
            </span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-[70px] font-bold text-brand-light-green leading-[110%]">
              950
            </p>
            <span className="text-md leading-normal text-white">
              <span className="text-2xl inline-block -mb-2 font-bold bg-gradient-to-r from-brand-main-green to-brand-light-green bg-clip-text text-transparent">
                +
              </span>
              <br />
              mil consultas
              <br /> por ano
            </span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-[70px] font-bold text-brand-light-green leading-[110%]">
              79
            </p>
            <span className="text-md leading-normal text-white">
              <span className="text-2xl inline-block -mb-2 font-bold bg-gradient-to-r from-brand-main-green to-brand-light-green bg-clip-text text-transparent">
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
