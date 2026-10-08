---
title: Linia de comandă
description: Transcrieți fișiere, dosare și videoclipuri YouTube din scripturi cu linia de comandă Audiotext.
sidebar:
  order: 3
---

Audiotext poate fi folosit și din linia de comandă pentru a transcrie din scripturi, când îl [rulați din codul sursă](/ro/help/contributing/#pregătiți-proiectul). Are trei comenzi:

- `transcribe`: transcrie un fișier, fișierele unui dosar sau un videoclip YouTube.
- `watch`: transcrie fișierele adăugate într-un dosar până când este oprit cu `Ctrl+C`.
- `check-update`: verifică dacă este disponibilă o versiune nouă și afișează linkul pentru descărcarea ei.

Opțiunile neindicate iau valorile setate în aplicație. Transcrierile sunt salvate mereu lângă fiecare fișier transcris sau în dosarul indicat cu `--output-dir` (unde sunt recreate subdosarele unui dosar transcris).

## Exemple

```bash
# Transcrie un fișier. Textul este și afișat, deci poate fi redirecționat
uv run src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Transcrie fișierele unui dosar identificând vorbitorii
uv run src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transcrie un videoclip YouTube cu API-ul Whisper
uv run src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transcrie o ședință cu API-ul Whisper, cu cuvinte cheie și context
uv run src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "O ședință despre următoarea versiune"

# Transcrie fișierele adăugate într-un dosar până la oprirea cu Ctrl+C
uv run src/cli.py watch inbox/ --output-types srt
```

## Opțiuni

| Opțiune | Descriere |
| --- | --- |
| `-m`, `--method` | Metoda de transcriere: `whisperx`, `whisper-api` sau `google` |
| `-l`, `--language` | Limba audio ca cod ISO 639-1 (de ex. `ro`) sau `auto` pentru detectare (nu este acceptat de Google) |
| `-o`, `--output-dir` | Dosarul în care se salvează transcrierile (implicit: lângă fiecare fișier transcris) |
| `--overwrite` | Suprascrierea transcrierilor existente |
| `-p`, `--prompt` | Despre ce este înregistrarea, de ex. subiectul sau cadrul (nu este acceptat de Google) |
| `-k`, `--keywords` | Nume, termeni sau acronime rostite, separate prin virgulă, ca să fie scrise corect (nu este acceptat de Google) |
| `--translate` | Traducerea sunetului în engleză (nu este acceptat de Google) |
| `-q`, `--quiet` | Afișarea doar a erorilor |
| `-v`, `--verbose` | Afișarea jurnalelor pentru depanare |

**Opțiuni WhisperX**

| Opțiune | Descriere |
| --- | --- |
| `-t`, `--output-types` | Tipuri de fișiere de ieșire separate prin virgulă (de ex. `txt,srt`) |
| `--diarize` | Identificarea vorbitorilor |
| `--speakers` | Numărul de vorbitori la identificare (`0` pentru detectare) |
| `--model-size` | Modelul, de ex. `small` sau `large-v2` (consultați [Motoare](/ro/reference/engines/#model)) |
| `--compute-type` | `int8`, `float16` sau `float32` |
| `--batch-size` | Dimensiunea lotului |
| `--cpu` | Rularea pe procesor |

**Opțiuni API Whisper**

| Opțiune | Descriere |
| --- | --- |
| `--openai-model` | Modelul de transcriere: `whisper-1`, `gpt-transcribe` sau `gpt-4o-transcribe-diarize` |

Rulați `uv run src/cli.py transcribe --help` pentru a vedea toate opțiunile și valorile lor.

## Ieșire și cod de ieșire

Progresul este afișat la ieșirea de erori standard (ascundeți-l cu `--quiet`), iar textul transcrierii unui singur fișier la ieșirea standard. Comanda se încheie cu codul `1` dacă o transcriere eșuează.

Cheile API sunt cele setate în aplicație sau variabilele de mediu `OPENAI_API_KEY`, `GOOGLE_API_KEY` și `HF_TOKEN` (pentru identificarea vorbitorilor).
