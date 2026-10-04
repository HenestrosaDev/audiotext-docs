---
title: Formatos e idiomas
description: Los formatos de audio y vídeo, los idiomas del audio y los idiomas de la interfaz compatibles con Audiotext.
sidebar:
  order: 4
---

## Formatos de audio y vídeo

Audiotext extrae el audio de los archivos de vídeo con FFmpeg, así que transcribe ambos.

**Audio**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Vídeo**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Formatos de salida

| Formato | Exportar | Carpeta (WhisperX) | Carpeta (API de Whisper) |
| --- | :---: | :---: | :---: |
| Texto plano (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Documento de Word (`.docx`) | ✓ | ✗ | ✗ |
| Subtítulos (`.srt`) | ✓ | ✓ | `srt` |
| Subtítulos web (`.vtt`) | ✓ | ✓ | `vtt` |
| Tabla (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Etiquetas de Audacity (`.aud`) | ✗ | ✓ | ✗ |

Consulta [Exportar](/es/guides/transcript/#copia-y-exporta) y la [tarjeta Salida](/es/guides/transcription-settings/#carpeta-y-salida).

## Idiomas del audio

WhisperX y la API de Whisper detectan el idioma automáticamente, y pueden transcribir estos 100 idiomas (la API de Google requiere elegirlo):

afrikáans, albanés, alemán, amárico, árabe, armenio, asamés, azerbaiyano, bashkir, bengalí, bielorruso, birmano, bosnio, bretón, búlgaro, canarés, catalán, checo, chino, chino (cantonés), cingalés, coreano, criollo haitiano, croata, danés, eslovaco, esloveno, español, estonio, euskera, feroés, finés, francés, galés, gallego, georgiano, griego, guyaratí, hausa, hawaiano, hebreo, hindi, húngaro, indonesio, inglés, islandés, italiano, japonés, javanés, jemer, kazajo, lao, latín, letón, lingala, lituano, luxemburgués, macedonio, malayalam, malayo, malgache, maltés, maorí, maratí, mongol, neerlandés, nepalí, noruego, noruego nynorsk, occitano, panyabí, pastún, persa, polaco, portugués, rumano, ruso, sánscrito, serbio, shona, sindhi, somalí, suajili, sueco, sundanés, tagalo, tailandés, tamil, tártaro, tayiko, telugu, tibetano, turco, turcomano, ucraniano, urdu, uzbeko, vietnamita, yidis y yoruba.

La calidad depende del idioma: es mejor en los idiomas más hablados, como el inglés, el español, el francés, el alemán, el portugués, el italiano o el japonés.

## Idiomas de la interfaz

La interfaz de Audiotext, y esta documentación, están disponibles en:

| Idioma | | Idioma | |
| --- | --- | --- | --- |
| Català | Catalán | Polski | Polaco |
| Čeština | Checo | Português | Portugués |
| Deutsch | Alemán | Română | Rumano |
| English | Inglés | Русский | Ruso |
| Español | Español | Svenska | Sueco |
| Français | Francés | Türkçe | Turco |
| Galego | Gallego | Українська | Ucraniano |
| हिन्दी | Hindi | Tiếng Việt | Vietnamita |
| Bahasa Indonesia | Indonesio | 简体中文 | Chino simplificado |
| Italiano | Italiano | 日本語 | Japonés |
| Nederlands | Neerlandés | 한국어 | Coreano |

Cámbialo en **Preferencias** → **General** → **Idioma de la interfaz**. Para mejorar una traducción o añadir un idioma, consulta [Contribuir](/es/help/contributing/#traduce-la-interfaz).
