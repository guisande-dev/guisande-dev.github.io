# Portfolio — Nicolas Guisande

Este repositorio aloja mi sitio de portafolio personal mediante **GitHub Pages**.

## Sitio
- En vivo: https://nguisande.github.io
- [Inicio](https://nguisande.github.io) · [Casos de estudio](https://nguisande.github.io/case-studies/) · [Liderazgo](https://nguisande.github.io/leadership.html) · [Ahora](https://nguisande.github.io/now.html)

## Estructura
- `index.html` — portada
- `leadership.html` — modelo operativo y liderazgo
- `now.html` — proyectos actuales y aprendizaje
- `case-studies/` — listado + casos de estudio (automatización de precios, insights comerciales, métricas de crecimiento en Excel)
- `assets/` — css, favicon, theme.js, CV. Opcional: `og-image.png` (1200×630) para vista previa en redes.
- `404.html` — página personalizada cuando la URL no existe.

## Vista previa local
Puedes abrir `index.html` directamente en un navegador.

Opcional (recomendado):
- VS Code → instala “Live Server” → clic derecho en `index.html` → “Open with Live Server”.

## Despliegue
El despliegue lo gestiona **GitHub Pages** (Settings → Pages).
Cualquier cambio fusionado en la rama configurada se publica automáticamente.

---

## Registro de cambios

### v1.1 — Mejoras de contenido, navegación y estética (2025-02)

**Contenido y correcciones**
- Sustituido placeholder "KPI" en la home por métrica "Daily" (dashboards e insights).
- Enlaces al CV unificados a `assets/CV.pdf` en todas las páginas (evita 404 en entornos case-sensitive).
- Creada página de listado **Case Studies** (`case-studies/index.html`); el ítem de nav "Case Studies" apunta ahí.
- Añadido enlace "Case Studies" en la nav de cada case study para volver al listado.
- Navegación: ítem activo con clase `active` en cada página.
- Enlace "Más proyectos y código en GitHub" bajo el grid de Case Studies (home y listado).
- README: enlaces directos a Inicio, Casos de estudio, Liderazgo y Ahora; descripción actualizada de `case-studies/`.

**Modo oscuro**
- Variables CSS para tema claro y oscuro; respeto de `prefers-color-scheme`.
- Toggle manual (🌙/☀️) en la nav; preferencia guardada en `localStorage`.
- Script `assets/theme.js` y script inline en `<head>` para aplicar tema sin parpadeo.

**Estética**
- **Hover:** transiciones en cards (`translateY` + sombra) y en enlaces/botón de tema.
- **Focus visible:** `:focus-visible` en enlaces y botón de tema (outline con `var(--link)`).
- **Espaciado:** más padding en cards y container; márgenes en `rem` para h2 y grid; más padding horizontal en móvil.
- **Tipografía:** fuente **DM Sans** (Google Fonts); `line-height: 1.6` en el lead.
- **Favicon:** SVG con "N" en `assets/favicon.svg`, referenciado en todas las páginas.
- **Fondo:** gradiente sutil en `body` (variables `--bg` y `--bg-end` para claro/oscuro).

### v1.2 — Mejoras de alta prioridad (2025-02)

**Open Graph y meta sociales**
- En todas las páginas: `og:title`, `og:description`, `og:image`, `og:url`, `og:locale`; `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`; `link rel="canonical"`.
- Imagen de preview: `assets/og-image.png` (1200×630). Si no existe, las redes muestran solo título y descripción.

**CTA y accesibilidad**
- Enlace **Contactar** en la nav (LinkedIn) en todas las páginas.
- **Skip to content:** enlace "Saltar al contenido" visible al enfocar con teclado; salta a `#main`.

**404**
- Página **404.html** con mismo estilo, mensaje y enlace a inicio. GitHub Pages la sirve automáticamente en URLs inexistentes.

### v1.3 — Refinamiento de navegación y eliminación de redundancias (2026-02)

**Mejoras en inicio**
- Simplificado apartado "Destacados": eliminado link "repos" (redundante con GitHub accesible desde navbar).
- **Antes:** `Destacados: repos · case studies · side projects` + "Más proyectos en GitHub"
- **Después:** `Destacados: case studies · now` (más limpio, sin duplicación)
- Eliminada sección "Links" (LinkedIn, GitHub, CV) que duplicaba exactamente los accesos desde navbar.
- Resultado: navegación más limpia y eficiente, flujo directo hacia el contenido principal (casos de estudio y side projects).

### v1.4 — Homogeneización de idioma en documentación y actualizacion de archivos (2026-02)

**README**
- Traducidas al español las secciones que estaban en inglés para mantener consistencia de idioma en todo el documento.
- Actualizados encabezados y descripciones iniciales: sitio, estructura, vista previa local y despliegue.
- Normalizada la nomenclatura de navegación en texto descriptivo (`Inicio`, `Casos de estudio`, `Liderazgo`, `Ahora`).
- Conservados términos técnicos y rutas (`GitHub Pages`, `Live Server`, nombres de archivos y paths).

**Archivos**
- Actualizado el archivo CV.pdf
