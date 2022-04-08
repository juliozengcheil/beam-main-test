## Setup

### Install dependencies

```bash
npm install
```

### Create a database

- [Create a PlanetScale database](https://docs.planetscale.com/tutorials/planetscale-quick-start-guide#create-a-database)
- Create a [connection string](https://docs.planetscale.com/concepts/connection-strings#creating-a-password) to connect to your database. Choose **Prisma** for the format
- Set up the environment variables:

```bash
cp .env.example .env
```

- Open `.env` and set the `DATABASE_URL` variable with the connection string from PlanetScale
- Create the database schema:

```bash
npx prisma db push
```

### Configure authentication

GitHub and Okta authentication settings are available as defaults, but thanks to NextAuth.js, you can configure your instance with most other common authentication providers.

- [Configuring GitHub authentication](doc/github_setup.md)
- [Configuring Okta authentication](doc/okta_setup.md)

This project uses [NextAuth.js](https://next-auth.js.org/), so if you prefer to use one of the [many providers](https://next-auth.js.org/providers/) it supports, you can customize your own installation. Simply update the [`lib/auth.ts`](/lib/auth.ts#L11) file to add your own provider.

### Enable image uploads (optional)

To enable image uploads, set the environment variable `NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD` to `true`.

This project uses Supabase for storing uploaded images. You can [sign up for a free account](https://app.supabase.io/).

- On your Supabase dashboard project, look for these values under your account-project-api settings: **Anon Public**, **URL**.
- Update `.env` with the following variables:
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: **Anon Public**
  - `NEXT_PUBLIC_SUPABASE_URL`: **URL**

### Configure Slack notifications (optional)

If you'd like to have new Report posts published to a Slack channel, follow [these instructions](doc/slack_setup.md).

## Running the app locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Authenticating with GitHub

## Deploying to Vercel

⚠️ Remember to update your callback URLs after deploying.
