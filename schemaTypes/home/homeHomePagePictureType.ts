import {defineField} from 'sanity'

export const homeHomePagePictureType = {
  name: "homeHomePagePictureType",
  title: "Bilde (Hjem-siden)",
  type: "image",
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
}