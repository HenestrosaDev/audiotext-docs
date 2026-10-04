---
title: Depanare
description: Soluții pentru cele mai frecvente probleme ale Audiotext.
sidebar:
  order: 1
---

## Prima transcriere cu WhisperX durează mult

La prima utilizare modelul este descărcat, ceea ce poate dura câteva minute, în funcție de conexiune și de dimensiunea modelului (până la ~3 GB). Progresul arată când se încarcă. Modelul rămâne în memorie cât timp opțiunile lui nu se schimbă, deci transcrierile următoare încep imediat.

## WhisperX eșuează cu `CUDA out of memory`

Placa video nu are destulă memorie pentru setări. Încercați, în această ordine:

1. Reduceți **Dimensiunea lotului** (de ex. `4`) în **Preferințe** → **WhisperX**.
2. Folosiți un model mai mic (de ex. `small` sau `base`).
3. Folosiți un **Tip de calcul** mai ușor (de ex. `int8`).

Ultimele două pot reduce calitatea. Memoria necesară fiecărui model este în [Motoare](/ro/reference/engines/#model).

## Transcrierea durează prea mult

Viteza WhisperX depinde de hardware, deci nu vă așteptați la rezultate instantanee pe procesoare modeste. Încercați un model mai mic, precum `small`, `large-v3-turbo` pe o placă video sau tipul de calcul `int8`. Puteți folosi și **API-ul Whisper** sau **API-ul Google**, care rulează pe servere la distanță.

## API-ul Whisper returnează eroarea `429`

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

Contul OpenAI a rămas fără credite sau trebuie să adăugați fonduri înainte de prima utilizare a API-ului (chiar dacă aveți credite gratuite). Cumpărați credite în secțiunea [Billing](https://platform.openai.com/settings/organization/billing/overview) a contului OpenAI. Activarea contului poate dura până la 10 minute.

Dacă ați creat cheia API înainte de prima alimentare și eroarea persistă după 10 minute, creați o cheie nouă și setați-o în **Preferințe** → **Chei API**.

## Vorbitorii nu sunt identificați

Identificarea vorbitorilor necesită un token Hugging Face și acceptarea condițiilor modelului. Verificați că:

- Ați acceptat condițiile [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) cu același cont.
- Tokenul are rolul `Read` și este setat în **Preferințe** → **Chei API**.

Consultați [Identificarea vorbitorilor](/ro/guides/transcription-settings/#identificarea-vorbitorilor).

## Nu se găsește niciun microfon sau nu se înregistrează nimic

- Verificați că microfonul este conectat și faceți clic pe butonul de reîmprospătare de lângă lista de microfoane.
- Pe macOS, permiteți accesul pentru Audiotext în **Configurări sistem** → **Confidențialitate și securitate** → **Microfon**. Pe Windows, în **Setări** → **Confidențialitate** → **Microfon**.
- Dacă indicatorul de nivel arată **Fără sunet**, alegeți alt microfon din listă sau verificați că nu este dezactivat.

## Sunetul unei transcrieri nu poate fi redat

Fișierul sursă a fost mutat sau șters. Textul rămâne, dar sunetul poate fi redat doar din fișierul original. Înregistrările de la microfon și sunetul de la URL-uri sunt păstrate de Audiotext.

## Un videoclip YouTube nu poate fi descărcat

Verificați că URL-ul este corect și că videoclipul este public. YouTube se schimbă des, așa că, dacă tot eșuează, verificați dacă există o versiune mai nouă a Audiotext.

## Un dosar nu transcrie niciun fișier

Fișierele care au deja o transcriere sunt omise. Activați **Suprascrie fișierele existente** pentru a le transcrie din nou. Dosarul trebuie să conțină și [fișiere acceptate](/ro/reference/formats-and-languages/).

## API-ul Google cere limba

API-ul Google nu poate detecta limba. Alegeți **Limba audio** în setări.

## Altceva

Căutați în [issues](https://github.com/HenestrosaDev/audiotext/issues) sau întrebați în [discuții](https://github.com/HenestrosaDev/audiotext/discussions). Dacă găsiți o eroare, [raportați-o](https://github.com/HenestrosaDev/audiotext/issues/new/choose) cu sistemul, versiunea Audiotext și pașii pentru a o reproduce.
