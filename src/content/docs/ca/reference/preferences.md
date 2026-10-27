---
title: Preferències
description: Totes les opcions de la finestra de Preferències, pestanya per pestanya.
sidebar:
  order: 2
---

Les **Preferències** contenen la configuració que no canvia amb cada transcripció. Obre-les amb l'engranatge de dalt a la dreta de la finestra. Els canvis es desen automàticament.

## General

- **Aparença**: **Sistema** (segueix el sistema), **Clar** o **Fosc**.
- **Mida de la interfície**: la mida del text i dels controls, del 80% al 200%. `100%` per defecte. El canvi s'aplica a l'instant.
- **Idioma de la interfície**: l'idioma d'Audiotext, o **Idioma del sistema**. Consulta els [idiomes disponibles](/ca/reference/formats-and-languages/#idiomes-de-la-interfície).
- **Format de la data**: com es mostren les dates de les transcripcions, en l'idioma de la interfície: curt (`4/10/26`), mitjà (`4 d’oct. 2026`, per defecte), llarg (`4 d’octubre de 2026`) o ISO (`2026-10-04`). El menú mostra cada format amb un exemple.
- **Format de l'hora**: **Automàtic** (el rellotge de l'idioma de la interfície), de 12 hores (`1:30 p. m.`) o de 24 hores (`13:30`).
- **Notificacions**: mostra una notificació del sistema quan una transcripció està a punt (en una carpeta, quan ho estan tots els fitxers, i en una carpeta vigilada, cada vegada que ho estan fitxers nous, en una sola notificació). Activat per defecte. A macOS provenen de **Script Editor** i a Windows de **Windows PowerShell**, de manera que es permeten o se silencien per a aquestes aplicacions a la configuració del sistema. A Linux requereixen `notify-send` (el paquet `libnotify-bin` o `libnotify`).
- **Cerca actualitzacions automàticament**: comprova si hi ha una versió nova quan s'obre l'aplicació i, si n'hi ha, mostra un botó **Versió … disponible** a la barra superior que obre la seva pàgina de baixada. No s'ofereixen les versions preliminars. Activat per defecte.

## Proveïdors

Els proveïdors dels [resums, les preguntes i les traduccions](/ca/guides/summary-and-translation/):

- **Resum** → **Proveïdor** i **Model**.
- **Pregunta** → **Proveïdor** i **Model**: els que responen les preguntes sobre les transcripcions. Són els dels resums fins que els canviïs.
- **Traducció** → **Proveïdor** i **Model**. DeepL i Google Translate no tenen models per triar.
- **Ollama** → **URL del servidor**: l'adreça d'Ollama, `http://localhost:11434` per defecte.

Deixa el **Model** buit per fer servir el model per defecte del proveïdor. El botó al costat del proveïdor en configura la clau d'API.

## Claus d'API

Les claus de cada servei. Fes clic a **Configura la clau d'API…** per introduir-ne una, o a **Canvia la clau d'API…** per substituir-la (deixa-la buida per eliminar-la). Es desen al magatzem de credencials del sistema. S'agrupen segons per a què serveixen, i les que estan configurades mostren una marca.

| Grup | Clau | Es fa servir per a |
| --- | --- | --- |
| **Proveïdors de LLM** | Clau d'API d'OpenAI | L'API de Whisper, i resumir, preguntar i traduir amb OpenAI |
| | Clau d'API d'Anthropic | Resumir, preguntar i traduir amb Claude |
| | Clau d'API de DeepSeek | Resumir, preguntar i traduir amb DeepSeek |
| | Clau d'API de Gemini | Resumir, preguntar i traduir amb Gemini (de Google AI Studio) |
| | Clau d'API de Mistral | Resumir, preguntar i traduir amb Mistral |
| | Clau d'API de xAI | Resumir, preguntar i traduir amb Grok |
| **Traducció** | Clau d'API de DeepL | Traduir amb DeepL (les claus del pla gratuït també funcionen) |
| | Clau d'API de Google | Google Speech-to-Text més enllà del nivell gratuït, i Google Translate (Cloud Translation API) |
| **Transcripció** | Token de Hugging Face | Identificar els parlants amb WhisperX |

:::caution
Cada proveïdor cobra per l'ús de la seva API, del qual Audiotext no es fa responsable. Si OpenAI retorna l'error `429` amb una clau nova, consulta [Resolució de problemes](/ca/help/troubleshooting/#lapi-de-whisper-retorna-lerror-429).
:::

## Transcripció

Les opcions dels motors, en una secció cadascun.

### WhisperX

**Tipus de càlcul**, **Mida del lot** i **Utilitza la CPU**. Consulta les [opcions avançades de WhisperX](/ca/reference/engines/#opcions-avançades). En un Mac amb Apple Silicon, WhisperX transcriu a la seva GPU tret que **Utilitza la CPU** estigui activat. Consulta [En un Mac](/ca/reference/engines/#en-un-mac). A la GPU del Mac, les indicacions de **Tipus de càlcul** i **Mida del lot** diuen que no s'apliquen, i **Utilitza la CPU** enllaça als **Models compatibles**.

### API de Whisper

**Temperatura** i **Marques de temps de les paraules**. Consulta les [opcions de l'API de Whisper](/ca/reference/engines/#opcions).

## Subtítols

Com es divideixen els subtítols: els que es mostren damunt del vídeo i al mode **Subtítols**, els fitxers de subtítols exportats i els [vídeos amb subtítols](/ca/guides/transcript/#exporta-el-vídeo-amb-els-seus-subtítols). Cada opció té un valor per als vídeos horitzontals i un altre per als verticals (més alts que amples, p. ex. per a mòbils), que són més estrets:

| Opció | Horitzontal | Vertical |
| --- | :---: | :---: |
| **Màx. de línies per subtítol** | `2` | `2` |
| **Màx. de caràcters per línia** | `42` | `24` |
| **Xinès, japonès i coreà**: els caràcters per línia en aquestes llengües, els caràcters de les quals són aproximadament el doble d'amples que els llatins | `16` | `10` |

Les línies d'un subtítol s'equilibren, i les llengües que s'escriuen sense espais es parteixen entre caràcters.

**Ressalta les paraules** subratlla cada paraula mentre es diu als fitxers `.srt` i `.vtt`. Desactivat per defecte.

## Quant a

La versió d'Audiotext i enllaços a aquesta documentació, al codi font a GitHub i a la pàgina de donacions. **Cerca actualitzacions** comprova al moment si hi ha una versió nova: si n'hi ha, el botó es converteix en **Baixa** i obre la seva pàgina.
