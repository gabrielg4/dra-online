// components/smooth-scrolling.tsx
"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollingProps {
  children: ReactNode;
}

export const SmoothScrolling = ({ children }: SmoothScrollingProps) => {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tickerFunction = (time: number) => {
      lenis.raf(time * 500);
    };

    gsap.ticker.add(tickerFunction);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerFunction);
      lenisRef.current = null;
    };
  }, []);

  // Efeito para scroll to top quando a rota muda
  useEffect(() => {
    const scrollToTop = () => {
      // Usa o Lenis se disponível
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, {
          immediate: true,
          duration: 0,
        });
      }

      // Força scroll nativo também
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Executa múltiplas vezes para garantir
    scrollToTop();

    requestAnimationFrame(() => {
      scrollToTop();
    });

    const timeoutIds = [
      setTimeout(scrollToTop, 50),
      setTimeout(scrollToTop, 100),
      setTimeout(scrollToTop, 200),
    ];

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [pathname]);

  return <>{children}</>;
};
