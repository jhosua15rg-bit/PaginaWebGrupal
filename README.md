# IESTP Huanta

Sitio web estático del Instituto de Educación Superior Tecnológico Público Huanta.

## Estructura

- `index.html`: página de inicio y única página que usa JavaScript actualmente.
- `pages/`: páginas internas enlazadas desde el sitio.
- `components/`: fragmentos HTML reutilizables y referencias de secciones.
- `css/tailwind.css`: fuente de estilos y configuración de escaneo de Tailwind.
- `css/tailwind.generated.css`: salida generada para el navegador. No editar manualmente.
- `js/`: comportamiento del sitio; `app.js` controla el menú móvil del inicio.
- `assets/`: imágenes y otros recursos estáticos.

## Desarrollo

Instala las dependencias y regenera los estilos con:

```bash
npm install
npm run build:css
```

Para regenerarlos automáticamente mientras se editan los HTML:

```bash
npm run watch:css
```
