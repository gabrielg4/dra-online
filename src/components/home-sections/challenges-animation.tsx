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
        start: "top top",
        end: isMobile ? "+=110%" : "+=210%",
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

    // H2 aparece primeiro
    challengesTl.fromTo(
      ".s-challenges-mobile h2",
      {
        y: viewportHeight * 0.3,
        scale: 0,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: isMobile ? 1.2 : 5, // Um pouco mais de tempo no mobile
        ease: "power2.out",
      },
    );

    // Pausa bem curtinha só para o título ser lido
    challengesTl.to(".s-challenges-mobile h2", {
      duration: isMobile ? 0.2 : 0.3,
    });

    // Cards sobem logo depois
    const yHeight = -(
      cardsHeight! -
      viewportHeight +
      (isMobile ? 800 : isTablet ? 1150 : 850)
    );

    challengesTl.fromTo(
      ".s-challenges-mobile .challenges-cards-container",
      {
        y: viewportHeight * 0.5,
      },
      {
        y: yHeight,
        duration: isMobile ? 2.5 : 4,
        ease: "none",
      },
      // Removido o overlap - agora é sequencial
    );

    return () => {
      challengesTl.kill();
    };
  }, [isMobile, isTablet]);

  return (
    <section className="s-challenges-mobile relative block min-h-screen w-full overflow-hidden bg-[url(/images/img-bg-problemas.webp)] bg-cover bg-top max-sm:!h-fit sm:hidden">
      <div className="container">
        <div className="blur-2 absolute -bottom-48 -left-96 z-0 scale-75 md:-left-48 md:scale-50" />
        <h2 className="title-section-challenges absolute left-1/2 w-full -translate-x-1/2 text-center text-[32px] leading-[110%] font-bold text-white max-[640px]:top-24 max-[640px]:translate-y-0 sm:top-1/2 sm:-translate-y-1/2 lg:text-[56px]">
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
