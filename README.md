# Ayoka Films & Photos

[![Vercel](https://theregister.s3.amazonaws.com/vercel-badge.svg)](https://vercel.com/new/git/external)

A professional media production studio website featuring photography, videography, podcast recording, wedding services, portfolio showcase, and online booking. Built with modern React, Tailwind CSS, and shadcn/ui for a cinematic, responsive experience.

## 🚀 Features

- **Responsive Design**: Mobile-first, optimized for all devices with Tailwind CSS.
- **Dark/Light Mode**: Automatic theme switching with CSS variables.
- **Smooth Animations**: Scroll reveals, fade-ins, and gradient transitions.
- **Modern UI Components**: shadcn/ui library with custom film-industry styling (elevated cards, gradient overlays).
- **Pages**: Home, About, Services, Portfolio, Weddings, Podcast, Blog, Offers, Book Studio, Contact.
- **Performance**: Vite bundling, optimized images, lazy loading ready.
- **Deployment Ready**: Vercel configuration included.

## 📱 Screenshots

### Hero Section (Desktop)

![Hero](https://via.placeholder.com/1200x600/000000/ffffff?text=Cinematic+Hero+Section)

### Portfolio Grid

![Portfolio](https://via.placeholder.com/1200x600/35883239/ffffff?text=Portfolio+Gallery)

### Services

![Services](https://via.placeholder.com/1200x600/333762/ffffff?text=Professional+Services)

_(Replace placeholders with actual screenshots)_

## 🛠 Tech Stack

| Category   | Technologies                                 |
| ---------- | -------------------------------------------- |
| Framework  | React 19, Vite                               |
| Styling    | Tailwind CSS, shadcn/ui, Headless UI         |
| Language   | TypeScript                                   |
| Utils      | Lucide React icons, Class Variance Authority |
| Testing    | Vitest, Playwright                           |
| Deployment | Vercel                                       |

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/yourusername/ayokaFilms-Photos.git
cd ayokaFilms-Photos

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

## 🌐 Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/ayokaFilms-Photos)

Or locally:

```bash
npm run build
vercel --prod
```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI: Navbar, Footer, Hero, Services, etc.
├── pages/         # Page components: Index, About, Portfolio, etc.
├── hooks/         # Custom React hooks
├── lib/           # Utilities
├── assets/        # Images: hero-bg.jpg, photography-service.jpg, etc.
├── App.tsx        # Root app with routing
└── main.tsx       # Entry point
```

## 🎨 Design System

- **Colors**: Cinematic palette (primary red hsl(358 32% 39%), accent hsl(33 37% 62%)).
- **Typography**: Source Serif 4 (headings), DM Sans (body).
- **Gradients**: Hero (black-to-red), CTA (red-to-accent).
- **Components**: Loader, Skeleton, Cards with shadows.

## 🔧 Development Scripts

| Script            | Description      |
| ----------------- | ---------------- |
| `npm run dev`     | Start dev server |
| `npm run build`   | Build production |
| `npm run lint`    | Lint code        |
| `npm run test`    | Run tests        |
| `npm run preview` | Preview build    |

## 🤝 Contributing

1. Fork the repo.
2. Create feature branch (`git checkout -b feature/loader-enhancements`).
3. Commit changes (`git commit -m 'Add pro loader component'`).
4. Push (`git push origin feature/loader-enhancements`).
5. Open Pull Request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

This project is [MIT](LICENSE) licensed.

---

Built with ❤️ for professional media creators. Questions? [Contact us](https://ayokafilms.com/contact).
