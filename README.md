# Ricardo (Rick) Pulgar Mendoza — Personal Portfolio

An elite, modern, and highly interactive personal portfolio architected for **Ricardo (Rick) Pulgar Mendoza**, bridging Clinical Psychology, Technical Talent Architecture, and Gamified Product Engineering.

## 🚀 Live Tech Stack
- **Framework:** Next.js (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, Custom Glassmorphic Design System, Dual-Tone Glow (Emerald/Teal + Cyber Violet)
- **Icons:** Lucide React
- **Typography:** Geist & Geist Mono
- **Interactions:** Interactive Skill Tree inspector, real-time Caracas (GMT-4) timezone clock, copy-to-clipboard email with confetti burst, filterable timeline, and search-enabled tooling matrix.

## 📁 Project Architecture
```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Custom tokens, hairline borders, spotlight cards
│   │   ├── layout.tsx          # SEO metadata, OpenGraph, font configurations
│   │   └── page.tsx            # Full composite portfolio view
│   └── components/
│       ├── BackgroundGlow.tsx  # Dual-tone ambient radial lighting & grid
│       ├── Navbar.tsx          # Floating glassmorphic navbar & mobile drawer
│       ├── Hero.tsx            # Hero section with dual CTAs & badge
│       ├── HeroWidget.tsx      # Bento interactive Skill Tree node graph
│       ├── SkilleaBento.tsx    # Flagship Product Showcase (Progress Tree engine)
│       ├── TalentArchitecture.tsx # Recruitment leadership & 4-stage funnel
│       ├── PsychologyFoundation.tsx # UCV Clinical Psychology unfair advantage
│       ├── ExperienceTimeline.tsx # Filterable career timeline
│       ├── ToolingMatrix.tsx   # Categorized searchable methodology matrix
│       └── ContactFooter.tsx   # Email module, copy-to-clipboard, Caracas clock
```

## 🛠️ Development & Deployment

### 1. Run Locally
```bash
cd portfolio
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 2. Build for Production
```bash
npm run build
npm run start
```

### 3. Deploy to Vercel
Simply push to GitHub and import the `portfolio` directory on [Vercel](https://vercel.com) for instantaneous deployment.
