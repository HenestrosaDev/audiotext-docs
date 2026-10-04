---
title: Motors
description: Compara WhisperX, l'API de Whisper i l'API de Google, i tria'n els models i les opcions avançades.
sidebar:
  order: 1
---

Audiotext transcriu amb un de tres motors, que es tria a la targeta **Motor** de la [configuració de la transcripció](/ca/guides/transcription-settings/#motor).

| | WhisperX | API de Whisper | API de Google |
| --- | --- | --- | --- |
| S'executa a | El teu ordinador | Servidors d'OpenAI | Servidors de Google |
| Internet | Només per descarregar els models | Necessari | Necessari |
| Cost | De franc, sense límits | De pagament | Gratuïta (60 min/mes), o de pagament amb una clau d'API |
| Detecta l'idioma | ✓ | ✓ | ✗ |
| Tradueix | ✓ | ✓ | ✗ |
| Marques de temps | ✓ | Segons el model | ✗ |
| Identifica parlants | ✓ (token de Hugging Face) | `gpt-4o-transcribe-diarize` | ✗ |
| Temps per paraula | ✓ | `whisper-1` | ✗ |
| Text en directe | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) és una implementació ràpida de Whisper d'OpenAI que s'executa al teu ordinador, així que el teu àudio no en surt mai. Funciona a la CPU o, molt més ràpid, en una GPU NVIDIA amb CUDA.

### Model

Els models més grans són més precisos, però més lents i fan servir més memòria. El model es descarrega la primera vegada que es fa servir.

| Model | Paràmetres | VRAM necessària |
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

- **`large-v2`** és el model per defecte, ja que `large-v3` tendeix a al·lucinar i repetir text més sovint, sobretot en alguns idiomes com el japonès, i omet més signes de puntuació.
- **`large-v3-turbo`** és una versió reduïda de `large-v3`, molt més ràpida i gairebé igual de precisa.
- Els models que acaben en **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) i els **destil·lats** (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) només transcriuen anglès. Són més ràpids que els models multilingües de la mateixa mida.

:::tip
Per provar Audiotext ràpidament, tria `tiny` o `small`. Per obtenir la millor qualitat, fes servir `large-v2` o `large-v3-turbo` en una GPU.
:::

### Opcions avançades

Són a **Preferències** → **WhisperX**. Canvia-les només si tens problemes o saps què fas: una GPU que es queda sense memòria pot bloquejar el sistema.

- **Tipus de càlcul**: la precisió dels nombres del model. `float16` és més ràpid en GPU (el valor per defecte amb CUDA). `int8` fa servir menys memòria i és el valor per defecte a la CPU, ja que moltes CPU no admeten `float16` de manera eficient. `float32` és el més precís, per a GPU amb més de 8 GB de VRAM.
- **Mida del lot**: quantes parts de l'àudio es processen alhora (`8` per defecte). No canvia la qualitat, només la velocitat. Abaixa-la si et quedes sense memòria; es recomana fins a `16`.
- **Utilitza la CPU**: executa WhisperX a la CPU. Sempre està activat si no s'ha trobat cap GPU amb CUDA.

## API de Whisper

Fa servir l'[API de veu a text d'OpenAI](https://platform.openai.com/docs/guides/speech-to-text). Està pensada per a ordinadors que no poden executar WhisperX amb fluïdesa, i requereix una clau d'API d'OpenAI (consulta [Claus d'API](/ca/reference/preferences/#claus-dapi)).

| Model | Marques de temps | Parlants | Notes |
| --- | :---: | :---: | --- |
| `whisper-1` (per defecte) | ✓ | ✗ | Es pot reproduir frase a frase i subtitular. Tradueix a l'anglès. |
| `gpt-transcribe` | ✗ | ✗ | Més precís, però sense marques de temps. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Identifica els parlants. No fa servir les paraules clau ni la descripció. |

Les traduccions a l'anglès sempre les fa `whisper-1`, ja que és l'únic model que tradueix.

Els àudios llargs es divideixen en fragments de fins a 10 minuts, tallats en un silenci perquè no es parteixi cap paraula, ja que l'API rebutja els fitxers de més de 25 MB. Amb `whisper-1`, el final de cada fragment es dona com a context al següent; amb `gpt-4o-transcribe-diarize`, s'envia una mostra de la veu de cada parlant amb els fragments següents, perquè mantinguin les seves etiquetes.

### Opcions

- **Format de resposta** (targeta Sortida, per a carpetes): `text` (per defecte), `json`, `verbose_json`, `srt` o `vtt`. Els subtítols i `verbose_json` necessiten un model amb marques de temps.
- **Temperatura** (Preferències → API de Whisper): entre 0 i 1. Els valors alts com 0,8 fan que el resultat sigui més aleatori, i els baixos com 0,2, més precís. Amb 0 (per defecte), el model l'apuja automàticament quan cal.
- **Marques de temps de les paraules** (Preferències → API de Whisper): si `whisper-1` també retorna les marques de temps de cada paraula, per ressaltar-la en reproduir. Triga més. Activat per defecte.

## API de Google

Fa servir l'[API Speech-to-Text de Google](https://cloud.google.com/speech-to-text). No puntua les frases (Audiotext hi afegeix la puntuació), i la seva qualitat és inferior a la de Whisper, així que les transcripcions sovint necessiten correccions. No pot detectar l'idioma ni traduir, i retorna text pla sense marques de temps.

Sense clau d'API, es fa servir el nivell gratuït, limitat a 60 minuts al mes. Per ampliar-lo, configura una clau d'API de Google. Google cobra pel seu ús, del qual Audiotext no es fa responsable.
