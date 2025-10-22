import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Media, NaMidia } from "../../../payload-types";

interface NaMidiaCardProps {
  isActive?: boolean;
  article: NaMidia;
}

export const NaMidiaCard = ({ isActive, article }: NaMidiaCardProps) => {
  return (
    <div
      className={`wheel-card border-brand-light-green h-[343px] w-full max-w-[290px] rounded-2xl border bg-white/10 backdrop-blur-[12px]`}
    >
      <div
        className={cn(
          "border-b-brand-light-green h-fit rounded-t-2xl border-b p-6",
          isActive && "bg-white",
        )}
      >
        <Image
          src={(article.logo as Media).url!}
          alt={(article.logo as Media).alt}
          width={100}
          height={28}
          className={cn(
            "h-fit w-fit object-contain brightness-0 invert",
            isActive && "brightness-100 invert-0",
          )}
        />
      </div>
      <div
        className={cn(
          "flex h-[calc(241px+31px)] flex-col items-start justify-between rounded-b-2xl p-6",
          isActive && "bg-white",
        )}
      >
        <p
          className={cn(
            "text-lg font-bold text-white",
            isActive && "text-brand-dark-gray",
          )}
        >
          {article.titulo}
        </p>
        {isActive && (
          <Button
            variant="outline"
            className="border-brand-light-green group hover:bg-brand-light-green mt-4 h-auto cursor-pointer rounded-full border bg-transparent px-6 py-2 duration-300"
          >
            <Link
              href={article.link_artigo}
              target="_blank"
              prefetch={false}
              className="text-brand-light-green duration-300 group-hover:text-white"
            >
              Ler mais
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};
