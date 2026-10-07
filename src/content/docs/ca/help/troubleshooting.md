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

Si la transcripció falla amb **Per identificar els parlants cal un testimoni de Hugging Face.** o **No s'ha pogut baixar el model d'identificació de parlants.**, el testimoni falta, no és vàlid o no pot accedir al model.

Identificar els parlants requereix un token de Hugging Face i acceptar les condicions del model. Comprova que:

- Has acceptat les condicions de [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) amb el mateix compte.
- El token té el rol `Read` i està configurat a **Preferències** → **Claus d'API**.

Consulta [Identifica els parlants](/ca/guides/transcription-settings/#identifica-els-parlants).

## No es troba cap micròfon, o no s'enregistra res

- Comprova que el micròfon està connectat i fes clic al botó d'actualitzar al costat de la llista de micròfons.
- A macOS, permet l'accés a Audiotext a **Configuració del Sistema** → **Privacitat i seguretat** → **Micròfon**. A Windows, a **Configuració** → **Privadesa** → **Micròfon**.
- Si el mesurador de nivell mostra **No hi ha so**, tria un altre micròfon de la llista o comprova que no està silenciat.
- Si es mostra **No s'ha enregistrat cap àudio.**, la gravació ha acabat abans que el micròfon enviés cap so. Torna a gravar o tria un altre micròfon.

## No es mostra el text en directe

Si es mostra **El text no es pot mostrar mentre es grava.** mentre graves, no s'ha pogut carregar el **Model en directe**: per exemple, es baixa la primera vegada que es fa servir, cosa que requereix connexió a Internet, o no hi ha prou memòria. La gravació no se'n veu afectada i es transcriu com sempre quan l'atures. Tria un **Model en directe** més petit (p. ex. `tiny` o `base`) a la targeta **Text en directe**.

## No es pot reproduir l'àudio d'una transcripció

El fitxer d'origen s'ha mogut o eliminat. El text es conserva, però l'àudio només es pot reproduir des del fitxer original. Audiotext desa els enregistraments del micròfon i l'àudio de les URL.

## No es pot descarregar un vídeo de YouTube

Assegura't que l'URL és correcta i que el vídeo és públic. YouTube canvia sovint, així que, si continua fallant, comprova si hi ha una versió més recent d'Audiotext.

Si en canvi es mostra **El vídeo de YouTube no té pista d'àudio.**, el vídeo no té so per transcriure.

## No es pot transcriure un enllaç

- **L'URL no apunta a un fitxer d'àudio o vídeo.**: l'enllaç obre una pàgina web, no un fitxer. Només funcionen els enllaços de vídeos de YouTube i els enllaços directes a fitxers d'àudio o vídeo. Busca a la pàgina l'enllaç que baixa el fitxer (p. ex. l'episodi d'un pòdcast) i fes-lo servir, o baixa el fitxer i transcriu-lo amb la font **Fitxer**.
- **No s'ha pogut baixar el fitxer: …**: no s'ha pogut accedir al fitxer. Comprova que l'enllaç s'obre al navegador i que tens connexió a Internet. Els enllaços que requereixen iniciar sessió no es poden baixar: baixa el fitxer tu mateix i fes servir la font **Fitxer**.

## Una carpeta no transcriu cap fitxer

Els fitxers que ja tenen una transcripció s'ometen. Activa **Sobreescriu els fitxers existents** per tornar-los a transcriure. La carpeta també ha de contenir [fitxers compatibles](/ca/reference/formats-and-languages/).

## L'API de Google demana l'idioma

L'API de Google no pot detectar l'idioma. Tria l'**Idioma de l'àudio** a la configuració.

## Falla un resum o una traducció

- **DeepL no pot traduir a l'idioma ….**: DeepL no admet aquest idioma. Tria un altre proveïdor, com ara un model de llenguatge.
- **La resposta del model era massa llarga.**, **El model no ha retornat un resum vàlid.** o **El model no ha retornat una traducció vàlida.**: el model no ha escrit el resum o la traducció en el format esperat. Torna-ho a provar o tria un model més gran a **Preferències** → **IA**. Els models petits d'Ollama fallen més sovint.
- Per a qualsevol altre error, comprova que la clau d'API del proveïdor està definida a **Preferències** → **Claus d'API** i que el teu compte té crèdit.

## No es poden cercar actualitzacions

**No s'han pogut cercar actualitzacions.** vol dir que Audiotext no ha pogut connectar amb GitHub. Comprova la connexió a Internet o si un tallafoc o un servidor intermediari ho bloqueja. Sempre pots baixar la darrera versió de la [pàgina de versions](https://github.com/HenestrosaDev/audiotext/releases/latest).

## Un altre problema

Cerca a les [incidències](https://github.com/HenestrosaDev/audiotext/issues) o pregunta a les [discussions](https://github.com/HenestrosaDev/audiotext/discussions). Si trobes un error, [informa'n](https://github.com/HenestrosaDev/audiotext/issues/new/choose) amb el teu sistema, la versió d'Audiotext i els passos per reproduir-lo.
