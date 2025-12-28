# Funky Portfolio 🚀

A modern, funky personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Dark mode by default with neon gradient accents
- ✨ Smooth animations powered by Framer Motion
- 📱 Mobile-first responsive design
- 🔮 Glassmorphism UI components
- ⚡ Lightning-fast with Vite
- 🎯 Fully typed with TypeScript
- 🌐 SEO-friendly meta tags
- ♿ Accessible HTML structure

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## Local Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information
Edit `src/data/portfolio.ts` to update:
- Tech stack categories and items
- Work experience entries
- Profile cards (GitHub, LeetCode)
- Social links

### Styling
- Colors: `tailwind.config.js` - modify the `neon` and `dark` color palettes
- Fonts: Update Google Fonts link in `index.html`
- Animations: Modify Framer Motion variants in components

### SEO
Update meta tags in `index.html`:
- Title
- Description
- Open Graph tags
- Twitter card tags

## Netlify Deployment

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize site**
   ```bash
   netlify init
   ```

4. **Deploy**
   ```bash
   # Deploy preview
   netlify deploy

   # Deploy to production
   netlify deploy --prod
   ```

### Option 3: Drag & Drop

1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder to deploy

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── TechStack.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Profiles.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── AnimatedBackground.tsx
│   │       ├── GlassCard.tsx
│   │       ├── Icons.tsx
│   │       └── SectionTitle.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── netlify.toml
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## License

MIT
