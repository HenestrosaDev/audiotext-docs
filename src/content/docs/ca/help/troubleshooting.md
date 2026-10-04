---
title: Resolució de problemes
description: Solucions als problemes més habituals d'Audiotext.
sidebar:
  order: 1
---

## La primera transcripció amb WhisperX triga molt

La primera vegada que es fa servir un model, es descarrega, cosa que pot trigar uns quants minuts segons la connexió i la mida del model (fins a ~3 GB). El progrés indica quan s'està carregant. El model es queda a la memòria mentre les seves opcions no canviïn, així que les transcripcions següents comencen de seguida.

## WhisperX falla amb `CUDA out of memory`

La GPU no té prou memòria per a la configuració. Prova, en aquest ordre:

1. Abaixa la **Mida del lot** (p. ex. `4`) a **Preferències** → **WhisperX**.
2. Fes servir un model més petit (p. ex. `small` o `base`).
3. Fes servir un **Tipus de càlcul** més lleuger (p. ex. `int8`).

Els dos últims poden reduir la qualitat. Consulta [Motors](/ca/reference/engines/#model) per veure la memòria que necessita cada model.

## Transcriure triga massa

La velocitat de WhisperX depèn del maquinari, així que no esperis resultats instantanis en CPU modestes. Prova un model més petit, com `small`, o `large-v3-turbo` en una GPU, o el tipus de càlcul `int8`. També pots fer servir l'**API de Whisper** o l'**API de Google**, que s'executen en servidors remots.

## L'API de Whisper retorna l'error `429`

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

El teu compte d'OpenAI s'ha quedat sense crèdits, o has d'afegir-hi fons abans de fer servir l'API per primera vegada (encara que tinguis crèdits gratuïts). Compra crèdits a la secció [Billing](https://platform.openai.com/settings/organization/billing/overview) del teu compte d'OpenAI. El compte pot trigar fins a 10 minuts a activar-se.

Si vas crear la clau d'API abans d'afegir-hi fons per primera vegada i l'error persisteix després de 10 minuts, crea una clau nova i configura-la a **Preferències** → **Claus d'API**.

## No es poden identificar els parlants

Identificar els parlants requereix un token de Hugging Face i acceptar les condicions del model. Comprova que:

- Has acceptat les condicions de [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) amb el mateix compte.
- El token té el rol `Read` i està configurat a **Preferències** → **Claus d'API**.

Consulta [Identifica els parlants](/ca/guides/transcription-settings/#identifica-els-parlants).

## No es troba cap micròfon, o no s'enregistra res

- Comprova que el micròfon està connectat i fes clic al botó d'actualitzar al costat de la llista de micròfons.
- A macOS, permet l'accés a Audiotext a **Configuració del Sistema** → **Privacitat i seguretat** → **Micròfon**. A Windows, a **Configuració** → **Privadesa** → **Micròfon**.
- Si el mesurador de nivell mostra **No hi ha so**, tria un altre micròfon de la llista o comprova que no està silenciat.

## No es pot reproduir l'àudio d'una transcripció

El fitxer d'origen s'ha mogut o eliminat. El text es conserva, però l'àudio només es pot reproduir des del fitxer original. Audiotext desa els enregistraments del micròfon i l'àudio de les URL.

## No es pot descarregar un vídeo de YouTube

Assegura't que l'URL és correcta i que el vídeo és públic. YouTube canvia sovint, així que, si continua fallant, comprova si hi ha una versió més recent d'Audiotext.

## Una carpeta no transcriu cap fitxer

Els fitxers que ja tenen una transcripció s'ometen. Activa **Sobreescriu els fitxers existents** per tornar-los a transcriure. La carpeta també ha de contenir [fitxers compatibles](/ca/reference/formats-and-languages/).

## L'API de Google demana l'idioma

L'API de Google no pot detectar l'idioma. Tria l'**Idioma de l'àudio** a la configuració.

## Un altre problema

Cerca a les [incidències](https://github.com/HenestrosaDev/audiotext/issues) o pregunta a les [discussions](https://github.com/HenestrosaDev/audiotext/discussions). Si trobes un error, [informa'n](https://github.com/HenestrosaDev/audiotext/issues/new/choose) amb el teu sistema, la versió d'Audiotext i els passos per reproduir-lo.
