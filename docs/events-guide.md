# Guía de eventos de Stay Fuengirola

La agenda de eventos vive en `src/config/events.ts`. No utiliza Supabase, API externa ni base de datos.

## Añadir un evento

1. Añade la imagen, si existe y tienes permiso para usarla, en `public/images/events/`.
2. Crea un nuevo objeto en `fuengirolaEvents`.
3. Usa fechas ISO:
   - `startDate: "2026-07-24"`
   - `endDate: "2026-07-26"` si dura varios días.
4. Añade `startTime` solo si está confirmado.
5. Completa los textos en `es`, `en`, `fi`, `sv` y `no`.
6. Añade enlaces oficiales en `officialUrl` y, si procede, `ticketUrl`.
7. Usa `featured: true` solo para eventos futuros o en curso importantes.
8. Ejecuta `npm run build` y revisa la tarjeta en los cinco idiomas.

Añade únicamente eventos confirmados mediante fuentes oficiales.

## Retirar un evento

No hace falta borrarlo cuando pasa la fecha. La web lo mueve automáticamente a "Eventos anteriores" usando `startDate` y `endDate`.

## Ocultar un evento

Añade:

```ts
published: false
```

Los eventos no publicados no se renderizan ni generan datos estructurados.

## Estados especiales

Puedes marcar:

```ts
status: "cancelled"
status: "postponed"
status: "rescheduled"
```

Los eventos cancelados o aplazados no muestran botón de compra de entradas.

## Imágenes

Usa imágenes locales optimizadas en `public/images/events/`. No copies carteles, fotos de artistas ni imágenes con derechos si no tienes permiso.

Si no hay imagen, la web muestra un placeholder visual elegante.
