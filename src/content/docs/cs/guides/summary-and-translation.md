---
title: Shrnutí a překlad
description: Shrnujte a překládejte přepisy pomocí OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL nebo Google Translate.
sidebar:
  order: 4
---

Když je přepis hotový, Audiotext ho umí shrnout a přeložit pomocí jazykového modelu nebo překladové služby. Obojí se uloží do historie, takže se generuje jen jednou.

## Shrnutí

Otevřete režim **Shrnutí** přepisu a klikněte na **Vygenerovat shrnutí**. Jazykový model napíše:

- **Shrnutí** přepisu.
- Jeho **klíčové body**.
- Jeho **kapitoly**, pokud má časové značky. Kliknutím na kapitolu přehrajete zvuk od jejího začátku.

**Vygenerovat znovu** ho napíše znovu (např. po výběru jiného modelu). **Kopírovat** ho zkopíruje a [export](/cs/guides/transcript/#kopírování-a-export) do Markdownu a Wordu ho obsahuje.

Pokud není nastaven klíč API poskytovatele, režim **Shrnutí** nabídne jeho nastavení. Velmi dlouhé přepisy (zhruba tři hodiny řeči a více) se shrnují jen od začátku.

![Shrnutí přepisu s klíčovými body a kapitolami](/screenshots/summary.png)

## Překlad

Klikněte na **Přeložit**, vyberte jazyk v poli **Přeložit do** a **Poskytovatele** a potvrďte. Překlad se zobrazí v panelu vpravo od původního textu.

- Pokud má přepis časové značky, každá věta se přeloží zvlášť, takže je překlad zachová: zvýrazňuje přehrávanou větu a kliknutím na větu ji přehrajete.
- Pokud jste upravili prostý text, přeloží se upravený text, bez časových značek.
- Přetažením úchytu mezi texty změníte jejich velikost, dvojitým kliknutím na něj velikosti obnovíte.
- Tlačítko **Přeložit** také umožňuje **Skrýt překlad**, **Přeložit do jiného jazyka…** nebo **Smazat překlad**.

:::tip
Chcete-li přepis rovnou v jiném jazyce bez poskytovatele, můžete překládat i během přepisu. Viz [Jazyk](/cs/guides/transcription-settings/#jazyk).
:::

## Poskytovatelé

Poskytovatele vyberete v **Předvolby** → **AI**, zvlášť pro shrnutí a pro překlady.

| Poskytovatel | Výchozí model | Klíč API |
| --- | --- | --- |
| OpenAI (výchozí) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (lokálně) | `llama3.2` | Není potřeba |

Nechte **Model** prázdný, chcete-li použít výchozí model poskytovatele, nebo zadejte název libovolného jiného modelu poskytovatele (např. `claude-sonnet-5-5` nebo `deepseek-reasoner`).

Překládat lze také pomocí:

- **DeepL**, který vyžaduje [klíč API DeepL](https://www.deepl.com/your-account/keys). Fungují i klíče z bezplatného tarifu.
- **Google Translate**, který používá klíč Google API se zapnutým Cloud Translation API.

### Ollama

[Ollama](https://ollama.com) spouští modely na vašem počítači, bez klíče API a bez odesílání textu kamkoli. Nainstalujte ji, stáhněte model (např. `ollama pull llama3.2`) a jako poskytovatele vyberte **Ollama**. Pokud neběží na výchozí adrese, změňte **URL serveru** v **Předvolby** → **AI** (výchozí `http://localhost:11434`).

:::note
Každý poskytovatel si účtuje používání svého API, za které Audiotext neodpovídá. Klíče API jsou uloženy v úložišti přihlašovacích údajů systému. Viz [Soubory a data](/cs/reference/files-and-data/).
:::
