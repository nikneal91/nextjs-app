Editing by learning from [Next JS Documentaiton](https://nextjs.org/learn/dashboard-app/getting-started)

Youtube tutorial from Codevolution Next js course [Youtube](https://www.youtube.com/watch?v=x7oQC_R_yVo&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=4)

### Notes

In next js everything by default is server component , to create a client component use-client on top of file

### 01 Flow 

```bash

npm run dev > layout.tsx > page.tsx 

```

### 02 Routing

All route must be placed in the app folder 

Every file that corresponds to a route must be named page.tsx 
Every folder correspond to a path segment in the browser URL

### 03 Nested Routing

create blog and blog/first , blog/second

### 04 Dynamic Route segments

list of projects and details about each project 

```bash

add a folder [projectId] with brackets

use params to capture the unique details 

```

### 05 Nested Dynamic Route 

scenario project > project details > review > review details

project/1/review/1


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
