---
title: Motores
description: Compara WhisperX, la API de Whisper y la API de Google, y elige sus modelos y opciones avanzadas.
sidebar:
  order: 1
---

Audiotext transcribe con uno de tres motores, que se elige en la tarjeta **Motor** de los [ajustes de la transcripción](/es/guides/transcription-settings/#motor).

| | WhisperX | API de Whisper | API de Google |
| --- | --- | --- | --- |
| Se ejecuta en | Tu ordenador | Servidores de OpenAI | Servidores de Google |
| Internet | Solo para descargar los modelos | Necesario | Necesario |
| Coste | Gratis, sin límites | De pago | Gratuita (60 min/mes), o de pago con una clave de API |
| Detecta el idioma | ✓ | ✓ | ✗ |
| Traduce | ✓ | ✓ | ✗ |
| Marcas de tiempo | ✓ | Según el modelo | ✗ |
| Identifica hablantes | ✓ (token de Hugging Face) | `gpt-4o-transcribe-diarize` | ✗ |
| Tiempos por palabra | ✓ | `whisper-1` | ✗ |
| Texto en directo | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) es una implementación rápida de Whisper de OpenAI que se ejecuta en tu ordenador, así que tu audio nunca sale de él. Funciona en la CPU o, mucho más rápido, en una GPU NVIDIA con CUDA.

### Modelo

Los modelos más grandes son más precisos, pero más lentos y usan más memoria. El modelo se descarga la primera vez que se usa.

| Modelo | Parámetros | VRAM necesaria |
| :---: | :---: | :---: |
| `tiny`, `tiny.en` | 39 M | ~1 GB |
| `base`, `base.en` | 74 M | ~1 GB |
| `small`, `small.en` | 244 M | ~2 GB |
| `distil-small.en` | 166 M | ~2 GB |
| `medium`, `medium.en` | 769 M | ~5 GB |
| `distil-medium.en` | 394 M | ~3 GB |
| `large-v1`, `large-v2`, `large-v3` | 1550 M | <8 GB |
| `large-v3-turbo` | 809 M | ~6 GB |
| `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5` | 756 M | ~5 GB |

- **`large-v2`** es el modelo por defecto, ya que `large-v3` tiende a alucinar y repetir texto con más frecuencia, sobre todo en algunos idiomas como el japonés, y omite más signos de puntuación.
- **`large-v3-turbo`** es una versión reducida de `large-v3`, mucho más rápida y casi igual de precisa.
- Los modelos que terminan en **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) y los **destilados** (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) solo transcriben inglés. Son más rápidos que los modelos multilingües del mismo tamaño.

:::tip
Para probar Audiotext rápidamente, elige `tiny` o `small`. Para obtener la mejor calidad, usa `large-v2` o `large-v3-turbo` en una GPU.
:::

### Opciones avanzadas

Están en **Preferencias** → **WhisperX**. Cámbialas solo si tienes problemas o sabes lo que haces: una GPU que se queda sin memoria puede bloquear tu sistema.

- **Tipo de cómputo**: la precisión de los números del modelo. `float16` es más rápido en GPU (el valor por defecto con CUDA). `int8` usa menos memoria y es el valor por defecto en la CPU, ya que muchas CPU no admiten `float16` de forma eficiente. `float32` es el más preciso, para GPU con más de 8 GB de VRAM.
- **Tamaño de lote**: cuántas partes del audio se procesan a la vez (`8` por defecto). No cambia la calidad, solo la velocidad. Bájalo si te quedas sin memoria; se recomienda hasta `16`.
- **Usar CPU**: ejecuta WhisperX en la CPU. Siempre está activado si no se ha encontrado una GPU con CUDA.

## API de Whisper

Usa la [API de voz a texto de OpenAI](https://platform.openai.com/docs/guides/speech-to-text). Está pensada para ordenadores que no pueden ejecutar WhisperX con fluidez, y requiere una clave de API de OpenAI (consulta [Claves de API](/es/reference/preferences/#claves-de-api)).

| Modelo | Marcas de tiempo | Hablantes | Notas |
| --- | :---: | :---: | --- |
| `whisper-1` (por defecto) | ✓ | ✗ | Se puede reproducir segmento a segmento y subtitular. Traduce al inglés. |
| `gpt-transcribe` | ✗ | ✗ | Más preciso, pero sin marcas de tiempo. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Identifica a los hablantes. No usa las palabras clave ni la descripción. |

Las traducciones al inglés siempre las hace `whisper-1`, ya que es el único modelo que traduce.

Los audios largos se dividen en fragmentos de hasta 10 minutos, cortados en un silencio para no partir ninguna palabra, ya que la API rechaza los archivos de más de 25 MB. Con `whisper-1`, el final de cada fragmento se da como contexto al siguiente; con `gpt-4o-transcribe-diarize`, se envía una muestra de la voz de cada hablante con los siguientes fragmentos, para que mantengan sus etiquetas.

### Opciones

- **Formato de respuesta** (tarjeta Salida, para carpetas): `text` (por defecto), `json`, `verbose_json`, `srt` o `vtt`. Los subtítulos y `verbose_json` necesitan un modelo con marcas de tiempo.
- **Temperatura** (Preferencias → API de Whisper): entre 0 y 1. Los valores altos como 0,8 hacen que el resultado sea más aleatorio, y los bajos como 0,2, más preciso. Con 0 (por defecto), el modelo la sube automáticamente cuando hace falta.
- **Marcas de tiempo de las palabras** (Preferencias → API de Whisper): si `whisper-1` también devuelve las marcas de tiempo de cada palabra, para resaltarla al reproducir. Tarda más. Activado por defecto.

## API de Google

Usa la [API Speech-to-Text de Google](https://cloud.google.com/speech-to-text). No puntúa las frases (Audiotext añade la puntuación), y su calidad es menor que la de Whisper, así que las transcripciones suelen necesitar correcciones. No puede detectar el idioma ni traducir, y devuelve texto plano sin marcas de tiempo.

Sin clave de API, se usa el nivel gratuito, limitado a 60 minutos al mes. Para ampliarlo, configura una clave de API de Google. Google cobra por su uso, del que Audiotext no se hace responsable.
