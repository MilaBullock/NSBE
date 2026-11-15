# Penn State NSBE Website

## View the frontend locally

You need [Node.js](https://nodejs.org/) and npm installed.

1. From the repository root, install the frontend dependencies:

   ```bash
   cd Frontend/scholarship-scraper
   npm install
   ```

   You only need to install dependencies the first time, or after they change.

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open **http://localhost:3000** in your browser to see the website.

Keep the terminal running while you use the site. Press `Ctrl+C` in that
terminal to stop the server.

### Other pages

With the development server running, open any of these routes:

- `/about`
- `/membership`
- `/events`
- `/scholarships`
- `/gallery`
- `/donate`
- `/contact`

For example, the events page is at http://localhost:3000/events.

### If port 3000 is already in use

Stop the other server, or start this one on port 3001:

```bash
PORT=3001 npm run dev
```

Then open http://localhost:3001.
