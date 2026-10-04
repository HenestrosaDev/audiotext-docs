---
title: Formatos e idiomas
description: Os formatos de áudio e vídeo, os idiomas do áudio e os idiomas da interface suportados pelo Audiotext.
sidebar:
  order: 4
---

## Formatos de áudio e vídeo

O Audiotext extrai o áudio dos arquivos de vídeo com o FFmpeg, então transcreve ambos.

**Áudio**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Vídeo**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Formatos de saída

| Formato | Exportar | Pasta (WhisperX) | Pasta (API do Whisper) |
| --- | :---: | :---: | :---: |
| Texto simples (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Documento do Word (`.docx`) | ✓ | ✗ | ✗ |
| Legendas (`.srt`) | ✓ | ✓ | `srt` |
| Legendas web (`.vtt`) | ✓ | ✓ | `vtt` |
| Tabela (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Rótulos do Audacity (`.aud`) | ✗ | ✓ | ✗ |

Consulte [Exportar](/pt/guides/transcript/#copie-e-exporte) e o [cartão Saída](/pt/guides/transcription-settings/#pasta-e-saída).

## Idiomas do áudio

O WhisperX e a API do Whisper detectam o idioma automaticamente, e podem transcrever estes 100 idiomas (a API do Google exige escolhê-lo):

africâner, albanês, alemão, amárico, árabe, armênio, assamês, azerbaijano, basco, bashkir, bengali, bielorrusso, birmanês, bósnio, bretão, búlgaro, canarês, catalão, cazaque, chinês, chinês (cantonês), cingalês, coreano, crioulo haitiano, croata, dinamarquês, eslovaco, esloveno, espanhol, estoniano, feroês, finlandês, francês, galego, galês, georgiano, grego, guzerate, hauçá, havaiano, hebraico, hindi, holandês, húngaro, iídiche, indonésio, inglês, iorubá, islandês, italiano, japonês, javanês, khmer, laosiano, latim, letão, lingala, lituano, luxemburguês, macedônio, malaiala, malaio, malgaxe, maltês, maori, marati, mongol, nepalês, norueguês, norueguês nynorsk, occitano, panjabi, pashto, persa, polonês, português, romeno, russo, sânscrito, sérvio, shona, sindi, somali, suaíli, sueco, sundanês, tadjique, tagalo, tailandês, tâmil, tártaro, tcheco, télugo, tibetano, turco, turcomeno, ucraniano, urdu, uzbeque e vietnamita.

A qualidade depende do idioma: é melhor nos idiomas mais falados, como inglês, espanhol, francês, alemão, português, italiano ou japonês.

## Idiomas da interface

A interface do Audiotext, e esta documentação, estão disponíveis em:

| Idioma | | Idioma | |
| --- | --- | --- | --- |
| Català | Catalão | Polski | Polonês |
| Čeština | Tcheco | Português | Português |
| Deutsch | Alemão | Română | Romeno |
| English | Inglês | Русский | Russo |
| Español | Espanhol | Svenska | Sueco |
| Français | Francês | Türkçe | Turco |
| Galego | Galego | Українська | Ucraniano |
| हिन्दी | Hindi | Tiếng Việt | Vietnamita |
| Bahasa Indonesia | Indonésio | 简体中文 | Chinês simplificado |
| Italiano | Italiano | 日本語 | Japonês |
| Nederlands | Holandês | 한국어 | Coreano |

Mude-o em **Preferências** → **Geral** → **Idioma da interface**. Para melhorar uma tradução ou adicionar um idioma, consulte [Contribuir](/pt/help/contributing/#traduza-a-interface).
