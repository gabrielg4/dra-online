"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { ChallengeCard } from "../challenge-card";
import { useRef } from "react";

export function ChallengersAnimationV2() {
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const titleContainerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  useGSAP(() => {
    const titleContainer = titleContainerRef.current;
    const title = titleRef.current;
    const cardsContainer = cardsContainerRef.current;

    if (!titleContainer || !title || !cardsContainer) return;

    const viewportHeight = window.innerHeight;
    const cardsHeight = cardsContainer.scrollHeight;
    const cards = gsap.utils.toArray<HTMLElement>(".challenge-card");

    // // Calcula quanto o container de cards deve subir
    // const yHeight = -(cardsHeight - viewportHeight);

    const challengesTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".s-challenges-mobile",
        start: `top ${!isMobile ? "90%" : "60%"}`,
        end: "+=400%",
        scrub: true,
        // markers: true,
        onUpdate: () => {
          cards.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.top + cardRect.height / 2;
            const viewportCenter = viewportHeight / 2;

            const distance = Math.abs(cardCenter - viewportCenter);
            const maxDistance = viewportHeight / 2;

            const normalizedDistance = Math.min(distance / maxDistance, 1);

            const scale = 1 + (1 - normalizedDistance) * 0.2;

            gsap.to(card, {
              scaleY: scale,
              duration: 0.6,
              ease: "power2.out",
            });
          });
        },
      },
    });

    const yHeight = -(cardsHeight! - viewportHeight + (!isMobile ? 950 : 790));
    // Etapa 1: title-container vem de fora da tela até y=0 (topo)
    challengesTl
      .fromTo(
        titleContainer,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 2,
        },
      )
      // Etapa 2: Título aparece no centro
      .fromTo(
        title,
        {
          y: "100vh",
          opacity: 0,
          scale: 0,
        },
        {
          y: "-50%",
          translateY: "50%",
          opacity: 1,
          duration: 5,
          scale: !isMobile ? 1.3 : 1,
          ease: "power2.out",
          delay: 1,
        },
      )
      // Etapa 3: Cards aparecem de baixo para cima
      .fromTo(
        cardsContainer,
        {
          y: viewportHeight,
        },
        {
          y: yHeight - 150,
          duration: 5,
          ease: "none",
        },
        "-=3",
      );

    return () => {
      challengesTl.kill();
    };
  }, [isMobile, isTablet]);

  return (
    <section
      className={`s-challenges-mobile relative hidden h-[300vh] w-full sm:block`}
    >
      <div className="sticky top-0 z-50 h-screen w-full overflow-hidden bg-[url(/images/img-bg-problemas.webp)] bg-cover bg-top">
        <div
          ref={titleContainerRef}
          className="title-container absolute top-0 left-0 z-10 h-screen w-full"
        >
          <div className="blur-2 absolute -bottom-48 -left-96 z-0 scale-75 md:-left-48 md:scale-50" />
          <h2
            ref={titleRef}
            className="title-section-challenges absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[32px] leading-[110%] font-bold text-white lg:text-[56px]"
          >
            Sua empresa enfrenta
            <br className="inline-block" /> esses desafios?
          </h2>
        </div>
        {/* <div className="container">

        </div> */}

        <div
          ref={cardsContainerRef}
          className="challenges-cards-container absolute top-0 left-1/2 z-30 container h-full w-full -translate-x-1/2"
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
