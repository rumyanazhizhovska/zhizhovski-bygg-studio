import {defineArrayMember, defineField, defineType} from 'sanity'
import {SERVICE_CATEGORY_OPTIONS, SERVICE_ITEM_OPTIONS} from './serviceOptions'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ongoingCategoryId',
      title: 'Ongoing category',
      description:
        'Velg et område dersom dette er et pågående prosjekt som skal fremheves. Feltet er valgfritt.',
      type: 'string',
      options: {
        list: SERVICE_CATEGORY_OPTIONS,
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'serviceIds',
      title: 'Services',
      description: 'Tjenestepunkter fra ett eller flere hovedområder.',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {
        list: SERVICE_ITEM_OPTIONS,
      },
      validation: (Rule) => Rule.unique(),
      initialValue: [],
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      name: 'period',
      type: 'date',
    }),
    defineField({
      name: 'media',
      title: 'Media collections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'projectMediaCollection'}],
        }),
      ],
    }),
  ],
})
