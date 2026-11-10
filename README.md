# Carol en Verde

Sitio comercial de jardinería y huertos ecológicos para Carol en Verde, Ejido, Mérida, Venezuela. Next.js App Router, TypeScript y catálogo de consulta por WhatsApp.

## Desarrollo local

Requiere Node.js 20.9 o posterior.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Comprobaciones

```bash
npm run typecheck
npm run lint
npm run build
```

## Añadir una línea al catálogo

Edita `products` en `lib/brand.ts`. Cada entrada usa `id`, `slug`, `name`, `description`, `category`, `image`, `price` (opcional), `currency` (opcional), `variants` (opcional), `availability`, `published` y `tags`. La interfaz muestra solo las entradas publicadas. Guarda la imagen optimizada en `public/images/` y apunta `image` a su ruta. No publiques precio ni existencias sin confirmarlos con Carol. El catálogo actual sirve para consultar; no contiene carrito, checkout ni inventario ficticio.

## Actualizar imágenes

Coloca una copia optimizada de la imagen en `public/images/` y ajusta el campo `image` correspondiente en `lib/brand.ts` o el `src` de la sección. Las fotos fuente originales permanecen en `imagenes/`. El logo debe conservar PNG y su transparencia.

## Mantenimiento

- Servicios y datos de contacto: `lib/brand.ts`.
- Componentes y contenido de páginas: `components/Site.tsx`.
- Estilos, colores responsive y tipografías: `app/globals.css` y `app/layout.tsx`.
- Metadata de cada ruta: `app/**/page.tsx`.
- WhatsApp se configura en `brand.whatsapp`; los mensajes contextuales viven con sus servicios/productos.

## Despliegue

El proyecto está preparado para Vercel. Conecta el repositorio GitHub `Mauriizio/carol-en-verde` y usa `main` como rama de producción; cada push a esa rama debe iniciar una publicación automática cuando la integración GitHub-Vercel esté conectada. Alternativamente, con Vercel CLI autenticada: `vercel link`, `vercel deploy --prod`.

Las cuentas de Instagram y TikTok aparecen enlazadas con los perfiles públicos indicados por Carol. Verifica sus destinos antes de cualquier cambio futuro.
