# Sanity Clean Content Studio

## Shared service definitions

The category and service choices in `schemaTypes/serviceOptions.ts` are imported
from `../zhizhovski-bygg-web/src/data/services.ts`. Update `SERVICE_CATEGORIES`
in the web project to change these choices, then rebuild or redeploy the Studio.
Keep both repositories checked out next to each other with these directory names
for local development and builds (including CI).

The TypeScript path mapping for `@/types/portfolio` resolves the web project's
type import when checking the Studio.

Congratulations, you have now installed the Sanity Content Studio, an open-source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the Sanity community](https://www.sanity.io/community/join?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
