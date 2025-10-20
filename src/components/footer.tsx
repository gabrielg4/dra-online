import Image from "next/image";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark-green pt-10 pb-6 lg:pt-14">
      <div className="relative z-20 container">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="w-full max-w-[237px]">
            <Image
              src="/images/logo-footer.svg"
              alt="Logo Dr. Online"
              width={237}
              height={45}
            />
            <div className="mt-10 flex items-center gap-4">
              <Link
                href="/"
                className="bg-brand-light-green hover:bg-brand-light-green2 text-brand-dark-green flex h-10 w-10 items-center justify-center rounded-full duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="currentColor"
                  viewBox="0 0 24 25"
                >
                  <path d="M12 7.647a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 7.5a3 3 0 1 1 3-3 3.01 3.01 0 0 1-3 3Zm4.125-12.375h-8.25a5.25 5.25 0 0 0-5.25 5.25v8.25a5.25 5.25 0 0 0 5.25 5.25h8.25a5.25 5.25 0 0 0 5.25-5.25v-8.25a5.25 5.25 0 0 0-5.25-5.25Zm3.75 13.5a3.749 3.749 0 0 1-3.75 3.75h-8.25a3.75 3.75 0 0 1-3.75-3.75v-8.25a3.75 3.75 0 0 1 3.75-3.75h8.25a3.75 3.75 0 0 1 3.75 3.75v8.25Zm-1.875-9a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z" />
                </svg>
              </Link>
              <Link
                href="/"
                className="bg-brand-light-green hover:bg-brand-light-green2 text-brand-dark-green flex h-10 w-10 items-center justify-center rounded-full duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                  viewBox="0 0 24 25"
                >
                  <path
                    fill="#075F55"
                    d="M15.12 5.467H17v-3.18a26.11 26.11 0 0 0-2.74-.14c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07v9.12h3.68v-9.12h3.06l.46-3.56h-3.52v-2.27c0-1.05.28-1.73 1.76-1.73Z"
                  />
                </svg>
              </Link>
              <Link
                href="/"
                className="bg-brand-light-green hover:bg-brand-light-green2 text-brand-dark-green flex h-10 w-10 items-center justify-center rounded-full duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                  viewBox="0 0 24 25"
                >
                  <path
                    fill="#075F55"
                    d="m10 15.148 5.19-3-5.19-3v6Zm11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09l.06.84c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1l-1.59.06c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09l-.06-.84c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1l1.59-.06c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z"
                  />
                </svg>
              </Link>
              <Link
                href="/"
                className="bg-brand-light-green hover:bg-brand-light-green2 text-brand-dark-green flex h-10 w-10 items-center justify-center rounded-full duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                  viewBox="0 0 24 25"
                >
                  <path
                    fill="#075F55"
                    d="M19.05 5.06a9.816 9.816 0 0 0-7.01-2.91c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95l-1.4 5.14 5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01ZM12.04 20.3c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.22-.16-.47-.28Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex w-full max-w-[769px] flex-row flex-wrap items-start justify-between gap-6 md:gap-12">
            <div className="w-[calc(50%-16px)] md:w-auto">
              <p className="mb-2 text-lg font-semibold text-white">
                Institucional
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/"
                    className="text-md font-normal text-white hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre-nos"
                    className="text-md font-normal text-white hover:underline"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-md font-normal text-white hover:underline"
                  >
                    Soluções
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-md font-normal text-white hover:underline"
                  >
                    Saúde digital
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trabalhe-conosco"
                    className="text-md font-normal text-white hover:underline"
                  >
                    Trabalhe conosco
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[calc(50%-16px)] md:w-auto">
              <p className="mb-2 text-lg font-semibold text-white">Soluções</p>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/solucao/saude-mental"
                    className="text-md font-normal text-white hover:underline"
                  >
                    Saúde Mental
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solucao/entrevista-qualificada"
                    className="text-md font-normal text-white hover:underline"
                  >
                    Entrevista Qualificada
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solucao/gestao-intregrado-ao-cuidado"
                    className="text-md font-normal text-white hover:underline"
                  >
                    Gestão Integrada do Cuidado
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solucao/pronto-atendimento"
                    className="text-md font-normal text-white hover:underline"
                  >
                    Pronto Atendimento 24h
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solucao/"
                    className="text-md font-normal text-white hover:underline"
                  >
                    Consulta Online
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solucao/consultorio"
                    className="text-md font-normal text-white hover:underline"
                  >
                    Consultório Digital
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[calc(50%-16px)] md:w-auto">
              <p className="mb-2 text-lg font-semibold text-white">FAQ</p>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/"
                    className="text-md font-normal text-white hover:underline"
                  >
                    dr.online
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-md font-normal text-white hover:underline"
                  >
                    Pacientes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-md font-normal text-white hover:underline"
                  >
                    Profissionais da saúde
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[calc(50%-16px)] md:w-auto">
              <p className="mb-2 text-lg font-semibold text-white">Conteúdos</p>
              <Link
                href="/blog"
                className="text-md mb-4 font-normal text-white hover:underline"
              >
                Blog
              </Link>
              <p className="mb-2 text-lg font-semibold text-white">Contato</p>
              <ul className="mb-4 flex flex-col gap-2">
                <li>
                  <Link
                    href="tel:+5561999399769"
                    className="text-md font-normal text-white hover:underline"
                  >
                    (61) 99939-9769
                  </Link>
                </li>
                <li>
                  <span className="text-md font-normal text-white hover:underline">
                    0800 000 3501
                  </span>
                </li>
              </ul>

              <Link
                href="tel:+5561999399769"
                className="mb-2 text-lg font-semibold text-white hover:underline"
              >
                Grupo FAPES
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t-brand-light-green mt-12 flex flex-col items-center justify-between gap-5 border-t pt-6 md:flex-row">
          <p className="text-md text-white">
            © 2025 dr. online | todos os direitos reservados
          </p>

          <p className="text-md text-white">
            Desenvolvido por{" "}
            <Link
              href="https://colinatech.com.br/"
              target="_blank"
              className="hover:text-brand-light-green font-semibold duration-300"
            >
              Colina Tech
            </Link>
          </p>

          <Link
            href="/politicas-de-privacidade"
            className="text-brand-light-green hover:text-brand-light-green2 font-semibold duration-300"
          >
            Política de privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
};
