---
title: Interface de liña de comandos
description: Transcribe ficheiros, cartafoles e vídeos de YouTube desde scripts coa liña de comandos de Audiotext.
sidebar:
  order: 3
---

Audiotext tamén se pode usar desde a liña de comandos para transcribir desde scripts, cando o [executas desde o código fonte](/gl/help/contributing/#prepara-o-proxecto). Ten tres comandos:

- `transcribe`: transcribe un ficheiro, os ficheiros dun cartafol ou un vídeo de YouTube.
- `watch`: transcribe os ficheiros que se engaden a un cartafol ata que se detén con `Ctrl+C`.
- `check-update`: comproba se hai unha versión nova e mostra a ligazón para descargala.

As opcións que non se indican toman os valores configurados na aplicación. As transcricións sempre se gardan xunto a cada ficheiro transcrito, ou no cartafol indicado con `--output-dir` (onde se recrean os subcartafoles dun cartafol transcrito).

## Exemplos

```bash
# Transcribe un ficheiro. O texto tamén se imprime, así que se pode redirixir
uv run src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Transcribe os ficheiros dun cartafol identificando os falantes
uv run src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transcribe un vídeo de YouTube coa API de Whisper
uv run src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transcribe unha reunión coa API de Whisper, coas súas palabras clave e o seu contexto
uv run src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Unha reunión sobre a próxima versión"

# Transcribe os ficheiros que se engaden a un cartafol ata detelo con Ctrl+C
uv run src/cli.py watch inbox/ --output-types srt
```

## Opcións

| Opción | Descrición |
| --- | --- |
| `-m`, `--method` | Método de transcrición: `whisperx`, `whisper-api` ou `google` |
| `-l`, `--language` | Idioma do audio como código ISO 639-1 (p. ex. `gl`), ou `auto` para detectalo (non compatible con Google) |
| `-o`, `--output-dir` | Cartafol onde se gardan as transcricións (de forma predeterminada: xunto a cada ficheiro transcrito) |
| `--overwrite` | Sobrescribir as transcricións existentes |
| `-p`, `--prompt` | De que trata o audio, como o seu tema ou o seu contexto (non compatible con Google) |
| `-k`, `--keywords` | Nomes, termos ou siglas que se din no audio, separados por comas, para que se escriban ben (non compatible con Google) |
| `--translate` | Traducir o audio ao inglés (non compatible con Google) |
| `-q`, `--quiet` | Imprimir só os erros |
| `-v`, `--verbose` | Imprimir os rexistros para depurar erros |

**Opcións de WhisperX**

| Opción | Descrición |
| --- | --- |
| `-t`, `--output-types` | Tipos de ficheiro de saída separados por comas (p. ex. `txt,srt`) |
| `--diarize` | Identificar os falantes |
| `--speakers` | Número de falantes ao identificalos (`0` para detectalo) |
| `--model-size` | Modelo, p. ex. `small` ou `large-v2` (consulta [Motores](/gl/reference/engines/#modelo)) |
| `--compute-type` | `int8`, `float16` ou `float32` |
| `--batch-size` | Tamaño do lote |
| `--cpu` | Executar na CPU |

**Opcións da API de Whisper**

| Opción | Descrición |
| --- | --- |
| `--openai-model` | Modelo de transcrición: `whisper-1`, `gpt-transcribe` ou `gpt-4o-transcribe-diarize` |

Executa `uv run src/cli.py transcribe --help` para ver todas as opcións e os seus valores.

## Saída e código de saída

O progreso imprímese na saída de erro estándar (ocúltao con `--quiet`), e o texto da transcrición dun único ficheiro na saída estándar. O comando remata co código `1` se falla unha transcrición.

As claves de API son as configuradas na aplicación, ou as variables de contorno `OPENAI_API_KEY`, `GOOGLE_API_KEY` e `HF_TOKEN` (para identificar os falantes).
