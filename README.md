# LinkedCV — Professional Portfolio

LinkedCV es un portafolio profesional estático para Miguel Angel Lucio Reyes. Incluye soporte bilingüe (ES/EN), rendimiento optimizado, accesibilidad WCAG 2.1 AA y despliegue listo para GitHub Pages.

## Características

- 8 secciones completas: Hero, About, Experience, Skills, Education, Achievements, Projects, Contact
- i18n ES/EN con actualización instantánea y persistencia en localStorage
- Animaciones suaves (Intersection Observer + CSS)
- Diseño mobile-first con breakpoints 768px, 1024px, 1440px
- Descarga de CV por idioma
- Copiar correo al portapapeles
- SEO: meta tags + Open Graph + JSON-LD
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

## Rendimiento objetivo

- Lighthouse ≥ 90 en Performance, Accessibility, Best Practices, SEO
- FCP < 1.5s, LCP < 2.5s, CLS < 0.1
- Tamaño total del sitio < 2MB

## Licencia

MIT
