import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FAQContainer } from "./faq-container";
const faqItems: { question: string; answer: string }[] = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Ut enim ad minim veniam?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Duis aute irure dolor?",
    answer:
      "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Excepteur sint occaecat?",
    answer:
      "Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Sed ut perspiciatis unde?",
    answer:
      "Omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    question: "Nemo enim ipsam voluptatem?",
    answer:
      "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
  {
    question: "Neque porro quisquam est?",
    answer:
      "Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    question: "At vero eos et accusamus?",
    answer:
      "Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
  },
];

export const FAQ = () => {
  return (
    <Tabs defaultValue="dr-online" className="w-full">
      <div className="mb-8 flex flex-col items-center justify-between gap-5 md:mb-14 md:flex-row md:gap-10">
        <h2 className="h5 md:h4 text-center font-normal text-white md:text-start">
          Ficou com <span className="font-semibold">alguma dúvida?</span>
        </h2>
        <TabsList className="border-brand-light-green ::-webkit-scrollbar]:hidden h-auto w-full max-w-full flex-nowrap overflow-x-auto rounded-2xl border bg-transparent p-0 md:max-w-[698px]">
          <TabsTrigger
            value="dr-online"
            className="data-[state=active]:bg-brand-main-green w-full max-w-[232px] rounded-l-2xl rounded-r-none bg-transparent p-5 text-center text-lg font-semibold text-white"
          >
            dr.online
          </TabsTrigger>
          <TabsTrigger
            value="pacientes"
            className="data-[state=active]:bg-brand-main-green w-full max-w-[232px] rounded-none bg-transparent p-5 text-center text-lg font-semibold text-white"
          >
            Pacientes
          </TabsTrigger>
          <TabsTrigger
            value="profisionais-de-saude"
            className="data-[state=active]:bg-brand-main-green w-full max-w-[232px] rounded-l-none rounded-r-2xl bg-transparent p-5 text-center text-lg font-semibold text-white"
          >
            Profissionais da saúde
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="dr-online">
        <FAQContainer faqItems={faqItems} />
      </TabsContent>
      <TabsContent value="pacientes">
        <FAQContainer faqItems={faqItems} />
      </TabsContent>
      <TabsContent value="profisionais-de-saude">
        <FAQContainer faqItems={faqItems} />
      </TabsContent>
    </Tabs>
  );
};
