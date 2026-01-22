# 📋 RESUMEN DEL PROYECTO: Interrogante Spettacolo

## 🎯 Descripción General

**Interrogante Spettacolo** es una plataforma web para la gestión y promoción de espectáculos de alto nivel. Es el sitio web oficial de una compañía artística que se especializa en cultura española y latinoamericana en Milán, Italia.

**Repositorio Git:** `https://github.com/mirkodgz/interrogante-sito`  
**Sitio Web:** `https://interrogantespettacolo.com`  
**Deployment:** Vercel (SSR con Astro)

---

## 🛠️ Stack Tecnológico

### Framework Principal
- **Astro 5.16.8** - Framework principal con SSR (Server-Side Rendering)
- **Output Mode:** `server` (SSR habilitado)
- **Adapter:** Vercel (`@astrojs/vercel`)

### Frontend & UI
- **React 19.2.3** - Para componentes interactivos
- **Framer Motion 12.25.0** - Animaciones y micro-interacciones
- **Tailwind CSS v4.1.18** - Framework de estilos
- **Shadcn UI** - Componentes premium (Radix UI + Tailwind)
- **Lucide React** - Iconos

### Contenido
- **MDX** (`@astrojs/mdx`) - Contenido en formato Markdown con componentes React
- **Astro Content Collections** - Sistema de gestión de contenido tipado
- **Keystatic** (`@keystatic/core`) - CMS opcional para gestión de contenido

### Multimedia & Assets
- **Cloudinary** - Gestión y optimización de imágenes/videos
- **Embla Carousel** - Carruseles y galerías

### Internacionalización
- **i18n Nativo de Astro** - Soporte para español (es) e italiano (it)
- **Routing:** Prefijo solo para italiano (`/it/`), español es el default

### Otros
- **TypeScript 5.9.3** - Tipado estático
- **Web3Forms** - Gestión de formularios de contacto
- **Sitemap** (`@astrojs/sitemap`) - Generación automática de sitemap

---

## 🗂️ Estructura del Proyecto

```
interrogante-sitoweb/
├── src/
│   ├── components/
│   │   ├── blocks/          # Componentes principales de página
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── FestivalCTA.tsx
│   │   │   ├── BlogSection.tsx
│   │   │   └── ...
│   │   ├── ui/              # Componentes UI reutilizables
│   │   │   ├── button.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   └── ...
│   │   └── gallery-component-*  # Componentes de galería específicos
│   ├── content/             # Contenido en formato MDX
│   │   ├── blog/            # Posts del blog
│   │   ├── creaciones/      # Obras teatrales
│   │   ├── festival/        # Ediciones del festival
│   │   ├── performance/     # Espectáculos de performance
│   │   ├── team/            # Miembros del equipo
│   │   └── config.ts        # Schemas de validación Zod
│   ├── pages/               # Rutas de la aplicación
│   │   ├── index.astro      # Homepage
│   │   ├── nosotros/        # Página "Sobre Nosotros"
│   │   ├── festival/        # Listado y detalle de festivales
│   │   ├── creaciones/      # Listado y detalle de creaciones
│   │   ├── performance/     # Listado y detalle de performances
│   │   ├── blog/            # Blog
│   │   ├── contacto.astro   # Formulario de contacto
│   │   ├── partners.astro   # Página de partners
│   │   └── it/              # Versión italiana (prefijo /it/)
│   ├── data/
│   │   └── navigation.ts    # Configuración del menú de navegación
│   ├── i18n/
│   │   ├── ui.ts            # Traducciones de UI
│   │   └── utils.ts         # Utilidades de i18n
│   ├── layouts/
│   │   └── Layout.astro     # Layout principal
│   ├── lib/
│   │   └── utils.ts         # Utilidades generales
│   └── styles/
│       └── global.css       # Estilos globales
├── public/                  # Assets estáticos
│   ├── imagenes/           # Imágenes locales
│   ├── fonts/              # Fuentes custom (Optima, Quinn)
│   └── robots.txt
├── dist/                   # Build de producción
├── astro.config.mjs        # Configuración de Astro
├── tsconfig.json           # Configuración de TypeScript
├── vercel.json             # Configuración de Vercel (redirects)
└── package.json
```

---

## 🗺️ Estructura de Navegación

El menú principal (`src/data/navigation.ts`) incluye:

1. **NOSOTROS** (`/nosotros/`)
   - Submenú: Kalua Rodriguez, Yosvanis Gil, Yudel Collazo

2. **CURSOS Y TALLERES** (menú padre con submenú)
   - Talleres Culturales (enlace externo Eventbrite)
   - Taller de Microteatro (enlace externo Instituto Cervantes)
   - Formación para Profesores (`/formacion-para-profesores-de-espanol/`)
   - Talleres para Niños (`/talleres-para-ninos/`)
   - Crea tu Taller (`/crea-tu-taller/`)

3. **FESTIVAL** (`/festival/`)
   - Primera Edición - A PIEDI NUDI
   - Segunda Edición - A PIEDI NUDI
   - Tercera Edición - A PIEDI NUDI
   - Cuarta Edición - A PIEDI NUDI

4. **CREACIONES** (`/creaciones/`)
   - Etiquetas
   - De la poesía al teatro
   - CORPUS
   - La Familia Garrido
   - Poetas en paralelo
   - Tipos
   - **PERFORMANCE** (submenú anidado)
     - MAL NACIDA
     - SAGRADA INSTRUCCIÓN
     - CONCIERTO PARA DOS
     - CONTACT MUSIC
     - SOLA
     - NEGRO SOY

5. **ASOCIADOS** (`/la-carretilla/`)

6. **PARTNERS** (`/partners/`)

7. **CONTACTO** (`/contacto/`)

---

## 📝 Sistema de Contenido (Content Collections)

El proyecto usa **Astro Content Collections** con schemas Zod para validación:

### Collections Disponibles:

1. **`festival`** - Ediciones del festival "A PIEDI NUDI"
   - Campos: `title`, `subtitle`, `edition`, `date`, `cover`, `location`, `description`, `videoUrl`, `gallery`, `press`, `quote`, `isComingSoon`, `seo`

2. **`creaciones`** - Obras teatrales
   - Campos: `title`, `subtitle`, `order`, `cover`, `videoUrl`, `additionalVideos`, `quote`, `quoteAuthor`, `gallery`, `details`, `seo`

3. **`performance`** - Espectáculos de performance
   - Campos: `title`, `date`, `cover`, `venue`, `description`, `videoUrl`, `fullVideoUrl`, `details`, `gallery`, `seo`

4. **`blog`** - Posts del blog
   - Campos: `title`, `date`, `cover`, `summary`, `author`, `seo`

5. **`team`** - Miembros del equipo
   - Campos: `name`, `role`, `order`, `cover`, `profileImage`, `facebook`, `instagram`, `linkedin`, `seo`

6. **`pages`** - Páginas estáticas (data collection)

**Todos los collections (excepto `blog` y `pages`) soportan multiidioma:** `language: 'es' | 'it'`

---

## 🎨 Identidad Visual

### Colores
- **Primario:** `#4338ab` (Viola/Púrpura)
- **Secundario:** `#a48956` (Crema/Oro)
- **Neutros:** Blanco puro (`#ffffff`) y Negro profundo (`#000000`)

### Tipografía
- **Navegación (Header):** `Bebas Neue` (18px, Blanco)
- **Títulos:** `Quinn` (Custom Font - `public/fonts/Quinn-Bold.woff`)
- **Cuerpo:** `Optima` (Custom Font - `public/fonts/OptimaLTPro-Roman.woff`)

### Estilo
- **"Luxury Editorial"** - Diseño premium y elegante
- Enfoque en experiencia visual impactante
- Optimizado para conversión de leads

---

## 🌐 Internacionalización (i18n)

- **Idiomas soportados:** Español (es) e Italiano (it)
- **Configuración:** `astro.config.mjs`
  - Default: Español (sin prefijo)
  - Italiano: Prefijo `/it/`
- **Routing:**
  - Español: `/`, `/nosotros/`, `/festival/`, etc.
  - Italiano: `/it/`, `/it/chi-siamo/`, `/it/festival/`, etc.
- **Redirects:** `vercel.json` redirige rutas antiguas `/ita/*` a `/it/*`

---

## 📞 Información de Contacto

### Redes Sociales
- **Instagram:** [interrogantespettacolo](https://www.instagram.com/interrogantespettacolo/)
- **Facebook:** [interrogantespettacolo](https://www.facebook.com/interrogantespettacolo)
- **LinkedIn:** [interrogante-spettacolo](https://www.linkedin.com/company/interrogante-spettacolo/)

### Emails
- kaluaarauz@gmail.com
- kalua@interrogantespettacolo.com

### Teléfonos
- +39 392 168 3752
- +39 327 620 5332

---

## 🚀 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en localhost:4321

# Build
npm run build        # Genera build de producción en ./dist/

# Preview
npm run preview      # Previsualiza el build localmente

# Astro CLI
npm run astro        # Ejecuta comandos de Astro CLI
```

---

## 🔧 Configuración Importante

### Astro Config (`astro.config.mjs`)
- **Site:** `https://interrogantespettacolo.com`
- **Output:** `server` (SSR)
- **Adapter:** Vercel
- **Integrations:** React, MDX, Sitemap
- **i18n:** Español (default), Italiano (prefijo `/it/`)

### TypeScript (`tsconfig.json`)
- Extiende `astro/tsconfigs/strict`
- JSX: `react-jsx`
- Path alias: `@/*` → `./src/*`

### Vercel (`vercel.json`)
- Redirects de rutas antiguas `/ita/*` a `/it/*`

---

## 📦 Dependencias Principales

### Core
- `astro`: ^5.16.8
- `react`: ^19.2.3
- `typescript`: ^5.9.3

### UI & Styling
- `tailwindcss`: ^4.1.18
- `framer-motion`: ^12.25.0
- `@radix-ui/*`: Componentes UI accesibles
- `lucide-react`: ^0.562.0

### Content & Media
- `@astrojs/mdx`: ^4.3.13
- `cloudinary`: ^2.9.0
- `embla-carousel-react`: ^8.6.0

### Integrations
- `@astrojs/react`: ^4.4.2
- `@astrojs/vercel`: ^9.0.4
- `@astrojs/sitemap`: ^3.7.0

---

## 📄 Archivos de Contenido

Los archivos de contenido están en formato **MDX** dentro de `src/content/`:

- **Blog:** `src/content/blog/*.mdx`
- **Creaciones:** `src/content/creaciones/*.mdx`
- **Festival:** `src/content/festival/*.mdx`
- **Performance:** `src/content/performance/*.mdx`
- **Team:** `src/content/team/*.mdx`

Cada archivo tiene frontmatter con metadatos validados por los schemas Zod definidos en `src/content/config.ts`.

---

## 🎯 Características Principales

1. **SSR (Server-Side Rendering)** - Renderizado en servidor para mejor SEO y performance
2. **Multiidioma** - Soporte completo para español e italiano
3. **Content Collections** - Sistema tipado de gestión de contenido
4. **Optimización de Imágenes** - Integración con Cloudinary
5. **Animaciones** - Framer Motion para micro-interacciones
6. **Responsive Design** - Diseño adaptativo con Tailwind CSS
7. **SEO Optimizado** - Sitemap automático y metadatos estructurados
8. **Componentes Reutilizables** - Arquitectura modular con componentes React y Astro

---

## 🔍 Puntos Clave para Desarrollo

1. **Componentes React** deben tener `client:load` o `client:visible` para hidratación
2. **Contenido multiidioma** se filtra automáticamente por `language` en el frontmatter
3. **Cloudinary** se usa para todas las imágenes/videos (URLs en formato `https://res.cloudinary.com/...`)
4. **Navegación dinámica** se genera desde `src/data/navigation.ts` y se combina con contenido real
5. **Layout principal** (`Layout.astro`) maneja la internacionalización y carga de contenido dinámico

---

## 📝 Notas Adicionales

- El proyecto tiene varios archivos Python (`*.py`) que parecen ser scripts de migración/limpieza de contenido
- Hay archivos de debug (`build_debug.txt`, `build_error.txt`, etc.) que pueden ser eliminados
- El proyecto está configurado para deployment en **Vercel** con SSR habilitado
- La estructura de carpetas sigue las convenciones de Astro con separación clara entre componentes, páginas y contenido

---

**Última actualización:** Basado en el estado actual del proyecto  
**Versión:** 0.0.1 (según package.json)


