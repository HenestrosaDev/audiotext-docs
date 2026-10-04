---
title: Formáty a jazyky
description: Zvukové a video formáty, jazyky nahrávek a jazyky rozhraní, které Audiotext podporuje.
sidebar:
  order: 4
---

## Zvukové a video formáty

Audiotext extrahuje zvuk z video souborů pomocí FFmpeg, takže přepisuje obojí.

**Zvuk**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Video**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Výstupní formáty

| Formát | Export | Složka (WhisperX) | Složka (Whisper API) |
| --- | :---: | :---: | :---: |
| Prostý text (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Dokument Word (`.docx`) | ✓ | ✗ | ✗ |
| Titulky (`.srt`) | ✓ | ✓ | `srt` |
| Webové titulky (`.vtt`) | ✓ | ✓ | `vtt` |
| Tabulka (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Štítky Audacity (`.aud`) | ✗ | ✓ | ✗ |

Viz [Export](/cs/guides/transcript/#kopírování-a-export) a [kartu Výstup](/cs/guides/transcription-settings/#složka-a-výstup).

## Jazyky nahrávek

WhisperX a Whisper API rozpoznávají jazyk automaticky a umí přepisovat těchto 100 jazyků (u Google API ho musíte vybrat):

afrikánština, albánština, amharština, angličtina, arabština, arménština, ásámština, ázerbájdžánština, baskičtina, baškirština, běloruština, bengálština, barmština, bosenština, bretonština, bulharština, čeština, čínština, čínština (kantonská), dánština, estonština, faerština, finština, francouzština, galicijština, gruzínština, gudžarátština, haitská kreolština, hauština, havajština, hebrejština, hindština, chorvatština, indonéština, islandština, italština, japonština, javánština, jidiš, jorubština, kannadština, katalánština, kazaština, khmerština, korejština, laoština, latina, lingalština, litevština, lotyština, lucemburština, maďarština, makedonština, malajálamština, malajština, malgaština, maltština, maorština, maráthština, mongolština, němčina, nepálština, nizozemština, norština, norština (nynorsk), okcitánština, paštština, paňdžábština, perština, polština, portugalština, rumunština, ruština, řečtina, sanskrt, sindhština, sinhálština, slovenština, slovinština, somálština, srbština, sundština, svahilština, španělština, švédština, šonština, tádžičtina, tagalština, tamilština, tatarština, telugština, thajština, tibetština, turečtina, turkmenština, ukrajinština, urdština, uzbečtina, velština a vietnamština.

Kvalita závisí na jazyce: nejlepší je u nejrozšířenějších jazyků, jako je angličtina, španělština, francouzština, němčina, portugalština, italština nebo japonština.

## Jazyky rozhraní

Rozhraní Audiotextu a tato dokumentace jsou k dispozici v těchto jazycích:

| Jazyk | | Jazyk | |
| --- | --- | --- | --- |
| Català | Katalánština | Polski | Polština |
| Čeština | Čeština | Português | Portugalština |
| Deutsch | Němčina | Română | Rumunština |
| English | Angličtina | Русский | Ruština |
| Español | Španělština | Svenska | Švédština |
| Français | Francouzština | Türkçe | Turečtina |
| Galego | Galicijština | Українська | Ukrajinština |
| हिन्दी | Hindština | Tiếng Việt | Vietnamština |
| Bahasa Indonesia | Indonéština | 简体中文 | Zjednodušená čínština |
| Italiano | Italština | 日本語 | Japonština |
| Nederlands | Nizozemština | 한국어 | Korejština |

Změníte ho v **Předvolby** → **Obecné** → **Jazyk rozhraní**. Chcete-li vylepšit překlad nebo přidat jazyk, viz [Přispívání](/cs/help/contributing/#překlad-rozhraní).
