import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { type ReactElement } from "react";

interface CardSolucaoImpactoProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: ReactElement | string;
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
        "impact-card col-span-1 flex h-full w-full flex-col items-start gap-4 rounded-lg bg-white/10 p-5 shadow-2xl/10 transition-all duration-300 hover:-translate-y-3 md:flex-row lg:p-8",
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
      <div className={`W-full ${!isColumn && "md:max-w-[calc(100%-56px)]"}`}>
        <p className="mb-2 text-[14px] leading-normal font-bold text-white lg:text-[22px]">
          {title}
        </p>
        <p className="text-[16px] leading-normal font-light text-white">
          {description}
        </p>
      </div>
    </div>
  );
};
