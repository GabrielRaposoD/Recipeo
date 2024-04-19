import type { CollectionConfig } from 'payload/types'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  fields: [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      minLength: 3,
      saveToJWT: true,
      unique: true,
      required: true,
    },
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      minLength: 3,
      saveToJWT: true,
      required: true,
    },
  ],
}
