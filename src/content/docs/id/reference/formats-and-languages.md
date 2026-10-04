---
title: Format dan bahasa
description: Format audio dan video, bahasa audio, dan bahasa antarmuka yang didukung Audiotext.
sidebar:
  order: 4
---

## Format audio dan video

Audiotext mengekstrak audio dari file video dengan FFmpeg, sehingga keduanya dapat ditranskripsi.

**Audio**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Video**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Format keluaran

| Format | Ekspor | Folder (WhisperX) | Folder (Whisper API) |
| --- | :---: | :---: | :---: |
| Teks biasa (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Dokumen Word (`.docx`) | ✓ | ✗ | ✗ |
| Subtitle (`.srt`) | ✓ | ✓ | `srt` |
| Subtitle web (`.vtt`) | ✓ | ✓ | `vtt` |
| Tabel (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Label Audacity (`.aud`) | ✗ | ✓ | ✗ |

Lihat [Ekspor](/id/guides/transcript/#salin-dan-ekspor) dan [kartu Keluaran](/id/guides/transcription-settings/#folder-dan-keluaran).

## Bahasa audio

WhisperX dan Whisper API mendeteksi bahasa secara otomatis, dan dapat mentranskripsi 100 bahasa ini (Google API mengharuskan Anda memilihnya):

Afrikaans, Albania, Amhara, Arab, Armenia, Assam, Azerbaijan, Bashkir, Basque, Belanda, Belarus, Bengali, Bosnia, Breton, Bulgaria, Burma, Ceko, Denmark, Estonia, Faroe, Finlandia, Galisia, Georgia, Gujarati, Hausa, Hawaii, Ibrani, Hindi, Hongaria, Indonesia, Inggris, Islandia, Italia, Jawa, Jepang, Jerman, Kannada, Katala, Kazakh, Khmer, Korea, Kreol Haiti, Kroasia, Lao, Latin, Latvia, Lingala, Lituania, Luksemburg, Makedonia, Malagasi, Malayalam, Malta, Maori, Marathi, Melayu, Mongolia, Nepali, Norwegia, Norwegia Nynorsk, Oksitan, Pashto, Persia, Polandia, Portugis, Prancis, Punjabi, Rumania, Rusia, Sanskerta, Serbia, Shona, Sindhi, Sinhala, Slovakia, Slovenia, Somalia, Spanyol, Sunda, Swahili, Swedia, Tagalog, Tajik, Tamil, Tatar, Telugu, Thai, Tibet, Tionghoa, Tionghoa (Kanton), Turki, Turkmen, Ukraina, Urdu, Uzbek, Vietnam, Wales, Yiddish, Yoruba, dan Yunani.

Kualitasnya bergantung pada bahasa: paling baik untuk bahasa yang paling banyak digunakan, seperti bahasa Inggris, Spanyol, Prancis, Jerman, Portugis, Italia, atau Jepang.

## Bahasa antarmuka

Antarmuka Audiotext, dan dokumentasi ini, tersedia dalam:

| Bahasa | | Bahasa | |
| --- | --- | --- | --- |
| Català | Katala | Polski | Polandia |
| Čeština | Ceko | Português | Portugis |
| Deutsch | Jerman | Română | Rumania |
| English | Inggris | Русский | Rusia |
| Español | Spanyol | Svenska | Swedia |
| Français | Prancis | Türkçe | Turki |
| Galego | Galisia | Українська | Ukraina |
| हिन्दी | Hindi | Tiếng Việt | Vietnam |
| Bahasa Indonesia | Indonesia | 简体中文 | Tionghoa Sederhana |
| Italiano | Italia | 日本語 | Jepang |
| Nederlands | Belanda | 한국어 | Korea |

Ubah di **Preferensi** → **Umum** → **Bahasa antarmuka**. Untuk memperbaiki terjemahan atau menambahkan bahasa, lihat [Berkontribusi](/id/help/contributing/#terjemahkan-antarmuka).
