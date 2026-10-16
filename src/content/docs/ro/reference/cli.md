---
title: Linia de comandă
description: Transcrieți, rezumați și traduceți fișiere, dosare și videoclipuri YouTube din scripturi cu linia de comandă Audiotext.
sidebar:
  order: 3
---

Audiotext poate fi folosit și din linia de comandă, de ex. pentru a transcrie din scripturi. Are trei comenzi:

- `transcribe`: transcrie un fișier, fișierele unui dosar sau un videoclip YouTube.
- `watch`: transcrie fișierele adăugate într-un dosar până când este oprit cu `Ctrl+C`.
- `check-update`: verifică dacă este disponibilă o versiune nouă și afișează linkul pentru descărcarea ei.

Opțiunile neindicate iau valorile setate în aplicație. Transcrierile sunt salvate mereu lângă fiecare fișier transcris sau în dosarul indicat cu `--output-dir` (unde sunt recreate subdosarele unui dosar transcris).

## Rulați-o

Aplicația instalată rulează linia de comandă când primește una dintre comenzile ei:

| Sistem | Comandă |
| --- | --- |
| Linux | `audiotext` (instalat în `~/.local/bin` de `install.sh`) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe`, în dosarul în care este instalat Audiotext (implicit `%LOCALAPPDATA%\Programs\Audiotext`) |

Când îl [rulați din codul sursă](/ro/help/contributing/#pregătiți-proiectul), folosiți în schimb `uv run src/cli.py`.

## Exemple

```bash
# Transcrie un fișier. Textul este și afișat, deci poate fi redirecționat
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Transcrie fișierele unui dosar identificând vorbitorii
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transcrie un videoclip YouTube cu API-ul Whisper
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transcrie o ședință cu API-ul Whisper, cu cuvinte cheie și context
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "O ședință despre următoarea versiune"

# Salvează subtitrările și un document Word, îl rezumă și îl traduce în spaniolă
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Transcrie fișierele adăugate într-un dosar până la oprirea cu Ctrl+C
audiotext watch inbox/ --output-types srt
```

## Opțiuni

| Opțiune | Descriere |
| --- | --- |
| `-m`, `--method` | Metoda de transcriere: `whisperx`, `whisper-api` sau `google` |
| `-l`, `--language` | Limba audio ca cod ISO 639-1 (de ex. `ro`) sau `auto` pentru detectare (nu este acceptat de Google) |
| `-t`, `--output-types` | Tipuri de fișiere de ieșire separate prin virgulă, dintre `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` și `ass` (de ex. `txt,srt,md`) |
| `-o`, `--output-dir` | Dosarul în care se salvează transcrierile (implicit: lângă fiecare fișier transcris) |
| `--overwrite` | Suprascrierea transcrierilor existente |
| `-p`, `--prompt` | Despre ce este înregistrarea, de ex. subiectul sau cadrul (nu este acceptat de Google) |
| `-k`, `--keywords` | Nume, termeni sau acronime rostite, separate prin virgulă, ca să fie scrise corect (nu este acceptat de Google) |
| `--translate` | Traducerea sunetului în engleză în timpul transcrierii (nu este acceptat de Google). Pentru alte limbi consultați `--translate-to` |
| `-q`, `--quiet` | Afișarea doar a erorilor |
| `-v`, `--verbose` | Afișarea jurnalelor pentru depanare |
| `--version` | Afișarea versiunii Audiotext |

Tipurile de ieșire pe care metoda de transcriere nu le salvează singură (de ex. `md` sau `docx`) sunt exportate din rezultatul ei, ca din aplicație. `aud` este salvat doar de WhisperX.

**Opțiuni de rezumat și traducere**

| Opțiune | Descriere |
| --- | --- |
| `--summarize` | Rezumarea fiecărei transcrieri, cu punctele cheie și capitolele, într-un fișier `.summary.md` |
| `--summary-provider` | Furnizorul modelului de limbaj care rezumă: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` sau `ollama` |
| `--summary-model` | Modelul de limbaj care rezumă |
| `--translate-to` | Traducerea fiecărei transcrieri într-o limbă (un cod ISO 639-1), salvată în tipurile ei de fișiere de ieșire (de ex. `talk.es.srt`) |
| `--translation-provider` | Furnizorul traducerilor: cei de la `--summary-provider`, `deepl` sau `google` |
| `--translation-model` | Modelul de limbaj care traduce, pentru furnizorii de modele de limbaj |

Dacă nu sunt indicați, se folosesc furnizorii și modelele setate în aplicație. Consultați [Furnizori](/ro/guides/summary-and-translation/#furnizori).

**Opțiuni WhisperX**

| Opțiune | Descriere |
| --- | --- |
| `--diarize` | Identificarea vorbitorilor |
| `--speakers` | Numărul de vorbitori la identificare (`0` pentru detectare) |
| `--model-size` | Modelul, de ex. `small` sau `large-v2` (consultați [Motoare](/ro/reference/engines/#model)) |
| `--compute-type` | `int8`, `float16` sau `float32` |
| `--batch-size` | Dimensiunea lotului |
| `--cpu` | Rularea pe procesor, în loc de o placă video NVIDIA sau placa video a unui Mac |

**Opțiuni API Whisper**

| Opțiune | Descriere |
| --- | --- |
| `--openai-model` | Modelul de transcriere: `whisper-1`, `gpt-transcribe` sau `gpt-4o-transcribe-diarize` |

Rulați `audiotext transcribe --help` pentru a vedea toate opțiunile și valorile lor.

## Ieșire și cod de ieșire

Progresul este afișat la ieșirea de erori standard (ascundeți-l cu `--quiet`), iar textul transcrierii unui singur fișier la ieșirea standard. Comanda se încheie cu codul `1` dacă o transcriere, un rezumat sau o traducere eșuează, și cu `130` dacă este oprită cu `Ctrl+C`.

Dacă cheia API a furnizorului pentru `--summarize` sau `--translate-to` nu este setată, comanda se oprește înainte de a transcrie. Un rezumat sau o traducere care eșuează este raportat fără a pierde transcrierea, care este salvată oricum.

Cheile API sunt cele setate în aplicație sau [variabilele lor de mediu](/ro/reference/files-and-data/#variabile-de-mediu), precum `OPENAI_API_KEY`, `GOOGLE_API_KEY` și `HF_TOKEN` (pentru identificarea vorbitorilor).
