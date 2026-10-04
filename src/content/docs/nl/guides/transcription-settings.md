---
title: Transcriptie-instellingen
description: Kies de engine, de talen, de context, de opties en de uitvoer van elke transcriptie.
sidebar:
  order: 2
---

Voor het transcriberen toont Audiotext de instellingen van de transcriptie, gegroepeerd in kaarten. Ze worden onthouden voor de volgende keer, en elke transcriptie bewaart de instellingen waarmee hij is gemaakt.

![De instellingen van de transcriptie van een bestand](/screenshots/transcription-settings.png)

## Engine

De **Transcriptiemethode**:

| Engine | Draait op | Kosten | Opmerkingen |
| --- | --- | --- | --- |
| **WhisperX** (standaard) | Je computer | Gratis en onbeperkt | Privé en offline. Meer opties: sprekers, tijden per woord, livetekst. |
| **Whisper-API** | Servers van OpenAI | Betaald per minuut | Vereist een [OpenAI-API-sleutel](/nl/reference/preferences/#api-sleutels). Voor computers waarop WhisperX niet soepel draait. |
| **Google-API** | Servers van Google | Gratis tegoed, of betaald | Lagere kwaliteit en geen tijdstempels. Een API-sleutel is optioneel. |

Het **Model** hangt af van de engine. Bij WhisperX zijn grotere modellen nauwkeuriger, maar trager. Bij de Whisper-API bepaalt het of de transcriptie tijdstempels en sprekers heeft. Zie [Engines](/nl/reference/engines/) om ze te vergelijken.

## Taal

- **Taal van de audio**: standaard **Automatisch detecteren**. Door hem te kiezen voorkom je fouten bij korte of gemengde audio. De Google-API kan hem niet detecteren, dus daar moet je hem kiezen.
- **Taal van de transcriptie**: standaard **Zelfde als de audio**. Kies een andere taal om de audio tijdens het transcriberen te vertalen.

Als beide talen verschillen, verschijnen de opties onder **Vertaling**:

- **Vertalen met Whisper (aanbevolen)**: Whisper transcribeert en vertaalt de audio in één stap. Het kan alleen naar het Engels vertalen.
- **Rechtstreeks in het _taal_ schrijven (experimenteel)**: Whisper wordt gevraagd de transcriptie direct in die taal te schrijven. Dat werkt voor veel talen goed, maar controleer het resultaat.

De Google-API kan niet vertalen. Gebruik de knop [Vertalen](/nl/guides/summary-and-translation/#vertaling) van het transcript om een transcriptie later met meer aanbieders naar elke taal te vertalen.

## Context

Twee optionele velden die het model helpen:

- **Trefwoorden**: namen, termen of afkortingen die in de audio worden gezegd, gescheiden door komma's (bijv. `Audiotext, WhisperX, Henestrosa`), zodat ze goed gespeld worden. Het zijn alleen hints: een trefwoord wordt alleen geschreven als het in de audio gezegd wordt.
- **Beschrijving**: waar de audio over gaat, zoals het onderwerp of de setting (bijv. `Een interview over spraakherkenning`).

Ze worden gebruikt door WhisperX en de Whisper-API, behalve door het model `gpt-4o-transcribe-diarize`. De Google-API gebruikt ze niet.

## Opties

- **Tijden per woord** (WhisperX): lijnt elk woord uit met de audio, om het tijdens het afspelen te markeren. Duurt iets langer. Ondertitels gebruiken ze al.
- **Spraak isoleren**: vermindert muziek en achtergrondgeluid voor het transcriberen.
- **Sprekers herkennen** (WhisperX): geeft aan wie in elk deel spreekt, bijv. `SPEAKER_00`. Als je weet hoeveel mensen er spreken, vul het in bij **Aantal sprekers** (`0` detecteert het). Vereist een gratis Hugging Face-token; zie [Sprekers herkennen](#sprekers-herkennen). Bij de Whisper-API herkent het model `gpt-4o-transcribe-diarize` de sprekers.

### Sprekers herkennen

Het model dat de sprekers herkent, [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1), is gratis, maar vereist een Hugging Face-token:

1. Maak een account aan op [Hugging Face](https://huggingface.co/join) en accepteer de voorwaarden van [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1).
2. Maak een token met de rol `Read` aan in [je instellingen](https://huggingface.co/settings/tokens).
3. Klik op **Hugging Face-token instellen…** en plak het.

Het model wordt bij het eerste gebruik gedownload. Daarna worden de sprekers offline herkend.

## Livetekst

Alleen getoond voor de microfoon. Zie [Livetekst](/nl/guides/sources/#livetekst).

## Map en Uitvoer

Alleen getoond voor mappen:

- **Map bewaken**: zie [Een map bewaken](/nl/guides/sources/#een-map-bewaken).
- **Bestandstypen**: bij WhisperX een of meer van `.txt`, `.srt`, `.vtt`, `.json`, `.tsv` en `.aud`. Bij de Whisper-API het formaat van de bestanden (`text`, `json`, `verbose_json`, `srt` of `vtt`); ondertitels vereisen een model met tijdstempels. De Google-API levert platte tekst (`.txt`).
- **Locatie**: de bestanden worden naast elk bronbestand opgeslagen. Klik op **Wijzigen…** om ze in een andere map op te slaan (de submappen worden nagemaakt), of op **Naast de bron** om terug te gaan.
- **Bestaande bestanden overschrijven**: transcribeert bestanden die al een transcriptie hebben opnieuw en vervangt die.

De opties voor ondertitels (regelbreedte, aantal regels, gemarkeerde woorden) staan in de [Voorkeuren](/nl/reference/preferences/#ondertitels).
