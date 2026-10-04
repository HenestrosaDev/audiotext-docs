---
title: Configuració de la transcripció
description: Tria el motor, els idiomes, el context, les opcions i la sortida de cada transcripció.
sidebar:
  order: 2
---

Abans de transcriure, Audiotext mostra la configuració de la transcripció, agrupada en targetes. Es recorda per a la propera vegada, i cada transcripció conserva la configuració amb què es va fer.

![La configuració de la transcripció d'un fitxer](/screenshots/transcription-settings.png)

## Motor

El **Mètode de transcripció**:

| Motor | On s'executa | Cost | Notes |
| --- | --- | --- | --- |
| **WhisperX** (per defecte) | El teu ordinador | De franc i sense límits | Privat i sense connexió. Més opcions: parlants, temps per paraula, text en directe. |
| **API de Whisper** | Servidors d'OpenAI | De pagament per minut | Requereix una [clau d'API d'OpenAI](/ca/reference/preferences/#claus-dapi). Per a ordinadors que no poden executar WhisperX amb fluïdesa. |
| **API de Google** | Servidors de Google | Gratuïta limitada, o de pagament | Menys qualitat i sense marques de temps. La clau d'API és opcional. |

El **Model** depèn del motor. Amb WhisperX, els models més grans són més precisos, però més lents. Amb l'API de Whisper, decideix si la transcripció té marques de temps i parlants. Consulta [Motors](/ca/reference/engines/) per comparar-los.

## Idioma

- **Idioma de l'àudio**: **Detecció automàtica** per defecte. Triar-lo evita errors en àudios curts o barrejats. L'API de Google no el pot detectar, així que l'has de triar.
- **Idioma de la transcripció**: **El mateix que l'àudio** per defecte. Tria un altre idioma per traduir l'àudio mentre es transcriu.

Quan els dos idiomes són diferents, apareixen les opcions de **Traducció**:

- **Tradueix amb Whisper (recomanat)**: Whisper transcriu i tradueix l'àudio en un sol pas. Només pot traduir a l'anglès.
- **Escriu-la directament en _idioma_ (experimental)**: es demana a Whisper que escrigui la transcripció directament en aquell idioma. Funciona bé en molts idiomes, però revisa el resultat.

L'API de Google no pot traduir. Per traduir una transcripció a qualsevol idioma més endavant, amb més proveïdors, fes servir el botó [Tradueix](/ca/guides/summary-and-translation/#traducció) de la transcripció.

## Context

Dos camps opcionals que ajuden el model:

- **Paraules clau**: noms, termes o sigles que es diuen a l'àudio, separats per comes (p. ex. `Audiotext, WhisperX, Henestrosa`), perquè s'escriguin bé. Només són pistes: una paraula clau només s'escriu si es diu a l'àudio.
- **Descripció**: de què tracta l'àudio, com ara el tema o el context (p. ex. `Una entrevista sobre reconeixement de veu`).

Els fan servir WhisperX i l'API de Whisper, excepte el model `gpt-4o-transcribe-diarize`. L'API de Google no els fa servir.

## Opcions

- **Temps per paraula** (WhisperX): alinea cada paraula amb l'àudio, per ressaltar-la en reproduir. Triga una mica més. Els subtítols ja els fan servir.
- **Extreu la veu**: redueix la música i el soroll de fons abans de transcriure.
- **Identifica els parlants** (WhisperX): indica qui parla a cada part, p. ex. `SPEAKER_00`. Si saps quantes persones parlen, indica-ho a **Nombre de parlants** (`0` ho detecta). Requereix un token gratuït de Hugging Face; consulta [Identifica els parlants](#identifica-els-parlants). Amb l'API de Whisper, el model `gpt-4o-transcribe-diarize` identifica els parlants.

### Identifica els parlants

El model que identifica els parlants, [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1), és gratuït, però requereix un token de Hugging Face:

1. Crea un compte a [Hugging Face](https://huggingface.co/join) i accepta les condicions de [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1).
2. Crea un token amb el rol `Read` a [la teva configuració](https://huggingface.co/settings/tokens).
3. Fes clic a **Configura el token de Hugging Face…** i enganxa'l.

El model es descarrega la primera vegada que es fa servir. Després, els parlants s'identifiquen sense connexió.

## Text en directe

Només es mostra per al micròfon. Consulta [Text en directe](/ca/guides/sources/#text-en-directe).

## Carpeta i Sortida

Només es mostren per a carpetes:

- **Vigila la carpeta**: consulta [Vigila una carpeta](/ca/guides/sources/#vigila-una-carpeta).
- **Tipus de fitxer**: amb WhisperX, un o més de `.txt`, `.srt`, `.vtt`, `.json`, `.tsv` i `.aud`. Amb l'API de Whisper, el format dels fitxers (`text`, `json`, `verbose_json`, `srt` o `vtt`); els subtítols necessiten un model amb marques de temps. L'API de Google retorna text pla (`.txt`).
- **Ubicació**: els fitxers es desen al costat de cada fitxer d'origen. Fes clic a **Canvia…** per desar-los en una altra carpeta (se'n recreen les subcarpetes), o a **Al costat de l'origen** per tornar-hi.
- **Sobreescriu els fitxers existents**: torna a transcriure els fitxers que ja tenen una transcripció i la substitueix.

Les opcions dels subtítols (amplada de línia, nombre de línies, paraules ressaltades) són a les [Preferències](/ca/reference/preferences/#subtítols).
