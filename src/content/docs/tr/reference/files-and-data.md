---
title: Dosyalar ve veriler
description: Audiotext'in ayarlarını, geçmişini, kayıtlarını ve API anahtarlarını nerede sakladığı ve hangi ortam değişkenlerini okuduğu.
sidebar:
  order: 5
---

Audiotext verilerinizi bilgisayarınızda tutar. Uzak bir motor (Whisper API veya Google API) ya da Ollama dışında bir YZ sağlayıcısı kullanmadığınız sürece hiçbir şey hiçbir yere gönderilmez.

## Kullanıcı yapılandırma klasörü

Ayarlar, geçmiş ve kayıtlar kullanıcı yapılandırma klasörünüzde saklanır, bu yüzden güncellemelerden sonra da korunur:

| Sistem | Klasör |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (veya `$XDG_CONFIG_HOME/audiotext`) |

İçeriği:

- `config.ini`: ayarlarınız. Varsayılanları geri yüklemek için silin.
- `history.json`: özetleri, çevirileri ve düzeltmeleriyle transkripsiyonlarınız.
- `media/`: daha sonra oynatılabilmeleri için mikrofon kayıtları ve URL'lerden indirilen sesler. Transkripsiyonları geçmişten silindiğinde kaldırılırlar.

Başka bir klasör kullanmak için, ör. taşınabilir bir kurulumda, `AUDIOTEXT_CONFIG_DIR` ortam değişkenini ayarlayın.

:::note
Uygulama klasöründeki `config.ini` dosyası varsayılan ayarları içerir ve hiçbir zaman değiştirilmez.
:::

## API anahtarları

API anahtarları ve Hugging Face belirteci sisteminizin kimlik bilgisi deposunda saklanır:

- **macOS**: Anahtar Zinciri.
- **Windows**: Kimlik Bilgisi Yöneticisi.
- **Linux**: Secret Service (ör. GNOME Keyring veya KWallet).

Sistemde böyle bir depo yoksa (ör. masaüstü olmayan bir sunucu), yapılandırma klasöründe yalnızca kullanıcınızın okuyabildiği bir `.env` dosyasında saklanırlar. Önceki sürümlerin bu dosyada sakladığı anahtarlar, uygulama ilk açıldığında kimlik bilgisi deposuna taşınır.

Anahtarlar **yalnızca** her hizmetin API'sine istek göndermek için kullanılır.

## Ortam değişkenleri

Anahtarların adlarını taşıyan ortam değişkenleri, uygulamada ayarlananlardan önceliklidir:

| Değişken | Hizmet |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (Whisper API, özetler, çeviriler) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text ve Google Translate |
| `HF_TOKEN` | Hugging Face (konuşmacı belirleme) |
| `AUDIOTEXT_CONFIG_DIR` | Ayarların ve geçmişin klasörü |

## Modeller

WhisperX ve konuşmacı belirleme modelleri ilk kullanımda indirilir ve Hugging Face tarafından `~/.cache/huggingface` (Windows'ta `%USERPROFILE%\.cache\huggingface`) içinde önbelleğe alınır. Kapladıkları alanı boşaltmak için bu klasörü silin.
