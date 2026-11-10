import {defineField} from 'sanity'

export const aboutUsPageBeginingType = {
  name: 'aboutUsPageBeginingType',
  title: 'Sidebegynnelse (Om oss-siden)',
  type: 'document',
  fields: [
    defineField({
      name: 'title1',
      title: 'Tittel (1. linje)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title2',
      title: 'Tittel (2. linje)',
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
