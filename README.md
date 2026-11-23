# solmos.dev

Portafolio profesional de Sebastián, Ingeniero Civil en Computación de la
Universidad de Chile. Disponible en español e inglés.

Sitio: https://solmos.dev/

## Desarrollo local

Requisitos: Git y Hugo v0.170.1.

```sh
git clone --recurse-submodules https://github.com/sebastianolmos/solmos.dev.git
cd solmos.dev
hugo server -D
```

Abrir http://localhost:1313/.

## Apariencia

- **Espaciado de la portada.** En el bloque `:root` de `assets/css/custom.css`, sube `--home-intro-padding-top` (por defecto, `1.5rem`) para dar más aire arriba y bajar el bloque del perfil. Sube `--home-intro-padding-bottom` (por defecto, `1.5rem`) para dar más aire abajo y subirlo. Con valores iguales, el perfil queda centrado en la primera pantalla. `--home-projects-gap` añade espacio entre esa primera pantalla y los proyectos. Su valor inicial, `clamp(1.5rem, 5svh, 3rem)`, equivale al 5 % de la altura visible, con un mínimo de 1.5 rem y un máximo de 3 rem. Puedes sustituirlo por un valor fijo como `4rem`.
- **Navegación.** En `config/_default/params.toml`, `[header].layout = "floating"` activa el encabezado flotante de Blowfish y `mobileMenuStyle = "dropdown"` selecciona el menú desplegable en móvil. En `assets/css/custom.css`, el bloque `body > header > .fixed > .rounded-2xl` controla el ancho máximo y el radio de la cápsula.
- **Visibilidad de la nebulosa.** En `assets/css/custom.css`, edita `--nebula-visibility-start` y `--nebula-visibility-end` dentro de `:root` para el modo claro y dentro de `:root.dark` para el oscuro. Los valores van de 0 (invisible) a 1 (completamente visible). Las portadas pasan del valor inicial al final. Las páginas interiores usan el valor final. `--nebula-fade-distance` indica cuántos píxeles de scroll toma la transición. Si la portada es más corta, el valor final se alcanza al llegar abajo.
- **Filtro del modo claro.** En el mismo archivo, el bloque `:root` contiene `--nebula-light-invert` (inversión tonal), `--nebula-light-hue` (giro del matiz), `--nebula-light-saturation`, `--nebula-light-contrast` y `--nebula-light-brightness`. En saturación, contraste y brillo, `1` conserva el valor de entrada. Aumenta el número para intensificar el efecto o bájalo para suavizarlo.
- **Paleta.** `colorScheme = "solmos"` en `config/_default/params.toml` carga `assets/css/schemes/solmos.css`. Edita las tripletas RGB separadas por comas. `--color-primary-*` controla los acentos violetas, `--color-secondary-*` los acentos secundarios y `--color-neutral*` las superficies, el texto y los bordes. Cada escala va de `50` (más claro) a `900` (más oscuro). Para ajustar enlaces y controles, revisa especialmente los tonos `600–800` en claro y `200–400` en oscuro.

## Contenido

- `content/projects/`: fichas de proyectos y capturas.
- `content/about/`: presentación y contacto.
- `content/resume/`: experiencia, educación y certificaciones.
- `static/cv/`: versiones descargables del CV.
- `config/_default/`: idiomas, navegación y configuración de Blowfish.

## Publicación

Cada push a `main` compila el sitio y lo despliega en GitHub Pages.
