---
title: Interfaz de línea de comandos
description: Transcribe, resume y traduce archivos, carpetas y vídeos de YouTube desde scripts con la línea de comandos de Audiotext.
sidebar:
  order: 3
---

Audiotext también se puede usar desde la línea de comandos, p. ej. para transcribir desde scripts. Tiene tres comandos:

- `transcribe`: transcribe un archivo, los archivos de una carpeta o un vídeo de YouTube.
- `watch`: transcribe los archivos que se añaden a una carpeta hasta que se detiene con `Ctrl+C`.
- `check-update`: comprueba si hay una versión nueva y muestra el enlace para descargarla.

Las opciones que no se indican toman los valores configurados en la aplicación. Las transcripciones siempre se guardan junto a cada archivo transcrito, o en la carpeta indicada con `--output-dir` (donde se recrean las subcarpetas de una carpeta transcrita).

## Ejecútala

La aplicación instalada ejecuta la línea de comandos cuando recibe uno de sus comandos:

| Sistema | Comando |
| --- | --- |
| Linux | `audiotext` (instalado en `~/.local/bin` por `install.sh`) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe`, en la carpeta donde está instalado Audiotext (`%LOCALAPPDATA%\Programs\Audiotext` por defecto) |

Si la [ejecutas desde el código fuente](/es/help/contributing/#prepara-el-proyecto), ejecuta `uv run src/cli.py` en su lugar.

## Ejemplos

```bash
# Transcribe un archivo. El texto también se imprime, así que se puede redirigir
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Transcribe los archivos de una carpeta identificando a los hablantes
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transcribe un vídeo de YouTube con la API de Whisper
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transcribe una reunión con la API de Whisper, con sus palabras clave y su contexto
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Una reunión sobre la próxima versión"

# Guarda los subtítulos y un documento de Word, lo resume y lo traduce al inglés
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to en

# Transcribe los archivos que se añaden a una carpeta hasta detenerlo con Ctrl+C
audiotext watch inbox/ --output-types srt

# Lo mismo, transcribiendo primero los archivos que ya contiene
audiotext watch inbox/ --existing
```

## Opciones

| Opción | Descripción |
| --- | --- |
| `-m`, `--method` | Método de transcripción: `whisperx`, `whisper-api` o `google` |
| `-l`, `--language` | Idioma del audio como código ISO 639-1 (p. ej. `es`), o `auto` para detectarlo (no compatible con Google) |
| `-t`, `--output-types` | Tipos de archivo de salida separados por comas, de entre `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` y `ass` (p. ej. `txt,srt,md`) |
| `-o`, `--output-dir` | Carpeta donde se guardan las transcripciones (por defecto: junto a cada archivo transcrito) |
| `--overwrite` | Volver a transcribir los archivos que ya tienen una transcripción, reemplazándola |
| `--existing` | (solo `watch`) Transcribir primero los archivos que ya contiene la carpeta y que aún no tienen transcripción |
| `-p`, `--prompt` | De qué trata el audio, como su tema o su contexto (no compatible con Google) |
| `-k`, `--keywords` | Nombres, términos o siglas que se dicen en el audio, separados por comas, para que se escriban bien (no compatible con Google) |
| `--translate` | Traducir el audio al inglés mientras se transcribe (no compatible con Google). Consulta `--translate-to` para otros idiomas |
| `-q`, `--quiet` | Imprimir solo los errores |
| `-v`, `--verbose` | Imprimir los registros para depurar errores |
| `--version` | Imprimir la versión de Audiotext |

Los tipos de salida que el método de transcripción no guarda por sí mismo (p. ej. `md` o `docx`) se exportan a partir de su resultado, como desde la aplicación. `aud` solo lo guarda WhisperX.

**Opciones de resumen y traducción**

| Opción | Descripción |
| --- | --- |
| `--summarize` | Resumir cada transcripción, con sus puntos clave y sus capítulos, en un archivo `.summary.md` |
| `--summary-provider` | Proveedor del modelo de lenguaje que resume: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` u `ollama` |
| `--summary-model` | Modelo de lenguaje que resume |
| `--translate-to` | Traducir cada transcripción a un idioma (un código ISO 639-1), que se guarda en sus tipos de archivo de salida (p. ej. `talk.es.srt`) |
| `--translation-provider` | Proveedor de las traducciones: los de `--summary-provider`, `deepl` o `google` |
| `--translation-model` | Modelo de lenguaje que traduce, para los proveedores de modelos de lenguaje |

Los proveedores y los modelos son los configurados en la aplicación salvo que se indiquen. Consulta [Proveedores](/es/guides/summary-and-translation/#proveedores).

**Opciones de WhisperX**

| Opción | Descripción |
| --- | --- |
| `--diarize` | Identificar a los hablantes |
| `--speakers` | Número de hablantes al identificarlos (`0` para detectarlo) |
| `--model-size` | Modelo, p. ej. `small` o `large-v2` (consulta [Motores](/es/reference/engines/#modelo)) |
| `--compute-type` | `int8`, `float16` o `float32` |
| `--batch-size` | Tamaño de lote |
| `--cpu` | Ejecutar en la CPU, en lugar de en una GPU NVIDIA o en la GPU de un Mac |

**Opciones de la API de Whisper**

| Opción | Descripción |
| --- | --- |
| `--openai-model` | Modelo de transcripción: `whisper-1`, `gpt-transcribe` o `gpt-4o-transcribe-diarize` |

Ejecuta `audiotext transcribe --help` para ver todas las opciones y sus valores.

## Salida y código de salida

El progreso se imprime en la salida de error estándar (ocúltalo con `--quiet`), y el texto de la transcripción de un único archivo en la salida estándar. El comando termina con el código `1` si falla una transcripción, un resumen o una traducción, y con `130` si se detiene con `Ctrl+C`.

Si no está configurada la clave de API del proveedor de `--summarize` o `--translate-to`, el comando se detiene antes de transcribir. Un resumen o una traducción que falla se informa sin perder la transcripción, que se guarda igualmente.

Las claves de API son las configuradas en la aplicación, o sus [variables de entorno](/es/reference/files-and-data/#variables-de-entorno), como `OPENAI_API_KEY`, `GOOGLE_API_KEY` y `HF_TOKEN` (para identificar a los hablantes).
