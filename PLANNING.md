# PLANNING: Interrogante Spettacolo

## 🚀 Vision General
Interrogante Spettacolo es una plataforma web para la gestión y promoción de espectáculos de alto nivel. El objetivo es crear una experiencia visual impactante, rápida y optimizada para la conversión de leads, utilizando un estilo "Luxury Editorial".

**Repositorio Git (Final):** `https://github.com/mirkodgz/interrogante-sito`

## 🛠️ Stack Tecnológico
*   **Astro 5.0**: Framework principal.
*   **Tailwind CSS v4**: Motor de diseño.
*   **Shadcn UI (Shadcn Studio)**: Componentes premium.
*   **React + Framer Motion**: Dinamismo y micro-interacciones.
*   **Cloudinary**: Gestión de assets multimedia.
*   **Web3Forms**: Gestión de formularios de contacto.

## 🗺️ Estructura de Navegación (Header Menu)

1.  **Home** (Slug: `/` - No se muestra en el menú).
2.  **NOSOTROS** (Slug: `/nosotros/`).
3.  **CURSOS Y TALLERES** (Menu Padre `#` con sub-menú):
    *   TALLERES CULTURALES
    *   TALLER DE MICROTEATRO
    *   FORMACIÓN PARA PROFESORES
    *   TALLERES PARA NIÑOS
    *   CREA TU TALLER
4.  **FESTIVAL** (CPT `festival` - Padre con hijos):
    *   Primera Edición - A PIEDI NUDI
    *   Segunda Edición - A PIEDI NUDI
    *   Tercera Edición - A PIEDI NUDI
    *   Cuarta Edicion - A PIEDI NUDI
5.  **CREACIONES** (CPT `creaciones` - Padre con hijos):
    1. De la poesía al teatro: Peripecias de una mujer sin maletas
    2. Poetas en paralelo
    3. CORPUS
    4. Etiquetas
    5. Tipos
    6. La Familia Garrigo
6.  **PERFORMANCE** (CPT `performance` - Padre con hijos):
    1. MAL NACIDA
    2. SAGRADA INSTRUCCION
    3. CONCIERTO PARA DOS
    4. CONTACT MUSIC
    5. SOLA
    6. NEGRO SOY
7.  **ASOCIADOS** (Slug: `/la-carretilla/`).
8.  **PARTNERS** (Slug: `/partners/`).
9.  **CONTACTO** (Slug: `/contacto/`).

## 🏗️ Gestión de Contenidos (CPTs & Data)

## 🎨 Identidad Visual (Especificaciones Actualizadas)
*   **Colores**:
    *   **Primario**: `#4338ab` (Viola/Púrpura)
    *   **Secundario**: `#a48956` (Crema/Oro)
    *   **Neutros**: Blanco puro y Negro profundo (`#000000`).
*   **Tipografía**:
    *   **Navegación (Header)**: `Bebas Neue` (18px, Blanco).
    *   **Títulos**: `Quinn` (Custom Font).
    *   **Cuerpo**: `Optima` (Custom Font).

### Custom Post Types (Estructura de Datos)
*   **Festival**: Gestión de ediciones.
*   **Creaciones**: Obras y proyectos teatrales.
*   **Performance**: Espectáculos y conciertos.
*   **Logos (Partners)**:
    *   **Campos**: Título (brand_name), Imagen (img_url/upload).
    *   **Categorías**:
        1. COLABORADORES
        2. PARTNER
        3. PRENSA

## 📞 Información de Contacto & RRSS

### Redes Sociales
*   **Instagram**: [interrogantespettacolo](https://www.instagram.com/interrogantespettacolo/)
*   **Facebook**: [interrogantespettacolo](https://www.facebook.com/interrogantespettacolo)
*   **LinkedIn**: [interrogante-spettacolo](https://www.linkedin.com/company/interrogante-spettacolo/)

### Emails
*   kaluaarauz@gmail.com
*   kalua@interrogantespettacolo.com

### Teléfonos
*   +39 392 168 3752
*   +39 327 620 5332

## 📝 Próximos Pasos (En curso)
- [ ] Recopilar fotos y secciones de texto para cada página.
- [ ] Definir bloques de Shadcn Studio para la página de Partners (Logo Cloud).
- [ ] Preparar estructura de carpetas en `src/pages/` siguiendo los CPTs.
