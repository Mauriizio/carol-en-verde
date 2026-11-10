# Guía del proyecto

- Mantén el contenido comercial fiel al PDF original de Carol; no inventes tarifas, credenciales, testimonios, inventario ni resultados.
- Conserva la paleta crema, verde salvia/oliva, verde bosque, terracota y mostaza para CTA. Tipografías: Playfair Display, Montserrat y Special Elite en anotaciones breves.
- Conserva las fotos originales en `imagenes/`; las copias de producción están optimizadas en `public/images/`.
- Los servicios se definen en `lib/brand.ts` y sus rutas se generan desde esos datos.
- El catálogo es de consulta por WhatsApp. No añadas checkout, stock o precios sin datos reales y una solicitud explícita.
- Mantén rutas accesibles, responsive y mensajes de WhatsApp contextualizados mediante `brand.whatsappLink()`.
- Nunca incluyas secretos, `.env*`, ni el PDF de la clienta en el repositorio público.
