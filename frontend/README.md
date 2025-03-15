# Folder Structure

`frontend/` contains 
1.  `prev_src/`
-   Contains : The previous version of our Frontend code.
2.  `public/`
-   Contains : Static file e.g. logo image for UI etc.
3.  `src/`
-   Contains : Our actual frontend code e.g. button, layout, page etc.
4.  `test/`
-   Purpose : Check if `src/` works as expected.
5.  `tutorial/`
-   Contains : Our actual frontend code related tutorial documentation e.g. How to use React Hook, How to fetch data etc.

Read the following resource to learn more about our frontend folder structure.
1.  https://nextjs.org/docs/app/getting-started/project-structure
2.  https://github.com/Turingraph/Calcite/tree/main/frontend/tutorial/next/introduction_to_next.md

Note that the main reason we use Next JS is because
1.  Next JS let us to use Server to speed our app response time.
2.  Next JS help us allow user to upload zip file.
3.  Next JS can be used as the backend.

# Introduction to `Next JS`

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
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
