import type { CollectionConfig } from "payload";

export const NaMidia: CollectionConfig = {
  slug: "na-midia",
  labels: {
    singular: "Na Mídia",
    plural: "Na Mídia",
  },
  admin: {
    group: "Dr. Online na Mídia",
    useAsTitle: "titulo",
  },
  fields: [
    {
      name: "logo",
      label: "Logo do Veículo Midiático",
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
    {
      name: "link_artigo",
      label: "Link para o Artigo",
      type: "text",
      required: true,
    },
  ],
};
