import type { CollectionConfig } from "payload";

export const Depoimento: CollectionConfig = {
  slug: "depoimentos",
  labels: {
    singular: "Depoimento",
    plural: "Depoimentos",
  },
  access: {
    read: () => true,
  },
  admin: {
    group: "Depoimentos",
    useAsTitle: "nome",
  },
  fields: [
    {
      name: "foto",
      label: "Foto",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "nome",
      label: "Nome",
      type: "text",
      required: true,
    },
    {
      name: "especialidade",
      label: "Especialidade",
      type: "text",
    },
    {
      name: "depoimento",
      label: "Depoimento",
      type: "textarea",
      required: true,
    },
  ],
};
