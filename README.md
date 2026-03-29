# Dr. Tanzeel Fatima — Portfolio

A premium portfolio website for Dr. Tanzeel Fatima, Pediatrician.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lottie Animations
- EmailJS

## Setup

```bash
# Install dependencies
npm install

# Copy env file and add your EmailJS keys
cp .env.example .env

# Start dev server
npm run dev
```

## Build for Production

```bash
npm run build
```

Deploy the `dist/` folder to Vercel, Netlify, or any static hosting.

## EmailJS Setup

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Create a service and email template
3. Add your keys to `.env`:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
