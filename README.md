# Happy Roomie — Landing Tec Guadalajara

Landing page de una sola página para estudiantes del Tec de Monterrey
Campus Guadalajara y sus familias. La conversión principal es iniciar una
conversación por WhatsApp para consultar disponibilidad para agosto.

Construida con **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Estructura

```text
happy-roomie-landing/
├── app/
├── components/
├── config/
├── lib/
├── public/images/
├── next.config.js
├── package.json
└── tsconfig.json
```

## Instalación

```bash
npm install
```

## Ejecutar en local

```bash
npm run dev
```

Abre `http://localhost:3000`.

## Verificaciones

```bash
npm run lint
npm run typecheck
npm run build
```

## Despliegue en Vercel

1. Importa el repositorio en Vercel.
2. Framework: **Next.js**.
3. Configura `NEXT_PUBLIC_SITE_URL` con el dominio final de esta landing.
4. Ejecuta el despliegue.

No se usa `output: "export"`, `basePath`, `assetPrefix`, GitHub Pages ni
carpeta `out` como destino.

## Configuración principal

| Archivo | Qué controla |
| --- | --- |
| `config/content.ts` | Copy visible de la landing |
| `config/whatsapp.ts` | Número y mensajes precargados de WhatsApp |
| `config/navigation.ts` | Anclas internas del menú |
| `config/site.ts` | SEO, Open Graph, Twitter Card y favicon |
| `lib/analytics.ts` | Eventos enviados a `window.dataLayer` |

## WhatsApp

Todos los CTAs usan `WhatsAppButton.tsx` o `FloatingWhatsAppButton.tsx`,
con URL centralizada en `config/whatsapp.ts`.

Número oficial:

```text
+52 33 3399 0043
```

Mensaje general:

```text
¡Hola! Vi su página y busco cuarto cerca del Tec Guadalajara. ¿Me pasan información y disponibilidad para agosto?
```

Mensaje para familias:

```text
¡Hola! Vi su página y busco vivienda para mi hijo cerca del Tec Guadalajara. ¿Me pasan información y disponibilidad para agosto?
```

## Notas de contenido

- La landing está enfocada en el Tec de Monterrey Campus Guadalajara.
- La disponibilidad para agosto se comunica sin números de cupos no confirmados.
- Las menciones a mobiliario y requisitos se presentan como información a consultar, no como promesas absolutas.
- El aviso de privacidad y los términos en `config/content.ts` son marcadores de posición y deben validarse legalmente antes de producción.
