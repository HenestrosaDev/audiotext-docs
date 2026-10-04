---
title: Transkripsiyon ayarları
description: Her transkripsiyonun motorunu, dillerini, bağlamını, seçeneklerini ve çıktısını seçin.
sidebar:
  order: 2
---

Audiotext, yazıya dökmeden önce transkripsiyonun ayarlarını kartlar halinde gösterir. Ayarlar bir sonraki sefer için hatırlanır ve her transkripsiyon oluşturulduğu ayarları saklar.

![Bir dosyanın transkripsiyon ayarları](/screenshots/transcription-settings.png)

## Motor

**Transkripsiyon yöntemi**:

| Motor | Nerede çalışır | Ücret | Notlar |
| --- | --- | --- | --- |
| **WhisperX** (varsayılan) | Bilgisayarınız | Ücretsiz ve sınırsız | Gizli ve çevrimdışı. Daha fazla seçenek: konuşmacılar, kelime zamanlaması, canlı metin. |
| **Whisper API** | OpenAI sunucuları | Dakika başına ücretli | [OpenAI API anahtarı](/tr/reference/preferences/#api-anahtarları) gerektirir. WhisperX'i rahat çalıştıramayan bilgisayarlar için. |
| **Google API** | Google sunucuları | Ücretsiz katman veya ücretli | Daha düşük kalite ve zaman damgası yok. API anahtarı isteğe bağlıdır. |

**Model** motora bağlıdır. WhisperX'te büyük modeller daha doğrudur ama daha yavaştır. Whisper API'de transkripsiyonun zaman damgaları ve konuşmacılar içerip içermeyeceğini belirler. Karşılaştırmak için [Motorlar](/tr/reference/engines/) sayfasına bakın.

## Dil

- **Sesin dili**: varsayılan **Otomatik algıla**. Seçmek, kısa veya karışık kayıtlarda hataları önler. Google API dili algılayamaz, bu yüzden seçmeniz gerekir.
- **Transkripsiyonun dili**: varsayılan **Sesle aynı**. Sesi yazıya dökerken çevirmek için başka bir dil seçin.

İki dil farklı olduğunda **Çeviri** seçenekleri görünür:

- **Whisper ile çevir (önerilen)**: Whisper sesi tek adımda yazıya döker ve çevirir. Yalnızca İngilizceye çevirebilir.
- **Doğrudan hedef dilde yaz (_dil_, deneysel)**: Whisper'dan transkripsiyonu doğrudan o dilde yazması istenir. Birçok dilde iyi çalışır, ancak sonucu kontrol edin.

Google API çeviri yapamaz. Bir transkripsiyonu daha sonra, daha fazla sağlayıcıyla herhangi bir dile çevirmek için dökümdeki [Çevir](/tr/guides/summary-and-translation/#çeviri) düğmesini kullanın.

## Bağlam

Modele yardımcı olan iki isteğe bağlı alan:

- **Anahtar kelimeler**: kayıtta geçen adlar, terimler veya kısaltmalar, virgülle ayrılmış olarak (ör. `Audiotext, WhisperX, Henestrosa`), doğru yazılmaları için. Bunlar yalnızca ipuçlarıdır: bir anahtar kelime ancak kayıtta söyleniyorsa yazılır.
- **Açıklama**: kaydın konusu veya ortamı gibi, neyle ilgili olduğu (ör. `Konuşma tanıma hakkında bir röportaj`).

WhisperX ve Whisper API tarafından kullanılırlar; `gpt-4o-transcribe-diarize` modeli hariç. Google API bunları kullanmaz.

## Seçenekler

- **Kelime düzeyinde zamanlama** (WhisperX): oynatma sırasında vurgulamak için her kelimeyi sesle hizalar. Biraz daha uzun sürer. Altyazılar bunu zaten kullanır.
- **Konuşmayı ayıkla**: yazıya dökmeden önce müziği ve arka plan gürültüsünü azaltır.
- **Konuşmacıları belirle** (WhisperX): her bölümde kimin konuştuğunu etiketler, ör. `SPEAKER_00`. Kaç kişinin konuştuğunu biliyorsanız **Konuşmacı sayısı**'na girin (`0` otomatik algılar). Ücretsiz bir Hugging Face belirteci gerektirir; [Konuşmacıları belirleme](#konuşmacıları-belirleme) bölümüne bakın. Whisper API'de konuşmacıları `gpt-4o-transcribe-diarize` modeli belirler.

### Konuşmacıları belirleme

Konuşmacıları belirleyen model, [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1), ücretsizdir ancak bir Hugging Face belirteci gerektirir:

1. [Hugging Face](https://huggingface.co/join)'te bir hesap oluşturun ve [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) koşullarını kabul edin.
2. [Ayarlarınızda](https://huggingface.co/settings/tokens) `Read` rolüne sahip bir belirteç oluşturun.
3. **Hugging Face belirtecini ayarla…**'ya tıklayın ve yapıştırın.

Model ilk kullanımda indirilir. Sonrasında konuşmacılar çevrimdışı belirlenir.

## Canlı metin

Yalnızca mikrofon için gösterilir. [Canlı metin](/tr/guides/sources/#canlı-metin) bölümüne bakın.

## Klasör ve Çıktı

Yalnızca klasörler için gösterilir:

- **Klasörü izle**: [Bir klasörü izleyin](/tr/guides/sources/#bir-klasörü-izleyin) bölümüne bakın.
- **Dosya türleri**: WhisperX ile `.txt`, `.srt`, `.vtt`, `.json`, `.tsv` ve `.aud` türlerinden bir veya daha fazlası. Whisper API ile dosyaların biçimi (`text`, `json`, `verbose_json`, `srt` veya `vtt`); altyazılar zaman damgalı bir model gerektirir. Google API düz metin (`.txt`) döndürür.
- **Konum**: dosyalar her kaynak dosyanın yanına kaydedilir. Başka bir klasöre kaydetmek için **Değiştir…**'e (alt klasörleri yeniden oluşturulur), geri dönmek için **Kaynağın yanına**'ya tıklayın.
- **Mevcut dosyaların üzerine yaz**: zaten transkripsiyonu olan dosyaları yeniden yazıya döker ve mevcut transkripsiyonu değiştirir.

Altyazı seçenekleri (satır genişliği, satır sayısı, vurgulanan kelimeler) [Tercihler](/tr/reference/preferences/#altyazılar)'de bulunur.
