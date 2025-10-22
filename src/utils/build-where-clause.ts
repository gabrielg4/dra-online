export const buildWhereClause = ({
  categoria,
  search,
}: {
  categoria?: string;
  search?: string;
}) => {
  let whereClause = {};

  if (categoria && categoria.length > 0) {
    whereClause = {
      where: {
        "categoria.id": {
          equals: categoria,
        },
      },
    };
  } else if (search && search.length > 0) {
    whereClause = {
      where: {
        titulo: {
          like: search,
        },
      },
    };
  }

  return whereClause;
};
