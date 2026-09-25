# NACC Films · Nadine Canet Cebolla

Portfolio de vídeo, fotografía y contenido audiovisual. HTML, CSS y JavaScript, sin compilación ni dependencias de instalación. Versión preparada el 23 de septiembre de 2026.

## Ver la web en tu ordenador

Descomprime el ZIP y abre `index.html`. La web, los filtros y las fichas funcionan sin conexión. Instagram y el correo necesitan su aplicación o conexión correspondiente. El botón de copiar correo puede requerir HTTPS; si el navegador lo bloquea, selecciona la dirección para copiarla manualmente.

## Publicar en el repositorio existente

Repositorio: https://github.com/ignasitormoblanch/portfolio-nadne

1. Entra en GitHub con una cuenta con permiso de escritura en ese repositorio.
2. Guarda una copia del estado actual: **Code → Download ZIP**.
3. Abre la raíz del repositorio. En **Add file → Upload files**, arrastra **el contenido de esta carpeta**, no el ZIP ni la carpeta que lo envuelve. `index.html` debe quedar en la raíz. Confirma la sustitución de los archivos existentes. Son menos de 100 archivos y ninguno supera los límites de subida del navegador.
4. Comprueba que aparecen `index.html`, `style.css`, `script.js`, `assets` y `proyectos` en la raíz. `marcas/versedia.html` conserva la antigua dirección y lleva a la ficha nueva.
5. En **Settings → Pages → Build and deployment**, selecciona **Deploy from a branch**, la rama **main**, la carpeta **/(root)** y guarda. Si el repositorio ya publica así, no necesitas cambiar esta configuración.
6. Espera a que GitHub termine el despliegue. Pages mostrará la URL publicada. Si no hay dominio personalizado, la dirección prevista es:

   https://ignasitormoblanch.github.io/portfolio-nadne/

Documentación oficial: https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

### Si usas GitHub Desktop

Clona `ignasitormoblanch/portfolio-nadne`, copia el contenido de esta carpeta encima de la copia local, revisa los cambios, crea un commit y pulsa **Push origin**. Conserva cualquier configuración de dominio (`CNAME`) o automatización que ya use el repositorio. Esta entrega no necesita añadir automatizaciones.

## Qué contiene

- `index.html`: portada, proyectos, filtros, presentación, experiencia y contacto.
- `proyectos/fecfruit.html`: fotografía de marca.
- `proyectos/versedia.html`: contenido para redes.
- `proyectos/lolita.html`: selección visual del videoclip.
- `proyectos/otros.html`: otros trabajos de fotografía y audiovisual.
- `proyectos/disdenes.html`: cortometraje en circuito de festivales.
- `marcas/versedia.html`: compatibilidad con la antigua URL.
- `style.css`: diseño, colores y adaptación a móvil.
- `script.js`: menú, filtros, ampliación de imágenes y copia del correo.
- `assets/images/`: imágenes optimizadas para web y miniatura para compartir.
- `assets/fonts/`: tipografía Manrope y su licencia SIL OFL.

## Cómo editarla

**Textos:** se editan en los HTML. No hace falta modificar JavaScript para cambiar nombres, biografía, experiencia o descripciones. Los datos de cada ficha están en su HTML correspondiente.

**Correo:** busca `nacc.fotovideo@gmail.com` en los HTML. Cambia también el atributo `data-copy-email` del botón de copia. La web abre el correo del visitante; no simula un formulario de envío ni requiere un servidor.

**Instagram:** busca `https://www.instagram.com/nacc.films/` en `index.html`.

**Fotos:** sustituye el archivo correspondiente en `assets/images/`, o actualiza el `src` y el texto `alt` en el HTML. Para mejores resultados, usa los originales a buena resolución: las imágenes de proyectos de esta entrega proceden de las cuatro láminas facilitadas, así que su nitidez máxima está limitada por ese material. Las láminas completas también se conservan en las fichas.

**Nuevo proyecto:** duplica una ficha en `proyectos/`, cambia su contenido y añade una tarjeta en `index.html`. Usa `data-category="photo"`, `"film"` o `"social"` (pueden combinarse con espacios), y actualiza los contadores de los filtros y los enlaces de “Siguiente proyecto”.

**Vídeos:** no se han inventado enlaces a vídeos. Lolita se presenta mediante las imágenes proporcionadas. Cuando Nadine facilite el enlace oficial, puede añadirse a su ficha. Disdenes permanece sin vídeo público mientras continúa el circuito de festivales.

**Compartir en redes:** los metadatos `og:image` apuntan a la URL prevista de GitHub Pages. Si se usa otro repositorio o dominio, sustituye el prefijo `https://ignasitormoblanch.github.io/portfolio-nadne/` en todos los HTML.

## Criterio de contenido

La referencia editorial es `NACC_FILMS_portfolio_web.zip`: datos de contacto, nombre, formación, experiencia y proyectos. Se incorpora el retrato de Nadine de `portfolio-nadne-main.zip`.

Se retiran cifras de rendimiento, testimonios, marcas de ejemplo, teléfono de muestra y vídeos genéricos del diseño anterior porque no están respaldados por la versión aportada por Nadine. Tampoco se publica el enlace vacío de LinkedIn. Los textos nuevos describen los trabajos sin atribuir resultados, premios o funciones profesionales adicionales.

Las fotografías y los proyectos pertenecen a sus autores. La licencia SIL OFL adjunta corresponde únicamente a la tipografía Manrope.

## Comprobaciones de esta entrega

Verificados los 7 HTML, las rutas y anclas internas, las 18 imágenes, los recuentos de categorías y la sintaxis de JavaScript. No se ha podido completar la comprobación visual en navegador por una restricción del entorno de revisión. Antes de sustituir la web publicada, abre `index.html`, comprueba el diseño en ordenador y móvil y prueba los filtros, el menú y la ampliación de imágenes.
