---
title: Özet ve çeviri
description: Transkripsiyonları OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL veya Google Translate ile özetleyin ve çevirin.
sidebar:
  order: 4
---

Bir transkripsiyon hazır olduğunda Audiotext onu bir dil modeli veya çeviri hizmetiyle özetleyebilir ve çevirebilir. Her ikisi de geçmişte saklanır, bu yüzden yalnızca bir kez oluşturulur.

## Özet

Bir transkripsiyonun **Özet** modunu açın ve **Özet oluştur**'a tıklayın. Dil modeli şunları yazar:

- Transkripsiyonun bir **özeti**.
- **Önemli noktaları**.
- Zaman damgaları varsa **bölümleri**. Sesi bir bölümün başladığı yerden oynatmak için bölüme tıklayın.

**Yeniden oluştur** özeti yeniden yazar (ör. başka bir model seçtikten sonra). **Kopyala** onu kopyalar; Markdown ve Word [dışa aktarımları](/tr/guides/transcript/#kopyalayın-ve-dışa-aktarın) onu içerir.

Sağlayıcının API anahtarı ayarlanmamışsa **Özet** modu onu ayarlamayı önerir. Çok uzun transkripsiyonlar (yaklaşık üç saat veya daha uzun konuşma) yalnızca başından itibaren özetlenir.

![Önemli noktaları ve bölümleriyle bir transkripsiyonun özeti](/screenshots/summary.png)

## Çeviri

**Çevir**'e tıklayın, **Hedef dil** alanından dili ve **Sağlayıcı**'yı seçin ve onaylayın. Çeviri, orijinal metnin sağındaki bir panelde gösterilir.

- Transkripsiyonun zaman damgaları varsa her segment ayrı çevrilir, böylece çeviri aynı zaman damgalarıyla başlar: oynatılan segmenti vurgular ve bir segmente tıklamak onu oynatır.
- Düz metni düzenlediyseniz bunun yerine düzenlenmiş metin zaman damgası olmadan çevrilir.
- İki metin arasındaki tutamağı sürükleyerek boyutlarını değiştirin veya boyutları sıfırlamak için çift tıklayın.
- **Çevir** düğmesi ayrıca **Çeviriyi gizle**, **Başka bir dile çevir…** veya **Çeviriyi sil** seçeneklerini sunar.

### Çeviriyi düzeltin ve zamanlamasını değiştirin

Bir çeviri çoğu zaman orijinalden farklı bir zamanlamaya ihtiyaç duyar, ör. okunması daha uzun süren altyazılar. Çevirinin bir segmentine sağ tıklayarak:

- **Metni düzenle…**: metnini değiştirin.
- **Zamanlamayı düzenle…**: ne zaman başlayıp bittiğini milisaniye hassasiyetinde değiştirin. Zamanları `00:01:05,900`, `01:05,9` veya `65.9` biçiminde yazın.
- **Sonrasına segment ekle…**: varsayılan olarak bir sonrakine kadarki boşluğu dolduran bir segment ekleyin.
- **Segmenti sil**.

### Kendiniz çevirin

Çeviriyi kendiniz yazmak için **Sağlayıcı** olarak **Kendim, sıfırdan** seçeneğini seçin. API anahtarı gerekmez. Çeviri, transkripsiyonun zaman damgaları ve **Henüz çevrilmedi** olarak gösterilen boş segmentlerle başlar; panel kaç tane kaldığını gösterir. Birine sağ tıklayıp **Metni çevir…** seçeneğini seçin: iletişim kutusu o sırada söylenen orijinal metni gösterir.

### Altyazılar ve dışa aktarma

- Video transkripsiyonlarında, çeviriyi altyazı olarak göstermek için **Çevir** menüsünde **Videonun altyazısı olarak göster** seçeneğini işaretleyin. Videonun menüsü de bunları değiştirir. Bkz. [Videoları altyazılarıyla izleyin](/tr/guides/transcript/#videoları-altyazılarıyla-izleyin).
- Çeviriyi dosya olarak kaydetmek için **Dışa aktar** menüsünde **Çeviri**yi seçin veya çevirinin dışa aktarma düğmesine tıklayın. Transkripsiyonla aynı [biçimlerde](/tr/guides/transcript/#kopyalayın-ve-dışa-aktarın), dosya adında diliyle (ör. `video.es.srt`) dışa aktarılır, böylece video oynatıcılar onu videoyla birlikte yükler. Henüz çevrilmemiş segmentler altyazılara dahil edilmez.

:::tip
Transkripsiyonu bir sağlayıcı olmadan doğrudan başka bir dilde almak için yazıya dökme sırasında da çeviri yapabilirsiniz. [Dil](/tr/guides/transcription-settings/#dil) bölümüne bakın.
:::

## Sağlayıcılar

Sağlayıcılar **Tercihler** → **YZ** bölümünde, özetler ve çeviriler için ayrı ayrı seçilir.

| Sağlayıcı | Varsayılan model | API anahtarı |
| --- | --- | --- |
| OpenAI (varsayılan) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (yerel) | `llama3.2` | Gerekmez |

Sağlayıcının varsayılan modelini kullanmak için **Model**'i boş bırakın veya sağlayıcının başka bir modelinin adını yazın (ör. `claude-sonnet-5-5` veya `deepseek-reasoner`).

Çeviriler şunlarla da yapılabilir:

- **DeepL**: bir [DeepL API anahtarı](https://www.deepl.com/your-account/keys) gerektirir. Ücretsiz planın anahtarları da çalışır.
- **Google Translate**: Cloud Translation API etkinleştirilmiş Google API anahtarını kullanır.

### Ollama

[Ollama](https://ollama.com), modelleri bilgisayarınızda, API anahtarı olmadan ve metni hiçbir yere göndermeden çalıştırır. Kurun, bir model indirin (ör. `ollama pull llama3.2`) ve sağlayıcı olarak **Ollama**'yı seçin. Varsayılan adreste çalışmıyorsa **Tercihler** → **YZ** bölümündeki **Sunucu URL'si**'ni değiştirin (varsayılan `http://localhost:11434`).

:::note
Her sağlayıcı API'sinin kullanımı için ücret alır; Audiotext bundan sorumlu değildir. API anahtarları sisteminizin kimlik bilgisi deposunda saklanır. [Dosyalar ve veriler](/tr/reference/files-and-data/) sayfasına bakın.
:::
