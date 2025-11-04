import type { Depoimento, Media } from "../../payload-types";

export const baseTestimonials: Pick<
  Depoimento,
  "foto" | "nome" | "depoimento" | "especialidade"
>[] = [
  {
    foto: { url: "/images/img-luciano-bento.webp" } as Media,
    nome: "Luciano Bento",
    especialidade: "Superintendente Unimed CNU",
    depoimento:
      "A parceria entre a Unimed Nacional e a dr. online fortalece a estratégia de cuidado ao ampliar o acesso à saúde com tecnologia, resolutividade e acolhimento. O modelo tem garantido agilidade nos atendimentos, redução de custos e um cuidado mais humano, melhorando a experiência dos beneficiários.",
  },
  {
    foto: { url: "/images/img-eli-melo.webp" } as Media,
    nome: "Eli Melo Jr.",
    especialidade: "Presidente da Postal Saúde",
    depoimento:
      "A parceria entre a Postal Saúde e a dr. online moderniza e humaniza o cuidado, ampliando o acesso à saúde via telemedicina com agilidade e segurança. Essa integração fortalece nossa rede e garante um cuidado acessível, resolutivo e conectado ao futuro da saúde.",
  },
  {
    foto: { url: "/images/img-caio-cesar.webp" } as Media,
    nome: "Caio Cesar",
    especialidade: "Consultor de Negócios da Cruz Azul Saúde",
    depoimento:
      "Desde o início, busquei implantar a telemedicina com excelência clínica, integração total e bom custo-benefício. Encontrei isso na Dr. Online, que mostrou expertise e flexibilidade. Em pouco tempo, integramos o serviço, oferecendo pronto atendimento e especialidades aos clientes.",
  },
  {
    foto: { url: "/images/img-renata-alamino.webp" } as Media,
    nome: "Renata Alamino",
    especialidade: "Coordenadora de Vendas da Unimed Sorocaba",
    depoimento:
      "A dr. online é uma solução inteligente que trouxe mais agilidade, assertividade e segurança ao processo de contratação de planos de saúde. Destaca-se pelo profissionalismo, expertise técnica e integração com as plataformas da Operadora, garantindo rastreabilidade e produtividade nas operações.",
  },
];
