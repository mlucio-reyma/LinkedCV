# LinkedCV — Professional Portfolio

LinkedCV es un portafolio profesional estático para Miguel Angel Lucio Reyes. Incluye soporte bilingüe (ES/EN), rendimiento optimizado, accesibilidad WCAG 2.1 AA, **optimización SEO 100%** y despliegue listo para GitHub Pages.

## Características

- 8 secciones completas: Hero, About, Experience, Skills, Education, Achievements, Projects, Contact
- i18n ES/EN con actualización instantánea y persistencia en localStorage
- Animaciones suaves (Intersection Observer + CSS)
- Diseño mobile-first con breakpoints 768px, 1024px, 1440px
- Descarga de CV por idioma
- Copiar correo al portapapeles
- **SEO 100%**: robots.txt, sitemap.xml, manifest.json, meta tags completos, Open Graph, Twitter Cards, Schema.org JSON-LD
- **PWA Ready**: Service Worker, manifest.json con iconos y shortcuts
- Sin dependencias externas (vanilla HTML/CSS/JS)

## Tecnologías

- HTML5 semántico
- CSS3 con variables
- JavaScript ES6 (sin frameworks)
- JSON para traducciones

## Estructura de archivos

```
LinkedCV/
├── index.html
├── robots.txt              # Directivas para motores de búsqueda
├── sitemap.xml             # Mapa del sitio con hreflang
├── manifest.json           # Manifiesto PWA
├── humans.txt              # Información del equipo
├── .htaccess               # Configuración Apache (opcional)
├── SEO-CHECKLIST.md        # Checklist de SEO completo
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

## SEO Optimization ⭐

El sitio está **100% optimizado para SEO** con las últimas actualizaciones (27-Feb-2026):

### Meta Tags Completos
- Title, description, author, keywords
- Canonical URL: `https://mlucio-reyma.github.io/LinkedCV/`
- hreflang (ES/EN) para SEO internacional
- Open Graph completo con URLs absolutas de GitHub Pages
- Twitter Cards con metadata completa
- Preconnect y DNS-prefetch

### Datos Estructurados
- Schema.org JSON-LD (Person type)
- **Nuevo**: hasCredential con certificaciones (Azure, AWS, Scrum, ITIL)
- URLs absolutas en todas las propiedades
- Información extendida (worksFor, knowsLanguage, knowsAbout)
- GitHub URL actualizada en sameAs array

### Archivos SEO Esenciales
- **robots.txt**: Directivas de rastreo y referencia a sitemap (URL GitHub Pages)
- **sitemap.xml**: Todas las secciones con prioridades y hreflang (URLs actualizadas)
- **manifest.json**: PWA con iconos, shortcuts y screenshots
- **humans.txt**: Información de desarrollo y agradecimientos

### Open Graph Optimizado
- `og:type`: "profile" (optimizado para perfil profesional)
- `og:description`: Incluye ubicación (León, México) y experiencia
- `og:locale`: es_MX con alternativa en_US
- Imágenes con dimensiones especificadas

### Optimización de Rendimiento
- Service Worker para caché
- Lazy loading de imágenes
- Compresión GZIP (.htaccess)
- Headers de seguridad

### Puntuación Objetivo
- **SEO**: 100/100 🎯
- **Performance**: 95-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100

### Últimas Actualizaciones SEO (27-Feb-2026)
✅ URLs migradas a GitHub Pages: `https://mlucio-reyma.github.io/LinkedCV/`  
✅ Certificaciones profesionales añadidas en JSON-LD  
✅ Meta description optimizada con geolocalización  
✅ Open Graph type actualizado a "profile"  
✅ Keywords reorganizadas por relevancia

## Instalación local

1. Clona el repositorio.
2. Abre un servidor local estático:

- Python:

```
python -m http.server 8000
```

- Node.js:

```
npx http-server
```

Abre `http://localhost:8000`.

## Despliegue en GitHub Pages

1. Asegura que `main` contenga todos los archivos.
2. Settings → Pages → Deploy from branch → `main` → `/ (root)`.
3. URL final: `https://<usuario>.github.io/LinkedCV`.

## Personalización rápida

- **Contenido**: actualiza `lang/es.json` y `lang/en.json`.
- **Imágenes**: reemplaza archivos en `assets/images/` manteniendo los nombres (actualmente SVG optimizados).
- **CVs**: agrega `CV_ES.pdf` y `CV_EN.pdf` en `assets/docs/`.
- **Colores**: modifica variables en `css/styles.css`.

## Compatibilidad

- Chrome, Firefox, Safari, Edge (últimas versiones)
- Mobile: iOS Safari, Chrome Android

## Validación SEO

Después del despliegue, valida con:

- [Google Search Console](https://search.google.com/search-console) - Registrar sitio y verificar indexación
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Auditoría completa
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) - Validar Open Graph
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) - Validar Twitter Cards
- [Schema.org Validator](https://validator.schema.org/) - Validar JSON-LD
- [Rich Results Test](https://search.google.com/test/rich-results) - Validar snippets enriquecidos
- [W3C Validator](https://validator.w3.org/) - Validar HTML5
- XML Sitemap Validator - Validar sitemap.xml

Consulta [SEO-CHECKLIST.md](SEO-CHECKLIST.md) para la lista completa de optimizaciones implementadas.

## Rendimiento objetivo

- Lighthouse ≥ 90 en Performance, Accessibility, Best Practices, SEO
- FCP < 1.5s, LCP < 2.5s, CLS < 0.1
- Tamaño total del sitio < 2MB

## Licencia

MIT
