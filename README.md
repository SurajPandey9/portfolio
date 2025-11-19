# 🚀 3D Interactive Portfolio Website

A stunning, professional 3D portfolio website built with Next.js, React Three Fiber, and modern web technologies. Features immersive 3D visuals, smooth animations, and a fully responsive design.

![Portfolio Preview](https://via.placeholder.com/1200x600/0D1117/00FFFF?text=3D+Portfolio+Website)

## ✨ Features

- 🎨 **3D Landing Page** - Interactive 3D environment with Three.js/React Three Fiber
- 🎯 **Portfolio Showcase** - Beautiful project cards with filtering and modal views
- 💼 **Experience Timeline** - Animated timeline showcasing work history
- 🛠️ **Skills Visualization** - Dynamic skill bars with proficiency levels
- 📧 **Contact Form** - Integrated EmailJS for seamless communication
- 🌓 **Dark/Light Theme** - Smooth theme switching with auto-detection
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Performance Optimized** - Fast loading with code splitting and lazy loading
- 🔍 **SEO Friendly** - Comprehensive metadata and Open Graph tags

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (React 19)
- **3D Graphics:** [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **3D Helpers:** [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Email:** [EmailJS](https://www.emailjs.com/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git
- A code editor (VS Code recommended)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd portfolio-3d
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

```bash
# Copy the example env file
cp .env.example .env.local

# Edit .env.local and add your EmailJS credentials
# Get them from https://www.emailjs.com/
```

### 4. Customize Your Content

**📝 See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for detailed instructions on replacing placeholder data.**

Quick start:
- Edit `src/data/portfolio-data.ts` - Update all personal info, projects, skills, experience
- Add your images to `public/images/`
- Add your resume to `public/resume/`
- Update SEO metadata in `src/app/layout.tsx`

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📁 Project Structure

```
portfolio-3d/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles & theme
│   ├── components/
│   │   ├── Hero3D.tsx          # 3D landing section
│   │   ├── About.tsx           # About section
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── Skills.tsx          # Skills visualization
│   │   ├── Experience.tsx      # Work experience timeline
│   │   ├── Contact.tsx         # Contact form
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Navigation.tsx      # Navigation bar
│   │   ├── ThemeToggle.tsx     # Theme switcher
│   │   └── ThemeProvider.tsx   # Theme context provider
│   └── data/
│       └── portfolio-data.ts   # ⭐ ALL YOUR CONTENT HERE
├── public/
│   ├── images/                 # Your images
│   ├── resume/                 # Your resume PDF
│   └── ...
├── CONTENT_GUIDE.md           # 📖 Content replacement guide
├── .env.example               # Environment variables template
└── README.md                  # This file
```

## 🎨 Customization

### Theme Colors

Edit `src/app/globals.css` to change the color scheme:

```css
:root {
  --primary: #0D1117;
  --accent: #00FFFF;
  /* ... more colors */
}
```

### Fonts

Fonts are configured in `src/app/layout.tsx`. Current fonts:
- **Poppins** - Main font
- **Space Grotesk** - Monospace/accent font

### Content

All content is centralized in `src/data/portfolio-data.ts`. Update:
- Personal information
- Projects
- Skills
- Work experience
- Education & certifications

See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for detailed instructions.

## 📧 EmailJS Setup

1. Create account at [EmailJS.com](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Copy credentials to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Add environment variables
7. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to:
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform
- Any platform supporting Node.js

## 📊 Performance

Target metrics:
- ✅ Lighthouse Performance: 90+
- ✅ Lighthouse Accessibility: 90+
- ✅ Lighthouse Best Practices: 90+
- ✅ Lighthouse SEO: 90+
- ✅ Page Load Time: < 3 seconds

## 🐛 Troubleshooting

### 3D Scene Not Rendering
- Check browser console for WebGL errors
- Ensure your browser supports WebGL 2.0
- Try a different browser (Chrome/Firefox recommended)

### Contact Form Not Working
- Verify EmailJS credentials in `.env.local`
- Check EmailJS dashboard for quota limits
- Ensure environment variables are set on deployment platform

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run build`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Alex Morgan** (Replace with your name)

- Website: [alexmorgan.dev](https://alexmorgan.dev)
- GitHub: [@alexmorgan](https://github.com/alexmorgan)
- LinkedIn: [Alex Morgan](https://linkedin.com/in/alexmorgan)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Documentation](https://threejs.org/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Built with ❤️ using Next.js and Three.js**
