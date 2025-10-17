import { VerticalCarouselAboutUs } from "@/components/animated-sections/vertical-carousel-about-us";
import { CtaButton } from "@/components/cta-button";
import { HistoryTimeline } from "@/components/history-timeline";
import { CompaniesLogos } from "@/components/home-sections/companies-logos";
import { RecognitionsCarousel } from "@/components/recognitions-carousel";
import { TestimonialsSection } from "@/components/shared-sections/testimonials";
import { ValuesCarousel } from "@/components/values-carousel";
import Image from "next/image";
import React from "react";

export default function SobreNosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[url(/images/img-bg-sobre-nos.svg)] bg-cover bg-center bg-no-repeat pt-48 pb-16 sm:pt-32 sm:pb-32">
        <div className="relative z-30 container">
          <div className="w-full max-w-[450px] lg:max-w-[510px]">
            <h1 className="text-[32px] leading-[110%] font-bold text-white md:text-[40px] lg:text-[48px]">
              Transformamos saúde <br />
              digital em valor real
            </h1>
            <p className="mt-6 mb-10 text-xl leading-normal font-normal text-white">
              A <strong>dr.</strong>online é um ecossistema que combina
              tecnologia de ponta, cuidado humanizado e padrões rigorosos de
              segurança para oferecer às operadoras, empresas e pessoas uma
              experiência completa em saúde, acessível, confiável e resolutiva.
            </p>

            <CtaButton url="#saiba-mais" title="Saiba mais" />
          </div>
        </div>
        <div className="to-brand-dark-green absolute -bottom-2 left-0 z-20 h-full w-full bg-gradient-to-b from-transparent sm:h-[500px] md:-bottom-1" />
        <VerticalCarouselAboutUs
          videosColumn1={["/videos/video7.mp4", "/videos/video8.mp4"]}
          videosColumn2={["/videos/video9.mp4", "/videos/video10.mp4"]}
          videosColumn3={["/videos/video5.mp4", "/videos/video6.mp4"]}
        />
      </section>
      <CompaniesLogos />
      <section className="bg-[url(/images/img-bg-secao-sobre.webp)] bg-cover bg-no-repeat py-10 lg:py-20">
        <div className="container flex flex-col-reverse items-center gap-6 md:flex-row lg:gap-14">
          <div className="relative w-full md:max-w-[459px]">
            <Image
              src="/images/gif-sobre.gif"
              alt="Imagem sobre seção online"
              width={629}
              height={504}
              className="relative z-20 h-[450px] w-[450px] object-cover"
            />
            <div className="from-brand-light-green to-brand-main-green absolute top-0 right-0 h-[380px] w-[380px] rounded-full bg-gradient-to-b blur-[150px]" />
          </div>
          <div className="relative z-20 w-full md:max-w-[calc(100%-459px)]">
            <h2 className="mb-6 text-[32px] leading-[110%] font-bold text-white lg:text-[40px]">
              Cuidar bem nunca foi tão
              <span className="text-brand-light-green"> estratégico</span>
            </h2>
            <p className="text-[16px] leading-normal text-white">
              A dr.online nasceu com um propósito claro: tornar o acesso à saúde
              mais simples, humano e acessível. Desde o início, unimos inovação
              tecnológica, ciência clínica e acolhimento para criar um
              ecossistema digital que conecta pessoas, empresas e operadoras em
              uma nova forma de cuidar.
              <br />
              <br />
              Nossa essência é simples: acreditar que saúde não pode esperar.
              Por isso, unimos acolhimento, inovação e resultado em cada
              atendimento, transformando a experiência do paciente e gerando
              valor estratégico para quem cuida.
              <br />
              <br />
              Hoje, oferecemos um ecossistema completo que conecta operadoras,
              empresas e milhões de pessoas a soluções digitais que resolvem de
              verdade.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-10 lg:pt-20 lg:pb-20">
        <div className="container">
          <h2 className="mb-6 text-center text-[32px] leading-[110%] text-white md:mb-10 lg:mb-14 lg:text-[40px]">
            Conheça <strong className="font-bold">nossa trajetória</strong>
          </h2>
          <HistoryTimeline />
        </div>
      </section>
      <section className="overflow-hidden py-10 lg:py-20">
        <div className="container flex flex-col items-center lg:flex-row">
          <div className="mb-10 w-full lg:mb-0 lg:max-w-[330px]">
            <h2 className="text-center text-[32px] leading-[110%] text-white md:text-[40px] lg:text-start">
              É assim que levamos{" "}
              <span className="text-brand-light-green font-bold">
                telemedicina <br className="hidden lg:inline-block" /> de
                qualidade <br className="hidden lg:inline-block" /> para o mundo
              </span>
            </h2>
          </div>
          <div className="relative w-full lg:max-w-[100%-330px]">
            <div className="from-brand-light-green to-brand-main-green absolute -right-20 -bottom-32 h-[380px] w-[380px] rounded-full bg-gradient-to-b blur-[150px]" />
            <ValuesCarousel />
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="container">
          <h2 className="text-brand-dark-green mb-10 text-center text-[32px] leading-[110%] font-normal lg:text-[40px]">
            <strong>Reconhecimento</strong> pelo que importa
          </h2>

          <div className="mx-auto w-full max-w-[800px]">
            <RecognitionsCarousel />
          </div>
        </div>
      </section>
      <TestimonialsSection hasBlur>
        <h2 className="mb-10 text-center text-[32px] leading-[110%] font-bold text-white md:text-start lg:text-[40px]">
          A dr<span className="text-brand-light-green">.</span>
          <span className="font-normal">online</span> fazendo a diferença para
          empresas e seus beneficiários
        </h2>
      </TestimonialsSection>
    </>
  );
}
