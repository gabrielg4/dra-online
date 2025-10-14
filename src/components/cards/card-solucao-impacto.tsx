import Image from "next/image";
import React from "react";

interface CardSolucaoImpactoProps {
  image: {
    src: string;
    alt: string;
  };
  content: string;
}

export const CardSolucaoImpacto = ({
  image: { alt, src },
  content,
}: CardSolucaoImpactoProps) => {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-white/20 bg-white/10 px-6 py-10 shadow-2xl/20">
      <Image
        src={src}
        alt={alt}
        width={56}
        height={56}
        className="object-contain"
      />
      <p className="text-lg leading-normal font-bold text-white">{content}</p>
    </div>
  );
};
