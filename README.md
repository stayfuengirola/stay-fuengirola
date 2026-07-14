# Stay Fuengirola

Landing page publica multidioma para Stay Fuengirola, presentando Apartamento Veramar en Fuengirola, Malaga, preparada para desplegarse en Vercel.

## Ejecutar en local

```bash
npm install
npm run dev
```

Rutas disponibles: `/es`, `/en`, `/fi`, `/sv`, `/no`.

## Validar produccion

```bash
npm run typecheck
npm run build
```

## Editar textos

Los textos por idioma estan en `src/i18n/dictionaries.ts`.

## Cambiar datos del alojamiento

- Datos generales y WhatsApp: `src/config/property.ts`
- Enlace de Booking: `src/config/booking.ts`
- Servicios destacados: `src/config/services.ts`
- Galeria: `src/config/gallery.ts`
- Opiniones y puntuaciones: `src/config/reviews.ts`
- Distancias: `src/config/distances.ts`
- Preguntas frecuentes: `src/config/faq.ts`

## Sustituir fotos

Las imagenes actuales estan en `public/images`.

La galeria se genera automaticamente leyendo todos los archivos `.webp`, `.jpg`, `.jpeg` y `.png` dentro de `public/images`. Para controlar el orden, usa prefijos numericos en el nombre:

```text
01-living-room.webp
02-bedroom.webp
03-kitchen.webp
04-pool.webp
```

Las imagenes se ordenan alfabeticamente por nombre. Si una imagen no debe aparecer en la galeria, anadela a `excludedGalleryImages` en `src/config/gallery.ts`.

El texto alternativo se toma de las traducciones cuando existe una coincidencia; si no, se genera a partir del nombre del archivo.

## SEO y despliegue

Configura el dominio final antes de publicar:

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

La web incluye metadata por idioma, canonical, `hreflang`, Open Graph, `sitemap.xml`, `robots.txt` y JSON-LD sin precio, licencia, coordenadas ni direccion completa.

## Desplegar en Vercel

1. Importa el repositorio en Vercel.
2. Framework preset: Next.js.
3. Build command: `npm run build`.
4. Output directory: deja el valor por defecto de Next.js.
5. Anade `NEXT_PUBLIC_SITE_URL` con el dominio final cuando este disponible.
