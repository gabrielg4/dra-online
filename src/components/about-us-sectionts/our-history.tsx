"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

// Registrar plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

export const OurHistory = () => {
  const isMobile = useMediaQuery({
    maxWidth: 640,
  });
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // const titleElement = document.querySelector(".s-about-us h2");
    // const paragraphs = document.querySelectorAll(".s-about-us p");
    const imageContainer = document.querySelector(
      ".s-about-us .image-container",
    );

    // if (!titleElement || !paragraphs.length) return;

    // Split do título
    // const titleSplit = new SplitText(titleElement, {
    //   type: "chars, words",
    // });

    // Definir estado inicial visível antes de animar
    // gsap.set(titleSplit.chars, { yPercent: 0, opacity: 1 });
    // gsap.set(paragraphs, { x: 0, opacity: 1 });


    // gsap.set(imageContainer, { opacity: 1, scale: 1 });

    // Animação do título
    // gsap.fromTo(
    //   titleSplit.chars,
    //   {
    //     yPercent: 100,
    //     opacity: 0,
    //   },
    //   {
    //     yPercent: 0,
    //     opacity: 1,
    //     duration: 0.3,
    //     ease: "power3.out",
    //     stagger: 0.05,
    //     scrollTrigger: {
    //       trigger: ".s-about-us",
    //       start: isMobile ? "top 85%" : "top 75%",
    //       toggleActions: "play none none reverse",
    //     },
    //   },
    // );

    // Animação dos parágrafos
    // gsap.fromTo(
    //   paragraphs,
    //   {
    //     x: -50,
    //     opacity: 0,
    //   },
    //   {
    //     x: 0,
    //     opacity: 1,
    //     duration: 0.8,
    //     ease: "power3.out",
    //     stagger: 0.15,
    //     scrollTrigger: {
    //       trigger: ".s-about-us",
    //       start: isMobile ? "top 80%" : "top 70%",
    //       toggleActions: "play none none reverse",
    //     },
    //   },
    // );

    // Animação da imagem
    if (imageContainer) {
      gsap.fromTo(
        imageContainer,
        {
          opacity: 0,
          scale: 0.95,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".s-about-us",
            start: isMobile ? "top 85%" : "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    // Cleanup
    // return () => {
    //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    //   if (titleSplit.revert) titleSplit.revert();
    // };
  }, { scope: sectionRef, dependencies: [isMobile] });

  return (
    <section
      ref={sectionRef}
      id="nossa-historia"
      className="s-about-us bg-[url(/images/img-bg-secao-sobre.webp)] bg-cover bg-no-repeat py-10 lg:py-20"
    >
      <div className="container flex flex-col-reverse items-center gap-6 md:flex-row lg:gap-14">
        <div className="image-container relative hidden w-full md:block md:max-w-[459px]">
          <Image
            src="/images/gif-sobre.gif"
            alt="Imagem sobre seção online"
            width={629}
            height={504}
            className="relative z-20 h-[500px] w-[450px] object-cover"
            priority
          />
          <div className="from-brand-light-green to-brand-main-green absolute top-1/2 left-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b blur-[150px]" />
        </div>
        <div className="relative z-20 w-full md:max-w-[calc(100%-459px)]">
          <h2 className="mb-6 text-[32px] leading-[110%] font-bold text-white lg:text-[40px]">
            Cuidar bem nunca foi tão
            <span className="text-brand-light-green"> estratégico</span>
          </h2>
          <div className="grid gap-4">
            <p className="text-[16px] leading-normal text-white">
              A dr.online nasceu com um propósito claro: tornar o acesso à saúde
              mais simples, humano e acessível. Desde o início, unimos inovação
              tecnológica, ciência clínica e acolhimento para criar um
              ecossistema digital que conecta pessoas, empresas e operadoras em
              uma nova forma de cuidar.
            </p>
            <p className="text-[16px] leading-normal text-white">
              Nossa essência é simples: acreditar que saúde não pode esperar.
              Por isso, unimos acolhimento, inovação e resultado em cada
              atendimento, transformando a experiência do paciente e gerando
              valor estratégico para quem cuida.
            </p>
            <div className="relative -my-16 block w-full md:hidden">
              <Image
                src="/images/gif-sobre.gif"
                alt="Imagem sobre seção online"
                width={300}
                height={504}
                className="relative z-20 h-[450px] w-[450px] object-cover"
                priority
              />
              <div className="from-brand-light-green to-brand-main-green absolute top-1/2 left-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b blur-[150px]" />
            </div>
            <p className="text-[16px] leading-normal text-white">
              Hoje, oferecemos um ecossistema completo que conecta operadoras,
              empresas e milhões de pessoas a soluções digitais que resolvem de
              verdade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
