---
title: Váš první přepis
description: Prohlídka okna Audiotextu a postup přepisu zvukového nebo video souboru.
sidebar:
  order: 2
---

## Okno

Okno Audiotextu má tři části:

- **Horní lišta**: tlačítka pro **Nový přepis** ze **Souboru**, **URL**, **Mikrofonu** nebo **Složky**, stav aplikace a ozubené kolo, které otevírá [Předvolby](/cs/reference/preferences/). Tlačítko vlevo zobrazuje nebo skrývá historii.
- **Historie** vlevo: všechny vaše přepisy, které můžete prohledávat, připínat, seskupovat a přejmenovávat. Viz [Historie](/cs/guides/history/).
- **Hlavní oblast**: zdroj, který nastavujete, průběh přepisu nebo přepis vybraný v historii.

![Části okna aplikace Audiotext: horní lišta, historie a hlavní oblast](/screenshots/window.png)

Po otevření aplikace se hlavní oblast zeptá **Co chcete přepsat?** a zobrazí kartu pro každý druh zdroje.

:::tip
Přetáhněte soubor nebo složku kamkoli do okna a přepište ho.
:::

## Přepište soubor

1. Klikněte na **Soubor** v horní liště (nebo stiskněte `Ctrl+O`, v macOS `⌘O`) a vyberte zvukový nebo video soubor, případně ho přetáhněte do okna. Pak klikněte na **Pokračovat**.
2. Zkontrolujte nastavení. Výchozí hodnoty fungují dobře pro většinu nahrávek:
   - **Nástroj**: WhisperX, který běží na vašem počítači. Pokud je počítač pomalý, vyberte menší **Model** (například `small`).
   - **Jazyk**: **Jazyk zvuku** se rozpozná automaticky. Pokud ho znáte, vyberte ho, abyste předešli chybám. Pro překlad vyberte jiný **Jazyk přepisu**.
   - **Kontext** a **Možnosti**: volitelné nápovědy a funkce, například rozpoznání mluvčích.

   Všechna nastavení najdete v části [Nastavení přepisu](/cs/guides/transcription-settings/).
3. Klikněte na **Spustit přepis** (nebo stiskněte `Ctrl+Enter`, v macOS `⌘↩`).

Během práce se zobrazuje průběh každého kroku (načtení modelu, přepis, zarovnání slov…). Mezitím můžete Audiotext dál používat: výsledek se uloží do historie a otevře se, až bude hotový. Pro zrušení klikněte na **Zrušit** nebo stiskněte `Esc`.

Pokud probíhá jiný přepis, tlačítko se změní na **Přidat do fronty** a nový přepis začne po dokončení aktuálního.

## Čtěte a používejte výsledek

Po dokončení se přepis otevře:

- Kliknutím na segment přehrajete zvuk od tohoto místa.
- Přepínejte mezi **Přepis s časy**, **Prostý text** a **Shrnutí**.
- Pomocí **Přeložit**, **Kopírovat** a **Exportovat** ho přeložíte, zkopírujete nebo uložíte jako soubor.

Vše, co s ním můžete dělat, najdete v části [Přepis](/cs/guides/transcript/).

## Klávesové zkratky

| Zkratka | Akce |
| --- | --- |
| `Ctrl+Enter` / `⌘↩` | Spustit přepis, nebo spustit a zastavit nahrávání |
| `Ctrl+O` / `⌘O` | Vybrat soubor (nebo složku u zdroje Složka) |
| `Ctrl+S` / `⌘S` | Exportovat zobrazený přepis |
| `Ctrl+F` / `⌘F` | Hledat v přepisu |
| `Esc` | Zrušit probíhající přepis |
| `Mezerník` | Přehrát nebo pozastavit zvuk |
| `←` / `→` | Posunout se o 5 sekund zpět nebo vpřed |
