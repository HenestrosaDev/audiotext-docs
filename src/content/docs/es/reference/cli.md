---
title: Interfaz de línea de comandos
description: Transcribe archivos, carpetas y vídeos de YouTube desde scripts con la línea de comandos de Audiotext.
sidebar:
  order: 3
---

Audiotext también se puede usar desde la línea de comandos para transcribir desde scripts, cuando lo [ejecutas desde el código fuente](/es/help/contributing/#prepara-el-proyecto). Tiene tres comandos:

- `transcribe`: transcribe un archivo, los archivos de una carpeta o un vídeo de YouTube.
- `watch`: transcribe los archivos que se añaden a una carpeta hasta que se detiene con `Ctrl+C`.
- `check-update`: comprueba si hay una versión nueva y muestra el enlace para descargarla.

Las opciones que no se indican toman los valores configurados en la aplicación. Las transcripciones siempre se guardan junto a cada archivo transcrito, o en la carpeta indicada con `--output-dir` (donde se recrean las subcarpetas de una carpeta transcrita).

## Ejemplos

```bash
# Transcribe un archivo. El texto también se imprime, así que se puede redirigir
python src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Transcribe los archivos de una carpeta identificando a los hablantes
python src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transcribe un vídeo de YouTube con la API de Whisper
python src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transcribe una reunión con la API de Whisper, con sus palabras clave y su contexto
python src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Una reunión sobre la próxima versión"

# Transcribe los archivos que se añaden a una carpeta hasta detenerlo con Ctrl+C
python src/cli.py watch inbox/ --output-types srt
```

## Opciones

| Opción | Descripción |
| --- | --- |
| `-m`, `--method` | Método de transcripción: `whisperx`, `whisper-api` o `google` |
| `-l`, `--language` | Idioma del audio como código ISO 639-1 (p. ej. `es`), o `auto` para detectarlo (no compatible con Google) |
| `-o`, `--output-dir` | Carpeta donde se guardan las transcripciones (por defecto: junto a cada archivo transcrito) |
| `--overwrite` | Sobrescribir las transcripciones existentes |
| `-p`, `--prompt` | De qué trata el audio, como su tema o su contexto (no compatible con Google) |
| `-k`, `--keywords` | Nombres, términos o siglas que se dicen en el audio, separados por comas, para que se escriban bien (no compatible con Google) |
| `--translate` | Traducir el audio al inglés (no compatible con Google) |
| `-q`, `--quiet` | Imprimir solo los errores |
| `-v`, `--verbose` | Imprimir los registros para depurar errores |

**Opciones de WhisperX**

| Opción | Descripción |
| --- | --- |
| `-t`, `--output-types` | Tipos de archivo de salida separados por comas (p. ej. `txt,srt`) |
| `--diarize` | Identificar a los hablantes |
| `--speakers` | Número de hablantes al identificarlos (`0` para detectarlo) |
| `--model-size` | Modelo, p. ej. `small` o `large-v2` (consulta [Motores](/es/reference/engines/#modelo)) |
| `--compute-type` | `int8`, `float16` o `float32` |
| `--batch-size` | Tamaño de lote |
| `--cpu` | Ejecutar en la CPU |

**Opciones de la API de Whisper**

| Opción | Descripción |
| --- | --- |
| `--openai-model` | Modelo de transcripción: `whisper-1`, `gpt-transcribe` o `gpt-4o-transcribe-diarize` |

Ejecuta `python src/cli.py transcribe --help` para ver todas las opciones y sus valores.

## Salida y código de salida

El progreso se imprime en la salida de error estándar (ocúltalo con `--quiet`), y el texto de la transcripción de un único archivo en la salida estándar. El comando termina con el código `1` si falla una transcripción.

Las claves de API son las configuradas en la aplicación, o las variables de entorno `OPENAI_API_KEY`, `GOOGLE_API_KEY` y `HF_TOKEN` (para identificar a los hablantes).
