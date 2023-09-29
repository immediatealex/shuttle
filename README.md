# Shuttle

An email testing app that offers a UI and an API for processing inbound emails to any username.

## Stack

- Sendgrid Inbound Parse Webhook
- Netlify Functions
- Netlify hosting and DNS
- Planetscale
- Remix
- React

## What can it do?

Shuttle is a simple email testing app. Any emails sent to `<whatever>@shuttle.email` will automatically create that user and store the email in the database. You can then view the emails sent to that user by visiting `https://shuttle-app.netlify.com/<whatever>`. Alternatively, you can view the last email sent to that user by visiting `https://shuttle-app.netlify.com/api/<whatever>/last`.

## API

### Base URL

`https://shuttle-app.netlify.com`

### Get all emails of a given user

- Method: `GET`
- Endpoint: `/api/<userId>`

Returns all emails sent to the user.

### Get last email of a given user

- Method: `GET`
- Endpoint: `/api/<userId>/last`

Returns the last email sent to the user.

## Development

### Database

The deployed code uses a mysql database hosted on Planetscale. The connection string is read from a local `.env` file. To set up a local mysql database for development, follow these steps:

1. Install and enter MySQL
```sh
brew install mysql
brew services start mysql
mysql -u root
```

2. Create a database
```sql
CREATE DATABASE shuttle_db;
```

3. In the root of the repo, create a `.env` and add the following:
```
DATABASE_URL="mysql://root@localhost:3306/shuttle_db"
```

4. Push the Prisma schema to your local database instance:
```sh
npx prisma db push
```

### UI

The UI is a Remix app. If you do not need the serverless function, i.e. the api, you can run the local Remix server by running:
```sh
yarn dev
```

### Netlify functions

To run the Netlify functions locally, i.e. to expose the serverless api, you can use the netlify cli. This can be installed with brew on Mac.
```sh
brew install netlify-cli
```

Then in the root of the repo run:
```sh
yarn install
netlify dev
```

## Deployment

CD is setup on `main`. Any changes to the `main` branch will be automatically deployed to production.

## Useful Resources

- [Prisma Planetscale Docs](https://www.prisma.io/docs/guides/database/planetscale)
