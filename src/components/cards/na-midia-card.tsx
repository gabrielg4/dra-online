import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NaMidiaCardProps {
  isActive?: boolean;
}

export const NaMidiaCard = ({ isActive }: NaMidiaCardProps) => {
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
          src={"/images/midia-card.svg"}
          alt=""
          width={128}
          height={44}
          className={cn(
            "brightness-0 invert",
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        {isActive && (
          <Button
            variant="outline"
            className="border-brand-light-green group hover:bg-brand-light-green mt-4 h-auto cursor-pointer rounded-full border bg-transparent px-6 py-2 duration-300"
          >
            <Link
              href="/"
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
