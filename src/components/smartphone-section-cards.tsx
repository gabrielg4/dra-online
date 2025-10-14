"use client";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CtaButton } from "./cta-button";

export const SmartphoneSectionCards = () => {
  useGSAP(() => {
    gsap.from(".title-section-security", {
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#security-information",
        start: "center 80%",
        end: "top top",
        scrub: 3,
        // markers: true,
      },
    });

    gsap.from(".security-content", {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#security-information",
        start: "center 70%",
        end: "bottom bottom",
        scrub: 3,
        // markers: true,
      },
    });

    gsap.from(".mobile-fone-middle", {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".image-wrapper",
        start: "top 50%",
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
        trigger: "#security-information",
        start: "top 50%",
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
        trigger: "#security-information",
        start: "top 50%",
        end: "top top",
        scrub: 3,
      },
    });
    gsap.from(".cta-button-section", {
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
    <section id="security-information" className="overflow-hidden pb-20">
      <div className="container !px-0">
        <div className="image-wrapper relative flex items-end justify-center gap-8 overflow-hidden bg-[url('/images/bg-security.webp')] bg-cover bg-center pt-20">
          <div className="overlay z-10"></div>
          <Image
            src={"/images/img-phone-left-sol-1.webp"}
            alt=""
            className="mobile-fone-left"
            width={256}
            height={510}
            quality={100}
          />

          <Image
            src={"/images/img-phone-middle-sol-1.webp"}
            alt=""
            className="mobile-fone-middle"
            width={311}
            height={581}
            quality={100}
          />

          <Image
            src={"/images/img-phone-right-sol-1.webp"}
            alt=""
            className="mobile-fone-right"
            width={256}
            height={510}
            quality={100}
          />
        </div>
        <div className="content-wrapper relative z-10 -mt-20 flex flex-col items-center justify-center px-4">
          <h2 className="title-section-security mb-5 text-center text-[24px] leading-[110%] text-white sm:text-[32px] lg:text-[40px]">
            Melhor que ler,
            <span className="text-brand-light-green font-bold">é ver!</span>
          </h2>
          <p className="security-content mb-8 text-center text-lg font-normal text-white">
            Veja como funciona nossa solução de entrevista qualificada na
            prática.
          </p>
          <div className="cta-button-section">
            <CtaButton title="Falar com especialista" url="#contato" />
          </div>
        </div>
      </div>
    </section>
  );
};
