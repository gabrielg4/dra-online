"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FAQContainer } from "./faq-container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
const faqItemsProfissionaisSaude: { question: string; answer: string }[] = [
  {
    question: "A telemedicina é reconhecida pelo Conselho Federal de Medicina?",
    answer:
      "Sim, a telemedicina é reconhecida e regulamentada pelo Conselho Federal de Medicina, através da Resolução CFM nº 2.314/2022 e pela Lei da telessaúde Nº 14.510, garantindo que as consultas a distância sejam tão válidas quanto as presenciais.",
  },
];

const faqItemsPacientes: { question: string; answer: string }[] = [
  {
    question: "O que é telemedicina?",
    answer:
      "A telemedicina é uma forma de oferecer serviços médicos a distância através de plataformas digitais, permitindo consultas, diagnósticos e recomendações médicas por meio de videoconferências.",
  },
  {
    question: "Como funcionam as teleconsultas?",
    answer:
      "As teleconsultas são realizadas através de uma plataforma online segura, na qual o paciente e o médico se conectam em tempo real para uma consulta médica, com vídeoconferência e chat.",
  },
  {
    question: "É seguro fazer uma consulta online?",
    answer:
      "Sim, a nossa plataforma utiliza medidas avançadas de segurança para garantir a privacidade e confidencialidade das informações dos pacientes. Além disso, todos os médicos são licenciados e capacitados para oferecer consultas a distância.",
  },
  {
    question: "Preciso de algum equipamento especial para a teleconsulta?",
    answer:
      "Não é necessário nenhum equipamento especial. A maioria dos smartphones, tablets ou computadores com câmera e microfone são adequados. É importante ter uma conexão estável com a internet, assim como um ambiente com boa iluminação e privacidade.",
  },
  {
    question: "Posso receber receitas médicas através da teleconsulta?",
    answer:
      "Sim, se o Médico considerar necessário, ele pode emitir receitas, pedidos de exames, atestados e declarações. Os medicamentos de notificação de receita A, B, C2 e C3 por determinação da ANVISA não podem ser emitidos digitalmente.",
  },
  {
    question: "A telemedicina é reconhecida pelo Conselho Federal de Medicina?",
    answer:
      "Sim, a telemedicina é reconhecida e regulamentada pelo Conselho Federal de Medicina, através da Resolução CFM nº 2.314/2022 e pela Lei da telessaúde Nº 14.510, garantindo que as consultas a distância sejam tão válidas quanto as presenciais.",
  },
  {
    question: "Posso usar a telemedicina para qualquer tipo de consulta?",
    answer:
      "A telemedicina é eficaz para muitas consultas, mas existem situações que podem exigir uma avaliação presencial, especialmente casos de urgência e emergências ou sempre que o seu Médico achar necessário.",
  },
];

export const FAQ = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title-section-faq", {
      type: "chars, words",
    });
    gsap.from(titleSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#faq",
        start: "top 80%",
        end: "top 10%",
        scrub: 3,
        // markers: true,
      },
    });

    gsap.from(".faq-btn-wrapper", {
      xPercent: 100,
      opacity: 0,
      ease: "expo.out",
      scrollTrigger: {
        trigger: "#faq",
        start: "top 80%",
        end: "top 10%",
        scrub: 2,
      },
    });
  }, []);

  return (
    <Tabs defaultValue="dr-online" className="w-full overflow-hidden pr-0.5">
      <div className="mb-8 flex flex-col items-center justify-between gap-5 md:mb-14 md:flex-row md:gap-10">
        <h2 className="title-section-faq text-center text-[24px] leading-[120%] font-normal text-white md:text-start md:text-[32px]">
          Ficou com <span className="font-semibold">alguma dúvida?</span>
        </h2>
        <TabsList className="faq-btn-wrapper border-brand-light-green h-auto w-fit flex-nowrap overflow-x-auto rounded-2xl border bg-transparent p-0 md:max-w-[698px]">
          <TabsTrigger
            value="pacientes"
            className="data-[state=active]:bg-brand-main-green min-w-[232px] rounded-none bg-transparent p-5 text-center text-lg font-semibold text-white"
          >
            Pacientes
          </TabsTrigger>
          <TabsTrigger
            value="profisionais-de-saude"
            className="data-[state=active]:bg-brand-main-green w-full min-w-[232px] rounded-l-none rounded-r-2xl bg-transparent p-5 text-center text-lg font-semibold text-white"
          >
            Profissionais da saúde
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="pacientes">
        <FAQContainer faqItems={faqItemsPacientes} />
      </TabsContent>
      <TabsContent value="profisionais-de-saude">
        <FAQContainer faqItems={faqItemsProfissionaisSaude} />
      </TabsContent>
    </Tabs>
  );
};
