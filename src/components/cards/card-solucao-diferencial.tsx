import Image from "next/image";
import React, { type ReactNode } from "react";

interface CardSolucaoDiferencialProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
  cardClass?: string;
}

export const CardSolucaoDiferencial = ({
  image: { alt, src },
  children,
  cardClass = "card-diferential",
}: CardSolucaoDiferencialProps) => {
  return (
    <div
      className={`${cardClass} flex w-full items-center gap-6 rounded-lg border border-white/20 bg-white/10 p-4 shadow-2xl/20 backdrop-blur-sm max-sm:mx-auto max-sm:max-w-[350px] max-sm:gap-4 max-sm:p-4`}
    >
      <Image
        src={src}
        alt={alt}
        width={56}
        height={56}
        className="object-contain"
      />
      <p className="w-full text-[16px] leading-normal text-white lg:text-lg">
        {children}
      </p>
    </div>
  );
};
