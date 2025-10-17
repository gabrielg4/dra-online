import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface CardSolucaoImpactoProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  isColumn?: boolean;
}

export const CardSolucaoImpacto = ({
  image: { alt, src },
  title,
  description,
  isColumn = false,
}: CardSolucaoImpactoProps) => {
  return (
    <div
      className={cn(
        "flex h-full flex-col items-start gap-4 rounded-lg border border-white/20 bg-white/10 p-5 shadow-2xl/20 md:flex-row lg:p-8",
        isColumn && "md:flex-col",
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={56}
        height={56}
        className="object-contain"
      />
      <div className="w-full md:max-w-[calc(100%-56px)]">
        <p className="text-[14px] leading-normal font-bold text-white lg:text-lg">
          {title}
        </p>
        <p className="text-[16px] leading-normal font-light text-white">
          {description}
        </p>
      </div>
    </div>
  );
};
