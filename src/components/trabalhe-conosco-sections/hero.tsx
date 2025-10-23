"use client";
import React from "react";
// import { VideosTrabalheConosco } from "../videos-trabalhe-conosco";
import { CtaButton } from "../cta-button";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { VerticalCarouselAboutUs } from "../animated-sections/vertical-carousel-about-us";

export const HeroWorkWithUs = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#hero-work-with-us h1", {
      type: "chars, words",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.5,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.from("#hero-work-with-us .description", {
      yPercent: 100,
      opacity: 0,
      duration: 3,
      ease: "expo.out",
    });
  }, []);
  return (
    <section
      id="hero-work-with-us"
      className="relative w-full overflow-hidden bg-[url(/images/img-bg-trabalhe-conosco.svg)] bg-cover bg-center bg-no-repeat pt-40 pb-20 md:h-[655px]"
    >
      <div className="relative z-30 container flex items-center justify-between">
        <div className="relative z-40 w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-center text-[32px] leading-[110%] text-white md:text-start md:text-[40px] lg:text-[48px]">
            Junte-se à <span className="font-bold">dr</span>
            <span className="text-brand-light-green">.</span> online <br />
            <span className="text-brand-light-green font-bold">
              e transforme o cuidado <br />
              com a saúde no Brasil
            </span>
          </h1>
          <p className="description mt-4 mb-5 text-center text-xl font-normal text-white md:mt-6 md:mb-10 md:text-start lg:mb-14">
            Aqui, você pode fazer a diferença na vida de milhares de pessoas
            como médico credenciado ou fazendo parte da equipe.
          </p>

          <div className="buttons-work-with-us flex flex-col items-center gap-6 md:flex-row">
            <CtaButton title="Enviar currículo" url="#form-curriculo" />
            <CtaButton
              title="Quero ser médico credenciado"
              url="#form-curriculo-medico"
            />
          </div>
        </div>
      </div>
      <div className="to-brand-dark-green absolute -bottom-2 left-0 z-20 h-full w-full bg-gradient-to-b from-transparent md:-bottom-1 lg:h-[500px]" />
      {/* <VideosTrabalheConosco /> */}
      <VerticalCarouselAboutUs
        videosColumn1={["/videos/video7.mp4", "/videos/video9.mp4"]}
        videosColumn2={["/videos/video10.mp4", "/videos/video8.mp4"]}
        videosColumn3={["/videos/video5.mp4", "/videos/video6.mp4"]}
      />
    </section>
  );
};
