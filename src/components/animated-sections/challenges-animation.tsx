"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  /** Distância de rolagem (e pin) em px. */
  pinScroll?: number;
};

const SECTION_HEIGHT = 900; // altura do “fundo verde”
const DEFAULT_PIN_SCROLL = 900; // quanto o usuário rola com a seção pinada

export function ChallengersAnimation({
  pinScroll = DEFAULT_PIN_SCROLL,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const cardsLayerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const cardsLayer = cardsLayerRef.current;
    if (!wrapper || !cardsLayer) return;

    // respeita usuários com motion reduzido
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    // garante que nada “vaze” visualmente
    wrapper.style.overflow = "hidden";
    if (getComputedStyle(wrapper).position === "static") {
      wrapper.style.position = "relative";
    }

    const ctx = gsap.context(() => {
      // Melhor perf. no container que vai transladar
      gsap.set(cardsLayer, { willChange: "transform", y: 0 });

      // timeline única com pin no wrapper
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: `+=250%`,
            pin: true,
            pinSpacing: true,
            scrub: 3,
            // markers: true,
            invalidateOnRefresh: true,
            onRefreshInit: () => gsap.set(cardsLayer, { y: 0 }),
          },
        })
        // move APENAS os cards (o título e o fundo ficam estáticos)
        .to(
          cardsLayer,
          {
            // distância do parallax: ajuste conforme desejar (<= SECTION_HEIGHT para evitar overflow)
            // usamos clamp pra garantir que não passe da borda do wrapper
            y: () => {
              const desired = -SECTION_HEIGHT * 1.3; // 65% da altura (efeito suave)
              // limite seguro: nunca ultrapassar a própria altura da seção
              const min = -SECTION_HEIGHT - 90; // leve folga pra não “colar” completamente
              const max = 0;
              return gsap.utils.clamp(min, max, desired);
            },
          },
          0,
        );
    }, wrapper);

    return () => ctx.revert();
  }, [pinScroll]);

  return (
    <section
      ref={wrapperRef}
      aria-label="Desafios enfrentados"
      className="relative mx-auto min-h-screen w-full"
      style={{ height: SECTION_HEIGHT }}
    >
      {/* Fundo verde com pattern — troque a imagem se quiser */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/img-bg_problemas.webp')",
        }}
        aria-hidden
      />

      {/* Título fixo (não é animado) */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="h5 md:!h3 pt-8 text-center text-white md:pt-10 lg:pt-20">
          Sua empresa enfrenta esses desafios?
        </h2>
      </div>

      {/* Camada que será transladada (parallax) */}
      <div
        ref={cardsLayerRef}
        className="absolute inset-0 top-36 z-10 md:!top-52"
      >
        <div
          className="from-brand-main-green to-brand-light-green absolute top-[0px] left-1/2 w-full max-w-[320px] -translate-x-1/2 cursor-pointer rounded-2xl bg-gradient-to-b p-[6px]"
          data-speed="0.8"
        >
          <div className="bg-brand-black flex flex-col items-center justify-center gap-5 rounded-2xl p-6">
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
        <div
          className="from-brand-main-green to-brand-light-green absolute top-[300px] left-[calc(50%-550px)] w-full max-w-[320px] cursor-pointer rounded-2xl bg-gradient-to-b p-[6px]"
          data-speed="0.9"
        >
          <div className="bg-brand-black flex flex-col items-center justify-center gap-5 rounded-2xl p-6">
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
          width={160}
          height={160}
          className="absolute top-[280px] left-1/2 hidden -translate-x-1/2 -rotate-45 md:block"
          data-speed="0.5"
        />

        <div
          className="from-brand-main-green to-brand-light-green absolute top-[230px] left-1/2 w-full max-w-[320px] cursor-pointer rounded-2xl bg-gradient-to-b p-[6px] max-[640px]:-translate-x-1/2 md:left-[calc(50%+200px)]"
          data-speed="0.85"
        >
          <div className="bg-brand-black flex flex-col items-center justify-center gap-5 rounded-2xl p-6">
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
          width={120}
          height={120}
          className="absolute top-[680px] left-[calc(50%-400px)] hidden rotate-45 md:block"
          data-speed="0.5"
        />

        <div
          className="from-brand-main-green to-brand-light-green absolute top-[460px] left-1/2 w-full max-w-[320px] -translate-x-1/2 cursor-pointer rounded-2xl bg-gradient-to-b p-[6px] md:top-[640px]"
          data-speed="0.8"
        >
          <div className="bg-brand-black flex flex-col items-center justify-center gap-5 rounded-2xl p-6">
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

        <div
          className="from-brand-main-green to-brand-light-green absolute top-[720px] left-1/2 w-full max-w-[320px] cursor-pointer rounded-2xl bg-gradient-to-b p-[6px] max-[640px]:-translate-x-1/2 md:top-[1100px] md:left-[calc(50%-540px)]"
          data-speed="0.9"
        >
          <div className="bg-brand-black flex flex-col items-center justify-center gap-5 rounded-2xl p-6">
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
          width={160}
          height={160}
          className="absolute top-[1050px] left-1/2 hidden -translate-x-1/2 md:block"
          data-speed="0.5"
        />

        <div
          className="from-brand-main-green to-brand-light-green absolute top-[980px] left-1/2 w-full max-w-[320px] cursor-pointer rounded-2xl bg-gradient-to-b p-[6px] max-[640px]:-translate-x-1/2 md:top-[980px] md:left-[calc(50%+200px)]"
          data-speed="0.85"
        >
          <div className="bg-brand-black flex flex-col items-center justify-center gap-5 rounded-2xl p-6">
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

        <div
          className="from-brand-main-green to-brand-light-green absolute top-[1200px] left-1/2 w-full max-w-[320px] -translate-x-1/2 cursor-pointer rounded-2xl bg-gradient-to-b p-[6px] max-[640px]:-translate-x-1/2 md:top-[1400px]"
          data-speed="0.9"
        >
          <div className="bg-brand-black flex flex-col items-center justify-center gap-5 rounded-2xl p-6">
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
          width={120}
          height={120}
          className="absolute top-[1300px] left-[calc(50%+350px)] hidden -rotate-45 md:block"
          data-speed="1.1"
        />
      </div>
    </section>
  );
}
