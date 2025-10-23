import Image from "next/image";
import React from "react";
import type { Depoimento, Media } from "../../../payload-types";

interface TestimonialCardProps {
  testimonial: Depoimento;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="flex min-h-[350px] flex-col justify-between rounded-lg bg-white p-8 shadow-md/20">
      <p className="text-brand-dark-gray mb-5 text-lg leading-normal font-normal">
        {testimonial.depoimento}
      </p>

      <div className="flex w-full items-center gap-2">
        <Image
          src={(testimonial.foto as Media).url!}
          alt={(testimonial.foto as Media).alt || "Foto do Cliente"}
          width={55}
          height={55}
          quality={100}
          className="rounded-full object-contain"
        />
        <div className="w-full max-w-[calc(100%-55px)]">
          <p className="text-brand-dark-green text-xl font-bold">
            {testimonial.nome}
          </p>
          <p className="text-brand-dark-gray text-[16px] leading-normal">
            {testimonial.especialidade}
          </p>
        </div>
      </div>
    </div>
  );
};
