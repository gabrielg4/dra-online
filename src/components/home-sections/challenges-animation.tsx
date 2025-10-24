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
    const cards = gsap.utils.toArray<HTMLElement>(".challenge-card");
    const challengesTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".s-challenges",
        start: `top ${isTablet || isMobile ? "top" : "top"}`,
        end: "+=310%",
        scrub: 1,
        pin: true,
        anticipatePin: 3,
        // markers: true,
        onUpdate: () => {
          // const progress = self.progress;

          cards.forEach((card) => {
            // Pega a posição do card no viewport
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.top + cardRect.height / 2;
            const viewportCenter = viewportHeight / 2;

            // Calcula a distância do card ao centro da tela
            const distance = Math.abs(cardCenter - viewportCenter);
            const maxDistance = viewportHeight / 2;

            // Normaliza a distância (0 = no centro, 1 = longe)
            const normalizedDistance = Math.min(distance / maxDistance, 1);

            // Cria o efeito bounce: quanto mais próximo do centro, maior o scale
            const scale = 1 + (1 - normalizedDistance) * 0.08; // varia de 1 a 1.2
            // const rotation = (normalizedDistance - 0.5) * 1; // rotação sutil

            // Aplica a transformação
            gsap.to(card, {
              scaleY: scale,
              // rotation: rotation,
              duration: 0.2,
              ease: "power2.out",
            });
          });
        },
      },
    });
    challengesTl.from(".s-challenges h2", {
      // y: -90,
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "power4",
    });

    const yHeight = -(
      cardsHeight! -
      viewportHeight +
      (isTablet || isMobile ? 1150 : 850)
    );
    challengesTl.fromTo(
      ".challenges-cards-container",
      {
        y: viewportHeight, // Começa ABAIXO da tela (valor absoluto)
      },
      {
        y: yHeight, // Termina mostrando o último card (ajuste o +200 conforme necessário)
        duration: 4,
        ease: "none",
      },
      isTablet || isMobile ? "-=0.5" : "-=0.3",
    );

    return () => {
      challengesTl.kill(); // limpeza ao desmontar componente
    };
  }, []);
  return (
    <section className="s-challenges relative min-h-screen w-full overflow-hidden bg-[url(/images/img-bg-problemas.webp)] bg-cover bg-top">
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/img-bg_problemas.webp')",
        }}
        aria-hidden
      /> */}
      {/* Título */}
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
          {/* <ChallengeCard
            label="Longos tempos de espera para atendimento presencial"
            className="absolute top-16 left-1/2 max-[640px]:-translate-x-1/2 lg:top-24 lg:left-[86px]"
          />

          <ChallengeCard
            label="Afastamentos recorrentes por problemas de saúde mental"
            className="absolute top-[420px] left-1/2 max-[640px]:-translate-x-1/2 md:top-[170px] md:right-[53px] lg:top-[244px]"
          />

          <ChallengeCard
            label="Dificuldade de acesso médico em regiões remotas"
            className="absolute top-[790px] left-1/2 max-[640px]:-translate-x-1/2 md:top-[500px] md:left-[286px] lg:top-[630px]"
          />

          <ChallengeCard
            label="Falta de estrutura para atendimento 24h ou saúde primária integrada"
            className="absolute top-[1140px] left-1/2 max-[640px]:-translate-x-1/2 md:top-[900px] md:left-14 lg:top-[1154px]"
          />

          <ChallengeCard
            label="Exigências regulatórias da ANS e LGPD sem soluções"
            className="absolute top-[1490px] left-1/2 max-[640px]:-translate-x-1/2 md:top-[600px] md:right-12 lg:top-[1304px] lg:right-[243px]"
          />

          <ChallengeCard
            label="Baixo engajamento dos beneficiários com os programas de saúde"
            className="absolute top-[1850px] left-1/2 max-[640px]:-translate-x-1/2 md:top-[1000px] md:right-14 lg:top-[1884px]"
          />

          <ChallengeCard
            label="Impossibilidade de expandir a rede assistencial com qualidade"
            className="absolute top-[2210px] left-1/2 max-[640px]:-translate-x-1/2 md:top-[1320px] md:left-14 lg:top-[2074px] lg:left-[210px]"
          /> */}

          <div className="absolute top-20 left-1/2 grid items-center justify-center gap-16 max-[640px]:w-full max-[640px]:-translate-x-1/2 lg:top-24 lg:left-[86px]">
            <ChallengeCard
              videoUrl="/videos/video-animation-2.mp4"
              label="Longos tempos de espera para atendimento presencial"
            />
            <ChallengeCard
              videoUrl="/videos/video-animation-4.mp4"
              label="Afastamentos recorrentes por problemas de saúde mental"
            />
            {/* className="absolute top-[420px] left-1/2 max-[640px]:-translate-x-1/2 md:top-[170px] md:left-[86px] lg:top-[500px]" */}
          </div>
          <div className="absolute top-[790px] grid items-center justify-center gap-16 max-[640px]:left-1/2 max-[640px]:w-full max-[640px]:-translate-x-1/2 md:pt-80 lg:top-24 lg:right-[86px]">
            <ChallengeCard
              videoUrl="/videos/video-animation-3.mp4"
              label="Dificuldade de acesso médico em regiões remotas"
              // className="absolute top-[790px] left-1/2 max-[640px]:-translate-x-1/2 md:top-[500px] md:left-[86px] lg:top-[910px]"
            />

            <ChallengeCard
              label="Exigências regulatórias da ANS e LGPD sem soluções"
              videoUrl="/videos/video-animation-1.mp4"
              // className="absolute top-20 max-[640px]:left-1/2 max-[640px]:-translate-x-1/2 md:right-12 lg:top-24 lg:right-[86px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
