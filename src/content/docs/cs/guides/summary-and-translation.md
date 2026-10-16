---
title: Shrnutí, otázky a překlad
description: Shrnujte přepisy, ptejte se na ně a překládejte je pomocí OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL nebo Google Translate.
sidebar:
  order: 4
---

Když je přepis hotový, Audiotext ho umí shrnout, odpovídat na otázky k němu a přeložit ho pomocí jazykového modelu nebo překladové služby. Vše se uloží do historie, takže se generuje jen jednou.

## Shrnutí

Otevřete režim **Shrnutí** přepisu a klikněte na **Vygenerovat shrnutí**. Jazykový model napíše:

- **Shrnutí** přepisu.
- Jeho **klíčové body**.
- Jeho **kapitoly**, pokud má časové značky. Kliknutím na kapitolu přehrajete zvuk od jejího začátku.

Pod nadpisem panel ukazuje, který model ho vytvořil a kdy. Tlačítka v jeho záhlaví:

- **Hledat** (`Ctrl+F`, v macOS `⌘F`): hledá text ve shrnutí.
- **Kopírovat**: zkopíruje ho.
- **Exportovat**: uloží ho samostatně jako prostý text, Markdown nebo dokument Word s názvem jako `video.summary.md`, aby nenahradil přepis. [Export](/cs/guides/transcript/#kopírování-a-export) přepisu do Markdownu a Wordu ho obsahuje také.
- **Znovu vytvořit shrnutí**: napíše ho znovu (např. po výběru jiného modelu), po potvrzení, protože se současné nahradí.

Pokud není nastaven klíč API poskytovatele, režim **Shrnutí** nabídne jeho nastavení. Velmi dlouhé přepisy (zhruba tři hodiny řeči a více) se shrnují jen od začátku.

![Shrnutí přepisu s klíčovými body a kapitolami](/screenshots/summary.png)

## Otázky k přepisu

Otevřete režim **Zeptat se**, napište otázku do pole **Položte otázku k přepisu…** (např. co se rozhodlo nebo kdo něco řekl) a stiskněte `Enter` nebo klikněte na **Zeptat se**.

- Jazykový model odpovídá na základě přepisu a předchozích otázek a odpovědí, takže otázka se na ně může odkazovat (např. „Proč?“).
- Pokud má přepis časové značky, každá odpověď odkazuje na části přepisu, kde to zazní. Kliknutím na jednu přehrajete zvuk od toho místa.
- Otázky a odpovědi se ukládají do historie spolu s přepisem. Koš v záhlaví po potvrzení vymaže konverzaci.

Na otázky odpovídá poskytovatel zvolený pro ně v **Předvolby** → **Poskytovatelé** → **Zeptat se**, což je poskytovatel shrnutí, dokud ho nezměníte. Stejně jako u shrnutí se z velmi dlouhých přepisů čte jen začátek.

## Překlad

Klikněte na **Přeložit**, vyberte jazyk v poli **Přeložit do:** a poskytovatele v poli **Přeložit pomocí:** a potvrďte. Dialog vysvětluje, co zvolený poskytovatel dělá, a pokud chybí jeho klíč API, nabídne jeho nastavení. Překlad se zobrazí v panelu vpravo od původního textu.

- Pokud má přepis časové značky, překládá se větu po větě s textem řečeným před a po každé části jako kontextem, takže překlad začíná s časovými značkami každé věty: zvýrazňuje přehrávanou větu a kliknutím na větu ji přehrajete.
- Pokud přepis nemá časové značky, přeloží se celý jeho text najednou.
- Oba texty se posouvají společně, takže ukazují stejnou část zvuku. Kulaté tlačítko na úchytu mezi nimi to zapíná a vypíná. Přetažením úchytu změníte jejich velikost, dvojitým kliknutím na něj velikosti obnovíte.

Tlačítka v záhlaví překladu v něm hledají a nahrazují, kopírují ho, exportují, nabízejí **Přeložit znovu** (se stejným poskytovatelem a modelem) a **Skrýt překlad**. Tlačítko **Přeložit** také umožňuje překlad znovu zobrazit, **Přeložit do jiného jazyka…** nebo **Smazat překlad**.

### Více jazyků

Přepis lze přeložit do více jazyků, i současně, a každý překlad se uchová. Nadpis panelu vybírá zobrazený překlad, ukazuje, kolik z každého je přeloženo, a končí možností přeložit do jiného jazyka. Překlad do jazyka, který už překlad má, ho po potvrzení nahradí, protože se ztratí jeho opravy. Nabídka v názvu panelu ukazuje, kolik titulků každého nedokončeného překladu je přeloženo (např. `Angličtina · 148/150`).

### Průběh překladu

Průběh se počítá v titulcích: titulek je přeložený, když má text. Nad překladem ukazuje řádek, kolik jich je přeloženo (např. `Přeloženo: 148/150 · 98 %`). Procento se zaokrouhluje dolů, takže `100 %` se zobrazí, až když jsou přeložené všechny.

Dokud nějaké zbývají, šipky vedle něj přecházejí na předchozí a další titulek **Zatím nepřeloženo**, každý zvýrazní a ukazují, na kterém jste (např. `1 z 2`). Najeďte myší na některý z nich a vpravo se zobrazí tlačítko **Přeložit text…**, které otevře dialog k jeho překladu.

### Oprava a časování překladu

Překlad často potřebuje jiné časování než originál, např. titulky, jejichž čtení trvá déle. Klikněte pravým tlačítkem na segment překladu a zvolte:

- **Upravit text…**: změní jeho text.
- **Upravit časování…**: změní jeho začátek a konec s přesností na milisekundy. Zadejte časy jako `00:01:05,900`, `01:05,9` nebo `65.9`.
- **Přidat segment za…**: přidá segment, který ve výchozím nastavení vyplní mezeru do dalšího.
- **Smazat segment**.

### Vlastní překlad

Chcete-li překlad napsat sami, zvolte v poli **Přeložit pomocí:** možnost **Ručně**. Nepotřebuje žádný klíč API. Překlad začíná prázdným segmentem pro každý titulek přepisu, označeným **Zatím nepřeloženo**, a panel ukazuje, kolik jich zbývá. Klikněte na některý pravým tlačítkem a zvolte **Přeložit text…**: dialog zobrazí původní text řečený v tu dobu. Po najetí myší na některý se vpravo zobrazí tlačítko **Přeložit text…**, které otevře stejný dialog.

### Titulky a export

- U přepisů videí zaškrtněte v nabídce **Přeložit** možnost **Zobrazit ho jako titulky videa** a překlad se zobrazí jako titulky. Přepnout je lze i v nabídce videa. Viz [Sledování videí s titulky](/cs/guides/transcript/#sledování-videí-s-titulky).
- Chcete-li překlad uložit jako soubor, klikněte na tlačítko exportu v jeho panelu. Exportuje se ve stejných [formátech](/cs/guides/transcript/#kopírování-a-export) jako přepis, s jazykem v názvu souboru (např. `video.es.srt`), takže ho přehrávače videa načtou spolu s videem. Segmenty, které ještě nejsou přeložené, se do titulků nezahrnou. Stejná nabídka vytvoří [kopii videa s titulky](/cs/guides/transcript/#export-videa-s-titulky).

:::tip
Chcete-li přepis rovnou v jiném jazyce bez poskytovatele, můžete překládat i během přepisu. Viz [Jazyk](/cs/guides/transcription-settings/#jazyk).
:::

## Poskytovatelé

Poskytovatele vyberete v **Předvolby** → **Poskytovatelé**, zvlášť pro shrnutí, otázky a překlady.

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

[Ollama](https://ollama.com) spouští modely na vašem počítači, bez klíče API a bez odesílání textu kamkoli. Nainstalujte ji, stáhněte model (např. `ollama pull llama3.2`) a jako poskytovatele vyberte **Ollama**. Pokud neběží na výchozí adrese, změňte **URL serveru** v **Předvolby** → **Poskytovatelé** (výchozí `http://localhost:11434`).

:::note
Každý poskytovatel si účtuje používání svého API, za které Audiotext neodpovídá. Klíče API jsou uloženy v úložišti přihlašovacích údajů systému. Viz [Soubory a data](/cs/reference/files-and-data/).
:::
