import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "Usuário",
    plural: "Usuários",
  },
  admin: {
    group: "Usuários",
    useAsTitle: "email",
    defaultColumns: ["nome", "email", "createdAt", "updatedAt"],
  },
  auth: true,
  fields: [
    {
      name: "foto",
      label: "Foto de Perfil",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "nome",
      label: "Nome",
      type: "text",
    },
  ],
};
