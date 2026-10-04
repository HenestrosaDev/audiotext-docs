---
title: Sorun giderme
description: Audiotext ile ilgili en yaygın sorunların çözümleri.
sidebar:
  order: 1
---

## WhisperX ile ilk transkripsiyon uzun sürüyor

Bir model ilk kullanıldığında indirilir; bu, bağlantınıza ve modelin boyutuna (~3 GB'a kadar) bağlı olarak birkaç dakika sürebilir. İlerleme, modelin ne zaman yüklendiğini gösterir. Model, seçenekleri değişmediği sürece bellekte kalır, bu yüzden sonraki transkripsiyonlar hemen başlar.

## WhisperX `CUDA out of memory` hatasıyla başarısız oluyor

Ekran kartınızın belleği bu ayarlar için yeterli değil. Sırasıyla şunları deneyin:

1. **Tercihler** → **WhisperX** bölümünde **Toplu iş boyutu**'nu düşürün (ör. `4`).
2. Daha küçük bir model kullanın (ör. `small` veya `base`).
3. Daha hafif bir **Hesaplama türü** kullanın (ör. `int8`).

Son ikisi kaliteyi düşürebilir. Her modelin ihtiyaç duyduğu bellek için [Motorlar](/tr/reference/engines/#model) bölümüne bakın.

## Yazıya dökmek çok uzun sürüyor

WhisperX'in hızı donanımınıza bağlıdır, bu yüzden mütevazı işlemcilerde anında sonuç beklemeyin. `small` gibi daha küçük bir model, ekran kartında `large-v3-turbo` veya `int8` hesaplama türünü deneyin. Alternatif olarak uzak sunucularda çalışan **Whisper API** veya **Google API**'yi kullanın.

## Whisper API `429` hatası döndürüyor

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

OpenAI hesabınızın kredisi bitti veya API'yi ilk kez kullanmadan önce hesabınıza bakiye yüklemeniz gerekiyor (ücretsiz krediniz olsa bile). OpenAI hesabınızın [Billing](https://platform.openai.com/settings/organization/billing/overview) bölümünden kredi satın alın. Hesabınızın etkinleşmesi 10 dakikaya kadar sürebilir.

API anahtarını ilk bakiye yüklemesinden önce oluşturduysanız ve hata 10 dakika sonra da devam ediyorsa yeni bir anahtar oluşturun ve **Tercihler** → **API anahtarları** bölümünde ayarlayın.

## Konuşmacılar belirlenemiyor

Konuşmacıları belirlemek için bir Hugging Face belirteci ve modelin koşullarını kabul etmek gerekir. Şunları kontrol edin:

- [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) koşullarını aynı hesapla kabul ettiniz.
- Belirteç `Read` rolüne sahip ve **Tercihler** → **API anahtarları** bölümünde ayarlı.

[Konuşmacıları belirleme](/tr/guides/transcription-settings/#konuşmacıları-belirleme) bölümüne bakın.

## Mikrofon bulunamıyor veya hiçbir şey kaydedilmiyor

- Mikrofonun bağlı olduğunu kontrol edin ve mikrofon listesinin yanındaki yenile düğmesine tıklayın.
- macOS'ta Audiotext'e **Sistem Ayarları** → **Gizlilik ve Güvenlik** → **Mikrofon** bölümünden, Windows'ta **Ayarlar** → **Gizlilik** → **Mikrofon** bölümünden izin verin.
- Seviye göstergesi **Ses yok** diyorsa listeden başka bir mikrofon seçin veya sesinin kapalı olmadığını kontrol edin.

## Bir transkripsiyonun sesi oynatılamıyor

Kaynak dosya taşınmış veya silinmiş. Metin korunur, ancak ses yalnızca orijinal dosyadan oynatılabilir. Mikrofon kayıtlarını ve URL'lerden alınan sesleri Audiotext saklar.

## Bir YouTube videosu indirilemiyor

URL'nin doğru ve videonun herkese açık olduğundan emin olun. YouTube sık sık değişir; sorun devam ederse Audiotext'in daha yeni bir sürümü olup olmadığını kontrol edin.

## Bir klasör hiçbir dosyayı yazıya dökmüyor

Zaten transkripsiyonu olan dosyalar atlanır. Yeniden yazıya dökmek için **Mevcut dosyaların üzerine yaz**'ı açın. Klasör ayrıca [desteklenen dosyalar](/tr/reference/formats-and-languages/) içermelidir.

## Google API dili soruyor

Google API dili algılayamaz. Ayarlardan **Sesin dili**'ni seçin.

## Başka bir sorun

[Sorunlarda](https://github.com/HenestrosaDev/audiotext/issues) arayın veya [tartışmalarda](https://github.com/HenestrosaDev/audiotext/discussions) sorun. Bir hata bulursanız sisteminizi, Audiotext sürümünü ve hatayı yeniden oluşturma adımlarını belirterek [bildirin](https://github.com/HenestrosaDev/audiotext/issues/new/choose).
