"use client";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CtaButton } from "./cta-button";
import { useMediaQuery } from "react-responsive";

interface SmartphoneSectionCardsProps {
  cardsBigger?: boolean;
  leftPhoneImg: string;
  middlePhoneImg: string;
  rightPhoneImg: string;
  subtitle: string;
}

export const SmartphoneSectionCards = ({
  leftPhoneImg,
  middlePhoneImg,
  rightPhoneImg,
  subtitle,
  cardsBigger = false,
}: SmartphoneSectionCardsProps) => {
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1023,
  });

  const isSmartphone = useMediaQuery({
    maxWidth: 767,
  });

  const startPhones = `top ${isTablet ? "80%" : isSmartphone ? "50%" : "50%"}`;

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
        start: startPhones,
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
        start: startPhones,
        end: "top top",
        scrub: 3,
        // markers: true,
      },
    });
    gsap.from(".mobile-fone-right", {
      xPercent: 100,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#security-information",
        start: startPhones,
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
          <div className="to-brand-dark-green absolute -bottom-2 left-0 z-10 h-[400px] w-full bg-gradient-to-b from-transparent"></div>
          <Image
            src={leftPhoneImg}
            alt=""
            className={`mobile-fone-left h-full ${cardsBigger ? "w-[340px]" : "w-[280px]"}`}
            width={256}
            height={510}
            quality={100}
          />

          <Image
            src={middlePhoneImg}
            alt=""
            className="mobile-fone-middle h-full w-[370px]"
            width={311}
            height={581}
            quality={100}
          />

          <Image
            src={rightPhoneImg}
            alt=""
            className={`mobile-fone-right h-full ${cardsBigger ? "w-[340px]" : "w-[280px]"}`}
            width={256}
            height={510}
            quality={100}
          />
        </div>
        <div className="content-wrapper relative z-10 -mt-20 flex flex-col items-center justify-center px-4">
          <h2 className="title-section-security mb-5 text-center text-[24px] leading-[110%] text-white sm:text-[32px] lg:text-[40px]">
            Melhor que ler,
            <span className="text-brand-light-green font-bold">
              é conhecer!
            </span>
          </h2>
          <p className="security-content mb-8 text-center text-lg font-normal text-white">
            {subtitle}
          </p>
          <div className="cta-button-section">
            <CtaButton title="Falar com nosso time" url="#contato" />
          </div>
        </div>
      </div>
    </section>
  );
};
