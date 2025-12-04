"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import type { Vagas } from "../../payload-types";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { toast } from "sonner";

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

const MAX_SIZE_MB = 2;
const MAX_SIZE = MAX_SIZE_MB * 1024 * 1024;

// Função que cria o schema baseado na disponibilidade de vagas
const createFormSchema = (hasVacancies: boolean) =>
  z.object({
    name: z.string().trim().min(1, "Campo obrigatório"),
    email: z.string().email("E-mail inválido"),
    phone: z.string().trim().min(1, "Campo obrigatório"),
    vacancie: hasVacancies
      ? z.string().min(1, "Selecione uma vaga") // ← Obrigatório se tiver vagas
      : z.string().optional(), // ← Opcional se não tiver vagas
    curriculum: z
      .instanceof(File, { message: "Envie um arquivo" })
      .refine((f) => f.size > 0, "Arquivo obrigatório")
      .refine(
        (f) =>
          ACCEPTED_TYPES.includes(f.type as (typeof ACCEPTED_TYPES)[number]),
        "Apenas PDF, DOC ou DOCX",
      )
      .refine((f) => f.size <= MAX_SIZE, `Máx. ${MAX_SIZE_MB}MB`),
  });

export const WorkWithUsForm2 = ({ vacancies }: { vacancies: Vagas[] }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Verifica se há vagas disponíveis
  const hasVacancies =
    vacancies &&
    vacancies.length > 0 &&
    vacancies.some((v) => v.nome_vaga && v.nome_vaga.trim() !== "");

  // Cria o schema com validação condicional
  const formSchema = createFormSchema(hasVacancies);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      vacancie: "",
      curriculum: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // Converter o arquivo para base64
      const file = values.curriculum;
      const base64File = await fileToBase64(file);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "job",
          name: values.name,
          email: values.email,
          phone: values.phone,
          vacancie:
            values.vacancie || "Banco de talentos (sem vaga específica)",
          attachment: {
            filename: file.name,
            content: base64File,
            contentType: file.type,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar candidatura");
      }

      toast.success(
        "Candidatura enviada com sucesso! Em breve entraremos em contato.",
      );
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Erro ao enviar candidatura. Tente novamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  // Função para converter arquivo para base64
  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result as string;
        const base64 = base64String.split(",")[1];
        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 rounded-lg bg-transparent p-6 max-[600px]:bg-white/10 max-sm:p-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="input-work-with-us w-full">
              <FormControl>
                <Input
                  placeholder="Nome"
                  {...field}
                  disabled={isSubmitting}
                  className="border-b-brand-light-green h-auto rounded-none border-0 border-b px-1 !py-2 !text-[16px] font-normal text-white placeholder:text-white disabled:opacity-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="input-work-with-us w-full">
              <FormControl>
                <Input
                  placeholder="E-mail"
                  type="email"
                  {...field}
                  disabled={isSubmitting}
                  className="border-b-brand-light-green h-auto rounded-none border-0 border-b px-1 !py-2 !text-[16px] font-normal text-white placeholder:text-white disabled:opacity-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="input-work-with-us w-full">
              <FormControl>
                <Input
                  placeholder="Telefone/WhatsApp"
                  {...field}
                  disabled={isSubmitting}
                  className="border-b-brand-light-green h-auto rounded-none border-0 border-b px-1 !py-2 !text-[16px] font-normal text-white placeholder:text-white disabled:opacity-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Só mostra o campo de vaga se tiver vagas */}
        {hasVacancies && (
          <FormField
            control={form.control}
            name="vacancie"
            render={({ field }) => (
              <FormItem className="input-work-with-us w-full">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="border-b-brand-light-green h-auto !w-full rounded-none border-0 border-b px-1 !py-2 !text-[16px] font-normal text-white shadow-none placeholder:text-white disabled:opacity-50 data-[placeholder]:text-white [&_svg]:!text-white">
                      <SelectValue
                        placeholder="Vaga pretendida"
                        className="!w-full text-white"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {vacancies
                        .filter(
                          (vacancie) =>
                            vacancie.nome_vaga &&
                            vacancie.nome_vaga.trim() !== "",
                        )
                        .map((vacancie) => (
                          <SelectItem
                            key={vacancie.id}
                            value={vacancie.nome_vaga}
                          >
                            {vacancie.nome_vaga}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="curriculum"
          render={({ field }) => (
            <FormItem className="input-work-with-us w-full">
              <FormControl>
                <Label
                  htmlFor="curriculum"
                  className={`border-b-brand-light-green flex h-auto w-full cursor-pointer items-center justify-between gap-4 rounded-none border-0 border-b px-1 !py-3 !text-[16px] leading-normal shadow-none ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}
                >
                  <>
                    <p className="text-[16px] leading-normal font-light text-white">
                      Currículo (.pdf, .doc ou .docx - Tam. máximo: 2MB) *
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      fill="none"
                      viewBox="0 0 24 25"
                    >
                      <path
                        stroke="#A6D05D"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 17.5h.01m-1.41-3H18c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765 0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.898 3 18.432 3 17.5c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 14.5 5.068 14.5 6 14.5h2.4m3.6 1v-11m0 0 3 3m-3-3-3 3"
                      />
                    </svg>
                    <Input
                      id="curriculum"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword"
                      disabled={isSubmitting}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        field.onChange(file ?? null);
                      }}
                      className="hidden"
                    />
                  </>
                </Label>
              </FormControl>
              {field.value && (
                <div className="mt-2 text-sm text-white/90">
                  <strong>Arquivo selecionado:</strong> {field.value.name}
                </div>
              )}

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-brand-light-green hover:bg-brand-light-green2 group text-brand-dark-green mt-2 h-auto w-full cursor-pointer rounded-full !px-6 !py-3 !text-[16px] font-medium disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar informações
              <ArrowUpRight className="size-6 duration-300 group-hover:rotate-45" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};
