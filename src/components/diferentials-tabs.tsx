"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const DiferentialsTabs = () => {
  useGSAP(() => {
    const tabButtons = gsap.utils.toArray(".tab-button");

    gsap.from(tabButtons, {
      x: -40,
      opacity: 0,
      ease: "expo.out",
      duration: 2,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#diferentials",
        start: "top 70%",
        // markers: true,
      },
    });
  }, []);

  return (
    <Tabs
      defaultValue="tab1"
      className="w-full items-center gap-14 p-0 md:justify-center"
    >
      <TabsList className="shadow-brand-main-green flex h-auto w-full max-w-full flex-nowrap gap-0 overflow-x-auto !bg-transparent p-0 shadow-2xl/20 sm:!justify-start lg:justify-center [&::-webkit-scrollbar]:hidden">
        <TabsTrigger
          value="tab1"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green z-[9] shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-xl font-semibold duration-300 hover:text-white data-[state=active]:text-white"
        >
          Entrevista
          <br /> Qualificada
        </TabsTrigger>

        <TabsTrigger
          value="tab2"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green z-[8] -ml-6 shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-xl font-semibold duration-300 hover:text-white data-[state=active]:text-white"
        >
          Pronto
          <br /> Atendimento 24h
        </TabsTrigger>

        <TabsTrigger
          value="tab3"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green z-[7] -ml-6 shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-xl font-semibold duration-300 hover:text-white data-[state=active]:text-white"
        >
          Consultas Eletivas
          <br /> com Especialistas
        </TabsTrigger>

        <TabsTrigger
          value="tab4"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green z-[6] -ml-6 shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-xl font-semibold duration-300 hover:text-white data-[state=active]:text-white"
        >
          Saúde
          <br /> Mental
        </TabsTrigger>

        <TabsTrigger
          value="tab5"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green z-[5] -ml-6 shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-xl font-semibold duration-300 hover:text-white data-[state=active]:text-white"
        >
          Gestão Integrada
          <br /> do Cuidado
        </TabsTrigger>

        <TabsTrigger
          value="tab6"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green z-[4] -ml-6 shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-xl font-semibold duration-300 hover:text-white data-[state=active]:text-white"
        >
          Consultoria
          <br /> Digital
        </TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">
        <div className="flex flex-col items-center gap-5 bg-white md:flex-row md:gap-8 lg:gap-20">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/img-entrevista-qualificada.webp"
              alt="Pronto Atendimento 24h"
              width={568}
              height={474}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="w-full py-8 md:w-1/2">
            <p className="text-brand-main-green mb-3 text-sm font-bold">
              Entrevista Qualificada
            </p>
            <h3 className="text-brand-black mb-4 text-2xl leading-[130%] font-bold lg:mb-6 lg:text-[32px]">
              Mais segurança, menos riscos.
            </h3>
            <p className="text-brand-dark-gray text-md mb-6 font-normal lg:mb-14 lg:text-lg">
              Na saúde suplementar, cada detalhe faz diferença. Transforma dados em decisões assertivas, reduzindo riscos jurídicos, desperdícios e garantindo conformidade regulatória.
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/"
                className="text-brand-main-green text-md px-4 py-3 font-medium duration-300 hover:text-white"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mt-6 flex w-full flex-nowrap justify-between gap-4 overflow-x-auto lg:mt-12 [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Conformidade
                  <br className="hidden lg:inline-block" /> garantida
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Decisões com
                  <br className="hidden lg:inline-block" /> base em dados
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Prevenção de
                  <br className="hidden lg:inline-block" /> riscos assistenciais
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="flex flex-col items-center gap-5 bg-white md:flex-row md:gap-8 lg:gap-20">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/img-pronto-atendimento.webp"
              alt="Pronto Atendimento 24h"
              width={568}
              height={474}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="w-full py-8 md:w-1/2">
            <p className="text-brand-main-green mb-3 text-sm font-bold">
              Pronto Atendimento Médico 24h
            </p>
            <h3 className="text-brand-black mb-4 text-2xl leading-[130%] font-bold lg:mb-6 lg:text-[32px]">
              O cuidado certo, na hora que seu beneficiário mais precisa.
            </h3>
            <p className="text-brand-dark-gray text-md mb-6 font-normal lg:mb-14 lg:text-lg">
              Imprevistos não têm hora marcada. Por isso, a Dr. Online garante que o acesso a um médico nunca esteja fora de alcance. Nosso <strong>Pronto Atendimento 24h</strong> conecta pacientes a clínicos e pediatras em poucos minutos, sem filas, sem burocracia e com <strong>mais de 92% de resolutividade.</strong>
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/"
                className="text-brand-main-green text-md px-4 py-3 font-medium duration-300 hover:text-white"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="lgmt-12 mt-6 flex w-full flex-nowrap justify-between gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              <div className="flex w-1/3 flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Controle sobre
                  <br className="hidden lg:inline-block" /> custos assistenciais
                </p>
              </div>
              <div className="flex w-1/3 flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Beneficiários mais
                  <br className="hidden lg:inline-block" /> satisfeitos e fiéis
                </p>
              </div>
              <div className="flex w-1/3 flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Dados estratégicos
                  <br className="hidden lg:inline-block" /> para tomada de
                  decisão
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="flex flex-col items-center gap-5 bg-white md:flex-row md:gap-8 lg:gap-20">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/img-pronto-atendimento.webp"
              alt="Pronto Atendimento 24h"
              width={568}
              height={474}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="w-full py-8 md:w-1/2">
            <p className="text-brand-main-green mb-3 text-sm font-bold">
              Consulta Eletivas com Especialistas
            </p>
            <h3 className="text-brand-black mb-4 text-2xl leading-[130%] font-bold lg:mb-6 lg:text-[32px]">
              Transforme o acesso em cuidado.
              E o cuidado em resultado.
            </h3>
            <p className="text-brand-dark-gray text-md mb-6 font-normal lg:mb-14 lg:text-lg">
              Com apenas um clique garanta acesso rápido e qualificado há mais de
              <strong>30 especialistas</strong>, sem comprometer custos, estrutura ou qualidade.
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/"
                className="text-brand-main-green px-4 py-2 font-medium duration-300 hover:text-white text-[16px] leading-normal"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mb-6 flex w-full flex-nowrap justify-between gap-4 overflow-x-auto lg:mt-12 [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 text-center font-semibold lg:text-lg">
                  Garantia de acesso a especialistas em todo o país
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 text-center font-semibold lg:text-lg">
                  Gestão inteligente do cuidado
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 text-center font-semibold lg:text-lg">
                  Agendamento em menos de 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tab4">
        <div className="flex flex-col items-center gap-5 bg-white md:flex-row md:gap-8 lg:gap-20">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/img-pronto-atendimento.webp"
              alt="Pronto Atendimento 24h"
              width={568}
              height={474}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="w-full py-8 md:w-1/2">
            <p className="text-brand-main-green mb-3 text-sm font-bold">
              Saúde Mental
            </p>
            <h3 className="text-brand-black mb-4 text-2xl leading-[130%] font-bold lg:mb-6 lg:text-[32px]">
              Apoio imediato para quem precisa, resultados estratégicos para quem cuida.
            </h3>
            <p className="text-brand-dark-gray text-md mb-6 font-normal lg:mb-10 lg:text-lg">
              Oferecemos um ecossistema completo de <strong>saúde mental digital</strong>, através do <strong>Teleacolhimento Psicológico 24h</strong> e do <strong>Integralmente</strong>, que conectam ciência, tecnologia e cuidado humano para gerar impacto real.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <Button
                variant="outline"
                className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
              >
                <Link
                  href="/"
                  className="text-brand-main-green px-4 py-2 font-medium duration-300 hover:text-white text-[16px] leading-normal"
                >
                  Conheça mais o <strong>Teleacolhimento</strong>
                </Link>
              </Button>

              <Button
                variant="outline"
                className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
              >
                <Link
                  href="/"
                  className="text-brand-main-green px-4 py-2 font-medium duration-300 hover:text-white text-[16px] leading-normal"
                >
                  Conheça mais o <strong>Integralmente</strong>
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex w-full flex-nowrap justify-between gap-4 overflow-x-auto lg:mt-12 [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Redução de custos
                  <br className="hidden lg:inline-block" /> indiretos
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Apoio estruturado
                  <br className="hidden lg:inline-block" /> em ESG
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Gera valor para o<br className="hidden lg:inline-block" />{" "}
                  plano de saúde
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tab5">
        <div className="flex flex-col items-center gap-5 bg-white md:flex-row md:gap-8 lg:gap-20">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/img-pronto-atendimento.webp"
              alt="Pronto Atendimento 24h"
              width={568}
              height={474}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="w-full py-8 md:w-1/2">
            <p className="text-brand-main-green mb-3 text-sm font-bold">
              Gestão Integrada do Cuidado
            </p>
            <h3 className="text-brand-black mb-4 text-2xl leading-[130%] font-bold lg:mb-6 lg:text-[32px]">
              Mais que cuidado, gestão inteligente
              em saúde.
            </h3>
            <p className="text-brand-dark-gray text-md mb-6 font-normal lg:mb-10 lg:text-lg">
              Combinamos tecnologia, protocolos clínicos e equipe altamente qualificada para garantir resolutividade, continuidade e personalização do atendimento.
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/"
                className="text-brand-main-green px-4 py-2 font-medium duration-300 hover:text-white text-[16px] leading-normal"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mt-6 flex w-full flex-nowrap justify-between gap-4 overflow-x-auto lg:mt-12 [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Visão 360° do
                  <br className="hidden lg:inline-block" /> paciente
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Uso racional dos
                  <br className="hidden lg:inline-block" /> recursos
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Redução de custos
                  <br className="hidden lg:inline-block" /> evitáveis
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tab6">
        <div className="flex flex-col items-center gap-5 bg-white md:flex-row md:gap-8 lg:gap-20">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/img-pronto-atendimento.webp"
              alt="Pronto Atendimento 24h"
              width={568}
              height={474}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="w-full py-8 md:w-1/2">
            <p className="text-brand-main-green mb-3 text-sm font-bold">
              Consultório Digital
            </p>
            <h3 className="text-brand-black mb-4 text-2xl leading-[130%] font-bold lg:mb-6 lg:text-[32px]">
              Uma nova forma de entregar saúde: acessível, segura, integrada e altamente escalável.
            </h3>
            <p className="text-brand-dark-gray text-md mb-6 font-normal lg:mb-8 lg:text-lg">
              Equipado com dispositivos médicos multiparamétricos e suporte de enfermagem, possibilita consultas clínicas e especializadas com alto nível de resolutividade e precisão diagnóstica, mesmo à distância.
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/"
                className="text-brand-main-green px-4 py-2 font-medium duration-300 hover:text-white text-[16px] leading-normal"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mt-6 flex w-full flex-nowrap justify-between gap-4 overflow-x-auto lg:mt-12 [&::-webkit-scrollbar]:hidden">
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Expansão de rede
                  <br className="hidden lg:inline-block" /> sem altos custos
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Qualidade
                  <br className="hidden lg:inline-block" /> diagnóstica
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md mt-2 ml-3 font-semibold lg:text-lg">
                  Experiência
                  <br className="hidden lg:inline-block" /> humanizada
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};
