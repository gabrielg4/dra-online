import type { CollectionConfig } from "payload";

export const Vagas: CollectionConfig = {
  slug: "vagas",
  labels: {
    singular: "Vaga",
    plural: "Vagas",
  },
  access: {
    read: () => true,
  },
  admin: {
    group: "Vagas",
    useAsTitle: "nome_vaga",
  },
  fields: [
    {
      name: "nome_vaga",
      label: "Nome",
      type: "text",
      required: true,
    },
    {
      name: "descricao",
      label: "Breve descrição",
      type: "textarea",
      required: true,
    },
    {
      name: "link_inscricao",
      label: "Link inscrição",
      type: "text",
      required: true,
    },
  ],
};
