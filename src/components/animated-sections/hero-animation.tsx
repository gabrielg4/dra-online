"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Counter from "../counter";

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
      <div ref={sectionRef} className="hero-metrics flex justify-center gap-8">
        <div
          ref={leftContainer}
          className="flex w-full max-w-[calc(100%-217px)] gap-4 lg:gap-8"
        >
          <div
            ref={card1}
            className="max-w relative hidden w-[250px] -translate-y-24 lg:block"
          >
            {/* <Image
              src="/images/img-placeholder-hero-1.webp"
              alt=""
              width={230}
              height={417}
            /> */}
            <div className="video-masked">
              <video
                src={"/videos/video26.mp4"}
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
            {/* <div className="mobile-fone-left "></div> */}
            <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-end px-9 pb-6">
              <p className="text-[28px] leading-[130%] font-bold text-white">
                Modelo assistencial
                <br />
                <span className="text-brand-light-green">100% digital</span>
              </p>
            </div>
          </div>
          <div
            ref={card2}
            className="bg-brand-main-green h-[300px] w-[220px] rounded-xl p-5 lg:h-[350px]"
          >
            <p className="text-brand-light-green mb-3 text-xl font-bold lg:text-2xl">
              <span className="text-brand-dark-green">Tecnologia</span> própria,
              segura e escalável
            </p>
            <ul className="list-inside list-disc">
              <li className="text-sm font-bold text-white">Integração Total</li>
              <li className="text-sm font-bold text-white">
                Prescrição Digital
              </li>
              <li className="text-sm font-bold text-white">
                Dashboards Inteligentes
              </li>
              <li className="text-sm font-bold text-white">
                Compliance e Segurança da informação
              </li>
            </ul>
          </div>
        </div>
        <div
          ref={midContainer}
          className="w-full max-w-[217px] -translate-y-16"
        >
          {/* <Image
            src="/images/img-placeholder-hero-3.webp"
            alt=""
            width={217}
            height={417}
          /> */}
          <div className="video-masked">
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
          className="flex w-full max-w-[calc(100%-217px)] gap-8"
        >
          <div
            ref={card3}
            className="bg-brand-light-green relative z-10 h-[300px] w-[220px] rounded-xl p-5 lg:h-[350px]"
          >
            <p className="text-xl font-bold text-white lg:text-xl">
              <span className="text-brand-dark-green">
                Segurança, rastreabilidade e confiabilidade
              </span>
              <br />
              para decisões estratégicas
            </p>
          </div>
          <div
            ref={card4}
            className="relative hidden w-[250px] -translate-y-24 lg:block"
          >
            {/* <Image
              src="/images/img-placeholder-hero-2.webp"
              alt=""
              width={230}
              height={417}
            /> */}
            <div className="video-masked">
              <video
                src={"/videos/video28.mp4"}
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
            <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-end px-9 pb-6">
              <p className="text-[17px] font-bold text-white">
                <span className="text-brand-light-green text-2xl">
                  White Label
                </span>
                <br />
                A tecnologia é nossa.
                <br />O protagonismo é todo da sua marca.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Metricas */}
      <div
        ref={metricsRef}
        className="absolute left-1/2 w-full -translate-x-1/2 translate-y-20 opacity-0"
      >
        <div className="flex items-center justify-center gap-10">
          <div className="flex items-center gap-4">
            <p className="text-brand-light-green text-[52px] leading-[110%] font-bold lg:text-[70px]">
              <Counter
                scroll={{
                  trigger: ".hero-metrics",
                  start: "top 40%",
                  end: "top: 40%",
                }}
                from={0}
                to={1}
                duration={2}
              />
            </p>
            <span className="text-md leading-normal text-white">
              <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
                +
              </span>
              <br />
              milhões de
              <br /> vidas expostas
            </span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-brand-light-green text-[52px] leading-[110%] font-bold lg:text-[70px]">
              <Counter
                scroll={{
                  trigger: ".hero-metrics",
                  start: "top 40%",
                  end: "top: 40%",
                }}
                from={0}
                to={1}
                duration={2}
              />
            </p>
            <span className="text-md leading-normal text-white">
              <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
                +
              </span>
              <br />
              milhão consultas
              <br /> por ano
            </span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-brand-light-green text-[52px] leading-[110%] font-bold lg:text-[70px]">
              <Counter
                scroll={{
                  trigger: ".hero-metrics",
                  start: "top 40%",
                  end: "top: 40%",
                }}
                from={0}
                to={80}
                duration={2}
              />
            </p>
            <span className="text-md leading-normal text-white">
              <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
                +
              </span>
              <br />
              mil consultas
              <br /> por mês
            </span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-brand-light-green text-[52px] leading-[110%] font-bold lg:text-[70px]">
              <Counter
                scroll={{
                  trigger: ".hero-metrics",
                  start: "top 40%",
                  end: "top: 40%",
                }}
                from={0}
                to={35}
                duration={2}
              />
            </p>
            <span className="text-md leading-normal text-white">
              <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
                +
              </span>
              <br />
              consultórios
              <br /> digitais
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
