This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Configuration

This application can be configured through environment variables. It is highly recommended that you specify your environment variables within centrally within a .env file at the root directory of the project so that docker can infer the values when deploying the container on the host.

The following are the configurable environment variables:

```txt
UI_PORT=3535 # Port on which to deploy the application.
HUB_PAGE_TITLE='Drink more water!' # Main title of the static page.
```

## Usage/Deployment instructions

### Deploy on docker

In order to deploy with docker you must have `docker` and `docker compose` installed on your host machine.

```bash
> docker -v
Docker version 20.10.17
```

```bash
> docker compose version
Docker Compose version v2.10.2
```

For user reference `docker` and `docker compose` can be installed by following the official instructions outlined at the following links:

- [docker engine installation documentation](https://docs.docker.com/engine/install/)
- [docker compose installation documentation](https://docs.docker.com/compose/install/)

Using either option below will build the application's image based on the official `node` image from dockerhub and deploy the application to the host machine's IP with respect to configuration environment variables set within `./.env`.

**Option I: docker compose**

```bash
docker compose up -v
```

**Option II: Makefile**

```bash
make deploy
```

## Deploy on Vercel

Alternatively, to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
