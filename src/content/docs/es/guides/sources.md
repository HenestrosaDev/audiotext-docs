---
title: Orígenes del audio
description: Transcribe archivos, vídeos de YouTube y enlaces, grabaciones del micrófono, carpetas y carpetas vigiladas.
sidebar:
  order: 1
---

Audiotext transcribe desde cuatro tipos de origen, que eliges en la barra superior, en **Nueva transcripción**.

## Archivo

Transcribe un archivo de audio o vídeo. Haz clic en **Elegir un archivo…** o suelta el archivo en la ventana. El explorador de archivos muestra **Todos los archivos compatibles** por defecto; puedes mostrar solo **Archivos de audio** o **Archivos de vídeo**. Consulta [Formatos e idiomas](/es/reference/formats-and-languages/) para ver los formatos compatibles.

Solo se puede añadir un archivo a la vez. Para transcribir varios archivos, usa el origen [Carpeta](#carpeta).

## URL

Transcribe un **vídeo de YouTube** o un **enlace directo a un archivo de audio o vídeo** (por ejemplo, el episodio de un pódcast). Pega la URL (con **Pegar** o `Ctrl+V`) y haz clic en **Continuar**. La URL debe empezar por `http://` o `https://`.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

Primero se descarga el audio, así que necesita conexión a Internet.

## Micrófono

Graba tu voz o una reunión y la transcribe. La grabación se guarda en tu historial, para que puedas reproducirla después.

1. Elige el micrófono en la lista (haz clic en el botón de actualizar si acabas de conectarlo).
2. Haz clic en el botón de grabar (o pulsa `Ctrl+Enter`, `⌘↩` en macOS) para empezar a grabar. El medidor de nivel te indica si el sonido está **Demasiado bajo**, tiene **Buen nivel** o está **Demasiado alto**.
3. Vuelve a hacer clic para detenerla y transcribirla.

### Texto en directo

Con **WhisperX**, activa **Mostrar el texto mientras se graba** en la tarjeta **Texto en directo** para ver un borrador del texto mientras hablas. El borrador lo escribe un **Modelo en directo** rápido (`small` por defecto). Al detenerla, toda la grabación se vuelve a transcribir con el modelo del motor, que es más preciso, y el borrador se reemplaza.

![El texto en directo mientras se graba con el micrófono](/screenshots/live-text.png)

:::caution
Tu sistema debe detectar un dispositivo de entrada y permitir que la aplicación lo use. Si no, se muestra **No se ha encontrado ningún micrófono**. En macOS, permite el acceso a Audiotext en **Ajustes del Sistema** → **Privacidad y seguridad** → **Micrófono**.
:::

### Grabar el audio de tu ordenador

Para transcribir lo que reproduce tu ordenador (una videollamada, un webinar, un vídeo que no se puede descargar), grábalo desde un dispositivo que envíe el sonido de los altavoces a una entrada. Configúralo una vez, haz clic en el botón de actualizar y elígelo en la lista de micrófonos. Se graba todo lo que reproduce el ordenador, también las notificaciones, pero no tu voz.

- **Windows**: ejecuta `mmsys.cpl` y, en la pestaña **Grabar**, haz clic derecho en la lista para mostrar los dispositivos deshabilitados y habilita **Mezcla estéreo**. Si tu tarjeta de sonido no la tiene, instala [VB-CABLE](https://vb-audio.com/Cable/), pon **CABLE Input** como dispositivo de salida y elige **CABLE Output** en Audiotext. Para seguir oyendo el sonido, marca **Escuchar este dispositivo** en las propiedades de **CABLE Output**.
- **macOS**: instala [BlackHole](https://existential.audio/blackhole/) (`brew install blackhole-2ch`) y elige **BlackHole 2ch** en Audiotext. Para seguir oyendo el sonido, crea un [dispositivo de salida múltiple](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) con tus altavoces y BlackHole, y ponlo como dispositivo de salida.
- **Linux** (PulseAudio o PipeWire): elige **pulse** en Audiotext y empieza a grabar. Después, en la pestaña **Grabación** de `pavucontrol`, cambia la fuente de Audiotext al monitor de tus altavoces.

## Carpeta

Transcribe todos los archivos de audio y vídeo de una carpeta y, si **Incluir subcarpetas** está activado en la tarjeta **Carpeta**, de sus subcarpetas. Haz clic en **Elegir una carpeta…** o suelta la carpeta en la ventana. Audiotext te indica cuántos archivos ha encontrado. Para dejar fuera algunos archivos, escribe sus nombres o rutas, separados por comas, en **Omitir los archivos que coincidan con** (p. ej. `*.wav, drafts/*`). Los archivos ocultos siempre se omiten.

La transcripción de cada archivo se guarda junto a él (o en otra carpeta que elijas en la tarjeta **Salida**), con el mismo nombre y la extensión de cada **tipo de archivo** que hayas seleccionado. Por ejemplo, con `.txt` y `.vtt`:

```text
files-to-transcribe
├── paranoid-android.mp3
├── paranoid-android.txt
├── paranoid-android.vtt
└── movies
    ├── mulholland-dr.avi
    ├── mulholland-dr.txt
    └── mulholland-dr.vtt
```

Si dos archivos tienen el mismo nombre y otra extensión (p. ej. `talk.mp3` y `talk.mp4`), sus transcripciones mantienen la extensión en el nombre (`talk.mp3.txt` y `talk.mp4.txt`), para que no se reemplacen entre sí.

Los archivos que ya tienen una transcripción **se omiten**: un archivo solo se omite si tiene todos los tipos de archivo que has seleccionado, así que añadir un tipo de archivo lo vuelve a transcribir. Si un archivo no se puede transcribir, el resto se sigue transcribiendo.

### Los archivos de una carpeta

La página de una carpeta en el historial muestra sus archivos, con el estado, la duración y el tamaño de cada uno y una vista previa de su texto. Búscalos, fíltralos por estado (**Todos**, **Completados**, **Con errores** o **Pendientes**) y ordénalos por nombre, estado, duración o tamaño. Los archivos que se han movido o eliminado se marcan como **No se encuentra el archivo**.

- Haz clic en un archivo para abrir su transcripción, o haz clic en su botón `⋯` (o clic derecho sobre él) para copiar su texto, abrirlo directamente en su exportación, resumen o traducción, mostrarlo en el gestor de archivos o elegir **Volver a transcribir este archivo**.
- Selecciona varios archivos con `Ctrl`/`⌘` o `Mayús`, o todos los archivos mostrados con `Ctrl+A` / `⌘A`, y elige **Volver a transcribir**, **Exportar…** (para exportarlos juntos en un solo archivo TXT, Markdown o Word) o **Quitar del historial…**. `Enter` abre el archivo seleccionado, y `Esc` quita la selección.
- **Reintentar fallidos** vuelve a transcribir los archivos que han fallado. **Volver a analizar la carpeta** transcribe solo los archivos sin transcripción, como los nuevos, e indica cuántos se han omitido porque ya tenían una.
- El menú `⋯` de la carpeta tiene **Volver a transcribir todo…** (vuelve a transcribir todos sus archivos, reemplazando sus transcripciones), **Exportar todo…** (en un solo archivo), una opción para quitar de la lista los archivos que faltan, y las opciones para abrir la carpeta de origen o la de los archivos guardados.
- Cuando cambias los ajustes de la carpeta, se indican los archivos transcritos con otros ajustes (motor, modelo, idioma…), con el botón **Volver a transcribirlos**.

La cabecera muestra dónde se guardan los archivos y enlaza a la carpeta de origen. **Editar ajustes** cambia los ajustes de la carpeta, y **Guardar y volver a analizar** transcribe con ellos los archivos a los que les falta una transcripción.

### Vigila una carpeta

Activa **Vigilar la carpeta** en la tarjeta **Carpeta** para seguir transcribiendo los archivos que se añadan a la carpeta (o a sus subcarpetas) hasta que hagas clic en **Dejar de vigilar**. Es útil para las grabaciones de una grabadora de voz o de una herramienta de reuniones que se copian a una carpeta.

- Los archivos que ya contiene la carpeta se omiten, salvo que actives **Transcribir los archivos que ya hay en la carpeta**: entonces primero se transcriben los que no tienen transcripción.
- Un archivo se transcribe cuando se ha copiado por completo (cuando su tamaño deja de cambiar), así que los archivos grandes no se transcriben a medias.
- Las carpetas que se estaban vigilando al cerrar Audiotext se vuelven a vigilar al abrirlo, continuando desde los archivos que ya habían visto. Las carpetas detenidas se pueden volver a vigilar con **Reanudar vigilancia**.
- Si la carpeta no está disponible (p. ej. está en una unidad que no está conectada), Audiotext la espera en lugar de fallar.
- Para transcribir otra cosa o grabar, la carpeta se pausa (la nueva transcripción indica **Iniciando…** hasta que lo está) y después se vuelve a vigilar.
- Los errores no detienen la vigilancia, y los archivos transcritos a la vez se avisan en una sola notificación.

## La cola

Puedes configurar una nueva transcripción mientras hay otra en curso: el botón pasa a ser **Añadir a la cola**, y empieza cuando termina la actual. Las transcripciones en cola y en curso se muestran en el historial.
