---
title: Předvolby
description: Všechna nastavení okna Předvolby, karta po kartě.
sidebar:
  order: 2
---

**Předvolby** obsahují nastavení, která se nemění s každým přepisem. Otevřete je ozubeným kolem vpravo nahoře v okně. Změny se ukládají automaticky.

## Obecné

- **Vzhled**: **Systém** (podle systému), **Světlý** nebo **Tmavý**.
- **Jazyk rozhraní**: jazyk Audiotextu nebo **Jazyk systému**. Lze ho změnit, když neprobíhá žádný přepis. Viz [dostupné jazyky](/cs/reference/formats-and-languages/#jazyky-rozhraní).
- **Formát data**: jak se zobrazují data přepisů v jazyce rozhraní: krátký (`04.10.26`), střední (`4. 10. 2026`, výchozí), dlouhý (`4. října 2026`) nebo ISO (`2026-10-04`). Nabídka ukazuje každý formát na příkladu.
- **Formát času**: **Automaticky** (hodiny jazyka rozhraní), 12hodinový (`1:30 odp.`) nebo 24hodinový (`13:30`).
- **Oznámení**: zobrazí systémové oznámení, když je přepis hotový (u složky, když jsou hotové všechny její soubory, a u sledované složky pokaždé, když je hotový nový soubor). Ve výchozím stavu zapnuto. V macOS přicházejí od aplikace **Script Editor** a ve Windows od **Windows PowerShell**, takže se pro tyto aplikace povolují nebo ztišují v nastavení systému. V Linuxu vyžadují `notify-send` (balíček `libnotify-bin` nebo `libnotify`).

## AI

Poskytovatelé [shrnutí a překladů](/cs/guides/summary-and-translation/):

- **Shrnutí** → **Poskytovatel** a **Model**.
- **Překlad** → **Poskytovatel** a **Model**. DeepL a Google Translate nemají modely na výběr.
- **Ollama** → **URL serveru**: adresa Ollamy, výchozí `http://localhost:11434`.

Nechte **Model** prázdný, chcete-li použít výchozí model poskytovatele. Tlačítko vedle poskytovatele nastavuje jeho klíč API.

## Klíče API

Klíče jednotlivých služeb. Kliknutím na **Nastavit…** klíč zadáte, kliknutím na **Změnit…** ho nahradíte (prázdným polem ho odstraníte). Jsou uloženy v úložišti přihlašovacích údajů systému.

| Klíč | Používá se pro |
| --- | --- |
| Klíč API OpenAI | Whisper API a shrnování a překlad pomocí OpenAI |
| Klíč API Anthropic | Shrnování a překlad pomocí Claude |
| Klíč API DeepSeek | Shrnování a překlad pomocí DeepSeek |
| Klíč API Gemini | Shrnování a překlad pomocí Gemini (z Google AI Studio) |
| Klíč API Mistral | Shrnování a překlad pomocí Mistral |
| Klíč API xAI | Shrnování a překlad pomocí Grok |
| Klíč API DeepL | Překlad pomocí DeepL (fungují i klíče z bezplatného tarifu) |
| Klíč Google API | Google Speech-to-Text nad bezplatný limit a Google Translate (Cloud Translation API) |
| Token Hugging Face | Rozpoznání mluvčích ve WhisperX |

:::caution
Každý poskytovatel si účtuje používání svého API, za které Audiotext neodpovídá. Pokud OpenAI s novým klíčem vrací chybu `429`, viz [Řešení problémů](/cs/help/troubleshooting/#whisper-api-vrací-chybu-429).
:::

## WhisperX

**Typ výpočtu**, **Velikost dávky** a **Použít CPU**. Viz [pokročilé možnosti WhisperX](/cs/reference/engines/#pokročilé-možnosti).

## Titulky

Možnosti souborů `.srt` a `.vtt`, které se ukládají při přepisu složky pomocí WhisperX:

- **Zvýrazňovat slova**: podtrhne každé slovo ve chvíli, kdy zazní. Ve výchozím stavu vypnuto.
- **Max. počet řádků**: maximální počet řádků každého titulku. Výchozí `2`.
- **Max. šířka řádku**: maximální počet znaků na řádku před zalomením. Výchozí `42`.

## Whisper API

**Teplota** a **Časové značky slov**. Viz [možnosti Whisper API](/cs/reference/engines/#možnosti).

## O aplikaci

Verze Audiotextu a odkazy na tuto dokumentaci, na zdrojový kód na GitHubu a na stránku s příspěvky.
