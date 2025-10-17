"use client";
import React, { type ReactElement } from "react";
import { CtaButton } from "../cta-button";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import Image from "next/image";

interface HeroSolutionProps {
  title: ReactElement;
  description: ReactElement;
  classHeroVideo: string;
}

export const Hero = ({
  description,
  title,
  classHeroVideo,
}: HeroSolutionProps) => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title-hero", {
      type: "chars, words",
    });
    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.from(".solution-hero p", {
      x: -100,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
    });
  }, []);

  return (
    <section
      className={`solution-hero h-[500px] bg-[url(/images/bg-hero-solucao.svg)] bg-cover bg-bottom-left bg-no-repeat md:h-[650px]`}
    >
      <div className="relative mx-auto h-full w-full max-w-[1600px]">
        <div className="relative h-full w-full">
          <div className="absolute right-0 bottom-0 z-0 h-full max-h-[500px] w-full max-w-[900px] rounded-3xl">
            <video
              src={classHeroVideo}
              style={{
                filter:
                  "sepia(100%) hue-rotate(85deg) saturate(200%) brightness(70%) contrast(90%)",
              }}
              autoPlay
              muted
              loop
              playsInline
              className="pointer-events-none h-full w-full rounded-3xl mask-alpha object-cover"
            ></video>
            <Image
              src="/images/img-detail-video-top.webp"
              alt=""
              width={979}
              height={564}
              className="absolute top-0 right-0 z-10 h-full w-full object-cover"
            />
            <div className="absolute -top-2 right-0 z-30 h-full w-full rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={979}
                height={564}
                viewBox="0 0 979 564"
                fill="none"
              >
                <path
                  d="M0 16C0 7.163 7.163 0 16 0h947c8.837 0 16 7.163 16 16v536c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V16z"
                  fill="url(#paint0_linear_3728_4872)"
                />
                <path
                  d="M0 16C0 7.163 7.163 0 16 0h947c8.837 0 16 7.163 16 16v536c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V16z"
                  fill="url(#paint1_linear_3728_4872)"
                />
                <path
                  d="M0 16C0 7.163 7.163 0 16 0h947c8.837 0 16 7.163 16 16v536c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V16z"
                  fill="url(#paint2_linear_3728_4872)"
                />
                <path
                  d="M0 16C0 7.163 7.163 0 16 0h947c8.837 0 16 7.163 16 16v536c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V16z"
                  fill="url(#paint3_linear_3728_4872)"
                />
                <path
                  d="M0 16C0 7.163 7.163 0 16 0h947c8.837 0 16 7.163 16 16v536c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V16z"
                  fill="url(#paint4_linear_3728_4872)"
                />
                <path
                  d="M0 16C0 7.163 7.163 0 16 0h947c8.837 0 16 7.163 16 16v536c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V16z"
                  fill="url(#paint5_linear_3728_4872)"
                />
                <path
                  d="M0 16C0 7.163 7.163 0 16 0h947c8.837 0 16 7.163 16 16v536c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V16z"
                  fill="url(#paint6_linear_3728_4872)"
                />
                <path
                  d="M0 16C0 7.163 7.163 0 16 0h947c8.837 0 16 7.163 16 16v536c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V16z"
                  fill="url(#paint7_linear_3728_4872)"
                />
                <path
                  d="M0 16C0 7.163 7.163 0 16 0h947c8.837 0 16 7.163 16 16v536c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V16z"
                  fill="url(#paint8_radial_3728_4872)"
                  fillOpacity={0.4}
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3728_4872"
                    x1={187.718}
                    y1={283.329}
                    x2={33.8935}
                    y2={283.329}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#075F55" stopOpacity={0} />
                    <stop
                      offset={0.62339}
                      stopColor="#075F55"
                      stopOpacity={0.533677}
                    />
                    <stop
                      offset={0.835271}
                      stopColor="#075F55"
                      stopOpacity={0.796031}
                    />
                    <stop offset={1} stopColor="#075F55" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_3728_4872"
                    x1={159.69}
                    y1={439.092}
                    x2={30.8392}
                    y2={564.182}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#075F55" stopOpacity={0} />
                    <stop
                      offset={0.62339}
                      stopColor="#075F55"
                      stopOpacity={0.533677}
                    />
                    <stop offset={0.979374} stopColor="#075F55" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_3728_4872"
                    x1={897.525}
                    y1={470.648}
                    x2={962.7}
                    y2={536.529}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#075F55" stopOpacity={0} />
                    <stop
                      offset={0.62339}
                      stopColor="#075F55"
                      stopOpacity={0.533677}
                    />
                    <stop offset={0.979374} stopColor="#075F55" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_3728_4872"
                    x1={842.122}
                    y1={283.329}
                    x2={979}
                    y2={283.329}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#075F55" stopOpacity={0} />
                    <stop
                      offset={0.62339}
                      stopColor="#075F55"
                      stopOpacity={0.533677}
                    />
                    <stop offset={1} stopColor="#075F55" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_3728_4872"
                    x1={902.088}
                    y1={79.2246}
                    x2={981.278}
                    y2={2.3462}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#075F55" stopOpacity={0} />
                    <stop
                      offset={0.62339}
                      stopColor="#075F55"
                      stopOpacity={0.533677}
                    />
                    <stop offset={1} stopColor="#075F55" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_3728_4872"
                    x1={137.529}
                    y1={73.8534}
                    x2={101.964}
                    y2={0.814275}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#075F55" stopOpacity={0} />
                    <stop
                      offset={0.62339}
                      stopColor="#075F55"
                      stopOpacity={0.533677}
                    />
                    <stop offset={1} stopColor="#075F55" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_3728_4872"
                    x1={902.088}
                    y1={79.2246}
                    x2={902.088}
                    y2={1.45415e-7}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#075F55" stopOpacity={0} />
                    <stop
                      offset={0.62339}
                      stopColor="#075F55"
                      stopOpacity={0.533677}
                    />
                    <stop offset={1} stopColor="#075F55" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_3728_4872"
                    x1={902.088}
                    y1={363.896}
                    x2={902.088}
                    y2={554.572}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#075F55" stopOpacity={0} />
                    <stop
                      offset={0.62339}
                      stopColor="#075F55"
                      stopOpacity={0.533677}
                    />
                    <stop offset={1} stopColor="#075F55" />
                  </linearGradient>
                  <radialGradient
                    id="paint8_radial_3728_4872"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0 284 -489.5 0 489.5 284)"
                  >
                    <stop stopColor="#075F55" stopOpacity={0} />
                    <stop offset={1} stopColor="#075F55" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="to-brand-dark-green absolute -bottom-2 left-0 h-56 w-full bg-gradient-to-b from-transparent" />
              <div className="from-brand-dark-green absolute -top-2 left-0 h-56 w-full bg-gradient-to-b to-transparent" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-40 h-full w-full">
          <div className="container flex h-full flex-col justify-center">
            <div className="flex w-full flex-col items-center md:max-w-[500px] md:items-start">
              <h1 className="title-hero text-brand-light-green mb-2 text-center text-[32px] leading-[110%] font-bold md:text-start md:text-[40px] lg:text-[48px]">
                {title}
              </h1>
              <p className="mb-10 text-center text-lg leading-normal font-normal text-white md:mb-14 md:text-start md:text-2xl">
                {description}
              </p>
              <CtaButton url="#contato" title="Falar com especialista" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
