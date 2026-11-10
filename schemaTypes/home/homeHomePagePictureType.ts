import {defineField, defineType} from 'sanity'

export const homeHomePagePictureType = defineType({
  name: "homeHomePagePictureType",
  title: "Bilde (Hjem-siden)",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Bilde",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Du må legge til et bilde.'),
    })
  ]
})
