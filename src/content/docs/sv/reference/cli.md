---
title: Kommandorad
description: Transkribera filer, mappar och YouTube-videor från skript med Audiotexts kommandorad.
sidebar:
  order: 3
---

Audiotext kan också användas från kommandoraden för att transkribera från skript, när du [kör det från källkoden](/sv/help/contributing/#konfigurera-projektet). Det har tre kommandon:

- `transcribe`: transkriberar en fil, filerna i en mapp eller en YouTube-video.
- `watch`: transkriberar filer som läggs till i en mapp tills det stoppas med `Ctrl+C`.
- `check-update`: kontrollerar om en ny version finns och skriver ut länken för att ladda ned den.

Alternativ som inte anges får värdena som är inställda i appen. Transkriberingarna sparas alltid bredvid varje transkriberad fil, eller i mappen som anges med `--output-dir` (där undermapparna i en transkriberad mapp återskapas).

## Exempel

```bash
# Transkribera en fil. Texten skrivs också ut, så den kan omdirigeras
python src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Transkribera filerna i en mapp och identifiera talarna
python src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transkribera en YouTube-video med Whisper-API:t
python src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transkribera ett möte med Whisper-API:t, med nyckelord och sammanhang
python src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Ett möte om nästa version"

# Transkribera filer som läggs till i en mapp tills det stoppas med Ctrl+C
python src/cli.py watch inbox/ --output-types srt
```

## Alternativ

| Alternativ | Beskrivning |
| --- | --- |
| `-m`, `--method` | Transkriberingsmetod: `whisperx`, `whisper-api` eller `google` |
| `-l`, `--language` | Ljudets språk som ISO 639-1-kod (t.ex. `sv`), eller `auto` för att identifiera det (stöds inte av Google) |
| `-o`, `--output-dir` | Mapp där transkriberingarna sparas (standard: bredvid varje transkriberad fil) |
| `--overwrite` | Skriva över befintliga transkriberingar |
| `-p`, `--prompt` | Vad ljudet handlar om, som ämne eller miljö (stöds inte av Google) |
| `-k`, `--keywords` | Namn, termer eller förkortningar som sägs i ljudet, separerade med kommatecken, så att de stavas rätt (stöds inte av Google) |
| `--translate` | Översätta ljudet till engelska (stöds inte av Google) |
| `-q`, `--quiet` | Skriva ut bara fel |
| `-v`, `--verbose` | Skriva ut loggarna för felsökning |

**Alternativ för WhisperX**

| Alternativ | Beskrivning |
| --- | --- |
| `-t`, `--output-types` | Utdatafiltyper separerade med kommatecken (t.ex. `txt,srt`) |
| `--diarize` | Identifiera talarna |
| `--speakers` | Antal talare vid identifiering (`0` för att identifiera det) |
| `--model-size` | Modell, t.ex. `small` eller `large-v2` (se [Motorer](/sv/reference/engines/#modell)) |
| `--compute-type` | `int8`, `float16` eller `float32` |
| `--batch-size` | Batchstorlek |
| `--cpu` | Köra på processorn |

**Alternativ för Whisper-API:t**

| Alternativ | Beskrivning |
| --- | --- |
| `--openai-model` | Transkriberingsmodell: `whisper-1`, `gpt-transcribe` eller `gpt-4o-transcribe-diarize` |

Kör `python src/cli.py transcribe --help` för att se alla alternativ och deras värden.

## Utdata och slutkod

Förloppet skrivs till standardfel (dölj det med `--quiet`), och texten i transkriberingen av en enskild fil till standardutdata. Kommandot avslutas med kod `1` om en transkribering misslyckas.

API-nycklarna är de som angetts i appen, eller miljövariablerna `OPENAI_API_KEY`, `GOOGLE_API_KEY` och `HF_TOKEN` (för att identifiera talarna).
