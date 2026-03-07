# PCCoE Coding Club Website 🚀

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![Tech Stack](https://img.shields.io/badge/tech-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS%20%7C%20Vite-blueviolet.svg)

Welcome to the official repository for the **PCCoE Coding Club** website! This is a dynamic, highly interactive Single Page Application (SPA) built entirely with Vanilla JavaScript, HTML5, modern CSS3, and bundled with Vite.

## ✨ Features

- **Blazing Fast SPA Routing**: Custom hash-based router implemented in pure JavaScript for instant page transitions without reloading.
- **Premium UI/UX Design**:
  - Dark mode specific glassmorphism design system (`backdrop-filter`) for cards and navbar.
  - Vibrant cyan-violet gradient accents.
  - Subtle entrance animations (`IntersectionObserver` for scroll reveals).
- **Interactive Enhancements**:
  - **Canvas Particle System**: A custom-coded floating particle background that connects dots and repels away from the mouse cursor.
  - **Cursor Glow**: A subtle, smooth-following radial gradient that tracks the user's cursor.
  - **3D Tilt Cards**: Perspective-based mousemove tilt effect on achievement and event cards.
  - **Typing Effect**: A cycling terminal-style typing animation in the hero section.
  - **Animated Counters**: Numbers counting up smoothly as they enter the viewport.
- **Fully Responsive**: Mobile-first media queries (`480px`, `768px`, `1024px` breakpoints) ensuring a perfect experience on all devices.
- **Comprehensive Sections**: 
  - Home, About, Achievements, Events, Roadmap, Blogs, Team, and Join Us pages.

## 🛠️ Tech Stack

- **HTML5**: Semantic markup.
- **CSS3**: Vanilla CSS with comprehensive CSS Variables (`var(--)`) for easy theming. No external CSS frameworks (like Tailwind or Bootstrap) were used, providing complete control over the design system.
- **JavaScript (ES6+)**: Vanilla modular JS handling state, routing, DOM manipulation, and canvas animations.
- **Vite**: Next-generation frontend tooling for incredibly fast local development and optimized production builds.

## 📦 Project Structure

```text
website/
├── public/                 # Static assets that won't be bundled
│   ├── images/             # Club photos, logo, posters, and QR code
│   └── favicon.svg         # Custom code-bracket favicon
├── src/                    # Source files
│   ├── style.css           # Global design system & animations (~1000 lines)
│   └── main.js             # Logic: Router, data model, DOM events, interactive effects
├── index.html              # Main HTML shell (SPA container)
├── package.json            # NPM dependencies & scripts
└── vite.config.js          # (Optional) Vite configuration
```

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) installed (version 16+ recommended).

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/pccoe-coding-club-website.git
   cd pccoe-coding-club-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Vite will start a local server, usually at `http://localhost:5173/`.

### Building for Production

To generate a highly optimized, minified bundle ready for deployment:

```bash
npm run build
```

This will create a `dist/` directory containing the finalized production files. You can preview the production build locally with:

```bash
npm run preview
```

## 🌐 Deployment

The `dist/` folder generated from `npm run build` can be deployed to any static hosting provider, such as:
- GitHub Pages
- Vercel
- Netlify
- Firebase Hosting
- AWS S/3

*(Note: Since this uses a hash router `/#/path`, you don't need complex catch-all rewrite rules on your hosting provider, making it universally compatible with any basic static server.)*

## 🤝 Contributing

We welcome contributions from club members! Whether it's fixing a bug, adding an upcoming event, or writing a new blog post.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
*Built with ❤️ by the PCCoE Coding Club Team.*
