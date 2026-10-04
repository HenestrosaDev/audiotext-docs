---
title: Formats et langues
description: Les formats audio et vidéo, les langues de l’audio et les langues de l’interface pris en charge par Audiotext.
sidebar:
  order: 4
---

## Formats audio et vidéo

Audiotext extrait l’audio des fichiers vidéo avec FFmpeg : il transcrit donc les deux.

**Audio** : `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Vidéo** : `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Formats de sortie

| Format | Exporter | Dossier (WhisperX) | Dossier (API Whisper) |
| --- | :---: | :---: | :---: |
| Texte brut (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Document Word (`.docx`) | ✓ | ✗ | ✗ |
| Sous-titres (`.srt`) | ✓ | ✓ | `srt` |
| Sous-titres web (`.vtt`) | ✓ | ✓ | `vtt` |
| Tableau (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Étiquettes Audacity (`.aud`) | ✗ | ✓ | ✗ |

Consultez [Exporter](/fr/guides/transcript/#copiez-et-exportez) et la [carte Sortie](/fr/guides/transcription-settings/#dossier-et-sortie).

## Langues de l’audio

WhisperX et l’API Whisper détectent la langue automatiquement, et peuvent transcrire ces 100 langues (l’API Google exige de la choisir) :

afrikaans, albanais, allemand, amharique, anglais, arabe, arménien, assamais, azerbaïdjanais, bachkir, basque, bengali, biélorusse, birman, bosnien, breton, bulgare, cantonais, catalan, chinois, coréen, créole haïtien, croate, danois, espagnol, estonien, féroïen, finnois, français, galicien, gallois, géorgien, grec, gujarati, haoussa, hawaïen, hébreu, hindi, hongrois, indonésien, islandais, italien, japonais, javanais, kannada, kazakh, khmer, lao, latin, letton, lingala, lituanien, luxembourgeois, macédonien, malais, malayalam, malgache, maltais, maori, marathi, mongol, néerlandais, népalais, norvégien, norvégien nynorsk, occitan, ourdou, ouzbek, pachto, pendjabi, persan, polonais, portugais, roumain, russe, sanskrit, serbe, shona, sindhi, cingalais, slovaque, slovène, somali, soundanais, suédois, swahili, tadjik, tagalog, tamoul, tatar, tchèque, télougou, thaï, tibétain, turc, turkmène, ukrainien, vietnamien, yiddish et yoruba.

La qualité dépend de la langue : elle est meilleure pour les langues les plus parlées, comme l’anglais, l’espagnol, le français, l’allemand, le portugais, l’italien ou le japonais.

## Langues de l’interface

L’interface d’Audiotext, ainsi que cette documentation, sont disponibles en :

| Langue | | Langue | |
| --- | --- | --- | --- |
| Català | Catalan | Polski | Polonais |
| Čeština | Tchèque | Português | Portugais |
| Deutsch | Allemand | Română | Roumain |
| English | Anglais | Русский | Russe |
| Español | Espagnol | Svenska | Suédois |
| Français | Français | Türkçe | Turc |
| Galego | Galicien | Українська | Ukrainien |
| हिन्दी | Hindi | Tiếng Việt | Vietnamien |
| Bahasa Indonesia | Indonésien | 简体中文 | Chinois simplifié |
| Italiano | Italien | 日本語 | Japonais |
| Nederlands | Néerlandais | 한국어 | Coréen |

Changez-la dans **Préférences** → **Général** → **Langue de l’interface**. Pour améliorer une traduction ou ajouter une langue, consultez [Contribuer](/fr/help/contributing/#traduisez-linterface).
