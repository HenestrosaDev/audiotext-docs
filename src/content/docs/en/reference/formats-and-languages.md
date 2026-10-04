---
title: Formats and languages
description: The audio and video formats, the languages of the audio and the languages of the interface supported by Audiotext.
sidebar:
  order: 4
---

## Audio and video formats

Audiotext extracts the audio of video files with FFmpeg, so it transcribes both.

**Audio**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Video**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Output formats

| Format | Export | Folder (WhisperX) | Folder (Whisper API) |
| --- | :---: | :---: | :---: |
| Plain text (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Word document (`.docx`) | ✓ | ✗ | ✗ |
| Subtitles (`.srt`) | ✓ | ✓ | `srt` |
| Web subtitles (`.vtt`) | ✓ | ✓ | `vtt` |
| Table (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Audacity labels (`.aud`) | ✗ | ✓ | ✗ |

See [Export](/en/guides/transcript/#copy-and-export) and the [Output card](/en/guides/transcription-settings/#folder-and-output).

## Languages of the audio

WhisperX and the Whisper API detect the language automatically, and can transcribe these 100 languages (the Google API requires choosing it):

Afrikaans, Albanian, Amharic, Arabic, Armenian, Assamese, Azerbaijani, Bashkir, Basque, Belarusian, Bengali, Bosnian, Breton, Bulgarian, Burmese, Catalan, Chinese, Chinese (Cantonese), Croatian, Czech, Danish, Dutch, English, Estonian, Faroese, Finnish, French, Galician, Georgian, German, Greek, Gujarati, Haitian Creole, Hausa, Hawaiian, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Italian, Japanese, Javanese, Kannada, Kazakh, Khmer, Korean, Lao, Latin, Latvian, Lingala, Lithuanian, Luxembourgish, Macedonian, Malagasy, Malay, Malayalam, Maltese, Maori, Marathi, Mongolian, Nepali, Norwegian, Norwegian Nynorsk, Occitan, Pashto, Persian, Polish, Portuguese, Punjabi, Romanian, Russian, Sanskrit, Serbian, Shona, Sindhi, Sinhala, Slovak, Slovenian, Somali, Spanish, Sundanese, Swahili, Swedish, Tagalog, Tajik, Tamil, Tatar, Telugu, Thai, Tibetan, Turkish, Turkmen, Ukrainian, Urdu, Uzbek, Vietnamese, Welsh, Yiddish and Yoruba.

The quality depends on the language: it's best for widely spoken languages, such as English, Spanish, French, German, Portuguese, Italian or Japanese.

## Interface languages

The interface of Audiotext, and this documentation, are available in:

| Language | | Language | |
| --- | --- | --- | --- |
| Català | Catalan | Polski | Polish |
| Čeština | Czech | Português | Portuguese |
| Deutsch | German | Română | Romanian |
| English | English | Русский | Russian |
| Español | Spanish | Svenska | Swedish |
| Français | French | Türkçe | Turkish |
| Galego | Galician | Українська | Ukrainian |
| हिन्दी | Hindi | Tiếng Việt | Vietnamese |
| Bahasa Indonesia | Indonesian | 简体中文 | Simplified Chinese |
| Italiano | Italian | 日本語 | Japanese |
| Nederlands | Dutch | 한국어 | Korean |

Change it in **Preferences** → **General** → **Interface language**. To improve a translation or add a language, see [Contributing](/en/help/contributing/#translate-the-interface).
