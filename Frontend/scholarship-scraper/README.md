This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started (Run locally)

Follow these steps to run the frontend and view the site in your browser.

1. Install dependencies

```bash
cd Frontend/scholarship-scraper
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open the site

Open your browser and visit `http://localhost:3000`.

To visit a specific route (for example the About page) go to `http://localhost:3000/about`.

Troubleshooting:

- If port 3000 is already in use, run on another port:

```bash
PORT=3001 npm run dev
```

- If the dev server fails to bind when started from an editor-integrated/sandboxed terminal, run the `npm run dev` command from a regular system terminal (Terminal.app or iTerm) or allow the process to bind to the local network.

- Stop the dev server with `Ctrl+C` in the terminal.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





- User will need serviceAccountKey.json 