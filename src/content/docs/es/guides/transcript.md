---
title: La transcripción
description: Reproduce, busca, corrige, revisa, copia y exporta una transcripción, y mira o exporta los vídeos con sus subtítulos.
sidebar:
  order: 3
---

Selecciona una transcripción en el [historial](/es/guides/history/) para abrirla. La barra de herramientas cambia entre cuatro modos, **Subtítulos**, **Texto plano**, **Resumen** y **Preguntar**, y tiene el botón **Traducir** y el menú `⋯`.

La transcripción se muestra en una tarjeta titulada con su idioma. Los botones de su cabecera buscan y reemplazan en ella, la copian, la exportan y la **Vuelven a transcribir** (después de preguntarte, ya que se pierden las correcciones de su texto).

## Subtítulos

Muestra la transcripción dividida en los subtítulos del vídeo, con cuándo empieza y termina cada uno y, si se identificaron los hablantes, su hablante. Su longitud sigue las [preferencias de los subtítulos](/es/reference/preferences/#subtítulos).

Por defecto, los tiempos se muestran al milisegundo, como en los subtítulos (`00:01:05,900 – 00:01:09,350`). Para simplificarlos (`01:05 – 01:09`), desmarca **Marcas de tiempo precisas (HH:MM:SS,mmm)** en el menú `⋯`.

Encima de los subtítulos, una línea los cuenta y, si se han identificado los hablantes, también a ellos (p. ej. `Subtítulos: 120 · Hablantes: 3`). Un segmento largo dividido en varios subtítulos cuenta como varios.

Las marcas de tiempo solo están disponibles con **WhisperX** y con los modelos `whisper-1` y `gpt-4o-transcribe-diarize` de la **API de Whisper**. Sin ellas, la transcripción no se puede reproducir subtítulo a subtítulo; usa el modo **Texto plano**.

### Reproduce el audio

- **Haz clic en un subtítulo** para reproducir el audio desde ahí. El subtítulo que se reproduce se resalta y se mantiene en el centro del texto. Con los tiempos por palabra, también se resalta cada palabra.
- Usa la barra del reproductor para reproducir, pausar, moverte a cualquier punto y cambiar la **velocidad**, de `0.5×` a `2×`, manteniendo el tono de las voces.
- Atajos de teclado: `Espacio` reproduce o pausa, y `←`/`→` retroceden o avanzan 5 segundos.

Si el archivo de origen se ha movido o eliminado, el audio no está disponible, pero el texto sí. Audiotext guarda las grabaciones del micrófono, así que siempre se pueden reproducir.

![Una transcripción reproduciéndose, con el segmento actual resaltado](/screenshots/transcript.png)

### Mira vídeos con subtítulos

Las transcripciones de vídeos muestran el vídeo encima del texto. Su menú te permite **Mostrar subtítulos en el vídeo** y elegir su **Tamaño** (pequeño, mediano o grande), su **Posición** (abajo o arriba) y su **Estilo** (fondo oscuro o contorno). Si la transcripción tiene [traducciones](/es/guides/summary-and-translation/#traducción), el menú también elige si los subtítulos muestran la **Transcripción** o la **Traducción al…** un idioma. El botón **Subtítulos** de la barra del reproductor también los muestra u oculta, y la flecha junto a él abre el mismo menú.

## Busca y reemplaza

Pulsa `Ctrl+F` (`⌘F` en macOS), o haz clic en la lupa de la cabecera, para abrir la ventana de buscar y reemplazar en el texto con el que trabajas: la transcripción o su traducción. Busca el texto mientras lo escribes (no se buscan las marcas de tiempo ni los hablantes) y muestra cuántas coincidencias hay.

- `Enter` y `Mayús+Enter`, o las flechas, van a la coincidencia siguiente y anterior.
- **Reemplazar** reemplaza la coincidencia actual, y **Reemplazar todo** todas ellas, p. ej. un nombre mal escrito. Marca **Distinguir mayúsculas** para encontrar solo el texto con las mismas mayúsculas.
- La ventana no es modal, así que puedes leer y reproducir el texto mientras está abierta. **Mantener encima** la mantiene sobre la ventana principal.
- `Esc` la cierra.

En el modo **Texto plano**, la ventana solo busca (**Buscar en la transcripción**), ya que una coincidencia ahí no se puede relacionar con un subtítulo. Vuelve a **Subtítulos** para reemplazar.

## Corrige la transcripción

Para corregir la transcripción sin perder sus marcas de tiempo (que usan los subtítulos y la reproducción), usa la ventana de [Buscar y reemplazar](#busca-y-reemplaza) o haz clic derecho en un subtítulo:

- **Reproducir desde aquí**: lo reproduce.
- **Copiar**: copia su texto.
- **Editar texto…**: cambia su texto.
- **Editar tiempos…**: cambia cuándo empieza y termina, al milisegundo. Escribe los tiempos como `00:01:05,900`, `01:05,9` o `65.9`.
- **Añadir subtítulo después…**: añade un subtítulo que falta, que por defecto ocupa el hueco hasta el siguiente. Si se identificaron los hablantes, elige quién lo dice (por defecto, el hablante del subtítulo anterior) o escribe uno nuevo. Se añade cuando escribes su texto.
- **Cambiar hablante…**: si se identificaron los hablantes, elige quién lo dice, o un hablante nuevo. A diferencia de **Renombrar hablantes…**, solo cambia este subtítulo.
- **Renombrar hablantes…**: da un nombre a cada hablante (`SPEAKER_00` → `Ana`). Dar el mismo nombre a dos hablantes los fusiona. También está en el menú `⋯`.
- **Eliminar subtítulo**: lo elimina. Si tiene texto, te pide confirmación.

Las palabras que no cambian mantienen sus tiempos, así que se siguen resaltando al reproducir. Un subtítulo cuyos tiempos cambias, o que añades, no tiene tiempos por palabra, así que sus palabras no se resaltan ni se subrayan como de baja confianza.

## Revisa las palabras de baja confianza

Las palabras de las que el motor está menos seguro se subrayan, para que sepas dónde revisar primero. WhisperX puntúa cada palabra cuando calcula sus tiempos (**Tiempos por palabra**, activado por defecto), y el modelo `whisper-1` de la API de Whisper puntúa cada segmento, así que sus segmentos se subrayan enteros.

Una barra encima del texto muestra cuántas palabras quedan por revisar (p. ej. `3 de 12 por revisar`):

- Sus flechas, o `Ctrl+J` y `Mayús+Ctrl+J` (`⌘J` y `⇧⌘J` en macOS), van a la palabra siguiente y anterior, y mueven el reproductor hasta ellas. Con **Reproducir automáticamente**, cada palabra se reproduce con un momento alrededor.
- `Enter` acepta tal cual la palabra a la que has ido, y pasa a la siguiente. **Aceptar las restantes** acepta todas las que quedan, y **Deshacer** deshace la última revisión.
- Haz clic en una palabra para corregirla en su sitio: escribe el texto correcto y pulsa `Enter` (o **Acéptala** sin cambios). **Volver a reproducir** (`Ctrl+R`, `⌘R` en macOS) la reproduce otra vez, y `Esc` la cierra.
- **Solo marcadas** muestra solo los subtítulos con palabras por revisar.
- Las palabras también se marcan bajo la posición del audio. Haz clic en una marca para ir a su palabra.

Cuando están todas revisadas, **Revisar de nuevo las palabras aceptadas** recupera las palabras que aceptaste. Las palabras corregidas siguen revisadas.

Las palabras se subrayan cuando su puntuación es inferior al 40 %. Elige otro umbral, del 20 % al 70 %, en `⋯` → **Umbral de baja confianza**, o desde **Ajustar umbral** en la barra. Para dejar de subrayarlas y ocultar la barra, desmarca **Resaltar palabras de baja confianza** en el menú `⋯`.

Si una transcripción no tiene puntuaciones, el menú `⋯` dice por qué: **Activa «Tiempos por palabra» y vuelve a transcribirlo**, **No hay modelo de alineación para su idioma**, **Vuelve a transcribirlo para puntuar sus palabras** (se hizo antes de que se puntuaran las palabras) o **Solo WhisperX y whisper-1 puntúan las palabras**.

## Texto plano

El modo **Texto plano** muestra el texto de la transcripción sin marcas de tiempo. Se construye a partir de los subtítulos, así que es de solo lectura, como dice la nota junto a los modos: para cambiarlo, [corrige los subtítulos](#corrige-la-transcripción), y el texto plano los sigue. Así, todas las exportaciones y traducciones usan el mismo texto.

Las transcripciones sin marcas de tiempo (p. ej. de la API de Google) no tienen subtítulos, así que su texto plano se puede editar libremente, como en un editor de texto. Los cambios se guardan automáticamente.

:::note
Las versiones anteriores permitían editar el texto plano de las transcripciones con subtítulos. Al abrir una de esas transcripciones (o traducciones), su texto plano se vuelve a construir a partir de sus subtítulos, así que esos cambios se reemplazan.
:::

## Copia y exporta

El botón de copiar de la cabecera copia el texto de la transcripción.

El botón de exportar (o `Ctrl+S`, `⌘S` en macOS) la guarda como:

| Formato | Contenido |
| --- | --- |
| Documento de Word (`.docx`) | Lo mismo que Markdown, listo para editar o imprimir |
| JSON (`.json`) | El texto, los segmentos con sus marcas de tiempo, palabras y hablantes, y el resumen, si lo hay |
| Markdown (`.md`) | El resumen, si lo hay, y el texto en párrafos con la marca de tiempo y el hablante de cada uno |
| Subtítulos (`.srt`) | Subtítulos para reproductores de vídeo |
| Subtítulos con estilo (`.ass`) | Subtítulos con un color para cada hablante, para reproductores y editores de vídeo |
| Subtítulos web (`.vtt`) | Subtítulos para la web |
| Tabla (`.tsv`) | Una fila por segmento, con su inicio y su fin (en milisegundos) y su texto |
| Texto plano (`.txt`) | El texto |

Los subtítulos y la tabla necesitan marcas de tiempo. Las [traducciones](/es/guides/summary-and-translation/#subtítulos-y-exportación) y el [resumen](/es/guides/summary-and-translation/#resumen) se exportan desde sus propios paneles.

### Exporta el vídeo con sus subtítulos

Para compartir un vídeo donde no se pueden cargar archivos de subtítulos (p. ej. una red social), elige **Vídeo con subtítulos (.mp4)…** en el menú de exportar de la transcripción, o de una traducción. Audiotext hace una copia del vídeo con los subtítulos dibujados encima, tal como se muestran en la aplicación: con su tamaño, su posición y su estilo (consulta [Mira vídeos con subtítulos](#mira-vídeos-con-subtítulos)).

Se hace en segundo plano, y el estado muestra su progreso. Para cancelarlo, elige **Dejar de añadir subtítulos al vídeo** en el mismo menú. La copia es un archivo MP4 (vídeo H.264 y audio AAC), y el vídeo original no cambia.

Si ninguna fuente de tu sistema tiene algunos caracteres de los subtítulos, se dibujan como recuadros, y Audiotext los enumera al terminar. Consulta [Solución de problemas](/es/help/troubleshooting/#el-vídeo-con-subtítulos-muestra-recuadros).

## Renombra, etiqueta y añade notas

La cabecera de la transcripción muestra su nombre, su origen, su fecha y su etiqueta. Haz doble clic en el nombre para renombrarla, haz clic en la etiqueta para cambiarla o haz clic en **Añadir nota** para escribir una nota sobre ella. Haz clic en la nota, o en su lápiz, para editarla, y en su papelera para eliminarla.

El menú `⋯` también tiene estas opciones, y abre la carpeta del archivo de origen o la **carpeta de los archivos guardados**. Hay más opciones en el [historial](/es/guides/history/).
