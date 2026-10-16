---
title: Tercihler
description: Tercihler penceresindeki tüm ayarlar, sekme sekme.
sidebar:
  order: 2
---

**Tercihler**, her transkripsiyonla değişmeyen ayarları içerir. Pencerenin sağ üstündeki dişliyle açın. Değişiklikler otomatik olarak kaydedilir.

## Genel

- **Görünüm**: **Sistem** (sisteminizi izler), **Açık** veya **Koyu**.
- **Arayüz boyutu**: metnin ve denetimlerin boyutu, %80 ile %200 arasında. Varsayılan olarak `100%`. Değişiklik hemen uygulanır.
- **Arayüz dili**: Audiotext'in dili veya **Sistem dili**. [Kullanılabilir dillere](/tr/reference/formats-and-languages/#arayüz-dilleri) bakın.
- **Tarih biçimi**: transkripsiyonların tarihlerinin arayüz dilinde nasıl gösterileceği: kısa (`4.10.2026`), orta (`4 Eki 2026`, varsayılan), uzun (`4 Ekim 2026`) veya ISO (`2026-10-04`). Menü her biçimi bir örnekle gösterir.
- **Saat biçimi**: **Otomatik** (arayüz dilinin saati), 12 saat (`ÖS 1:30`) veya 24 saat (`13:30`).
- **Bildirimler**: bir transkripsiyon hazır olduğunda sistem bildirimi gösterir (bir klasörde, tüm dosyaları hazır olduğunda; izlenen bir klasörde ise her yeni dosya hazır olduğunda). Varsayılan olarak açıktır. macOS'ta **Komut Dosyası Düzenleyici**'den, Windows'ta **Windows PowerShell**'den gelir; bu nedenle sistem ayarlarında bu uygulamalar için izin verilir veya sessize alınır. Linux'ta `notify-send` (`libnotify-bin` veya `libnotify` paketi) gerekir.
- **Güncellemeler**: uygulama açıldığında yeni bir sürüm olup olmadığını denetler ve varsa üst çubukta indirme sayfasını açan **Sürüm … kullanılabilir** düğmesini gösterir. Ön sürümler önerilmez. Varsayılan olarak açıktır.

## YZ

[Özetlerin, soruların ve çevirilerin](/tr/guides/summary-and-translation/) sağlayıcıları:

- **Özet** → **Sağlayıcı** ve **Model**.
- **Sor** → **Sağlayıcı** ve **Model**: transkripsiyonlarla ilgili soruları yanıtlayanlar. Siz değiştirene kadar özetlerinkilerle aynıdır.
- **Çeviri** → **Sağlayıcı** ve **Model**. DeepL ve Google Translate'in seçilecek modeli yoktur.
- **Ollama** → **Sunucu URL'si**: Ollama'nın adresi, varsayılan `http://localhost:11434`.

Sağlayıcının varsayılan modelini kullanmak için **Model**'i boş bırakın. Sağlayıcının yanındaki düğme onun API anahtarını ayarlar.

## API anahtarları

Her hizmetin anahtarları. Bir anahtar girmek için **API anahtarını ayarla…**'ya, değiştirmek için **API anahtarını değiştir…**'e tıklayın (kaldırmak için boş bırakın). Sisteminizin kimlik bilgisi deposunda saklanırlar.

| Anahtar | Kullanım amacı |
| --- | --- |
| OpenAI API anahtarı | Whisper API ve OpenAI ile özetleme, soru sorma ve çeviri |
| Anthropic API anahtarı | Claude ile özetleme, soru sorma ve çeviri |
| DeepSeek API anahtarı | DeepSeek ile özetleme, soru sorma ve çeviri |
| Gemini API anahtarı | Gemini ile özetleme, soru sorma ve çeviri (Google AI Studio'dan) |
| Mistral API anahtarı | Mistral ile özetleme, soru sorma ve çeviri |
| xAI API anahtarı | Grok ile özetleme, soru sorma ve çeviri |
| DeepL API anahtarı | DeepL ile çeviri (ücretsiz planın anahtarları da çalışır) |
| Google API anahtarı | Ücretsiz katmanın ötesinde Google Speech-to-Text ve Google Translate (Cloud Translation API) |
| Hugging Face belirteci | WhisperX ile konuşmacıları belirleme |

:::caution
Her sağlayıcı API'sinin kullanımı için ücret alır; Audiotext bundan sorumlu değildir. OpenAI yeni bir anahtarla `429` hatası döndürürse [Sorun giderme](/tr/help/troubleshooting/#whisper-api-429-hatası-döndürüyor) sayfasına bakın.
:::

## WhisperX

**Hesaplama türü**, **Toplu iş boyutu** ve **CPU kullan**. [WhisperX gelişmiş seçenekleri](/tr/reference/engines/#gelişmiş-seçenekler) bölümüne bakın. Apple Silicon'lu bir Mac'te, **CPU kullan** açık değilse WhisperX onun grafik işlemcisinde yazıya döker. [Mac'te](/tr/reference/engines/#macte) bölümüne bakın.

## Altyazılar

Altyazıların nasıl bölündüğü: videonun üzerinde ve **Altyazılar** modunda gösterilenler, dışa aktarılan altyazı dosyaları ve [altyazılı videolar](/tr/guides/transcript/#videoyu-altyazılarıyla-dışa-aktarın). Her seçeneğin yatay videolar için bir değeri ve daha dar olan dikey videolar (genişliğinden uzun, ör. telefonlar için) için başka bir değeri vardır:

| Seçenek | Yatay | Dikey |
| --- | :---: | :---: |
| **Altyazı başına maks. satır** | `2` | `2` |
| **Satır başına maks. karakter** | `42` | `24` |
| **Çince, Japonca ve Korece**: karakterleri Latin karakterlerinin yaklaşık iki katı geniş olan bu dillerde satır başına karakter | `16` | `10` |

Bir altyazının satırları dengelenir ve boşluksuz yazılan diller karakterler arasında bölünür.

**Kelimeleri vurgula**, `.srt` ve `.vtt` dosyalarında her kelimenin söylendiği anda altını çizer. Varsayılan olarak kapalıdır.

## Whisper API

**Sıcaklık** ve **Kelimelerin zaman damgaları**. [Whisper API seçenekleri](/tr/reference/engines/#seçenekler) bölümüne bakın.

## Hakkında

Audiotext sürümü ve bu belgelere, GitHub'daki kaynak koda ve bağış sayfasına bağlantılar. **Güncellemeleri denetle**, yeni bir sürüm olup olmadığını hemen denetler: varsa düğme **İndir**'e dönüşür ve sayfasını açar.
