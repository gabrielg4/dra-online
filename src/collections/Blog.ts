import { slug } from "@/fields/slug";
import type { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
  slug: "blog",
  labels: {
    singular: "Blogpost",
    plural: "Blogposts",
  },
  admin: {
    group: "Blog",
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
      type: "richText",
      label: "Conteúdo",
      name: "conteudo",
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "categoria",
          label: "Categoria",
          required: true,
          type: "relationship",
          relationTo: "categorias",
          admin: {
            width: "50%",
          },
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
      ],
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
