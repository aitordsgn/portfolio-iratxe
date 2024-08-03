---
title: Ejemplo de Markdown
description: Un archivo de ejemplo mostrando el uso típico de Markdown.
layout: ../../layouts/BlogLayout.astro
---

# Título de nivel 1

## Título de nivel 2

### Título de nivel 3

#### Título de nivel 4

##### Título de nivel 5

###### Título de nivel 6

Este es un párrafo de texto. Aquí puedes escribir contenido y usar **negritas**, _cursivas_, o **_ambos_**.

También puedes ~~tachar texto~~ si lo necesitas.

## Listas

### Lista desordenada

- Elemento 1
  - Sub-elemento 1.1
  - Sub-elemento 1.2
- Elemento 2
- Elemento 3

### Lista ordenada

1. Primer elemento
2. Segundo elemento
   1. Sub-elemento 2.1
   2. Sub-elemento 2.2
3. Tercer elemento

## Citas

> Este es un ejemplo de una cita.
>
> Puedes seguir escribiendo aquí y el texto seguirá siendo parte de la cita.

## Código

### Código en línea

Puedes incluir `código en línea` en tus párrafos.

### Bloque de código

```javascript
function saludo() {
  console.log("Hola, mundo!");
}
```

## Enlaces

[Enlace a Google](https://www.google.com)

[Enlace relativo a otra página](./otra-pagina.md)

## Imágenes

![Texto alternativo](https://via.placeholder.com/150 "Título de la imagen")

## Tablas

| Encabezado 1  | Encabezado 2  | Encabezado 3  |
| ------------- | ------------- | ------------- |
| Fila 1, Col 1 | Fila 1, Col 2 | Fila 1, Col 3 |
| Fila 2, Col 1 | Fila 2, Col 2 | Fila 2, Col 3 |

## Separadores

---

---

## Encapsulando HTML

Puedes encapsular HTML en Markdown si lo necesitas:

<div style="background-color: lightgrey; padding: 10px;">
  Esto es un bloque HTML dentro de un archivo Markdown.
</div>
```

### Explicación del contenido:

- **Metadatos**: La sección entre `---` se usa para metadatos (título, descripción, etc.).
- **Encabezados**: `#` para el nivel 1, `##` para el nivel 2, etc.
- **Énfasis**: `**negritas**`, `*cursivas*`, `**_ambos_**`, `~~tachado~~`.
- **Listas**: Desordenadas (`-` o `*`) y ordenadas (`1.`, `2.`).
- **Citas**: `>`.
- **Código**: En línea `` ` `` y bloques de código con triple backticks ` ``` `.
- **Enlaces**: `[texto](url)`.
- **Imágenes**: `![texto alternativo](url "Título")`.
- **Tablas**: Usando `|` para separar columnas.
- **Separadores**: `---` o `***`.
- **HTML**: Incluir bloques HTML dentro del Markdown.

Este archivo te proporciona una referencia rápida de cómo usar las diferentes funcionalidades de Markdown en tus archivos.
