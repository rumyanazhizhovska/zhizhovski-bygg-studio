import {defineField} from 'sanity'

export const aboutUsSectionType = {
  name: 'aboutUsSectionType',
  title: 'Ekstra seksjon (Om oss-siden)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'array',
      of: [{type: 'image'}],
      validation: (Rule) => Rule.required().length(1).error('Du kan kun legge til ett bilde.'),
    }),
  ],
}