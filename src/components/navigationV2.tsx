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
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
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
                          Consultas Online com Especialista
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
                        alt="ícone - Consultório Digital"
                        width={32}
                        height={32}
                      />
                      <div className="ml-2 max-w-[255px]">
                        <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                          Consultório Digital
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
        <li>
          <Link
            href="/saude-digital"
            className={`text-md hover:text-brand-light-green font-semibold ${textColor} duration-200`}
          >
            Saúde digital
          </Link>
        </li>
        <li>
          <Link
            href="/beneficios"
            className={`text-md hover:text-brand-light-green font-semibold ${textColor} duration-200`}
          >
            Benefícios
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={`text-md hover:text-brand-light-green font-semibold ${textColor} duration-200`}
          >
            Blog
          </Link>
        </li>
        <li className="group relative">
          <button
            className={`text-md hover:text-brand-light-green group flex cursor-pointer items-center gap-2 font-semibold ${textColor} duration-200`}
          >
            FAQ
            <ChevronDown className="group-hover/nav-link:text-brand-light-green size-4 duration-200" />
          </button>
          <div className="absolute left-0 z-50 hidden w-[400px] pt-8 group-hover:block">
            <div className="relative">
              <div className="submenu-blur rounded-lg border-0 p-6 shadow-2xl/10">
                <div className="">
                  <div className="mx-auto flex w-full items-stretch gap-8 rounded-2xl">
                    <div className="w-fit border-r border-r-white pr-8">
                      <p className="md:h6 text-xl font-semibold text-white">
                        FAQ
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8">
                      <Link
                        href="/faq/dr-online"
                        className="group/nav-link flex items-start"
                      >
                        <Image
                          src="/images/ic-faq-dronline.svg"
                          alt="ícone - dr.online"
                          width={32}
                          height={32}
                        />
                        <div className="ml-2 max-w-[180px]">
                          <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                            dr.online
                          </p>
                          <p className="text-sm text-white">
                            Perguntas e respostas sobre a empresa.
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/faq/pacientes"
                        className="group/nav-link flex items-start"
                      >
                        <Image
                          src="/images/ic-faq-pacientes.svg"
                          alt="ícone - Pacientes"
                          width={32}
                          height={32}
                        />
                        <div className="ml-2 max-w-[180px]">
                          <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                            Pacientes
                          </p>
                          <p className="text-sm text-white">
                            Dúvidas frequentes de pacientes.
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/faq/profissionais-da-saude"
                        className="group/nav-link flex items-start"
                      >
                        <Image
                          src="/images/ic-faq-profissionais.svg"
                          alt="ícone - Profissionais da saúde"
                          width={32}
                          height={32}
                        />
                        <div className="ml-2 max-w-[180px]">
                          <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                            Profissionais da saúde
                          </p>
                          <p className="text-sm text-white">
                            Informações relevantes sobre o uso da plataforma.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="group relative">
          <button
            className={`text-md hover:text-brand-light-green group flex cursor-pointer items-center gap-2 font-semibold ${textColor} duration-200`}
          >
            Trabalhe conosco
            <ChevronDown className="group-hover/nav-link:text-brand-light-green size-4 duration-200" />
          </button>
          <div className="absolute left-0 z-50 hidden w-[400px] pt-8 group-hover:block">
            <div className="relative">
              <div className="submenu-blur rounded-lg border-0 p-6 shadow-2xl/10">
                <div className="mx-auto flex w-full items-stretch gap-8 rounded-2xl">
                  <div className="w-fit border-r border-r-white pr-8">
                    <p className="md:h6 text-xl font-semibold text-white">
                      Trabalhe
                      <br /> conosco
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-8">
                    <Link
                      href="/trabalhe-conosco"
                      className="group/nav-link flex items-start"
                    >
                      <Image
                        src="/images/ic-medicos.svg"
                        alt="ícone - trabalhe conosco médicos"
                        width={32}
                        height={32}
                      />
                      <div className="ml-2 max-w-[180px]">
                        <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                          Médicos
                        </p>
                        <p className="text-sm text-white">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/trabalhe-conosco"
                      className="group/nav-link flex items-start"
                    >
                      <Image
                        src="/images/ic-demais-profissionais.svg"
                        alt="ícone - demais profissionais"
                        width={32}
                        height={32}
                      />
                      <div className="ml-2 max-w-[180px]">
                        <p className="text-md group-hover/nav-link:text-brand-light-green font-semibold text-white duration-300">
                          Demais profissionais
                        </p>
                        <p className="text-sm text-white">
                          Lorem ipsum dolor sit.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};
