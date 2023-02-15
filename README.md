# Metasearch

Este proyecto tiene como objetivo crear una plataforma que permita a los usuarios buscar cursos en línea ofrecidos por diferentes proveedores. La idea es reunir y agrupar todas las opciones disponibles en un solo lugar para que los usuarios puedan encontrar la opción que mejor se adapte a sus necesidades. De esta manera, los usuarios no tendrán que navegar por múltiples sitios web para encontrar el curso que buscan, lo que ahorra tiempo y hace que la búsqueda sea más eficiente.

# Kubernetes

Para ejecutar el proyecto en Kubernetes, sigue estos pasos:

1. Abre una terminal y ubícate en el directorio `./kubernetes` del proyecto.
2. Ejecuta el siguiente comando para aplicar los recursos de Kubernetes:

`kubectl apply -f .`


## Endpoints de la API

Esta es la lista de endpoints disponibles en la API (Puerto por defecto 30900):

### `GET /api/courses/allCourses`

Este endpoint devuelve todos los cursos disponibles en la plataforma.

Ejemplo de respuesta:
```
[
  {
    "_id": "63ec57f063a5c57a98c69467",
    "titulo": "Curso Profesional de JavaScript",
    "url": "https://platzi.com/cursos/javascript-profesional/",
    "proveedor": "Platzi",
    "habilidades": "Mejora tus habilidades en Javascript. Conoce Typescript y cómo puedes ocuparlo para mejorar el control de tus variables. Comprende      conceptos avanzados que te permitan plantear mejores soluciones en tu código. Conoce las APIs del DOM y descubre cómo puedes organizar mejor tu código utilizando patrones de diseño.",
    "rating": 4.5,
    "resenias": "(3,4k reseñas)",
    "imagen": ""
  },
  ...
]
```


### `GET /api/courses/searchCourses/:word`

Este endpoint permite buscar cursos que contengan la palabra especificada en `:word`.

Ejemplo de uso:

`GET /api/courses/searchCourses/rust`

Ejemplo de respuesta:

```
[
  {
    "id": 263,
    "titulo": "Aprende a programar con Rust",
    "descripcion": "Guia completa",
    "precio": 197900,
    "link": "https://www.udemy.com/course/aprende-a-programar-con-rust/"
  }
]
```

### `GET /api/courses/getCoursesByRating/:rating`

Este endpoint permite buscar cursos con el rating especificado en `:rating`.

Ejemplo de uso:

`GET /api/courses/getCoursesByRating/4.9`

Ejemplo de respuesta:

```
[
  {
    "_id": "63ec57f063a5c57a98c6947f",
    "titulo": "Nuevo Curso de Introducción a MongoDB",
    "url": "https://platzi.com/cursos/mongodb/",
    "proveedor": "Platzi",
    "habilidades": "¡Crea tu primera base de datos no relacional con MongoDB! Descubre qué son bases de datos NoSQL y su diferencia con las bases relacionales.",
    "rating": 4.9,
    "resenias": "(0,1k reseñas)",
    "imagen": ""
  },
  {
    "_id": "63ec57f063a5c57a98c69480",
    "titulo": "Curso de Modelamiento de Datos en MongoDB",
    "url": "https://platzi.com/cursos/mongodb-modelamiento/",
    "proveedor": "Platzi",
    "habilidades": "Perfecciona la validación datos para el almacenamiento y consultas de tu proyecto. Descubre cuándo vale la pena trabajar con relaciones embebidas o referenciadas.",
    "rating": 4.9,
    "resenias": "(0,1k reseñas)",
    "imagen": ""
    }
]
```
