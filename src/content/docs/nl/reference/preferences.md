---
title: Voorkeuren
description: Alle instellingen van het venster Voorkeuren, tabblad voor tabblad.
sidebar:
  order: 2
---

De **Voorkeuren** bevatten de instellingen die niet per transcriptie veranderen. Open ze met het tandwiel rechtsboven in het venster. Wijzigingen worden automatisch opgeslagen.

## Algemeen

- **Weergave**: **Systeem** (volgt je systeem), **Licht** of **Donker**.
- **Taal van de interface**: de taal van Audiotext, of **Systeemtaal**. Kan worden gewijzigd als er geen transcriptie bezig is. Zie de [beschikbare talen](/nl/reference/formats-and-languages/#talen-van-de-interface).
- **Datumnotatie**: hoe de datums van de transcripties worden getoond, in de taal van de interface: kort (`04-10-2026`), middel (`4 okt 2026`, standaard), lang (`4 oktober 2026`) of ISO (`2026-10-04`). Het menu toont elke notatie met een voorbeeld.
- **Tijdnotatie**: **Automatisch** (de klok van de taal van de interface), 12-uurs (`1:30 p.m.`) of 24-uurs (`13:30`).
- **Meldingen**: toont een systeemmelding wanneer een transcriptie klaar is (bij een map, wanneer al zijn bestanden klaar zijn, en bij een bewaakte map, telkens wanneer een nieuw bestand klaar is). Standaard aan. Op macOS komen ze van **Scripteditor** en op Windows van **Windows PowerShell**, dus ze worden voor die apps toegestaan of gedempt in de instellingen van het systeem. Op Linux is `notify-send` nodig (het pakket `libnotify-bin` of `libnotify`).

## AI

De aanbieders van de [samenvattingen en vertalingen](/nl/guides/summary-and-translation/):

- **Samenvatting** → **Aanbieder** en **Model**.
- **Vertaling** → **Aanbieder** en **Model**. DeepL en Google Translate hebben geen modellen om uit te kiezen.
- **Ollama** → **Server-URL**: het adres van Ollama, standaard `http://localhost:11434`.

Laat het **Model** leeg om het standaardmodel van de aanbieder te gebruiken. De knop naast de aanbieder stelt de API-sleutel ervan in.

## API-sleutels

De sleutels van elke dienst. Klik op **Instellen…** om er een in te voeren, of op **Wijzigen…** om hem te vervangen (laat hem leeg om hem te verwijderen). Ze worden bewaard in de wachtwoordopslag van je systeem.

| Sleutel | Gebruikt voor |
| --- | --- |
| OpenAI-API-sleutel | De Whisper-API, en samenvatten en vertalen met OpenAI |
| Anthropic-API-sleutel | Samenvatten en vertalen met Claude |
| DeepSeek-API-sleutel | Samenvatten en vertalen met DeepSeek |
| Gemini-API-sleutel | Samenvatten en vertalen met Gemini (van Google AI Studio) |
| Mistral-API-sleutel | Samenvatten en vertalen met Mistral |
| xAI-API-sleutel | Samenvatten en vertalen met Grok |
| DeepL-API-sleutel | Vertalen met DeepL (sleutels van het gratis abonnement werken ook) |
| Google-API-sleutel | Google Speech-to-Text boven het gratis tegoed, en Google Translate (Cloud Translation API) |
| Hugging Face-token | Sprekers herkennen met WhisperX |

:::caution
Elke aanbieder rekent kosten voor het gebruik van zijn API, waarvoor Audiotext niet verantwoordelijk is. Als OpenAI met een nieuwe sleutel de fout `429` geeft, zie [Problemen oplossen](/nl/help/troubleshooting/#de-whisper-api-geeft-de-fout-429).
:::

## WhisperX

**Rekentype**, **Batchgrootte** en **CPU gebruiken**. Zie [Geavanceerde opties van WhisperX](/nl/reference/engines/#geavanceerde-opties).

## Ondertitels

De opties van de `.srt`- en `.vtt`-bestanden die worden opgeslagen bij het transcriberen van een map met WhisperX:

- **Woorden markeren**: onderstreept elk woord terwijl het wordt uitgesproken. Standaard uit.
- **Max. aantal regels**: het maximale aantal regels per ondertitel. Standaard `2`.
- **Max. regelbreedte**: het maximale aantal tekens van een regel voordat die wordt afgebroken. Standaard `42`.

## Whisper API

**Temperatuur** en **Tijdstempels van de woorden**. Zie [Opties van de Whisper-API](/nl/reference/engines/#opties).

## Over

De versie van Audiotext en links naar deze documentatie, de broncode op GitHub en de donatiepagina.
