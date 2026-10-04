---
title: Ajustes de la transcripción
description: Elige el motor, los idiomas, el contexto, las opciones y la salida de cada transcripción.
sidebar:
  order: 2
---

Antes de transcribir, Audiotext muestra los ajustes de la transcripción, agrupados en tarjetas. Se recuerdan para la próxima vez, y cada transcripción guarda los ajustes con los que se hizo.

![Los ajustes de la transcripción de un archivo](/screenshots/transcription-settings.png)

## Motor

El **Método de transcripción**:

| Motor | Dónde se ejecuta | Coste | Notas |
| --- | --- | --- | --- |
| **WhisperX** (por defecto) | Tu ordenador | Gratis y sin límites | Privado y sin conexión. Más opciones: hablantes, tiempos por palabra, texto en directo. |
| **API de Whisper** | Servidores de OpenAI | De pago por minuto | Requiere una [clave de API de OpenAI](/es/reference/preferences/#claves-de-api). Para ordenadores que no pueden ejecutar WhisperX con fluidez. |
| **API de Google** | Servidores de Google | Gratuita limitada, o de pago | Menor calidad y sin marcas de tiempo. La clave de API es opcional. |

El **Modelo** depende del motor. Con WhisperX, los modelos más grandes son más precisos, pero más lentos. Con la API de Whisper, decide si la transcripción tiene marcas de tiempo y hablantes. Consulta [Motores](/es/reference/engines/) para compararlos.

## Idioma

- **Idioma del audio**: **Detectar automáticamente** por defecto. Elegirlo evita errores en audios cortos o mezclados. La API de Google no puede detectarlo, así que tienes que elegirlo.
- **Idioma de la transcripción**: **El mismo que el audio** por defecto. Elige otro idioma para traducir el audio mientras se transcribe.

Cuando los dos idiomas son distintos, aparecen las opciones de **Traducción**:

- **Traducir con Whisper (recomendado)**: Whisper transcribe y traduce el audio en un solo paso. Solo puede traducir al inglés.
- **Escribirla directamente en _idioma_ (experimental)**: se le pide a Whisper que escriba la transcripción directamente en ese idioma. Funciona bien en muchos idiomas, pero revisa el resultado.

La API de Google no puede traducir. Para traducir una transcripción a cualquier idioma más tarde, con más proveedores, usa el botón [Traducir](/es/guides/summary-and-translation/#traducción) de la transcripción.

## Contexto

Dos campos opcionales que ayudan al modelo:

- **Palabras clave**: nombres, términos o siglas que se dicen en el audio, separados por comas (p. ej. `Audiotext, WhisperX, Henestrosa`), para que se escriban bien. Son solo pistas: una palabra clave solo se escribe si se dice en el audio.
- **Descripción**: de qué trata el audio, como su tema o su contexto (p. ej. `Una entrevista sobre reconocimiento de voz`).

Los usan WhisperX y la API de Whisper, salvo el modelo `gpt-4o-transcribe-diarize`. La API de Google no los usa.

## Opciones

- **Tiempos por palabra** (WhisperX): alinea cada palabra con el audio, para resaltarla al reproducir. Tarda un poco más. Los subtítulos ya los usan.
- **Extraer la voz**: reduce la música y el ruido de fondo antes de transcribir.
- **Identificar hablantes** (WhisperX): indica quién habla en cada parte, p. ej. `SPEAKER_00`. Si sabes cuántas personas hablan, indícalo en **Número de hablantes** (`0` lo detecta). Requiere un token gratuito de Hugging Face; consulta [Identifica a los hablantes](#identifica-a-los-hablantes). Con la API de Whisper, el modelo `gpt-4o-transcribe-diarize` identifica a los hablantes.

### Identifica a los hablantes

El modelo que identifica a los hablantes, [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1), es gratuito, pero requiere un token de Hugging Face:

1. Crea una cuenta en [Hugging Face](https://huggingface.co/join) y acepta las condiciones de [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1).
2. Crea un token con el rol `Read` en [tus ajustes](https://huggingface.co/settings/tokens).
3. Haz clic en **Configurar token de Hugging Face…** y pégalo.

El modelo se descarga la primera vez que se usa. Después, los hablantes se identifican sin conexión.

## Texto en directo

Solo se muestra para el micrófono. Consulta [Texto en directo](/es/guides/sources/#texto-en-directo).

## Carpeta y Salida

Solo se muestran para carpetas:

- **Vigilar la carpeta**: consulta [Vigila una carpeta](/es/guides/sources/#vigila-una-carpeta).
- **Tipos de archivo**: con WhisperX, uno o varios de `.txt`, `.srt`, `.vtt`, `.json`, `.tsv` y `.aud`. Con la API de Whisper, el formato de los archivos (`text`, `json`, `verbose_json`, `srt` o `vtt`); los subtítulos necesitan un modelo con marcas de tiempo. La API de Google devuelve texto plano (`.txt`).
- **Ubicación**: los archivos se guardan junto a cada archivo de origen. Haz clic en **Cambiar…** para guardarlos en otra carpeta (se recrean sus subcarpetas), o en **Junto al origen** para volver.
- **Sobrescribir archivos existentes**: vuelve a transcribir los archivos que ya tienen una transcripción, reemplazándola.

Las opciones de los subtítulos (ancho de línea, número de líneas, palabras resaltadas) están en las [Preferencias](/es/reference/preferences/#subtítulos).
