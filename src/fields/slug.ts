import lodash from 'lodash'
import { Field } from 'payload'

const { merge } = lodash

type Slug = (options?: { trackingField?: string }, overrides?: Partial<Field>) => Field

export const slug: Slug = ({ trackingField = 'titulo' } = {}, overrides) =>
  merge<Field, Partial<Field> | undefined>(
    {
      name: 'slug',
      unique: true,
      type: 'text',
      admin: {
        components: {
          Field: {
            path: '/components/payload/slug-input.tsx#SlugInput',
            // exportName: 'SlugInput',
            clientProps: {
              trackingField,
            },
          },
        },
      },
    },
    overrides,
  )