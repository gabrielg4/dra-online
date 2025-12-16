import type { Metadata } from "next";
import localFont from "next/font/local";
import GoogleAnalytics from "@/components/GoogleAnalytics";

import "./globals.css";
import { Footer } from "@/components/footer";
import { SmoothScrolling } from "@/components/smooth-scrolling";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { Toaster } from "sonner";

const mainFont = localFont({
  src: [
    {
      path: "./../../../public/fonts/Gilroy-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/Gilroy-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-main",
});

export const metadata: Metadata = {
  verification: {
    google: "FHsuDxI67m37N6s5dH5nJ-_B0Djz1a6ZsVSaaSkmm80",
  },
  title: "Plataforma de Saúde Digital Inovadora | dr.online",
  description:
    "Leve saúde digital para sua empresa de forma rápida com a dr.online. Atendimento digital com especialistas, 24h por dia, em uma plataforma segura.",
};

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP, ScrollSmoother);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="overflow-x-hidden overflow-y-auto">
      <body className={`${mainFont.variable} bg-brand-dark-green antialiased`}>
        <SmoothScrolling>
          <main className="bg-brand-dark-green">{children}</main>
        </SmoothScrolling>
        <Footer />

        <GoogleAnalytics />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
