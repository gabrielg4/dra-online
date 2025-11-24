import type { CollectionConfig } from "payload";

export const NaMidia: CollectionConfig = {
  slug: "na-midia",
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  labels: {
    singular: "Na Mídia",
    plural: "Na Mídia",
  },
  admin: {
    group: "Dr. Online na Mídia",
    useAsTitle: "titulo",
  },
  hooks: {
    beforeChange: [
      async ({ data, req, operation, originalDoc }) => {
        // Se estiver marcando este card como destaque
        if (data.destaque === true) {
          try {
            // Busca todos os cards da coleção
            const todosOsCards = await req.payload.find({
              collection: 'na-midia',
              limit: 1000, // Ajuste conforme necessário
            });

            // Filtra apenas os que estão marcados como destaque e não são o atual
            const outrosDestaques = todosOsCards.docs.filter(
              (doc) => doc.destaque === true && doc.id !== data.id
            );

            // Desmarca todos os outros
            if (outrosDestaques.length > 0) {
              console.log(`Desmarcando ${outrosDestaques.length} card(s) em destaque...`);
              
              for (const doc of outrosDestaques) {
                await req.payload.update({
                  collection: 'na-midia',
                  id: doc.id,
                  data: {
                    destaque: false,
                  },
                });
                console.log(`Card ${doc.id} desmarcado`);
              }
            }
          } catch (error) {
            console.error('Erro ao desmarcar outros destaques:', error);
          }
        }

        return data;
      },
    ],
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
    {
      name: 'destaque',
      type: 'checkbox',
      label: 'Card em Destaque',
      defaultValue: false,
      admin: {
        description: 'Este card será exibido no centro do carrossel. Apenas um card pode estar em destaque por vez.',
        position: 'sidebar',
      },
    },
  ],
};
