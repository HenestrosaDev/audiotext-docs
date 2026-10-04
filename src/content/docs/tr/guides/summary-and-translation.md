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

- Transkripsiyonun zaman damgaları varsa her cümle ayrı çevrilir, böylece çeviri onları korur: oynatılan cümleyi vurgular ve bir cümleye tıklamak onu oynatır.
- Düz metni düzenlediyseniz bunun yerine düzenlenmiş metin zaman damgası olmadan çevrilir.
- İki metin arasındaki tutamağı sürükleyerek boyutlarını değiştirin veya boyutları sıfırlamak için çift tıklayın.
- **Çevir** düğmesi ayrıca **Çeviriyi gizle**, **Başka bir dile çevir…** veya **Çeviriyi sil** seçeneklerini sunar.

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
