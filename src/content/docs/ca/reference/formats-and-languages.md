---
title: Formats i idiomes
description: Els formats d'àudio i vídeo, els idiomes de l'àudio i els idiomes de la interfície compatibles amb Audiotext.
sidebar:
  order: 4
---

## Formats d'àudio i vídeo

Audiotext extreu l'àudio dels fitxers de vídeo amb FFmpeg, així que transcriu tots dos.

**Àudio**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Vídeo**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Formats de sortida

| Format | Exporta | Carpeta (WhisperX) | Carpeta (API de Whisper) |
| --- | :---: | :---: | :---: |
| Text pla (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Document de Word (`.docx`) | ✓ | ✗ | ✗ |
| Subtítols (`.srt`) | ✓ | ✓ | `srt` |
| Subtítols web (`.vtt`) | ✓ | ✓ | `vtt` |
| Taula (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Etiquetes d'Audacity (`.aud`) | ✗ | ✓ | ✗ |

Consulta [Exporta](/ca/guides/transcript/#copia-i-exporta) i la [targeta Sortida](/ca/guides/transcription-settings/#carpeta-i-sortida).

## Idiomes de l'àudio

WhisperX i l'API de Whisper detecten l'idioma automàticament, i poden transcriure aquests 100 idiomes (l'API de Google requereix triar-lo):

afrikaans, albanès, alemany, amhàric, anglès, àrab, armeni, assamès, azerbaidjanès, baixkir, basc, bengalí, bielorús, birmà, bosnià, bretó, búlgar, canarès, castellà, català, coreà, crioll haitià, croat, danès, eslovac, eslovè, estonià, feroès, finès, francès, gal·lès, gallec, georgià, grec, gujarati, haussa, hawaià, hebreu, hindi, hongarès, indonesi, islandès, italià, japonès, javanès, khmer, kazakh, laosià, letó, llatí, lingala, lituà, luxemburguès, macedoni, malai, malaiàlam, malgaix, maltès, maori, marathi, mongol, neerlandès, nepalès, noruec, noruec nynorsk, occità, paixtu, panjabi, persa, polonès, portuguès, romanès, rus, sànscrit, serbi, shona, sindhi, singalès, somali, suahili, suec, sundanès, tadjik, tagal, tai, tàmil, tàtar, telugu, tibetà, turc, turcman, txec, ucraïnès, urdú, uzbek, vietnamita, xinès, xinès (cantonès), ídix i ioruba.

La qualitat depèn de l'idioma: és millor en els idiomes més parlats, com l'anglès, el castellà, el francès, l'alemany, el portuguès, l'italià o el japonès.

## Idiomes de la interfície

La interfície d'Audiotext, i aquesta documentació, estan disponibles en:

| Idioma | | Idioma | |
| --- | --- | --- | --- |
| Català | Català | Polski | Polonès |
| Čeština | Txec | Português | Portuguès |
| Deutsch | Alemany | Română | Romanès |
| English | Anglès | Русский | Rus |
| Español | Castellà | Svenska | Suec |
| Français | Francès | Türkçe | Turc |
| Galego | Gallec | Українська | Ucraïnès |
| हिन्दी | Hindi | Tiếng Việt | Vietnamita |
| Bahasa Indonesia | Indonesi | 简体中文 | Xinès simplificat |
| Italiano | Italià | 日本語 | Japonès |
| Nederlands | Neerlandès | 한국어 | Coreà |

Canvia'l a **Preferències** → **General** → **Idioma de la interfície**. Per millorar una traducció o afegir-hi un idioma, consulta [Contribueix](/ca/help/contributing/#tradueix-la-interfície).
