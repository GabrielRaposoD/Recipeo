import type { CollectionConfig } from 'payload/types'

export const Admins: CollectionConfig = {
  slug: 'admins',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [],
}
