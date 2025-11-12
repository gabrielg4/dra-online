"use client";

import React from "react";
import { VerticalCarouselAboutUs } from "./animated-sections/vertical-carousel-about-us";
import { CtaButton } from "./cta-button";
// import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/all";
// import gsap from "gsap";

export const NaMidiaHero = () => {
  // useGSAP(() => {
  //   const titleSplit = new SplitText(".na-midia-hero-title", {
  //     type: "chars, words",
  //   });
  //   gsap.from(titleSplit.chars, {
  //     yPercent: 100,
  //     opacity: 0,
  //     duration: 1.2,
  //     ease: "expo.out",
  //     stagger: 0.05,
  //   });
  // }, []);
  return (
    <section className="hero-about-us relative overflow-hidden bg-[url(/images/img-bg-midia.webp)] bg-cover bg-center bg-no-repeat pt-48 pb-16 sm:pt-40 sm:pb-32">
      <div className="relative z-30 container">
        <div className="flex w-full max-w-[450px] flex-col items-center lg:max-w-[510px]">
          <h1 className="na-midia-hero-title text-center leading-tight text-white max-sm:text-5xl max-sm:leading-[110%]">
            <span className="text-[72px] max-sm:text-5xl">
              <span className="font-bold">dr</span>
              <span className="text-brand-light-green leading-[100%]">.</span>
              online <br />
            </span>
            <span className="-mt-8 inline-block text-[92px] font-bold max-sm:text-5xl">
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
      <div className="to-brand-dark-green absolute -bottom-2 left-0 z-20 h-full w-full bg-gradient-to-b from-transparent max-sm:to-60% sm:h-[500px]" />
      <VerticalCarouselAboutUs
        videosColumn1={[
          "https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/dr%20online%20na%20mi%CC%81dia/1007.mp4",
          "https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/dr%20online%20na%20mi%CC%81dia/envato_video_gen_Oct_02_2025_17_47_01.mp4",
        ]}
        videosColumn2={[
          "https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/dr%20online%20na%20mi%CC%81dia/grok-video-14cd896d-10e3-48eb-95d2-1e9c3b5d3aa0.mp4",
          "https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/dr online na mídia/grok-video-743a4c2b-df49-4ba9-bf9c-c72c6bb80aea.mp4",
        ]}
        videosColumn3={[
          "https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/dr%20online%20na%20mi%CC%81dia/grok-video-b8fe755b-c2e6-4e7d-bfcb-310dbf66f690.mp4",
          "/videos/video6.mp4",
        ]}
      />
    </section>
  );
};
