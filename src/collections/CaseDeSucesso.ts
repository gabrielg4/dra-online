import { slug } from "@/fields/slug";
import type { CollectionConfig } from "payload";

export const CaseDeSucesso: CollectionConfig = {
  slug: "case-de-sucesso",
  labels: {
    singular: "Case de Sucesso",
    plural: "Cases de Sucesso",
  },
  admin: {
    group: "Cases de Sucesso",
    useAsTitle: "titulo",
  },
  fields: [
    {
      name: "imagem_de_destaque",
      label: "Imagem de Destaque",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "nome_da_empresa",
      label: "Nome da Empresa",
      type: "text",
      required: true,
    },
    {
      name: "titulo",
      label: "Título",
      type: "text",
      required: true,
    },
    slug({ trackingField: "titulo" }),
    {
      name: "descricao",
      label: "Descrição",
      type: "textarea",
      required: true,
    },
    {
      type: "array",
      name: "melhorias",
      maxRows: 2,
      fields: [
        {
          type: "number",
          name: "porcentagem_melhoria",
          min: 0,
          label: "Porcentagem Melhoria",
        },
        {
          type: "text",
          name: "descricao_melhoria",
          label: "Descrição Melhoria",
        },
      ],
    },
    {
      type: "richText",
      label: "Conteúdo",
      name: "conteudo",
      required: true,
    },
    {
      name: "autor",
      label: "Autor",
      required: true,
      type: "relationship",
      relationTo: "users",
      admin: {
        width: "50%",
      },
    },
    {
      name: "e_destaque",
      label: "É destaque",
      type: "radio",
      defaultValue: "Não",
      options: ["Sim", "Não"],
    },
  ],
};
