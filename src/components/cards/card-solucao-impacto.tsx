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
    <div className="flex items-center gap-4 rounded-lg border border-white/20 bg-white/10 px-2 py-3 shadow-2xl/20 lg:px-6 lg:py-10">
      <Image
        src={src}
        alt={alt}
        width={56}
        height={56}
        className="object-contain"
      />
      <p className="text-[14px] leading-normal font-bold text-white lg:text-lg">
        {content}
      </p>
    </div>
  );
};
