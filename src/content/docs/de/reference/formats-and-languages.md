---
title: Formate und Sprachen
description: Die von Audiotext unterstützten Audio- und Videoformate, Audiosprachen und Sprachen der Oberfläche.
sidebar:
  order: 4
---

## Audio- und Videoformate

Audiotext extrahiert das Audio aus Videodateien mit FFmpeg und transkribiert daher beides.

**Audio**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Video**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Ausgabeformate

| Format | Export | Ordner (WhisperX) | Ordner (Whisper-API) |
| --- | :---: | :---: | :---: |
| Nur-Text (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Word-Dokument (`.docx`) | ✓ | ✗ | ✗ |
| Untertitel (`.srt`) | ✓ | ✓ | `srt` |
| Web-Untertitel (`.vtt`) | ✓ | ✓ | `vtt` |
| Tabelle (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Audacity-Marken (`.aud`) | ✗ | ✓ | ✗ |

Siehe [Exportieren](/de/guides/transcript/#kopieren-und-exportieren) und die [Karte Ausgabe](/de/guides/transcription-settings/#ordner-und-ausgabe).

## Sprachen des Audios

WhisperX und die Whisper-API erkennen die Sprache automatisch und können diese 100 Sprachen transkribieren (bei der Google-API müssen Sie sie auswählen):

Afrikaans, Albanisch, Amharisch, Arabisch, Armenisch, Assamesisch, Aserbaidschanisch, Baschkirisch, Baskisch, Belarussisch, Bengalisch, Birmanisch, Bosnisch, Bretonisch, Bulgarisch, Chinesisch, Chinesisch (Kantonesisch), Dänisch, Deutsch, Englisch, Estnisch, Färöisch, Finnisch, Französisch, Galicisch, Georgisch, Griechisch, Gujarati, Haitianisch, Hausa, Hawaiisch, Hebräisch, Hindi, Indonesisch, Isländisch, Italienisch, Japanisch, Javanisch, Jiddisch, Kannada, Kasachisch, Katalanisch, Khmer, Koreanisch, Kroatisch, Laotisch, Latein, Lettisch, Lingala, Litauisch, Luxemburgisch, Madagassisch, Malaiisch, Malayalam, Maltesisch, Maori, Marathi, Mazedonisch, Mongolisch, Nepalesisch, Niederländisch, Norwegisch, Norwegisch (Nynorsk), Okzitanisch, Paschtu, Persisch, Polnisch, Portugiesisch, Punjabi, Rumänisch, Russisch, Sanskrit, Schwedisch, Serbisch, Shona, Sindhi, Singhalesisch, Slowakisch, Slowenisch, Somali, Spanisch, Sundanesisch, Suaheli, Tadschikisch, Tagalog, Tamil, Tatarisch, Telugu, Thailändisch, Tibetisch, Tschechisch, Türkisch, Turkmenisch, Ukrainisch, Ungarisch, Urdu, Usbekisch, Vietnamesisch, Walisisch und Yoruba.

Die Qualität hängt von der Sprache ab: Am besten ist sie bei weit verbreiteten Sprachen wie Englisch, Spanisch, Französisch, Deutsch, Portugiesisch, Italienisch oder Japanisch.

## Sprachen der Oberfläche

Die Oberfläche von Audiotext und diese Dokumentation sind verfügbar auf:

| Sprache | | Sprache | |
| --- | --- | --- | --- |
| Català | Katalanisch | Polski | Polnisch |
| Čeština | Tschechisch | Português | Portugiesisch |
| Deutsch | Deutsch | Română | Rumänisch |
| English | Englisch | Русский | Russisch |
| Español | Spanisch | Svenska | Schwedisch |
| Français | Französisch | Türkçe | Türkisch |
| Galego | Galicisch | Українська | Ukrainisch |
| हिन्दी | Hindi | Tiếng Việt | Vietnamesisch |
| Bahasa Indonesia | Indonesisch | 简体中文 | Vereinfachtes Chinesisch |
| Italiano | Italienisch | 日本語 | Japanisch |
| Nederlands | Niederländisch | 한국어 | Koreanisch |

Ändern Sie sie unter **Einstellungen** → **Allgemein** → **Sprache der Oberfläche**. Um eine Übersetzung zu verbessern oder eine Sprache hinzuzufügen, siehe [Mitwirken](/de/help/contributing/#oberfläche-übersetzen).
