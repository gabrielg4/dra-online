"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(); // sem plugins adicionais

export const VerticalCarouselAboutUs = () => {
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const columns = gsap.utils.toArray<HTMLElement>(
        ".animation-columns .coluna",
      );

      columns.forEach((col, i) => {
        const original = Array.from(col.children) as HTMLElement[];
        const clone = original.map((el) => el.cloneNode(true) as HTMLElement);
        clone.forEach((c) => col.appendChild(c));

        const singleHeight = original.reduce(
          (acc, el) => acc + el.offsetHeight + getGap(el),
          0,
        );

        // velocidades por coluna; torne a segunda negativa para inverter
        const speeds = [20, -35, 26]; // coluna 2 invertida
        const speed = speeds[i % speeds.length];

        // duração baseada em módulo da velocidade
        const duration = singleHeight / Math.abs(speed);

        // ponto inicial: para sentido negativo (subindo), comece em -singleHeight para sincronizar
        gsap.set(col, { y: speed < 0 ? -singleHeight : 0 });

        gsap.to(col, {
          // destino depende do sentido: descendo vai a -singleHeight, subindo vai a 0
          y: speed < 0 ? 0 : -singleHeight,
          duration,
          ease: "none",
          repeat: -1,
        });
      });

      function getGap(el: HTMLElement) {
        const style = window.getComputedStyle(el);
        const mb = parseFloat(style.marginBottom || "0");
        const mt = parseFloat(style.marginTop || "0");
        return mb + mt;
      }
    },
    { scope },
  );

  return (
    <div
      ref={scope}
      className="animation-columns absolute top-0 -right-24 z-10 grid w-full max-w-[500px] grid-cols-2 gap-4 overflow-hidden lg:right-0 lg:max-w-[728px] lg:grid-cols-3 lg:gap-10"
    >
      <div className="coluna coluna1 flex flex-col gap-10 will-change-transform">
        <Image
          src="/images/img-carousel-vertical-1.webp"
          alt="Imagem 1"
          width={223}
          height={400}
          className="object-contain"
        />
        <Image
          src="/images/img-carousel-vertical-2.webp"
          alt="Imagem 2"
          width={223}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="coluna coluna2 flex flex-col gap-10 will-change-transform">
        <Image
          src="/images/img-carousel-vertical-3.webp"
          alt="Imagem 3"
          width={223}
          height={400}
          className="object-contain"
        />
        <Image
          src="/images/img-carousel-vertical-4.webp"
          alt="Imagem 4"
          width={223}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="coluna coluna3 hidden flex-col gap-10 will-change-transform lg:flex">
        <Image
          src="/images/img-carousel-vertical-5.webp"
          alt="Imagem 5"
          width={223}
          height={400}
          className="object-contain"
        />
        <Image
          src="/images/img-carousel-vertical-6.webp"
          alt="Imagem 6"
          width={223}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
};
