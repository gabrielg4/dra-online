"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(1, "Campo obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().trim().min(1, "Campo obrigatório"),
  company: z.string().trim(),
  message: z.string(),
});

export const ContactForm2 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "business", // ← Define como contato empresarial
          ...values,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar mensagem");
      }

      // Sucesso
      toast.success(
        "Mensagem enviada com sucesso! Em breve entraremos em contato.",
      );
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Erro ao enviar mensagem. Tente novamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Nome"
                  {...field}
                  disabled={isSubmitting}
                  className="border-b-brand-white rounded-none border-0 border-b p-0 px-1 py-2 text-sm font-normal text-white placeholder:text-white disabled:opacity-50"
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
            <FormItem>
              <FormControl>
                <Input
                  placeholder="E-mail"
                  type="email"
                  {...field}
                  disabled={isSubmitting}
                  className="border-b-brand-white rounded-none border-0 border-b p-0 px-1 py-2 text-sm font-normal text-white placeholder:text-white disabled:opacity-50"
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
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Telefone/WhatsApp"
                  {...field}
                  disabled={isSubmitting}
                  className="border-b-brand-white rounded-none border-0 border-b p-0 px-1 py-2 text-sm font-normal text-white placeholder:text-white disabled:opacity-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Nome da sua empresa"
                  {...field}
                  disabled={isSubmitting}
                  className="border-b-brand-white rounded-none border-0 border-b p-0 px-1 py-2 text-sm font-normal text-white placeholder:text-white disabled:opacity-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Deixe sua mensagem"
                  {...field}
                  disabled={isSubmitting}
                  className="border-b-brand-white h-[100px] rounded-none border-0 border-b p-0 px-1 py-2 text-sm font-normal text-white placeholder:text-white disabled:opacity-50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-brand-light-green hover:bg-brand-light-green2 group text-brand-dark-green mt-2 h-auto w-full cursor-pointer rounded-full px-6 py-3 font-medium disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar informações
              <ArrowUpRight className="size-4 duration-300 group-hover:rotate-45" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};
