import { BackgroundMouseReveal } from "@/components/background-mouse-reveal";
import { ContactForm2 } from "@/components/contact-form-2";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ContactPage() {
  return (
    <>
      <section className="relative w-full pt-[168px] pb-14">
        <BackgroundMouseReveal />
        <div className="container flex items-center gap-14">
          <div className="w-full">
            <h1 className="mb-6 text-5xl leading-[110%] font-bold text-white">
              Precisando de ajuda?
            </h1>
            <p className="text-xl leading-[150%] font-normal text-white">
              Nosso time está pronto para apresentar a solução
              <br className="hidden md:inline-block" /> ideal com a sua marca e
              a nossa estrutura.
            </p>
            <div className="mt-32 flex items-center gap-4">
              <div className="bg-brand w-full rounded-2xl bg-white/10 p-6 shadow-2xl/10 backdrop-blur-2xl">
                <Image
                  src="/images/ic-whatsapp-contact.svg"
                  alt="Ícone Whatsapp"
                  width={58}
                  height={58}
                />
                <p className="mt-6 mb-2 text-sm font-normal text-white">
                  Assuntos sobre telemedicina
                </p>
                <Link
                  href="https://wa.me/5561999399769"
                  target="_blank"
                  className="hover:text-brand-light-green text-xl font-semibold text-white duration-300"
                >
                  (61) 99939-9769
                </Link>
              </div>
              <div className="bg-brand w-full rounded-2xl bg-white/10 p-6 shadow-2xl/10 backdrop-blur-2xl">
                <Image
                  src="/images/ic-whatsapp-contact.svg"
                  alt="Ícone Whatsapp"
                  width={58}
                  height={58}
                />
                <p className="mt-6 mb-2 text-sm font-normal text-white">
                  Contato com a <strong>dr.</strong> online
                </p>
                <Link
                  href="tel:08000003501"
                  target="_blank"
                  className="hover:text-brand-light-green text-xl font-semibold text-white duration-300"
                >
                  0800 000 3501
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-brand-dark-green w-full rounded-xl p-10 shadow-2xl/30">
            <ContactForm2 />
          </div>
        </div>
      </section>
      <section className="pt-14">
        <div className="container px-4">
          <h2 className="mb-10 text-center text-[40px] font-normal text-white">
            <span className="text-brand-light-green font-bold">
              Outras opções
            </span>{" "}
            que você pode estar procurando
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:gap-10 md:grid-cols-2 md:gap-14">
            <Link
              href=""
              target="_target"
              className="group bg-brand-light-green relative flex items-center gap-8 rounded-2xl p-6 shadow-2xl/20"
            >
              <Image
                src="/images/ic-mascot-dr-online2.svg"
                alt="Imagem mascote dr. online"
                width={110}
                height={110}
                className=""
              />
              <p className="text-brand-dark-green text-[28px] leading-[130%] font-bold">
                Solicite um orçamento
              </p>
              <Image
                src="/images/ic-arrow-up-right.svg"
                alt="Imagem mascote dr. online"
                width={80}
                height={80}
                className="absolute top-0 right-0 mix-blend-soft-light duration-300 group-hover:rotate-45"
              />
            </Link>
            <Link
              href=""
              target="_target"
              className="group bg-brand-light-green relative flex items-center gap-8 rounded-2xl p-6 shadow-2xl/20"
            >
              <Image
                src="/images/ic-mascot-dr-online3.webp"
                alt="Imagem mascote dr. online"
                width={110}
                height={110}
                className=""
              />
              <p className="text-brand-dark-green text-[28px] leading-[130%] font-bold">
                Solicite um orçamento
              </p>
              <Image
                src="/images/ic-arrow-up-right.svg"
                alt="Imagem mascote dr. online"
                width={80}
                height={80}
                className="absolute top-0 right-0 mix-blend-soft-light duration-300 group-hover:rotate-45"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
