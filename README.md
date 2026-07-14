# Happy Roomie — Landing de contacto por WhatsApp

Landing page de una sola página, **completamente independiente del sitio
oficial** `happyroomie.mx`, cuyo único objetivo es generar confianza y
llevar al visitante a iniciar una conversación por WhatsApp.

Construida con **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

---

## 1. Concepto visual (resumen)

- **Paleta:** azul tinta `#152B4D` (confianza) + arena cálida `#FBF7F0`
  (fondo limpio) + coral `#FF6B4A` (acento juvenil) + verde WhatsApp
  `#25D366` reservado **exclusivamente** para los botones de WhatsApp.
- **Tipografía:** pila "Sora" (display, geométrica) para títulos y pila
  "Inter" (cuerpo) para texto — implementadas como *font stacks* de
  sistema para evitar cualquier dependencia de red en el build (ver nota
  de tipografía más abajo).
- **Elemento firma:** una "etiqueta de llave" (`KeyTag`) redondeada que
  contiene números de pasos e íconos en toda la página, dando cohesión
  visual sin recurrir a clichés inmobiliarios literales.
- Botones de WhatsApp siempre en verde, con icono, y máxima prioridad
  visual en cada sección.

---

## 2. Estructura de carpetas

```
happy-roomie-landing/
├── app/
│   ├── layout.tsx        # Metadata, SEO, Schema.org, fuentes
│   ├── page.tsx          # Ensambla todas las secciones
│   ├── globals.css       # Tailwind + estilos base + reduced-motion
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Header.tsx
│   ├── MobileMenu.tsx
│   ├── Hero.tsx
│   ├── ProblemSection.tsx
│   ├── HowItWorks.tsx
│   ├── StudentSection.tsx
│   ├── ParentSection.tsx
│   ├── OwnerSection.tsx
│   ├── BenefitsSection.tsx
│   ├── TrustSection.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── FloatingWhatsAppButton.tsx
│   ├── MobileStickyCTA.tsx
│   ├── PrivacyModal.tsx
│   ├── TermsModal.tsx
│   ├── Modal.tsx           # Modal genérico accesible
│   ├── WhatsAppButton.tsx  # Único componente que abre una URL externa
│   ├── WhatsAppIcon.tsx
│   └── KeyTag.tsx           # Elemento visual firma
├── config/
│   ├── site.ts           # SEO, título, descripción, canonical (env)
│   ├── whatsapp.ts        # Número y TODOS los mensajes precargados
│   ├── navigation.ts      # Anclas internas del menú
│   └── content.ts         # Todos los textos de la landing
├── lib/
│   └── analytics.ts       # trackEvent(), listo para GA4/GTM
├── public/images/README.md
├── .env.example
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 3. Instalación

Requisitos: Node.js 18.18+ (recomendado 20 LTS) y npm.

```bash
cd happy-roomie-landing
npm install
```

## 4. Ejecutar en local

```bash
npm run dev
```

Abre `http://localhost:3000`.

## 5. Verificaciones antes de desplegar

```bash
npm run typecheck   # 0 errores de TypeScript
npm run build        # build de producción
```

## 6. Desplegar en Vercel

1. Sube este proyecto a un repositorio de Git (GitHub/GitLab/Bitbucket).
2. En Vercel, "Add New Project" → importa el repositorio.
3. Framework detectado automáticamente: **Next.js**.
4. En "Environment Variables" agrega (opcional, ver sección 7):
   - `NEXT_PUBLIC_SITE_URL` → la URL final de esta landing (nunca
     `https://happyroomie.mx`).
5. Deploy.

No se requiere base de datos, backend, ni variables secretas: el proyecto
no tiene servidor propio más allá del renderizado estático de Next.js.

---

## 7. Variables configurables

| Variable / archivo | Qué controla |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` (env) | URL canónica, Open Graph, sitemap. Vacía por defecto. |
| `config/whatsapp.ts` → `WHATSAPP_NUMBER` | Número oficial de WhatsApp (formato internacional, solo dígitos). |
| `config/whatsapp.ts` → `WHATSAPP_MESSAGES` | Los 7 mensajes precargados usados en toda la landing. |
| `config/site.ts` → `SITE_CONFIG` | Title, description, keywords, favicon, imagen OG. |
| `config/navigation.ts` → `NAV_LINKS` | Enlaces del menú (siempre anclas internas). |
| `config/content.ts` | Todos los textos visibles de cada sección. |
| `lib/analytics.ts` | Punto de integración con GA4/GTM (`window.dataLayer`). |

## 8. Imágenes que deben sustituirse

Ver detalle completo en `public/images/README.md`. Resumen:

1. `hero-students.jpg` — imagen principal del Hero.
2. `student-search.jpg` — sección para estudiantes.
3. `owner-property.jpg` — sección para propietarios.
4. `og-cover.jpg` (1200×630) — imagen de Open Graph / Twitter Card.
5. Logotipo real de Happy Roomie — reemplaza el bloque "HR" en `Header.tsx`
   y `Footer.tsx` (el logo permanece **sin enlace** en ambos lugares).

## 9. Textos que deben validarse

- El aviso de privacidad y los términos y condiciones en
  `config/content.ts` (`PRIVACY_MODAL_CONTENT`, `TERMS_MODAL_CONTENT`) son
  **marcadores de posición generales** y deben sustituirse por el texto
  legal oficial y vigente antes de publicar.
- Confirmar con el negocio si existen condiciones de costo del servicio
  antes de modificar la respuesta de la FAQ "¿La atención tiene algún
  costo?".
- Confirmar ciudades/universidades activas si en el futuro se quiere
  mencionar cobertura específica (actualmente no se menciona ninguna para
  no inventar información).

## 10. Nota de tipografía

Para evitar cualquier dependencia de red durante el build (esto se probó
en un entorno sin acceso a `fonts.googleapis.com`), la tipografía se
implementó como *font stacks* de sistema en `app/globals.css`
(`--font-sora`, `--font-inter`). Esto además mejora el rendimiento: cero
solicitudes de red adicionales para tipografía.

Si se desea usar las tipografías reales Sora + Inter vía Google Fonts
(Vercel tiene acceso de red sin restricciones), se puede reintroducir
`next/font/google` en `app/layout.tsx`:

```tsx
import { Sora, Inter } from "next/font/google";
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["600","700","800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// y agregar className={`${sora.variable} ${inter.variable}`} al <html>
```

---

## 11. Revisión de accesibilidad

- HTML semántico: `header`, `main`, `nav`, `section`, `footer`, un único `<h1>`.
- Jerarquía de encabezados `h1` → `h2` → `h3` respetada en todas las secciones.
- Todos los botones e íconos interactivos tienen `aria-label` cuando el
  texto visible no es suficiente (menú móvil, botón flotante, cerrar modal).
- El acordeón de FAQ usa `<details>/<summary>` nativos: navegable por
  teclado y con semántica de expandido/colapsado incluida por el navegador.
- Los modales (`Modal.tsx`) usan `role="dialog"`, `aria-modal="true"`,
  `aria-labelledby`, atrapan el foco al abrir, cierran con `Escape` y
  devuelven el foco al elemento que los abrió.
- Estados de foco visibles (`:focus-visible`) en color coral en todos los
  elementos interactivos.
- `prefers-reduced-motion: reduce` desactiva animaciones y el scroll suave.
- Imágenes: como son marcadores de posición, cada bloque incluye el texto
  alternativo previsto (`imageAlt` en `config/content.ts`) que debe pasar
  al atributo `alt` de la imagen `<Image>` real que se agregue.
- Contraste: texto principal `#152B4D` sobre fondos claros y texto claro
  sobre `#152B4D`, cumpliendo contraste alto en ambos sentidos.

## 12. Revisión responsive

- Enfoque *mobile first*: clases base de Tailwind sin prefijo definen el
  layout móvil; `sm:`/`lg:` amplían para tablet/escritorio.
- Menú desplegable simple en móvil (`MobileMenu.tsx`).
- CTA fijo de WhatsApp en la parte inferior solo en móvil
  (`MobileStickyCTA.tsx`, oculto en `sm:` en adelante).
- Botón flotante de WhatsApp solo en pantallas `sm:` en adelante
  (`FloatingWhatsAppButton.tsx`), para no duplicar el CTA fijo en móvil.
- Grids de tarjetas y secciones colapsan a una columna en móvil.

## 13. Revisión SEO

- `title` y `meta description` exactamente como se solicitó.
- Palabras clave incluidas de forma natural en el contenido (no repetidas
  de forma forzada).
- Open Graph y Twitter Card configurados (`app/layout.tsx`).
- Favicon y `canonical` configurables, sin apuntar al sitio oficial.
- `robots.ts` y `sitemap.ts` generados dinámicamente; el sitemap solo se
  publica cuando `NEXT_PUBLIC_SITE_URL` está configurado.
- Datos estructurados Schema.org tipo `Organization` con únicamente
  información confirmada (nombre, descripción, WhatsApp como
  `ContactPoint`). Sin calificaciones, sin cifras, sin datos inventados.
- HTML semántico y un único `<h1>` en toda la página.

## 14. Revisión de los enlaces de WhatsApp

Todos los CTAs usan `WhatsAppButton.tsx`, que construye la URL a partir de
`config/whatsapp.ts` con `encodeURIComponent()`, garantizando:

- Número correcto: `523333990043` → `https://wa.me/523333990043`.
- Mensaje correcto según el contexto (general, estudiante, estudiante con
  detalle, padre/madre, padre/madre con detalle, propietario, propietario
  con detalle, FAQ).
- Codificación de caracteres especiales (acentos, signos de interrogación,
  espacios) correcta en la URL final.
- `target="_blank" rel="noopener noreferrer nofollow"` en cada botón.
- Cada clic dispara el evento de analítica correspondiente
  (`whatsapp_click_*`) antes de abrir WhatsApp.

## 15. Confirmación explícita — independencia del sitio oficial

Se verificó de forma automatizada (`grep` sobre todo el código fuente) que:

- ✅ No existe ningún string `happyroomie.mx` en el proyecto.
- ✅ No existe ningún enlace `http(s)://` distinto de `https://wa.me/...`
  en componentes o configuración.
- ✅ El logotipo no está envuelto en ningún elemento `<a>` ni `onClick` de
  navegación, ni en el encabezado ni en el footer.
- ✅ No hay formularios (`<form>`), buscadores de propiedades, botones de
  "Ver propiedades", "Registrarse" o "Iniciar sesión" en ningún componente.
- ✅ No se realiza ninguna llamada `fetch`/API hacia dominios externos: el
  proyecto no tiene backend ni consume servicios remotos.
- ✅ La navegación interna usa exclusivamente anclas (`#como-funciona`,
  `#estudiantes`, `#propietarios`, `#preguntas-frecuentes`).
- ✅ La única acción que abre una pestaña externa en todo el proyecto es
  el botón de WhatsApp, centralizado en `WhatsAppButton.tsx`,
  `FloatingWhatsAppButton.tsx` y `MobileStickyCTA.tsx`.

**Conclusión:** esta landing page no depende, enlaza ni redirige en
ningún punto al sitio oficial `happyroomie.mx`. La única conversión
disponible es iniciar una conversación por WhatsApp.
