---
title: Formati e lingue
description: I formati audio e video, le lingue dell'audio e le lingue dell'interfaccia supportati da Audiotext.
sidebar:
  order: 4
---

## Formati audio e video

Audiotext estrae l'audio dei file video con FFmpeg, quindi trascrive entrambi.

**Audio**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Video**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Formati di output

| Formato | Esporta | Cartella (WhisperX) | Cartella (API di Whisper) |
| --- | :---: | :---: | :---: |
| Testo semplice (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Documento Word (`.docx`) | ✓ | ✗ | ✗ |
| Sottotitoli (`.srt`) | ✓ | ✓ | `srt` |
| Sottotitoli web (`.vtt`) | ✓ | ✓ | `vtt` |
| Tabella (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Etichette di Audacity (`.aud`) | ✗ | ✓ | ✗ |

Consulta [Esporta](/it/guides/transcript/#copia-ed-esporta) e la [scheda Output](/it/guides/transcription-settings/#cartella-e-output).

## Lingue dell'audio

WhisperX e la API di Whisper rilevano la lingua automaticamente, e possono trascrivere queste 100 lingue (la API di Google richiede di sceglierla):

afrikaans, albanese, amarico, arabo, armeno, assamese, azero, baschiro, basco, bengalese, bielorusso, birmano, bosniaco, bretone, bulgaro, cantonese, catalano, ceco, cinese, coreano, creolo haitiano, croato, danese, ebraico, estone, faroese, finlandese, francese, gallese, galiziano, georgiano, giapponese, giavanese, greco, gujarati, hausa, hawaiano, hindi, indonesiano, inglese, islandese, italiano, kannada, kazako, khmer, lao, latino, lettone, lingala, lituano, lussemburghese, macedone, malayalam, malese, malgascio, maltese, maori, marathi, mongolo, nepalese, norvegese, norvegese nynorsk, olandese, occitano, pashto, persiano, polacco, portoghese, punjabi, rumeno, russo, sanscrito, serbo, shona, sindhi, singalese, slovacco, sloveno, somalo, spagnolo, sundanese, svedese, swahili, tagalog, tagico, tamil, tataro, tedesco, telugu, thailandese, tibetano, turco, turkmeno, ucraino, ungherese, urdu, uzbeko, vietnamita, yiddish e yoruba.

La qualità dipende dalla lingua: è migliore per le lingue più parlate, come inglese, spagnolo, francese, tedesco, portoghese, italiano o giapponese.

## Lingue dell'interfaccia

L'interfaccia di Audiotext, e questa documentazione, sono disponibili in:

| Lingua | | Lingua | |
| --- | --- | --- | --- |
| Català | Catalano | Polski | Polacco |
| Čeština | Ceco | Português | Portoghese |
| Deutsch | Tedesco | Română | Rumeno |
| English | Inglese | Русский | Russo |
| Español | Spagnolo | Svenska | Svedese |
| Français | Francese | Türkçe | Turco |
| Galego | Galiziano | Українська | Ucraino |
| हिन्दी | Hindi | Tiếng Việt | Vietnamita |
| Bahasa Indonesia | Indonesiano | 简体中文 | Cinese semplificato |
| Italiano | Italiano | 日本語 | Giapponese |
| Nederlands | Olandese | 한국어 | Coreano |

Cambiala in **Preferenze** → **Generale** → **Lingua dell'interfaccia**. Per migliorare una traduzione o aggiungere una lingua, consulta [Contribuire](/it/help/contributing/#traduci-linterfaccia).
