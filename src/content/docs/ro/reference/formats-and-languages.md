---
title: Formate și limbi
description: Formatele audio și video, limbile înregistrărilor și limbile interfeței acceptate de Audiotext.
sidebar:
  order: 4
---

## Formate audio și video

Audiotext extrage sunetul din fișierele video cu FFmpeg, deci le transcrie pe amândouă.

**Audio**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Video**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Formate de ieșire

| Format | Export | Dosar (WhisperX) | Dosar (API Whisper) |
| --- | :---: | :---: | :---: |
| Text simplu (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Document Word (`.docx`) | ✓ | ✗ | ✗ |
| Subtitrări (`.srt`) | ✓ | ✓ | `srt` |
| Subtitrări web (`.vtt`) | ✓ | ✓ | `vtt` |
| Tabel (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Etichete Audacity (`.aud`) | ✗ | ✓ | ✗ |

Consultați [Export](/ro/guides/transcript/#copiați-și-exportați) și [cardul Ieșire](/ro/guides/transcription-settings/#dosar-și-ieșire).

## Limbile înregistrărilor

WhisperX și API-ul Whisper detectează limba automat și pot transcrie aceste 100 de limbi (API-ul Google necesită alegerea ei):

afrikaans, albaneză, amharică, arabă, armeană, asameză, azeră, bașkiră, bască, bengali, bielorusă, birmană, bosniacă, bretonă, bulgară, catalană, cehă, chineză, chineză (cantoneză), coreeană, creolă haitiană, croată, daneză, ebraică, engleză, estonă, feroeză, finlandeză, franceză, galeză, galiciană, georgiană, germană, greacă, gujarati, hausa, hawaiiană, hindi, indoneziană, islandeză, italiană, japoneză, javaneză, idiș, kannada, kazahă, khmeră, laoțiană, latină, letonă, lingala, lituaniană, luxemburgheză, macedoneană, maghiară, malaieză, malayalam, malgașă, malteză, maori, marathi, mongolă, nepaleză, neerlandeză, norvegiană, norvegiană (nynorsk), occitană, pașto, persană, poloneză, portugheză, punjabi, română, rusă, sanscrită, sârbă, shona, sindhi, singaleză, slovacă, slovenă, somaleză, spaniolă, sundaneză, suedeză, swahili, tadjică, tagalog, tamilă, tătară, telugu, thailandeză, tibetană, turcă, turkmenă, ucraineană, urdu, uzbecă, vietnameză și yoruba.

Calitatea depinde de limbă: este cea mai bună pentru limbile cele mai vorbite, precum engleza, spaniola, franceza, germana, portugheza, italiana sau japoneza.

## Limbile interfeței

Interfața Audiotext și această documentație sunt disponibile în:

| Limbă | | Limbă | |
| --- | --- | --- | --- |
| Català | Catalană | Polski | Poloneză |
| Čeština | Cehă | Português | Portugheză |
| Deutsch | Germană | Română | Română |
| English | Engleză | Русский | Rusă |
| Español | Spaniolă | Svenska | Suedeză |
| Français | Franceză | Türkçe | Turcă |
| Galego | Galiciană | Українська | Ucraineană |
| हिन्दी | Hindi | Tiếng Việt | Vietnameză |
| Bahasa Indonesia | Indoneziană | 简体中文 | Chineză simplificată |
| Italiano | Italiană | 日本語 | Japoneză |
| Nederlands | Neerlandeză | 한국어 | Coreeană |

Schimbați-o în **Preferințe** → **General** → **Limba interfeței**. Pentru a îmbunătăți o traducere sau a adăuga o limbă, consultați [Contribuiți](/ro/help/contributing/#traduceți-interfața).
