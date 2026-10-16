---
title: Opdrachtregel
description: Transcribeer, vat samen en vertaal bestanden, mappen en YouTube-video's vanuit scripts met de opdrachtregel van Audiotext.
sidebar:
  order: 3
---

Audiotext kan ook via de opdrachtregel worden gebruikt, bijv. om vanuit scripts te transcriberen. Er zijn drie opdrachten:

- `transcribe`: transcribeert een bestand, de bestanden van een map of een YouTube-video.
- `watch`: transcribeert de bestanden die aan een map worden toegevoegd, totdat hij met `Ctrl+C` wordt gestopt.
- `check-update`: controleert of er een nieuwe versie beschikbaar is en toont de link om die te downloaden.

Opties die je niet opgeeft, krijgen de waarden die in de app zijn ingesteld. De transcripties worden altijd naast elk getranscribeerd bestand opgeslagen, of in de map die je opgeeft met `--output-dir` (waarin de submappen van een getranscribeerde map worden nagemaakt).

## Uitvoeren

De geïnstalleerde app voert de opdrachtregel uit wanneer hij een van zijn opdrachten krijgt:

| Systeem | Opdracht |
| --- | --- |
| Linux | `audiotext` (door `install.sh` geïnstalleerd in `~/.local/bin`) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe`, in de map waarin Audiotext is geïnstalleerd (standaard `%LOCALAPPDATA%\Programs\Audiotext`) |

Als je het [vanuit de broncode uitvoert](/nl/help/contributing/#het-project-opzetten), gebruik je in plaats daarvan `uv run src/cli.py`.

## Voorbeelden

```bash
# Een bestand transcriberen. De tekst wordt ook afgedrukt, dus je kunt hem omleiden
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# De bestanden van een map transcriberen en de sprekers herkennen
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Een YouTube-video transcriberen met de Whisper-API
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Een vergadering transcriberen met de Whisper-API, met trefwoorden en context
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Een vergadering over de volgende versie"

# De ondertitels en een Word-document opslaan, samenvatten en naar het Spaans vertalen
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# De bestanden transcriberen die aan een map worden toegevoegd, tot Ctrl+C
audiotext watch inbox/ --output-types srt
```

## Opties

| Optie | Beschrijving |
| --- | --- |
| `-m`, `--method` | Transcriptiemethode: `whisperx`, `whisper-api` of `google` |
| `-l`, `--language` | Taal van de audio als ISO 639-1-code (bijv. `nl`), of `auto` om hem te detecteren (niet met Google) |
| `-t`, `--output-types` | Uitvoerbestandstypen gescheiden door komma's, uit `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` en `ass` (bijv. `txt,srt,md`) |
| `-o`, `--output-dir` | Map waarin de transcripties worden opgeslagen (standaard: naast elk getranscribeerd bestand) |
| `--overwrite` | Bestaande transcripties overschrijven |
| `-p`, `--prompt` | Waar de audio over gaat, zoals het onderwerp of de setting (niet met Google) |
| `-k`, `--keywords` | Namen, termen of afkortingen uit de audio, gescheiden door komma's, zodat ze goed gespeld worden (niet met Google) |
| `--translate` | De audio tijdens het transcriberen naar het Engels vertalen (niet met Google). Zie `--translate-to` voor andere talen |
| `-q`, `--quiet` | Alleen fouten afdrukken |
| `-v`, `--verbose` | De logs afdrukken om fouten op te sporen |
| `--version` | De versie van Audiotext afdrukken |

Uitvoertypen die de transcriptiemethode niet zelf opslaat (bijv. `md` of `docx`), worden uit het resultaat geëxporteerd, net als in de app. `aud` wordt alleen door WhisperX opgeslagen.

**Opties voor samenvatting en vertaling**

| Optie | Beschrijving |
| --- | --- |
| `--summarize` | Elke transcriptie samenvatten, met de kernpunten en de hoofdstukken, in een bestand `.summary.md` |
| `--summary-provider` | Aanbieder van het taalmodel dat samenvat: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` of `ollama` |
| `--summary-model` | Taalmodel dat samenvat |
| `--translate-to` | Elke transcriptie vertalen naar een taal (een ISO 639-1-code), opgeslagen in de uitvoerbestandstypen (bijv. `talk.es.srt`) |
| `--translation-provider` | Aanbieder van de vertalingen: die van `--summary-provider`, `deepl` of `google` |
| `--translation-model` | Taalmodel dat vertaalt, voor de aanbieders van taalmodellen |

Zonder opgave worden de aanbieders en modellen uit de app gebruikt. Zie [Aanbieders](/nl/guides/summary-and-translation/#aanbieders).

**WhisperX-opties**

| Optie | Beschrijving |
| --- | --- |
| `--diarize` | Sprekers herkennen |
| `--speakers` | Aantal sprekers bij het herkennen (`0` om het te detecteren) |
| `--model-size` | Model, bijv. `small` of `large-v2` (zie [Engines](/nl/reference/engines/#model)) |
| `--compute-type` | `int8`, `float16` of `float32` |
| `--batch-size` | Batchgrootte |
| `--cpu` | Op de CPU draaien, in plaats van op een NVIDIA-GPU of de GPU van een Mac |

**Whisper-API-opties**

| Optie | Beschrijving |
| --- | --- |
| `--openai-model` | Transcriptiemodel: `whisper-1`, `gpt-transcribe` of `gpt-4o-transcribe-diarize` |

Voer `audiotext transcribe --help` uit om alle opties en hun waarden te zien.

## Uitvoer en exitcode

De voortgang wordt naar de standaardfoutuitvoer geschreven (verberg hem met `--quiet`), en de tekst van de transcriptie van één bestand naar de standaarduitvoer. De opdracht eindigt met code `1` als een transcriptie, een samenvatting of een vertaling mislukt, en met `130` als hij met `Ctrl+C` wordt gestopt.

Als de API-sleutel van de aanbieder van `--summarize` of `--translate-to` niet is ingesteld, stopt de opdracht vóór het transcriberen. Een mislukte samenvatting of vertaling wordt gemeld zonder dat de transcriptie verloren gaat; die wordt toch opgeslagen.

De API-sleutels zijn de sleutels die in de app zijn ingesteld, of hun [omgevingsvariabelen](/nl/reference/files-and-data/#omgevingsvariabelen), zoals `OPENAI_API_KEY`, `GOOGLE_API_KEY` en `HF_TOKEN` (om de sprekers te herkennen).
