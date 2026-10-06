---
title: Přepis
description: Přehrávejte, prohledávejte, opravujte, kopírujte a exportujte přepis a sledujte videa s titulky.
sidebar:
  order: 3
---

Přepis otevřete jeho výběrem v [historii](/cs/guides/history/). Panel nástrojů přepíná mezi třemi režimy, **Přepis s časy**, **Prostý text** a **Shrnutí**, a obsahuje tlačítka **Přeložit**, **Kopírovat** a **Exportovat**.

## Přepis s časy

Zobrazuje každý segment přepisu (větu nebo část dlouhé věty) s jeho začátkem a koncem a, pokud byli mluvčí rozpoznáni, s mluvčím.

Časy se ve výchozím nastavení zobrazují zjednodušeně (`01:05 – 01:09`). Chcete-li je vidět s přesností na milisekundy jako v titulcích (`00:01:05,900 – 00:01:09,350`), zaškrtněte v nabídce `⋯` možnost **Přesné časové značky (00:00:01,000)**.

Časové značky jsou k dispozici jen s **WhisperX** a s modely `whisper-1` a `gpt-4o-transcribe-diarize` **Whisper API**. Bez nich nelze přepis přehrávat segment po segmentu; použijte místo toho režim **Prostý text**.

### Přehrávání zvuku

- **Klikněte na segment** a zvuk se přehraje od tohoto místa. Přehrávaný segment se zvýrazní a text sleduje přehrávání. S časováním slov se zvýrazňuje i každé slovo.
- Lišta přehrávače umožňuje přehrávat, pozastavit, přejít na libovolné místo a měnit **rychlost** od `0.5×` do `2×` při zachování výšky hlasu.
- Klávesové zkratky: `Mezerník` přehrává nebo pozastavuje a `←`/`→` posouvají o 5 sekund zpět nebo vpřed.

Pokud byl zdrojový soubor přesunut nebo smazán, zvuk není k dispozici, ale text ano. Nahrávky z mikrofonu si Audiotext uchovává sám, takže je lze přehrát vždy.

![Přehrávaný přepis se zvýrazněným aktuálním segmentem](/screenshots/transcript.png)

### Sledování videí s titulky

Přepisy videí zobrazují video nad textem. Jeho nabídka umožňuje **Zobrazit titulky ve videu** a zvolit jejich **Velikost** (malá, střední nebo velká), **Umístění** (dole nebo nahoře) a **Styl** (tmavé pozadí nebo obrys). Pokud má přepis [překlad](/cs/guides/summary-and-translation/#překlad), nabídka také umožňuje zvolit, zda titulky zobrazí **Přepis**, nebo **Překlad**.

### Hledání

Stiskněte `Ctrl+F` (v macOS `⌘F`) a pište. `Enter` a `Shift+Enter` přecházejí na další a předchozí výskyt, `Esc` hledání vymaže.

## Opravy přepisu

Chcete-li přepis opravit a zachovat časové značky (které používají titulky a přehrávání), použijte možnosti nabídky `⋯` nebo klikněte pravým tlačítkem na segment:

- **Najít a nahradit…**: nahradí slovo nebo frázi v celém přepisu, např. chybně napsané jméno. Před nahrazením ukáže, kolikrát se text vyskytuje, a umí **Rozlišovat velikost písmen**.
- **Přejmenovat mluvčí…**: dá každému mluvčímu jméno (`SPEAKER_00` → `Anna`). Dva mluvčí se stejným jménem se sloučí.
- **Upravit text…**: kliknutím pravým tlačítkem na segment změníte jeho text.
- **Přehrát odsud**: kliknutím pravým tlačítkem na segment ho přehrajete.

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
| Tabulka (`.tsv`) | Jeden řádek na segment se začátkem a koncem (v milisekundách) a textem |
| JSON (`.json`) | Text, segmenty s časovými značkami, slovy a mluvčími a shrnutí, pokud existuje |

Titulky a tabulka vyžadují časové značky.

Pokud má přepis překlad, zvolte ve stejné nabídce **Překlad** (nebo klikněte na tlačítko exportu překladu) a překlad se exportuje ve stejných formátech. Název souboru obsahuje jeho jazyk (např. `video.es.srt`), takže ho přehrávače videa načtou spolu s videem.

## Přejmenování, štítky a poznámky

Záhlaví přepisu zobrazuje jeho název, zdroj, datum a štítek. Dvojitým kliknutím na název ho přejmenujete, kliknutím na štítek ho změníte a kliknutím na **Přidat poznámku** napíšete poznámku. Kliknutím na poznámku nebo na její tužku ji upravíte, kliknutím na její koš ji smažete. Další možnosti najdete v [historii](/cs/guides/history/).
