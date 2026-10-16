---
title: Kommandorad
description: Transkribera, sammanfatta och översätt filer, mappar och YouTube-videor från skript med Audiotexts kommandorad.
sidebar:
  order: 3
---

Audiotext kan också användas från kommandoraden, t.ex. för att transkribera från skript. Det har tre kommandon:

- `transcribe`: transkriberar en fil, filerna i en mapp eller en YouTube-video.
- `watch`: transkriberar filer som läggs till i en mapp tills det stoppas med `Ctrl+C`.
- `check-update`: kontrollerar om en ny version finns och skriver ut länken för att ladda ned den.

Alternativ som inte anges får värdena som är inställda i appen. Transkriberingarna sparas alltid bredvid varje transkriberad fil, eller i mappen som anges med `--output-dir` (där undermapparna i en transkriberad mapp återskapas).

## Kör den

Den installerade appen kör kommandoraden när den får ett av sina kommandon:

| System | Kommando |
| --- | --- |
| Linux | `audiotext` (installeras i `~/.local/bin` av `install.sh`) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe`, i mappen där Audiotext är installerat (`%LOCALAPPDATA%\Programs\Audiotext` som standard) |

När du [kör det från källkoden](/sv/help/contributing/#konfigurera-projektet) använder du `uv run src/cli.py` i stället.

## Exempel

```bash
# Transkribera en fil. Texten skrivs också ut, så den kan omdirigeras
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Transkribera filerna i en mapp och identifiera talarna
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transkribera en YouTube-video med Whisper-API:t
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transkribera ett möte med Whisper-API:t, med nyckelord och sammanhang
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Ett möte om nästa version"

# Spara undertexterna och ett Word-dokument, sammanfatta och översätt till spanska
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Transkribera filer som läggs till i en mapp tills det stoppas med Ctrl+C
audiotext watch inbox/ --output-types srt
```

## Alternativ

| Alternativ | Beskrivning |
| --- | --- |
| `-m`, `--method` | Transkriberingsmetod: `whisperx`, `whisper-api` eller `google` |
| `-l`, `--language` | Ljudets språk som ISO 639-1-kod (t.ex. `sv`), eller `auto` för att identifiera det (stöds inte av Google) |
| `-t`, `--output-types` | Utdatafiltyper separerade med kommatecken, bland `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` och `ass` (t.ex. `txt,srt,md`) |
| `-o`, `--output-dir` | Mapp där transkriberingarna sparas (standard: bredvid varje transkriberad fil) |
| `--overwrite` | Skriva över befintliga transkriberingar |
| `-p`, `--prompt` | Vad ljudet handlar om, som ämne eller miljö (stöds inte av Google) |
| `-k`, `--keywords` | Namn, termer eller förkortningar som sägs i ljudet, separerade med kommatecken, så att de stavas rätt (stöds inte av Google) |
| `--translate` | Översätta ljudet till engelska under transkriberingen (stöds inte av Google). Se `--translate-to` för andra språk |
| `-q`, `--quiet` | Skriva ut bara fel |
| `-v`, `--verbose` | Skriva ut loggarna för felsökning |
| `--version` | Skriva ut versionen av Audiotext |

Utdatatyper som transkriberingsmetoden inte sparar själv (t.ex. `md` eller `docx`) exporteras från dess resultat, precis som från appen. `aud` sparas bara av WhisperX.

**Alternativ för sammanfattning och översättning**

| Alternativ | Beskrivning |
| --- | --- |
| `--summarize` | Sammanfatta varje transkribering, med huvudpunkter och kapitel, i en `.summary.md`-fil |
| `--summary-provider` | Leverantör av språkmodellen som sammanfattar: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` eller `ollama` |
| `--summary-model` | Språkmodell som sammanfattar |
| `--translate-to` | Översätta varje transkribering till ett språk (en ISO 639-1-kod), som sparas i dess utdatafiltyper (t.ex. `talk.es.srt`) |
| `--translation-provider` | Leverantör av översättningarna: de för `--summary-provider`, `deepl` eller `google` |
| `--translation-model` | Språkmodell som översätter, för leverantörerna av språkmodeller |

Om de inte anges används leverantörerna och modellerna som är inställda i appen. Se [Leverantörer](/sv/guides/summary-and-translation/#leverantörer).

**Alternativ för WhisperX**

| Alternativ | Beskrivning |
| --- | --- |
| `--diarize` | Identifiera talarna |
| `--speakers` | Antal talare vid identifiering (`0` för att identifiera det) |
| `--model-size` | Modell, t.ex. `small` eller `large-v2` (se [Motorer](/sv/reference/engines/#modell)) |
| `--compute-type` | `int8`, `float16` eller `float32` |
| `--batch-size` | Batchstorlek |
| `--cpu` | Köra på processorn, i stället för på ett NVIDIA-grafikkort eller en Macs grafikprocessor |

**Alternativ för Whisper-API:t**

| Alternativ | Beskrivning |
| --- | --- |
| `--openai-model` | Transkriberingsmodell: `whisper-1`, `gpt-transcribe` eller `gpt-4o-transcribe-diarize` |

Kör `audiotext transcribe --help` för att se alla alternativ och deras värden.

## Utdata och slutkod

Förloppet skrivs till standardfel (dölj det med `--quiet`), och texten i transkriberingen av en enskild fil till standardutdata. Kommandot avslutas med kod `1` om en transkribering, en sammanfattning eller en översättning misslyckas, och med `130` om det stoppas med `Ctrl+C`.

Om API-nyckeln för leverantören av `--summarize` eller `--translate-to` inte är angiven stoppas kommandot innan det transkriberar. En sammanfattning eller översättning som misslyckas rapporteras utan att transkriberingen går förlorad; den sparas ändå.

API-nycklarna är de som angetts i appen, eller deras [miljövariabler](/sv/reference/files-and-data/#miljövariabler), som `OPENAI_API_KEY`, `GOOGLE_API_KEY` och `HF_TOKEN` (för att identifiera talarna).
