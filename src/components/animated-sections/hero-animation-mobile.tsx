"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Counter from "../counter";

gsap.registerPlugin(ScrollTrigger);

export const HeroAnimationMobile = () => {
  const sectionRef = useRef(null);
  const leftContainer = useRef(null);
  const metricsRef = useRef(null);

  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);
  const card5 = useRef(null);
  const card6 = useRef(null);
  const card7 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `top 50%`,
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

      .from(
        card1.current,
        {
          x: 0,
          y: -60,
          opacity: 0,
        },
        0,
      )

      .to(
        card1.current,
        {
          x: 0,
          y: -35,
          opacity: 1,
        },
        0,
      )
      .from(
        card2.current,
        {
          x: -120,
          y: -120,
        },
        0,
      )

      .to(
        card2.current,
        {
          x: 0,
          y: -140,
        },
        0,
      )
      .from(
        card3.current,
        {
          x: 0,
          y: 0,
        },
        0,
      )

      .to(
        card3.current,
        {
          y: 160,
        },
        0,
      )
      .from(
        card4.current,
        {
          x: 0,
          y: 0,
        },
        0,
      )
      .to(
        card4.current,
        {
          y: 110,
        },
        0,
      )

      .from(
        card5.current,
        {
          x: 0,
          y: 0,
        },
        0,
      )
      .to(
        card5.current,
        {
          y: -35,
        },
        0,
      )

      .from(
        card5.current,
        {
          x: 0,
          y: 0,
        },
        0,
      )
      .to(
        card5.current,
        {
          y: -35,
        },
        0,
      )

      .from(
        card6.current,
        {
          x: 0,
          y: 0,
        },
        0,
      )
      .to(
        card6.current,
        {
          x: -115,
          y: 200,
        },
        0,
      )

      .from(
        card7.current,
        {
          x: 0,
          y: 0,
          opacity: 0,
        },
        0,
      )

      .to(
        card7.current,
        {
          x: 0,
          y: 310,
          opacity: 1,
        },
        0,
      )
      .from(
        metricsRef.current,
        {
          y: -50,
          opacity: 0,
        },
        0,
      )
      .to(
        metricsRef.current,
        {
          y: 0,
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
    <div className="relative mt-20 block h-[740px] w-full md:hidden">
      {/* CARDS */}
      <div ref={sectionRef} className="flex w-[800px] justify-center gap-4">
        <div
          ref={card1}
          className="card-01 bg-brand-main-green absolute top-0 right-0 left-0 mx-auto w-full max-w-[103px] rounded-lg p-[10px] duration-300 ease-linear"
        >
          <p className="text-brand-dark-green text-[10px] font-bold">
            Integração Total
            <span className="text-brand-light-green block">
              Prescrição Digital
            </span>
            Dashboards Inteligentes
            <span className="text-brand-light-green block">
              Compliance e Segurança da informação
            </span>
          </p>
        </div>

        <div
          ref={card2}
          className="card-02 absolute top-0 left-0 z-20 w-[110px] -translate-y-24 duration-300 ease-linear"
        >
          <div className="video-masked">
            <video autoPlay muted loop playsInline>
              <source
                src={
                  "https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Home/Mi%CC%81dia2.mp4"
                }
              />
            </video>
          </div>
        </div>

        <div
          ref={card3}
          className="card-03 bg-brand-main-green absolute top-4 left-0 z-30 h-[200px] w-full max-w-[105px] rounded-xl p-3 duration-300 ease-linear"
        >
          <p className="text-brand-dark-green text-sm font-bold">
            Tecnologia{" "}
            <span className="block text-white">
              própria, segura e escalável
            </span>
          </p>
        </div>

        <div
          ref={card4}
          className="card-04 absolute -top-28 right-0 left-0 z-50 mx-auto h-[180px] w-full max-w-[110px] duration-300 ease-linear"
        >
          <div className="video-masked">
            <video autoPlay muted loop playsInline>
              <source
                src={
                  "https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Home/Mi%CC%81dia1.mp4"
                }
              />
            </video>
          </div>
          <div className="absolute right-0 -bottom-20 left-0 z-10 flex w-full flex-col justify-end px-3">
            <p className="text-sm leading-[130%] font-bold text-white">
              Modelo assistencial
              <br />
              <span className="text-brand-light-green">100% digital</span>
            </p>
          </div>
        </div>

        <div
          ref={card5}
          className="card-05 bg-brand-light-green absolute right-0 z-10 h-[200px] w-full max-w-[110px] rounded-xl p-2 duration-300 ease-linear"
        >
          <p className="text-xs font-bold text-white">
            <span className="text-brand-dark-green">
              Implantação <br />
              ágil,
            </span>{" "}
            escalável <br />e com ROI comprovado.
          </p>
        </div>

        <div
          ref={card6}
          className="card-06 absolute -top-32 -right-[115px] z-50 h-[196px] w-full max-w-[110px] duration-300 ease-linear"
        >
          <div className="video-masked">
            <video autoPlay muted loop playsInline className="-scale-x-100">
              <source
                src={
                  "https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Home/Mi%CC%81dia3.mp4"
                }
              />
            </video>
          </div>
          <div className="absolute -bottom-20 left-0 z-10 flex w-full px-2">
            <p className="text-sm font-bold text-white">
              <span className="text-brand-light-green text-base">
                White Label
              </span>
            </p>
          </div>
        </div>

        <div
          ref={card7}
          className="card-07 bg-brand-light-green absolute right-0 left-0 z-10 mx-auto h-fit w-full max-w-[110px] rounded-xl p-2 duration-300 ease-linear"
        >
          <p className="text-xs font-bold text-white">
            <span className="text-brand-dark-green">
              Segurança, rastreabilidade e confiabilidade
            </span>{" "}
            para decisões estratégicas
          </p>
        </div>
      </div>

      {/* Metricas */}
      <div ref={metricsRef} className="absolute bottom-0 w-full">
        <div className="mx-auto grid w-full max-w-[304px] grid-cols-2 items-center justify-center justify-items-center gap-4">
          <div className="border-brand-main-green flex w-full max-w-[144px] flex-col items-start gap-2 rounded-2xl border p-3">
            <p className="text-brand-light-green flex items-start text-[52px] leading-[110%] font-bold lg:text-[70px]">
              <Counter
                scroll={{
                  trigger: ".hero-metrics",
                  start: "top 40%",
                  end: "top: 40%",
                }}
                from={0}
                to={10}
                duration={2}
              />
              <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                +
              </span>
            </p>
            <span className="text-md text-sm text-white">
              milhões de
              <br /> vidas expostas
            </span>
          </div>

          <div className="border-brand-main-green flex w-full max-w-[144px] flex-col items-start gap-2 rounded-2xl border p-3">
            <p className="text-brand-light-green flex items-start text-[52px] leading-[110%] font-bold lg:text-[70px]">
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
              <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                +
              </span>
            </p>
            <span className="text-md text-sm leading-normal text-white">
              milhão consultas por ano
            </span>
          </div>

          <div className="border-brand-main-green flex w-full max-w-[144px] flex-col items-start gap-2 rounded-2xl border p-3">
            <p className="text-brand-light-green flex items-start text-[52px] leading-[110%] font-bold lg:text-[70px]">
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
              <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                +
              </span>
            </p>
            <span className="text-md text-sm leading-normal text-white">
              mil consultas <br />
              por mês
            </span>
          </div>

          <div className="border-brand-main-green flex w-full max-w-[144px] flex-col items-start gap-2 rounded-2xl border p-3">
            <p className="text-brand-light-green flex items-start text-[52px] leading-[110%] font-bold lg:text-[70px]">
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
              <span className="from-brand-main-green to-brand-light-green -mb-2 inline-block bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                +
              </span>
            </p>
            <span className="text-md text-sm leading-normal text-white">
              consultórios digitais
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
