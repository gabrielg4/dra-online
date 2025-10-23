"use client";
import React from "react";
import { CtaButton } from "../cta-button";
import { SecurityCards } from "../animated-sections/security-cards";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export const SecurityInformation = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title-section-security", {
      type: "chars, words",
    });
    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
      stagger: 0.05,
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
    <section id="security-information" className="relative pb-20">
      <div className="overlay -bottom-4 z-10"></div>
      <div className="container !px-0">
        <div className="image-wrapper relative flex items-end justify-center gap-4 bg-cover bg-center pt-20">
          <div className="blur-bg-security absolute -top-40 left-1/2 -translate-x-1/2" />
          {/* <Image
            src={"/images/img_phone_left.webp"}
            alt=""
            className="mobile-fone-left"
            width={256}
            height={510}
          />

          <Image
            src={"/images/img_phone_mid.webp"}
            alt=""
            className="mobile-fone-middle"
            width={311}
            height={581}
          />

          <Image
            src={"/images/img_phone_right.webp"}
            alt=""
            className="mobile-fone-right"
            width={256}
            height={510}
          /> */}

          <Image
            src={"/images/img_phone_left.webp"}
            alt=""
            className={`mobile-fone-left h-full w-[180px] object-contain`}
            width={200}
            height={400}
            quality={100}
          />

          <div className="video-masked mobile-fone-middle !w-[500px]">
            <video
              src={"/videos/video25.mp4"}
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>

          <Image
            src={"/images/img_phone_right.webp"}
            alt=""
            className={`mobile-fone-right h-full w-[180px] object-contain`}
            width={200}
            height={400}
            quality={100}
          />
        </div>
        <div className="content-wrapper relative z-10 -mt-20 flex flex-col items-center justify-center px-4">
          <h2 className="title-section-security mb-5 text-center text-[24px] leading-[110%] text-white sm:text-[32px] lg:text-[40px]">
            Segurança da informação
            <br />{" "}
            <span className="text-brand-light-green font-bold">
              de ponta a ponta
            </span>
          </h2>
          <p className="security-content mb-8 text-center text-lg font-normal text-white">
            Nosso propósito é transformar a jornada de saúde em valor real:
            dados em decisões, cuidado
            <br className="hidden sm:inline-block" /> em resultados e tecnologia
            em acessibilidade.A saúde digital só faz sentido quando respeita a
            <br className="hidden sm:inline-block" /> privacidade, a legislação
            e a segurança dos dados de quem mais importa: os seus
            <br className="hidden sm:inline-block" /> beneficiários. Na{" "}
            <span className="font-semibold">dr</span>{" "}
            <span className="text-brand-light-green">.</span> online,{" "}
            <span className="font-semibold">
              isso não é diferencial. É padrão.
            </span>
          </p>
          <div className="cta-button-security">
            <CtaButton title="Saiba mais" url="#get-in-touch" />
          </div>
          <SecurityCards />
          {/* <SecurityCardsMobileCarousel /> */}
        </div>
      </div>
    </section>
  );
};
