"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

export const OurHistory = () => {
  const isMobile = useMediaQuery({
    maxWidth: 640,
  });
  useGSAP(() => {
    const titleSplit = new SplitText(".s-about-us h2", {
      type: "chars, words",
    });
    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".s-about-us",
        start: "top 80%",
        end: isMobile ? "top 50%" : "bottom 80%",
        scrub: true,
      },
    });

    gsap.from(".s-about-us p", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".s-about-us",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="s-about-us bg-[url(/images/img-bg-secao-sobre.webp)] bg-cover bg-no-repeat py-10 lg:py-20">
      <div className="container flex flex-col-reverse items-center gap-6 md:flex-row lg:gap-14">
        <div className="relative w-full md:max-w-[459px]">
          <Image
            src="/images/gif-sobre.gif"
            alt="Imagem sobre seção online"
            width={629}
            height={504}
            className="relative z-20 h-[500px] w-[450px] object-cover"
          />
          <div className="from-brand-light-green to-brand-main-green absolute top-1/2 left-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b blur-[150px]" />
        </div>
        <div className="relative z-20 w-full md:max-w-[calc(100%-459px)]">
          <h2 className="mb-6 text-[32px] leading-[110%] font-bold text-white lg:text-[40px]">
            Cuidar bem nunca foi tão
            <span className="text-brand-light-green"> estratégico</span>
          </h2>
          <p className="text-[16px] leading-normal text-white">
            A dr.online nasceu com um propósito claro: tornar o acesso à saúde
            mais simples, humano e acessível. Desde o início, unimos inovação
            tecnológica, ciência clínica e acolhimento para criar um ecossistema
            digital que conecta pessoas, empresas e operadoras em uma nova forma
            de cuidar.
            <br />
            <br />
            Nossa essência é simples: acreditar que saúde não pode esperar. Por
            isso, unimos acolhimento, inovação e resultado em cada atendimento,
            transformando a experiência do paciente e gerando valor estratégico
            para quem cuida.
            <br />
            <br />
            Hoje, oferecemos um ecossistema completo que conecta operadoras,
            empresas e milhões de pessoas a soluções digitais que resolvem de
            verdade.
          </p>
        </div>
      </div>
    </section>
  );
};
