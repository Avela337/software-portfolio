# Avela Gxotiwe - Portfolio

Personal portfolio built with Vue 3, Vue Router and Vite. The contact form sends email through [EmailJS](https://www.emailjs.com).

## Setup

```
npm install
copy .env.example .env   (then fill in your EmailJS values)
npm run dev
```

Environment variables (see `.env.example`):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Deploying to Vercel

1. Import the GitHub repo in Vercel (framework preset: Vite, build command `npm run build`, output `dist`).
2. Add the three `VITE_EMAILJS_*` variables under Project Settings -> Environment Variables.
3. Deploy. `vercel.json` rewrites all routes to `index.html` so page refreshes work with Vue Router.
