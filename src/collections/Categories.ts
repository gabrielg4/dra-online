import { slug } from "@/fields/slug";
import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categorias",
  labels: {
    singular: "Categoria",
    plural: "Categorias",
  },
  access: {
    read: () => true,
  },
  admin: {
    group: "Blog",
    useAsTitle: "titulo",
  },
  fields: [
    {
      name: "titulo",
      label: "Título",
      type: "text",
      required: true,
    },
    slug({ trackingField: "titulo" }),
  ],
};
