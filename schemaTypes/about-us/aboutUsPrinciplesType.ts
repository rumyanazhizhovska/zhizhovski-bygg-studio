import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutUsPrinciplesType = defineType({
  name: 'aboutUsPrinciplesType',
  title: 'Prinsipper (Om oss-siden)',
  type: 'document',
  fields: [
    defineField({
      name: 'principles',
      title: 'Velg 3 prinsipper som skal vises på Om oss-siden',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'principle',
          title: 'Prinsipp',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Tittel',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Beskrivelse',
              type: 'text',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        }),
      ],
      validation: (Rule) =>
        Rule.required().length(3).error('Du må legge til nøyaktig 3 prinsipper.'),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Prinsipper'}
    },
  },
})
