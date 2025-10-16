"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);

export function ChallengersAnimation() {
  const isSmallLaptop = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const cardsLayerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    if (!wrapperRef.current || !cardsLayerRef.current || !titleRef.current)
      return;

    // Calcular a altura total necessária para mostrar todos os cards
    const cardsHeight = cardsLayerRef.current.scrollHeight;
    const viewportHeight = window.innerHeight;

    // Timeline principal com pin
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: isSmallLaptop ? "top top" : "top top",
        end: isSmallLaptop ? "+=400%" : "+=500%",
        pin: true,
        scrub: 1,
        // markers: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // 1. Primeiro anima o título
    mainTimeline.from(titleRef.current, {
      opacity: 0,
      scale: 0.5,
      y: 50,
      duration: 0.2,
      ease: "power2.out",
    });

    // 2. Pausa visual
    mainTimeline.to({}, { duration: 0.05 });

    mainTimeline.fromTo(
      cardsLayerRef.current,
      {
        y: viewportHeight, // Começa ABAIXO da tela (valor absoluto)
      },
      {
        y: -(cardsHeight - viewportHeight + 200), // Termina mostrando o último card (ajuste o +200 conforme necessário)
        duration: 2,
        ease: "none",
      },
    );

    // Animação individual dos cards
    const cards = gsap.utils.toArray(".card-challenge");
    cards.forEach((card, index) => {
      gsap.from(card as HTMLElement, {
        opacity: 0,
        scale: 0.8,
        scaleY: 0.6, // Começa achatado verticalmente
        scaleX: 1.1, // E um pouco largo horizontalmente
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: `top+=${20 + index * 5}% top`,
          end: `top+=${35 + index * 5}% top`,
          scrub: 1,
          // markers: true,
        },
      });
    });
  }, [isSmallLaptop]);
  return (
    <section
      ref={wrapperRef}
      aria-label="Desafios enfrentados"
      className="relative mx-auto min-h-screen w-full overflow-hidden"
      // style={{ height: 00 }}
    >
      {/* Fundo verde com pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/img-bg_problemas.webp')",
        }}
        aria-hidden
      />

      {/* Título */}
      <div className="relative z-10 container mx-auto flex h-full items-center justify-center px-4">
        <h2
          ref={titleRef}
          className="title-section-challenges pt-8 text-center text-[32px] leading-[130%] font-bold text-white md:pt-10 lg:pt-20 lg:text-[56px]"
        >
          Sua empresa enfrenta
          <br /> esses desafios?
        </h2>
      </div>

      {/* Camada de cards */}
      <div
        ref={cardsLayerRef}
        className="absolute inset-0 top-0 z-10 flex flex-col items-center gap-6"
      >
        <div className="card-challenge from-brand-main-green to-brand-light-green w-full max-w-[320px] cursor-pointer rounded-2xl bg-gradient-to-b p-[6px] sm:absolute sm:top-[0px] sm:left-1/2 sm:-translate-x-1/2">
          <div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-[#195952] p-6">
            <Image
              src="/images/ic-relogio.svg"
              alt="Icone relógio"
              width={56}
              height={56}
            />
            <p className="text-center text-lg font-bold text-white">
              Longos tempos de espera para atendimento presencial
            </p>
          </div>
        </div>

        <div className="card-challenge from-brand-main-green to-brand-light-green top-[300px] left-[calc(50%-550px)] w-full max-w-[320px] cursor-pointer rounded-2xl bg-gradient-to-b p-[6px] sm:absolute">
          <div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-[#195952] p-6">
            <Image
              src="/images/ic-no-signal.svg"
              alt="Icone sem sinal"
              width={56}
              height={56}
            />
            <p className="text-center text-lg font-bold text-white">
              Dificuldade de acesso médico em regiões remotas
            </p>
          </div>
        </div>

        <Image
          src="/images/img-challenges-1.webp"
          alt="Imagem 1"
          width={200}
          height={200}
          className="card-challenge -rotate-45 sm:absolute sm:top-[280px] sm:left-1/2 sm:-translate-x-1/2"
        />

        <div className="card-challenge from-brand-main-green to-brand-light-green w-full max-w-[320px] cursor-pointer rounded-2xl bg-gradient-to-b p-[6px] sm:absolute sm:top-[230px] sm:left-1/2 md:left-[calc(50%+200px)]">
          <div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-[#195952] p-6">
            <Image
              src="/images/ic-no-signal.svg"
              alt="Icone saúde mental"
              width={56}
              height={56}
            />
            <p className="text-center text-lg font-bold text-white">
              Afastamentos recorrentes por problemas de saúde mental
            </p>
          </div>
        </div>

        <Image
          src="/images/img-challenges-2.webp"
          alt="Imagem 2"
          width={200}
          height={200}
          className="card-challenge absolute top-[680px] left-[calc(50%-500px)] hidden rotate-45 md:block"
        />

        <div className="card-challenge from-brand-main-green to-brand-light-green w-full max-w-[320px] cursor-pointer rounded-2xl bg-gradient-to-b p-[6px] sm:absolute sm:top-[460px] sm:left-1/2 sm:-translate-x-1/2 md:top-[640px]">
          <div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-[#195952] p-6">
            <Image
              src="/images/ic-structure.svg"
              alt="Icone Atendimento"
              width={56}
              height={56}
            />
            <p className="text-center text-lg font-bold text-white">
              Falta de estrutura para atendimento 24h ou saúde primária
              integrada
            </p>
          </div>
        </div>

        <div className="card-challenge from-brand-main-green to-brand-light-green w-full max-w-[320px] cursor-pointer rounded-2xl bg-gradient-to-b p-[6px] sm:absolute sm:top-[720px] sm:left-1/2 md:top-[1100px] md:left-[calc(50%-540px)]">
          <div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-[#195952] p-6">
            <Image
              src="/images/ic-tv-chart.svg"
              alt="Icone gráfico"
              width={56}
              height={56}
            />
            <p className="text-center text-lg font-bold text-white">
              Baixo engajamento dos beneficiários com os programas de saúde
            </p>
          </div>
        </div>

        <Image
          src="/images/img-challenges-3.webp"
          alt="Imagem 3"
          width={200}
          height={200}
          className="card-challenge top-[1050px] sm:absolute sm:left-1/2 sm:-translate-x-1/2"
        />

        <div className="card-challenge from-brand-main-green to-brand-light-green w-full max-w-[320px] cursor-pointer rounded-2xl bg-gradient-to-b p-[6px] sm:absolute sm:top-[980px] sm:left-1/2 md:top-[980px] md:left-[calc(50%+200px)]">
          <div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-[#195952] p-6">
            <Image
              src="/images/ic-file.svg"
              alt="Icone Arquivo"
              width={56}
              height={56}
            />
            <p className="text-center text-lg font-bold text-white">
              Exigências regulatórias da ANS e LGPD sem soluções
            </p>
          </div>
        </div>

        <div className="card-challenge from-brand-main-green to-brand-light-green w-full max-w-[320px] cursor-pointer rounded-2xl bg-gradient-to-b p-[6px] sm:absolute sm:top-[1200px] sm:left-1/2 sm:-translate-x-1/2 md:top-[1400px]">
          <div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-[#195952] p-6">
            <Image
              src="/images/ic-tv-chart.svg"
              alt="Icone gráfico"
              width={56}
              height={56}
            />
            <p className="text-center text-lg font-bold text-white">
              Baixo engajamento dos beneficiários com os programas de saúde
            </p>
          </div>
        </div>

        <Image
          src="/images/img-challenges-4.webp"
          alt="Imagem 4"
          width={180}
          height={180}
          className="card-challenge absolute top-[1300px] left-[calc(50%+350px)] hidden -rotate-45 md:block"
        />
      </div>
    </section>
  );
}
