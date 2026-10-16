---
title: Interface de liña de comandos
description: Transcribe, resume e traduce ficheiros, cartafoles e vídeos de YouTube desde scripts coa liña de comandos de Audiotext.
sidebar:
  order: 3
---

Audiotext tamén se pode usar desde a liña de comandos, p. ex. para transcribir desde scripts. Ten tres comandos:

- `transcribe`: transcribe un ficheiro, os ficheiros dun cartafol ou un vídeo de YouTube.
- `watch`: transcribe os ficheiros que se engaden a un cartafol ata que se detén con `Ctrl+C`.
- `check-update`: comproba se hai unha versión nova e mostra a ligazón para descargala.

As opcións que non se indican toman os valores configurados na aplicación. As transcricións sempre se gardan xunto a cada ficheiro transcrito, ou no cartafol indicado con `--output-dir` (onde se recrean os subcartafoles dun cartafol transcrito).

## Execútaa

A aplicación instalada executa a liña de comandos cando recibe un dos seus comandos:

| Sistema | Comando |
| --- | --- |
| Linux | `audiotext` (instalado en `~/.local/bin` por `install.sh`) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe`, no cartafol onde está instalado Audiotext (`%LOCALAPPDATA%\Programs\Audiotext` de forma predeterminada) |

Se a [executas desde o código fonte](/gl/help/contributing/#prepara-o-proxecto), executa `uv run src/cli.py` no seu lugar.

## Exemplos

```bash
# Transcribe un ficheiro. O texto tamén se imprime, así que se pode redirixir
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Transcribe os ficheiros dun cartafol identificando os falantes
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transcribe un vídeo de YouTube coa API de Whisper
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transcribe unha reunión coa API de Whisper, coas súas palabras clave e o seu contexto
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Unha reunión sobre a próxima versión"

# Garda os subtítulos e un documento de Word, resúmeo e tradúceo ao español
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Transcribe os ficheiros que se engaden a un cartafol ata detelo con Ctrl+C
audiotext watch inbox/ --output-types srt
```

## Opcións

| Opción | Descrición |
| --- | --- |
| `-m`, `--method` | Método de transcrición: `whisperx`, `whisper-api` ou `google` |
| `-l`, `--language` | Idioma do audio como código ISO 639-1 (p. ex. `gl`), ou `auto` para detectalo (non compatible con Google) |
| `-t`, `--output-types` | Tipos de ficheiro de saída separados por comas, entre `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` e `ass` (p. ex. `txt,srt,md`) |
| `-o`, `--output-dir` | Cartafol onde se gardan as transcricións (de forma predeterminada: xunto a cada ficheiro transcrito) |
| `--overwrite` | Sobrescribir as transcricións existentes |
| `-p`, `--prompt` | De que trata o audio, como o seu tema ou o seu contexto (non compatible con Google) |
| `-k`, `--keywords` | Nomes, termos ou siglas que se din no audio, separados por comas, para que se escriban ben (non compatible con Google) |
| `--translate` | Traducir o audio ao inglés mentres se transcribe (non compatible con Google). Consulta `--translate-to` para outros idiomas |
| `-q`, `--quiet` | Imprimir só os erros |
| `-v`, `--verbose` | Imprimir os rexistros para depurar erros |
| `--version` | Imprimir a versión de Audiotext |

Os tipos de saída que o método de transcrición non garda por si mesmo (p. ex. `md` ou `docx`) expórtanse a partir do seu resultado, como desde a aplicación. `aud` só o garda WhisperX.

**Opcións de resumo e tradución**

| Opción | Descrición |
| --- | --- |
| `--summarize` | Resumir cada transcrición, cos seus puntos clave e os seus capítulos, nun ficheiro `.summary.md` |
| `--summary-provider` | Provedor do modelo de linguaxe que resume: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` ou `ollama` |
| `--summary-model` | Modelo de linguaxe que resume |
| `--translate-to` | Traducir cada transcrición a un idioma (un código ISO 639-1), que se garda nos seus tipos de ficheiro de saída (p. ex. `talk.es.srt`) |
| `--translation-provider` | Provedor das traducións: os de `--summary-provider`, `deepl` ou `google` |
| `--translation-model` | Modelo de linguaxe que traduce, para os provedores de modelos de linguaxe |

Os provedores e os modelos son os configurados na aplicación se non se indican. Consulta [Provedores](/gl/guides/summary-and-translation/#provedores).

**Opcións de WhisperX**

| Opción | Descrición |
| --- | --- |
| `--diarize` | Identificar os falantes |
| `--speakers` | Número de falantes ao identificalos (`0` para detectalo) |
| `--model-size` | Modelo, p. ex. `small` ou `large-v2` (consulta [Motores](/gl/reference/engines/#modelo)) |
| `--compute-type` | `int8`, `float16` ou `float32` |
| `--batch-size` | Tamaño do lote |
| `--cpu` | Executar na CPU, en lugar de nunha GPU NVIDIA ou na GPU dun Mac |

**Opcións da API de Whisper**

| Opción | Descrición |
| --- | --- |
| `--openai-model` | Modelo de transcrición: `whisper-1`, `gpt-transcribe` ou `gpt-4o-transcribe-diarize` |

Executa `audiotext transcribe --help` para ver todas as opcións e os seus valores.

## Saída e código de saída

O progreso imprímese na saída de erro estándar (ocúltao con `--quiet`), e o texto da transcrición dun único ficheiro na saída estándar. O comando remata co código `1` se falla unha transcrición, un resumo ou unha tradución, e con `130` se se detén con `Ctrl+C`.

Se non está configurada a clave de API do provedor de `--summarize` ou `--translate-to`, o comando detense antes de transcribir. Un resumo ou unha tradución que falla infórmase sen perder a transcrición, que se garda igualmente.

As claves de API son as configuradas na aplicación, ou as súas [variables de contorno](/gl/reference/files-and-data/#variables-de-contorno), como `OPENAI_API_KEY`, `GOOGLE_API_KEY` e `HF_TOKEN` (para identificar os falantes).
