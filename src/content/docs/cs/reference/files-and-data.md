---
title: Soubory a data
description: Kam Audiotext ukládá nastavení, historii, nahrávky a klíče API a jaké proměnné prostředí čte.
sidebar:
  order: 5
---

Audiotext uchovává vaše data na vašem počítači. Nic se nikam neodesílá, pokud nepoužijete vzdálený nástroj (Whisper API nebo Google API) nebo jiného poskytovatele AI než Ollamu. Při otevření se také zeptá GitHubu, zda je k dispozici nová verze, což můžete vypnout v **Předvolby** → **Obecné** → **Aktualizace**.

## Uživatelská konfigurační složka

Nastavení, historie a nahrávky se ukládají do vaší uživatelské konfigurační složky, takže přežijí aktualizace:

| Systém | Složka |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (nebo `$XDG_CONFIG_HOME/audiotext`) |

Obsahuje:

- `config.ini`: vaše nastavení. Jeho smazáním obnovíte výchozí hodnoty.
- `history.json`: vaše přepisy se shrnutími, překlady a opravami.
- `media/`: nahrávky z mikrofonu a zvuk stažený z URL, aby je bylo možné později přehrát. Odstraní se při smazání příslušného přepisu z historie.

Chcete-li použít jinou složku, např. pro přenosnou instalaci, nastavte proměnnou prostředí `AUDIOTEXT_CONFIG_DIR`.

:::note
Soubor `config.ini` ve složce aplikace obsahuje výchozí nastavení a nikdy se nemění.
:::

## Klíče API

Klíče API a token Hugging Face jsou uloženy v úložišti přihlašovacích údajů systému:

- **macOS**: Klíčenka.
- **Windows**: Správce přihlašovacích údajů.
- **Linux**: Secret Service (např. GNOME Keyring nebo KWallet).

Pokud systém žádné nemá (např. server bez desktopu), ukládají se do souboru `.env` v konfigurační složce, který může číst jen váš uživatel. Klíče, které předchozí verze ukládaly do tohoto souboru, se při prvním spuštění aplikace přesunou do úložiště přihlašovacích údajů.

Klíče se používají **jen** k odesílání požadavků na API dané služby.

## Proměnné prostředí

Proměnné prostředí s názvy klíčů mají přednost před klíči nastavenými v aplikaci:

| Proměnná | Služba |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (Whisper API, shrnutí, překlady) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text a Google Translate |
| `HF_TOKEN` | Hugging Face (rozpoznání mluvčích) |
| `AUDIOTEXT_CONFIG_DIR` | Složka nastavení a historie |

## Modely

Modely WhisperX a rozpoznání mluvčích se stahují při prvním použití a Hugging Face je ukládá do mezipaměti v `~/.cache/huggingface` (ve Windows `%USERPROFILE%\.cache\huggingface`). Smazáním této složky uvolníte místo, které zabírají.
