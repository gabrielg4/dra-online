"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { NaMidiaCard } from "@/components/na-midia-card";
import { ArrowLeft, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, Draggable);

export const WheelCarousel = () => {
  const curvedCarouselRef = useRef<HTMLDivElement | null>(null);
  const draggableRef = useRef<Draggable | null>(null);

  // ajuste conforme sua lista real (aqui só crio 5 cards iguais)
  const cardsArr = Array.from({ length: 5 }, () => NaMidiaCard);

  // Ângulo entre cards (use o mesmo passo do seu layout)
  const STEP = 9; // graus
  const MAX_INDEX = cardsArr.length - 1;

  const [activeIndex, setActiveIndex] = useState(0);

  // função auxiliar
  const clamp = (n: number, min: number, max: number) =>
    Math.min(Math.max(n, min), max);
  const idxToRotation = (idx: number) => -idx * STEP; // rotação do container para centralizar idx

  // Ir para um índice específico (com animação)
  const goTo = (nextIndex: number) => {
    const idx = clamp(nextIndex, 0, MAX_INDEX);
    const rotation = idxToRotation(idx);

    gsap.to(curvedCarouselRef.current, {
      rotation,
      duration: 0.5,
      ease: "power3.out",
      onComplete: () => setActiveIndex(idx),
    });

    // mantém o Draggable “em sincronia”
    if (draggableRef.current) {
      (draggableRef.current.rotation as number) = rotation;
    }
  };

  const prev = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  useEffect(() => {
    if (!curvedCarouselRef.current) return;

    // valor mínimo/máximo de rotação em graus
    const minRotation = idxToRotation(MAX_INDEX); // negativo
    const maxRotation = idxToRotation(0); // 0

    // cria draggable com snap "ao vivo" e limites
    const [instance] = Draggable.create(curvedCarouselRef.current, {
      type: "rotation",
      inertia: true,
      minimumMovement: 0,
      liveSnap: (value) => {
        // snap para múltiplos de STEP
        const snapped = Math.round(value / STEP) * STEP;
        // clamp para não passar do primeiro/último
        const clamped = clamp(snapped, minRotation, maxRotation);

        // calcula índice ativo a partir da rotação clampada
        const idx = clamp(Math.round(-clamped / STEP), 0, MAX_INDEX);
        setActiveIndex(idx);

        return clamped;
      },
      onThrowComplete: function () {
        // garante estado correto ao final da inércia
        const rot = this.rotation as number;
        const idx = clamp(Math.round(-rot / STEP), 0, MAX_INDEX);
        setActiveIndex(idx);
        gsap.set(curvedCarouselRef.current, { rotation: idxToRotation(idx) });
      },
    });

    draggableRef.current = instance;

    // inicia alinhado no índice 0
    gsap.set(curvedCarouselRef.current, { rotation: idxToRotation(0) });

    return () => {
      instance?.kill();
      draggableRef.current = null;
    };
  }, [MAX_INDEX]);

  return (
    <section className="relative mt-5 h-[500px] w-full overflow-hidden md:mt-10 lg:mt-16">
      <div
        ref={curvedCarouselRef}
        className="carousel absolute top-10 left-[calc(50%-150px)] origin-[150px_2500px] will-change-transform"
      >
        {cardsArr.map((Card, i) => (
          <div
            key={i}
            data-wheel-card
            className={`absolute h-full w-[290px] origin-[150px_2500px]`}
            style={{ transform: `rotate(${i * STEP}deg)` }}
          >
            <Card isActive={i === activeIndex} />
          </div>
        ))}
      </div>

      {/* Controles */}
      <div className="pointer-events-auto absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <button
          aria-label="Anterior"
          onClick={prev}
          disabled={activeIndex === 0}
          className="grid h-10 w-10 cursor-pointer place-items-center rounded-full disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft className="size-6 text-white" />
        </button>
        <button
          aria-label="Próximo"
          onClick={next}
          disabled={activeIndex === MAX_INDEX}
          className="grid h-10 w-10 cursor-pointer place-items-center rounded-full disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowRight className="size-6 text-white" />
        </button>
      </div>
    </section>
  );
};
