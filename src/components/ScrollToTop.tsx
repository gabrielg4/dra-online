// components/ScrollToTop.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Aguarda um pouco para garantir que o Lenis foi inicializado
    const scrollToTop = () => {
      if (typeof window !== "undefined") {
        const lenis = (window as any).lenis;

        if (lenis) {
          // Usa o método scrollTo do Lenis com immediate
          lenis.scrollTo(0, {
            immediate: true,
            duration: 0,
            force: true,
          });
        }

        // Fallback para scroll nativo
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };

    // Executa imediatamente
    scrollToTop();

    // Tenta novamente após alguns frames para garantir
    const timeoutIds = [
      setTimeout(scrollToTop, 0),
      setTimeout(scrollToTop, 50),
      setTimeout(scrollToTop, 150),
    ];

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [pathname]);

  return null;
}
