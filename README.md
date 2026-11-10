# Zhizhovski bygg Studio

Sanity Studio for managing projects, project media, the homepage image, and About
us content. Editor labels are in Norwegian.

## Project

- Hosted Studio: https://zhizhovskibygg-cms.sanity.studio/
- Local Studio: http://localhost:3333/
- Sanity project ID: `vsyok4su`
- Dataset: `production`
- Deployment app ID: `mzvgpqd6bt7bwpw1gttfpi9h`

Project and dataset settings are in `sanity.config.ts` and `sanity.cli.ts`.
Studio auto-updates are enabled in `sanity.cli.ts`.

## Local development

Use Node.js 22.12 or later and npm. Keep the Studio and website repositories
checked out next to each other:

```text
projects/
  zhizhovski-bygg-studio/
  zhizhovski-bygg-web/
```

The website checkout must include `src/data/services.ts` and
`src/types/portfolio.ts`; the Studio imports these files directly.

From the Studio directory:

```sh
npm ci
npm run dev
```

Open http://localhost:3333/ and sign in with a Sanity account that has access to
the project. Local editing uses the `production` dataset, so published changes
affect production content.

## Content schemas

Schemas live in `schemaTypes/` and are registered in `schemaTypes/index.ts`.

- `projects/`: project details, media collections, and shared service choices.
- `home/`: the homepage image document.
- `about-us/`: page introduction, history, extra section, and principles.

Singletons are declared in `document.singletons` in `sanity.config.ts`. Every
singleton must reference a schema with `type: 'document'`. The homepage image
singleton is a document containing an `image` field; declaring the schema itself
as `type: 'image'` prevents the workspace from loading.

### Shared service definitions

The category and service choices in `schemaTypes/projects/serviceOptions.ts` are
imported from `../zhizhovski-bygg-web/src/data/services.ts`. Update
`SERVICE_CATEGORIES` in the website repository to change these choices, then
rebuild or redeploy the Studio.

The TypeScript path mapping for `@/types/portfolio` in `tsconfig.json` resolves the
website's type import. Keep both repositories available in CI and deployment
environments as well as during local development.

## Validate and build

Run these checks before deploying schema changes:

```sh
npx tsc --noEmit
npx sanity schemas validate
npm run build
```

Schema validation checks the configured workspace; a successful build alone does
not guarantee that the workspace can resolve its singleton definitions.

The build output is written to `dist/`. Use `npm start` to serve that build
locally. Generated `dist/`, `.sanity/`, and TypeScript build metadata are ignored
by Git.

Known schema warning: the `type` field in `projectMediaCollection` uses a React
element as its description. Sanity currently warns that non-string descriptions
will not be supported in future versions.

## Deploy

Authenticate with an account that has deployment access, then deploy to the
existing configured Studio:

```sh
npx sanity login
npm run deploy -- --yes
```

The deploy command builds and uploads the Studio to
https://zhizhovskibygg-cms.sanity.studio/. It requires network access, including
access to Sanity's CDN when resolving auto-updated Studio versions.

`npm run deploy-graphql` is a separate command for deploying the dataset's
GraphQL API; it is not needed for a Studio deployment.

## Troubleshooting

- **Could not resolve workspace / singleton is not a document type:** check that
  each entry in `document.singletons` names a registered document schema, then
  run `npx sanity schemas validate`.
- **Missing shared service module or portfolio type:** check the sibling website
  checkout and directory names shown above.
- **Port 3333 is already in use:** stop the existing development server before
  running `npm run dev` again.
- **Authentication or CORS errors:** use `http://localhost:3333` consistently.
  If you change the hostname or port, configure that exact origin with credentials
  in the Sanity project's API settings.
- **Failed to fetch remote version:** check network access to `sanity-cdn.com`.
