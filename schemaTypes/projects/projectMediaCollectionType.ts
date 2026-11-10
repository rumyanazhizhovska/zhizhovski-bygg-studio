import {defineArrayMember, defineField, defineType} from 'sanity'
import {createElement} from 'react'

export const projectMediaCollectionType = defineType({
  name: 'projectMediaCollection',
  title: 'Prosjekt-Mediesamling (Prosjekter-siden)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Navn',
      description: 'Velg addressen til prosjeket som mediesamlingen tilhører.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type mediesamling',
      description: createElement(
        'span',
        {style: {whiteSpace: 'pre-line'}},
        'Velg typen av mediesamling du ønsker å opprette.\n',
        createElement('strong', null, 'Single'),
        ': Du kan legge til før filder og markere som pågående prosjekt.\n',
        createElement('strong', null, 'Before / After'),
        ': Du kan legge til før og etter bilder for et ferdig prosjekt.',
      ),
      type: 'string',
      options: {
        list: [
          {title: 'Single', value: 'single'},
          {title: 'Before / After', value: 'before-after'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) =>
        Rule.required().custom((value) =>
          !value || ['single', 'before-after'].includes(value)
            ? true
            : 'Du må velge en gyldig type mediesamling.',
        ),
    }),
    defineField({
      name: 'media',
      title: 'Media',
      description: 'Legg til bilder for mediesamlingen. For "Single" type kan du legge til kun before bilder.',
      type: 'array',
      of: [defineArrayMember({type: 'image'})],
      hidden: ({document}) => document?.type !== 'single',
    }),
    defineField({
      name: 'before',
      title: 'Før',
      description: 'Legg til før bilder for mediesamlingen. For "Before / After" type kan du legge til både før og etter bilder.',
      type: 'array',
      of: [defineArrayMember({type: 'image'})],
      hidden: ({document}) => document?.type !== 'before-after',
    }),
    defineField({
      name: 'after',
      title: 'Etter',
      description: 'Legg til etter bilder for mediesamlingen. For "Before / After" type kan du legge til både før og etter bilder.',
      type: 'array',
      of: [defineArrayMember({type: 'image'})],
      hidden: ({document}) => document?.type !== 'before-after',
    }),
  ],
})
