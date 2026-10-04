---
title: Motorlar
description: WhisperX, Whisper API ve Google API'yi karşılaştırın; modellerini ve gelişmiş seçeneklerini seçin.
sidebar:
  order: 1
---

Audiotext, [transkripsiyon ayarlarının](/tr/guides/transcription-settings/#motor) **Motor** kartında seçilen üç motordan biriyle yazıya döker.

| | WhisperX | Whisper API | Google API |
| --- | --- | --- | --- |
| Çalıştığı yer | Bilgisayarınız | OpenAI sunucuları | Google sunucuları |
| İnternet | Yalnızca modelleri indirmek için | Gerekli | Gerekli |
| Ücret | Ücretsiz, sınırsız | Ücretli | Ücretsiz katman (ayda 60 dk) veya API anahtarıyla ücretli |
| Dili algılar | ✓ | ✓ | ✗ |
| Çevirir | ✓ | ✓ | ✗ |
| Zaman damgaları | ✓ | Modele bağlı | ✗ |
| Konuşmacıları belirler | ✓ (Hugging Face belirteci) | `gpt-4o-transcribe-diarize` | ✗ |
| Kelime zamanlaması | ✓ | `whisper-1` | ✗ |
| Canlı metin | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX), OpenAI'nin Whisper'ının bilgisayarınızda çalışan hızlı bir uygulamasıdır; böylece sesiniz bilgisayarınızdan hiç çıkmaz. İşlemcide veya çok daha hızlı biçimde CUDA destekli bir NVIDIA ekran kartında çalışır.

### Model

Büyük modeller daha doğrudur ancak daha yavaştır ve daha fazla bellek kullanır. Model ilk kullanımda indirilir.

| Model | Parametre | Gereken VRAM |
| :---: | :---: | :---: |
| `tiny`, `tiny.en` | 39 M | ~1 GB |
| `base`, `base.en` | 74 M | ~1 GB |
| `small`, `small.en` | 244 M | ~2 GB |
| `distil-small.en` | 166 M | ~2 GB |
| `medium`, `medium.en` | 769 M | ~5 GB |
| `distil-medium.en` | 394 M | ~3 GB |
| `large-v1`, `large-v2`, `large-v3` | 1550 M | <8 GB |
| `large-v3-turbo` | 809 M | ~6 GB |
| `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5` | 756 M | ~5 GB |

- **`large-v2`** varsayılandır, çünkü `large-v3` özellikle Japonca gibi bazı dillerde daha sık halüsinasyon görür ve metni tekrarlar, ayrıca daha fazla noktalama işaretini atlar.
- **`large-v3-turbo`**, `large-v3`'ün budanmış bir sürümüdür; çok daha hızlıdır ve neredeyse aynı doğruluktadır.
- **`.en`** ile biten modeller (`tiny.en`, `base.en`, `small.en`, `medium.en`) ve **damıtılmış** modeller (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) yalnızca İngilizceyi yazıya döker. Aynı boyuttaki çok dilli modellerden daha hızlıdırlar.

:::tip
Audiotext'i hızlıca denemek için `tiny` veya `small` seçin. En iyi kalite için bir ekran kartında `large-v2` veya `large-v3-turbo` kullanın.
:::

### Gelişmiş seçenekler

**Tercihler** → **WhisperX** bölümündedir. Yalnızca sorun yaşıyorsanız veya ne yaptığınızı biliyorsanız değiştirin: belleği tükenen bir ekran kartı sisteminizi dondurabilir.

- **Hesaplama türü**: modelin sayılarının hassasiyeti. `float16` ekran kartlarında daha hızlıdır (CUDA ile varsayılan). `int8` daha az bellek kullanır ve işlemcide varsayılandır, çünkü birçok işlemci `float16`'yı verimli desteklemez. `float32` en hassas olanıdır; 8 GB'tan fazla VRAM'e sahip ekran kartları içindir.
- **Toplu iş boyutu**: sesin kaç parçasının aynı anda işlendiği (varsayılan `8`). Kaliteyi değil, yalnızca hızı etkiler. Bellek yetmiyorsa düşürün; en fazla `16` önerilir.
- **CPU kullan**: WhisperX'i işlemcide çalıştırır. CUDA destekli ekran kartı bulunamazsa her zaman açıktır.

## Whisper API

[OpenAI'nin konuşmadan metne API'sini](https://platform.openai.com/docs/guides/speech-to-text) kullanır. WhisperX'i rahat çalıştıramayan bilgisayarlar içindir ve bir OpenAI API anahtarı gerektirir ([API anahtarları](/tr/reference/preferences/#api-anahtarları) bölümüne bakın).

| Model | Zaman damgaları | Konuşmacılar | Notlar |
| --- | :---: | :---: | --- |
| `whisper-1` (varsayılan) | ✓ | ✗ | Cümle cümle oynatılabilir ve altyazıya dönüştürülebilir. İngilizceye çevirir. |
| `gpt-transcribe` | ✗ | ✗ | Daha doğru, ancak zaman damgası yok. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Konuşmacıları belirler. Anahtar kelimeleri ve açıklamayı kullanmaz. |

İngilizceye çeviriler her zaman `whisper-1` tarafından yapılır, çünkü çeviri yapan tek model odur.

API 25 MB'tan büyük dosyaları reddettiği için uzun kayıtlar, hiçbir kelime bölünmesin diye bir sessizlikte kesilerek en fazla 10 dakikalık parçalara ayrılır. `whisper-1` ile her parçanın sonu bir sonrakine bağlam olarak verilir; `gpt-4o-transcribe-diarize` ile her konuşmacının sesinden bir örnek sonraki parçalarla birlikte gönderilir, böylece etiketlerini korurlar.

### Seçenekler

- **Yanıt biçimi** (Çıktı kartı, klasörler için): `text` (varsayılan), `json`, `verbose_json`, `srt` veya `vtt`. Altyazılar ve `verbose_json` zaman damgalı bir model gerektirir.
- **Sıcaklık** (Tercihler → Whisper API): 0 ile 1 arasında. 0,8 gibi yüksek değerler sonucu daha rastgele, 0,2 gibi düşük değerler daha odaklı yapar. 0 (varsayılan) ile model gerektiğinde onu otomatik olarak artırır.
- **Kelimelerin zaman damgaları** (Tercihler → Whisper API): `whisper-1`'in oynatma sırasında vurgulamak için her kelimenin zaman damgasını da döndürüp döndürmeyeceği. Daha uzun sürer. Varsayılan olarak açıktır.

## Google API

[Google Speech-to-Text API](https://cloud.google.com/speech-to-text)'yi kullanır. Cümlelere noktalama koymaz (bunu Audiotext ekler) ve kalitesi Whisper'dan düşüktür, bu yüzden transkripsiyonlar sık sık düzeltme gerektirir. Dili algılayamaz, çeviri yapamaz ve zaman damgası olmadan düz metin döndürür.

API anahtarı olmadan ayda 60 dakikayla sınırlı ücretsiz katman kullanılır. Genişletmek için bir Google API anahtarı ayarlayın. Google kullanım için ücret alır; Audiotext bundan sorumlu değildir.
