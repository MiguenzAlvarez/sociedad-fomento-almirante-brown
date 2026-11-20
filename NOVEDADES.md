# Cómo publicar novedades

La sección “Últimas novedades” lee el archivo `dist/data/novedades.json`.

Mientras el archivo contenga `[]`, el sitio muestra un acceso directo al grupo oficial de Facebook. Para agregar publicaciones, reemplazá ese contenido por una lista con este formato:

```json
[
  {
    "fecha": "2026-11-20",
    "categoria": "Talleres",
    "titulo": "Título breve de la novedad",
    "resumen": "Un resumen de una o dos oraciones.",
    "imagen": "assets/nombre-de-la-foto.jpg",
    "enlace": "https://www.facebook.com/groups/120524758496899/posts/ID_DEL_POST"
  }
]
```

- El sitio muestra como máximo las tres primeras publicaciones del archivo.
- `imagen` es opcional. Guardá las imágenes dentro de `dist/assets/`.
- `enlace` debe apuntar a la publicación original de Facebook.
- Esta estructura funciona sin cambios en Netlify.

Para automatizarlo en el futuro, una Netlify Function puede generar la misma respuesta JSON usando la API oficial de Meta. El token debe guardarse como variable de entorno y nunca dentro del repositorio.
