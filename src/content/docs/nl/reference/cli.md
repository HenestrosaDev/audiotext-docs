---
title: Opdrachtregel
description: Transcribeer bestanden, mappen en YouTube-video's vanuit scripts met de opdrachtregel van Audiotext.
sidebar:
  order: 3
---

Audiotext kan ook via de opdrachtregel worden gebruikt om vanuit scripts te transcriberen, als je het [vanuit de broncode uitvoert](/nl/help/contributing/#het-project-opzetten). Er zijn drie opdrachten:

- `transcribe`: transcribeert een bestand, de bestanden van een map of een YouTube-video.
- `watch`: transcribeert de bestanden die aan een map worden toegevoegd, totdat hij met `Ctrl+C` wordt gestopt.
- `check-update`: controleert of er een nieuwe versie beschikbaar is en toont de link om die te downloaden.

Opties die je niet opgeeft, krijgen de waarden die in de app zijn ingesteld. De transcripties worden altijd naast elk getranscribeerd bestand opgeslagen, of in de map die je opgeeft met `--output-dir` (waarin de submappen van een getranscribeerde map worden nagemaakt).

## Voorbeelden

```bash
# Een bestand transcriberen. De tekst wordt ook afgedrukt, dus je kunt hem omleiden
python src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# De bestanden van een map transcriberen en de sprekers herkennen
python src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Een YouTube-video transcriberen met de Whisper-API
python src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Een vergadering transcriberen met de Whisper-API, met trefwoorden en context
python src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Een vergadering over de volgende versie"

# De bestanden transcriberen die aan een map worden toegevoegd, tot Ctrl+C
python src/cli.py watch inbox/ --output-types srt
```

## Opties

| Optie | Beschrijving |
| --- | --- |
| `-m`, `--method` | Transcriptiemethode: `whisperx`, `whisper-api` of `google` |
| `-l`, `--language` | Taal van de audio als ISO 639-1-code (bijv. `nl`), of `auto` om hem te detecteren (niet met Google) |
| `-o`, `--output-dir` | Map waarin de transcripties worden opgeslagen (standaard: naast elk getranscribeerd bestand) |
| `--overwrite` | Bestaande transcripties overschrijven |
| `-p`, `--prompt` | Waar de audio over gaat, zoals het onderwerp of de setting (niet met Google) |
| `-k`, `--keywords` | Namen, termen of afkortingen uit de audio, gescheiden door komma's, zodat ze goed gespeld worden (niet met Google) |
| `--translate` | De audio naar het Engels vertalen (niet met Google) |
| `-q`, `--quiet` | Alleen fouten afdrukken |
| `-v`, `--verbose` | De logs afdrukken om fouten op te sporen |

**WhisperX-opties**

| Optie | Beschrijving |
| --- | --- |
| `-t`, `--output-types` | Uitvoerbestandstypen gescheiden door komma's (bijv. `txt,srt`) |
| `--diarize` | Sprekers herkennen |
| `--speakers` | Aantal sprekers bij het herkennen (`0` om het te detecteren) |
| `--model-size` | Model, bijv. `small` of `large-v2` (zie [Engines](/nl/reference/engines/#model)) |
| `--compute-type` | `int8`, `float16` of `float32` |
| `--batch-size` | Batchgrootte |
| `--cpu` | Op de CPU draaien |

**Whisper-API-opties**

| Optie | Beschrijving |
| --- | --- |
| `--openai-model` | Transcriptiemodel: `whisper-1`, `gpt-transcribe` of `gpt-4o-transcribe-diarize` |

Voer `python src/cli.py transcribe --help` uit om alle opties en hun waarden te zien.

## Uitvoer en exitcode

De voortgang wordt naar de standaardfoutuitvoer geschreven (verberg hem met `--quiet`), en de tekst van de transcriptie van één bestand naar de standaarduitvoer. De opdracht eindigt met code `1` als een transcriptie mislukt.

De API-sleutels zijn de sleutels die in de app zijn ingesteld, of de omgevingsvariabelen `OPENAI_API_KEY`, `GOOGLE_API_KEY` en `HF_TOKEN` (om de sprekers te herkennen).
