import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Media, NaMidia } from "../../../payload-types";
interface NaMidiaCard2Props {
  data: NaMidia;
}

export const NaMidiaCard2 = ({ data }: NaMidiaCard2Props) => {
  return (
    <div
      className={`wheel-card border-brand-light-green h-full w-full rounded-2xl border bg-white/10 backdrop-blur-[12px]`}
    >
      <div
        className={cn(
          "border-b-brand-light-green h-fit rounded-t-2xl border-b p-6",
        )}
      >
        <Image
          src={(data.logo as Media).url!}
          alt={(data.logo as Media).alt}
          width={100}
          height={28}
          className="h-fit w-fit object-contain brightness-0 invert"
        />
      </div>
      <div
        className={cn(
          "flex h-[calc(200px+31px)] flex-col items-start justify-between rounded-b-2xl p-6",
        )}
      >
        <p className={cn("text-lg font-bold text-white")}>{data.titulo}</p>

        <Button
          variant="outline"
          className="border-brand-light-green group hover:bg-brand-light-green mt-4 h-auto cursor-pointer rounded-full border bg-transparent px-6 py-2 duration-300"
        >
          <Link
            href={data.link_artigo}
            target="_blank"
            className="text-brand-light-green duration-300 group-hover:text-white"
          >
            Ler mais
          </Link>
        </Button>
      </div>
    </div>
  );
};
