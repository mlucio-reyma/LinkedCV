<!--
## SYNC IMPACT REPORT
Date: 2026-02-12
Operation: Initial Constitution Ratification for LinkedCV Project

### Constitution Version Change
Old: N/A (initial creation)
New: 1.0.0

### Core Principles
✅ I. Pure Static Architecture (NEW) - Enforces HTML5/CSS3/JS-only, no build process
✅ II. Bilingual-First Design (NEW) - Mandates ES/EN support with localStorage
✅ III. Professional Visual Excellence (NEW) - Sets design standards and color palette
✅ IV. Optimized Performance & Accessibility (NEW) - Lighthouse targets and WCAG 2.1 AA
✅ V. Content Structure & Completeness (NEW) - Defines 8 required sections

### New Sections
✅ Technical Constraints - File structure, size limits, asset optimization
✅ Development Workflow & Quality Gates - Testing, deployment, code quality standards
✅ Governance - Amendment process and version bumping rules

### Template Synchronization Status
⚠️ plan-template.md - Needs update:
   - Constitution Check section must reference Principles I-V
   - Technical Context: Update "Language/Version" to "HTML5/CSS3/Vanilla JS"
   - Project Type: Change to "web-static" (single-page, client-side only)
   - Performance Goals: FCP <1.5s, LCP <2.5s, CLS <0.1
   - Constraints: <2MB total, no external dependencies
   - Add "Bilingual: Spanish (ES) default, English (EN) support" to context

⚠️ spec-template.md - Needs update:
   - Add user story template for content sections (Hero, About, Experience, etc.)
   - Functional Requirements examples should reference i18n, localStorage, PDF export
   - Success Criteria examples: Lighthouse scores, bilingual support, PDF generation
   - Add "Edge Cases" section for language switching, offline functionality

⚠️ tasks-template.md - Needs update:
   - Phase 1 (Setup): Add HTML scaffolding, CSS structure, JS modules (i18n.js, main.js)
   - Phase 2 (Foundation): Language system, dark mode toggle, accessibility setup
   - Phase 3 (User Stories): Each section (Hero, About, Experience, etc.) as independent story
   - Add test tasks for Lighthouse audits, cross-browser validation, bilingual content
   - Include: Image optimization, PDF export testing, GitHub Pages deployment

### Follow-Up TODOs
⚠️ Create content planning document:
   - Spanish and English CV content (all 8 sections)
   - Professional photo (high-res, optimized)
   - PDF files (CV_ES.pdf, CV_EN.pdf) - both <500KB
   - Tech stack logos/SVGs for Skills section
   - Project descriptions and GitHub links
   - Links to LinkedIn, GitHub profiles

⚠️ Design System Implementation:
   - Create CSS variables for color palette (deep blue, electric blue, cyan, grays)
   - Establish glassmorphism/neumorphism patterns
   - Define typography scale (headings, body, monospace)
   - Create reusable component patterns (cards, buttons, badges)

⚠️ Build local development environment:
   - Simple HTTP server setup guide (Python, Node.js, or extension)
   - Lighthouse testing procedure
   - Browser testing matrix (Chrome, Firefox, Safari, Edge)
   - Image optimization workflow (TinyPNG, WebP conversion)

### Notes
- This is the initial, comprehensive constitution for LinkedCV.
- All 5 core principles are non-negotiable and represent the project's DNA.
- The static architecture principle is absolute - no future dependencies or build tools.
- Bilingual support is mandatory from day one, not an afterthought.
- Performance and accessibility are quality gates, not nice-to-haves.
-->

# LinkedCV Constitution

## Core Principles

### I. Pure Static Architecture (NON-NEGOTIABLE)
No backend, no databases, no APIs, no build process, no npm dependencies.
All content must be self-contained, deployable directly to GitHub Pages.
Only HTML5, CSS3, and Vanilla JavaScript are permitted.
Every feature must work offline once loaded in a browser.
All dependencies must be local and included in the repository.

### II. Bilingual-First Design
All user-facing content MUST exist in both Spanish and English.
Language selection defaults to Spanish (ES) with EN as secondary option.
Language preference persists across sessions via localStorage.
Translation files (lang/es.json, lang/en.json) are the single source of truth.
PDF downloads must match the selected language (CV_ES.pdf, CV_EN.pdf).
No automated translations; all translations are manual and professionally reviewed.

### III. Professional Visual Excellence
Design must be sober, professional, tech-focused, and visually cohesive.
Hero section uses deep blue (#1e3a8a) or dark backgrounds with subtle tech patterns.
All animations are smooth, purposeful, and enhance UX without distraction.
Glassmorphism and neumorphism effects must be subtle and consistently applied.
Typography uses modern sans-serif for headings and clean sans-serif for body text.
Every visual element serves a purpose in the professional narrative.

### IV. Optimized Performance & Accessibility
First Contentful Paint (FCP) < 1.5s; Largest Contentful Paint (LCP) < 2.5s.
Cumulative Layout Shift (CLS) < 0.1; all animations use transform and opacity only.
Images must be optimized (WebP format preferred, with JPG/PNG fallback).
WCAG 2.1 AA accessibility compliance is mandatory (semantic HTML, ARIA, color contrast).
Lazy loading for images; no external CDN dependencies.
W3C valid HTML5 and CSS3; must work on all modern browsers.

### V. Content Structure & Completeness
Site MUST include 8 required sections in order: Hero, About, Experience, Skills,
Education, Achievements, Projects, Contact.
Each section must have appropriate visual design (cards, timeline, grid layout).
Content must be professional, accurate, and free of jargon without context.
All links and CTAs (Download CV, GitHub, LinkedIn, Email) must be functional.
GitHub Pages deployment-ready with README, setup instructions, and screenshots.

## Technical Constraints

**File Structure**: Single HTML file preferred for maximum portability, OR modular
structure with separate CSS/JS files in dedicated folders. No framework build step.

**Maximum Total Size**: <2MB (including all optimized images and PDFs).

**Asset Requirements**:
- Images: Optimized via TinyPNG/WebP, proper dimensions, lazy loading.
- PDFs: Each <500KB, optimized, language-suffixed (CV_ES.pdf, CV_EN.pdf).
- Background patterns: Subtle, low opacity (10-20%), non-distracting.
- Icons: SVGs for scalability; no icon font CDNs unless locally bundled.

**SEO & Metadata**:
- Open Graph meta tags for both languages.
- Structured data (JSON-LD) for profile/person schema.
- Mobile-friendly viewport; print-friendly CSS for PDF export.
- Canonical URL for language versions if applicable.

## Development Workflow & Quality Gates

**Version Control**: All work tracked via git; semantic versioning applies to constitution.

**CSS & JavaScript Guidelines**:
- Vanilla JavaScript only; no frameworks or transpilers.
- CSS organized by section/component; use CSS variables for colors.
- Mobile-first responsive design; breakpoints at 768px (tablet) and 1024px (desktop).
- No external style/script dependencies; all code is local.

**Deployment Process**:
- Main branch is production-ready; every commit to main triggers GitHub Pages build.
- README.md documents setup, local testing (simple HTTP server), and deployment steps.
- All PDFs and images committed to repo; checked into source control.

**Testing & Validation**:
- Manual browser testing on Firefox, Chrome, Safari, Edge (current versions).
- Lighthouse audit: Performance >90, Accessibility >90, Best Practices >90, SEO >90.
- Mobile responsiveness tested via DevTools; touch interactions verified.
- Bilingual content and language switcher tested on both ES/EN.
- PDF download tested in both languages.

**Code Quality**:
- Comments document non-obvious logic and dynamic features (animations, i18n).
- Semantic HTML tags used throughout; avoid generic <div> where semantic is appropriate.
- CSS follows BEM-like naming for clarity; no inline styles.
- JavaScript organized into modules (i18n.js, main.js) even if not using imports.

## Governance

This constitution is the authoritative guide for LinkedCV development.
All design decisions, technical choices, and content updates must align with these principles.
Amendments to this constitution require:
- Clear documentation of the change rationale.
- Explanation of which principle(s) are affected.
- Impact assessment on dependent templates (plan, spec, tasks).
- Version bump (MAJOR/MINOR/PATCH per semantic versioning rules).

Breaking changes to core principles (I-V) trigger MAJOR version bump.
New content sections or expanded guidance trigger MINOR version bump.
Clarifications and wording refinements trigger PATCH version bump.

All PRs must verify compliance with Core Principles I-V and Technical Constraints.
Violations of Principles I, II, or IV are blockers; PRs cannot merge without resolution.

**Version**: 1.0.0 | **Ratified**: 2026-02-12 | **Last Amended**: 2026-02-12
