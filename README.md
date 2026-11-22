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

## Contenido

- `content/projects/`: fichas de proyectos y capturas.
- `content/about/`: presentación y contacto.
- `content/resume/`: experiencia, educación y certificaciones.
- `static/cv/`: versiones descargables del CV.
- `config/_default/`: idiomas, navegación y configuración de Blowfish.

## Publicación

Cada push a `main` compila el sitio y lo despliega en GitHub Pages.