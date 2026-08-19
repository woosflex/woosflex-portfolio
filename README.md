# woosflex-portfolio

Personal portfolio and project site for **Adnan Raza (woosflex)** — a
bioinformatics & AI/ML scholar and software engineer in Delhi, India.

A full-stack web app (React + Vite + Tailwind on the client, an Express API
server, Drizzle ORM) that showcases research, open-source work, and projects.

## Stack

- **Client:** React, Vite, Tailwind CSS (see `client/`)
- **Server:** Express + TypeScript (`server/`) with Drizzle ORM (`drizzle.config.ts`)
- **Database:** configured via `shared/` + Drizzle schema
- **Deploy:** Vercel (`vercel.json`)

## Development

```bash
npm install
npm run dev        # start the dev server (client + API)
npm run check      # TypeScript typecheck
npm run db:push    # push Drizzle schema to the database
```

## Production

```bash
npm run build      # build client + server
npm run start      # run the production server
```

## Repository structure

| Path | Purpose |
| ---- | ------- |
| `client/` | React + Tailwind frontend |
| `server/` | Express TypeScript API |
| `shared/` | Types/schema shared between client and server |
| `PRODUCT.md`, `DESIGN.md` | Product + design intent (used by the impeccable design skill) |
| `CHANGELOG.md` | Release history |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). All participants follow the
[Code of Conduct](CODE_OF_CONDUCT.md); security issues use the private channel
in [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE) © Adnan Raza
