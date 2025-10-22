import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    group: "Usuários",
    useAsTitle: "email",
  },
  labels: {
    singular: "Usuário",
    plural: "Usuários",
  },
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
  },
  auth: true,
  fields: [],
};
