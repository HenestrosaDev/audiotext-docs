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

- Pokud má přepis časové značky, každý segment se přeloží zvlášť, takže překlad začíná se stejnými časovými značkami: zvýrazňuje přehrávaný segment a kliknutím na segment ho přehrajete.
- Pokud jste upravili prostý text, přeloží se upravený text, bez časových značek.
- Přetažením úchytu mezi texty změníte jejich velikost, dvojitým kliknutím na něj velikosti obnovíte.
- Tlačítko **Přeložit** také umožňuje **Skrýt překlad**, **Přeložit do jiného jazyka…** nebo **Smazat překlad**.

### Oprava a časování překladu

Překlad často potřebuje jiné časování než originál, např. titulky, jejichž čtení trvá déle. Klikněte pravým tlačítkem na segment překladu a zvolte:

- **Upravit text…**: změní jeho text.
- **Upravit časování…**: změní jeho začátek a konec s přesností na milisekundy. Zadejte časy jako `00:01:05,900`, `01:05,9` nebo `65.9`.
- **Přidat segment za…**: přidá segment, který ve výchozím nastavení vyplní mezeru do dalšího.
- **Smazat segment**.

### Vlastní překlad

Chcete-li překlad napsat sami, zvolte jako **Poskytovatele** možnost **Sám, od začátku**. Nepotřebuje žádný klíč API. Překlad začíná s časovými značkami přepisu a prázdnými segmenty označenými **Zatím nepřeloženo** a panel ukazuje, kolik jich zbývá. Klikněte na některý pravým tlačítkem a zvolte **Přeložit text…**: dialog zobrazí původní text řečený v tu dobu.

### Titulky a export

- U přepisů videí zaškrtněte v nabídce **Přeložit** možnost **Zobrazit ho jako titulky videa** a překlad se zobrazí jako titulky. Přepnout je lze i v nabídce videa. Viz [Sledování videí s titulky](/cs/guides/transcript/#sledování-videí-s-titulky).
- Chcete-li překlad uložit jako soubor, zvolte v nabídce **Exportovat** možnost **Překlad** nebo klikněte na tlačítko exportu překladu. Exportuje se ve stejných [formátech](/cs/guides/transcript/#kopírování-a-export) jako přepis, s jazykem v názvu souboru (např. `video.es.srt`), takže ho přehrávače videa načtou spolu s videem. Segmenty, které ještě nejsou přeložené, se do titulků nezahrnou.

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
