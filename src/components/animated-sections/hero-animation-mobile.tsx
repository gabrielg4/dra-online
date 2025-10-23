"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
            className="bg-brand-main-green h-[200px] w-full rounded-xl p-2"
          >
            <p className="text-brand-light-green mb-3 text-xs font-bold sm:text-sm">
              <span className="text-brand-dark-green">Tecnologia</span> própria,
              segura e escalável
            </p>
            <ul className="list-inside list-disc">
              <li className="text-[8px] font-bold text-white sm:text-[10px]">
                Integração Total
              </li>
              <li className="text-[8px] font-bold text-white sm:text-[10px]">
                Prescrição Digital
              </li>
              <li className="text-[8px] font-bold text-white sm:text-[10px]">
                Dashboards Inteligentes
              </li>
              <li className="text-[8px] font-bold text-white sm:text-[10px]">
                Compliance e Segurança da informação
              </li>
            </ul>
          </div>
        </div>
        <div ref={midContainer} className="w-[340px] -translate-y-16">
          {/* <Image
            src="/images/img-placeholder-hero-3.webp"
            alt=""
            width={340}
            height={417}
            className="h-full w-full"
          /> */}
          <div className="video-masked !h-full !w-full">
            <video
              src={"/videos/video27.mp4"}
              autoPlay
              muted
              loop
              playsInline
              className=""
            ></video>
          </div>
        </div>
        <div
          ref={rightContainer}
          className="flex w-full max-w-[calc(100%-150px)] gap-4"
        >
          <div
            ref={card3}
            className="bg-brand-light-green relative z-10 h-[200px] w-full rounded-xl p-2"
          >
            <p className="text-xs font-bold text-white sm:text-sm">
              <span className="text-brand-dark-green">
                Segurança, rastreabilidade e confiabilidade
              </span>
              <br />
              para decisões estratégicas
            </p>
          </div>
        </div>
      </div>

      {/* Metricas */}
      <div
        ref={metricsRef}
        className="absolute left-1/2 grid h-full w-full -translate-x-1/2 translate-y-20 grid-cols-2 gap-2 opacity-0"
      >
        <div className="col-span-1 flex items-center justify-center gap-4">
          <p className="text-brand-light-green text-[48px] leading-[110%] font-bold sm:text-[70px]">
            10
          </p>
          <span className="text-[16px] leading-normal text-white sm:text-lg">
            <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
              +
            </span>
            <br />
            milhões de
            <br /> vidas expostas
          </span>
        </div>
        <div className="col-span-1 flex items-center justify-center gap-4">
          <p className="text-brand-light-green text-[48px] leading-[110%] font-bold sm:text-[70px]">
            1
          </p>
          <span className="text-[16px] leading-normal text-white sm:text-lg">
            <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
              +
            </span>
            <br />
            mil consultas
            <br /> por ano
          </span>
        </div>
        <div className="col-span-1 flex items-center justify-center gap-4">
          <p className="text-brand-light-green text-[48px] leading-[110%] font-bold sm:text-[70px]">
            80
          </p>
          <span className="text-[16px] leading-normal text-white sm:text-lg">
            <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
              +
            </span>
            <br />
            mil consultas
            <br /> por mês
          </span>
        </div>
        <div className="col-span-1 flex items-center justify-center gap-4">
          <p className="text-brand-light-green text-[48px] leading-[110%] font-bold sm:text-[70px]">
            35
          </p>
          <span className="text-[16px] leading-normal text-white sm:text-lg">
            <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
              +
            </span>
            <br />
            consultórios
            <br /> digitais
          </span>
        </div>
        {/* <HeroMetricsCarousel /> */}
      </div>
    </div>
  );
};
