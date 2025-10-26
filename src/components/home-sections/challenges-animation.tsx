"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { ChallengeCard } from "../challenge-card";
import { useRef } from "react";

export function ChallengersAnimation() {
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  useGSAP(() => {
    const cardsHeight = cardsContainerRef.current?.scrollHeight;
    const viewportHeight = window.innerHeight;
    const cards = gsap.utils.toArray<HTMLElement>(
      ".s-challenges-mobile .challenge-card",
    );
    const challengesTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".s-challenges-mobile",
        start: `top ${isTablet || isMobile ? "top" : "top"}`,
        end: "+=310%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        // markers: true,
        onUpdate: () => {
          cards.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.top + cardRect.height / 2;
            const viewportCenter = viewportHeight / 2;

            const distance = Math.abs(cardCenter - viewportCenter);
            const maxDistance = viewportHeight / 2;

            const normalizedDistance = Math.min(distance / maxDistance, 1);

            const scale = 1 + (1 - normalizedDistance) * 0.1;

            gsap.to(card, {
              scaleY: scale,
              duration: 0.6,
              ease: "power2.out",
            });
          });
        },
      },
    });

    // H2 sobe de baixo até o centro
    challengesTl.fromTo(
      ".s-challenges-mobile h2",
      {
        y: viewportHeight, // Começa abaixo da tela
        scale: 0,
        opacity: 0,
      },
      {
        y: 0, // Vai até a posição central (já está centralizado com translate)
        opacity: 1,
        scale: isMobile ? 1 : 1.3,
        duration: 5,
        ease: "power2.out",
      },
    );

    // Pausa no h2 para "travar" um pouco
    challengesTl.to(".s-challenges-mobile h2", {
      duration: 0.3, // Pequena pausa
    });

    // Cards começam a subir
    const yHeight = -(
      cardsHeight! -
      viewportHeight +
      (isTablet || isMobile ? 1150 : 850)
    );
    challengesTl.fromTo(
      ".s-challenges-mobile .challenges-cards-container",
      {
        y: viewportHeight,
      },
      {
        y: yHeight,
        duration: 4,
        ease: "none",
      },
    );

    return () => {
      challengesTl.kill();
    };
  }, [isMobile]);

  return (
    <section className="s-challenges-mobile relative block min-h-screen w-full overflow-hidden bg-[url(/images/img-bg-problemas.webp)] bg-cover bg-top sm:hidden">
      <div className="container">
        <div className="blur-2 absolute -bottom-48 -left-96 z-0 scale-75 md:-left-48 md:scale-50" />
        <h2 className="title-section-challenges absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[32px] leading-[110%] font-bold text-white lg:text-[56px]">
          Sua empresa enfrenta
          <br className="inline-block" /> esses desafios?
        </h2>
        <div
          ref={cardsContainerRef}
          className="challenges-cards-container relative z-30 w-full"
        >
          <div className="absolute top-20 left-1/2 grid items-center justify-center gap-16 max-[640px]:w-full max-[640px]:-translate-x-1/2 lg:top-24 lg:left-[86px]">
            <ChallengeCard
              videoUrl="/videos/video-animation-2.mp4"
              label="Longos tempos de espera para atendimento presencial"
            />
            <ChallengeCard
              videoUrl="/videos/video-animation-4.mp4"
              label="Afastamentos recorrentes por problemas de saúde mental"
            />
          </div>
          <div className="absolute top-[790px] grid items-center justify-center gap-16 max-[640px]:left-1/2 max-[640px]:w-full max-[640px]:-translate-x-1/2 md:pt-80 lg:top-24 lg:right-[86px]">
            <ChallengeCard
              videoUrl="/videos/video-animation-3.mp4"
              label="Dificuldade de acesso médico em regiões remotas"
            />

            <ChallengeCard
              label="Exigências regulatórias da ANS e LGPD sem soluções"
              videoUrl="/videos/video-animation-1.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
