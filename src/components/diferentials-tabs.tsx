"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import ContentTabSwiper01 from "@/components/home-sections/diferentials-tabs-swipers/content-tab-swiper-01";
import ContentTabSwiper02 from "@/components/home-sections/diferentials-tabs-swipers/content-tab-swiper-02";
import ContentTabSwiper03 from "@/components/home-sections/diferentials-tabs-swipers/content-tab-swiper-03";
import ContentTabSwiper04 from "@/components/home-sections/diferentials-tabs-swipers/content-tab-swiper-04";
import ContentTabSwiper05 from "@/components/home-sections/diferentials-tabs-swipers/content-tab-swiper-05";
import ContentTabSwiper06 from "@/components/home-sections/diferentials-tabs-swipers/content-tab-swiper-06";

export const DiferentialsTabs = () => {
  const isMobile = useMediaQuery({
    maxWidth: 640,
  });
  useGSAP(() => {
    if (isMobile) {
      // Adicionando a animação de empilhamento de cartas no mobile
      gsap.from(".tab-content", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      // Animação para os botões (tabs) apenas no desktop
      gsap.from(".tab-button", {
        x: -40,
        opacity: 0,
        ease: "expo.out",
        duration: 2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#diferentials",
          start: "top 70%",
        },
      });
    }
  }, [isMobile]);

  return (
    <Tabs
      defaultValue="tab1"
      className="w-full items-center gap-14 p-0 max-sm:!hidden md:justify-center"
    >
      <TabsList className="shadow-brand-main-green group flex h-auto w-full max-w-full flex-row flex-nowrap gap-1 overflow-x-auto !bg-transparent p-0 shadow-2xl/20 max-sm:flex-wrap sm:flex-row sm:!justify-start sm:gap-0 lg:justify-center">
        <TabsTrigger
          value="tab1"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green group-has-[:not([data-state=active]):hover]:data-[state=active]:text-brand-dark-gray max-sm:border-brand-light-green max-sm:text-brand-dark-green z-[9] shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-[16px] font-semibold duration-300 ease-in-out hover:text-white data-[state=active]:text-white group-has-[:not([data-state=active]):hover]:data-[state=active]:bg-white max-[639px]:p-4 max-sm:w-full max-sm:max-w-fit max-sm:border max-sm:px-2 max-sm:py-1 max-sm:text-sm sm:text-xl"
        >
          Entrevista <br className="max-sm:hidden" />
          Qualificada
        </TabsTrigger>

        <TabsTrigger
          value="tab2"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green group-has-[:not([data-state=active]):hover]:data-[state=active]:text-brand-dark-gray max-sm:border-brand-light-green max-sm:text-brand-dark-green z-[8] shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-[16px] font-semibold duration-300 ease-in-out hover:text-white data-[state=active]:text-white group-has-[:not([data-state=active]):hover]:data-[state=active]:bg-white max-[639px]:p-4 max-sm:w-full max-sm:max-w-fit max-sm:border max-sm:px-2 max-sm:py-1 max-sm:text-sm sm:text-xl"
        >
          Pronto <br className="max-sm:hidden" />
          Atendimento 24h
        </TabsTrigger>

        <TabsTrigger
          value="tab3"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green group-has-[:not([data-state=active]):hover]:data-[state=active]:text-brand-dark-gray max-sm:border-brand-light-green max-sm:text-brand-dark-green z-[7] shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-[16px] font-semibold duration-300 ease-in-out hover:text-white data-[state=active]:text-white group-has-[:not([data-state=active]):hover]:data-[state=active]:bg-white max-[639px]:p-4 max-sm:w-full max-sm:max-w-fit max-sm:border max-sm:px-2 max-sm:py-1 max-sm:text-sm sm:-ml-6 sm:text-xl"
        >
          Consultas Eletivas
          <br className="max-sm:hidden" /> com Especialistas
        </TabsTrigger>

        <TabsTrigger
          value="tab4"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green group-has-[:not([data-state=active]):hover]:data-[state=active]:text-brand-dark-gray max-sm:border-brand-light-green max-sm:text-brand-dark-green z-[6] shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-[16px] font-semibold duration-300 ease-in-out hover:text-white data-[state=active]:text-white group-has-[:not([data-state=active]):hover]:data-[state=active]:bg-white max-[639px]:p-4 max-sm:w-full max-sm:max-w-fit max-sm:border max-sm:px-2 max-sm:py-1 max-sm:text-sm sm:-ml-6 sm:text-xl"
        >
          Saúde
          <br className="max-sm:hidden" /> Mental
        </TabsTrigger>

        <TabsTrigger
          value="tab5"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green group-has-[:not([data-state=active]):hover]:data-[state=active]:text-brand-dark-gray max-sm:border-brand-light-green max-sm:text-brand-dark-green z-[5] shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-[16px] font-semibold duration-300 ease-in-out hover:text-white data-[state=active]:text-white group-has-[:not([data-state=active]):hover]:data-[state=active]:bg-white max-[639px]:p-4 max-sm:w-full max-sm:max-w-fit max-sm:border max-sm:px-2 max-sm:py-1 max-sm:text-sm sm:-ml-6 sm:text-xl"
        >
          Gestão Integrada
          <br className="max-sm:hidden" /> do Cuidado
        </TabsTrigger>

        <TabsTrigger
          value="tab6"
          className="tab-button tab-button-blur text-brand-dark-gray data-[state=active]:bg-brand-main-green hover:bg-brand-main-green group-has-[:not([data-state=active]):hover]:data-[state=active]:text-brand-dark-gray max-sm:border-brand-light-green max-sm:text-brand-dark-green z-[4] shrink-0 rounded-2xl bg-white py-4 pr-6 pl-8 text-center text-[16px] font-semibold duration-300 ease-in-out hover:text-white data-[state=active]:text-white group-has-[:not([data-state=active]):hover]:data-[state=active]:bg-white max-[639px]:p-4 max-sm:w-full max-sm:max-w-fit max-sm:border max-sm:px-2 max-sm:py-1 max-sm:text-sm sm:-ml-6 sm:text-xl"
        >
          Espaço de Saúde
          <br className="max-sm:hidden" /> Conectada
        </TabsTrigger>
      </TabsList>
      <div className="stack-area w-full max-sm:relative max-sm:min-h-[780px] sm:min-h-0">
        <TabsContent value="tab1">
          <div className="max-sm:bg-brand-dark-green flex w-full flex-col items-center gap-5 bg-white max-sm:max-w-full max-sm:rounded-2xl max-sm:p-4 md:flex-row md:gap-8 lg:gap-20">
            <div className="relative w-full md:w-1/2">
              <Image
                src={"/images/ic-arrow-up.svg"}
                alt=""
                width={48}
                height={48}
                className="absolute top-4 right-4"
              />
              <video
                src="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Home/Mi%CC%81dia4.mp4"
                autoPlay
                controls={false}
                muted
                loop
                className="h-[300px] w-full rounded-lg object-cover md:h-[370px] lg:h-[477px]"
              ></video>
            </div>
            <div className="w-full px-4 max-sm:max-w-full max-sm:px-0 sm:px-0 sm:py-8 md:w-1/2">
              <p className="text-brand-main-green mb-3 text-[28px] leading-[130%] font-bold max-sm:text-center max-sm:text-[22px] max-sm:text-white">
                Entrevista Qualificada
              </p>
              <h3 className="text-brand-black mb-4 text-lg leading-[150%] font-bold max-sm:hidden max-sm:text-center max-sm:text-white lg:mb-6">
                Mais segurança, menos riscos.
              </h3>
              <p className="text-brand-dark-gray text-md mb-6 font-normal max-sm:text-center max-sm:text-white lg:mb-8 lg:text-lg">
                Na saúde suplementar, cada detalhe faz diferença. Transforma
                dados em decisões assertivas, reduzindo riscos jurídicos,
                desperdícios e garantindo conformidade regulatória.
              </p>
              <Button
                variant="outline"
                className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300 max-sm:mx-auto max-sm:table max-sm:border-white max-sm:bg-transparent"
              >
                <Link
                  href="/solucao/entrevista-qualificada"
                  className="text-brand-main-green text-md px-4 py-3 font-medium duration-300 hover:text-white max-sm:text-white"
                >
                  Conheça mais
                </Link>
              </Button>

              <div className="mt-6 flex w-full flex-col flex-nowrap justify-between gap-0 sm:gap-4 md:flex-row lg:mt-8">
                {/* swiper ficará aqui */}
                <ContentTabSwiper01 />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="max-sm:bg-brand-main-green flex w-full flex-col items-center gap-5 bg-white max-sm:max-w-full max-sm:rounded-2xl max-sm:p-4 md:flex-row md:gap-8 lg:gap-20">
            <div className="relative w-full md:w-1/2">
              <Image
                src={"/images/ic-arrow-up.svg"}
                alt=""
                width={48}
                height={48}
                className="absolute top-4 right-4"
              />
              <video
                src="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Home/Mi%CC%81dia5.mp4"
                autoPlay
                controls={false}
                muted
                loop
                className="h-[300px] w-full rounded-lg object-cover md:h-[370px] lg:h-[477px]"
              ></video>
            </div>
            <div className="w-full px-4 max-sm:max-w-full max-sm:px-0 sm:px-0 sm:py-8 md:w-1/2">
              <p className="text-brand-main-green mb-3 text-[28px] leading-[130%] font-bold max-sm:text-center max-sm:text-[22px] max-sm:text-white">
                Pronto Atendimento 24hs
              </p>
              <h3 className="text-brand-black mb-4 text-lg leading-[150%] font-bold max-sm:hidden max-sm:text-center max-sm:text-white lg:mb-6">
                O cuidado certo, na hora que seu beneficiário mais precisa.
              </h3>
              <p className="text-brand-dark-gray text-md mb-6 font-normal max-sm:text-center max-sm:text-white lg:mb-8 lg:text-lg">
                Imprevistos não têm hora marcada. Por isso, a Dr. Online garante
                que o acesso a um médico nunca esteja fora de alcance. Nosso{" "}
                <strong>Pronto Atendimento 24h</strong> conecta pacientes a
                clínicos e pediatras em poucos minutos, sem filas, sem
                burocracia e com <strong>mais de 92% de resolutividade.</strong>
              </p>
              <Button
                variant="outline"
                className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300 max-sm:mx-auto max-sm:table max-sm:border-white max-sm:bg-transparent"
              >
                <Link
                  href="/solucao/pronto-atendimento"
                  className="text-brand-main-green text-md px-4 py-3 font-medium duration-300 hover:text-white max-sm:text-white"
                >
                  Conheça mais
                </Link>
              </Button>

              <div className="mt-6 flex w-full flex-col flex-nowrap justify-between gap-0 sm:gap-4 md:flex-row lg:mt-8">
                <ContentTabSwiper02 />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="max-sm:bg-brand-light-green flex w-full flex-col items-center gap-5 bg-white max-sm:max-w-full max-sm:rounded-2xl max-sm:p-4 md:flex-row md:gap-8 lg:gap-20">
            <div className="relative w-full md:w-1/2">
              <Image
                src={"/images/ic-arrow-up.svg"}
                alt=""
                width={48}
                height={48}
                className="absolute top-4 right-4"
              />
              <video
                src="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Especialidades/1015.mp4"
                autoPlay
                controls={false}
                muted
                loop
                className="h-[300px] w-full rounded-lg object-cover md:h-[370px] lg:h-[477px]"
              ></video>
            </div>
            <div className="w-full px-4 max-sm:max-w-full max-sm:px-0 sm:px-0 sm:py-8 md:w-1/2">
              <p className="text-brand-main-green mb-3 text-[28px] leading-[130%] font-bold max-sm:text-center max-sm:text-[22px] max-sm:text-white">
                Consulta Eletivas com Especialistas
              </p>
              <h3 className="text-brand-black mb-4 text-lg leading-[150%] font-bold max-sm:hidden max-sm:text-center max-sm:text-white lg:mb-6">
                Transforme o acesso em cuidado. E o cuidado em resultado.
              </h3>
              <p className="text-brand-dark-gray text-md mb-6 font-normal max-sm:text-center max-sm:text-white lg:mb-8 lg:text-lg">
                Com apenas um clique garanta acesso rápido e qualificado há mais
                de <strong>30 especialistas</strong>, sem comprometer custos,
                estrutura ou qualidade.
              </p>
              <Button
                variant="outline"
                className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300 max-sm:mx-auto max-sm:table max-sm:border-white max-sm:bg-transparent"
              >
                <Link
                  href="/solucao/consulta-eletiva-com-especialistas"
                  className="text-brand-main-green text-md px-4 py-3 font-medium duration-300 hover:text-white max-sm:text-white"
                >
                  Conheça mais
                </Link>
              </Button>

              <div className="mt-6 flex w-full flex-col flex-nowrap gap-2 md:flex-row lg:mt-12">
                <ContentTabSwiper03 />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="tab4">
          <div className="max-sm:bg-brand-dark-green flex w-full flex-col items-center gap-5 bg-white max-sm:max-w-full max-sm:rounded-2xl max-sm:p-4 md:flex-row md:gap-8 lg:gap-20">
            <div className="relative w-full md:w-1/2">
              <Image
                src={"/images/ic-arrow-up.svg"}
                alt=""
                width={48}
                height={48}
                className="absolute top-4 right-4"
              />
              <video
                src="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Home/grok-video-839cfd47-de63-4bfc-a796-68d082bc23a0.mp4"
                autoPlay
                controls={false}
                muted
                loop
                className="h-[300px] w-full rounded-lg object-cover md:h-[370px] lg:h-[477px]"
              ></video>
            </div>
            <div className="w-full px-4 max-sm:max-w-full max-sm:px-0 sm:px-0 sm:py-8 md:w-1/2">
              <p className="text-brand-main-green mb-3 text-[28px] leading-[130%] font-bold max-sm:text-center max-sm:text-[22px] max-sm:text-white">
                Saúde Mental
              </p>
              <h3 className="text-brand-black mb-4 text-lg leading-[150%] font-bold max-sm:hidden max-sm:text-center max-sm:text-white lg:mb-6">
                Apoio imediato para quem precisa, resultados estratégicos para
                quem cuida.
              </h3>
              <p className="text-brand-dark-gray text-md mb-6 font-normal max-sm:text-center max-sm:text-white lg:mb-8 lg:text-lg">
                Oferecemos um ecossistema completo de{" "}
                <strong>saúde mental digital</strong>, através do{" "}
                <strong>Teleacolhimento Psicológico 24h</strong> e do{" "}
                <strong>Integralmente</strong>, que conectam ciência, tecnologia
                e cuidado humano para gerar impacto real.
              </p>
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <Button
                  variant="outline"
                  className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300 max-sm:mx-auto max-sm:table max-sm:border-white max-sm:bg-transparent"
                >
                  <Link
                    href="/solucao/saude-mental"
                    className="text-brand-main-green text-md px-4 py-3 font-medium duration-300 hover:text-white max-sm:text-white"
                  >
                    Conheça mais
                  </Link>
                </Button>
              </div>

              <div className="mt-6 flex w-full flex-col flex-nowrap justify-between gap-0 sm:gap-4 md:flex-row lg:mt-8">
                <ContentTabSwiper04 />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="tab5">
          <div className="max-sm:bg-brand-main-green flex w-full flex-col items-center gap-5 bg-white max-sm:max-w-full max-sm:rounded-2xl max-sm:p-4 md:flex-row md:gap-8 lg:gap-20">
            <div className="relative w-full md:w-1/2">
              <Image
                src={"/images/ic-arrow-up.svg"}
                alt=""
                width={48}
                height={48}
                className="absolute top-4 right-4"
              />
              <video
                src="https://assets-dronline.s3.us-east-1.amazonaws.com/site-dronline/Home/envato_video_gen_Oct_08_2025_17_12_32.mp4"
                autoPlay
                controls={false}
                muted
                loop
                className="h-[300px] w-full rounded-lg object-cover md:h-[370px] lg:h-[477px]"
              ></video>
            </div>
            <div className="w-full px-4 max-sm:max-w-full max-sm:px-0 sm:px-0 sm:py-8 md:w-1/2">
              <p className="text-brand-main-green mb-3 text-[28px] leading-[130%] font-bold max-sm:text-center max-sm:text-[22px] max-sm:text-white">
                Gestão Integrada do Cuidado
              </p>
              <h3 className="text-brand-black mb-4 text-lg leading-[150%] font-bold max-sm:hidden max-sm:text-center max-sm:text-white lg:mb-6">
                Mais que cuidado, gestão inteligente em saúde.
              </h3>
              <p className="text-brand-dark-gray text-md mb-6 font-normal max-sm:text-center max-sm:text-white lg:mb-8 lg:text-lg">
                Combinamos tecnologia, protocolos clínicos e equipe altamente
                qualificada para garantir resolutividade, continuidade e
                personalização do atendimento.
              </p>
              <Button
                variant="outline"
                className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300 max-sm:mx-auto max-sm:table max-sm:border-white max-sm:bg-transparent"
              >
                <Link
                  href="/solucao/gestao-integrada-ao-cuidado"
                  className="text-brand-main-green text-md px-4 py-3 font-medium duration-300 hover:text-white max-sm:text-white"
                >
                  Conheça mais
                </Link>
              </Button>

              <div className="mt-6 flex w-full flex-col flex-nowrap justify-between gap-0 sm:gap-4 md:flex-row lg:mt-8">
                <ContentTabSwiper05 />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="tab6">
          <div className="max-sm:bg-brand-light-green flex w-full flex-col items-center gap-5 bg-white max-sm:max-w-full max-sm:rounded-2xl max-sm:p-4 md:flex-row md:gap-8 lg:gap-20">
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
            <div className="w-full px-4 max-sm:max-w-full max-sm:px-0 sm:px-0 sm:py-8 md:w-1/2">
              <p className="text-brand-main-green mb-3 text-[28px] leading-[130%] font-bold max-sm:text-center max-sm:text-[22px] max-sm:text-white">
                Espaço de Saúde Conectada
              </p>
              <h3 className="text-brand-black mb-4 text-lg leading-[150%] font-bold max-sm:hidden max-sm:text-center max-sm:text-white lg:mb-6">
                Uma nova forma de entregar saúde: acessível, segura, integrada e
                altamente escalável.
              </h3>
              <p className="text-brand-dark-gray text-md mb-6 font-normal max-sm:text-center max-sm:text-white lg:mb-8 lg:text-lg">
                Equipado com dispositivos médicos multiparamétricos e suporte de
                enfermagem, possibilita consultas clínicas e especializadas com
                alto nível de resolutividade e precisão diagnóstica, mesmo à
                distância.
              </p>
              <Button
                variant="outline"
                className="border-brand-main-green group hover:bg-brand-main-green rounded-full p-0 duration-300 max-sm:mx-auto max-sm:table max-sm:border-white max-sm:bg-transparent"
              >
                <Link
                  href="/solucao/espaco-de-saude-conectada"
                  className="text-brand-main-green text-md px-4 py-3 font-medium duration-300 hover:text-white max-sm:text-white"
                >
                  Conheça mais
                </Link>
              </Button>

              <div className="mt-6 flex w-full flex-col flex-nowrap justify-between gap-0 sm:gap-4 md:flex-row lg:mt-8">
                <ContentTabSwiper06 />
              </div>
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};
