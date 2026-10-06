---
title: Tercihler
description: Tercihler penceresindeki tüm ayarlar, sekme sekme.
sidebar:
  order: 2
---

**Tercihler**, her transkripsiyonla değişmeyen ayarları içerir. Pencerenin sağ üstündeki dişliyle açın. Değişiklikler otomatik olarak kaydedilir.

## Genel

- **Görünüm**: **Sistem** (sisteminizi izler), **Açık** veya **Koyu**.
- **Arayüz dili**: Audiotext'in dili veya **Sistem dili**. Devam eden bir transkripsiyon yokken değiştirilebilir. [Kullanılabilir dillere](/tr/reference/formats-and-languages/#arayüz-dilleri) bakın.
- **Tarih biçimi**: transkripsiyonların tarihlerinin arayüz dilinde nasıl gösterileceği: kısa (`4.10.2026`), orta (`4 Eki 2026`, varsayılan), uzun (`4 Ekim 2026`) veya ISO (`2026-10-04`). Menü her biçimi bir örnekle gösterir.
- **Saat biçimi**: **Otomatik** (arayüz dilinin saati), 12 saat (`ÖS 1:30`) veya 24 saat (`13:30`).
- **Bildirimler**: bir transkripsiyon hazır olduğunda sistem bildirimi gösterir (bir klasörde, tüm dosyaları hazır olduğunda; izlenen bir klasörde ise her yeni dosya hazır olduğunda). Varsayılan olarak açıktır. macOS'ta **Komut Dosyası Düzenleyici**'den, Windows'ta **Windows PowerShell**'den gelir; bu nedenle sistem ayarlarında bu uygulamalar için izin verilir veya sessize alınır. Linux'ta `notify-send` (`libnotify-bin` veya `libnotify` paketi) gerekir.

## YZ

[Özetlerin ve çevirilerin](/tr/guides/summary-and-translation/) sağlayıcıları:

- **Özet** → **Sağlayıcı** ve **Model**.
- **Çeviri** → **Sağlayıcı** ve **Model**. DeepL ve Google Translate'in seçilecek modeli yoktur.
- **Ollama** → **Sunucu URL'si**: Ollama'nın adresi, varsayılan `http://localhost:11434`.

Sağlayıcının varsayılan modelini kullanmak için **Model**'i boş bırakın. Sağlayıcının yanındaki düğme onun API anahtarını ayarlar.

## API anahtarları

Her hizmetin anahtarları. Bir anahtar girmek için **Ayarla…**'ya, değiştirmek için **Değiştir…**'e tıklayın (kaldırmak için boş bırakın). Sisteminizin kimlik bilgisi deposunda saklanırlar.

| Anahtar | Kullanım amacı |
| --- | --- |
| OpenAI API anahtarı | Whisper API ve OpenAI ile özetleme ve çeviri |
| Anthropic API anahtarı | Claude ile özetleme ve çeviri |
| DeepSeek API anahtarı | DeepSeek ile özetleme ve çeviri |
| Gemini API anahtarı | Gemini ile özetleme ve çeviri (Google AI Studio'dan) |
| Mistral API anahtarı | Mistral ile özetleme ve çeviri |
| xAI API anahtarı | Grok ile özetleme ve çeviri |
| DeepL API anahtarı | DeepL ile çeviri (ücretsiz planın anahtarları da çalışır) |
| Google API anahtarı | Ücretsiz katmanın ötesinde Google Speech-to-Text ve Google Translate (Cloud Translation API) |
| Hugging Face belirteci | WhisperX ile konuşmacıları belirleme |

:::caution
Her sağlayıcı API'sinin kullanımı için ücret alır; Audiotext bundan sorumlu değildir. OpenAI yeni bir anahtarla `429` hatası döndürürse [Sorun giderme](/tr/help/troubleshooting/#whisper-api-429-hatası-döndürüyor) sayfasına bakın.
:::

## WhisperX

**Hesaplama türü**, **Toplu iş boyutu** ve **CPU kullan**. [WhisperX gelişmiş seçenekleri](/tr/reference/engines/#gelişmiş-seçenekler) bölümüne bakın.

## Altyazılar

Bir klasör WhisperX ile yazıya döküldüğünde kaydedilen `.srt` ve `.vtt` dosyalarının seçenekleri:

- **Kelimeleri vurgula**: her kelimeyi söylendiği anda altını çizer. Varsayılan olarak kapalıdır.
- **Maks. satır sayısı**: her altyazının en fazla satır sayısı. Varsayılan `2`.
- **Maks. satır genişliği**: bir satırın bölünmeden önceki en fazla karakter sayısı. Varsayılan `42`.

## Whisper API

**Sıcaklık** ve **Kelimelerin zaman damgaları**. [Whisper API seçenekleri](/tr/reference/engines/#seçenekler) bölümüne bakın.

## Hakkında

Audiotext sürümü ve bu belgelere, GitHub'daki kaynak koda ve bağış sayfasına bağlantılar.
