---
title: Özet, sorular ve çeviri
description: Transkripsiyonları OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL veya Google Translate ile özetleyin, hakkında soru sorun ve çevirin.
sidebar:
  order: 4
---

Bir transkripsiyon hazır olduğunda Audiotext onu bir dil modeli veya çeviri hizmetiyle özetleyebilir, hakkındaki soruları yanıtlayabilir ve çevirebilir. Hepsi geçmişte saklanır, bu yüzden yalnızca bir kez oluşturulur.

## Özet

Bir transkripsiyonun **Özet** modunu açın ve **Özet oluştur**'a tıklayın. Dil modeli şunları yazar:

- Transkripsiyonun bir **özeti**.
- **Önemli noktaları**.
- Zaman damgaları varsa **bölümleri**. Sesi bir bölümün başladığı yerden oynatmak için bölüme tıklayın.

Panel, başlığının altında onu hangi modelin ne zaman oluşturduğunu gösterir. Başlığındaki düğmeler:

- **Bul** (`Ctrl+F`, macOS'ta `⌘F`): özette bir metin arar.
- **Kopyala**: onu kopyalar.
- **Dışa aktar**: transkripsiyonun yerini almaması için `video.summary.md` gibi bir adla onu ayrı olarak düz metin, Markdown veya Word belgesi şeklinde kaydeder. Transkripsiyonun Markdown ve Word [dışa aktarımları](/tr/guides/transcript/#kopyalayın-ve-dışa-aktarın) da onu içerir.
- **Özeti yeniden oluştur**: onu yeniden yazar (ör. başka bir model seçtikten sonra); mevcut özet değiştirileceği için önce sorar.

Sağlayıcının API anahtarı ayarlanmamışsa **Özet** modu onu ayarlamayı önerir. Çok uzun transkripsiyonlar (yaklaşık üç saat veya daha uzun konuşma) yalnızca başından itibaren özetlenir.

![Önemli noktaları ve bölümleriyle bir transkripsiyonun özeti](/screenshots/summary.png)

## Transkripsiyon hakkında soru sorun

**Sor** modunu açın, **Transkripsiyon hakkında bir soru sorun…** alanına bir soru yazın (ör. neye karar verildiği veya kimin bir şey söylediği) ve `Enter`'a basın veya **Sor**'a tıklayın.

- Dil modeli transkripsiyona ve önceki sorular ile yanıtlarına dayanarak yanıt verir, bu yüzden bir soru onlara atıfta bulunabilir (ör. “Neden?”).
- Transkripsiyonun zaman damgaları varsa her yanıt, bunun söylendiği transkripsiyon bölümlerine bağlantı verir. Sesi oradan oynatmak için birine tıklayın.
- Sorular ve yanıtları transkripsiyonla birlikte geçmişte saklanır. Başlıktaki çöp kutusu, önce sorarak konuşmayı temizler.

Soruları, **Tercihler** → **Sağlayıcılar** → **Sor** bölümünde onlar için seçilen sağlayıcı yanıtlar; siz değiştirene kadar bu, özetlerin sağlayıcısıdır. Özetlerde olduğu gibi çok uzun transkripsiyonların yalnızca başı okunur.

## Çeviri

**Çevir**'e tıklayın, **Hedef dil:** alanından dili ve **Şununla çevir:** alanından sağlayıcıyı seçin ve onaylayın. İletişim kutusu seçilen sağlayıcının ne yaptığını açıklar ve API anahtarı eksikse ayarlamayı önerir. Çeviri, orijinal metnin sağındaki bir panelde gösterilir.

- Transkripsiyonun zaman damgaları varsa, her bölümden önce ve sonra söylenen metin bağlam olarak kullanılarak cümle cümle çevrilir; böylece çeviri her cümlenin zaman damgalarıyla başlar: oynatılan cümleyi vurgular ve bir cümleye tıklamak onu oynatır.
- Transkripsiyonun zaman damgaları yoksa tüm metni tek seferde çevrilir.
- İki metin birlikte kaydırılır, böylece sesin aynı bölümünü gösterirler. Aralarındaki tutamaktaki yuvarlak düğme bunu açar ve kapatır. Boyutlarını değiştirmek için tutamağı sürükleyin veya boyutları sıfırlamak için çift tıklayın.

Çevirinin başlığındaki düğmeler içinde bulup değiştirir, onu kopyalar, dışa aktarır ve **Yeniden çevir** (aynı sağlayıcı ve modelle) ile **Çeviriyi gizle** seçeneklerini sunar. **Çevir** düğmesi ayrıca onu yeniden göstermeyi, **Başka bir dile çevir…** veya **Çeviriyi sil** seçeneklerini sunar.

### Birden fazla dil

Bir transkripsiyon birden fazla dile, hatta aynı anda çevrilebilir ve her çeviri saklanır. Panelin başlığı gösterileni seçer, her birinin ne kadarının çevrildiğini gösterir ve başka bir dile çevirme seçeneğiyle biter. Zaten çevirisi olan bir dile çevirmek, düzeltmeleri kaybolacağı için önce sorarak onun yerini alır. Başlığın menüsü, bitmemiş her çevirinin kaç altyazısının çevrildiğini gösterir (ör. `İngilizce · 148/150`).

### Çevirinin ilerlemesi

İlerleme altyazı cinsinden sayılır: bir altyazı, metni olduğunda çevrilmiş sayılır. Çevirinin üstündeki bir satır kaç tanesinin çevrildiğini gösterir (ör. `Çevrildi: 148/150 · %98`). Yüzde aşağı yuvarlanır, bu yüzden `%100` yalnızca hepsi çevrildiğinde görünür.

Çevrilmemiş olanlar kaldıkça yanındaki oklar önceki ve sonraki **Henüz çevrilmedi** altyazısına gider, her birini vurgular ve hangisinde olduğunuzu gösterir (ör. `1 / 2`). Birinin üzerine geldiğinizde sağında, onu çevirmek için iletişim kutusunu açan **Metni çevir…** düğmesi görünür.

### Çeviriyi düzeltin ve zamanlamasını değiştirin

Bir çeviri çoğu zaman orijinalden farklı bir zamanlamaya ihtiyaç duyar, ör. okunması daha uzun süren altyazılar. Çevirinin bir altyazısına sağ tıklayarak:

- **Metni düzenle…**: metnini değiştirin.
- **Zamanlamayı düzenle…**: ne zaman başlayıp bittiğini milisaniye hassasiyetinde değiştirin. Zamanları `00:01:05,900`, `01:05,9` veya `65.9` biçiminde yazın.
- **Sonrasına altyazı ekle…**: varsayılan olarak bir sonrakine kadarki boşluğu dolduran bir altyazı ekleyin.
- **Altyazıyı sil**.

Transkripsiyonun zamanlamasını da değiştirebilir ve ona altyazı ekleyebilirsiniz: bkz. [Transkripsiyonu düzeltin](/tr/guides/transcript/#transkripsiyonu-düzeltin).

### Kendiniz çevirin

Çeviriyi kendiniz yazmak için **Şununla çevir:** alanında **Elle** seçeneğini seçin. API anahtarı gerekmez. Çeviri, transkripsiyonun her altyazısı için **Henüz çevrilmedi** olarak gösterilen boş bir altyazıyla başlar; panel kaç tane kaldığını gösterir. Birine sağ tıklayıp **Metni çevir…** seçeneğini seçin: iletişim kutusu o sırada söylenen orijinal metni gösterir. Birinin üzerine geldiğinizde sağında, aynı iletişim kutusunu açan bir **Metni çevir…** düğmesi görünür.

### Altyazılar ve dışa aktarma

- Video transkripsiyonlarında, çeviriyi altyazı olarak göstermek için **Çevir** menüsünde **Videonun altyazısı olarak göster** seçeneğini işaretleyin. Videonun menüsü de bunları değiştirir. Bkz. [Videoları altyazılarıyla izleyin](/tr/guides/transcript/#videoları-altyazılarıyla-izleyin).
- Çeviriyi dosya olarak kaydetmek için panelinin dışa aktarma düğmesine tıklayın. Transkripsiyonla aynı [biçimlerde](/tr/guides/transcript/#kopyalayın-ve-dışa-aktarın), dosya adında diliyle (ör. `video.es.srt`) dışa aktarılır, böylece video oynatıcılar onu videoyla birlikte yükler. Henüz çevrilmemiş altyazılar dışa aktarılmaz. Aynı menü [videonun altyazılı bir kopyasını](/tr/guides/transcript/#videoyu-altyazılarıyla-dışa-aktarın) oluşturur.

:::tip
Transkripsiyonu bir sağlayıcı olmadan doğrudan başka bir dilde almak için yazıya dökme sırasında da çeviri yapabilirsiniz. [Dil](/tr/guides/transcription-settings/#dil) bölümüne bakın.
:::

## Sağlayıcılar

Sağlayıcılar **Tercihler** → **Sağlayıcılar** bölümünde, özetler, sorular ve çeviriler için ayrı ayrı seçilir.

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

[Ollama](https://ollama.com), modelleri bilgisayarınızda, API anahtarı olmadan ve metni hiçbir yere göndermeden çalıştırır. Kurun, bir model indirin (ör. `ollama pull llama3.2`) ve sağlayıcı olarak **Ollama**'yı seçin. Varsayılan adreste çalışmıyorsa **Tercihler** → **Sağlayıcılar** bölümündeki **Sunucu URL'si**'ni değiştirin (varsayılan `http://localhost:11434`).

:::note
Her sağlayıcı API'sinin kullanımı için ücret alır; Audiotext bundan sorumlu değildir. API anahtarları sisteminizin kimlik bilgisi deposunda saklanır. [Dosyalar ve veriler](/tr/reference/files-and-data/) sayfasına bakın.
:::
