import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { ChevronDown, MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button size="icon" variant="ghost">
          <MenuIcon className="text-brand-light-green size-8 cursor-pointer" />
        </Button>
      </SheetTrigger>
      <SheetContent
        hideDefaultCloseBtn
        className="z-[100] w-full overflow-y-auto bg-white/10 pt-4 backdrop-blur-2xl"
      >
        <SheetClose asChild className="absolute top-5 right-5">
          <Button size="icon" variant="ghost">
            <XIcon className="size-8 cursor-pointer text-white" />
          </Button>
        </SheetClose>
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/images/logo.svg"
              alt="Logo Dr.Online"
              width={117}
              height={22}
            />
          </SheetTitle>
          <nav className="mt-10 h-full">
            <ul className="mb-8 flex flex-col items-start justify-center gap-6">
              <li>
                <Link
                  href="/sobre-nos"
                  className="hover:text-brand-light-green text-lg font-semibold text-white duration-200"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger
                      hasChevron={false}
                      className="text-md hover:text-brand-light-green group flex cursor-pointer items-center justify-start gap-2 p-0 font-semibold text-white duration-200"
                    >
                      Soluções
                      <ChevronDown className="size-6 text-white" />
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <Link
                          href="/solucao/entrevista-qualificada"
                          className="group/nav-link flex items-start"
                        >
                          <Image
                            src="/images/ic-entrevista-qualificada.svg"
                            alt="ícone - Saúde mental"
                            width={32}
                            height={32}
                          />
                          <div className="ml-2">
                            <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                              Entrevista Qualificada
                            </p>
                            <p className="text-sm text-white">
                              Resultados que fortalecem sua operação.
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/solucao/consulta-eletiva-com-especialistas"
                          className="group/nav-link flex items-start"
                        >
                          <Image
                            src="/images/ic-consulta-online.svg"
                            alt="ícone - Consultório Digital"
                            width={32}
                            height={32}
                          />
                          <div className="ml-2">
                            <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                              Consultas Online com Especialista
                            </p>
                            <p className="text-sm text-white">
                              Inovação que transforma um espaço em ponto de
                              cuidado de alta qualidade.
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/solucao/gestao-integrada-ao-cuidado"
                          className="group/nav-link flex items-start"
                        >
                          <Image
                            src="/images/ic-atecao-integrada.svg"
                            alt="ícone - Gestão Integrada do Cuidado"
                            width={32}
                            height={32}
                          />
                          <div className="ml-2">
                            <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                              Gestão Integrada do Cuidado
                            </p>
                            <p className="text-sm text-white">
                              Mais que cuidado, gestão inteligente em saúde.
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/solucao/pronto-atendimento"
                          className="group/nav-link flex items-start"
                        >
                          <Image
                            src="/images/ic-pronto-atendimento.svg"
                            alt="ícone - Pronto Atendimento 24h"
                            width={32}
                            height={32}
                          />
                          <div className="ml-2">
                            <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                              Pronto Atendimento 24h
                            </p>
                            <p className="text-sm text-white">
                              O cuidado certo, na hora que seu beneficiário mais
                              precisa.
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/solucao/saude-mental"
                          className="group/nav-link flex items-start"
                        >
                          <Image
                            src="/images/ic-saude-mental.svg"
                            alt="ícone - Saúde mental"
                            width={32}
                            height={32}
                          />
                          <div className="ml-2">
                            <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                              Saúde Mental
                            </p>
                            <p className="text-sm text-white">
                              Apoio imediato para quem precisa, resultados
                              estratégicos para quem cuida.
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/solucao/espaco-de-saude-conectada"
                          className="group/nav-link flex items-start"
                        >
                          <Image
                            src="/images/ic-consultorio-digital.svg"
                            alt="ícone - Espaço de Saúde Conectada"
                            width={32}
                            height={32}
                          />
                          <div className="ml-2">
                            <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                              Espaço de Saúde Conectada
                            </p>
                            <p className="text-sm text-white">
                              Inovação que transforma um espaço em ponto de
                              cuidado de alta qualidade.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger
                      hasChevron={false}
                      className="text-md hover:text-brand-light-green group flex cursor-pointer items-center justify-start gap-2 p-0 font-semibold text-white duration-200"
                    >
                      Conteúdos
                      <ChevronDown className="size-6 text-white" />
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="mt-8 grid grid-cols-1 gap-8">
                        <Link
                          href="/blog"
                          className="group/nav-link flex items-start"
                        >
                          <Image
                            src="/images/ic-blog.svg"
                            alt="ícone - dr.online"
                            width={32}
                            height={32}
                          />
                          <div className="ml-2">
                            <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                              Blog
                            </p>
                            <p className="text-sm text-white">
                              Artigos e publicações sobre inovação, saúde e o
                              ecossistema dr.online.
                            </p>
                          </div>
                        </Link>
                        <Link
                          href="/noticias"
                          className="group/nav-link flex items-start"
                        >
                          <Image
                            src="/images/ic-faq-pacientes.svg"
                            alt="ícone - Pacientes"
                            width={32}
                            height={32}
                          />
                          <div className="ml-2">
                            <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                              Na Mídia
                            </p>
                            <p className="text-sm text-white">
                              Notícias e destaques sobre a presença da dr.online
                              na imprensa.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li>
                <Link
                  href="/trabalhe-conosco"
                  className="hover:text-brand-light-green text-lg font-semibold text-white duration-200"
                >
                  Seja um credenciado
                </Link>
              </li>
            </ul>
            <Button
              variant={"outline"}
              className="group flex rounded-full border-white bg-transparent px-6 py-2 duration-300 hover:bg-white"
            >
              <Link
                href="/"
                className="text-md group-hover:text-brand-main-green font-medium text-white"
              >
                Área do cliente
              </Link>
            </Button>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
