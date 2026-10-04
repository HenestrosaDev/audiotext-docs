---
title: Formatos e idiomas
description: Os formatos de audio e vídeo, os idiomas do audio e os idiomas da interface compatibles con Audiotext.
sidebar:
  order: 4
---

## Formatos de audio e vídeo

Audiotext extrae o audio dos ficheiros de vídeo con FFmpeg, así que transcribe ambos.

**Audio**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Vídeo**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Formatos de saída

| Formato | Exportar | Cartafol (WhisperX) | Cartafol (API de Whisper) |
| --- | :---: | :---: | :---: |
| Texto plano (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Documento de Word (`.docx`) | ✓ | ✗ | ✗ |
| Subtítulos (`.srt`) | ✓ | ✓ | `srt` |
| Subtítulos web (`.vtt`) | ✓ | ✓ | `vtt` |
| Táboa (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Etiquetas de Audacity (`.aud`) | ✗ | ✓ | ✗ |

Consulta [Exportar](/gl/guides/transcript/#copia-e-exporta) e a [tarxeta Saída](/gl/guides/transcription-settings/#cartafol-e-saída).

## Idiomas do audio

WhisperX e a API de Whisper detectan o idioma automaticamente, e poden transcribir estes 100 idiomas (a API de Google require escollelo):

afrikaans, albanés, alemán, amhárico, árabe, armenio, asamés, azerbaixano, baxkir, bengalí, bielorruso, birmano, bosníaco, bretón, búlgaro, canarés, catalán, checo, chinés, chinés (cantonés), cingalés, coreano, crioulo haitiano, croata, danés, eslovaco, esloveno, español, estoniano, éuscaro, feroés, finés, francés, galego, galés, xeorxiano, grego, guxaratí, hausa, hawaiano, hebreo, hindi, húngaro, indonesio, inglés, islandés, italiano, xaponés, xavanés, khmer, kazako, lao, latín, letón, lingala, lituano, luxemburgués, macedonio, malaiala, malaio, malgaxe, maltés, maorí, marathi, mongol, neerlandés, nepalí, noruegués, noruegués nynorsk, occitano, paxto, panxabi, persa, polaco, portugués, romanés, ruso, sánscrito, serbio, shona, sindhi, somalí, suahili, sueco, sundanés, taxico, tagalo, tailandés, támil, tártaro, telugu, tibetano, turco, turcomán, ucraíno, urdú, uzbeko, vietnamita, yiddish e ioruba.

A calidade depende do idioma: é mellor nos idiomas máis falados, como o inglés, o español, o francés, o alemán, o portugués, o italiano ou o xaponés.

## Idiomas da interface

A interface de Audiotext, e esta documentación, están dispoñibles en:

| Idioma | | Idioma | |
| --- | --- | --- | --- |
| Català | Catalán | Polski | Polaco |
| Čeština | Checo | Português | Portugués |
| Deutsch | Alemán | Română | Romanés |
| English | Inglés | Русский | Ruso |
| Español | Español | Svenska | Sueco |
| Français | Francés | Türkçe | Turco |
| Galego | Galego | Українська | Ucraíno |
| हिन्दी | Hindi | Tiếng Việt | Vietnamita |
| Bahasa Indonesia | Indonesio | 简体中文 | Chinés simplificado |
| Italiano | Italiano | 日本語 | Xaponés |
| Nederlands | Neerlandés | 한국어 | Coreano |

Cámbiao en **Preferencias** → **Xeral** → **Idioma da interface**. Para mellorar unha tradución ou engadir un idioma, consulta [Contribuír](/gl/help/contributing/#traduce-a-interface).
