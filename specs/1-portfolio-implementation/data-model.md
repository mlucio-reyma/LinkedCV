# Data Model: LinkedCV Portfolio Entities & Structure

**Phase**: 1 - Design  
**Date**: 2026-02-12  
**Feature**: 1-portfolio-implementation  
**Scope**: 8 content sections + supporting entities

---

## Overview

LinkedCV is a static portfolio website. Data is purely content-based (no database, no API). Structure follows 8 required sections with interconnected relationships (e.g., Skills → Experience tech stack matching).

---

## Entity 1: Hero Section

**Purpose**: First impression, CTA entry points, language/navigation controls  
**Scope**: Mandatory, single instance  
**Content Type**: Static (updated rarely)

### Fields

| Field | Type | Required | Constraints | Notes |
|-------|------|----------|-------------|-------|
| `name` | String | YES | Min 3 chars, Max 100 | "Miguel Angel Lucio Reyes" |
| `title` | String | YES | Min 3 chars, Max 100 | "Full Stack Developer" or "Senior Software Engineer" |
| `tagline` | String | YES | Min 10 chars, Max 500 | "Apasionado por crear soluciones..." (triggers typing animation) |
| `profile_image_url` | String (path) | YES | Format: assets/images/*.jpg or .webp | Profile photo (circular, optimized <300KB) |
| `cta_primary` | Object | YES | { label, href, icon } | Download CV button |
| `cta_secondary` | Object | NO | { label, href, icon } | Optional secondary CTA |
| `social_links` | Array[Object] | YES | Min 2, each: { name, url, icon } | GitHub, LinkedIn (+ email as special link with copy-to-clipboard) |
| `language_toggle` | Object | YES | { current_lang, options: ['ES', 'EN'] } | 🇪🇸 / 🇬🇧 toggle, persists to localStorage |
| `navigation_menu` | Array[Object] | YES | Links to 8 sections | { label, section_id, smooth_scroll: 500ms } |

### Relationships

- Links to: **About**, **Experience**, **Skills**, **Education**, **Achievements**, **Projects**, **Contact** (navigation)
- Language dependent: All strings translated in lang/es.json, lang/en.json

### Validation Rules

- `name`: Non-empty, matches Spanish/English naming conventions
- `title`: Non-empty, professional terminology
- `tagline`: Should inspire action; max 500 chars ensures readability in small screens
- `profile_image_url`: File must exist in assets/images/; optimized before committing
- `social_links`: At minimum GitHub + LinkedIn + Email

### State Transitions

- **Initial Load**: Render hero with language-default (ES), profile photo lazy-loaded
- **On Language Toggle**: Fetch translations from lang/[lang].json, update name/title/tagline in <200ms
- **On Scroll**: (Optional) Parallax background shift, fade-out tagline, reveal next section

### Example Data

```json
{
  "hero": {
    "name": "Miguel Angel Lucio Reyes",
    "title": "Full Stack Developer",
    "tagline": "Apasionado por crear soluciones escalables y transformar ideas en productos digitales de alto impacto",
    "profile_image_url": "assets/images/profile.jpg",
    "cta_primary": {
      "label_es": "Descargar CV",
      "label_en": "Download CV",
      "href": "assets/docs/CV_ES.pdf",
      "icon": "📥"
    },
    "social_links": [
      { "name": "GitHub", "url": "https://github.com/Migueluccio", "icon": "assets/icons/github.svg" },
      { "name": "LinkedIn", "url": "https://linkedin.com/in/Migueluccio", "icon": "assets/icons/linkedin.svg" },
      { "name": "Email", "url": "mailto:mluccio@malrdev.com", "action": "copy_to_clipboard", "icon": "✉️" }
    ]
  }
}
```

---

## Entity 2: About Section

**Purpose**: Professional context, core values, tech philosophy  
**Scope**: Mandatory, single instance  
**Content Type**: Static (updated quarterly)

### Fields

| Field | Type | Required | Constraints | Notes |
|-------|------|----------|-------------|-------|
| `summary` | String (long text) | YES | 2-3 paragraphs, ~400-600 words | Professional biography |
| `tech_stack_highlight` | Array[String] | YES | 5-10 technologies | Most relevant tech: .NET, React, Node.js, Azure, etc. |
| `core_values` | Array[Object] | NO | Max 3-5 values | { name, description } e.g., "Scalability", "Code Quality" |
| `years_of_experience` | Number | YES | Min 1, Max 60 | 6 (years) |
| `location` | Object | NO | { city, country, timezone } | "León, Guanajuato, México" |

### Relationships

- References: **Skills** (tech_stack_highlight must exist in Skills entity)
- References: **Experience** (years_of_experience should match sum of employment periods)

### Validation Rules

- `summary`: Bilingual, professional tone, no jargon without explanation
- `tech_stack_highlight`: Must be subset of Skills entity
- `years_of_experience`: Numeric, ≥1
- `core_values`: Non-empty if present, max 5

### Example Data

```json
{
  "about": {
    "summary_es": "Soy un Full Stack Developer con más de 6 años de experiencia...",
    "summary_en": "I am a Full Stack Developer with over 6 years of experience...",
    "tech_stack_highlight": ["C#", ".NET Core", "React", "TypeScript", "Node.js", "Azure", "Docker"],
    "core_values": [
      { "name": "Scalability", "description": "Building systems that grow" },
      { "name": "Code Quality", "description": "Clean code and best practices" }
    ],
    "years_of_experience": 6,
    "location": {
      "city": "León",
      "country": "Guanajuato, México",
      "timezone": "CST"
    }
  }
}
```

---

## Entity 3: Experience Section

**Purpose**: Work history, achievement highlights, technical growth  
**Scope**: Mandatory, 3 entries (Microsoft, IBM, Softtek)  
**Content Type**: Static (updated on new employment)

### Fields (Per Job Entry)

| Field | Type | Required | Constraints | Notes |
|-------|------|----------|-------------|-------|
| `company_name` | String | YES | Min 2 chars, Max 100 | "Microsoft", "IBM", "Softtek" |
| `job_title` | String | YES | Min 2 chars, Max 100 | "Senior Full Stack Developer", "Software Developer" |
| `employment_period` | Object | YES | { start_date, end_date }, format: "YYYY-MM" | "2021-03" → "Present" |
| `duration_months` | Number | YES | Calculated (start → end) | Derived field for display (e.g., "2 years 11 months") |
| `description` | String | NO | Max 500 chars | Brief role overview |
| `key_achievements` | Array[String] | YES | 2-3 items, max 200 chars each | Bullet points of impact (e.g., "Reduced load time by 45%") |
| `technologies_used` | Array[String] | YES | 3-10 items | Tech stack for this role (must reference Skills entity) |
| `is_current_role` | Boolean | YES | Only one entry can be true | Determines "Present" vs end date display |

### Relationships

- References: **Skills** (technologies_used must exist in Skills entity)
- Ordered: Chronologically descending (most recent first)

### Validation Rules

- `company_name`: Non-empty, no duplicates in same list
- `employment_period.start_date`: Valid date, ≤ `end_date`
- `employment_period.end_date`: Valid date or "Present"
- `is_current_role`: Only one entry can have `true` (enforce in JavaScript)
- `technologies_used`: All items must exist in Skills entity (cross-reference validation)

### Example Data

```json
{
  "experience": [
    {
      "company_name": "Microsoft México",
      "job_title": "Senior Full Stack Developer",
      "employment_period": { "start_date": "2021-03", "end_date": "Present" },
      "duration_months": 36,
      "description": "Leading development of critical enterprise applications",
      "key_achievements": [
        "Reduced application load time by 45%",
        "Led successful monolith-to-microservices migration",
        "Mentored 5+ junior developers"
      ],
      "technologies_used": ["C#", ".NET Core", "React", "TypeScript", "Azure", "Docker", "Kubernetes"],
      "is_current_role": true
    },
    {
      "company_name": "IBM México",
      "job_title": "Full Stack Developer",
      "employment_period": { "start_date": "2019-01", "end_date": "2021-02" },
      "duration_months": 26,
      "key_achievements": [
        "Developed inventory management system processing 10,000+ daily transactions",
        "Achieved 99.9% uptime SLA"
      ],
      "technologies_used": ["C#", ".NET", "WPF", "JavaScript", "SQL Server"],
      "is_current_role": false
    },
    {
      "company_name": "Softtek",
      "job_title": "Software Developer",
      "employment_period": { "start_date": "2017-06", "end_date": "2018-12" },
      "duration_months": 18,
      "key_achievements": [
        "Developed dynamic reporting module reducing generation time by 70%"
      ],
      "technologies_used": ["C#", ".NET Framework", "WinForms", "ASP.NET MVC", "SQL Server"],
      "is_current_role": false
    }
  ]
}
```

---

## Entity 4: Skills Section

**Purpose**: Technical proficiencies, proficiency levels, categorization  
**Scope**: Mandatory, 40+ skills across 4 categories  
**Content Type**: Static (updated quarterly)

### Fields (Skill Group)

| Field | Type | Required | Constraints | Notes |
|-------|------|----------|-------------|-------|
| `category` | String | YES | Enum: ["Frontend", "Backend", "DevOps", "Other"] | Skill classification |
| `skills` | Array[Object] | YES | Min 3, Max 15 per category | Array of skill objects |

### Fields (Per Skill)

| Field | Type | Required | Constraints | Notes |
|-------|------|----------|-------------|-------|
| `name` | String | YES | Max 50 chars | "React", "C#", "Docker" |
| `proficiency` | String | YES | Enum: ["Beginner", "Intermediate", "Advanced", "Expert"] | Skill level |
| `years` | Number | NO | 1-30 | How many years proficient |
| `icon_url` | String | NO | assets/icons/*.svg or emoji | Visual identifier |
| `is_primary` | Boolean | NO | Flag primary skills | For hero highlighting |

### Relationships

- Referenced by: **Experience** (technologies_used must match Skills.name)
- Referenced by: **About** (tech_stack_highlight must match Skills.name)

### Validation Rules

- `name`: Non-empty, unique within category
- `proficiency`: One of 4 enum values
- `years`: Numeric, ≥1
- **Cross-Reference**: All skills referenced in Experience/About must exist here

### Example Data

```json
{
  "skills": [
    {
      "category": "Frontend",
      "skills": [
        { "name": "HTML5", "proficiency": "Expert", "years": 6, "icon_url": "📄" },
        { "name": "CSS3", "proficiency": "Expert", "years": 6, "icon_url": "🎨" },
        { "name": "JavaScript (ES6+)", "proficiency": "Expert", "years": 6, "is_primary": true },
        { "name": "React", "proficiency": "Advanced", "years": 4, "is_primary": true },
        { "name": "TypeScript", "proficiency": "Advanced", "years": 3, "is_primary": true },
        { "name": "Redux", "proficiency": "Advanced", "years": 2 },
        { "name": "Next.js", "proficiency": "Advanced", "years": 2 },
        { "name": "Tailwind CSS", "proficiency": "Advanced", "years": 2 },
        { "name": "Bootstrap", "proficiency": "Advanced", "years": 3 },
        { "name": "Vue.js", "proficiency": "Intermediate", "years": 1 },
        { "name": "Angular", "proficiency": "Intermediate", "years": 1 }
      ]
    },
    {
      "category": "Backend",
      "skills": [
        { "name": "C#", "proficiency": "Expert", "years": 6, "is_primary": true },
        { "name": ".NET Core", "proficiency": "Expert", "years": 4, "is_primary": true },
        { "name": "ASP.NET MVC", "proficiency": "Advanced", "years": 5 },
        { "name": "Node.js", "proficiency": "Advanced", "years": 3, "is_primary": true },
        { "name": "Express", "proficiency": "Advanced", "years": 3 },
        { "name": "Entity Framework", "proficiency": "Advanced", "years": 4 },
        { "name": "RESTful APIs", "proficiency": "Expert", "years": 5 },
        { "name": "Microservices", "proficiency": "Advanced", "years": 2 },
        { "name": "SQL Server", "proficiency": "Expert", "years": 6 },
        { "name": "PostgreSQL", "proficiency": "Advanced", "years": 2 },
        { "name": "MongoDB", "proficiency": "Advanced", "years": 2 }
      ]
    },
    {
      "category": "DevOps",
      "skills": [
        { "name": "Azure", "proficiency": "Advanced", "years": 2, "is_primary": true },
        { "name": "Docker", "proficiency": "Advanced", "years": 3, "is_primary": true },
        { "name": "Git", "proficiency": "Advanced", "years": 6 },
        { "name": "CI/CD", "proficiency": "Advanced", "years": 3 },
        { "name": "Kubernetes", "proficiency": "Intermediate", "years": 1 },
        { "name": "AWS", "proficiency": "Intermediate", "years": 1 }
      ]
    },
    {
      "category": "Other",
      "skills": [
        { "name": "WPF", "proficiency": "Advanced", "years": 3 },
        { "name": "WinForms", "proficiency": "Advanced", "years": 3 },
        { "name": "Python", "proficiency": "Intermediate", "years": 1 },
        { "name": "GraphQL", "proficiency": "Intermediate", "years": 1 }
      ]
    }
  ]
}
```

---

## Entity 5: Education Section

**Purpose**: Academic credentials, certifications, continuous learning  
**Scope**: Mandatory, 1 degree + 5 certifications  
**Content Type**: Static (updated on new degree/cert)

### Fields (Degree)

| Field | Type | Required | Constraints | Notes |
|-------|------|----------|-------------|-------|
| `degree_name` | String | YES | Max 100 chars | "Computer Systems Engineering" |
| `institution` | String | YES | Max 100 chars | "Universidad Tecnológica de León" |
| `graduation_year` | Number | YES | 1970-2050 | 2017 |
| `honors` | String | NO | Max 100 chars | "Honors Mention", "Cum Laude", etc. |
| `gpa` | String | NO | Format "X.X/10" or "X.XX/4.0" | "9.2/10" |

### Fields (Per Certification)

| Field | Type | Required | Constraints | Notes |
|-------|------|----------|-------------|-------|
| `cert_name` | String | YES | Max 100 chars | "Microsoft Certified: Azure Developer Associate" |
| `issuer` | String | YES | Max 100 chars | "Microsoft", "AWS", "Scrum Alliance" |
| `issue_date` | String | YES | Format "YYYY-MM" or "YYYY" | "2022-06" |
| `expiration_date` | String | NO | Format "YYYY-MM" or "YYYY" | Optional, null if no expiry |
| `credential_url` | String | NO | Valid URL | Link to credential verification (e.g., Credly) |
| `icon_url` | String | NO | assets/icons/*.svg or emoji | Issuer logo/icon |

### Relationships

- Grouped: Degree + Certifications on same section

### Validation Rules

- `graduation_year`: 4-digit year, ≥1970
- `issue_date`: Valid date (or "Present" if current)
- `expiration_date`: Optional; if provided, must be ≥issue_date
- Certificates with expiration < today should be marked as "Expired" (optional validation)

### Example Data

```json
{
  "education": {
    "degree": {
      "degree_name": "Computer Systems Engineering",
      "institution": "Universidad Tecnológica de León",
      "graduation_year": 2017,
      "honors": "Honors Mention",
      "gpa": "9.2/10"
    },
    "certifications": [
      {
        "cert_name": "Microsoft Certified: Azure Developer Associate",
        "issuer": "Microsoft",
        "issue_date": "2022",
        "expiration_date": "2024",
        "credential_url": "https://learn.microsoft.com/en-us/certifications/azure-developer/",
        "icon_url": "assets/icons/microsoft.svg"
      },
      {
        "cert_name": "Microsoft Certified: Azure Fundamentals",
        "issuer": "Microsoft",
        "issue_date": "2021",
        "credential_url": "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
        "icon_url": "assets/icons/microsoft.svg"
      },
      {
        "cert_name": "AWS Certified Cloud Practitioner",
        "issuer": "AWS",
        "issue_date": "2023",
        "credential_url": "https://aws.amazon.com/certification/",
        "icon_url": "assets/icons/aws.svg"
      },
      {
        "cert_name": "Scrum Master Certified",
        "issuer": "Scrum Alliance",
        "issue_date": "2020",
        "credential_url": "https://www.scrumalliance.org/",
        "icon_url": "assets/icons/scrum.svg"
      },
      {
        "cert_name": "ITIL Foundation Certificate",
        "issuer": "ITIL",
        "issue_date": "2019",
        "credential_url": "https://www.itil.org/",
        "icon_url": "assets/icons/itil.svg"
      }
    ]
  }
}
```

---

## Entity 6: Achievements Section

**Purpose**: Recognition, impact metrics, professional highlights  
**Scope**: Mandatory, 5-6 achievements  
**Content Type**: Static (updated quarterly)

### Fields

| Field | Type | Required | Constraints | Notes |
|-------|------|----------|-------------|-------|
| `title` | String | YES | Max 100 chars | "Outstanding Performance Award" |
| `issuer_or_context` | String | YES | Max 100 chars | "Microsoft México", "Open Source Community" |
| `date` | String | NO | Format "YYYY" or "YYYY-MM" | "2023", "2020-Q3" |
| `description` | String | NO | Max 300 chars | Detailed achievement |
| `metric_or_impact` | String | NO | Max 100 chars | "500+ GitHub contributions", "50+ developers mentored" |
| `is_highlighted` | Boolean | NO | Flag for special mention | Render with accent color |
| `icon_url` | String | NO | assets/icons/*.svg or emoji | Visual icon (🏆, ⭐, etc.) |

### Relationships

- Grouped: All achievements in single section

### Validation Rules

- `title`: Non-empty
- `date`: If provided, valid year/month format
- `metric_or_impact`: Should include numbers (quantifiable)

### Example Data

```json
{
  "achievements": [
    {
      "title": "Outstanding Performance Award",
      "issuer_or_context": "Microsoft México",
      "date": "2023",
      "description": "Recognition for exceptional technical contribution and leadership",
      "is_highlighted": true,
      "icon_url": "🏆"
    },
    {
      "title": "Employee of the Quarter",
      "issuer_or_context": "IBM México",
      "date": "2020",
      "is_highlighted": false,
      "icon_url": "⭐"
    },
    {
      "title": "Open Source Contributor",
      "issuer_or_context": "GitHub Community",
      "metric_or_impact": "500+ contributions, maintainer of 3 projects with 1,000+ stars",
      "is_highlighted": true,
      "icon_url": "🚀"
    },
    {
      "title": "Tech Speaker",
      "issuer_or_context": "Conference & Community Events",
      "metric_or_impact": "2 conference talks (Azure Latam Summit 2023, .NET Conf México 2022)",
      "is_highlighted": false,
      "icon_url": "🎤"
    },
    {
      "title": "Mentor & Leader",
      "issuer_or_context": "Technical Community",
      "metric_or_impact": "50+ junior developers mentored",
      "is_highlighted": true,
      "icon_url": "👨‍🏫"
    },
    {
      "title": "Hackathon Winner",
      "issuer_or_context": "Microsoft Hackathon México",
      "date": "2022",
      "metric_or_impact": "1st place",
      "is_highlighted": false,
      "icon_url": "🥇"
    }
  ]
}
```

---

## Entity 7: Projects Section

**Purpose**: Portfolio showcase, technical proof points, tangible impact  
**Scope**: Mandatory, 5 projects  
**Content Type**: Static (updated on new project)

### Fields (Per Project)

| Field | Type | Required | Constraints | Notes |
|-------|------|----------|-------------|-------|
| `name` | String | YES | Max 100 chars | "ShopHub - E-Commerce Platform" |
| `short_description` | String | YES | Max 200 chars | Brief overview |
| `long_description` | String | NO | Max 1000 chars | Detailed description of problem, solution, impact |
| `technologies` | Array[String] | YES | 3-8 items | Tech stack (must reference Skills entity) |
| `key_features` | Array[String] | YES | 2-4 items | "Shopping cart", "Payment gateway", "Admin panel" |
| `image_url` | String | NO | assets/images/project-*.jpg | Screenshot/mockup (optional, lazy-loaded) |
| `github_url` | String | NO | Valid GitHub URL | "https://github.com/Migueluccio/shophub-platform" |
| `demo_url` | String | NO | Valid URL | "https://shophub-demo.malrdev.com" |
| `role` | String | NO | Max 100 chars | "Full Stack Developer", "Tech Lead" |
| `order` | Number | YES | 1-5 | Display order (ascending) |

### Relationships

- References: **Skills** (technologies must exist in Skills entity)

### Validation Rules

- `name`: Non-empty, unique within projects
- `technologies`: All items must exist in Skills entity (cross-reference validation)
- `github_url` or `demo_url`: At least one required
- `order`: Unique, 1-5 (display order)

### Example Data

```json
{
  "projects": [
    {
      "order": 1,
      "name": "ShopHub - E-Commerce Platform",
      "short_description": "Full-featured e-commerce platform with shopping cart, payment gateway, and admin panel",
      "long_description": "Designed and developed a complete e-commerce solution allowing merchants to manage products, inventory, and orders. Integrated Stripe payment processing, implemented responsive frontend with React, and optimized backend with Node.js and MongoDB.",
      "technologies": ["React", "TypeScript", "Node.js", "MongoDB", "Stripe API", "AWS", "Docker"],
      "key_features": ["Shopping cart", "Payment processing", "Admin dashboard", "Product filtering", "Order tracking"],
      "image_url": "assets/images/project-shophub.jpg",
      "github_url": "https://github.com/Migueluccio/shophub-platform",
      "demo_url": "https://shophub-demo.malrdev.com",
      "role": "Full Stack Developer"
    },
    {
      "order": 2,
      "name": "TaskMaster - Desktop Task Management App",
      "short_description": "Desktop application for task and project management with cloud sync",
      "technologies": ["C#", "WPF", ".NET 6", "Entity Framework Core", "SQLite", "Azure"],
      "key_features": ["Task creation and tracking", "Cloud synchronization", "Project organization", "Deadline reminders"],
      "image_url": "assets/images/project-taskmaster.jpg",
      "github_url": "https://github.com/Migueluccio/taskmaster-desktop",
      "role": "Lead Developer"
    },
    {
      "order": 3,
      "name": "ConnectHub - Real-Time Chat Application",
      "short_description": "Real-time chat with rooms, DMs, file sharing, and video calls",
      "technologies": ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB", "Redis"],
      "key_features": ["Real-time messaging", "Chat rooms", "Direct messages", "File sharing", "Video calls"],
      "image_url": "assets/images/project-connecthub.jpg",
      "github_url": "https://github.com/Migueluccio/connecthub-chat",
      "demo_url": "https://connecthub.malrdev.com",
      "role": "Full Stack Developer"
    },
    {
      "order": 4,
      "name": "FinTech Microservices Solution",
      "short_description": "Microservices system for financial transactions with API Gateway",
      "technologies": [".NET Core", "Docker", "Kubernetes", "RabbitMQ", "PostgreSQL"],
      "key_features": ["Transaction processing", "API Gateway", "Message queue", "Microservices architecture", "Database per service"],
      "github_url": "https://github.com/Migueluccio/fintech-microservices",
      "role": "Architect & Lead Developer"
    },
    {
      "order": 5,
      "name": "DevFolio - Portfolio CMS",
      "short_description": "Content management system for developer portfolios",
      "technologies": ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
      "key_features": ["Markdown blog support", "Project showcase", "Dark mode", "SEO optimization", "Fast deployment"],
      "image_url": "assets/images/project-devfolio.jpg",
      "github_url": "https://github.com/Migueluccio/devfolio-cms",
      "demo_url": "https://devfolio-demo.vercel.app",
      "role": "Creator & Maintainer"
    }
  ]
}
```

---

## Entity 8: Contact Section

**Purpose**: Call-to-action, social presence, download secondary link  
**Scope**: Mandatory, single instance  
**Content Type**: Static (updated rarely)

### Fields

| Field | Type | Required | Constraints | Notes |
|-------|------|----------|-------------|-------|
| `email` | String | YES | Valid email format | "mluccio@malrdev.com" (with copy-to-clipboard) |
| `social_links` | Array[Object] | NO | 2+ links | GitHub, LinkedIn, Twitter, etc. |
| `cta_secondary` | Object | YES | Download CV button | Secondary download link (same as hero) |
| `footer_tagline` | String | NO | Max 200 chars | Optional footer message (e.g., "Open to opportunities") |
| `footer_pattern` | String | NO | assets/images/pattern-*.svg | Optional tech pattern background |

### Relationships

- Mirrors: **Hero** social links & CTA

### Validation Rules

- `email`: Valid email format (RFC 5322)
- `social_links`: Non-empty, unique URLs
- `cta_secondary.href`: Must point to valid PDF file

### Example Data

```json
{
  "contact": {
    "email": "mluccio@malrdev.com",
    "social_links": [
      { "name": "GitHub", "url": "https://github.com/Migueluccio", "icon": "assets/icons/github.svg" },
      { "name": "LinkedIn", "url": "https://linkedin.com/in/Migueluccio", "icon": "assets/icons/linkedin.svg" }
    ],
    "cta_secondary": {
      "label_es": "Descargar CV",
      "label_en": "Download CV",
      "href": "assets/docs/CV_ES.pdf",
      "icon": "📥"
    },
    "footer_tagline_es": "Abierto a nuevas oportunidades y colaboraciones",
    "footer_tagline_en": "Open to new opportunities and collaborations",
    "footer_pattern": "assets/images/patterns/circuit-board.svg"
  }
}
```

---

## Cross-Entity Validation Rules

### Referential Integrity

1. **Experience.technologies_used** → All items must exist in **Skills.skills[].name**
2. **About.tech_stack_highlight** → All items must exist in **Skills.skills[].name**
3. **Projects.technologies** → All items must exist in **Skills.skills[].name**

### Language Consistency

- All string fields (name, title, description) must have both `_es` and `_en` versions in JSON OR stored separately in lang/es.json and lang/en.json
- Current implementation: Translations managed in lang/*.json files; HTML uses `data-i18n` attributes

### Data Flow

```
User visits site (Hero)
  ↓
Clicks "About" nav link (scroll 500ms ease-out)
  ↓
User sees About section (tech stack references Skills)
  ↓
User clicks "Experience" (scroll to Experience)
  ↓
User sees 3 companies + tech tags (references both Experience & Skills)
  ↓
User clicks "Skills" (scroll to Skills)
  ↓
User sees 40+ skills organized by category + proficiency bars
  ↓
User clicks "Projects" (scroll to Projects)
  ↓
User sees 5 projects + tech tags (references Projects & Skills)
  ↓
User clicks "Download CV" (downloads PDF matching current language)
```

---

## Summary: Data Model Statistics

| Entity | Instances | Fields | Relationships | Validation Rules |
|--------|-----------|--------|---------------|-----------------|
| Hero | 1 | 8 | Outbound: 8 sections | name, title, links |
| About | 1 | 5 | References: Skills | years_of_experience, location |
| Experience | 3 | 8 | References: Skills | employment dates, is_current_role |
| Skills | 1 | 4 categories, 40+ skills | Referenced by: Experience, About, Projects | Unique names, cross-references |
| Education | 1 | 1 degree + 5 certs | Self-contained | Graduation year, cert dates |
| Achievements | 1 | 5-6 items | Self-contained | Title, metric_or_impact |
| Projects | 5 | 10 fields | References: Skills | name, technologies, URLs |
| Contact | 1 | 5 | Mirrors: Hero | email format, valid URLs |

**Total Data Points**: ~150 fields (scalable)  
**Total Bilingual Strings**: ~100+ (managed in lang/*.json)  
**Cross-References**: 3 (validated during build/deploy)  
**Validation Complexity**: LOW (mostly static, string/URL validation)