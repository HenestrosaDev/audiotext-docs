---
title: Přepis
description: Přehrávejte, prohledávejte, opravujte, kopírujte a exportujte přepis a sledujte videa s titulky.
sidebar:
  order: 3
---

Přepis otevřete jeho výběrem v [historii](/cs/guides/history/). Panel nástrojů přepíná mezi třemi režimy, **Přepis s časy**, **Prostý text** a **Shrnutí**, a obsahuje tlačítka **Přeložit**, **Kopírovat** a **Exportovat**.

## Přepis s časy

Zobrazuje každou větu s časovou značkou a, pokud byli mluvčí rozpoznáni, s mluvčím.

Časové značky jsou k dispozici jen s **WhisperX** a s modely `whisper-1` a `gpt-4o-transcribe-diarize` **Whisper API**. Bez nich nelze přepis přehrávat větu po větě; použijte místo toho režim **Prostý text**.

### Přehrávání zvuku

- **Klikněte na větu** a zvuk se přehraje od tohoto místa. Přehrávaná věta se zvýrazní a text sleduje přehrávání. S časováním slov se zvýrazňuje i každé slovo.
- Lišta přehrávače umožňuje přehrávat, pozastavit, přejít na libovolné místo a měnit **rychlost** od `0.5×` do `2×` při zachování výšky hlasu.
- Klávesové zkratky: `Mezerník` přehrává nebo pozastavuje a `←`/`→` posouvají o 5 sekund zpět nebo vpřed.

Pokud byl zdrojový soubor přesunut nebo smazán, zvuk není k dispozici, ale text ano. Nahrávky z mikrofonu si Audiotext uchovává sám, takže je lze přehrát vždy.

![Přehrávaný přepis se zvýrazněnou aktuální větou](/screenshots/transcript.png)

### Sledování videí s titulky

Přepisy videí zobrazují video nad textem. Jeho nabídka umožňuje **Zobrazit titulky ve videu** a zvolit jejich **Velikost** (malá, střední nebo velká), **Umístění** (dole nebo nahoře) a **Styl** (tmavé pozadí nebo obrys).

### Hledání

Stiskněte `Ctrl+F` (v macOS `⌘F`) a pište. `Enter` a `Shift+Enter` přecházejí na další a předchozí výskyt, `Esc` hledání vymaže.

## Opravy přepisu

Chcete-li přepis opravit a zachovat časové značky (které používají titulky a přehrávání), použijte možnosti nabídky `⋯` nebo klikněte pravým tlačítkem na větu:

- **Najít a nahradit…**: nahradí slovo nebo frázi v celém přepisu, např. chybně napsané jméno. Před nahrazením ukáže, kolikrát se text vyskytuje, a umí **Rozlišovat velikost písmen**.
- **Přejmenovat mluvčí…**: dá každému mluvčímu jméno (`SPEAKER_00` → `Anna`). Dva mluvčí se stejným jménem se sloučí.
- **Upravit text…**: kliknutím pravým tlačítkem na větu změníte její text.
- **Přehrát odsud**: kliknutím pravým tlačítkem na větu ji přehrajete.

Slova, která se nezmění, si zachovají časování, takže se při přehrávání dál zvýrazňují.

## Prostý text

Režim **Prostý text** umožňuje text volně upravovat jako v textovém editoru. Změny se ukládají automaticky. Přepis s časy si zachovává původní text s časovými značkami, takže titulky úpravy prostého textu nepoužívají.

## Kopírování a export

**Kopírovat** zkopíruje text aktuálního režimu (přepis, shrnutí nebo překlad).

**Exportovat** (nebo `Ctrl+S`, v macOS `⌘S`) uloží přepis jako:

| Formát | Obsah |
| --- | --- |
| Prostý text (`.txt`) | Text |
| Markdown (`.md`) | Shrnutí, pokud existuje, a text v odstavcích s časovou značkou a mluvčím každého z nich |
| Dokument Word (`.docx`) | Totéž co Markdown, připravené k úpravám nebo tisku |
| Titulky (`.srt`) | Titulky pro přehrávače videa |
| Webové titulky (`.vtt`) | Titulky pro web |
| Tabulka (`.tsv`) | Jeden řádek na větu se začátkem a koncem (v milisekundách) a textem |
| JSON (`.json`) | Text, segmenty s časovými značkami, slovy a mluvčími a shrnutí, pokud existuje |

Titulky a tabulka vyžadují časové značky.

## Přejmenování, štítky a poznámky

Záhlaví přepisu zobrazuje jeho název, zdroj, datum a štítek. Dvojitým kliknutím na název ho přejmenujete, kliknutím na štítek ho změníte a kliknutím na **Přidat poznámku** napíšete poznámku. Další možnosti najdete v [historii](/cs/guides/history/).
