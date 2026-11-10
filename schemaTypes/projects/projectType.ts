import {defineArrayMember, defineField, defineType} from 'sanity'
import {SERVICE_CATEGORY_OPTIONS, SERVICE_ITEM_OPTIONS} from './serviceOptions'

export const projectType = defineType({
  name: 'project',
  title: 'Prosjekt (Prosjekter-siden)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      description: 'Tittelen på prosjektet. Bruk addressen til prosjektet som tittel for å gjøre det lettere å finne igjen.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Sammendrag',
      description: 'Et kort sammendrag av prosjektet. Dette vil bli vist på prosjektsiden.',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ongoingCategoryId',
      title: 'Pågående kategori',
      description:
        'Velg et område dersom dette er et pågående prosjekt som skal fremheves. Feltet er valgfritt.' +
        'Bruk kun hvis prosjektet er pågående og skal fremheves på forsiden. Hvis prosjektet er ferdig, la feltet stå tomt.',
      type: 'string',
      options: {
        list: SERVICE_CATEGORY_OPTIONS,
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'serviceIds',
      title: 'Tjenestepunkter',
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
      title: 'Lokasjon',
      description: 'Addressen/Lokasjonen du velger til prosjektet. Dette vil bli vist på prosjektsiden.',
      type: 'string',
    }),
    defineField({
      name: 'period',
      title: 'Periode',
      description: 'Velg perioden for prosjektet. Dette vil bli vist på prosjektsiden.',
      type: 'date',
    }),
    defineField({
      name: 'media',
      title: 'Mediesamling',
      description: 'Velg mediesamlingen (legge ved bilder) for prosjektet. Dette vil bli vist på prosjektsiden.',
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
