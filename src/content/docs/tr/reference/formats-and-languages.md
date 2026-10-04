---
title: Biçimler ve diller
description: Audiotext'in desteklediği ses ve video biçimleri, kayıt dilleri ve arayüz dilleri.
sidebar:
  order: 4
---

## Ses ve video biçimleri

Audiotext, video dosyalarının sesini FFmpeg ile çıkarır, bu yüzden ikisini de yazıya döker.

**Ses**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Video**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Çıktı biçimleri

| Biçim | Dışa aktar | Klasör (WhisperX) | Klasör (Whisper API) |
| --- | :---: | :---: | :---: |
| Düz metin (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Word belgesi (`.docx`) | ✓ | ✗ | ✗ |
| Altyazılar (`.srt`) | ✓ | ✓ | `srt` |
| Web altyazıları (`.vtt`) | ✓ | ✓ | `vtt` |
| Tablo (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Audacity etiketleri (`.aud`) | ✗ | ✓ | ✗ |

[Dışa aktarma](/tr/guides/transcript/#kopyalayın-ve-dışa-aktarın) ve [Çıktı kartı](/tr/guides/transcription-settings/#klasör-ve-çıktı) bölümlerine bakın.

## Kayıt dilleri

WhisperX ve Whisper API dili otomatik olarak algılar ve şu 100 dili yazıya dökebilir (Google API dili seçmenizi gerektirir):

Afrikaanca, Almanca, Amharca, Arapça, Arnavutça, Assamca, Azerice, Başkurtça, Baskça, Belarusça, Bengalce, Birmanca, Boşnakça, Bretonca, Bulgarca, Çekçe, Çince, Çince (Kantonca), Danca, Endonezce, Ermenice, Estonca, Faroece, Farsça, Fince, Flemenkçe, Fransızca, Galce, Galiçyaca, Gürcüce, Gucaratça, Haiti Kreolü, Hausaca, Hawaii dili, Hintçe, Hırvatça, İbranice, İngilizce, İspanyolca, İsveççe, İtalyanca, İzlandaca, Japonca, Cava dili, Kannada dili, Katalanca, Kazakça, Kmerce, Korece, Laoca, Latince, Letonca, Lingala, Litvanca, Lüksemburgca, Macarca, Makedonca, Malayalam dili, Malayca, Malgaşça, Maltaca, Maorice, Marathi dili, Moğolca, Nepalce, Norveççe, Norveççe (Nynorsk), Oksitanca, Özbekçe, Pencapça, Peştuca, Lehçe, Portekizce, Romence, Rusça, Sanskritçe, Sırpça, Shona dili, Sindhi dili, Sinhala dili, Slovakça, Slovence, Somalice, Sundaca, Svahili dili, Tacikçe, Tagalogca, Tamilce, Tatarca, Tayca, Telugu dili, Tibetçe, Türkçe, Türkmence, Ukraynaca, Urduca, Vietnamca, Yidiş, Yorubaca ve Yunanca.

Kalite dile bağlıdır: İngilizce, İspanyolca, Fransızca, Almanca, Portekizce, İtalyanca veya Japonca gibi en çok konuşulan dillerde en iyisidir.

## Arayüz dilleri

Audiotext'in arayüzü ve bu belgeler şu dillerde kullanılabilir:

| Dil | | Dil | |
| --- | --- | --- | --- |
| Català | Katalanca | Polski | Lehçe |
| Čeština | Çekçe | Português | Portekizce |
| Deutsch | Almanca | Română | Romence |
| English | İngilizce | Русский | Rusça |
| Español | İspanyolca | Svenska | İsveççe |
| Français | Fransızca | Türkçe | Türkçe |
| Galego | Galiçyaca | Українська | Ukraynaca |
| हिन्दी | Hintçe | Tiếng Việt | Vietnamca |
| Bahasa Indonesia | Endonezce | 简体中文 | Basitleştirilmiş Çince |
| Italiano | İtalyanca | 日本語 | Japonca |
| Nederlands | Flemenkçe | 한국어 | Korece |

**Tercihler** → **Genel** → **Arayüz dili** bölümünden değiştirin. Bir çeviriyi iyileştirmek veya dil eklemek için [Katkıda bulunma](/tr/help/contributing/#arayüzü-çevirin) sayfasına bakın.
