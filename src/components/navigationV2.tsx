"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface NavigationProps {
  textColor?: string;
}

export const NavigationV2 = ({ textColor = "text-white" }: NavigationProps) => {
  return (
    <nav className="hidden w-fit lg:block">
      <ul className="flex items-center justify-center gap-6">
        <li>
          <Link
            href="/sobre-nos"
            className={`text-md hover:text-brand-light-green font-semibold ${textColor} duration-200`}
          >
            Sobre
          </Link>
        </li>
        <li className="group">
          <button
            className={`text-md hover:text-brand-light-green flex cursor-pointer items-center gap-2 font-semibold ${textColor} duration-200`}
          >
            Soluções
            <ChevronDown className="group-hover/nav-link:text-brand-light-green size-4 duration-200" />
          </button>

          {/* Submenu */}
          <div className="absolute left-0 z-50 hidden w-full max-w-[1216px] min-w-[1216px] pt-8 group-hover:block">
            <div className="relative">
              <div className="submenu-blur w-full rounded-lg border-0 p-6 shadow-2xl/10">
                <div className="mx-auto flex w-full items-stretch gap-8 rounded-2xl">
                  <div className="w-fit border-r border-r-white pr-8">
                    <p className="md:h6 text-xl font-semibold text-white">
                      Soluções
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
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
                      <div className="ml-2 max-w-[255px]">
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
                      <div className="ml-2 max-w-[255px]">
                        <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                          Consulta Eletiva com Especialistas
                        </p>
                        <p className="text-sm text-white">
                          Inovação que transforma um espaço em ponto de cuidado
                          de alta qualidade.
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
                      <div className="ml-2 max-w-[255px]">
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
                      <div className="ml-2 max-w-[255px]">
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
                      <div className="ml-2 max-w-[255px]">
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
                      <div className="ml-2 max-w-[255px]">
                        <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                          Espaço de Saúde Conectada
                        </p>
                        <p className="text-sm text-white">
                          Inovação que transforma um espaço em ponto de cuidado
                          de alta qualidade.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="group">
          <button
            className={`text-md hover:text-brand-light-green flex cursor-pointer items-center gap-2 font-semibold ${textColor} duration-200`}
          >
            Conteúdos
            <ChevronDown className="group-hover/nav-link:text-brand-light-green size-4 duration-200" />
          </button>

          {/* Submenu */}
          <div className="absolute right-0 z-50 hidden w-full max-w-[678px] pt-8 group-hover:block">
            <div className="relative">
              <div className="submenu-blur w-full rounded-lg border-0 p-6 shadow-2xl/10">
                <div className="mx-auto flex w-full items-stretch gap-8 rounded-2xl">
                  <div className="w-fit border-r border-r-white pr-8">
                    <p className="md:h6 text-xl font-semibold text-white">
                      Conteúdos
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-8">
                    <Link
                      href="/blog"
                      className="group/nav-link flex items-start"
                    >
                      <Image
                        src="/images/ic-blog.svg"
                        alt="ícone - Saúde mental"
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
                        src="/images/ic-dr-online.svg"
                        alt="ícone - Consultório Digital"
                        width={32}
                        height={32}
                      />
                      <div className="ml-2">
                        <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                          Na Mídia
                        </p>
                        <p className="text-sm text-white">
                          Notícias e destaques sobre a presença da dr.online na
                          imprensa.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link
            href="/trabalhe-conosco"
            className={`text-md hover:text-brand-light-green font-semibold ${textColor} duration-200`}
          >
            Seja um credenciado
          </Link>
        </li>
      </ul>
    </nav>
  );
};
