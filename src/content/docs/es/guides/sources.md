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

Transcribe todos los archivos de audio y vídeo de una carpeta **y de sus subcarpetas**. Haz clic en **Elegir una carpeta…** o suelta la carpeta en la ventana. Audiotext te indica cuántos archivos ha encontrado.

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

Los archivos que ya tienen una transcripción **se omiten**, salvo que actives **Sobrescribir archivos existentes**. Así, si añades un archivo a la carpeta y la vuelves a transcribir, solo se transcribe el archivo nuevo.

Si un archivo no se puede transcribir, el resto se sigue transcribiendo, y la vista de la carpeta muestra cuáles han fallado y por qué. **Volver a transcribir** repite la carpeta, y el botón de carpeta abre la carpeta de los archivos guardados.

### Vigila una carpeta

Activa **Vigilar la carpeta** en la tarjeta **Carpeta** para seguir transcribiendo los archivos que se añadan a la carpeta (o a sus subcarpetas) hasta que hagas clic en **Dejar de vigilar**. Es útil para las grabaciones de una grabadora de voz o de una herramienta de reuniones que se copian a una carpeta.

- Los archivos que ya contiene la carpeta se omiten. Para transcribirlos, transcribe la carpeta sin vigilarla.
- Un archivo se transcribe cuando se ha copiado por completo (cuando su tamaño deja de cambiar), así que los archivos grandes no se transcriben a medias.
- Los errores no detienen la vigilancia.

## La cola

Puedes configurar una nueva transcripción mientras hay otra en curso: el botón pasa a ser **Añadir a la cola**, y empieza cuando termina la actual. Las transcripciones en cola y en curso se muestran en el historial.
