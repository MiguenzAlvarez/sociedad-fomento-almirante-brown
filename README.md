# Sociedad de Fomento Almirante Brown

Sitio institucional de la Sociedad de Fomento Almirante Guillermo Brown, una organización vecinal sin fines de lucro de Junín, Buenos Aires. La web reúne su historia, servicios de salud, talleres, actividades comunitarias, fotografías y canales de contacto.

## Sitio publicado

[Visitar la página en Netlify](https://sociedad-fomento-almirante-brown.netlify.app/)

## Origen del proyecto

Este proyecto nació durante el primer año de una carrera terciaria como parte de una propuesta de aprendizaje con impacto social. La consigna consistía en aportar lo aprendido a una institución que brindara servicios gratuitos a la comunidad.

El trabajo con la Sociedad de Fomento permitió conocer una experiencia real de organización vecinal, conversar con sus integrantes, recopilar información y transformar ese material en una herramienta digital. En Argentina, las sociedades de fomento son organizaciones comunitarias sin fines de lucro que impulsan mejoras barriales, talleres, actividades y redes de apoyo para sus vecinos.

La primera versión fue un proyecto académico. Esta nueva edición retoma aquella experiencia desde el segundo año de la carrera y la reconstruye con una identidad más clara, mejor accesibilidad, diseño adaptable y mayor protagonismo para la historia y el archivo fotográfico de la institución.

El objetivo continúa siendo el mismo: retribuir una parte del impacto que la Sociedad de Fomento genera en su comunidad.

## Características

- Presentación institucional e historia vecinal integradas en un mismo relato.
- Información del Centro de Atención Primaria de la Salud organizada por día.
- Sección de talleres y actividades comunitarias.
- Galería fotográfica horizontal con navegación táctil y por botones.
- Acceso al grupo oficial de Facebook para consultar novedades.
- Enlace directo a la ubicación de la institución.
- Navegación fija, responsive y accesible mediante teclado.
- Diseño optimizado para computadoras, tablets y celulares.
- Identidad visual y favicon propios.

## Tecnologías

- HTML5 semántico
- CSS3 responsive
- JavaScript sin frameworks
- Sitio estático, compatible con Netlify, GitHub Pages y otros servicios de hosting

## Estructura

```text
.
├── dist/
│   ├── assets/          # Logos y fotografías
│   ├── data/            # Datos editables para novedades
│   ├── index.html       # Página principal
│   ├── script.js        # Interacciones, pestañas y carrusel
│   └── styles.css       # Sistema visual y estilos responsive
├── .openai/
│   └── hosting.json     # Configuración del hosting actual
├── NOVEDADES.md         # Guía para actualizar novedades
└── server.mjs           # Servidor local sencillo
```

## Ejecutar localmente

Se necesita una versión reciente de [Node.js](https://nodejs.org/).

```bash
node server.mjs
```

Luego, abrir en el navegador la dirección indicada por la terminal.

También se puede servir directamente la carpeta `dist/` con cualquier servidor de archivos estáticos.

## Publicar en Netlify

El proyecto no requiere compilación:

1. Crear un nuevo sitio en Netlify.
2. Conectar este repositorio.
3. Dejar vacío el comando de build.
4. Usar `dist` como directorio de publicación.

## Actualización de contenidos

- Los horarios y textos principales están en `dist/index.html`.
- Las imágenes se guardan en `dist/assets/`.
- Las novedades editables se documentan en [`NOVEDADES.md`](NOVEDADES.md).
- Facebook se enlaza como fuente oficial; no se simula un feed automático que Meta no permita consultar públicamente.

## Enlaces del proyecto original

- [Presentación académica](https://lnkd.in/dQwxTDFK)
- [Primera versión de la página](https://super-gecko-7a2ee7.netlify.app/)
- [Grupo oficial de la Sociedad de Fomento](https://www.facebook.com/groups/120524758496899)

## Créditos y uso de imágenes

Proyecto realizado con cariño y respeto por la comunidad de la Sociedad de Fomento Almirante Guillermo Brown.

Las fotografías y los elementos de identidad institucional pertenecen a la Sociedad de Fomento y se utilizan para comunicar sus actividades. No deben reutilizarse fuera de este proyecto sin la autorización correspondiente.
