// components/smooth-scrolling.tsx
"use client";
import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollingProps {
  children: ReactNode;
}

export const SmoothScrolling = ({ children }: SmoothScrollingProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Expõe o Lenis globalmente para outros componentes acessarem
    if (typeof window !== "undefined") {
      (window as any).lenis = lenis;
    }

    lenis.on("scroll", ScrollTrigger.update);

    const tickerFunction = (time: number) => {
      lenis.raf(time * 500);
    };

    gsap.ticker.add(tickerFunction);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerFunction);
      // Limpa a referência global
      if (typeof window !== "undefined") {
        (window as any).lenis = null;
      }
    };
  }, []);

  return <>{children}</>;
};
