---
title: Voorkeuren
description: Alle instellingen van het venster Voorkeuren, tabblad voor tabblad.
sidebar:
  order: 2
---

De **Voorkeuren** bevatten de instellingen die niet per transcriptie veranderen. Open ze met het tandwiel rechtsboven in het venster. Wijzigingen worden automatisch opgeslagen.

## Algemeen

- **Weergave**: **Systeem** (volgt je systeem), **Licht** of **Donker**.
- **Grootte van de interface**: de grootte van de tekst en de bedieningselementen, van 80% tot 200%. Standaard `100%`. De wijziging wordt direct toegepast.
- **Taal van de interface**: de taal van Audiotext, of **Systeemtaal**. Zie de [beschikbare talen](/nl/reference/formats-and-languages/#talen-van-de-interface).
- **Datumnotatie**: hoe de datums van de transcripties worden getoond, in de taal van de interface: kort (`04-10-2026`), middel (`4 okt 2026`, standaard), lang (`4 oktober 2026`) of ISO (`2026-10-04`). Het menu toont elke notatie met een voorbeeld.
- **Tijdnotatie**: **Automatisch** (de klok van de taal van de interface), 12-uurs (`1:30 p.m.`) of 24-uurs (`13:30`).
- **Meldingen**: toont een systeemmelding wanneer een transcriptie klaar is (bij een map, wanneer al zijn bestanden klaar zijn, en bij een bewaakte map, telkens wanneer nieuwe bestanden klaar zijn, in één melding). Standaard aan. Op macOS komen ze van **Scripteditor** en op Windows van **Windows PowerShell**, dus ze worden voor die apps toegestaan of gedempt in de instellingen van het systeem. Op Linux is `notify-send` nodig (het pakket `libnotify-bin` of `libnotify`).
- **Automatisch controleren op updates**: controleert bij het openen van de app of er een nieuwe versie is en toont, als die er is, in de bovenste balk een knop **Versie … is beschikbaar** die de downloadpagina opent. Voorlopige versies worden niet aangeboden. Standaard aan.

## Aanbieders

De aanbieders van de [samenvattingen, vragen en vertalingen](/nl/guides/summary-and-translation/):

- **Samenvatting** → **Aanbieder** en **Model**.
- **Vragen** → **Aanbieder** en **Model**: die de vragen over de transcripties beantwoorden. Totdat je ze wijzigt, zijn het die van de samenvattingen.
- **Vertaling** → **Aanbieder** en **Model**. DeepL en Google Translate hebben geen modellen om uit te kiezen.
- **Ollama** → **Server-URL**: het adres van Ollama, standaard `http://localhost:11434`.

Laat het **Model** leeg om het standaardmodel van de aanbieder te gebruiken. De knop naast de aanbieder stelt de API-sleutel ervan in.

## API-sleutels

De sleutels van elke dienst. Klik op **API-sleutel instellen…** om er een in te voeren, of op **API-sleutel wijzigen…** om hem te vervangen (laat hem leeg om hem te verwijderen). Ze worden bewaard in de wachtwoordopslag van je systeem. Ze zijn gegroepeerd op waarvoor ze dienen, en de sleutels die zijn ingesteld tonen een vinkje.

| Groep | Sleutel | Gebruikt voor |
| --- | --- | --- |
| **LLM-aanbieders** | OpenAI-API-sleutel | De Whisper-API, en samenvatten, vragen en vertalen met OpenAI |
| | Anthropic-API-sleutel | Samenvatten, vragen en vertalen met Claude |
| | DeepSeek-API-sleutel | Samenvatten, vragen en vertalen met DeepSeek |
| | Gemini-API-sleutel | Samenvatten, vragen en vertalen met Gemini (van Google AI Studio) |
| | Mistral-API-sleutel | Samenvatten, vragen en vertalen met Mistral |
| | xAI-API-sleutel | Samenvatten, vragen en vertalen met Grok |
| **Vertaling** | DeepL-API-sleutel | Vertalen met DeepL (sleutels van het gratis abonnement werken ook) |
| | Google-API-sleutel | Google Speech-to-Text boven het gratis tegoed, en Google Translate (Cloud Translation API) |
| **Transcriptie** | Hugging Face-token | Sprekers herkennen met WhisperX |

:::caution
Elke aanbieder rekent kosten voor het gebruik van zijn API, waarvoor Audiotext niet verantwoordelijk is. Als OpenAI met een nieuwe sleutel de fout `429` geeft, zie [Problemen oplossen](/nl/help/troubleshooting/#de-whisper-api-geeft-de-fout-429).
:::

## Transcriptie

De opties van de engines, in een eigen sectie per engine.

### WhisperX

**Rekentype**, **Batchgrootte** en **CPU gebruiken**. Zie [Geavanceerde opties van WhisperX](/nl/reference/engines/#geavanceerde-opties). Op een Mac met Apple Silicon transcribeert WhisperX op de GPU, tenzij **CPU gebruiken** aan staat. Zie [Op een Mac](/nl/reference/engines/#op-een-mac). Op de GPU van de Mac zeggen de hints van **Rekentype** en **Batchgrootte** dat ze niet van toepassing zijn, en **CPU gebruiken** linkt naar de **Ondersteunde modellen**.

### Whisper API

**Temperatuur** en **Tijdstempels van de woorden**. Zie [Opties van de Whisper-API](/nl/reference/engines/#opties).

## Ondertitels

Hoe de ondertitels worden verdeeld: die op de video en in de modus **Ondertitels**, de geëxporteerde ondertitelbestanden en de [video's met ondertitels](/nl/guides/transcript/#de-video-met-ondertitels-exporteren). Elke optie heeft een waarde voor horizontale video's en een voor verticale (hoger dan breed, bijv. voor telefoons), die smaller zijn:

| Optie | Horizontaal | Verticaal |
| --- | :---: | :---: |
| **Max. regels per ondertitel** | `2` | `2` |
| **Max. tekens per regel** | `42` | `24` |
| **Chinees, Japans en Koreaans**: de tekens per regel in deze talen, waarvan de tekens ongeveer twee keer zo breed zijn als Latijnse | `16` | `10` |

De regels van een ondertitel worden gelijkmatig verdeeld, en talen zonder spaties worden tussen tekens afgebroken.

**Woorden markeren** onderstreept in de `.srt`- en `.vtt`-bestanden elk woord terwijl het wordt uitgesproken. Standaard uit.

## Over

De versie van Audiotext en links naar deze documentatie, de broncode op GitHub en de donatiepagina. **Controleren op updates** controleert meteen of er een nieuwe versie is: als die er is, wordt de knop **Downloaden** en opent hij de pagina ervan.
