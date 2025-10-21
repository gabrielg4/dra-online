"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { NaMidiaCard } from "@/components/cards/na-midia-card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, Draggable);

export const WheelCarousel = () => {
  const isMobile = useMediaQuery({
    maxWidth: 640,
  });
  const sectionRef = useRef<HTMLElement | null>(null);
  const curvedCarouselRef = useRef<HTMLDivElement | null>(null);
  const draggableRef = useRef<Draggable | null>(null);

  const cardsArr = Array.from({ length: 5 }, () => NaMidiaCard);

  const STEP = 9;
  const MAX_INDEX = cardsArr.length - 1;

  const [activeIndex, setActiveIndex] = useState(0);

  const clamp = (n: number, min: number, max: number) =>
    Math.min(Math.max(n, min), max);
  const idxToRotation = (idx: number) => -idx * STEP;

  const goTo = (nextIndex: number) => {
    const idx = clamp(nextIndex, 0, MAX_INDEX);
    const rotation = idxToRotation(idx);

    gsap.to(curvedCarouselRef.current, {
      rotation,
      duration: 0.5,
      ease: "power3.out",
      onComplete: () => setActiveIndex(idx),
    });

    if (draggableRef.current) {
      draggableRef.current.update();
    }
  };

  const prev = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  useEffect(() => {
    if (!curvedCarouselRef.current || !sectionRef.current) return;

    const minRotation = idxToRotation(MAX_INDEX);
    const maxRotation = idxToRotation(0);

    // Draggable para controle manual (opcional, mantém a funcionalidade de arrastar)
    const [instance] = Draggable.create(curvedCarouselRef.current, {
      type: "rotation",
      inertia: true,
      minimumMovement: 0,
      bounds: { minRotation, maxRotation },
      snap: (value) => {
        const snapped = Math.round(value / STEP) * STEP;
        return clamp(snapped, minRotation, maxRotation);
      },
      onDragEnd: function () {
        const rot = this.rotation as number;
        const idx = clamp(Math.round(-rot / STEP), 0, MAX_INDEX);
        setActiveIndex(idx);
      },
      onThrowComplete: function () {
        const rot = this.rotation as number;
        const idx = clamp(Math.round(-rot / STEP), 0, MAX_INDEX);
        setActiveIndex(idx);
      },
    });

    draggableRef.current = instance;
    gsap.set(curvedCarouselRef.current, { rotation: idxToRotation(0) });

    // ScrollTrigger para controlar com scroll
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      // markers: true,
      start: isMobile ? "center 50%" : "top 10%",
      end: `+=${window.innerHeight * MAX_INDEX}`, // altura proporcional ao número de cards
      pin: true, // trava a seção
      scrub: 1, // suaviza o scroll
      onUpdate: (self) => {
        // converte o progresso (0 a 1) em rotação
        const progress = self.progress;
        const rotation = maxRotation + (minRotation - maxRotation) * progress;

        gsap.set(curvedCarouselRef.current, { rotation });

        // atualiza o índice ativo
        const idx = clamp(Math.round(-rotation / STEP), 0, MAX_INDEX);
        setActiveIndex(idx);

        // sincroniza com o Draggable
        if (draggableRef.current) {
          draggableRef.current.update();
        }
      },
    });

    return () => {
      instance?.kill();
      scrollTrigger?.kill();
      draggableRef.current = null;
    };
  }, [MAX_INDEX]);

  return (
    <section ref={sectionRef} className="relative h-auto w-full md:h-screen">
      {/* bg-[url('/images/img-bg-midia.svg')] bg-cover bg-top bg-no-repeat */}
      <Image
        src={"/images/img-bg-midia.svg"}
        alt=""
        width={1440}
        height={600}
        className="absolute bottom-20 left-1/2 z-0 h-full w-full -translate-x-1/2 object-cover"
      />
      <div className="na-midia-blur absolute top-[calc(50%+40px)] left-1/2 h-[340px] -translate-x-1/2" />

      <div className="relative h-[500px] w-full md:mt-10 lg:mt-16">
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
      </div>
    </section>
  );
};
