"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export const Navigation = () => {
  return (
    <nav className="hidden w-fit lg:block">
      <ul className="flex items-center justify-center gap-6">
        <li>
          <Link
            href="/sobre"
            className="text-md hover:text-brand-light-green font-semibold text-white duration-200"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-md hover:text-brand-light-green group flex cursor-pointer items-center gap-2 font-semibold text-white duration-200">
                Soluções
                <ChevronDown className="group-hover:text-brand-light-green size-4 duration-200" />
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="mt-8 w-full -translate-x-[16%] border-0 bg-white/10 p-6 shadow-2xl/10 backdrop-blur-2xl min-[1600px]:-translate-x-[25%]"
            >
              <div className="mx-auto flex w-full items-stretch gap-8 rounded-2xl">
                <div className="w-fit border-r border-r-white pr-8">
                  <p className="md:h6 text-xl font-semibold text-white">
                    Soluções
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  <Link
                    href="/solucoes/saude-mental"
                    className="group flex items-start"
                  >
                    <Image
                      src="/images/ic-saude-mental.svg"
                      alt="ícone - Saúde mental"
                      width={32}
                      height={32}
                    />
                    <div className="ml-2 max-w-[255px]">
                      <p className="text-md group-hover:text-brand-light-green font-semibold text-white duration-300">
                        Saúde Mental
                      </p>
                      <p className="text-sm text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/solucoes/entrevista-qualificada"
                    className="group flex items-start"
                  >
                    <Image
                      src="/images/ic-entrevista-qualificada.svg"
                      alt="ícone - Saúde mental"
                      width={32}
                      height={32}
                    />
                    <div className="ml-2 max-w-[255px]">
                      <p className="text-md group-hover:text-brand-light-green font-semibold text-white duration-300">
                        Entrevista Qualificada
                      </p>
                      <p className="text-sm text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/solucoes/atecao-integrada-a-saude"
                    className="group flex items-start"
                  >
                    <Image
                      src="/images/ic-atecao-integrada.svg"
                      alt="ícone - Atenção Integrada à Saúde"
                      width={32}
                      height={32}
                    />
                    <div className="ml-2 max-w-[255px]">
                      <p className="text-md group-hover:text-brand-light-green font-semibold text-white duration-300">
                        Atenção Integrada à Saúde
                      </p>
                      <p className="text-sm text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/solucoes/pronto-atendimento"
                    className="group flex items-start"
                  >
                    <Image
                      src="/images/ic-pronto-atendimento.svg"
                      alt="ícone - Pronto Atendimento 24h"
                      width={32}
                      height={32}
                    />
                    <div className="ml-2 max-w-[255px]">
                      <p className="text-md group-hover:text-brand-light-green font-semibold text-white duration-300">
                        Pronto Atendimento 24h
                      </p>
                      <p className="text-sm text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/solucoes/consulta-online"
                    className="group flex items-start"
                  >
                    <Image
                      src="/images/ic-consulta-online.svg"
                      alt="ícone - Consulta Online com Especialistas"
                      width={32}
                      height={32}
                    />
                    <div className="ml-2 max-w-[255px]">
                      <p className="text-md group-hover:text-brand-light-green font-semibold text-white duration-300">
                        Consulta Online com Especialistas
                      </p>
                      <p className="text-sm text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/solucoes/consultorio-digital"
                    className="group flex items-start"
                  >
                    <Image
                      src="/images/ic-consultorio-digital.svg"
                      alt="ícone - Consultório Digital"
                      width={32}
                      height={32}
                    />
                    <div className="ml-2 max-w-[255px]">
                      <p className="text-md group-hover:text-brand-light-green font-semibold text-white duration-300">
                        Consultório Digital
                      </p>
                      <p className="text-sm text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </li>
        <li>
          <Link
            href="/saude-digital"
            className="text-md hover:text-brand-light-green font-semibold text-white duration-200"
          >
            Saúde digital
          </Link>
        </li>
        <li>
          <Link
            href="/beneficios"
            className="text-md hover:text-brand-light-green font-semibold text-white duration-200"
          >
            Benefícios
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="text-md hover:text-brand-light-green font-semibold text-white duration-200"
          >
            Blog
          </Link>
        </li>
        <li>
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-md hover:text-brand-light-green group flex cursor-pointer items-center gap-2 font-semibold text-white duration-200">
                FAQ
                <ChevronDown className="group-hover:text-brand-light-green size-4 duration-200" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="mt-8 w-full border-0 bg-white/10 p-6 shadow-2xl/10 backdrop-blur-2xl">
              <div className="mx-auto flex w-full items-stretch gap-8 rounded-2xl">
                <div className="w-fit border-r border-r-white pr-8">
                  <p className="md:h6 text-xl font-semibold text-white">FAQ</p>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  <Link
                    href="/faq/dr-online"
                    className="group flex items-start"
                  >
                    <Image
                      src="/images/ic-faq-dronline.svg"
                      alt="ícone - dr.online"
                      width={32}
                      height={32}
                    />
                    <div className="ml-2 max-w-[180px]">
                      <p className="text-md group-hover:text-brand-light-green font-semibold text-white duration-300">
                        dr.online
                      </p>
                      <p className="text-sm text-white">
                        Perguntas e respostas sobre a empresa.
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/faq/pacientes"
                    className="group flex items-start"
                  >
                    <Image
                      src="/images/ic-faq-pacientes.svg"
                      alt="ícone - Pacientes"
                      width={32}
                      height={32}
                    />
                    <div className="ml-2 max-w-[180px]">
                      <p className="text-md group-hover:text-brand-light-green font-semibold text-white duration-300">
                        Pacientes
                      </p>
                      <p className="text-sm text-white">
                        Dúvidas frequentes de pacientes.
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/faq/profissionais-da-saude"
                    className="group flex items-start"
                  >
                    <Image
                      src="/images/ic-faq-profissionais.svg"
                      alt="ícone - Profissionais da saúde"
                      width={32}
                      height={32}
                    />
                    <div className="ml-2 max-w-[180px]">
                      <p className="text-md group-hover:text-brand-light-green font-semibold text-white duration-300">
                        Profissionais da saúde
                      </p>
                      <p className="text-sm text-white">
                        Informações relevantes sobre o uso da plataforma.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </li>
        <li>
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-md hover:text-brand-light-green group flex cursor-pointer items-center gap-2 font-semibold text-white duration-200">
                Trabalhe conosco
                <ChevronDown className="group-hover:text-brand-light-green size-4 duration-200" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="mt-8 w-full border-0 bg-white/10 p-6 shadow-2xl/10 backdrop-blur-2xl">
              <div className="mx-auto flex w-full items-stretch gap-8 rounded-2xl">
                <div className="w-fit border-r border-r-white pr-8">
                  <p className="md:h6 text-xl font-semibold text-white">
                    Trabalhe
                    <br /> conosco
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  <Link
                    href="/faq/dr-online"
                    className="group flex items-start"
                  >
                    <Image
                      src="/images/ic-medicos.svg"
                      alt="ícone - trabalhe conosco médicos"
                      width={32}
                      height={32}
                    />
                    <div className="ml-2 max-w-[180px]">
                      <p className="text-md group-hover:text-brand-light-green font-semibold text-white duration-300">
                        Médicos
                      </p>
                      <p className="text-sm text-white">
                        Lorem ipsum dolor sit.
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/faq/pacientes"
                    className="group flex items-start"
                  >
                    <Image
                      src="/images/ic-demais-profissionais.svg"
                      alt="ícone - demais profissionais"
                      width={32}
                      height={32}
                    />
                    <div className="ml-2 max-w-[180px]">
                      <p className="text-md group-hover:text-brand-light-green font-semibold text-white duration-300">
                        Demais profissionais
                      </p>
                      <p className="text-sm text-white">
                        Lorem ipsum dolor sit.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </li>
      </ul>
    </nav>
  );
};
