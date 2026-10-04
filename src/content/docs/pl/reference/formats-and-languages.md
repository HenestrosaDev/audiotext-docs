---
title: Formaty i języki
description: Formaty audio i wideo, języki nagrań i języki interfejsu obsługiwane przez Audiotext.
sidebar:
  order: 4
---

## Formaty audio i wideo

Audiotext wyodrębnia dźwięk z plików wideo za pomocą FFmpeg, więc transkrybuje jedne i drugie.

**Audio**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Wideo**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Formaty wyjściowe

| Format | Eksport | Folder (WhisperX) | Folder (API Whisper) |
| --- | :---: | :---: | :---: |
| Zwykły tekst (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Dokument Word (`.docx`) | ✓ | ✗ | ✗ |
| Napisy (`.srt`) | ✓ | ✓ | `srt` |
| Napisy internetowe (`.vtt`) | ✓ | ✓ | `vtt` |
| Tabela (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Etykiety Audacity (`.aud`) | ✗ | ✓ | ✗ |

Zobacz [Eksport](/pl/guides/transcript/#kopiowanie-i-eksport) i [kartę Wynik](/pl/guides/transcription-settings/#folder-i-wynik).

## Języki nagrań

WhisperX i API Whisper wykrywają język automatycznie i potrafią transkrybować te 100 języków (w API Google trzeba go wybrać):

afrikaans, albański, amharski, angielski, arabski, asamski, azerbejdżański, baskijski, baszkirski, bengalski, białoruski, birmański, bośniacki, bretoński, bułgarski, chiński, chiński (kantoński), chorwacki, czeski, duński, estoński, farerski, fiński, francuski, galicyjski, grecki, gruziński, gudżarati, hausa, hawajski, hebrajski, hindi, hiszpański, indonezyjski, islandzki, japoński, jawajski, jidysz, joruba, kannada, kataloński, kazachski, khmerski, koreański, kreolski haitański, laotański, łaciński, lingala, litewski, luksemburski, łotewski, macedoński, malajalam, malajski, malgaski, maltański, maoryski, marathi, mongolski, nepalski, niderlandzki, niemiecki, norweski, norweski (nynorsk), oksytański, ormiański, paszto, pendżabski, perski, polski, portugalski, rosyjski, rumuński, sanskryt, serbski, shona, sindhi, słowacki, słoweński, somalijski, suahili, sundajski, syngaleski, szwedzki, tadżycki, tagalski, tajski, tamilski, tatarski, telugu, tybetański, turecki, turkmeński, ukraiński, urdu, uzbecki, walijski, węgierski, wietnamski i włoski.

Jakość zależy od języka: jest najlepsza w najpowszechniejszych językach, takich jak angielski, hiszpański, francuski, niemiecki, portugalski, włoski czy japoński.

## Języki interfejsu

Interfejs Audiotext i ta dokumentacja są dostępne w językach:

| Język | | Język | |
| --- | --- | --- | --- |
| Català | Kataloński | Polski | Polski |
| Čeština | Czeski | Português | Portugalski |
| Deutsch | Niemiecki | Română | Rumuński |
| English | Angielski | Русский | Rosyjski |
| Español | Hiszpański | Svenska | Szwedzki |
| Français | Francuski | Türkçe | Turecki |
| Galego | Galicyjski | Українська | Ukraiński |
| हिन्दी | Hindi | Tiếng Việt | Wietnamski |
| Bahasa Indonesia | Indonezyjski | 简体中文 | Chiński uproszczony |
| Italiano | Włoski | 日本語 | Japoński |
| Nederlands | Niderlandzki | 한국어 | Koreański |

Zmień go w **Preferencje** → **Ogólne** → **Język interfejsu**. Aby poprawić tłumaczenie lub dodać język, zobacz [Współtworzenie](/pl/help/contributing/#przetłumacz-interfejs).
