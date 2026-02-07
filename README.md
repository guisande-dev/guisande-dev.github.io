# Portfolio — Nicolas Guisande

This repo hosts my personal portfolio site via **GitHub Pages**.

## Site
- Live: https://guisande-dev.github.io
- [Home](https://guisande-dev.github.io) · [Case Studies](https://guisande-dev.github.io/case-studies/) · [Leadership](https://guisande-dev.github.io/leadership.html) · [Now](https://guisande-dev.github.io/now.html)

## Structure
- `index.html` — landing
- `leadership.html` — operating model & leadership
- `now.html` — current projects & learning
- `case-studies/` — listado + case studies (pricing automation, commercial insights, growth metrics Excel)
- `assets/` — css, favicon, theme.js, CV. Opcional: `og-image.png` (1200×630) para preview en redes.
- `404.html` — página personalizada cuando la URL no existe.

## Local preview
You can open `index.html` directly in a browser.

Optional (recommended):
- VS Code → install “Live Server” → right click `index.html` → “Open with Live Server”.

## Deploy
Deployment is handled by **GitHub Pages** (Settings → Pages).
Any change merged into the configured branch is automatically published.

---

## Changelog / Versiones

### v1.1 — Mejoras de contenido, navegación y estética (2025-02)

**Contenido y correcciones**
- Sustituido placeholder "KPI" en la home por métrica "Daily" (dashboards e insights).
- Enlaces al CV unificados a `assets/CV.pdf` en todas las páginas (evita 404 en entornos case-sensitive).
- Creada página de listado **Case Studies** (`case-studies/index.html`); el ítem de nav "Case Studies" apunta ahí.
- Añadido enlace "Case Studies" en la nav de cada case study para volver al listado.
- Navegación: ítem activo con clase `active` en cada página.
- Enlace "Más proyectos y código en GitHub" bajo el grid de Case Studies (home y listado).
- README: enlaces directos a Home, Case Studies, Leadership y Now; descripción actualizada de `case-studies/`.

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
