import Image from "next/image";
import React from "react";

export const TestimonialCard = () => {
  return (
    <div className="flex min-h-[350px] flex-col justify-between rounded-lg bg-white p-8 shadow-md/20">
      <p className="text-brand-dark-gray mb-5 text-lg leading-normal font-normal">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className="flex w-full items-center gap-2">
        <Image
          src="/images/img-depoimento.webp"
          alt="Nome sobrenome"
          width={55}
          height={55}
          className="rounded-full object-contain"
        />
        <div className="w-full max-w-[calc(100%-55px)]">
          <p className="text-brand-dark-green text-xl font-bold">
            Nome sobrenome
          </p>
          <p className="text-brand-dark-gray text-[16px] leading-normal">
            Especialista em [área]
          </p>
        </div>
      </div>
    </div>
  );
};
