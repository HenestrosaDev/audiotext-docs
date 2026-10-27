---
title: Předvolby
description: Všechna nastavení okna Předvolby, karta po kartě.
sidebar:
  order: 2
---

**Předvolby** obsahují nastavení, která se nemění s každým přepisem. Otevřete je ozubeným kolem vpravo nahoře v okně. Změny se ukládají automaticky.

## Obecné

- **Vzhled**: **Systém** (podle systému), **Světlý** nebo **Tmavý**.
- **Velikost rozhraní**: velikost textu a ovládacích prvků, od 80 % do 200 %. Výchozí je `100%`. Změna se projeví okamžitě.
- **Jazyk rozhraní**: jazyk Audiotextu nebo **Jazyk systému**. Viz [dostupné jazyky](/cs/reference/formats-and-languages/#jazyky-rozhraní).
- **Formát data**: jak se zobrazují data přepisů v jazyce rozhraní: krátký (`04.10.26`), střední (`4. 10. 2026`, výchozí), dlouhý (`4. října 2026`) nebo ISO (`2026-10-04`). Nabídka ukazuje každý formát na příkladu.
- **Formát času**: **Automaticky** (hodiny jazyka rozhraní), 12hodinový (`1:30 odp.`) nebo 24hodinový (`13:30`).
- **Oznámení**: zobrazí systémové oznámení, když je přepis hotový (u složky, když jsou hotové všechny její soubory, a u sledované složky pokaždé, když jsou hotové nové soubory, v jednom oznámení). Ve výchozím stavu zapnuto. V macOS přicházejí od aplikace **Script Editor** a ve Windows od **Windows PowerShell**, takže se pro tyto aplikace povolují nebo ztišují v nastavení systému. V Linuxu vyžadují `notify-send` (balíček `libnotify-bin` nebo `libnotify`).
- **Automaticky kontrolovat aktualizace**: při otevření aplikace zkontroluje, zda je k dispozici nová verze, a pokud ano, zobrazí na horní liště tlačítko **Je k dispozici verze …**, které otevře stránku ke stažení. Předběžné verze se nenabízejí. Ve výchozím nastavení zapnuto.

## Poskytovatelé

Poskytovatelé [shrnutí, otázek a překladů](/cs/guides/summary-and-translation/):

- **Shrnutí** → **Poskytovatel** a **Model**.
- **Zeptat se** → **Poskytovatel** a **Model**: ti, kdo odpovídají na otázky k přepisům. Dokud je nezměníte, jsou stejné jako u shrnutí.
- **Překlad** → **Poskytovatel** a **Model**. DeepL a Google Translate nemají modely na výběr.
- **Ollama** → **URL serveru**: adresa Ollamy, výchozí `http://localhost:11434`.

Nechte **Model** prázdný, chcete-li použít výchozí model poskytovatele. Tlačítko vedle poskytovatele nastavuje jeho klíč API.

## Klíče API

Klíče jednotlivých služeb. Kliknutím na **Nastavit klíč API…** klíč zadáte, kliknutím na **Změnit klíč API…** ho nahradíte (prázdným polem ho odstraníte). Jsou uloženy v úložišti přihlašovacích údajů systému. Jsou seskupené podle toho, k čemu slouží, a nastavené klíče mají zatržítko.

| Skupina | Klíč | Používá se pro |
| --- | --- | --- |
| **Poskytovatelé LLM** | Klíč API OpenAI | Whisper API a shrnování, otázky a překlad pomocí OpenAI |
| | Klíč API Anthropic | Shrnování, otázky a překlad pomocí Claude |
| | Klíč API DeepSeek | Shrnování, otázky a překlad pomocí DeepSeek |
| | Klíč API Gemini | Shrnování, otázky a překlad pomocí Gemini (z Google AI Studio) |
| | Klíč API Mistral | Shrnování, otázky a překlad pomocí Mistral |
| | Klíč API xAI | Shrnování, otázky a překlad pomocí Grok |
| **Překlad** | Klíč API DeepL | Překlad pomocí DeepL (fungují i klíče z bezplatného tarifu) |
| | Klíč Google API | Google Speech-to-Text nad bezplatný limit a Google Translate (Cloud Translation API) |
| **Přepis** | Token Hugging Face | Rozpoznání mluvčích ve WhisperX |

:::caution
Každý poskytovatel si účtuje používání svého API, za které Audiotext neodpovídá. Pokud OpenAI s novým klíčem vrací chybu `429`, viz [Řešení problémů](/cs/help/troubleshooting/#whisper-api-vrací-chybu-429).
:::

## Přepis

Možnosti přepisovacích nástrojů, každý ve vlastní sekci.

### WhisperX

**Typ výpočtu**, **Velikost dávky** a **Použít CPU**. Viz [pokročilé možnosti WhisperX](/cs/reference/engines/#pokročilé-možnosti). Na Macu s Apple Silicon přepisuje WhisperX na jeho grafickém procesoru, pokud není zapnuto **Použít CPU**. Viz [Na Macu](/cs/reference/engines/#na-macu). Na grafickém procesoru Macu nápovědy **Typ výpočtu** a **Velikost dávky** uvádějí, že se neuplatní, a **Použít CPU** odkazuje na **Podporované modely**.

### Whisper API

**Teplota** a **Časové značky slov**. Viz [možnosti Whisper API](/cs/reference/engines/#možnosti).

## Titulky

Jak se titulky dělí: ty zobrazené ve videu a v režimu **Titulky**, exportované soubory titulků a [videa s titulky](/cs/guides/transcript/#export-videa-s-titulky). Každá možnost má hodnotu pro vodorovná videa a jinou pro svislá (vyšší než širší, např. pro telefony), která jsou užší:

| Možnost | Vodorovné | Svislé |
| --- | :---: | :---: |
| **Max. řádků na titulek** | `2` | `2` |
| **Max. znaků na řádek** | `42` | `24` |
| **Čínština, japonština a korejština**: znaky na řádek v těchto jazycích, jejichž znaky jsou zhruba dvakrát širší než latinské | `16` | `10` |

Řádky titulku se vyrovnávají a jazyky psané bez mezer se zalamují mezi znaky.

**Zvýrazňovat slova** podtrhne v souborech `.srt` a `.vtt` každé slovo ve chvíli, kdy zazní. Ve výchozím stavu vypnuto.

## O aplikaci

Verze Audiotextu a odkazy na tuto dokumentaci, na zdrojový kód na GitHubu a na stránku s příspěvky. **Zkontrolovat aktualizace** ihned zkontroluje, zda je k dispozici nová verze: pokud ano, tlačítko se změní na **Stáhnout** a otevře její stránku.
