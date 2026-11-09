import {SERVICE_CATEGORIES} from '../../zhizhovski-bygg-web/src/data/services'

export const SERVICE_CATEGORY_OPTIONS = SERVICE_CATEGORIES.map((category) => ({
  title: category.title,
  value: category.id,
}))

export const SERVICE_ITEM_OPTIONS = SERVICE_CATEGORIES.flatMap((category) =>
  category.services.map((service) => ({
    title: `${category.title}: ${service.title}`,
    value: service.id,
  })),
)
