"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type NullableEl = HTMLDivElement | null;

export const BackgroundMouseReveal = () => {
  const blobRef = useRef<NullableEl>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const positionX = (mouseX / screenWidth) * 100 + "%";
      const positionY = (mouseY / screenHeight) * 100 + "%";

      if (blobRef.current) {
        blobRef.current.style.left = positionX;
        blobRef.current.style.top = positionY;
        // Ajuste para centralizar o blob (opcional, dependendo do tamanho)
        blobRef.current.style.transform = `translate(-50%, -50%)`;
      }
    };

    // Anexe no window em Client Component [web:3]
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Cleanup do event listener
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="overflow-hidden">
      <Image
        src="/images/img-contato-logo-bg.svg" // Substitua pelo caminho da sua imagem
        alt="Hidden Image"
        width={1440}
        height={266}
        className="hiddenImage"
      />
      <div ref={blobRef} className="blob"></div>
    </div>
  );
};
