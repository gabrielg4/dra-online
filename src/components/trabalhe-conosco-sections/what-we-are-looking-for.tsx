"use client";
import React from "react";
import { CtaButton } from "../cta-button";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { SplitText } from "gsap/all";

export const WhatWeAreLookingFor = () => {
  useGSAP(() => {
    // const titleSplit = new SplitText(".title-section-security", {
    //   type: "chars, words",
    // });
    // gsap.from(titleSplit.chars, {
    //   yPercent: 100,
    //   opacity: 0,
    //   duration: 2,
    //   ease: "expo.out",
    //   stagger: 0.05,
    //   scrollTrigger: {
    //     trigger: "#what-we-are-looking-for",
    //     start: "center 80%",
    //     end: "top top",
    //     scrub: 3,
    //     // markers: true,
    //   },
    // });

    // gsap.from(".security-content", {
    //   yPercent: 100,
    //   opacity: 0,
    //   duration: 1,
    //   ease: "expo.out",
    //   scrollTrigger: {
    //     trigger: "#what-we-are-looking-for",
    //     start: "center 70%",
    //     end: "bottom bottom",
    //     scrub: 3,
    //     // markers: true,
    //   },
    // });

    gsap.from(".mobile-fone-middle", {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".image-wrapper",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 3,
        // markers: true,
      },
    });

    gsap.from(".mobile-fone-left", {
      xPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#what-we-are-looking-for",
        start: "top 70%",
        end: "top top",
        scrub: 3,
      },
    });
    gsap.from(".mobile-fone-right", {
      xPercent: 100,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#what-we-are-looking-for",
        start: "top 70%",
        end: "top top",
        scrub: 3,
      },
    });
    gsap.from(".cta-button-security", {
      scale: 0,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".content-wrapper",
        start: "top 50%",
        end: "top top",
        scrub: 3,
      },
    });
  }, []);

  return (
    <section
      id="what-we-are-looking-for"
      className="relative pb-20 max-sm:pt-10 max-sm:pb-10"
    >
      <div className="overlay -bottom-4 z-10 to-65% max-sm:bottom-0"></div>
      <div className="container !px-0">
        <div className="image-wrapper relative flex items-end justify-center gap-8 bg-cover bg-center pt-20 max-sm:h-[330px] max-sm:gap-4 max-sm:pt-10">
          <div className="blur-bg-security absolute -top-40 left-1/2 -translate-x-1/2" />
          <Image
            src={"/images/img-phone-left-wwu.webp"}
            alt=""
            className="mobile-fone-left max-[440px]:h-[230px] max-[440px]:w-[200px]"
            width={220}
            height={470}
          />

          <div className="video-masked mobile-fone-middle !w-[311px] max-[440px]:h-[200px] max-[440px]:w-[200px] md:!h-[581px]">
            <video
              src={"/videos/video17.mp4"}
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>

          <Image
            src={"/images/img-phone-right-wwu.webp"}
            alt=""
            className="mobile-fone-right max-[440px]:h-[230px] max-[440px]:w-[200px]"
            width={220}
            height={470}
          />
        </div>
        <div className="content-wrapper relative z-20 -mt-20 flex flex-col items-center justify-center px-7">
          <h2 className="title-section-security mb-5 text-center text-[24px] leading-[110%] text-white sm:text-[32px] lg:text-[40px]">
            <span className="text-brand-light-green font-bold">
              Trabalhe com
            </span>{" "}
            tecnologia,
            <br /> inovação e impacto
          </h2>
          <p className="security-content mb-8 text-center text-lg font-normal text-white max-sm:text-base">
            Além da nossa rede médica, também buscamos profissionais apaixonados
            por saúde, <br className="hidden md:inline-block" /> tecnologia e
            inovação para atuar em diversas áreas da empresa: atendimento,
            <br className="hidden md:inline-block" /> tecnologia, design,
            marketing, operações, comercial e muito mais.
          </p>
          <div className="cta-button-security">
            <CtaButton title="Envie seu currículo" url="#form-curriculo" />
          </div>
        </div>
      </div>
    </section>
  );
};
