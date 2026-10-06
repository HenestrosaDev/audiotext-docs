---
title: La transcripción
description: Reproduce, busca, corrige, copia y exporta una transcripción, y mira los vídeos con sus subtítulos.
sidebar:
  order: 3
---

Selecciona una transcripción en el [historial](/es/guides/history/) para abrirla. La barra de herramientas cambia entre tres modos, **Transcripción**, **Texto plano** y **Resumen**, y tiene los botones **Traducir**, **Copiar** y **Exportar**.

## Transcripción

Muestra cada segmento de la transcripción (una frase o una parte de una frase larga) con cuándo empieza y termina y, si se identificaron los hablantes, su hablante.

Por defecto, los tiempos se muestran simplificados (`01:05 – 01:09`). Para verlos al milisegundo, como en los subtítulos (`00:01:05,900 – 00:01:09,350`), marca **Marcas de tiempo precisas (00:00:01,000)** en el menú `⋯`.

Las marcas de tiempo solo están disponibles con **WhisperX** y con los modelos `whisper-1` y `gpt-4o-transcribe-diarize` de la **API de Whisper**. Sin ellas, la transcripción no se puede reproducir segmento a segmento; usa el modo **Texto plano**.

### Reproduce el audio

- **Haz clic en un segmento** para reproducir el audio desde ahí. El segmento que se reproduce se resalta, y el texto sigue la reproducción. Con los tiempos por palabra, también se resalta cada palabra.
- Usa la barra del reproductor para reproducir, pausar, moverte a cualquier punto y cambiar la **velocidad**, de `0.5×` a `2×`, manteniendo el tono de las voces.
- Atajos de teclado: `Espacio` reproduce o pausa, y `←`/`→` retroceden o avanzan 5 segundos.

Si el archivo de origen se ha movido o eliminado, el audio no está disponible, pero el texto sí. Audiotext guarda las grabaciones del micrófono, así que siempre se pueden reproducir.

![Una transcripción reproduciéndose, con el segmento actual resaltado](/screenshots/transcript.png)

### Mira vídeos con subtítulos

Las transcripciones de vídeos muestran el vídeo encima del texto. Su menú te permite **Mostrar subtítulos en el vídeo** y elegir su **Tamaño** (pequeño, mediano o grande), su **Posición** (abajo o arriba) y su **Estilo** (fondo oscuro o contorno). Si la transcripción tiene una [traducción](/es/guides/summary-and-translation/#traducción), el menú también elige si los subtítulos muestran la **Transcripción** o la **Traducción al…** su idioma.

### Busca

Pulsa `Ctrl+F` (`⌘F` en macOS) y escribe. `Enter` y `Mayús+Enter` van a la coincidencia siguiente y anterior, y `Esc` borra la búsqueda.

## Corrige la transcripción

Para corregir la transcripción sin perder sus marcas de tiempo (que usan los subtítulos y la reproducción), usa las opciones del menú `⋯` o haz clic derecho en un segmento:

- **Buscar y reemplazar…**: reemplaza una palabra o una frase en toda la transcripción, p. ej. un nombre mal escrito. Muestra cuántas veces aparece el texto antes de reemplazarlo, y puede **Distinguir mayúsculas**.
- **Renombrar hablantes…**: da un nombre a cada hablante (`SPEAKER_00` → `Ana`). Dar el mismo nombre a dos hablantes los fusiona.
- **Editar el texto…**: haz clic derecho en un segmento para cambiar su texto.
- **Reproducir desde aquí**: haz clic derecho en un segmento para reproducirlo.

Las palabras que no cambian mantienen sus tiempos, así que se siguen resaltando al reproducir.

## Texto plano

El modo **Texto plano** te permite editar el texto libremente, como en un editor de texto. Los cambios se guardan automáticamente. La transcripción conserva el texto original con sus marcas de tiempo, así que los subtítulos no usan los cambios del texto plano.

## Copia y exporta

**Copiar** copia el texto del modo actual (la transcripción, el resumen o la traducción).

**Exportar** (o `Ctrl+S`, `⌘S` en macOS) guarda la transcripción como:

| Formato | Contenido |
| --- | --- |
| Texto plano (`.txt`) | El texto |
| Markdown (`.md`) | El resumen, si lo hay, y el texto en párrafos con la marca de tiempo y el hablante de cada uno |
| Documento de Word (`.docx`) | Lo mismo que Markdown, listo para editar o imprimir |
| Subtítulos (`.srt`) | Subtítulos para reproductores de vídeo |
| Subtítulos web (`.vtt`) | Subtítulos para la web |
| Tabla (`.tsv`) | Una fila por segmento, con su inicio y su fin (en milisegundos) y su texto |
| JSON (`.json`) | El texto, los segmentos con sus marcas de tiempo, palabras y hablantes, y el resumen, si lo hay |

Los subtítulos y la tabla necesitan marcas de tiempo.

Si la transcripción tiene una traducción, elige **Traducción al…** en el mismo menú (o haz clic en el botón de exportar de la traducción) para exportar la traducción en los mismos formatos. El nombre del archivo incluye su idioma (p. ej. `video.es.srt`), así que los reproductores de vídeo la cargan con el vídeo.

## Renombra, etiqueta y añade notas

La cabecera de la transcripción muestra su nombre, su origen, su fecha y su etiqueta. Haz doble clic en el nombre para renombrarla, haz clic en la etiqueta para cambiarla o haz clic en **Añadir nota** para escribir una nota sobre ella. Haz clic en la nota, o en su lápiz, para editarla, y en su papelera para eliminarla. Hay más opciones en el [historial](/es/guides/history/).
