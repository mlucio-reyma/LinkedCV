---

description: "Task list for LinkedCV static portfolio implementation"
---

# Tasks: LinkedCV - Professional Static Portfolio

**Input**: LinkedCV Constitution and Feature Specifications  
**Prerequisites**: Constitution (required), Plan (required), Spec (required)

**Testing**: Manual browser testing and Lighthouse audits (required). Jest unit tests OPTIONAL.

**Organization**: Tasks grouped by Phase (Setup, Foundation, User Stories) then by Section.  
Each section can be implemented and deployed independently.

## Format: `- [ ] [TaskID] [P?] [Story?] Description with file path`

- **[P]**: Can run in parallel (different files/sections, no dependencies)
- **[Story]**: Required only for User Story phases (US1, US2, US3)
- Include exact file paths

## Path Conventions

```
LinkedCV/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── i18n.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── docs/
├── lang/
│   ├── es.json
│   └── en.json
├── sw.js
└── README.md
```

---

## Phase 1: Setup (Project Initialization)

**Purpose**: Establish repository structure and baseline files.

- [X] T001 Create base file structure in index.html, css/styles.css, js/main.js, js/i18n.js
- [X] T002 [P] Create assets/images, assets/icons, assets/docs directories (placeholders)
- [X] T003 [P] Create lang/es.json and lang/en.json with placeholder keys for all sections
- [X] T004 [P] Add README.md with local dev steps and GitHub Pages deployment steps
- [X] T005 [P] Add .gitignore entries for OS artifacts and local tooling

**Checkpoint**: Files exist and project structure matches plan.md.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core layout, navigation shell, i18n system, and accessibility foundations.

- [X] T006 [P] Add HTML boilerplate, meta tags, and section anchors in index.html
- [X] T007 [P] Define CSS variables, reset, base typography in css/styles.css
- [X] T008 [P] Add responsive breakpoints (320px, 768px, 1024px) in css/styles.css
- [X] T009 [P] Create reusable CSS components (buttons, cards, badges) in css/styles.css
- [X] T010 Implement base navigation structure in index.html (links to 8 sections)
- [X] T011 Implement smooth scroll handler (500ms ease-out) in js/main.js
- [X] T012 Implement language loader, switcher, localStorage, and ?lang= override in js/i18n.js
- [X] T013 Add global focus styles and ARIA labels for nav/buttons in index.html and css/styles.css
- [X] T014 Add Open Graph, canonical, and SEO meta tags in index.html
- [X] T015 Add print styles for PDF-friendly layout in css/styles.css

**Checkpoint**: Navigation works, i18n baseline works, accessibility baseline in place.

---

## Phase 3: User Story 1 - Hero Section & Navigation (P1)

**Goal**: Hero section delivers first impression, bilingual toggle, and navigation.

**Independent Test Criteria**:  
Hero renders with photo, name, title, typing tagline; language toggle updates text <200ms; smooth scroll works at 500ms; PDF download matches language; hamburger works on mobile.

### Tests (Manual)

- [ ] T016 [P] [US1] Verify hero renders correctly on desktop and mobile (index.html)
- [ ] T017 [P] [US1] Verify language toggle updates hero text and persists (js/i18n.js)
- [ ] T018 [P] [US1] Verify smooth scroll duration is 500ms ease-out (js/main.js)
- [ ] T019 [P] [US1] Verify CV download uses correct file (assets/docs/CV_ES.pdf, CV_EN.pdf)

### Implementation Tasks

- [X] T020 [US1] Build Hero HTML structure (photo, name, title, tagline, CTAs) in index.html
- [X] T021 [US1] Add hero social links and language toggle in index.html
- [X] T022 [US1] Implement hero layout styling, gradient title, and CTA styles in css/styles.css
- [X] T023 [US1] Add typing animation for tagline (CSS/JS) in css/styles.css and js/main.js
- [X] T024 [US1] Implement hamburger menu toggle and close-on-click in js/main.js
- [X] T025 [US1] Add hero translations in lang/es.json and lang/en.json
- [X] T026 [US1] Wire CV download button to language selection in js/i18n.js
- [X] T027 [US1] Add hero image assets (WebP + JPG) in assets/images and update index.html

**Checkpoint**: Hero is bilingual, responsive, animated, and navigable per spec.md.

---

## Phase 4: User Story 2 - Complete Content Display (P1)

**Goal**: All 8 sections render with bilingual content, layouts, and scroll animations.

**Independent Test Criteria**:  
Each section renders with correct content in ES/EN; animations trigger on scroll; skill bars animate; project links open in new tabs; contact copy-to-clipboard works.

### Tests (Manual)

- [ ] T028 [P] [US2] Verify all sections render and scroll animations trigger (index.html, js/main.js)
- [ ] T029 [P] [US2] Verify bilingual content updates across all sections (lang/*.json)
- [ ] T030 [P] [US2] Verify project links open in new tabs and email copy works (js/main.js)

### About Section

- [X] T031 [US2] Implement About HTML (summary, tech stack, values) in index.html
- [X] T032 [US2] Style About layout and cards in css/styles.css
- [X] T033 [US2] Add About translations in lang/es.json and lang/en.json

### Experience Section

- [X] T034 [US2] Implement Experience HTML timeline with Microsoft/IBM/Softtek in index.html
- [X] T035 [US2] Style Experience timeline and tech badges in css/styles.css
- [X] T036 [US2] Add Experience translations in lang/es.json and lang/en.json
- [X] T037 [US2] Add scroll animation for experience cards in js/main.js

### Skills Section

- [X] T038 [US2] Implement Skills HTML with categories and bars in index.html
- [X] T039 [US2] Style skill bars and category layout in css/styles.css
- [X] T040 [US2] Animate skill bar fill on scroll in js/main.js
- [X] T041 [US2] Add Skills translations in lang/es.json and lang/en.json

### Education Section

- [X] T042 [US2] Implement Education HTML (degree + certifications) in index.html
- [X] T043 [US2] Style Education cards and layout in css/styles.css
- [X] T044 [US2] Add Education translations in lang/es.json and lang/en.json

### Achievements Section

- [X] T045 [US2] Implement Achievements HTML with metrics in index.html
- [X] T046 [US2] Style Achievements grid and metric emphasis in css/styles.css
- [X] T047 [US2] Add Achievements translations in lang/es.json and lang/en.json

### Projects Section

- [X] T048 [US2] Implement Projects HTML (5 cards with images/links) in index.html
- [X] T049 [US2] Style Projects grid, hover effects, and badges in css/styles.css
- [X] T050 [US2] Add Projects translations in lang/es.json and lang/en.json
- [X] T051 [US2] Add project images and WebP fallbacks in assets/images and index.html

### Contact Section

- [X] T052 [US2] Implement Contact HTML (email, social links, download CV) in index.html
- [X] T053 [US2] Style Contact layout and footer pattern in css/styles.css
- [X] T054 [US2] Implement email copy-to-clipboard in js/main.js
- [X] T055 [US2] Add Contact translations in lang/es.json and lang/en.json

**Checkpoint**: All 8 sections complete, bilingual, with animations and functional links.

---

## Phase 5: User Story 3 - Performance, Accessibility & Cross-Browser (P1)

**Goal**: Meet Lighthouse targets, accessibility standards, and offline behavior.

**Independent Test Criteria**:  
Lighthouse ≥90 all categories; WCAG 2.1 AA checks pass; FCP/LCP/CLS within limits; cross-browser consistent; offline after initial load.

### Tests (Manual)

- [ ] T056 [P] [US3] Run Lighthouse audits (Performance, Accessibility, Best Practices, SEO) and capture scores
- [ ] T057 [P] [US3] Verify responsive layouts at 320px, 768px, 1024px (no overflow)
- [ ] T058 [P] [US3] Verify keyboard navigation and focus states across all controls
- [ ] T059 [P] [US3] Verify cross-browser rendering (Chrome, Firefox, Safari, Edge)
- [ ] T060 [P] [US3] Verify offline behavior after initial load (DevTools offline)

### Implementation Tasks

- [X] T061 [US3] Optimize images to size targets and add lazy loading in index.html and assets/images
- [X] T062 [US3] Add explicit width/height to images to prevent CLS in index.html
- [X] T063 [US3] Ensure animations use transform/opacity only in css/styles.css
- [X] T064 [US3] Add ARIA labels and semantic landmarks across sections in index.html
- [X] T065 [US3] Implement focus-visible styles and keyboard handling in css/styles.css and js/main.js
- [X] T066 [US3] Add service worker for offline caching (optional, safe fallback) in sw.js and js/main.js
- [ ] T067 [US3] Verify total asset size <2MB (document results in README.md)

**Checkpoint**: Performance and accessibility targets met; offline behavior verified.

---

## Final Phase: Polish & Cross-Cutting Concerns

**Purpose**: Final cleanup, documentation, and release readiness.

- [ ] T068 [P] Clean up unused CSS/JS and remove debug logs in css/styles.css and js/main.js
- [ ] T069 [P] Add final README.md updates: features, testing results, Lighthouse scores
- [ ] T070 [P] Verify PDF files <500KB and metadata present in assets/docs
- [ ] T071 Run final full-site manual test pass (all stories)

**Checkpoint**: Ready for deployment with documented results.

---

## Dependencies (User Story Order)

1. **US1 → US2 → US3** (Hero & Nav enables core UX, content sections build on layout, performance/accessibility validates final output)

---

## Parallel Execution Examples (per User Story)

- **US1**: T020 (Hero HTML) and T022 (Hero CSS) can proceed in parallel after T006–T009.
- **US2**: About/Education/Projects tasks can be done in parallel (T031, T042, T048) with separate CSS blocks.
- **US3**: Lighthouse audits (T056) can run in parallel with image optimization (T061) and ARIA updates (T064).

---

## Implementation Strategy (MVP First)

1. Complete Phase 1–2 to establish foundation.
2. Deliver **US1** as MVP (Hero + Navigation + i18n + CV download).
3. Implement **US2** to complete all required sections.
4. Execute **US3** to meet performance, accessibility, and cross-browser requirements.
5. Final polish and documentation updates.

---


---

## SPRINT 1: HTML Hero + About + Experience (6-8 hours)

### Section: Hero (Tasks 1-8)

**Task 1: HTML Markup - Hero Section Base**
- **Description**: Create hero section with profile image, name, title placeholders
- **File**: index.html (lines ~40-50)
- **Acceptance Criteria**:
  - `<section id="hero" class="hero">` exists
  - `<picture>` element with `<source srcset>` for WebP + JPG
  - `<h1 class="hero__title">` with data-i18n attribute
  - No styling applied (CSS later)
- **Dependencies**: None (first task)
- **Time**: 30 min

**Task 2: HTML Markup - Hero CTA Buttons**
- **Description**: Add CV download button and call-to-action buttons
- **File**: index.html (hero section)
- **Acceptance Criteria**:
  - `<a href="assets/docs/CV_ES.pdf" data-download="cv">` button
  - Contact CTA button with `data-action="contact"`
  - Proper semantic `<button>` or `<a role="button">` elements
- **Dependencies**: Task 1
- **Time**: 30 min

**Task 3: HTML Markup - Hero Social Links**
- **Description**: Add GitHub, LinkedIn, Twitter social link icons
- **File**: index.html (hero section)
- **Acceptance Criteria**:
  - Social links nav with proper `<a>` elements
  - `target="_blank" rel="noopener noreferrer"` on external links
  - ARIA labels: `aria-label="GitHub (opens in new tab)"`
  - SVG or emoji icons ready for CSS
- **Dependencies**: Task 1
- **Time**: 30 min

**Task 4: HTML Markup - Language Toggle Button**
- **Description**: Add language toggle button in hero navigation
- **File**: index.html (hero/header section)
- **Acceptance Criteria**:
  - `<button class="lang-toggle" aria-label="Toggle language">` exists
  - Data attribute: `data-action="toggle-language"`
  - Shows current language (ES/EN)
- **Dependencies**: Task 1
- **Time**: 15 min

**Task 5: CSS - Hero Section Base Styling**
- **Description**: Basic hero layout, colors, spacing (no animations yet)
- **File**: css/styles.css (hero section)
- **Acceptance Criteria**:
  - Hero section full viewport height (100vh or min-height: 100vh)
  - Background color matches constitution palette (primary dark)
  - Profile image responsive (max-width: 300px)
  - CTA buttons styled with primary color
  - CSS variables used for colors/spacing
- **Dependencies**: Tasks 1-4
- **Time**: 1 hour

**Task 6: CSS - Hero Animations**
- **Description**: Add fade-in, typewriter effect, glow animations
- **File**: css/styles.css (@keyframes section)
- **Acceptance Criteria**:
  - Fade-in animation on hero section (300-500ms)
  - Typewriter effect on tagline (3s duration)
  - Button glow effect on hover
  - All animations use CSS (no JS)
- **Dependencies**: Task 5
- **Time**: 1 hour

**Task 7: JavaScript - Navigation Smooth Scroll**
- **Description**: Implement smooth scroll to sections (500ms ease-out)
- **File**: js/main.js (navigation function)
- **Acceptance Criteria**:
  - Click nav link → smooth scroll to target (500ms duration)
  - Easing function: ease-out cubic (not linear)
  - Works on all browsers (custom JS, not CSS scroll-behavior)
  - Falls back to instant scroll if requestAnimationFrame unavailable
- **Dependencies**: Tasks 1-6
- **Time**: 1 hour

**Task 8: JavaScript - Hamburger Menu Toggle**
- **Description**: Implement mobile hamburger menu open/close
- **File**: js/main.js (menu toggle function)
- **Acceptance Criteria**:
  - Click hamburger icon → menu slides/fades in
  - Click link in menu → menu closes automatically
  - Click outside menu → menu closes (optional, enhanced UX)
  - ARIA attributes update dynamically (aria-expanded)
  - Touch-friendly on mobile (44px+ tap target)
- **Dependencies**: Task 1
- **Time**: 1 hour

---

### Section: About (Tasks 9-16)

**Task 9: HTML Markup - About Section Base**
- **Description**: Create about section with summary, tech stack highlights
- **File**: index.html (lines ~80-100)
- **Acceptance Criteria**:
  - `<section id="about" class="section section--about">` exists
  - `<h2 class="section__title" data-i18n="about.title">` header
  - Summary paragraph with `data-i18n="about.summary"`
  - No styling applied
- **Dependencies**: Tasks 1-8 (to understand structure)
- **Time**: 30 min

**Task 10: HTML Markup - About Tech Stack**
- **Description**: Add tech stack highlights (React, Node.js, etc.)
- **File**: index.html (about section)
- **Acceptance Criteria**:
  - List of 5-8 key technologies in grid or inline format
  - Each tech is a `<span>` or `<badge>` with class `tech-badge`
  - Data attributes ready for i18n (optional, can hardcode)
- **Dependencies**: Task 9
- **Time**: 30 min

**Task 11: HTML Markup - About Core Values**
- **Description**: Add core values section (Innovation, Quality, Growth)
- **File**: index.html (about section)
- **Acceptance Criteria**:
  - 3-4 core values listed
  - Each value has title + brief description
  - Structure ready for icons (via CSS before)
- **Dependencies**: Task 9
- **Time**: 30 min

**Task 12: HTML Markup - About Stats**
- **Description**: Add stats (years of experience, companies, projects)
- **File**: index.html (about section)
- **Acceptance Criteria**:
  - Display: 6+ years experience, 3+ companies, 15+ projects
  - Format: Number + label (e.g., "6+ Years of Experience")
  - Ready for CSS counters/animations
- **Dependencies**: Task 9
- **Time**: 30 min

**Task 13: CSS - About Section Layout**
- **Description**: Style about section with grid or flexbox layout
- **File**: css/styles.css (about section)
- **Acceptance Criteria**:
  - 2-column layout on desktop (summary + stats/values)
  - Single column on mobile (320px)
  - Uses CSS Grid or Flexbox
  - Proper spacing with CSS variables
- **Dependencies**: Tasks 9-12
- **Time**: 1 hour

**Task 14: CSS - About Cards & Icons**
- **Description**: Style tech stack badges and value cards
- **File**: css/styles.css (component classes)
- **Acceptance Criteria**:
  - Tech badges: rounded pills with accent color
  - Value cards: glassmorphism style (semi-transparent + blur)
  - Hover effects: subtle scale/shadow
  - Icons: CSS emoji or SVG ready
- **Dependencies**: Task 13
- **Time**: 1 hour

**Task 15: CSS - About Responsive**
- **Description**: Ensure about section responsive at all breakpoints
- **File**: css/styles.css (@media queries)
- **Acceptance Criteria**:
  - Mobile (320px): single column, full-width cards
  - Tablet (768px): 2-column grid
  - Desktop (1024px): 3-column or 2-column with sidebar
  - No horizontal scroll at any width
- **Dependencies**: Tasks 13-14
- **Time**: 1 hour

**Task 16: JavaScript - About Animations (Scroll-Triggered)**
- **Description**: Fade-in animations when about section comes into view
- **File**: js/main.js (Intersection Observer setup)
- **Acceptance Criteria**:
  - About section fades in when scrolled into view (threshold: 0.1)
  - Stagger animation: each card fades in sequentially (50ms delay)
  - Animation duration: 600ms
  - Trigger only once per page load
- **Dependencies**: Tasks 13-14
- **Time**: 1 hour

---

### Section: Experience (Tasks 17-28)

**Task 17: HTML Markup - Experience Section Base**
- **Description**: Create experience section with job list
- **File**: index.html (lines ~130-150)
- **Acceptance Criteria**:
  - `<section id="experience" class="section section--experience">` exists
  - `<h2>` header with "Experience" title
  - Prepare container for 3 job cards
- **Dependencies**: Tasks 9-16 (understand pattern)
- **Time**: 30 min

**Task 18: HTML Markup - Job Card 1: Microsoft**
- **Description**: Add Microsoft Senior Full Stack Developer job card
- **File**: index.html (experience section)
- **Acceptance Criteria**:
  - Company: "Microsoft México"
  - Title: "Senior Full Stack Developer"
  - Dates: "Jan 2021 - Present"
  - Duration: "3+ years" (auto-calculated)
  - Achievements: 3-5 bullet points
  - Technologies: List of tools/languages
  - All fields have data-i18n attributes
- **Dependencies**: Task 17
- **Time**: 45 min

**Task 19: HTML Markup - Job Card 2 & 3: Previous Roles**
- **Description**: Add 2 previous job positions
- **File**: index.html (experience section)
- **Acceptance Criteria**:
  - Job 2 (e.g., "Full Stack Developer" at previous company, 2019-2020)
  - Job 3 (e.g., "Junior Developer" at startup, 2018-2019)
  - All same structure as Job 1
  - i18n attributes ready
- **Dependencies**: Task 17
- **Time**: 1 hour

**Task 20: CSS - Experience Section Layout**
- **Description**: Style experience section with timeline or card layout
- **File**: css/styles.css (experience section)
- **Acceptance Criteria**:
  - Desktop: Card layout (3 cards in row or staggered)
  - Mobile: Single column stack
  - Current role indicator: highlight or badge
  - Timeline connector (optional): vertical line on desktop
- **Dependencies**: Tasks 17-19
- **Time**: 1.5 hours

**Task 21: CSS - Job Card Styling**
- **Description**: Style individual job cards with glassmorphism design
- **File**: css/styles.css (card component)
- **Acceptance Criteria**:
  - Glassmorphism: semi-transparent + backdrop-filter blur
  - Border: subtle light border
  - Hover effect: lift up (transform: translateY(-4px))
  - Company name: accent color
  - Dates: smaller, gray text
- **Dependencies**: Task 20
- **Time**: 1 hour

**Task 22: CSS - Experience Responsive**
- **Description**: Ensure experience section responsive at all breakpoints
- **File**: css/styles.css (@media queries)
- **Acceptance Criteria**:
  - Mobile (320px): single column, full-width cards, timeline hidden
  - Tablet (768px): 2-column grid
  - Desktop (1024px): 3-column or timeline layout
- **Dependencies**: Tasks 20-21
- **Time**: 1 hour

**Task 23: JavaScript - Job Card Expand/Collapse**
- **Description**: Add click-to-expand functionality for job details (optional)
- **File**: js/main.js (click handler)
- **Acceptance Criteria**:
  - Click job card → expand to show full achievements list
  - Click again → collapse back to summary
  - Smooth height transition (max-height animation)
  - Proper ARIA attributes (aria-expanded, aria-controls)
- **Dependencies**: Tasks 20-21
- **Time**: 1 hour

**Task 24: JavaScript - Duration Auto-Calculate**
- **Description**: Calculate and display job duration (months/years)
- **File**: js/main.js (utility function)
- **Acceptance Criteria**:
  - Parse dates from HTML (e.g., "Jan 2021" to JS Date)
  - Calculate difference in months/years
  - Display as "2 years 5 months" or "2.4 years"
  - Handle "Present" as current date
  - Update annually (e.g., "3+ years" → "4+ years")
- **Dependencies**: Tasks 17-19
- **Time**: 1 hour

**Task 25: JavaScript - Experience Scroll Animation**
- **Description**: Animate job cards in on scroll
- **File**: js/main.js (Intersection Observer)
- **Acceptance Criteria**:
  - Cards slide in from left (transform: translateX)
  - Stagger animation: each card 100ms delay
  - Trigger once when scrolled into view
  - Duration: 600ms with ease-out easing
- **Dependencies**: Tasks 20-21
- **Time**: 1 hour

**Task 26: JavaScript - Timeline Connector (Optional)**
- **Description**: Animate vertical timeline line on desktop (nice-to-have)
- **File**: js/main.js (optional animation)
- **Acceptance Criteria**:
  - Desktop only (hidden on mobile)
  - Line grows from top as cards appear
  - Animated with SVG or CSS border
  - Smooth 800ms animation
- **Dependencies**: Task 25
- **Time**: 1 hour (optional, can skip for MVP)

**Task 27: JavaScript - Experience i18n**
- **Description**: Ensure all job data loads via i18n
- **File**: js/i18n.js + lang/*.json
- **Acceptance Criteria**:
  - All job titles have i18n keys (e.g., "experience.job1.title")
  - All company names have i18n keys
  - Achievements list has i18n keys
  - Tech stack has i18n keys (or keep English)
  - Lang files complete with all translations
- **Dependencies**: Tasks 17-19, Task 104 (i18n setup)
- **Time**: 1.5 hours

**Task 28: Testing - Experience Section QA**
- **Description**: Test experience section functionality and styling
- **File**: N/A (manual testing)
- **Acceptance Criteria**:
  - All 3 jobs render with correct data
  - Dates calculate correctly
  - Expand/collapse works smoothly
  - Responsive at 320px, 768px, 1024px
  - Scroll animation triggers correctly
  - Language switching shows translations
- **Dependencies**: All Tasks 17-27
- **Time**: 1 hour

---

## SPRINT 2: HTML Skills + Education + Achievements + Contact (6-8 hours)

### Section: Skills (Tasks 29-42)

**Task 29: HTML Markup - Skills Section Base**
- **Description**: Create skills section with category headers
- **File**: index.html (lines ~200-220)
- **Acceptance Criteria**:
  - `<section id="skills" class="section section--skills">` exists
  - `<h2>` header with "Skills" title
  - 4 category containers: Frontend, Backend, DevOps, Other
  - Each category is a `<div class="skill-category">`
- **Dependencies**: Tasks 1-28
- **Time**: 30 min

**Task 30: HTML Markup - Skill Items with Progress Bars**
- **Description**: Add individual skills with proficiency levels (1-5)
- **File**: index.html (skills section)
- **Acceptance Criteria**:
  - 40+ skills across 4 categories
  - Each skill has: name, proficiency level (1-5), icon/color
  - Progress bar: `<div class="skill-bar"><div class="skill-bar__fill" style="width: 0%;"></div></div>`
  - Proficiency determines width (20%, 40%, 60%, 80%, 100%)
  - Data attributes for i18n
- **Dependencies**: Task 29
- **Time**: 1.5 hours

**Task 31: CSS - Skills Section Layout**
- **Description**: Style skills grid with category grouping
- **File**: css/styles.css (skills section)
- **Acceptance Criteria**:
  - Desktop: 4-column grid (1 per category) or 2x2 grid
  - Mobile: Single column stack
  - Category headers bold/prominent
  - Skills listed in rows within category
- **Dependencies**: Tasks 29-30
- **Time**: 1 hour

**Task 32: CSS - Skill Bar Styling**
- **Description**: Style progress bars with gradient and animations
- **File**: css/styles.css (skill-bar component)
- **Acceptance Criteria**:
  - Bar background: dark gray (var(--color-gray-dark))
  - Bar fill: gradient (accent → cyan)
  - Height: 8px, border-radius: 4px
  - Initial width: 0% (for animation)
  - No animations triggered yet (Task 33 handles)
- **Dependencies**: Task 31
- **Time**: 1 hour

**Task 33: CSS - Skills Responsive**
- **Description**: Ensure skills section responsive at all breakpoints
- **File**: css/styles.css (@media queries)
- **Acceptance Criteria**:
  - Mobile (320px): single column, full-width category blocks
  - Tablet (768px): 2-column grid
  - Desktop (1024px): 4-column or 2x2 grid
  - No horizontal scroll
- **Dependencies**: Tasks 31-32
- **Time**: 1 hour

**Task 34: JavaScript - Skill Bar Animation on Scroll**
- **Description**: Animate skill bars to their proficiency level on scroll
- **File**: js/main.js (Intersection Observer + skill animation)
- **Acceptance Criteria**:
  - When skills section scrolls into view: bars animate from 0% to target width
  - Duration: 800ms with ease-out easing
  - Stagger: each bar starts 50ms after previous
  - Trigger once per page load
  - Uses requestAnimationFrame for smooth 60fps
- **Dependencies**: Tasks 31-32
- **Time**: 1.5 hours

**Task 35: JavaScript - Skill Filtering (Optional)**
- **Description**: Add optional filter/search for skills (nice-to-have)
- **File**: js/main.js (optional feature)
- **Acceptance Criteria**:
  - Search box above skills section
  - Type skill name → filter to matching skills
  - Show X of Y skills when filtered
  - Clear button to reset
- **Dependencies**: Task 34
- **Time**: 1.5 hours (optional, can skip for MVP)

**Task 36: JavaScript - Skills i18n**
- **Description**: Load all skill names from translation files
- **File**: lang/es.json, lang/en.json
- **Acceptance Criteria**:
  - Skill category names have i18n keys
  - Individual skill names can have i18n keys or hardcode English
  - All category names translated (Frontend/Frontend, Backend/Backend, etc.)
- **Dependencies**: Tasks 29-30, Task 104
- **Time**: 1 hour

**Task 37: Testing - Skills Section QA**
- **Description**: Test skills section functionality and styling
- **File**: N/A (manual testing)
- **Acceptance Criteria**:
  - All 40+ skills visible and correctly categorized
  - Proficiency bars animate smoothly on scroll
  - Responsive at all breakpoints
  - Language switching shows translated category names
  - No jank or layout shift during animation
- **Dependencies**: All Tasks 29-36
- **Time**: 1 hour

---

### Section: Education (Tasks 38-44)

**Task 38: HTML Markup - Education Section Base**
- **Description**: Create education section with degree and certifications
- **File**: index.html (lines ~280-300)
- **Acceptance Criteria**:
  - `<section id="education" class="section section--education">` exists
  - `<h2>` header with "Education" title
  - Separate container for degree and certifications
- **Dependencies**: Tasks 29-37
- **Time**: 30 min

**Task 39: HTML Markup - Degree Card**
- **Description**: Add Computer Systems Engineering degree
- **File**: index.html (education section)
- **Acceptance Criteria**:
  - Degree: Computer Systems Engineering
  - University name (e.g., "Universidad de Occidente")
  - Graduation date: (e.g., "June 2018")
  - GPA or honors (if applicable)
  - All fields have data-i18n attributes
- **Dependencies**: Task 38
- **Time**: 30 min

**Task 40: HTML Markup - Certification Cards**
- **Description**: Add 5 professional certifications
- **File**: index.html (education section)
- **Acceptance Criteria**:
  - 5 certifications with: name, issuer, date, link
  - Sample: AWS Solutions Architect, Docker Certified, etc.
  - Each card structure same as degree
  - Links to certification badges/pages
- **Dependencies**: Task 38
- **Time**: 1 hour

**Task 41: CSS - Education Section Layout**
- **Description**: Style education timeline or card layout
- **File**: css/styles.css (education section)
- **Acceptance Criteria**:
  - Desktop: Degree top, certifications below in 2-3 column grid
  - Mobile: Single column stack
  - Timeline connector (optional): vertical line
  - Degree emphasized with larger card
- **Dependencies**: Tasks 38-40
- **Time**: 1 hour

**Task 42: CSS - Education Responsive**
- **Description**: Ensure education section responsive
- **File**: css/styles.css (@media queries)
- **Acceptance Criteria**:
  - Mobile: single column, full-width cards
  - Tablet: 2-column certification grid
  - Desktop: 3-column certification grid or 2-column + degree on side
  - No horizontal scroll
- **Dependencies**: Task 41
- **Time**: 1 hour

**Task 43: JavaScript - Education Date Formatting**
- **Description**: Format and display education dates consistently
- **File**: js/main.js (date formatter)
- **Acceptance Criteria**:
  - Dates formatted as "Jun 2018" or "June 2018"
  - Consistent format across all education items
  - Handles different date formats in HTML (e.g., "2018-06")
- **Dependencies**: Tasks 38-40
- **Time**: 30 min

**Task 44: Testing - Education Section QA**
- **Description**: Test education section functionality and styling
- **File**: N/A (manual testing)
- **Acceptance Criteria**:
  - All 6 items (1 degree + 5 certs) visible and styled
  - Responsive at all breakpoints
  - Dates formatted correctly
  - External links work and open in new tabs
  - Language switching works (if i18n applied)
- **Dependencies**: All Tasks 38-43
- **Time**: 45 min

---

### Section: Achievements (Tasks 45-51)

**Task 45: HTML Markup - Achievements Section Base**
- **Description**: Create achievements/awards section
- **File**: index.html (lines ~360-380)
- **Acceptance Criteria**:
  - `<section id="achievements" class="section section--achievements">` exists
  - `<h2>` header with "Achievements" title
  - Container for 5-6 achievement cards
- **Dependencies**: Tasks 38-44
- **Time**: 30 min

**Task 46: HTML Markup - Achievement Cards**
- **Description**: Add 5-6 achievement/award items with metrics
- **File**: index.html (achievements section)
- **Acceptance Criteria**:
  - Each achievement has: title, metric/number, description, date
  - Example: "Led 3 high-impact projects", "Mentored 5+ junior developers"
  - Structure: number prominent, title secondary, description tertiary
  - Data-i18n attributes on all text
- **Dependencies**: Task 45
- **Time**: 45 min

**Task 47: CSS - Achievements Section Layout**
- **Description**: Style achievements grid with metric emphasis
- **File**: css/styles.css (achievements section)
- **Acceptance Criteria**:
  - Desktop: 3-column grid
  - Mobile: Single column
  - Large prominent number (font-size: 2-3rem)
  - Small title and description below number
  - Icon or badge per achievement (emoji or icon)
- **Dependencies**: Tasks 45-46
- **Time**: 1 hour

**Task 48: CSS - Achievement Card Animations**
- **Description**: Add scale/glow effect on hover and scroll
- **File**: css/styles.css (achievement component)
- **Acceptance Criteria**:
  - Hover: scale up slightly (1.05), glow effect
  - Scroll-in: fade in + scale from smaller
  - Duration: 600ms
  - Smooth transitions
- **Dependencies**: Task 47
- **Time**: 1 hour

**Task 49: CSS - Achievements Responsive**
- **Description**: Ensure achievements responsive at all breakpoints
- **File**: css/styles.css (@media queries)
- **Acceptance Criteria**:
  - Mobile: single column, full-width cards
  - Tablet: 2-column grid
  - Desktop: 3-column grid
  - No horizontal scroll
- **Dependencies**: Tasks 47-48
- **Time**: 45 min

**Task 50: JavaScript - Achievements Scroll Animation**
- **Description**: Animate achievement cards in on scroll
- **File**: js/main.js (Intersection Observer)
- **Acceptance Criteria**:
  - Cards scale in (from 0.8 to 1.0) when scrolled into view
  - Stagger: each card 100ms delay
  - Trigger once per page load
  - Duration: 600ms with ease-out
- **Dependencies**: Tasks 47-48
- **Time**: 1 hour

**Task 51: Testing - Achievements Section QA**
- **Description**: Test achievements section
- **File**: N/A (manual testing)
- **Acceptance Criteria**:
  - All 5-6 achievements visible and styled
  - Scroll animation triggers smoothly
  - Hover effects work as expected
  - Responsive at all breakpoints
  - No layout shift or jank
- **Dependencies**: All Tasks 45-50
- **Time**: 45 min

---

### Section: Projects (Tasks 52-67)

**Task 52: HTML Markup - Projects Section Base**
- **Description**: Create projects showcase section
- **File**: index.html (lines ~440-460)
- **Acceptance Criteria**:
  - `<section id="projects" class="section section--projects">` exists
  - `<h2>` header with "Projects" title
  - Container for 5 project cards
- **Dependencies**: Tasks 45-51
- **Time**: 30 min

**Task 53: HTML Markup - Project Card 1-5**
- **Description**: Add 5 portfolio projects with full details
- **File**: index.html (projects section)
- **Acceptance Criteria**:
  - Each project has: name, description, technologies, features, images, GitHub link, demo link
  - Image in picture element (WebP + JPG)
  - Technology badges/tags (5-8 per project)
  - Feature list (3-5 bullet points)
  - Links to GitHub repo and live demo
  - Role/contribution statement
  - Impact metric (if applicable)
  - All text has data-i18n attributes
- **Dependencies**: Task 52
- **Time**: 2 hours

**Task 54: CSS - Projects Grid Layout**
- **Description**: Style projects grid with image + content layout
- **File**: css/styles.css (projects section)
- **Acceptance Criteria**:
  - Desktop: 2-column grid (image on left/right, alternating)
  - Tablet: 2-column grid with image on top
  - Mobile: Single column (image on top, content below)
  - Image: responsive, maintains aspect ratio
- **Dependencies**: Tasks 52-53
- **Time**: 1 hour

**Task 55: CSS - Project Card Styling**
- **Description**: Style individual project cards with hover effects
- **File**: css/styles.css (project-card component)
- **Acceptance Criteria**:
  - Image hover: zoom 1.1x, 300ms transition
  - Card hover: subtle lift (transform: translateY(-4px))
  - Technology badges: small pills with color coding
  - Feature list: bullet points with accent color
  - Links: accent color with hover underline
- **Dependencies**: Task 54
- **Time**: 1 hour

**Task 56: CSS - Projects Responsive**
- **Description**: Ensure projects responsive at all breakpoints
- **File**: css/styles.css (@media queries)
- **Acceptance Criteria**:
  - Mobile (320px): single column, image on top
  - Tablet (768px): 2-column grid with image on top
  - Desktop (1024px): 2-column grid with alternating image placement
  - No horizontal scroll
- **Dependencies**: Tasks 54-55
- **Time**: 1 hour

**Task 57: JavaScript - Project Image Lightbox (Optional)**
- **Description**: Add optional image lightbox/modal (nice-to-have)
- **File**: js/main.js (optional feature)
- **Acceptance Criteria**:
  - Click project image → open in full-screen modal
  - Close button or click outside → close modal
  - Navigate between project images (if multiple)
  - Smooth transitions
  - Keyboard support (Escape to close)
- **Dependencies**: Tasks 54-55
- **Time**: 1.5 hours (optional, can skip for MVP)

**Task 58: JavaScript - Projects Scroll Animation**
- **Description**: Animate project cards in on scroll
- **File**: js/main.js (Intersection Observer)
- **Acceptance Criteria**:
  - Cards slide in from left/right (alternating)
  - Stagger: each card 100ms delay
  - Duration: 600ms with ease-out
  - Trigger once per page load
- **Dependencies**: Tasks 54-55
- **Time**: 1 hour

**Task 59: JavaScript - Project Filtering (Optional)**
- **Description**: Add optional filter by technology (nice-to-have)
- **File**: js/main.js (optional feature)
- **Acceptance Criteria**:
  - Filter buttons for: React, Node.js, Python, etc.
  - Click filter → show only projects with that tech
  - "All" filter shows all projects
  - Smooth fade in/out on filter change
- **Dependencies**: Task 58
- **Time**: 1.5 hours (optional, can skip for MVP)

**Task 60: Testing - Projects Section QA**
- **Description**: Test projects section functionality
- **File**: N/A (manual testing)
- **Acceptance Criteria**:
  - All 5 projects visible with complete information
  - Images load and display correctly
  - Links work and open in new tabs
  - Hover and scroll animations smooth
  - Responsive at all breakpoints
  - No console errors or warnings
- **Dependencies**: All Tasks 52-59
- **Time**: 1 hour

---

### Section: Contact (Tasks 61-68)

**Task 61: HTML Markup - Contact Section Base**
- **Description**: Create contact/footer section
- **File**: index.html (lines ~560-580)
- **Acceptance Criteria**:
  - `<section id="contact" class="section section--contact">` exists
  - `<h2>` header with "Contact" title
  - Container for contact methods
- **Dependencies**: Tasks 52-60
- **Time**: 30 min

**Task 62: HTML Markup - Contact Methods**
- **Description**: Add email, social links, and CTA message
- **File**: index.html (contact section)
- **Acceptance Criteria**:
  - Email link: `<a href="mailto:...">` with copy-to-clipboard button
  - Social links: GitHub, LinkedIn, Twitter (same as hero)
  - CTA message: "Let's work together" or similar
  - CV download link (updates with language)
  - All text has data-i18n attributes
- **Dependencies**: Task 61
- **Time**: 45 min

**Task 63: CSS - Contact Section Layout**
- **Description**: Style contact section as footer area
- **File**: css/styles.css (contact section)
- **Acceptance Criteria**:
  - Center-aligned text
  - CTA message prominent (large font)
  - Email and social links below
  - Footer tagline and copyright at bottom
  - Different background color (footer-specific)
- **Dependencies**: Tasks 61-62
- **Time**: 1 hour

**Task 64: CSS - Contact Responsive**
- **Description**: Ensure contact section responsive
- **File**: css/styles.css (@media queries)
- **Acceptance Criteria**:
  - Mobile: full-width buttons and links, stacked vertically
  - Tablet: 2-column or centered layout
  - Desktop: centered single column or horizontal layout
  - No horizontal scroll
- **Dependencies**: Task 63
- **Time**: 45 min

**Task 65: JavaScript - Email Copy-to-Clipboard**
- **Description**: Implement email copy functionality
- **File**: js/main.js (email handler)
- **Acceptance Criteria**:
  - Click email button → copy "contacto@codebylucio.dev" to clipboard
  - Show success message or toast (e.g., "Copied!")
  - Fallback: select text if clipboard API unavailable
  - Toast disappears after 3 seconds
- **Dependencies**: Tasks 61-62
- **Time**: 1 hour

**Task 66: JavaScript - Contact Form (Optional)**
- **Description**: Add optional contact form (nice-to-have)
- **File**: js/main.js (optional feature)
- **Acceptance Criteria**:
  - Form fields: name, email, subject, message
  - Validation: email format, non-empty fields
  - Submit: send via Formspree, Basin, or similar
  - Success message after submit
  - Accessible form labels and error messages
- **Dependencies**: Task 65
- **Time**: 2 hours (optional, can skip for MVP)

**Task 67: Testing - Contact Section QA**
- **Description**: Test contact section functionality
- **File**: N/A (manual testing)
- **Acceptance Criteria**:
  - Email copy works and shows confirmation
  - Social links open in new tabs
  - Responsive at all breakpoints
  - Contact form (if added) validates correctly
  - Language switching updates CTA message
- **Dependencies**: All Tasks 61-66
- **Time**: 45 min

---

## SPRINT 3: CSS + Navigation + Core Design (12 hours)

### Navigation & Layout (Tasks 68-79)

**Task 68: CSS - Main Navigation Bar**
- **Description**: Style header navigation with sticky positioning
- **File**: css/styles.css (nav component)
- **Acceptance Criteria**:
  - Header sticky on scroll (position: sticky)
  - Background: semi-transparent with blur (glassmorphism)
  - Nav links: horizontal list on desktop, hidden on mobile
  - Logo or branding (optional)
  - Proper spacing using CSS variables
- **Time**: 1 hour

**Task 69: CSS - Active Nav Link Highlighting**
- **Description**: Highlight current section in navigation
- **File**: css/styles.css (nav component)
- **Acceptance Criteria**:
  - Current section's nav link highlighted (color or underline)
  - Updates as user scrolls (scroll-spy)
  - Smooth transition (300ms)
- **Time**: 1 hour

**Task 70: CSS - Back-to-Top Button**
- **Description**: Style back-to-top button (bottom-right corner)
- **File**: css/styles.css (button component)
- **Acceptance Criteria**:
  - Appears only when scrolled >300px down
  - Fixed positioning in bottom-right
  - Icon: arrow or ↑ symbol
  - Hover effect: glow or scale
  - Smooth fade in/out (300ms)
- **Time**: 1 hour

**Task 71: CSS - Mobile Hamburger Menu**
- **Description**: Style hamburger menu and mobile nav drawer
- **File**: css/styles.css (mobile nav)
- **Acceptance Criteria**:
  - Hamburger icon (3 lines) visible on mobile (<768px)
  - Click → nav drawer slides in from left/top
  - Overlay behind drawer with semi-transparent background
  - Close button or click outside to close
  - Full-height drawer with nav links stacked
  - Smooth transitions (300ms)
- **Time**: 1.5 hours

**Task 72: CSS - Focus States & Accessibility**
- **Description**: Add visible focus states for keyboard navigation
- **File**: css/styles.css (global focus styles)
- **Acceptance Criteria**:
  - All interactive elements have visible focus outline
  - Focus outline color: accent color
  - Outline width: 2px
  - Outline offset: 2px for clarity
  - Works with keyboard Tab navigation
- **Time**: 1 hour

**Task 73: CSS - Global Animations**
- **Description**: Define global animation keyframes
- **File**: css/styles.css (@keyframes section)
- **Acceptance Criteria**:
  - Fade-in: opacity 0 → 1
  - Slide-left: translateX -50px → 0
  - Slide-right: translateX +50px → 0
  - Scale-up: scale(0.8) → scale(1.0)
  - Glow: box-shadow animation
  - All animations use will-change for performance
- **Time**: 1 hour

**Task 74: CSS - Print Styles**
- **Description**: Optimize CSS for PDF print
- **File**: css/styles.css (@media print)
- **Acceptance Criteria**:
  - Hide nav, buttons, footer on print
  - Show all content (no hidden elements)
  - Adjust colors for print (dark text on white)
  - Remove animations and transitions
  - Proper page breaks between sections
  - Readable font sizes (12px+ for body)
- **Time**: 1 hour

**Task 75: CSS - Dark Mode Support (Optional)**
- **Description**: Add optional dark/light theme toggle (nice-to-have)
- **File**: css/styles.css (CSS variables + media query)
- **Acceptance Criteria**:
  - CSS variables for both themes
  - prefers-color-scheme media query for system preference
  - Optional theme toggle button
  - localStorage persistence
  - Smooth transition between themes
- **Time**: 2 hours (optional, can skip for MVP)

**Task 76: CSS - File Optimization**
- **Description**: Minify CSS and optimize for production
- **File**: css/styles.css
- **Acceptance Criteria**:
  - CSS minified (no impact on functionality, just size)
  - Unused CSS removed (optional, can use purge tools post-MVP)
  - CSS file size: <50KB
  - No render-blocking CSS (all in <head> via <link>)
- **Time**: 30 min

**Task 77: CSS - Utility Classes (Optional)**
- **Description**: Create utility classes for common patterns (optional)
- **File**: css/styles.css (utility section)
- **Acceptance Criteria**:
  - Margin utilities: m-1, m-2, m-3 (for spacing)
  - Padding utilities: p-1, p-2, p-3
  - Text utilities: text-center, text-sm, text-bold
  - Display utilities: hidden, block, flex
  - Optional: helps with rapid styling
- **Time**: 1 hour (optional)

**Task 78: CSS - Responsive Utility Helpers**
- **Description**: Create responsive display utilities (optional)
- **File**: css/styles.css (responsive utilities)
- **Acceptance Criteria**:
  - hide-mobile, hide-tablet, hide-desktop classes
  - show-mobile, show-tablet, show-desktop classes
  - Optional: simplifies responsive hiding of elements
- **Time**: 30 min (optional)

**Task 79: Testing - CSS & Layout QA**
- **Description**: Test all CSS and layout functionality
- **File**: N/A (manual testing)
- **Acceptance Criteria**:
  - All sections styled correctly
  - Nav sticky and working
  - Mobile menu functional
  - Responsive at all breakpoints (320px, 768px, 1024px)
  - Keyboard focus visible on all interactive elements
  - Print preview looks clean
  - No layout shift or jank
- **Time**: 1.5 hours

---

## SPRINT 4: JavaScript Core Functionality (8 hours)

**Task 80: JavaScript - DOM Utilities & Helpers**
- **Description**: Create reusable DOM utility functions
- **File**: js/main.js (utilities section)
- **Acceptance Criteria**:
  - qs(selector) - querySelector shorthand
  - qsa(selector) - querySelectorAll shorthand
  - on(el, event, handler) - addEventListener shorthand
  - addClass/removeClass/toggleClass helpers
  - attr() helper for getting/setting attributes
- **Time**: 1 hour

**Task 81: JavaScript - Smooth Scroll Implementation**
- **Description**: Implement 500ms ease-out smooth scroll
- **File**: js/main.js (scroll function)
- **Acceptance Criteria**:
  - Custom smooth scroll function (500ms duration)
  - Ease-out easing function (not linear)
  - Uses requestAnimationFrame for 60fps
  - Fallback to instant scroll if rAF unavailable
  - Works with nav links and back-to-top button
- **Time**: 1.5 hours

**Task 82: JavaScript - Intersection Observer Setup**
- **Description**: Setup Intersection Observer for scroll animations
- **File**: js/main.js (observer configuration)
- **Acceptance Criteria**:
  - Observer with threshold: [0.1]
  - Observes all .section elements
  - Fires animation when element enters viewport
  - Unobserves element after animation to prevent re-trigger
  - Polyfill or fallback check included
- **Time**: 1 hour

**Task 83: JavaScript - Scroll-Spy / Active Link**
- **Description**: Implement scroll-spy to highlight active nav link
- **File**: js/main.js (scroll-spy function)
- **Acceptance Criteria**:
  - Listen to scroll event (debounced)
  - Detect which section is in viewport
  - Update active nav link to match section
  - Smooth transition (300ms)
  - Works with all 8 sections
- **Time**: 1.5 hours

**Task 84: JavaScript - Back-to-Top Visibility**
- **Description**: Show/hide back-to-top button based on scroll position
- **File**: js/main.js (scroll event handler)
- **Acceptance Criteria**:
  - Show when scrolled >300px down
  - Hide when near top
  - Smooth fade in/out
  - Click back-to-top → smooth scroll to top
  - No jank on scroll
- **Time**: 1 hour

**Task 85: JavaScript - Debounce & Throttle Utilities**
- **Description**: Create debounce/throttle functions for scroll events
- **File**: js/main.js (utility functions)
- **Acceptance Criteria**:
  - Debounce function to limit function calls
  - Throttle function to rate-limit
  - Apply to scroll events (prevent excessive calls)
  - Improves performance on scroll animations
- **Time**: 1 hour

**Task 86: JavaScript - Event Delegation**
- **Description**: Use event delegation for dynamic elements
- **File**: js/main.js (event handlers)
- **Acceptance Criteria**:
  - Single handler for multiple similar elements
  - Delegate click events on nav links
  - Delegate click on skill bars or project cards
  - Improves memory efficiency
- **Time**: 1 hour

**Task 87: JavaScript - Error Handling & Graceful Degradation**
- **Description**: Add error handling for features that might fail
- **File**: js/main.js (error handling)
- **Acceptance Criteria**:
  - Try-catch blocks around risky code
  - Console.error for debugging
  - Graceful fallbacks (e.g., instant scroll if smooth scroll fails)
  - No broken features if JS partially fails
- **Time**: 1 hour

**Task 88: JavaScript - Keyboard Navigation Support**
- **Description**: Enable keyboard navigation (Tab, Enter, Escape)
- **File**: js/main.js (keyboard handler)
- **Acceptance Criteria**:
  - Tab key: navigate through interactive elements
  - Enter key: activate buttons and links
  - Escape key: close mobile menu
  - Arrow keys (optional): navigate between sections
  - Proper focus management
- **Time**: 1 hour

---

## SPRINT 5: i18n System (6 hours)

**Task 89: JavaScript - i18n Initialization**
- **Description**: Create i18n object and initialize translation system
- **File**: js/i18n.js (core setup)
- **Acceptance Criteria**:
  - I18N object with methods: init(), get(), switch(), apply()
  - Current language: detect from localStorage or URL param
  - Translations object to store loaded translations
  - initialize() fetches lang/*.json files
- **Time**: 1 hour

**Task 90: JavaScript - Translation Loader**
- **Description**: Load translation files via Fetch API
- **File**: js/i18n.js (fetch handler)
- **Acceptance Criteria**:
  - Fetch lang/es.json and lang/en.json
  - Parse JSON and store in memory
  - Error handling if files fail to load
  - Fallback to English if Spanish unavailable
  - Async/await pattern for clean code
- **Time**: 1 hour

**Task 91: JavaScript - Language Switching**
- **Description**: Implement language toggle and content update
- **File**: js/i18n.js (switch method)
- **Acceptance Criteria**:
  - Click language toggle button → switch ES ↔ EN
  - Update all [data-i18n] elements with new translations
  - Update document.documentElement.lang attribute
  - Save to localStorage ("lang" key)
  - Update CV download link (CV_ES.pdf vs CV_EN.pdf)
- **Time**: 1 hour

**Task 92: JavaScript - localStorage Persistence**
- **Description**: Persist language preference across sessions
- **File**: js/i18n.js (storage)
- **Acceptance Criteria**:
  - Save language choice to localStorage
  - Restore on page reload
  - Clear on browser cache clear (expected behavior)
  - Graceful fallback if localStorage unavailable (private mode)
- **Time**: 30 min

**Task 93: JavaScript - URL Parameter Override**
- **Description**: Allow language override via ?lang=en parameter
- **File**: js/i18n.js (URL parser)
- **Acceptance Criteria**:
  - Check URL for ?lang=en or ?lang=es on init
  - Override localStorage if parameter present
  - Save parameter choice to localStorage
  - Useful for shared links (e.g., "Visit in English")
- **Time**: 45 min

**Task 94: JavaScript - i18n Error Handling**
- **Description**: Handle missing translations gracefully
- **File**: js/i18n.js (error handling)
- **Acceptance Criteria**:
  - If translation key missing: show key or fallback text
  - Log missing keys to console for debugging
  - Don't break page if translation fails
  - Fallback to English key if not in current language
- **Time**: 45 min

**Task 95: Testing - i18n System QA**
- **Description**: Test language switching and persistence
- **File**: N/A (manual testing)
- **Acceptance Criteria**:
  - Language toggles correctly (ES ↔ EN)
  - All visible text updates instantly
  - Language persists after page reload
  - ?lang=en parameter works
  - CV download link updates with language
  - No console errors
  - Works in private/incognito mode (fallback gracefully)
- **Time**: 1 hour

---

## SPRINT 6: Assets & Optimization (4 hours, can be parallel)

**Task 96: Images - Profile Photo Optimization**
- **Description**: Compress and convert profile photo to WebP
- **File**: assets/images/profile.jpg + profile.webp
- **Acceptance Criteria**:
  - WebP version: <100KB at full quality
  - JPG fallback: <150KB
  - Dimensions: 300x300 px (adjust for retina: 600x600)
  - Use TinyPNG.com for compression
  - Use Convertio.co or ImageMagick for WebP conversion
- **Time**: 30 min

**Task 97: Images - Hero Background Optimization**
- **Description**: Compress hero background image
- **File**: assets/images/hero-bg.jpg + hero-bg.webp
- **Acceptance Criteria**:
  - WebP: <300KB
  - JPG fallback: <400KB
  - Dimensions: 1920px wide (adjust for mobile versions)
  - Optimize for different screen sizes (optional: srcset)
- **Time**: 30 min

**Task 98: Images - Project Screenshots Optimization**
- **Description**: Compress and prepare 5+ project images
- **File**: assets/images/project-*.jpg + project-*.webp
- **Acceptance Criteria**:
  - Each image: <200KB (WebP) and <250KB (JPG)
  - Consistent dimensions (e.g., 600x400 px)
  - All converted to WebP with JPG fallback
  - Optimize for lazy loading
- **Time**: 45 min

**Task 99: Icons - SVG Icons Optimization**
- **Description**: Minify and optimize SVG icons
- **File**: assets/icons/*.svg
- **Acceptance Criteria**:
  - GitHub, LinkedIn, Twitter, etc. icons
  - Each <5KB (minified)
  - Use SVGMinify or similar tool
  - Inline SVG or file reference (both acceptable)
  - Color coded (can use CSS to recolor)
- **Time**: 30 min

**Task 100: PDF Files - Generate & Optimize CVs**
- **Description**: Create PDF versions of CV (ES & EN)
- **File**: assets/docs/CV_ES.pdf, CV_EN.pdf
- **Acceptance Criteria**:
  - Both PDFs <500KB
  - Professional layout matching portfolio
  - All contact info included
  - Use PDF generator: Figma export, Chrome print → PDF, or tool like wkhtmltopdf
  - Include download links in contact section
- **Time**: 1 hour

**Task 101: Favicon - Generate & Link**
- **Description**: Create favicon and link in HTML
- **File**: assets/favicon.ico or favicon.png + index.html
- **Acceptance Criteria**:
  - 32x32 px PNG or ICO file
  - <20KB
  - Matches brand colors
  - Add <link rel="icon"> to HTML
  - Test: favicon appears in browser tab
- **Time**: 30 min

**Task 102: OG Images - Social Sharing**
- **Description**: Create Open Graph image for social sharing
- **File**: assets/og-image.jpg
- **Acceptance Criteria**:
  - 1200x630 px (standard OG size)
  - <200KB
  - Includes name, title, and key visual
  - Update og:image meta tag in HTML
  - Test on Twitter card validator
- **Time**: 45 min

**Task 103: Lazy Loading - Image Attributes**
- **Description**: Add lazy loading attributes to images
- **File**: index.html
- **Acceptance Criteria**:
  - Add `loading="lazy"` to all images
  - First image above fold: `loading="eager"`
  - Use picture elements with srcset (optional for HD displays)
  - Test: images load as you scroll
- **Time**: 30 min

**Task 104: Total Site Size Verification**
- **Description**: Verify total site is <2MB
- **File**: N/A (verification task)
- **Acceptance Criteria**:
  - HTML: <50KB
  - CSS: <50KB
  - JavaScript: <30KB
  - All images: <1.5MB combined
  - PDFs: <1MB combined
  - Total: <2MB
  - Use DevTools Network tab to measure
- **Time**: 30 min

---

## SPRINT 7: Testing & QA (8 hours)

**Task 105: Lighthouse - Performance Audit**
- **Description**: Run Lighthouse and fix performance issues
- **File**: N/A (auditing)
- **Acceptance Criteria**:
  - Performance score: ≥90
  - FCP (First Contentful Paint): <1.5s
  - LCP (Largest Contentful Paint): <2.5s
  - CLS (Cumulative Layout Shift): <0.1
  - Use Chrome DevTools Lighthouse tab
  - Fix issues (minify, compress, lazy load)
- **Time**: 2 hours

**Task 106: Lighthouse - Accessibility Audit**
- **Description**: Run Lighthouse and fix accessibility issues
- **File**: N/A (auditing)
- **Acceptance Criteria**:
  - Accessibility score: ≥90
  - No contrast issues (4.5:1 minimum)
  - All form fields labeled
  - Proper heading hierarchy
  - ARIA labels on icons
  - Use WebAIM contrast checker
- **Time**: 1.5 hours

**Task 107: Lighthouse - Best Practices Audit**
- **Description**: Run Lighthouse Best Practices check
- **File**: N/A (auditing)
- **Acceptance Criteria**:
  - Best Practices score: ≥90
  - No deprecated APIs
  - HTTPS everywhere
  - Proper error handling
  - No console errors/warnings
- **Time**: 1 hour

**Task 108: Lighthouse - SEO Audit**
- **Description**: Run Lighthouse SEO check
- **File**: N/A (auditing)
- **Acceptance Criteria**:
  - SEO score: ≥90
  - Meta description present
  - Viewport tag set
  - Mobile-friendly
  - Open Graph tags correct
- **Time**: 1 hour

**Task 109: Cross-Browser Testing**
- **Description**: Test site on multiple browsers
- **File**: N/A (testing)
- **Acceptance Criteria**:
  - Chrome (latest): fully functional
  - Firefox (latest): fully functional
  - Safari (latest): fully functional
  - Edge (latest): fully functional
  - Mobile browsers: iOS Safari, Chrome Android
  - No visual differences
  - No console errors
- **Time**: 1.5 hours

**Task 110: Accessibility Testing - Screen Reader**
- **Description**: Test with screen reader (NVDA or JAWS)
- **File**: N/A (testing)
- **Acceptance Criteria**:
  - Screen reader announces all headings
  - All links and buttons labeled correctly
  - Form inputs have associated labels
  - ARIA landmarks present
  - No weird announcements or skipped content
- **Time**: 1 hour

**Task 111: Manual Functionality Testing**
- **Description**: Test all interactive features manually
- **File**: N/A (testing)
- **Acceptance Criteria**:
  - All nav links scroll smoothly to sections
  - Language toggle switches ES ↔ EN
  - CV downloads work (both ES and EN)
  - Email copy button works
  - Mobile menu opens/closes
  - Back-to-top button appears/disappears
  - External links open in new tabs
  - Form (if present) validates correctly
- **Time**: 1 hour

**Task 112: Responsiveness Testing**
- **Description**: Test responsive design at all breakpoints
- **File**: N/A (testing)
- **Acceptance Criteria**:
  - 320px (mobile): text readable, no horizontal scroll
  - 480px (mobile landscape): proper layout
  - 768px (tablet): proper 2-column layout
  - 1024px (desktop): proper 3+ column layout
  - No layout shift at any width
  - Touch targets ≥44px on mobile
- **Time**: 1.5 hours

---

## SPRINT 8: Deployment (1 hour)

**Task 113: Git Workflow - Feature Branch**
- **Description**: Ensure working on feature branch
- **File**: N/A (git)
- **Acceptance Criteria**:
  - Branch: `1-portfolio-implementation`
  - All changes committed with descriptive messages
  - No uncommitted changes
  - Ready to push to remote
- **Time**: 15 min

**Task 114: Git - Final Commit**
- **Description**: Create comprehensive final commit
- **File**: N/A (git commit)
- **Acceptance Criteria**:
  - Commit message summarizes all changes
  - References spec requirement FR-001 through FR-020
  - Includes phase completed (Phase 1-6)
  - Covers all deliverables (HTML, CSS, JS, i18n, assets)
- **Time**: 15 min

**Task 115: Git - Push & PR**
- **Description**: Push to remote and create pull request
- **File**: N/A (git)
- **Acceptance Criteria**:
  - Push to `origin/1-portfolio-implementation`
  - Create PR to merge into `main`
  - PR description includes test results and Lighthouse scores
  - All CI checks pass (if configured)
- **Time**: 15 min

**Task 116: GitHub Pages - Configuration**
- **Description**: Enable and configure GitHub Pages
- **File**: N/A (GitHub settings)
- **Acceptance Criteria**:
  - Settings → Pages → Source: `main` branch, root folder
  - Site deployed to `https://username.github.io/LinkedCV`
  - Test: visit URL and see live site
  - Update README with deployment info
- **Time**: 15 min

---

## Summary

- **Total Tasks**: 156
- **Total Hours**: 43-63 (depending on optional features)
- **MVP Timeline**: 40-60 hours (single developer)
- **Critical Path**: HTML → CSS → JS → Testing → Deploy
- **Parallelizable**: Assets, i18n translations, mobile design refinement

**Next Steps**: 
1. Begin Sprint 1 (HTML markup)
2. Follow task dependencies
3. Test frequently to catch issues early
4. Reference quickstart.md for code templates
5. Reference spec.md for acceptance criteria