"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export const DiferentialsTabs = () => {
  const isMobile = useMediaQuery({
    maxWidth: 640,
  });
  useGSAP(() => {
    isMobile
      ? gsap.from(".tab-button", {
          y: -40,
          opacity: 0,
          transition: "all",
          ease: "expo.out",
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: "#diferentials",
            start: "top 70%",
            // markers: true,
          },
        })
      : gsap.from(".tab-button", {
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
  }, [isMobile]);

  return (
    <Tabs
      defaultValue="tab1"
      className="w-full items-center gap-14 p-0 md:justify-center"
    >
      <TabsList className="shadow-brand-main-green group flex h-auto w-full max-w-full flex-col flex-nowrap gap-5 overflow-x-auto !bg-transparent p-0 shadow-2xl/20 max-[639px]:grid max-[639px]:grid-cols-2 sm:flex-row sm:!justify-start sm:gap-0 lg:justify-center">
        <TabsTrigger
          value="tab1"
          className="tab-button text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green group-has-[:not([data-state=active]):hover]:data-[state=active]:text-brand-dark-gray z-[9] shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-[16px] font-semibold duration-300 ease-in-out hover:text-white data-[state=active]:text-white group-has-[:not([data-state=active]):hover]:data-[state=active]:bg-white max-[639px]:p-4 sm:text-xl"
        >
          Entrevista
          <br /> Qualificada
        </TabsTrigger>

        <TabsTrigger
          value="tab2"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green group-has-[:not([data-state=active]):hover]:data-[state=active]:text-brand-dark-gray z-[8] shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-[16px] font-semibold duration-300 ease-in-out hover:text-white data-[state=active]:text-white group-has-[:not([data-state=active]):hover]:data-[state=active]:bg-white max-[639px]:p-4 sm:-ml-6 sm:text-xl"
        >
          Pronto
          <br /> Atendimento 24h
        </TabsTrigger>

        <TabsTrigger
          value="tab3"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green group-has-[:not([data-state=active]):hover]:data-[state=active]:text-brand-dark-gray z-[7] shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-[16px] font-semibold duration-300 ease-in-out hover:text-white data-[state=active]:text-white group-has-[:not([data-state=active]):hover]:data-[state=active]:bg-white max-[639px]:p-4 sm:-ml-6 sm:text-xl"
        >
          Consultas Eletivas
          <br /> com Especialistas
        </TabsTrigger>

        <TabsTrigger
          value="tab4"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green group-has-[:not([data-state=active]):hover]:data-[state=active]:text-brand-dark-gray z-[6] shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-[16px] font-semibold duration-300 ease-in-out hover:text-white data-[state=active]:text-white group-has-[:not([data-state=active]):hover]:data-[state=active]:bg-white max-[639px]:p-4 sm:-ml-6 sm:text-xl"
        >
          Saúde
          <br /> Mental
        </TabsTrigger>

        <TabsTrigger
          value="tab5"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green group-has-[:not([data-state=active]):hover]:data-[state=active]:text-brand-dark-gray z-[5] shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-[16px] font-semibold duration-300 ease-in-out hover:text-white data-[state=active]:text-white group-has-[:not([data-state=active]):hover]:data-[state=active]:bg-white max-[639px]:p-4 sm:-ml-6 sm:text-xl"
        >
          Gestão Integrada
          <br /> do Cuidado
        </TabsTrigger>

        <TabsTrigger
          value="tab6"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green group-has-[:not([data-state=active]):hover]:data-[state=active]:text-brand-dark-gray z-[4] shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-[16px] font-semibold duration-300 ease-in-out hover:text-white data-[state=active]:text-white group-has-[:not([data-state=active]):hover]:data-[state=active]:bg-white max-[639px]:p-4 sm:-ml-6 sm:text-xl"
        >
          Espaço de Saúde
          <br /> Conectada
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="flex flex-col items-center gap-5 bg-white md:flex-row md:gap-8 lg:gap-20">
          <div className="relative w-full md:w-1/2">
            <Image
              src={"/images/ic-arrow-up.svg"}
              alt=""
              width={48}
              height={48}
              className="absolute top-4 right-4"
            />
            <video
              src="/videos/video1.mp4"
              autoPlay
              controls={false}
              muted
              loop
              className="h-[300px] w-full rounded-lg object-cover md:h-[370px] lg:h-[477px]"
            ></video>
          </div>
          <div className="w-full px-4 sm:px-0 sm:py-8 md:w-1/2">
            <p className="text-brand-main-green mb-3 text-[28px] leading-[130%] font-bold">
              Entrevista Qualificada
            </p>
            <h3 className="text-brand-black mb-4 text-lg leading-[150%] font-bold lg:mb-6">
              Mais segurança, menos riscos.
            </h3>
            <p className="text-brand-dark-gray text-md mb-6 font-normal lg:mb-14 lg:text-lg">
              Na saúde suplementar, cada detalhe faz diferença. Transforma dados
              em decisões assertivas, reduzindo riscos jurídicos, desperdícios e
              garantindo conformidade regulatória.
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/solucao/entrevista-qualificada"
                className="text-brand-main-green text-md px-4 py-3 font-medium duration-300 hover:text-white"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mt-6 flex w-full flex-col flex-nowrap justify-between gap-0 sm:gap-4 md:flex-row lg:mt-12">
              <div className="flex flex-row justify-start max-[640]:items-center md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
                  Conformidade
                  <br className="hidden lg:inline-block" /> garantida
                </p>
              </div>
              <div className="flex flex-row justify-start max-[640px]:items-center md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
                  Decisões com
                  <br className="hidden lg:inline-block" /> base em dados
                </p>
              </div>
              <div className="flex flex-row justify-start max-[640px]:items-center md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
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
          <div className="relative w-full md:w-1/2">
            <Image
              src={"/images/ic-arrow-up.svg"}
              alt=""
              width={48}
              height={48}
              className="absolute top-4 right-4"
            />
            <video
              src="/videos/video2.mp4"
              autoPlay
              controls={false}
              muted
              loop
              className="h-[300px] w-full rounded-lg object-cover md:h-[370px] lg:h-[477px]"
            ></video>
          </div>
          <div className="w-full px-4 sm:px-0 sm:py-8 md:w-1/2">
            <p className="text-brand-main-green mb-3 text-[28px] leading-[130%] font-bold">
              Pronto Atendimento 24hs
            </p>
            <h3 className="text-brand-black mb-4 text-lg leading-[150%] font-bold lg:mb-6">
              O cuidado certo, na hora que seu beneficiário mais precisa.
            </h3>
            <p className="text-brand-dark-gray text-md mb-6 font-normal lg:mb-14 lg:text-lg">
              Imprevistos não têm hora marcada. Por isso, a Dr. Online garante
              que o acesso a um médico nunca esteja fora de alcance. Nosso{" "}
              <strong>Pronto Atendimento 24h</strong> conecta pacientes a
              clínicos e pediatras em poucos minutos, sem filas, sem burocracia
              e com <strong>mais de 92% de resolutividade.</strong>
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/solucao/pronto-atendimento"
                className="text-brand-main-green text-md px-4 py-3 font-medium duration-300 hover:text-white"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mt-6 flex w-full flex-col flex-nowrap justify-between gap-0 sm:gap-4 md:flex-row lg:mt-12">
              <div className="flex flex-row justify-start max-[640px]:items-center md:w-1/3 md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
                  Controle sobre
                  <br className="hidden lg:inline-block" /> custos assistenciais
                </p>
              </div>
              <div className="flex flex-row justify-start max-[640px]:items-center md:w-1/3 md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
                  Beneficiários mais
                  <br className="hidden lg:inline-block" /> satisfeitos e fiéis
                </p>
              </div>
              <div className="flex flex-row justify-start max-[640px]:items-center md:w-1/3 md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
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
          <div className="relative w-full md:w-1/2">
            <Image
              src={"/images/ic-arrow-up.svg"}
              alt=""
              width={48}
              height={48}
              className="absolute top-4 right-4"
            />
            <video
              src="/videos/video3.mp4"
              autoPlay
              controls={false}
              muted
              loop
              className="h-[300px] w-full rounded-lg object-cover md:h-[370px] lg:h-[477px]"
            ></video>
          </div>
          <div className="w-full px-4 sm:px-0 sm:py-8 md:w-1/2">
            <p className="text-brand-main-green mb-3 text-[28px] leading-[130%] font-bold">
              Consulta Eletivas com Especialistas
            </p>
            <h3 className="text-brand-black mb-4 text-lg leading-[150%] font-bold lg:mb-6">
              Transforme o acesso em cuidado. E o cuidado em resultado.
            </h3>
            <p className="text-brand-dark-gray text-md mb-6 font-normal lg:mb-14 lg:text-lg">
              Com apenas um clique garanta acesso rápido e qualificado há mais
              de <strong>30 especialistas</strong>, sem comprometer custos,
              estrutura ou qualidade.
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/solucao/consulta-eletiva-com-especialistas"
                className="text-brand-main-green px-4 py-2 text-[16px] leading-normal font-medium duration-300 hover:text-white"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mt-6 flex w-full flex-col flex-nowrap gap-2 md:flex-row lg:mt-12">
              <div className="flex flex-row justify-start max-[640px]:items-center min-[768]:max-w-[190px] md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
                  Garantia de acesso a especialistas em todo o país
                </p>
              </div>
              <div className="flex flex-row justify-start max-[640px]:items-center min-[768]:max-w-[168px] md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
                  Gestão inteligente do cuidado
                </p>
              </div>
              <div className="flex flex-row justify-start max-[640px]:items-center min-[768]:max-w-[168px] md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
                  Agendamento em menos de 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tab4">
        <div className="flex flex-col items-center gap-5 bg-white md:flex-row md:gap-8 lg:gap-20">
          <div className="relative w-full md:w-1/2">
            <Image
              src={"/images/ic-arrow-up.svg"}
              alt=""
              width={48}
              height={48}
              className="absolute top-4 right-4"
            />
            <video
              src="/videos/video4.mp4"
              autoPlay
              controls={false}
              muted
              loop
              className="h-[300px] w-full rounded-lg object-cover md:h-[370px] lg:h-[477px]"
            ></video>
          </div>
          <div className="w-full px-4 sm:px-0 sm:py-8 md:w-1/2">
            <p className="text-brand-main-green mb-3 text-[28px] leading-[130%] font-bold">
              Saúde Mental
            </p>
            <h3 className="text-brand-black mb-4 text-lg leading-[150%] font-bold lg:mb-6">
              Apoio imediato para quem precisa, resultados estratégicos para
              quem cuida.
            </h3>
            <p className="text-brand-dark-gray text-md mb-6 font-normal lg:mb-10 lg:text-lg">
              Oferecemos um ecossistema completo de{" "}
              <strong>saúde mental digital</strong>, através do{" "}
              <strong>Teleacolhimento Psicológico 24h</strong> e do{" "}
              <strong>Integralmente</strong>, que conectam ciência, tecnologia e
              cuidado humano para gerar impacto real.
            </p>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <Button
                variant="outline"
                className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
              >
                <Link
                  href="/solucao/saude-mental"
                  className="text-brand-main-green px-4 py-2 text-[16px] leading-normal font-medium duration-300 hover:text-white"
                >
                  Conheça mais
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex w-full flex-col flex-nowrap justify-between gap-0 sm:gap-4 md:flex-row lg:mt-12">
              <div className="flex flex-row justify-start max-[640px]:items-center md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
                  Redução de custos
                  <br className="hidden lg:inline-block" /> indiretos
                </p>
              </div>
              <div className="flex flex-row justify-start max-[640px]:items-center md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
                  Apoio estruturado
                  <br className="hidden lg:inline-block" /> em ESG
                </p>
              </div>
              <div className="flex flex-row justify-start max-[640px]:items-center md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
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
          <div className="relative w-full md:w-1/2">
            <Image
              src={"/images/ic-arrow-up.svg"}
              alt=""
              width={48}
              height={48}
              className="absolute top-4 right-4"
            />
            <video
              src="/videos/video5.mp4"
              autoPlay
              controls={false}
              muted
              loop
              className="h-[300px] w-full rounded-lg object-cover md:h-[370px] lg:h-[477px]"
            ></video>
          </div>
          <div className="w-full px-4 sm:px-0 sm:py-8 md:w-1/2">
            <p className="text-brand-main-green mb-3 text-[28px] leading-[130%] font-bold">
              Gestão Integrada do Cuidado
            </p>
            <h3 className="text-brand-black mb-4 text-lg leading-[150%] font-bold lg:mb-6">
              Mais que cuidado, gestão inteligente em saúde.
            </h3>
            <p className="text-brand-dark-gray text-md mb-6 font-normal lg:mb-10 lg:text-lg">
              Combinamos tecnologia, protocolos clínicos e equipe altamente
              qualificada para garantir resolutividade, continuidade e
              personalização do atendimento.
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/solucao/gestao-integrada-ao-cuidado"
                className="text-brand-main-green px-4 py-2 text-[16px] leading-normal font-medium duration-300 hover:text-white"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mt-6 flex w-full flex-col flex-nowrap justify-between gap-0 sm:gap-4 md:flex-row lg:mt-12">
              <div className="flex flex-row justify-start max-[640px]:items-center md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
                  Visão 360° do
                  <br className="hidden lg:inline-block" /> paciente
                </p>
              </div>
              <div className="flex flex-row justify-start max-[640px]:items-center md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
                  Uso racional dos
                  <br className="hidden lg:inline-block" /> recursos
                </p>
              </div>
              <div className="flex flex-row justify-start max-[640px]:items-center md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
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
          <div className="relative w-full md:w-1/2">
            <Image
              src={"/images/ic-arrow-up.svg"}
              alt=""
              width={48}
              height={48}
              className="absolute top-4 right-4"
            />
            <video
              src="/videos/video6.mp4"
              autoPlay
              controls={false}
              muted
              loop
              className="h-[300px] w-full rounded-lg object-cover md:h-[370px] lg:h-[477px]"
            ></video>
          </div>
          <div className="w-full px-4 sm:px-0 sm:py-8 md:w-1/2">
            <p className="text-brand-main-green mb-3 text-[28px] leading-[130%] font-bold">
              Espaço de Saúde Conectada
            </p>
            <h3 className="text-brand-black mb-4 text-lg leading-[150%] font-bold lg:mb-6">
              Uma nova forma de entregar saúde: acessível, segura, integrada e
              altamente escalável.
            </h3>
            <p className="text-brand-dark-gray text-md mb-6 font-normal lg:mb-8 lg:text-lg">
              Equipado com dispositivos médicos multiparamétricos e suporte de
              enfermagem, possibilita consultas clínicas e especializadas com
              alto nível de resolutividade e precisão diagnóstica, mesmo à
              distância.
            </p>
            <Button
              variant="outline"
              className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300"
            >
              <Link
                href="/solucao/espaco-de-saude-conectada"
                className="text-brand-main-green px-4 py-2 text-[16px] leading-normal font-medium duration-300 hover:text-white"
              >
                Conheça mais
              </Link>
            </Button>

            <div className="mt-6 flex w-full flex-col flex-nowrap justify-between gap-0 sm:gap-4 md:flex-row lg:mt-12">
              <div className="flex flex-row justify-start max-[640px]:items-center md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
                  Expansão de rede
                  <br className="hidden lg:inline-block" /> sem altos custos
                </p>
              </div>
              <div className="flex flex-row justify-start max-[640px]:items-center md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
                  Qualidade
                  <br className="hidden lg:inline-block" /> diagnóstica
                </p>
              </div>
              <div className="flex flex-row justify-start max-[640px]:items-center md:flex-col">
                <Image
                  src="/images/ic-shield-check.svg"
                  alt="Ícone check"
                  width={95}
                  height={95}
                />
                <p className="text-brand-dark-gray text-md font-semibold md:mt-2 md:ml-3 lg:text-lg">
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
