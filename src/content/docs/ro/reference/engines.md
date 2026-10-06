---
title: Motoare
description: Comparați WhisperX, API-ul Whisper și API-ul Google și alegeți modelele și opțiunile lor avansate.
sidebar:
  order: 1
---

Audiotext transcrie cu unul dintre cele trei motoare, ales pe cardul **Motor** din [setările transcrierii](/ro/guides/transcription-settings/#motor).

| | WhisperX | API Whisper | API Google |
| --- | --- | --- | --- |
| Rulează pe | Computerul dumneavoastră | Serverele OpenAI | Serverele Google |
| Internet | Doar pentru descărcarea modelelor | Necesar | Necesar |
| Cost | Gratuit, nelimitat | Plătit | Nivel gratuit (60 min/lună) sau plătit cu cheie API |
| Detectează limba | ✓ | ✓ | ✗ |
| Traduce | ✓ | ✓ | ✗ |
| Marcaje de timp | ✓ | În funcție de model | ✗ |
| Identifică vorbitorii | ✓ (token Hugging Face) | `gpt-4o-transcribe-diarize` | ✗ |
| Temporizare pe cuvânt | ✓ | `whisper-1` | ✗ |
| Text live | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) este o implementare rapidă a Whisper de la OpenAI care rulează pe computerul dumneavoastră, deci sunetul nu îl părăsește niciodată. Rulează pe procesor sau, mult mai rapid, pe o placă video NVIDIA cu CUDA.

### Model

Modelele mai mari sunt mai precise, dar mai lente și folosesc mai multă memorie. Modelul este descărcat la prima utilizare.

| Model | Parametri | VRAM necesar |
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

- **`large-v2`** este implicit, deoarece `large-v3` halucinează și repetă textul mai des, mai ales în unele limbi precum japoneza, și omite mai multe semne de punctuație.
- **`large-v3-turbo`** este o versiune redusă a `large-v3`, mult mai rapidă și aproape la fel de precisă.
- Modelele terminate în **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) și modelele **distilate** (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) transcriu doar engleză. Sunt mai rapide decât modelele multilingve de aceeași dimensiune.

:::tip
Pentru a încerca rapid Audiotext, alegeți `tiny` sau `small`. Pentru cea mai bună calitate, folosiți `large-v2` sau `large-v3-turbo` pe o placă video.
:::

### Opțiuni avansate

Se află în **Preferințe** → **WhisperX**. Schimbați-le doar dacă aveți probleme sau știți ce faceți: o placă video fără memorie liberă poate bloca sistemul.

- **Tip de calcul**: precizia numerelor modelului. `float16` este mai rapid pe plăcile video (implicit cu CUDA). `int8` folosește mai puțină memorie și este implicit pe procesor, deoarece multe procesoare nu acceptă eficient `float16`. `float32` este cel mai precis, pentru plăci cu peste 8 GB VRAM.
- **Dimensiunea lotului**: câte părți ale sunetului sunt procesate simultan (implicit `8`). Nu schimbă calitatea, doar viteza. Reduceți-o dacă rămâneți fără memorie; se recomandă cel mult `16`.
- **Folosește CPU**: rulează WhisperX pe procesor. Este mereu activat dacă nu s-a găsit o placă CUDA.

## API Whisper

Folosește [API-ul OpenAI de transformare a vorbirii în text](https://platform.openai.com/docs/guides/speech-to-text). Este destinat computerelor care nu rulează WhisperX fluent și necesită o cheie API OpenAI (consultați [Chei API](/ro/reference/preferences/#chei-api)).

| Model | Marcaje de timp | Vorbitori | Observații |
| --- | :---: | :---: | --- |
| `whisper-1` (implicit) | ✓ | ✗ | Poate fi redat segment cu segment și subtitrat. Traduce în engleză. |
| `gpt-transcribe` | ✗ | ✗ | Mai precis, dar fără marcaje de timp. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Identifică vorbitorii. Nu folosește cuvintele cheie și nici descrierea. |

Traducerile în engleză sunt făcute mereu de `whisper-1`, singurul model care traduce.

Înregistrările lungi sunt împărțite în fragmente de până la 10 minute, tăiate la o pauză ca să nu fie despărțit niciun cuvânt, deoarece API-ul respinge fișierele mai mari de 25 MB. Cu `whisper-1`, finalul fiecărui fragment este dat drept context următorului; cu `gpt-4o-transcribe-diarize`, o mostră din vocea fiecărui vorbitor este trimisă cu fragmentele următoare, ca să-și păstreze etichetele.

### Opțiuni

- **Formatul răspunsului** (cardul Ieșire, pentru dosare): `text` (implicit), `json`, `verbose_json`, `srt` sau `vtt`. Subtitrările și `verbose_json` necesită un model cu marcaje de timp.
- **Temperatură** (Preferințe → Whisper API): între 0 și 1. Valorile mari, precum 0,8, fac rezultatul mai aleatoriu, iar cele mici, precum 0,2, mai concentrat. Cu 0 (implicit), modelul o crește automat când e nevoie.
- **Marcaje de timp ale cuvintelor** (Preferințe → Whisper API): dacă `whisper-1` returnează și marcajele de timp ale fiecărui cuvânt, pentru a-l evidenția la redare. Durează mai mult. Activat implicit.

## API Google

Folosește [Google Speech-to-Text API](https://cloud.google.com/speech-to-text). Nu pune semne de punctuație (le adaugă Audiotext), iar calitatea este mai slabă decât a Whisper, deci transcrierile necesită adesea corecturi. Nu poate detecta limba și nici traduce și returnează text simplu fără marcaje de timp.

Fără cheie API se folosește nivelul gratuit, limitat la 60 de minute pe lună. Pentru a-l extinde, setați o cheie API Google. Google taxează utilizarea, pentru care Audiotext nu este responsabil.
