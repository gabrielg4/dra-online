// "use client";

// import { useRef, useState } from "react";
// import gsap from "gsap";
// import { Draggable } from "gsap/Draggable";
// import { NaMidiaCard } from "@/components/cards/na-midia-card";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import Image from "next/image";
// import type { NaMidia } from "../../../payload-types";
// import { useGSAP } from "@gsap/react";
// import { useMediaQuery } from "react-responsive";

// gsap.registerPlugin(Draggable);

// interface WheelCarouselProps {
//   articles: NaMidia[];
// }

// export const WheelCarousel = ({ articles }: WheelCarouselProps) => {
//   const isMinTablet = useMediaQuery({
//     minWidth: 768,
//   });
//   const curvedCarouselRef = useRef<HTMLDivElement | null>(null);
//   const draggableRef = useRef<Draggable | null>(null);

//   const STEP = 9;
//   const MAX_INDEX = articles.length - 1;

//   // Calcula o índice da mediana (como sempre é ímpar, é o item do meio)
//   const MEDIAN_INDEX = Math.floor(articles.length / 2);

//   // Calcula a rotação inicial para que o item da mediana fique centralizado
//   const INITIAL_ROTATION = MEDIAN_INDEX * STEP;

//   const [activeIndex, setActiveIndex] = useState(MEDIAN_INDEX);

//   const clamp = (n: number, min: number, max: number) =>
//     Math.min(Math.max(n, min), max);

//   const goTo = (nextIndex: number) => {
//     const idx = clamp(nextIndex, 0, MAX_INDEX);
//     // A rotação necessária para colocar o card no centro
//     const rotation = INITIAL_ROTATION - idx * STEP;

//     gsap.to(curvedCarouselRef.current, {
//       rotation,
//       duration: 0.5,
//       ease: "power3.out",
//       onComplete: () => setActiveIndex(idx),
//     });

//     if (draggableRef.current) {
//       draggableRef.current.update();
//     }
//   };

//   const prev = () => goTo(activeIndex - 1);
//   const next = () => goTo(activeIndex + 1);

//   useGSAP(() => {
//     if (!curvedCarouselRef.current) return;

//     const maxRotation = INITIAL_ROTATION; // rotação para o primeiro card
//     const minRotation = INITIAL_ROTATION - MAX_INDEX * STEP; // rotação para o último card

//     // Draggable para controle manual
//     const [instance] = Draggable.create(curvedCarouselRef.current, {
//       type: "rotation",
//       inertia: true,
//       minimumMovement: 0,
//       bounds: { minRotation, maxRotation },
//       snap: (value) => {
//         // Calcula qual card está mais próximo do centro
//         const offset = INITIAL_ROTATION - value;
//         const idx = Math.round(offset / STEP);
//         return INITIAL_ROTATION - clamp(idx, 0, MAX_INDEX) * STEP;
//       },
//       onDragEnd: function () {
//         const rot = this.rotation as number;
//         const offset = INITIAL_ROTATION - rot;
//         const idx = clamp(Math.round(offset / STEP), 0, MAX_INDEX);
//         setActiveIndex(idx);
//       },
//       onThrowComplete: function () {
//         const rot = this.rotation as number;
//         const offset = INITIAL_ROTATION - rot;
//         const idx = clamp(Math.round(offset / STEP), 0, MAX_INDEX);
//         setActiveIndex(idx);
//       },
//     });

//     draggableRef.current = instance;

//     // Inicializa com o item da mediana centralizado (rotação 0 no container)
//     gsap.set(curvedCarouselRef.current, { rotation: 0 });
//     isMinTablet &&
//       gsap.from(".wheel-card", {
//         opacity: 0,
//         scale: 0.8,
//         y: 50,
//         ease: "back.out(1.7)",
//         duration: 0.6,
//         stagger: 0.01,
//         scrollTrigger: {
//           trigger: "#midia",
//           start: "center 100%",
//           end: "top top",
//           markers: true,
//           scrub: 1,
//         },
//       });

//     return () => {
//       instance?.kill();
//       draggableRef.current = null;
//     };
//   }, [MAX_INDEX, MEDIAN_INDEX, INITIAL_ROTATION]);

//   return (
//     <section className="relative flex h-auto w-full items-center justify-center pt-10 pb-14 sm:pt-20 sm:pb-20 md:h-screen">
//       <Image
//         src={"/images/img-bg-midia.svg"}
//         alt=""
//         width={1440}
//         height={600}
//         className="absolute bottom-20 left-1/2 z-0 h-full w-full -translate-x-1/2 object-cover"
//       />
//       <div className="na-midia-blur absolute top-[calc(50%+40px)] left-1/2 h-[340px] -translate-x-1/2" />

//       <div className="relative h-[500px] w-full max-w-[600px]">
//         <div
//           ref={curvedCarouselRef}
//           className="carousel absolute top-0 left-1/2 origin-[50%_2500px] -translate-x-1/2 will-change-transform"
//         >
//           {articles.map((article, i) => (
//             <div
//               key={i}
//               data-wheel-card
//               className="absolute top-0 left-1/2 h-full w-[290px] origin-[50%_2500px] -translate-x-1/2"
//               style={{ transform: `rotate(${(i - MEDIAN_INDEX) * STEP}deg)` }}
//             >
//               <NaMidiaCard article={article} isActive={i === activeIndex} />
//             </div>
//           ))}
//         </div>

//         <div className="pointer-events-auto absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
//           <button
//             aria-label="Anterior"
//             onClick={prev}
//             disabled={activeIndex === 0}
//             className="grid h-10 w-10 cursor-pointer place-items-center rounded-full disabled:cursor-not-allowed disabled:opacity-40"
//           >
//             <ArrowLeft className="size-6 text-white" />
//           </button>
//           <button
//             aria-label="Próximo"
//             onClick={next}
//             disabled={activeIndex === MAX_INDEX}
//             className="grid h-10 w-10 cursor-pointer place-items-center rounded-full disabled:cursor-not-allowed disabled:opacity-40"
//           >
//             <ArrowRight className="size-6 text-white" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };
"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { NaMidiaCard } from "@/components/cards/na-midia-card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { NaMidia } from "../../../payload-types";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(Draggable);

interface WheelCarouselProps {
  articles: NaMidia[];
}

export const WheelCarousel = ({ articles }: WheelCarouselProps) => {
  const isMinTablet = useMediaQuery({
    minWidth: 768,
  });
  const curvedCarouselRef = useRef<HTMLDivElement | null>(null);
  const draggableRef = useRef<Draggable | null>(null);

  const STEP = 9;
  const MAX_INDEX = articles.length - 1;

  // Calcula o índice da mediana (como sempre é ímpar, é o item do meio)
  const MEDIAN_INDEX = Math.floor(articles.length / 2);

  // Calcula a rotação inicial para que o item da mediana fique centralizado
  const INITIAL_ROTATION = MEDIAN_INDEX * STEP;

  const [activeIndex, setActiveIndex] = useState(MEDIAN_INDEX);

  const clamp = (n: number, min: number, max: number) =>
    Math.min(Math.max(n, min), max);

  const goTo = (nextIndex: number) => {
    const idx = clamp(nextIndex, 0, MAX_INDEX);
    // A rotação necessária para colocar o card no centro
    const rotation = INITIAL_ROTATION - idx * STEP;

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

  useGSAP(() => {
    if (!curvedCarouselRef.current) return;

    const maxRotation = INITIAL_ROTATION; // rotação para o primeiro card
    const minRotation = INITIAL_ROTATION - MAX_INDEX * STEP; // rotação para o último card

    // Draggable para controle manual com configurações otimizadas para suavidade
    const [instance] = Draggable.create(curvedCarouselRef.current, {
      type: "rotation",
      inertia: true,
      minimumMovement: 5, // Reduz sensibilidade a movimentos muito pequenos
      throwProps: true, // Habilita propriedades de arremesso suaves
      overshootTolerance: 0, // Evita ultrapassar os limites
      throwResistance: 2000, // Controla a desaceleração (quanto maior, mais rápido para)
      edgeResistance: 0.65, // Resistência nas bordas (0 = sem resistência, 1 = máxima)
      bounds: { minRotation, maxRotation },
      snap: {
        rotation: (value) => {
          // Calcula qual card está mais próximo do centro
          const offset = INITIAL_ROTATION - value;
          const idx = Math.round(offset / STEP);
          return INITIAL_ROTATION - clamp(idx, 0, MAX_INDEX) * STEP;
        },
      },
      onDrag: function () {
        // Atualiza o índice ativo durante o drag para feedback visual suave
        const rot = this.rotation as number;
        const offset = INITIAL_ROTATION - rot;
        const idx = clamp(Math.round(offset / STEP), 0, MAX_INDEX);
        setActiveIndex(idx);
      },
      onDragEnd: function () {
        const rot = this.rotation as number;
        const offset = INITIAL_ROTATION - rot;
        const idx = clamp(Math.round(offset / STEP), 0, MAX_INDEX);
        setActiveIndex(idx);
      },
      onThrowComplete: function () {
        const rot = this.rotation as number;
        const offset = INITIAL_ROTATION - rot;
        const idx = clamp(Math.round(offset / STEP), 0, MAX_INDEX);
        setActiveIndex(idx);
      },
    });

    draggableRef.current = instance;

    // Inicializa com o item da mediana centralizado (rotação 0 no container)
    gsap.set(curvedCarouselRef.current, { rotation: 0 });
    isMinTablet &&
      gsap.from(".wheel-card", {
        opacity: 0,
        scale: 0.8,
        y: 50,
        ease: "back.out(1.7)",
        duration: 0.6,
        stagger: 0.01,
        scrollTrigger: {
          trigger: "#midia",
          start: "center 100%",
          end: "top top",
          // markers: true,
          scrub: 1,
        },
      });

    return () => {
      instance?.kill();
      draggableRef.current = null;
    };
  }, [MAX_INDEX, MEDIAN_INDEX, INITIAL_ROTATION]);

  return (
    <section className="relative flex h-auto w-full items-center justify-center pt-10 pb-14 max-sm:pb-4 sm:pt-20 sm:pb-20 md:h-screen">
      <Image
        src={"/images/img-bg-midia.svg"}
        alt=""
        width={1440}
        height={600}
        className="absolute bottom-20 left-1/2 z-0 h-full w-full -translate-x-1/2 object-cover"
      />
      <div className="na-midia-blur absolute top-[calc(50%+40px)] left-1/2 h-[340px] -translate-x-1/2" />

      <div className="relative h-[500px] w-full max-w-[600px]">
        <div
          ref={curvedCarouselRef}
          className="carousel absolute top-0 left-1/2 origin-[50%_2500px] -translate-x-1/2 will-change-transform"
        >
          {articles.map((article, i) => (
            <div
              key={i}
              data-wheel-card
              className="absolute top-0 left-1/2 h-full w-[290px] origin-[50%_2500px] -translate-x-1/2"
              style={{ transform: `rotate(${(i - MEDIAN_INDEX) * STEP}deg)` }}
            >
              <NaMidiaCard article={article} isActive={i === activeIndex} />
            </div>
          ))}
        </div>

        <div className="pointer-events-auto absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
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
