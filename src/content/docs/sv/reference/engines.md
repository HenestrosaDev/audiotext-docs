---
title: Motorer
description: Jämför WhisperX, Whisper-API:t och Google-API:t, och välj deras modeller och avancerade alternativ.
sidebar:
  order: 1
---

Audiotext transkriberar med en av tre motorer, som du väljer på kortet **Motor** i [transkriberingsinställningarna](/sv/guides/transcription-settings/#motor).

| | WhisperX | Whisper-API | Google-API |
| --- | --- | --- | --- |
| Körs på | Din dator | OpenAI:s servrar | Googles servrar |
| Internet | Bara för att ladda ner modellerna | Krävs | Krävs |
| Kostnad | Gratis, obegränsat | Betald | Gratisnivå (60 min/månad), eller betald med API-nyckel |
| Identifierar språket | ✓ | ✓ | ✗ |
| Översätter | ✓ | ✓ | ✗ |
| Tidsstämplar | ✓ | Beror på modellen | ✗ |
| Identifierar talare | ✓ (Hugging Face-token) | `gpt-4o-transcribe-diarize` | ✗ |
| Tider per ord | ✓ | `whisper-1` | ✗ |
| Livetext | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) är en snabb implementering av OpenAI:s Whisper som körs på din dator, så ditt ljud lämnar den aldrig. Den körs på processorn eller, mycket snabbare, på ett NVIDIA-grafikkort med CUDA.

### Modell

Större modeller är mer exakta, men långsammare och använder mer minne. Modellen laddas ner första gången den används.

| Modell | Parametrar | VRAM som krävs |
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

- **`large-v2`** är standard, eftersom `large-v3` oftare hallucinerar och upprepar text, särskilt på vissa språk som japanska, och utelämnar mer interpunktion.
- **`large-v3-turbo`** är en nedbantad version av `large-v3`, mycket snabbare och nästan lika exakt.
- Modellerna som slutar på **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) och de **destillerade** modellerna (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) transkriberar bara engelska. De är snabbare än flerspråkiga modeller av samma storlek.

:::tip
För att snabbt prova Audiotext väljer du `tiny` eller `small`. För bästa kvalitet använder du `large-v2` eller `large-v3-turbo` på ett grafikkort.
:::

### Avancerade alternativ

De finns under **Inställningar** → **WhisperX**. Ändra dem bara om du har problem eller vet vad du gör: ett grafikkort som får slut på minne kan låsa systemet.

- **Beräkningstyp**: precisionen i modellens tal. `float16` är snabbare på grafikkort (standard med CUDA). `int8` använder mindre minne och är standard på processorn, eftersom många processorer inte hanterar `float16` effektivt. `float32` är mest exakt, för grafikkort med mer än 8 GB VRAM.
- **Batchstorlek**: hur många delar av ljudet som bearbetas samtidigt (`8` som standard). Den påverkar inte kvaliteten, bara hastigheten. Sänk den om minnet tar slut; högst `16` rekommenderas.
- **Använd CPU**: kör WhisperX på processorn. Alltid aktiverat om inget CUDA-grafikkort hittades.

## Whisper-API

Använder [OpenAI:s API för tal till text](https://platform.openai.com/docs/guides/speech-to-text). Det är avsett för datorer som inte kör WhisperX smidigt, och kräver en API-nyckel från OpenAI (se [API-nycklar](/sv/reference/preferences/#api-nycklar)).

| Modell | Tidsstämplar | Talare | Kommentarer |
| --- | :---: | :---: | --- |
| `whisper-1` (standard) | ✓ | ✗ | Kan spelas upp mening för mening och textas. Översätter till engelska. |
| `gpt-transcribe` | ✗ | ✗ | Mer exakt, men utan tidsstämplar. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Identifierar talarna. Använder inte nyckelorden eller beskrivningen. |

Översättningar till engelska görs alltid av `whisper-1`, eftersom det är den enda modellen som översätter.

Långa inspelningar delas upp i delar på upp till 10 minuter, kapade vid en tystnad så att inget ord delas, eftersom API:t avvisar filer större än 25 MB. Med `whisper-1` skickas slutet av varje del som sammanhang till nästa; med `gpt-4o-transcribe-diarize` skickas ett röstprov från varje talare med de följande delarna, så att de behåller sina etiketter.

### Alternativ

- **Svarsformat** (kortet Utdata, för mappar): `text` (standard), `json`, `verbose_json`, `srt` eller `vtt`. Undertexter och `verbose_json` kräver en modell med tidsstämplar.
- **Temperatur** (Inställningar → Whisper API): mellan 0 och 1. Höga värden som 0,8 gör resultatet mer slumpmässigt, låga som 0,2 mer fokuserat. Med 0 (standard) höjer modellen den automatiskt vid behov.
- **Tidsstämplar för orden** (Inställningar → Whisper API): om `whisper-1` även returnerar tidsstämplar för varje ord, för att markera det under uppspelning. Tar längre tid. Aktiverat som standard.

## Google-API

Använder [Googles Speech-to-Text API](https://cloud.google.com/speech-to-text). Det sätter inte ut skiljetecken (det gör Audiotext), och kvaliteten är lägre än Whispers, så transkriberingarna behöver ofta korrigeras. Det kan varken identifiera språket eller översätta, och returnerar oformaterad text utan tidsstämplar.

Utan API-nyckel används gratisnivån, begränsad till 60 minuter per månad. För att utöka den anger du en API-nyckel från Google. Google tar betalt för användningen, vilket Audiotext inte ansvarar för.
