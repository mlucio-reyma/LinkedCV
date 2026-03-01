# Quickstart: LinkedCV Implementation Guide

**Audience**: Developer starting implementation  
**Time to read**: 10 minutes  
**Expected time to MVP**: 40-60 hours (including testing & optimization)

---

## 1. Initial Setup

### 1.1 Clone & Environment

```bash
git clone https://github.com/[username]/LinkedCV.git
cd LinkedCV

# Ensure on 1-portfolio-implementation branch
git checkout 1-portfolio-implementation

# Install (optional local tools for development)
# For live server: Python http.server or Node.js http-server
python -m http.server 8000  # Serves on localhost:8000
# or
npx http-server              # Serves on localhost:8080
```

### 1.2 Project Structure

Create this directory structure:
```
LinkedCV/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles
├── js/
│   ├── main.js             # Core functionality
│   └── i18n.js             # Language system
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── hero-bg.jpg
│   │   ├── project-*.jpg
│   │   └── patterns/
│   ├── icons/
│   │   ├── github.svg
│   │   ├── linkedin.svg
│   │   └── ...
│   └── docs/
│       ├── CV_ES.pdf
│       └── CV_EN.pdf
├── lang/
│   ├── es.json
│   └── en.json
├── README.md
└── .gitignore
```

---

## 2. HTML Structure (index.html)

### 2.1 Boilerplate

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Miguel Angel Lucio Reyes | Full Stack Developer</title>
  <meta name="description" content="Professional portfolio of Miguel Angel, Senior Full Stack Developer with 6+ years experience">
  <meta property="og:title" content="Miguel Angel Lucio Reyes | Full Stack Developer">
  <meta property="og:description" content="Professional portfolio...">
  <meta property="og:image" content="assets/images/profile.jpg">
  <meta property="og:url" content="https://malrdev.com">
  <link rel="canonical" href="https://malrdev.com">
  <link rel="icon" href="data:image/svg+xml,<svg>...</svg>">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- Header & Hero -->
  <header class="header" role="banner">
    <!-- Navigation & Language Toggle -->
  </header>

  <main role="main">
    <!-- 8 Sections: Hero, About, Experience, Skills, Education, Achievements, Projects, Contact -->
  </main>

  <!-- Scripts -->
  <script src="js/i18n.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

### 2.2 Semantic Structure

```html
<header class="header">
  <nav class="nav" role="navigation">
    <button class="nav__toggle" aria-label="Toggle menu">☰</button>
    <ul class="nav__menu">
      <li><a href="#hero" class="nav__link">Inicio</a></li>
      <li><a href="#about" class="nav__link">Acerca</a></li>
      <li><a href="#experience" class="nav__link">Experiencia</a></li>
      <li><a href="#skills" class="nav__link">Habilidades</a></li>
      <li><a href="#education" class="nav__link">Educación</a></li>
      <li><a href="#achievements" class="nav__link">Logros</a></li>
      <li><a href="#projects" class="nav__link">Proyectos</a></li>
      <li><a href="#contact" class="nav__link">Contacto</a></li>
    </ul>
    <button class="lang-toggle" aria-label="Cambiar idioma">🇪🇸 ES</button>
  </nav>
</header>

<section id="hero" class="hero">
  <picture>
    <source srcset="assets/images/profile.webp" type="image/webp">
    <img src="assets/images/profile.jpg" alt="Miguel Angel Lucio Reyes" class="hero__photo" loading="lazy">
  </picture>
  <h1 class="hero__title" data-i18n="hero.name">Miguel Angel Lucio Reyes</h1>
  <p class="hero__subtitle" data-i18n="hero.title">Full Stack Developer</p>
  <p class="hero__tagline" data-i18n="hero.tagline" id="tagline-text"></p>
  <!-- CTA Buttons & Social Links -->
</section>

<section id="about" class="section section--about">
  <h2 class="section__title" data-i18n="about.title">About Me</h2>
  <p class="section__content" data-i18n="about.summary"><!-- Content filled by i18n.js --></p>
</section>

<!-- Repeat for remaining 6 sections -->
```

---

## 3. CSS Foundation (styles.css)

### 3.1 CSS Variables & Reset

```css
/* CSS Variables */
:root {
  --color-primary: #1e3a8a;
  --color-primary-dark: #0f172a;
  --color-accent: #3b82f6;
  --color-accent-light: #60a5fa;
  --color-cyan: #06b6d4;
  --color-gray-dark: #1f2937;
  --color-gray-light: #f3f4f6;
  --color-white: #ffffff;
  
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  --font-mono: 'Courier New', monospace;
  
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  --breakpoint-tablet: 768px;
  --breakpoint-desktop: 1024px;
}

/* Reset */
* { margin: 0; padding: 0; box-sizing: border-box; }
html { font-size: 16px; }
body {
  font-family: var(--font-sans);
  background-color: var(--color-primary-dark);
  color: var(--color-gray-light);
  line-height: 1.6;
}
a { color: var(--color-accent); text-decoration: none; }
button { cursor: pointer; border: none; background: none; }
```

### 3.2 Component Classes (BEM-like)

```css
/* Buttons */
.btn {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.btn--primary {
  background: linear-gradient(135deg, var(--color-accent), var(--color-cyan));
  color: var(--color-white);
}

.btn--primary:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

/* Cards */
.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: var(--spacing-lg);
  transition: all 0.3s ease;
}

.card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px);
}

/* Skill Bar */
.skill-bar {
  width: 100%;
  height: 8px;
  background: var(--color-gray-dark);
  border-radius: 4px;
  overflow: hidden;
  margin-top: var(--spacing-sm);
}

.skill-bar__fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent), var(--color-cyan));
  width: 0;
  transition: width 0.8s ease-out;
}

.skill-bar__fill.animate {
  width: 100%;
}
```

### 3.3 Responsive Breakpoints

```css
/* Mobile-first (320px) base styles */
.section { padding: var(--spacing-lg); }

/* Tablet (768px) */
@media (min-width: 768px) {
  :root { --font-size-lg: 1.25rem; }
  .section { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-lg); }
}

/* Desktop (1024px) */
@media (min-width: 1024px) {
  .section { grid-template-columns: repeat(3, 1fr); }
}
```

### 3.4 Animations

```css
/* Fade-in on scroll */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.section.visible {
  animation: fadeIn 0.6s ease-out;
}

/* Typing animation */
@keyframes type {
  from { width: 0; }
  to { width: 100%; }
}

.hero__tagline {
  display: inline-block;
  animation: type 3s steps(50, end);
  border-right: 3px solid var(--color-cyan);
  white-space: nowrap;
  overflow: hidden;
}
```

---

## 4. JavaScript (main.js & i18n.js)

### 4.1 main.js (Core Functionality)

```javascript
// main.js - Core functionality

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupAnimations();
  setupEventListeners();
  setupSkillBars();
});

function setupNavigation() {
  // Smooth scroll on nav click (500ms ease-out per spec clarification)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Or use custom smooth scroll with 500ms duration
      smoothScroll(target, 500);
    });
  });

  // Hamburger menu toggle
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  toggle?.addEventListener('click', () => {
    menu?.classList.toggle('nav__menu--visible');
  });
}

function smoothScroll(target, duration = 500) {
  const start = window.scrollY;
  const distance = target.getBoundingClientRect().top;
  const startTime = performance.now();

  const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // ease-out

  const scroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease_progress = ease(progress);
    window.scrollBy(0, distance * ease_progress - (window.scrollY - start));
    if (progress < 1) requestAnimationFrame(scroll);
  };

  requestAnimationFrame(scroll);
}

function setupAnimations() {
  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(el => observer.observe(el));
}

function setupEventListeners() {
  // Email copy-to-clipboard
  const emailBtn = document.querySelector('[data-action="copy-email"]');
  emailBtn?.addEventListener('click', async () => {
    await navigator.clipboard.writeText('contacto@codebylucio.dev');
    alert('Email copied to clipboard!');
  });

  // Back-to-top button
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    backToTop?.classList.toggle('visible', window.scrollY > 300);
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setupSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill-bar__fill').forEach(el => observer.observe(el));
}
```

### 4.2 i18n.js (Language System)

```javascript
// i18n.js - Internationalization

const I18N = {
  current: localStorage.getItem('lang') || 'es',
  translations: {},

  async init() {
    // Check URL parameter first (?lang=en overrides localStorage)
    const params = new URLSearchParams(window.location.search);
    if (params.has('lang')) {
      this.current = params.get('lang');
      localStorage.setItem('lang', this.current);
    }

    // Load translations
    this.translations.es = await fetch('lang/es.json').then(r => r.json());
    this.translations.en = await fetch('lang/en.json').then(r => r.json());

    // Apply initial language
    this.apply();

    // Setup language toggle
    document.querySelector('.lang-toggle')?.addEventListener('click', () => {
      this.switch();
    });
  },

  apply() {
    const trans = this.translations[this.current];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.get(key);
    });
    document.documentElement.lang = this.current;
  },

  get(key) {
    return this.translations[this.current][key] || key;
  },

  switch() {
    this.current = this.current === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', this.current);
    this.apply();
    
    // Update CV download link
    const cvLink = document.querySelector('[data-download="cv"]');
    if (cvLink) {
      cvLink.href = `assets/docs/CV_${this.current.toUpperCase()}.pdf`;
    }
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => I18N.init());
```

---

## 5. Translation Files (lang/es.json, lang/en.json)

### 5.1 lang/es.json

```json
{
  "hero.name": "Miguel Angel Lucio Reyes",
  "hero.title": "Full Stack Developer",
  "hero.tagline": "Apasionado por crear soluciones escalables y transformar ideas en productos digitales de alto impacto",
  
  "about.title": "Acerca de Mí",
  "about.summary": "Soy un Full Stack Developer con más de 6 años de experiencia...",
  
  "experience.title": "Experiencia Laboral",
  "experience.microsoft.company": "Microsoft México",
  "experience.microsoft.title": "Senior Full Stack Developer",
  
  "skills.title": "Habilidades",
  "skills.frontend": "Frontend",
  "skills.backend": "Backend",
  
  "education.title": "Educación",
  "education.degree": "Computer Systems Engineering",
  
  "achievements.title": "Logros",
  "projects.title": "Proyectos",
  "contact.title": "Contacto",
  "contact.email": "contacto@codebylucio.dev",
  
  "nav.home": "Inicio",
  "nav.about": "Acerca",
  "nav.experience": "Experiencia",
  "nav.skills": "Habilidades",
  "nav.education": "Educación",
  "nav.achievements": "Logros",
  "nav.projects": "Proyectos",
  "nav.contact": "Contacto"
}
```

### 5.2 lang/en.json

```json
{
  "hero.name": "Miguel Angel Lucio Reyes",
  "hero.title": "Full Stack Developer",
  "hero.tagline": "Passionate about creating scalable solutions and transforming ideas into high-impact digital products",
  
  "about.title": "About Me",
  "about.summary": "I am a Full Stack Developer with over 6 years of experience...",
  
  "experience.title": "Work Experience",
  "experience.microsoft.company": "Microsoft México",
  "experience.microsoft.title": "Senior Full Stack Developer",
  
  "skills.title": "Skills & Technologies",
  "skills.frontend": "Frontend",
  "skills.backend": "Backend",
  
  "education.title": "Education",
  "education.degree": "Computer Systems Engineering",
  
  "achievements.title": "Achievements",
  "projects.title": "Projects",
  "contact.title": "Contact",
  "contact.email": "contacto@codebylucio.dev",
  
  "nav.home": "Home",
  "nav.about": "About",
  "nav.experience": "Experience",
  "nav.skills": "Skills",
  "nav.education": "Education",
  "nav.achievements": "Achievements",
  "nav.projects": "Projects",
  "nav.contact": "Contact"
}
```

---

## 6. Asset Optimization Checklist

- [ ] Profile photo: optimize to <300KB, convert to WebP
- [ ] Hero background: optimize to <500KB
- [ ] Project screenshots: optimize each to <200KB
- [ ] SVG icons: minify, compress to <5KB each
- [ ] PDFs (CV_ES.pdf, CV_EN.pdf): ensure <500KB each
- [ ] Total site size: verify <2MB (including all assets)

**Optimization Tools**:
- TinyPNG.com (JPG/PNG compression)
- Convertio.co (WebP conversion)
- SVGMinify (SVG compression)
- ImageOptim (batch optimization on Mac)

---

## 7. Testing Checklist

### 7.1 Functionality
- [ ] All 8 sections render with correct content
- [ ] Language toggle (ES ↔ EN) switches all text instantly
- [ ] Language preference persists after page reload
- [ ] Navigation scrolls smoothly (500ms ease-out)
- [ ] PDF downloads work (both ES & EN)
- [ ] Email copy-to-clipboard works with feedback
- [ ] Hamburger menu opens/closes on mobile
- [ ] All external links (GitHub, LinkedIn) open in new tabs

### 7.2 Performance
- [ ] Lighthouse audit: Performance ≥90
- [ ] Lighthouse audit: Accessibility ≥90
- [ ] Lighthouse audit: Best Practices ≥90
- [ ] Lighthouse audit: SEO ≥90
- [ ] First Contentful Paint (FCP) <1.5s
- [ ] Largest Contentful Paint (LCP) <2.5s
- [ ] Cumulative Layout Shift (CLS) <0.1

### 7.3 Accessibility
- [ ] All interactive elements keyboard-accessible (Tab key)
- [ ] Focus indicators visible on all buttons/links
- [ ] Screen reader announces headings, lists, links
- [ ] Color contrast ≥4.5:1 (use WebAIM contrast checker)
- [ ] Alt text on all images

### 7.4 Responsiveness
- [ ] Renders correctly at 320px (mobile)
- [ ] Renders correctly at 768px (tablet)
- [ ] Renders correctly at 1024px (desktop)
- [ ] No horizontal scroll on any device
- [ ] Touch targets ≥44px (mobile friendly)

### 7.5 Cross-Browser
- [ ] Works on Chrome (latest)
- [ ] Works on Firefox (latest)
- [ ] Works on Safari (latest)
- [ ] Works on Edge (latest)
- [ ] No console errors

---

## 8. Deployment to GitHub Pages

### 8.1 Initial Setup

```bash
# Ensure repository exists on GitHub
# Clone/checkout 1-portfolio-implementation branch
git checkout 1-portfolio-implementation

# Commit all changes
git add .
git commit -m "feat: complete LinkedCV implementation (hero, content, i18n, styling)"
git push origin 1-portfolio-implementation

# Create Pull Request to merge into main
# After merge, site auto-deploys to GitHub Pages
```

### 8.2 GitHub Pages Configuration

1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: / (root)
5. Save
6. Site available at: `https://username.github.io/LinkedCV`

### 8.3 Custom Domain (Optional)

1. Settings → Pages → Custom domain
2. Enter: `malrdev.com`
3. Configure DNS:
   - CNAME: `username.github.io`
   - or A record: GitHub IP addresses

---

## 9. Common Pitfalls & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| **Lighthouse CLS >0.1** | Layout shifts on image load | Add explicit width/height to images |
| **Language not persisting** | localStorage not saving | Check browser privacy mode (disables storage) |
| **Smooth scroll jerky** | Using `scroll-behavior: smooth` in all browsers | Implement custom JS smooth scroll (provided in main.js) |
| **PDF download slow** | Large PDF files | Optimize PDFs <500KB; use PDF compressors |
| **Mobile nav broken** | Hamburger button not toggling | Verify CSS `display: none/block` rules for mobile |
| **Images not loading** | Wrong file paths | Verify assets/ folder structure matches HTML img src= paths |

---

## 10. Next Steps (Post-MVP)

- [ ] Add dark/light theme toggle (CSS variables already support this)
- [ ] Setup GitHub Actions for automated Lighthouse audits
- [ ] Add blog section (with MDX or Markdown files)
- [ ] Setup custom analytics (privacy-friendly, e.g., Plausible)
- [ ] Add "Back to Top" button with scroll indicator
- [ ] Add contact form (serverless option: Formspree, Basin)
- [ ] Setup automatic PDF generation from HTML (optional, post-MVP)
- [ ] Multi-language support (add French, Portuguese, etc.)

---

## Estimated Timeline

| Phase | Duration | Deliverable |
|-------|----------|------------|
| **Setup** | 2-4 hours | Directory structure, HTML boilerplate |
| **HTML Markup** | 8-12 hours | 8 sections, semantic structure |
| **CSS Styling** | 12-16 hours | Design system, responsive, animations |
| **JavaScript** | 8-12 hours | i18n, smooth scroll, interactions |
| **Assets** | 4-6 hours | Image optimization, PDF preparation |
| **Testing** | 4-8 hours | Lighthouse, accessibility, cross-browser |
| **Deployment** | 1-2 hours | GitHub Pages setup |
| **Total MVP** | 40-60 hours | Production-ready portfolio |

---

**Next**: Follow this guide step-by-step. Refer to `data-model.md` for entity specifications and `research.md` for technical decisions. Happy coding!