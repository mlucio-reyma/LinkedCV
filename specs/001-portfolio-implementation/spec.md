# Feature Specification: LinkedCV - Professional Portfolio Website

**Feature Branch**: `1-portfolio-implementation`  
**Created**: 2026-02-12  
**Status**: Draft  
**Input**: User description: "Build professional single-page portfolio website for Miguel Angel Lucio Reyes with bilingual support, PDF export, and GitHub Pages deployment"

## Clarifications

### Session 2026-02-12

- Q: What is the exact smooth scroll duration for navigation between sections? → A: 500ms with ease-out easing function (responsive, modern UX standard)
- Q: Are PDFs static pre-generated files or dynamically generated on download? → A: Static pre-generated files (CV_ES.pdf, CV_EN.pdf in assets/docs/) stored in repository; no dynamic generation (complies with Principle I: pure static architecture)
- Q: Is GitHub Pages automation a MUST or SHOULD? Is it in scope of this feature? → A: SHOULD-level (post-MVP enhancement, not blocking). Manual deployment to GitHub Pages works for MVP; GitHub Actions automation is nice-to-have for future sprint. Not an acceptance criterion for this feature.

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Hero Section & Navigation (Priority: P1)

Visitors land on a stunning hero section displaying Miguel Angel's professional photo,
name with gradient effect, job title (Full Stack Developer), and a compelling tagline
with typing animation. Primary CTAs (Download CV, GitHub, LinkedIn) are immediately
visible. Language toggle (ES/EN) with flag icons enables instant language switching
without page reload. Navigation smoothly scrolls between all 8 sections.

**Why this priority**: First impression is critical for tech recruiters from FAANG
companies. Hero section establishes credibility and enables immediate action (CV download,
social contact). Language toggle is essential for targeting Mexican and international audiences.
Navigation must be smooth and responsive on all devices (mobile recruiter browsing).

**Independent Test**: Can be fully tested by: (1) visiting homepage, (2) verifying hero
renders with photo, name, title, tagline with animation, (3) toggling language and seeing
all hero text update instantly in Spanish/English, (4) clicking section links (About, Experience, etc.)
and verifying smooth scroll, (5) refreshing page and confirming language preference persists,
(6) testing hamburger menu on mobile (<768px), (7) clicking Download CV and verifying PDF
downloads in correct language. Delivers value as standalone MVP: recruiters can see who Miguel is
and download his CV immediately.

**Acceptance Scenarios**:

1. **Given** user opens site on desktop, **When** page loads, **Then** hero section displays prominently with profile photo (circular, gradient border), full name "Miguel Angel Lucio Reyes", title "Full Stack Developer", tagline "Apasionado por crear soluciones escalables..." with typing animation
2. **Given** hero loads, **When** user hovers over social buttons (GitHub, LinkedIn), **Then** buttons show glassmorphism effect with smooth color transition
3. **Given** hero displays, **When** user clicks language toggle (🇪🇸/🇬🇧), **Then** ALL text in hero updates to selected language in <200ms with no page reload
4. **Given** language changed to EN, **When** user closes browser tab and reopens site, **Then** site loads in English (language persists in localStorage)
5. **Given** user on hero section, **When** user clicks "About" nav link, **Then** page smoothly scrolls to About section in 500ms with ease-out easing function
6. **Given** user on mobile (<768px), **When** page loads, **Then** hamburger menu (☰) displays in header; clicking menu reveals nav links; menu closes when link clicked
7. **Given** user on hero, **When** user clicks "Download CV" button, **Then** browser downloads correct PDF file (CV_ES.pdf if ES selected, CV_EN.pdf if EN selected)

---

### User Story 2 - Complete Content Display (All 8 Sections) (Priority: P1)

All 8 required sections render with professional layouts and bilingual content:
About Me (professional summary + tech stack), Work Experience (3 companies with timeline),
Skills (categorized by Frontend/Backend/DevOps with proficiency bars), Education (degree + certifications),
Achievements (awards + open source metrics), Featured Projects (5 projects with links),
and Contact (email, social links, secondary download button). Each section has appropriate
visual design (cards, timelines, grids) and animations trigger on scroll (fade-in, progress bar fill).

**Why this priority**: Recruiters need to see complete professional narrative. All 8 sections
are required per Constitution Principle V. Content must be bilingual to reach both Spanish
and international audiences (LinkedIn shows English-speaking recruiters from Google, Microsoft, Amazon).
Animations enhance engagement and demonstrate JavaScript skill level.

**Independent Test**: Each section can be tested independently: (1) scroll to About and verify
professional summary displays with tech stack tags, (2) scroll to Experience and verify timeline
with 3 companies (Microsoft, IBM, Softtek) with dates, roles, achievements, tech badges, (3) scroll
to Skills and verify categorized skills with animated progress bars filling on scroll,
(4) scroll to Education and verify degree + 4 certifications display, (5) scroll to Achievements
and verify awards/metrics with accent-colored numbers, (6) scroll to Projects and verify 5 project
cards with description, tech tags, GitHub/demo links, (7) scroll to Contact and verify email,
social links, secondary download button, (8) test all sections in BOTH ES and EN languages.
Each section adds core value and can be deployed independently.

**Acceptance Scenarios**:

1. **Given** user scrolls to About section, **When** section comes into viewport, **Then** About card fades in smoothly; displays 2-paragraph professional summary in selected language, tech stack list (HTML, CSS, JS, React, TypeScript, .NET, Node.js, Azure, Docker)
2. **Given** Experience section loads, **When** user views, **Then** timeline displays vertically with 3 companies (Microsoft 2021-Present, IBM 2019-2021, Softtek 2017-2018); each company shows job title, dates, 2-3 key achievements, tech stack tags with color-coding
3. **Given** Skills section loads, **When** user scrolls to it, **Then** section displays 4 categories (Frontend, Backend, DevOps, Others) with 4-5 skills per category; each skill has animated progress bar (0→100%) filling on scroll, showing proficiency level (Expert/Advanced/Intermediate)
4. **Given** Education section displays, **When** user views, **Then** Computer Systems Engineering degree shows (Universidad Tecnológica de León, 2017, Honors Mention, GPA 9.2/10); 4 certifications display with icons (Azure Developer Associate, Azure Fundamentals, AWS Cloud Practitioner, Scrum Master, ITIL Foundation)
5. **Given** Achievements section loads, **When** user scrolls, **Then** displays 4-5 achievements (Outstanding Performance Award Microsoft 2023, Employee of Quarter IBM 2020, Open Source: 500+ contributions, Tech Speaker: 2 conferences, Mentored: 50+ developers); metrics highlighted with accent colors (cyan, electric blue)
6. **Given** Projects section loads, **When** user hovers over project card, **Then** card reveals additional details (description, tech stack, GitHub link, demo link); links open in new tabs
7. **Given** Contact section visible, **When** user sees footer, **Then** email "contacto@codebylucio.dev" displays with copy-to-clipboard icon; GitHub and LinkedIn links with brand-color icons; secondary "Download CV" button visible
8. **Given** user navigates all sections, **When** user toggles language from ES to EN, **Then** ALL content in all 8 sections updates simultaneously in <200ms; dates format respected per language (Spanish: 12/02/2026, English: 02/12/2026)

---

### User Story 3 - Performance, Accessibility & Cross-Browser Compatibility (Priority: P1)

Site loads rapidly (FCP <1.5s, LCP <2.5s, CLS <0.1). Passes Lighthouse audits with scores
>90 in all categories (Performance, Accessibility, Best Practices, SEO). Works offline after
initial load. Mobile-responsive at 320px, 768px, 1024px breakpoints. Accessible via keyboard
navigation with focus indicators. WCAG 2.1 AA compliant. Works flawlessly on Chrome, Firefox,
Safari, Edge (current versions). Animations use transform/opacity only (no layout shifts).
Images lazy-loaded and optimized. Total size <2MB.

**Why this priority**: NON-NEGOTIABLE per Constitution Principle IV. Recruiters expect professional,
fast-loading sites. Accessibility ensures inclusivity. Cross-browser ensures all recruiters (regardless
of browser) can view portfolio. Performance demonstrates technical excellence and attention to detail.

**Independent Test**: (1) Run Lighthouse audit in Chrome DevTools; capture Performance, Accessibility,
Best Practices, SEO scores (all must be >90), (2) test on real mobile devices (iPhone, Android) at
320px, 768px, 1024px; verify reflow with no overlap, (3) keyboard navigation: Tab through all links,
buttons, interactive elements; verify focus visible and logical order, (4) screen reader (VoiceOver/NVDA):
verify headings, lists, links, buttons announced correctly, (5) open DevTools offline (disable network)
after page loads; refresh page; verify content still displays, (6) cross-browser: test Chrome, Firefox,
Safari, Edge; verify visual consistency and no JS errors, (7) measure actual FCP/LCP using DevTools
or WebPageTest.com; should be <1.5s and <2.5s respectively.

**Acceptance Scenarios**:

1. **Given** Lighthouse audit runs, **When** test completes, **Then** Performance score ≥90, Accessibility score ≥90, Best Practices score ≥90, SEO score ≥90
2. **Given** page loads, **When** user views in mobile DevTools (375px width), **Then** layout adapts: hamburger menu shows, cards stack vertically, text remains readable (no overflow)
3. **Given** user presses Tab key, **When** navigating site, **Then** all interactive elements (nav links, buttons, email mailto, social links) receive visible focus ring; focus order is logical (top to bottom, left to right)
4. **Given** screen reader enabled, **When** user navigates, **Then** headings announced (H1: Miguel Angel Lucio Reyes, H2: About, Experience, etc.); lists structure preserved; links have descriptive text ("Download CV" not just "link"); buttons labeled ("Send Email to contacto@codebylucio.dev")
5. **Given** user opens site on Chrome, **When** DevTools Performance tab records, **Then** First Contentful Paint <1.5s, Largest Contentful Paint <2.5s, Cumulative Layout Shift <0.1
6. **Given** page fully loaded, **When** user disables network in DevTools, **Then** user refreshes page; content still displays (text, layout); images may not load but page remains usable
7. **Given** user opens site on Chrome, Firefox, Safari, Edge, **When** user views each section, **Then** visual appearance consistent across browsers; animations smooth; no console errors; links work identically

---

### Edge Cases

- **Language switching with slow network**: What if EN translations load slowly? → Debounce language switch, show loading indicator, prevent double-switching
- **Very long job titles or company names**: What if name breaks layout? → Use CSS text-truncation with ellipsis (…) or responsive font sizing
- **Missing PDF files**: What if CV_ES.pdf or CV_EN.pdf not accessible? → Display user-friendly error message ("PDF not available, contact contacto@codebylucio.dev") instead of broken link
- **User's browser doesn't support localStorage**: What if localStorage unavailable? → Fall back to session-based language (resets on page reload) or use CSS media query (prefers-color-scheme)
- **Project screenshot images fail to load**: What if images 404? → Show placeholder with project name; display alt text; links still functional
- **Print layout for PDF export**: What if user prints page? → Print-specific CSS hides nav, adjusts margins, removes animations, optimizes for paper format
- **Mobile touch interactions**: What if user on touchscreen? → Hover states work on touch (use :focus-visible, pointer-events); no 300ms delay issues
- **Accessibility: color-blind users**: What if user can't distinguish colors? → Don't rely on color alone; use icons, text labels, patterns in addition to color coding (progress bars use both color and height)

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Site MUST display 8 required sections in order (Hero, About, Experience, Skills, Education, Achievements, Projects, Contact) with professional visual design
- **FR-002**: Hero section MUST include: profile photo (circular, optimized), full name (Miguel Angel Lucio Reyes) with gradient text effect, professional title (Full Stack Developer), compelling tagline with typing animation, social buttons (GitHub, LinkedIn), "Download CV" button, language toggle (🇪🇸 🇬🇧)
- **FR-003**: ALL user-facing content MUST exist in Spanish (ES, default) and English (EN); language switching MUST be instant (<200ms) without page reload
- **FR-004**: Users MUST be able to download CV as PDF matching selected language (CV_ES.pdf if ES selected, CV_EN.pdf if EN selected); download buttons in hero and contact sections
- **FR-005**: Site MUST include functional links to GitHub (github.com/Migueluccio), LinkedIn (linkedin.com/in/Migueluccio), and email (contacto@codebylucio.dev) with copy-to-clipboard for email
- **FR-006**: Navigation MUST be smooth scrolling between sections (no hard page jumps); hamburger menu on mobile (<768px); nav links accessible via keyboard and mouse
- **FR-007**: Work Experience section MUST display 3 companies (Microsoft, IBM, Softtek) with job titles, dates, 2-3 key achievements per role, tech stack tags; visual timeline layout with gradient line
- **FR-008**: Skills section MUST display categorized skills (Frontend, Backend, DevOps, Other) with animated progress bars filling on scroll; proficiency levels indicated (Expert/Advanced/Intermediate)
- **FR-009**: Education section MUST display Computer Systems Engineering degree (2017, Honors) and 4 certifications (Azure Developer Associate, Azure Fundamentals, AWS Cloud Practitioner, Scrum Master, ITIL Foundation)
- **FR-010**: Projects section MUST display 5 featured projects (ShopHub, TaskMaster, ConnectHub, FinTech Microservices, DevFolio) with description, tech stack, GitHub link, demo link; hover effect revealing details
- **FR-011**: Language preference MUST persist across sessions via localStorage; URL parameter (?lang=en or ?lang=es) MUST override and update language
- **FR-012**: All images (profile photo, project screenshots, icons) MUST be lazy-loaded and optimized; WebP format with JPG/PNG fallback
- **FR-013**: Animations MUST use CSS transform and opacity only (no layout-shifting animations); smooth transitions ≥0.3s for visual clarity
- **FR-014**: Site MUST be mobile-responsive at 320px, 768px, 1024px breakpoints; no content overflow; touch-friendly button sizes (min 44px)
- **FR-015**: Email mailto link MUST include copy-to-clipboard functionality with visual feedback (success message, tooltip)
- **FR-016**: All interactive elements (buttons, links, nav items) MUST be keyboard-accessible and have visible :focus-visible state
- **FR-017**: Site MUST be WCAG 2.1 AA compliant: semantic HTML, ARIA labels where needed, color contrast ≥4.5:1 for text, alternative text for images
- **FR-018**: Site MUST include meta tags (title, description, Open Graph for both languages, viewport, canonical URL)
- **FR-019**: Site MUST work offline after initial load (CSS/JS cached); if using service worker, must be optional and fallback-friendly
- **FR-020**: Total site size (HTML, CSS, JS, images, PDFs) MUST be <2MB; no external CDN dependencies; all assets local
- **FR-021**: Site MUST include robots.txt file with proper crawl directives and sitemap reference
- **FR-022**: Site MUST include sitemap.xml with all sections, hreflang alternates, and proper priorities
- **FR-023**: Site MUST include manifest.json for Progressive Web App functionality with icons, shortcuts, and metadata
- **FR-024**: Meta tags MUST include author, keywords, hreflang tags (es, en, x-default), and preconnect/dns-prefetch for optimization
- **FR-025**: Open Graph tags MUST use absolute URLs for all images and include complete metadata (image:alt, image:type, image:width, image:height, locale:alternate)
- **FR-026**: Twitter Card tags MUST use absolute URLs and include image:alt, creator, and site metadata
- **FR-027**: Schema.org JSON-LD MUST use absolute URLs and include extended properties (worksFor, knowsLanguage, description, alternateName)
- **FR-028**: Site MUST include humans.txt for transparency and .htaccess for Apache server optimization (GZIP, caching, security headers)

### Key Entities

- **Hero Section**: Profile photo (optimized), full name, job title, tagline with animation, CTA buttons, language toggle, social links
- **About Section**: Professional summary (2 paragraphs in ES/EN), tech stack highlights, core values/philosophy
- **Experience Section**: Company name, job title, employment dates (March 2021-Present, Jan 2019-Feb 2021, June 2017-Dec 2018), 2-3 key achievements per role, tech stack (C#, .NET, React, TypeScript, Azure, Docker, Kubernetes, SQL Server, etc.)
- **Skills Section**: 4 categories (Frontend: HTML, CSS, JS, React, TypeScript, Redux, Next.js, Tailwind; Backend: C#, .NET Core, Node.js, Express, Entity Framework, APIs, Microservices; DevOps: Azure, Docker, Git, CI/CD, Kubernetes, AWS; Other: WPF, WinForms, Python, Django, GraphQL); proficiency levels for each
- **Education Section**: Degree (Computer Systems Engineering, Universidad Tecnológica de León, 2017, Honors: 9.2/10 GPA), 5 certifications (Azure Developer Associate 2022, Azure Fundamentals 2021, AWS Cloud Practitioner 2023, Scrum Master 2020, ITIL Foundation 2019)
- **Achievements Section**: 6 achievements (Outstanding Performance Award Microsoft 2023, Employee of Quarter IBM 2020, Open Source Contributor: 500+ contributions, Maintainer 3 projects with 1000+ stars, Tech Speaker: 2 conferences, Mentored 50+ developers, Hackathon Winner 2022)
- **Projects Section**: 5 projects: ShopHub (React, Node.js, MongoDB, Stripe, AWS, Docker, demo + GitHub), TaskMaster (C#, WPF, .NET 6, Entity Framework, SQLite, Azure, GitHub), ConnectHub (React, Node.js, Socket.io, WebRTC, MongoDB, Redis, demo + GitHub), FinTech Microservices (.NET Core, Docker, Kubernetes, RabbitMQ, PostgreSQL, GitHub), DevFolio (Next.js, TypeScript, Tailwind, MDX, Vercel, demo + GitHub)
- **Contact Section**: Email with copy-to-clipboard, GitHub profile link, LinkedIn profile link, secondary "Download CV" button, footer with subtle tech pattern

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Lighthouse audit scores: Performance ≥90, Accessibility ≥90, Best Practices ≥90, SEO ≥90 (minimum all categories)
- **SC-002**: First Contentful Paint (FCP) <1.5 seconds; Largest Contentful Paint (LCP) <2.5 seconds; Cumulative Layout Shift (CLS) <0.1 (Web Vitals)
- **SC-003**: Total site size <2MB including all images, PDFs, CSS, and JavaScript combined
- **SC-004**: All images optimized: profile photo <300KB, project screenshots <200KB each, hero background <500KB; WebP format with fallback; lazy loading implemented
- **SC-005**: Language switching completes in <200ms; content updates without page reload; language preference persists across sessions via localStorage
- **SC-006**: Mobile responsiveness: site renders correctly at 320px (mobile), 768px (tablet), 1024px (desktop); no horizontal scroll; all touch targets ≥44px
- **SC-007**: PDF downloads work in both ES and EN; static files CV_ES.pdf and CV_EN.pdf (<500KB each) stored in assets/docs/; metadata includes Author (Miguel Angel Lucio Reyes) and Title (CV 2026); downloadable from both hero and contact sections
- **SC-008**: W3C HTML5 validation passes (no errors); W3C CSS3 validation passes (no critical errors); no JavaScript console errors on initial page load
- **SC-009**: Cross-browser compatibility verified: Chrome, Firefox, Safari, Edge (latest 2 versions); visual consistency and functionality identical across browsers
- **SC-010**: Accessibility WCAG 2.1 AA: semantic HTML used throughout, ARIA labels on dynamic content, color contrast ≥4.5:1 for all text, keyboard navigation complete, alt text on all images, screen reader support verified
- **SC-011**: SEO optimization complete: robots.txt present with sitemap reference; sitemap.xml includes all sections with hreflang alternates; manifest.json configured for PWA; humans.txt created
- **SC-012**: Meta tags complete: author, keywords, hreflang (es/en/x-default), preconnect/dns-prefetch; Open Graph with absolute URLs and complete metadata; Twitter Cards with absolute URLs
- **SC-013**: Schema.org JSON-LD enhanced with absolute URLs, worksFor, knowsLanguage, and extended properties
- **SC-014**: Target Lighthouse SEO score: 100/100 (perfect score with all optimizations implemented)

### Assumptions

- Profile photo and project screenshots will be provided in high resolution; team will handle optimization
- PDFs (CV_ES.pdf, CV_EN.pdf) will be created externally and placed in assets/docs/ folder; specification assumes they exist and are <500KB; files are static (not dynamically generated)
- No custom fonts from external CDNs; system fonts or locally hosted fonts only (to comply with Constitution Principle I)
- HTML, CSS, JS can be organized as single file or modular (separate files) per Constitution guidelines; both approaches valid
- Animations will be CSS-based (keyframes, transitions) or lightweight JavaScript (Intersection Observer); no heavy animation libraries
- Manual deployment to GitHub Pages works for MVP; GitHub Actions automation is a post-MVP enhancement (not required for this feature)
- Bilingual content translations are professional and manually reviewed (not machine-translated)
- No backend API calls; all content is static or managed via JSON translation files