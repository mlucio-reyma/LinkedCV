---

description: "Task list for LinkedCV static portfolio implementation"
---

# Tasks: LinkedCV - Professional Static Portfolio

**Input**: LinkedCV Constitution and Feature Specifications  
**Prerequisites**: Constitution (required), Plan (required), Spec (required)

**Testing**: Manual browser testing and Lighthouse audits (required). Jest unit tests OPTIONAL.

**Organization**: Tasks grouped by Phase (Setup, Foundation, User Stories) then by Section.
Each section can be implemented and deployed independently.

## Format: `[ID] [P?] [Section] Description`

- **[P]**: Can run in parallel (different files/sections, no dependencies)
- **[Section]**: Which content section (Hero, About, Experience, Skills, Education, Achievements, Projects, Contact)
- Include exact file paths

## Path Conventions

```
LinkedCV/
├── index.html            # Single HTML file (or separate html per section if modular)
├── css/
│   └── styles.css        # All CSS or separate files per section
├── js/
│   ├── main.js           # Core functionality
│   └── i18n.js           # Internationalization system
├── assets/
│   ├── images/           # Optimized profile, hero-bg, patterns
│   ├── icons/            # SVG icons for social, tech stack
│   └── docs/             # CV_ES.pdf, CV_EN.pdf
├── lang/
│   ├── es.json           # Spanish translations
│   └── en.json           # English translations
└── README.md             # Setup and deployment docs
```

## Phase 1: Project Setup & Infrastructure

**Purpose**: Initialize repository structure, HTML skeleton, CSS framework, and JS modules

- [ ] T001 Create index.html with HTML5 boilerplate, semantic structure for all 8 sections
- [ ] T002 [P] Create css/styles.css with CSS variables (colors, fonts, breakpoints); set mobile-first base
- [ ] T003 [P] Create js/main.js with core setup (DOM selectors, scroll listeners, event handlers)
- [ ] T004 [P] Create js/i18n.js with language loading, switching, and localStorage persistence
- [ ] T005 [P] Create lang/es.json with Spanish content placeholders for all 8 sections
- [ ] T006 [P] Create lang/en.json with English content placeholders for all 8 sections
- [ ] T007 [P] Create assets/images/ folder structure; add placeholder paths for profile, hero-bg
- [ ] T008 [P] Create assets/icons/ folder; prepare SVG placeholders for social (GitHub, LinkedIn) and tech stack
- [ ] T009 [P] Create assets/docs/ folder; prepare PDF placeholder paths (CV_ES.pdf, CV_EN.pdf)
- [ ] T010 Create README.md with project overview, local testing instructions (Python/Node HTTP server), deployment steps
- [ ] T011 Setup .gitignore for web project (node_modules if needed, OS files, local testing artifacts)
- [ ] T012 [P] Create .github/workflows/deploy.yml for GitHub Pages automatic deployment on main push

**Checkpoint**: Project structure ready, HTML skeleton complete, CSS/JS foundation in place, language system initialized

---

## Phase 2: Foundation & Core Systems

**Purpose**: Establish responsive layout, navigation, language system, and accessibility framework

- [ ] T013 [P] Setup viewport meta tag and responsive CSS breakpoints (320px, 768px, 1024px)
- [ ] T014 [P] Implement CSS reset and normalize styles; apply typography base (sans-serif headings, body)
- [ ] T015 [P] Implement CSS color variables from Constitution Principle III (deep blue, electric blue, cyan, grays)
- [ ] T016 [P] Create reusable CSS component classes (cards, badges, buttons, section headers)
- [ ] T017 Implement smooth scroll navigation in js/main.js (scroll to section on link click, no page reload)
- [ ] T018 Implement language switcher in HTML and js/i18n.js (toggle button + localStorage + instant content update)
- [ ] T019 Implement mobile hamburger menu (hidden on desktop, visible on mobile <768px)
- [ ] T020 [P] Add ARIA labels, semantic HTML tags, focus management for keyboard navigation
- [ ] T021 [P] Add print-friendly CSS for PDF export (hide nav, adjust margins, optimize for A4)
- [ ] T022 Setup Lighthouse testing: run audit, capture baseline Performance/Accessibility/SEO scores
- [ ] T023 [P] Create favicon.ico and set in index.html <head>
- [ ] T024 Add Open Graph meta tags (title, description, image) for both ES and EN in HTML

**Checkpoint**: Responsive layout working, language system functional, accessibility baseline, all meta tags present

---

## Phase 3: User Story 1 - Hero Section & Navigation (Priority: P1) 🎯 MVP

**Goal**: Professional first impression with name, title, photo, tagline, and main CTAs

**Independent Test**: Visit homepage, see hero section render, toggle language, click links, verify smooth scroll and persistence

### Tests for User Story 1 (Manual Lighthouse & Browser Testing)

- [ ] T025 [P] Manual: Lighthouse audit (Performance >90, Accessibility >90, SEO >90)
- [ ] T026 [P] Manual: Cross-browser (Chrome, Firefox, Safari, Edge) - hero renders, text visible, spacing correct
- [ ] T027 [P] Manual: Mobile responsiveness (320px, 768px) - hero adapts, text readable, photo scales

### Implementation for User Story 1

- [ ] T028 [P] Create Hero HTML section with: name (gradient text), title, profile photo (circular, optimized)
- [ ] T029 [P] Add hero background image (tech pattern, low opacity 10-20%, dark overlay) in css/styles.css
- [ ] T030 [P] Create CSS for hero layout: flexbox centering, gradient text effect, responsive font sizes
- [ ] T031 [P] Add professional tagline with typing animation effect in js/main.js (Intersection Observer trigger)
- [ ] T032 [P] Create "Download CV" button (prominent, gradient background, white text, download icon)
- [ ] T033 [P] Create social link buttons (GitHub, LinkedIn) with hover glassmorphism effect
- [ ] T034 [P] Add language toggle (flag icons 🇪🇸 🇬🇧) in hero header
- [ ] T035 Create HTML structure for nav/menu linking to all 8 sections (smooth scroll via js/main.js)
- [ ] T036 Add profile photo optimization: jpg/webp formats, lazy loading, alt text
- [ ] T037 Update lang/es.json with Hero content (name, title, tagline in Spanish)
- [ ] T038 Update lang/en.json with Hero content (name, title, tagline in English)
- [ ] T039 Implement hero section scroll effect (parallax background shift on scroll)
- [ ] T040 Test language toggle: switch ES ↔ EN, verify all hero text updates instantly, localStorage persists

**Checkpoint**: Hero section fully functional, bilingual, accessible, responsive, animations smooth

---

## Phase 4: User Story 2 - Content Sections: About, Experience, Skills, Education (Priority: P1)

**Goal**: Complete professional narrative with structured, visually distinct sections

**Independent Test**: Scroll through all 4 sections, verify layouts, bilingual content, interactive elements, animations on scroll

### Tests for User Story 2 (Manual Testing)

- [ ] T041 [P] Manual: Scroll animations trigger (fade-in, skill bar fill) on Intersection Observer
- [ ] T042 [P] Manual: Mobile layout (cards stack, text responsive, no overflow)
- [ ] T043 [P] Manual: Bilingual verification (ES/EN switch, all section content updates)

### Implementation for User Story 2

#### About Section

- [ ] T044 Create About HTML: professional summary (3 paragraphs), tech stack list, core values
- [ ] T045 [P] Create About CSS: card design (subtle glassmorphism), text hierarchy, accent color highlights
- [ ] T046 Update lang/es.json with About content
- [ ] T047 Update lang/en.json with About content

#### Experience Section

- [ ] T048 Create Experience HTML: timeline layout, company cards (name, position, dates, tech tags)
- [ ] T049 [P] Create Experience CSS: vertical timeline with gradient line, alternating card layout (desktop)
- [ ] T050 [P] Add tech stack badges as CSS elements (background color per tech, monospace font)
- [ ] T051 Create Experience content in lang/es.json (companies, roles, dates, tech)
- [ ] T052 Create Experience content in lang/en.json
- [ ] T053 Add timeline visual (gradient-bordered line, animated on scroll)

#### Skills Section

- [ ] T054 Create Skills HTML: categorized list (Frontend, Backend, DevOps, Other) with progress levels
- [ ] T055 [P] Create Skills CSS: animated progress bars (fill on scroll), skill cards with proficiency badges
- [ ] T056 [P] Implement progress bar animation in js/main.js (Intersection Observer, smooth fill 0→100%)
- [ ] T057 Create Skills content in lang/es.json (skills per category + proficiency levels)
- [ ] T058 Create Skills content in lang/en.json
- [ ] T059 Add tech stack icons/logos (SVG or emoji) next to skill names

#### Education Section

- [ ] T060 Create Education HTML: degree cards (institution, degree, graduation date, honors)
- [ ] T061 [P] Create Education CSS: card layout with icon/accent, responsive grid
- [ ] T062 Create Education content in lang/es.json
- [ ] T063 Create Education content in lang/en.json

**Checkpoint**: About, Experience, Skills, Education sections complete, bilingual, animations functional, responsive

---

## Phase 5: User Story 3 - Remaining Sections: Achievements, Projects, Contact (Priority: P1)

**Goal**: Complete portfolio with highlights, project portfolio, and contact/download CTAs

**Independent Test**: View achievements, projects, contact sections; verify project links work, PDF download functions, email clickable

### Tests for User Story 3 (Manual Testing)

- [ ] T064 [P] Manual: Project links (GitHub, demo) load in new tab
- [ ] T065 [P] Manual: PDF download (both languages) completes, file size <500KB
- [ ] T066 [P] Manual: Email mailto link opens mail client

### Implementation for User Story 3

#### Achievements Section

- [ ] T067 Create Achievements HTML: award/recognition cards with metrics (numbers highlighted)
- [ ] T068 [P] Create Achievements CSS: grid layout (2-3 columns desktop, 1 mobile), accent color metrics
- [ ] T069 Create Achievements content in lang/es.json
- [ ] T070 Create Achievements content in lang/en.json

#### Projects Section

- [ ] T071 Create Projects HTML: project cards (name, description, tech stack, links, screenshot placeholder)
- [ ] T072 [P] Create Projects CSS: grid layout (2 columns desktop, 1 mobile), hover reveal more details effect
- [ ] T073 [P] Implement card hover effect in js/main.js (smooth reveal, opacity transitions)
- [ ] T074 Create Projects content in lang/es.json (5-6 projects, tech tags, GitHub links)
- [ ] T075 Create Projects content in lang/en.json
- [ ] T076 [P] Add project screenshot images (optimized, lazy loaded)
- [ ] T077 [P] Test project links: all GitHub repos accessible, demo URLs functional

#### Contact Section

- [ ] T078 Create Contact HTML: email (mailto), social links (GitHub, LinkedIn), secondary "Download CV" button
- [ ] T079 [P] Create Contact CSS: centered layout, icon badges with brand colors, footer pattern
- [ ] T080 [P] Implement email copy-to-clipboard in js/main.js (click → copy → success message)
- [ ] T081 [P] Add subtle background pattern (tech-themed, low opacity) to footer
- [ ] T082 Create Contact content in lang/es.json
- [ ] T083 Create Contact content in lang/en.json
- [ ] T084 Add social link icons (SVG, brand colors): GitHub, LinkedIn
- [ ] T085 Test email link: mailto works, social links open in new tabs

**Checkpoint**: All 8 sections complete, bilingual, interactive elements functional, links verified

---

## Phase 4: Polish & Optimization

**Purpose**: Final refinements, performance optimization, accessibility verification, deployment readiness

- [ ] T086 Image optimization: compress profile.jpg, hero-bg.jpg, project screenshots (<500px each for mobile)
- [ ] T087 [P] WebP conversion: create WebP versions of all JPGs with fallback logic in HTML
- [ ] T088 [P] Lazy loading: add loading="lazy" to all <img> tags and Intersection Observer for background images
- [ ] T089 PDF optimization: ensure CV_ES.pdf and CV_EN.pdf are each <500KB (compress with Adobe/similar)
- [ ] T090 Run final Lighthouse audit: verify all scores >90 (Performance, Accessibility, Best Practices, SEO)
- [ ] T091 [P] Cross-browser testing: Chrome, Firefox, Safari, Edge (current versions) - full site walkthrough
- [ ] T092 [P] Mobile responsiveness audit: 320px, 375px, 768px, 1024px - all sections reflow correctly
- [ ] T093 Keyboard navigation audit: Tab through all interactive elements, all focus visible, logical order
- [ ] T094 Screen reader test: VoiceOver (Mac) / NVDA (Windows) - headings, links, buttons all announced
- [ ] T095 Bilingual content proofread: Spanish and English spelling, terminology, formatting
- [ ] T096 Test offline access: service worker OR manual "load and disconnect" - page displays cached content
- [ ] T097 [P] Code cleanup: remove console.log, comments cleaned, consistent formatting
- [ ] T098 [P] CSS cleanup: no unused classes, variables properly named, BEM-like naming consistent
- [ ] T099 Update README.md with screenshots, full setup guide, GitHub Pages deployment steps
- [ ] T100 Final git commit and push to main → verify GitHub Pages deployment auto-triggers

**Checkpoint**: All quality gates passed, site production-ready, fully tested, deployed to GitHub Pages

---

## Dependencies & Execution Strategy

### Sequential Prerequisites
1. **Phase 1 → Phase 2**: Setup must complete before Foundation
2. **Phase 2 → Phases 3/4/5**: Foundation must complete before content sections
3. **Phases 3/4/5**: Can proceed in parallel once Foundation ready
4. **Phase 6**: Only after Phases 3/4/5 complete

### Parallel Opportunities (within phases)
- Phase 1: All [P] tasks (CSS, JS modules, lang files, asset folders) can run in parallel
- Phase 2: All [P] tasks (CSS framework, ARIA, print styles, meta tags) can run in parallel
- Phase 3/4/5: Different sections can be built by different team members simultaneously
- Phase 6: Optimization tasks [P] can run in parallel (image processing, testing, code cleanup)

### MVP Milestone
- Stop after Phase 3 (Hero section) = Functional MVP (landing page + navigation)
- Add Phase 4 = Complete content sections
- Add Phase 5 = Full portfolio with projects
- Phase 6 = Production polish

---

## Notes
- All tasks tied to HTML/CSS/JS specifics; NO dependencies on frameworks or build tools
- Every phase has clear "Checkpoint" success criteria
- [P] tasks = can parallelize; otherwise sequential dependencies noted
- Manual testing is primary QA method; Lighthouse audits are quality gates
- Bilingual content (es.json, en.json) updates paired with each feature implementation
- Accessibility verified early (Phase 2) and audited thoroughly (Phase 6)
