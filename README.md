This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


npx prisma studio

model Snippet {
  id    Int     @id @default(autoincrement())
  title String  @unique
  code  String?
}
npx prisma init --datasource-provider sqlite
https://vercel.com/templates/next.js/platforms-starter-kit
```
