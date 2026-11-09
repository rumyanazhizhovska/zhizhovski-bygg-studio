import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectMediaCollectionType = defineType({
  name: 'projectMediaCollection',
  title: 'Project Media Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Collection type',
      type: 'string',
      options: {
        list: [
          {title: 'Single', value: 'single'},
          {title: 'Before / After', value: 'before-after'},
        ],
        layout: "dropdown"
      },
      validation: (Rule) =>
        Rule.required().custom((value) =>
          !value || ['single', 'before-after'].includes(value)
            ? true
            : 'Select a valid collection type',
        ),
    }),
    defineField({
      name: 'id',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [defineArrayMember({type: 'image'})],
      hidden: ({document}) => document?.type !== 'single',
    }),
    defineField({
      name: 'before',
      title: 'Before',
      type: 'array',
      of: [defineArrayMember({type: 'image'})],
      hidden: ({document}) => document?.type !== 'before-after',
    }),
    defineField({
      name: 'after',
      title: 'After',
      type: 'array',
      of: [defineArrayMember({type: 'image'})],
      hidden: ({document}) => document?.type !== 'before-after',
    }),
  ],
})
