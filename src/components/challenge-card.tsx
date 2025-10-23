import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { type ComponentProps } from "react";

interface ChallengeCardProps extends ComponentProps<"div"> {
  imageUrl?: string;
  label: string;
}

export const ChallengeCard = ({
  imageUrl = "/images/img-placeholder-card-ch.webp",
  label,
  ...props
}: ChallengeCardProps) => {
  return (
    <div
      {...props}
      className={cn(
        "challenge-card w-full max-w-[312px] rounded-2xl border border-white/20 bg-white/20 p-4 backdrop-blur-2xl md:p-6",
        props.className,
      )}
    >
      <Image
        src={imageUrl}
        alt="Placeholder"
        width={312}
        height={200}
        className="mx-auto mb-4 h-[200px] rounded-2xl object-cover md:mb-6"
      />
      <p className="text-md text-center leading-[130%] font-bold text-white sm:text-xl">
        {label}
      </p>
    </div>
  );
};
