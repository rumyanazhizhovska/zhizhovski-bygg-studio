import {defineField} from 'sanity'

export const aboutUsOurHistoryType = {
  name: 'aboutUsOurHistoryType',
  title: 'Vår historie (Om oss-siden)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description1',
      title: 'Beskrivelse (1. avsnitt)',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description2',
      title: 'Beskrivelse (2. avsnitt)',
      type: 'text',
      validation: (Rule) => Rule.required(),
    })
  ]
}