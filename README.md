# Portfolio personal de videografía y fotografía

Este proyecto contiene una plantilla de página web de tipo *portfolio* diseñada para una videógrafa/fotógrafa especializada en marketing digital. Está construida con **HTML**, **CSS** y una pequeña porción de **JavaScript** para la interacción. No necesita compilación ni dependencias externas. El objetivo es ofrecer una web moderna, minimalista y visual, fácilmente editable por cualquier persona con nociones básicas de HTML/JavaScript.  
La plantilla está preparada para representar a **Nadine Canet**, pero puedes cambiar el nombre y contenidos fácilmente.

## Estructura de carpetas

```
portfolio-site/
│
├── index.html        ← Página principal (HTML + JS)
├── style.css         ← Hoja de estilos globales
├── README.md         ← Este documento con instrucciones
└── assets/
    └── images/       ← Imágenes de fondo, favicon, logotipo y logotipos de clientes
        ├── hero-bg.png        (fondo de la portada y categoría Cortos)
        ├── pastel-bg.png      (imagen vertical para Sobre mí y Cortos)
        ├── moda-bg.png        (imagen de la categoría Cortos)
        ├── publicitad-bg.png  (imagen de la categoría Marcas y tarjeta de categoría)
        ├── comida-bg.png      (imagen de la categoría Marcas)
        ├── viajes-bg.png      (imagen de la categoría Marcas)
        ├── brand4.png         (imagen extra para la categoría Marcas)
        ├── about-vertical.png (imagen vertical para la sección Sobre mí)
        ├── client1.png        (logotipo abstracto de cliente 1)
        ├── client2.png        (logotipo abstracto de cliente 2)
        ├── client3.png        (logotipo abstracto de cliente 3)
        ├── client4.png        (logotipo abstracto de cliente 4)
        ├── favicon.png        (icono para la pestaña del navegador)
        └── logo.png           (logotipo/monograma abstracto)
```

## Cómo ver la web

1. Copia la carpeta `portfolio-site` en tu ordenador.
2. Abre el archivo `index.html` en cualquier navegador moderno (Google Chrome, Firefox, Safari…).
3. No se necesita servidor ni instalación de dependencias, ya que la página es completamente estática y se ejecuta directamente en el navegador.

## Personalización de contenidos

Todo el contenido editable se encuentra en el archivo `index.html`. A continuación se indican las principales secciones que puedes modificar:

### Datos personales

En el archivo `index.html` localiza las secciones `Hero`, `Sobre mí` y `Estilo`. Allí encontrarás textos como el nombre (`Nadine Canet`), la biografía, valores y descripciones. Sustitúyelos por tu nombre y tu propia historia.

### Galería de fotos y cortometrajes

Las categorías se definen directamente en `index.html`, dentro de la sección **Galería**. La plantilla incluye dos categorías predeterminadas:

* **Cortos**: muestra fotogramas representativos de tus cortometrajes y, justo debajo, incrusta los vídeos completos mediante iframes de Vimeo o YouTube.  
* **Marcas**: muestra imágenes fijas creadas para diferentes marcas.

Para añadir una nueva categoría:

1. Copia una tarjeta de categoría existente (elemento `<a>` con clase `category-card`) dentro del contenedor `category-grid`. Cambia su atributo `href` a un nuevo identificador (por ejemplo, `#galeria-bodas`), actualiza el `style` con la imagen de fondo deseada (`background-image: url('assets/images/bodas-bg.png');`) y edita el texto visible.
2. Más abajo en el documento, duplica una de las secciones `<div class="category-section">`, cambia su atributo `id` al nuevo identificador y modifica el encabezado `<h3>` con el nombre de la categoría.
3. Dentro de la `image-grid` de esa sección añade tus propias imágenes con etiquetas `<img src="assets/images/mifoto.jpg" alt="Descripción" />`. Cada `<img>` es independiente; cambiar una imagen **no** afecta a las demás.

Para añadir o eliminar fotogramas o vídeos dentro de **Cortos**, edita las etiquetas `<img>` y `<iframe>` en su sección. Los vídeos se incrustan mediante etiquetas `<iframe>` dentro del contenedor `.videos-grid`. Sustituye el atributo `src` del iframe por la URL de incrustación de tu vídeo (Vimeo: `https://player.vimeo.com/video/ID`; YouTube: `https://www.youtube.com/embed/ID`) y actualiza el atributo `title`.

### Clientes

Los clientes se muestran como una cuadrícula de logotipos (`<div class="client-logo"><img …/></div>`) dentro del contenedor `clients-grid`. Para sustituir un logotipo:

1. Coloca tu imagen de logotipo en `assets/images/` y anótate su nombre.  
2. Sustituye el atributo `src` de la etiqueta `<img>` correspondiente por la ruta de tu nuevo archivo (ejemplo: `assets/images/logotipo-miempresa.png`).  
3. Ajusta el atributo `alt` para describir brevemente la empresa.

Si deseas añadir más clientes, duplica uno de los bloques `.client-logo` y actualiza la imagen y el texto alternativo. El diseño se adapta automáticamente a cuatro columnas en escritorio y a filas en móvil.

### Testimonios

Los testimonios están escritos como tarjetas dentro del contenedor `testimonial-grid` en la sección **Testimonios**. Cada tarjeta (`.testimonial-card`) contiene un párrafo con la cita, un elemento con el nombre del autor (`.author`) y otro con su cargo o empresa (`.role`). Sustituye estos textos por los de tus clientes. Copia una tarjeta existente para añadir nuevos testimonios.

### Formulario de contacto

El formulario de contacto se gestiona con un pequeño script situado al final de `index.html`. Cuando el usuario envía el formulario, se abre su cliente de correo predeterminado con los datos precargados. Para que los mensajes lleguen a tu buzón:

1. Busca en el bloque de `<script>` la línea que contiene `mailto:tuemail@example.com`.
2. Sustituye `tuemail@example.com` por tu dirección de correo electrónico real.

Si prefieres utilizar un servicio externo (por ejemplo, Formspree), elimina el manejador `submit` y sigue las instrucciones del servicio para configurar el formulario.

### Iconos de redes sociales

En el pie de página (`footer`) se incluyen iconos de Instagram, Vimeo y YouTube mediante [Font Awesome](https://fontawesome.com/). Actualiza los enlaces (`href`) con tus propias URLs de redes sociales. Para añadir más iconos consulta la documentación de Font Awesome y copia la estructura de los enlaces existentes.

## Publicación en línea

Esta plantilla es totalmente estática, por lo que se puede publicar fácilmente en cualquier alojamiento de archivos estáticos (GitHub Pages, Vercel, Netlify, etc.). Para ello:

1. Sube el contenido de la carpeta `portfolio-site` a tu repositorio o alojamiento.
2. Asegúrate de mantener la estructura de carpetas (`assets/images` y los archivos `index.html` y `style.css`).
3. Configura el servicio de hosting para servir `index.html` como página principal.

## Créditos y licencias

Los fondos utilizados como imágenes de ejemplo fueron generados mediante un modelo de inteligencia artificial y son libres de derechos. Sustitúyelos por tus propias fotografías y miniaturas para obtener un portfolio personalizado y profesional.

---

¡Disfruta creando tu portfolio y mostrando tu talento al mundo!