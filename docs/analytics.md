# Google Analytics 4

Stay Fuengirola usa GA4 con App Router y `gtag.js`, cargado una sola vez desde `src/components/GoogleAnalytics.tsx`.

## Configuracion

Variable obligatoria en produccion:

```bash
NEXT_PUBLIC_GA_ID=G-BGY4YR7ZKH
```

La integracion solo se activa cuando:

- `NODE_ENV` es `production`.
- `NEXT_PUBLIC_GA_ID` existe.
- `NEXT_PUBLIC_VERCEL_ENV` o `VERCEL_ENV` es `production`, o no esta definido.
- El host es `stayfuengirola.com` o `www.stayfuengirola.com`.

No se carga en local, localhost ni previews de Vercel.

## Page views

El script se configura con `send_page_view: false`. Los `page_view` se envian manualmente al cambiar la ruta para evitar duplicados durante navegacion interna:

- `page_path`
- `page_location`
- `page_title`
- `send_to`

## Eventos personalizados

Los eventos se envian desde `src/lib/analytics.ts`.

| Evento | Parametros |
| --- | --- |
| `booking_click` | `placement`, `page_path`, `language` |
| `whatsapp_click` | `placement`, `page_path`, `language` |
| `language_change` | `from_language`, `to_language`, `page_path` |
| `event_info_click` | `event_slug`, `event_category`, `venue`, `page_path`, `language` |
| `ticket_click` | `event_slug`, `venue`, `page_path`, `language` |
| `guide_internal_click` | `source_guide`, `destination`, `page_path`, `language` |
| `attraction_official_click` | `attraction`, `destination`, `page_path`, `language` |
| `shopping_store_click` | `store`, `category`, `area`, `page_path`, `language` |
| `excursion_official_click` | `excursion`, `destination`, `page_path`, `language` |
| `excursion_filter_use` | `filter`, `page_path`, `language` |

## Eventos clave en GA4

En Google Analytics, marcar como eventos clave:

- `booking_click`
- `whatsapp_click`

Opcionalmente, crear dimensiones personalizadas para `placement`, `language`, `source_guide`, `destination`, `event_slug`, `event_category` y `venue`.

## Consentimiento

La web mantiene el banner de cookies existente. Antes de aceptar, GA4 carga con `analytics_storage: denied`. Al aceptar, el banner actualiza el consentimiento a `granted`.

Conviene revisar el texto legal y la politica de privacidad antes de activar campanas de pago o audiencias avanzadas.

## Opt-out del propietario

Para excluir visitas propias:

```text
https://stayfuengirola.com/es?disable_analytics=1
```

Para volver a activar la medicion en ese navegador:

```text
https://stayfuengirola.com/es?enable_analytics=1
```

La preferencia se guarda en `localStorage`.

## Comprobacion

En produccion:

1. Abrir una ventana privada en `https://stayfuengirola.com/es`.
2. Aceptar cookies.
3. Revisar en DevTools que solo se carga una peticion a `googletagmanager.com/gtag/js`.
4. Filtrar la red por `collect` y comprobar un unico `page_view` por ruta.
5. Hacer clic en Booking y WhatsApp y comprobar `booking_click` y `whatsapp_click`.
6. Cambiar idioma y comprobar `language_change`.
7. Abrir GA4 DebugView o Realtime para confirmar eventos.
