# Instrucciones para agentes

## Hugo y Blowfish

- Respeta la estructura de Hugo y la versión de Blowfish fijada por el submódulo.
- Consulta los archivos del tema cuando necesites entender cómo funciona una opción.
- Implementa las personalizaciones en el proyecto. Mantén intacto `themes/blowfish/`.
- Escribe el contenido en Markdown y la configuración en TOML, bajo `config/_default/`.
- Usa las funciones nativas de Blowfish para la presentación. Crea un shortcode, una plantilla o CSS propio cuando el requisito lo justifique.

## Contenido bilingüe

- Mantén el español como idioma predeterminado en `/` y el inglés en `/en/`.
- Al crear o cambiar contenido público, mantén equivalentes las versiones en español e inglés.
- Haz que los enlaces internos lleven a la versión del idioma activo.
- Organiza cada proyecto en `content/projects/<slug>/`, con ambas traducciones y sus recursos compartidos.
- Guarda los PDF del CV en `static/cv/`.
- Usa marcadores de posición breves cuando falten datos profesionales reales.

## Alcance y verificación

- Trabaja en cambios pequeños/medianos (depende del contexto) que puedas comprobar en el navegador.
- Preserva los cambios previos del usuario y limita cada intervención a lo solicitado.
- Valida cada cambio con una compilación de Hugo y comprueba en el navegador el recorrido afectado en ambos idiomas cuando corresponda.
- Informa qué comprobaste y qué quedó pendiente.
- Haz commits, push o despliegues solo cuando se soliciten.
