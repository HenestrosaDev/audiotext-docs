---
title: Formaten en talen
description: De audio- en videoformaten, de talen van de audio en de talen van de interface die Audiotext ondersteunt.
sidebar:
  order: 4
---

## Audio- en videoformaten

Audiotext haalt de audio uit videobestanden met FFmpeg, dus het transcribeert beide.

**Audio**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Video**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Uitvoerformaten

| Formaat | Exporteren | Map (WhisperX) | Map (Whisper-API) |
| --- | :---: | :---: | :---: |
| Platte tekst (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Word-document (`.docx`) | ✓ | ✗ | ✗ |
| Ondertitels (`.srt`) | ✓ | ✓ | `srt` |
| Webondertitels (`.vtt`) | ✓ | ✓ | `vtt` |
| Tabel (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Audacity-labels (`.aud`) | ✗ | ✓ | ✗ |

Zie [Exporteren](/nl/guides/transcript/#kopiëren-en-exporteren) en de [kaart Uitvoer](/nl/guides/transcription-settings/#map-en-uitvoer).

## Talen van de audio

WhisperX en de Whisper-API detecteren de taal automatisch en kunnen deze 100 talen transcriberen (bij de Google-API moet je hem kiezen):

Afrikaans, Albanees, Amhaars, Arabisch, Armeens, Assamees, Azerbeidzjaans, Basjkiers, Baskisch, Bengaals, Birmaans, Bosnisch, Bretons, Bulgaars, Catalaans, Chinees, Chinees (Kantonees), Deens, Duits, Engels, Ests, Faeröers, Fins, Frans, Galicisch, Georgisch, Grieks, Gujarati, Haïtiaans Creools, Hausa, Hawaïaans, Hebreeuws, Hindi, Hongaars, IJslands, Indonesisch, Italiaans, Japans, Javaans, Jiddisch, Kannada, Kazachs, Khmer, Koreaans, Kroatisch, Laotiaans, Latijn, Lets, Lingala, Litouws, Luxemburgs, Macedonisch, Malagassisch, Maleis, Malayalam, Maltees, Maori, Marathi, Mongools, Nederlands, Nepalees, Noors, Noors (Nynorsk), Occitaans, Oekraïens, Oezbeeks, Pasjtoe, Perzisch, Pools, Portugees, Punjabi, Roemeens, Russisch, Sanskriet, Servisch, Shona, Sindhi, Singalees, Slowaaks, Sloveens, Somalisch, Spaans, Soendanees, Swahili, Tadzjieks, Tagalog, Tamil, Tataars, Telugu, Thai, Tibetaans, Tsjechisch, Turkmeens, Turks, Urdu, Vietnamees, Welsh, Wit-Russisch, Yoruba en Zweeds.

De kwaliteit hangt af van de taal: die is het best bij veelgesproken talen, zoals Engels, Spaans, Frans, Duits, Portugees, Italiaans of Japans.

## Talen van de interface

De interface van Audiotext, en deze documentatie, zijn beschikbaar in:

| Taal | | Taal | |
| --- | --- | --- | --- |
| Català | Catalaans | Polski | Pools |
| Čeština | Tsjechisch | Português | Portugees |
| Deutsch | Duits | Română | Roemeens |
| English | Engels | Русский | Russisch |
| Español | Spaans | Svenska | Zweeds |
| Français | Frans | Türkçe | Turks |
| Galego | Galicisch | Українська | Oekraïens |
| हिन्दी | Hindi | Tiếng Việt | Vietnamees |
| Bahasa Indonesia | Indonesisch | 简体中文 | Vereenvoudigd Chinees |
| Italiano | Italiaans | 日本語 | Japans |
| Nederlands | Nederlands | 한국어 | Koreaans |

Wijzig hem bij **Voorkeuren** → **Algemeen** → **Taal van de interface**. Zie [Bijdragen](/nl/help/contributing/#de-interface-vertalen) om een vertaling te verbeteren of een taal toe te voegen.
