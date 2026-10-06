---
title: Engines
description: Vergelijk WhisperX, de Whisper-API en de Google-API, en kies hun modellen en geavanceerde opties.
sidebar:
  order: 1
---

Audiotext transcribeert met een van drie engines, die je kiest op de kaart **Engine** van de [transcriptie-instellingen](/nl/guides/transcription-settings/#engine).

| | WhisperX | Whisper-API | Google-API |
| --- | --- | --- | --- |
| Draait op | Je computer | Servers van OpenAI | Servers van Google |
| Internet | Alleen om de modellen te downloaden | Vereist | Vereist |
| Kosten | Gratis, onbeperkt | Betaald | Gratis tegoed (60 min/maand), of betaald met een API-sleutel |
| Detecteert de taal | ✓ | ✓ | ✗ |
| Vertaalt | ✓ | ✓ | ✗ |
| Tijdstempels | ✓ | Afhankelijk van het model | ✗ |
| Herkent sprekers | ✓ (Hugging Face-token) | `gpt-4o-transcribe-diarize` | ✗ |
| Tijden per woord | ✓ | `whisper-1` | ✗ |
| Livetekst | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) is een snelle implementatie van Whisper van OpenAI die op je computer draait, zodat je audio hem nooit verlaat. Het draait op de CPU of, veel sneller, op een NVIDIA-GPU met CUDA.

### Model

Grotere modellen zijn nauwkeuriger, maar trager en gebruiken meer geheugen. Het model wordt bij het eerste gebruik gedownload.

| Model | Parameters | Benodigd VRAM |
| :---: | :---: | :---: |
| `tiny`, `tiny.en` | 39 M | ~1 GB |
| `base`, `base.en` | 74 M | ~1 GB |
| `small`, `small.en` | 244 M | ~2 GB |
| `distil-small.en` | 166 M | ~2 GB |
| `medium`, `medium.en` | 769 M | ~5 GB |
| `distil-medium.en` | 394 M | ~3 GB |
| `large-v1`, `large-v2`, `large-v3` | 1550 M | <8 GB |
| `large-v3-turbo` | 809 M | ~6 GB |
| `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5` | 756 M | ~5 GB |

- **`large-v2`** is de standaard, omdat `large-v3` vaker hallucineert en tekst herhaalt, vooral in sommige talen zoals het Japans, en meer leestekens weglaat.
- **`large-v3-turbo`** is een uitgedunde versie van `large-v3`, veel sneller en bijna even nauwkeurig.
- De modellen die eindigen op **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) en de **gedistilleerde** modellen (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) transcriberen alleen Engels. Ze zijn sneller dan de meertalige modellen van dezelfde grootte.

:::tip
Kies `tiny` of `small` om Audiotext snel uit te proberen. Gebruik voor de beste kwaliteit `large-v2` of `large-v3-turbo` op een GPU.
:::

### Geavanceerde opties

Ze staan bij **Voorkeuren** → **WhisperX**. Wijzig ze alleen als je problemen hebt of weet wat je doet: een GPU zonder geheugen kan je systeem laten vastlopen.

- **Rekentype**: de precisie van de getallen van het model. `float16` is sneller op GPU's (de standaard met CUDA). `int8` gebruikt minder geheugen en is de standaard op de CPU, omdat veel CPU's `float16` niet efficiënt ondersteunen. `float32` is het nauwkeurigst, voor GPU's met meer dan 8 GB VRAM.
- **Batchgrootte**: hoeveel delen van de audio tegelijk worden verwerkt (standaard `8`). Het verandert de kwaliteit niet, alleen de snelheid. Verlaag hem als het geheugen opraakt; tot `16` wordt aanbevolen.
- **CPU gebruiken**: draait WhisperX op de CPU. Staat altijd aan als er geen CUDA-GPU is gevonden.

## Whisper-API

Gebruikt de [spraak-naar-tekst-API van OpenAI](https://platform.openai.com/docs/guides/speech-to-text). Hij is bedoeld voor computers waarop WhisperX niet soepel draait, en vereist een OpenAI-API-sleutel (zie [API-sleutels](/nl/reference/preferences/#api-sleutels)).

| Model | Tijdstempels | Sprekers | Opmerkingen |
| --- | :---: | :---: | --- |
| `whisper-1` (standaard) | ✓ | ✗ | Kan segment voor segment worden afgespeeld en ondertiteld. Vertaalt naar het Engels. |
| `gpt-transcribe` | ✗ | ✗ | Nauwkeuriger, maar zonder tijdstempels. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Herkent de sprekers. Gebruikt de trefwoorden en de beschrijving niet. |

Vertalingen naar het Engels worden altijd door `whisper-1` gemaakt, omdat dat het enige model is dat vertaalt.

Lange audio wordt opgedeeld in stukken van maximaal 10 minuten, geknipt bij een stilte zodat geen woord wordt gesplitst, omdat de API bestanden groter dan 25 MB weigert. Bij `whisper-1` wordt het einde van elk stuk als context aan het volgende meegegeven; bij `gpt-4o-transcribe-diarize` wordt een voorbeeld van de stem van elke spreker meegestuurd met de volgende stukken, zodat ze hun labels behouden.

### Opties

- **Antwoordformaat** (kaart Uitvoer, voor mappen): `text` (standaard), `json`, `verbose_json`, `srt` of `vtt`. Ondertitels en `verbose_json` vereisen een model met tijdstempels.
- **Temperatuur** (Voorkeuren → Whisper API): tussen 0 en 1. Hoge waarden zoals 0,8 maken het resultaat willekeuriger, lage waarden zoals 0,2 gerichter. Bij 0 (standaard) verhoogt het model hem automatisch als dat nodig is.
- **Tijdstempels van de woorden** (Voorkeuren → Whisper API): of `whisper-1` ook de tijdstempels van elk woord teruggeeft, om het tijdens het afspelen te markeren. Duurt langer. Standaard aan.

## Google-API

Gebruikt de [Google Speech-to-Text-API](https://cloud.google.com/speech-to-text). Hij zet geen leestekens (die voegt Audiotext toe), en de kwaliteit is lager dan die van Whisper, dus de transcripties moeten vaak worden gecorrigeerd. Hij kan de taal niet detecteren en niet vertalen, en levert platte tekst zonder tijdstempels.

Zonder API-sleutel wordt het gratis tegoed gebruikt, beperkt tot 60 minuten per maand. Stel een Google-API-sleutel in om dat uit te breiden. Google rekent kosten voor het gebruik, waarvoor Audiotext niet verantwoordelijk is.
