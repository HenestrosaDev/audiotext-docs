---
title: Format och språk
description: De ljud- och videoformat, ljudspråk och gränssnittsspråk som Audiotext stöder.
sidebar:
  order: 4
---

## Ljud- och videoformat

Audiotext extraherar ljudet ur videofiler med FFmpeg, så det transkriberar båda.

**Ljud**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Video**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Utdataformat

| Format | Exportera | Mapp (WhisperX) | Mapp (Whisper-API) |
| --- | :---: | :---: | :---: |
| Oformaterad text (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Word-dokument (`.docx`) | ✓ | ✗ | ✗ |
| Undertexter (`.srt`) | ✓ | ✓ | `srt` |
| Webbundertexter (`.vtt`) | ✓ | ✓ | `vtt` |
| Tabell (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Audacity-etiketter (`.aud`) | ✗ | ✓ | ✗ |

Se [Exportera](/sv/guides/transcript/#kopiera-och-exportera) och [kortet Utdata](/sv/guides/transcription-settings/#mapp-och-utdata).

## Ljudets språk

WhisperX och Whisper-API:t identifierar språket automatiskt och kan transkribera dessa 100 språk (Google-API:t kräver att du väljer det):

afrikaans, albanska, amhariska, arabiska, armeniska, assamesiska, azerbajdzjanska, basjkiriska, baskiska, bengali, bosniska, bretonska, bulgariska, burmesiska, danska, engelska, estniska, finska, franska, färöiska, galiciska, georgiska, grekiska, gujarati, haitiska, hausa, hawaiiska, hebreiska, hindi, indonesiska, isländska, italienska, japanska, javanesiska, jiddisch, kannada, kantonesiska, katalanska, kazakiska, khmer, kinesiska, koreanska, kroatiska, lao, latin, lettiska, lingala, litauiska, luxemburgiska, makedonska, malagassiska, malajiska, malayalam, maltesiska, maori, marathi, mongoliska, nederländska, nepali, norska, nynorska, occitanska, pashto, persiska, polska, portugisiska, punjabi, rumänska, ryska, sanskrit, serbiska, shona, sindhi, singalesiska, slovakiska, slovenska, somaliska, spanska, sundanesiska, svenska, swahili, tadzjikiska, tagalog, tamil, tatariska, telugu, thailändska, tibetanska, tjeckiska, turkiska, turkmeniska, tyska, ukrainska, ungerska, urdu, uzbekiska, vietnamesiska, vitryska, walesiska och yoruba.

Kvaliteten beror på språket: den är bäst för de mest talade språken, som engelska, spanska, franska, tyska, portugisiska, italienska eller japanska.

## Gränssnittets språk

Audiotexts gränssnitt, och denna dokumentation, finns på:

| Språk | | Språk | |
| --- | --- | --- | --- |
| Català | Katalanska | Polski | Polska |
| Čeština | Tjeckiska | Português | Portugisiska |
| Deutsch | Tyska | Română | Rumänska |
| English | Engelska | Русский | Ryska |
| Español | Spanska | Svenska | Svenska |
| Français | Franska | Türkçe | Turkiska |
| Galego | Galiciska | Українська | Ukrainska |
| हिन्दी | Hindi | Tiếng Việt | Vietnamesiska |
| Bahasa Indonesia | Indonesiska | 简体中文 | Förenklad kinesiska |
| Italiano | Italienska | 日本語 | Japanska |
| Nederlands | Nederländska | 한국어 | Koreanska |

Ändra det under **Inställningar** → **Allmänt** → **Gränssnittets språk**. För att förbättra en översättning eller lägga till ett språk, se [Bidra](/sv/help/contributing/#översätt-gränssnittet).
