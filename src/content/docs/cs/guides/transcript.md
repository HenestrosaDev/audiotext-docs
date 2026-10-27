---
title: Přepis
description: Přehrávejte, prohledávejte, opravujte, kontrolujte, kopírujte a exportujte přepis a sledujte nebo exportujte videa s titulky.
sidebar:
  order: 3
---

Přepis otevřete jeho výběrem v [historii](/cs/guides/history/). Panel nástrojů přepíná mezi čtyřmi režimy, **Titulky**, **Prostý text**, **Shrnutí** a **Zeptat se**, a obsahuje tlačítko **Přeložit** a nabídku `⋯`.

Přepis se zobrazuje na kartě nadepsané jeho jazykem. Tlačítka v jejím záhlaví v něm hledají a nahrazují, kopírují ho, exportují a umožňují ho **Přepsat znovu** (po potvrzení, protože se ztratí opravy textu).

## Titulky

Zobrazuje přepis rozdělený na titulky videa, se začátkem a koncem každého titulku a, pokud byli mluvčí rozpoznáni, s mluvčím. Jejich délka se řídí [předvolbami titulků](/cs/reference/preferences/#titulky).

Časy se ve výchozím nastavení zobrazují s přesností na milisekundy jako v titulcích (`00:01:05,900 – 00:01:09,350`). Chcete-li je zjednodušit (`01:05 – 01:09`), zrušte v nabídce `⋯` zaškrtnutí **Přesné časové značky (HH:MM:SS,mmm)**.

Nad titulky je řádek, který je spočítá, a pokud byli rozpoznáni mluvčí, spočítá i je (např. `Titulky: 120 · Mluvčí: 3`). Dlouhý segment rozdělený do více titulků se počítá jako více titulků.

Časové značky jsou k dispozici jen s **WhisperX** a s modely `whisper-1` a `gpt-4o-transcribe-diarize` **Whisper API**. Bez nich nelze přepis přehrávat titulek po titulku; použijte místo toho režim **Prostý text**.

### Přehrávání zvuku

- **Klikněte na titulek** a zvuk se přehraje od tohoto místa. Přehrávaný titulek se zvýrazní a drží se uprostřed textu. S časováním slov se zvýrazňuje i každé slovo.
- Lišta přehrávače umožňuje přehrávat, pozastavit, přejít na libovolné místo a měnit **rychlost** od `0.5×` do `2×` při zachování výšky hlasu.
- Klávesové zkratky: `Mezerník` přehrává nebo pozastavuje a `←`/`→` posouvají o 5 sekund zpět nebo vpřed.

Pokud byl zdrojový soubor přesunut nebo smazán, zvuk není k dispozici, ale text ano. Nahrávky z mikrofonu si Audiotext uchovává sám, takže je lze přehrát vždy.

![Přehrávaný přepis se zvýrazněným aktuálním segmentem](/screenshots/transcript.png)

### Sledování videí s titulky

Přepisy videí zobrazují video nad textem. Jeho nabídka umožňuje **Zobrazit titulky ve videu** a zvolit jejich **Velikost** (malá, střední nebo velká), **Umístění** (dole nebo nahoře) a **Styl** (tmavé pozadí nebo obrys). Pokud má přepis [překlady](/cs/guides/summary-and-translation/#překlad), nabídka také umožňuje zvolit, zda titulky zobrazí **Přepis**, nebo **Překlad** do některého jazyka. Tlačítko **Titulky** na liště přehrávače je také zobrazí nebo skryje a šipka vedle něj otevře stejnou nabídku.

## Najít a nahradit

Stiskněte `Ctrl+F` (v macOS `⌘F`) nebo klikněte na lupu v záhlaví a otevře se okno pro hledání a nahrazování v textu, se kterým pracujete: v přepisu nebo v jeho překladu. Hledá text už během psaní (časové značky a mluvčí se neprohledávají) a ukazuje počet shod.

- `Enter` a `Shift+Enter` nebo šipky přecházejí na další a předchozí shodu.
- **Nahradit** nahradí aktuální shodu a **Nahradit vše** všechny, např. chybně napsané jméno. Zaškrtnutím **Rozlišovat velikost písmen** najdete jen text se stejnými velkými písmeny.
- Okno není modální, takže můžete text číst a přehrávat, zatímco je otevřené. **Vždy navrchu** ho drží nad hlavním oknem.
- `Esc` ho zavře.

V režimu **Prostý text** okno jen hledá (**Hledat v přepisu**), protože shodu v něm nelze přiřadit k titulku. Pro nahrazování se přepněte zpět na **Titulky**.

## Opravy přepisu

Chcete-li přepis opravit a zachovat časové značky (které používají titulky a přehrávání), použijte okno [Najít a nahradit](#najít-a-nahradit) nebo klikněte pravým tlačítkem na titulek:

- **Přehrát odsud**: přehraje ho.
- **Kopírovat**: zkopíruje jeho text.
- **Upravit text…**: změní jeho text.
- **Upravit časování…**: změní, kdy začíná a končí, s přesností na milisekundu. Časy zadejte jako `00:01:05,900`, `01:05,9` nebo `65.9`.
- **Přidat titulek za…**: přidá chybějící titulek, který ve výchozím nastavení vyplní mezeru do dalšího. Pokud byli rozpoznáni mluvčí, vyberte, kdo ho říká (ve výchozím nastavení mluvčí předchozího titulku), nebo napište nového. Přidá se, jakmile napíšete jeho text.
- **Změnit mluvčího…**: pokud byli rozpoznáni mluvčí, vybere, kdo ho říká, nebo nového mluvčího. Na rozdíl od **Přejmenovat mluvčí…** změní jen tento titulek.
- **Přejmenovat mluvčí…**: dá každému mluvčímu jméno (`SPEAKER_00` → `Anna`). Dva mluvčí se stejným jménem se sloučí. Je i v nabídce `⋯`.
- **Smazat titulek**: smaže ho. Pokud obsahuje text, nejdřív se zeptá.

Slova, která se nezmění, si zachovají časování, takže se při přehrávání dál zvýrazňují. Titulek, kterému změníte časování nebo který přidáte, nemá časování slov, takže se jeho slova nezvýrazňují ani nepodtrhávají jako nejistá.

## Kontrola slov s nízkou jistotou

Slova, kterými si nástroj je nejméně jistý, se podtrhávají, abyste věděli, co zkontrolovat nejdřív. WhisperX hodnotí každé slovo, když určuje jeho časování (**Časování slov**, ve výchozím stavu zapnuto), a model `whisper-1` Whisper API hodnotí každý segment, takže jeho segmenty se podtrhnou celé.

Lišta nad textem ukazuje, kolik slov zbývá zkontrolovat (např. `3 z 12 ke kontrole`):

- Její šipky nebo `Ctrl+J` a `Shift+Ctrl+J` (v macOS `⌘J` a `⇧⌘J`) přecházejí na další a předchozí slovo a posunou na něj přehrávač. S **Automaticky přehrát** se každé slovo přehraje s krátkým okolím.
- `Enter` přijme slovo, na které jste přešli, beze změny a přejde na další. **Přijmout zbývající** přijme všechna zbývající slova a **Zpět** vrátí poslední kontrolu.
- Kliknutím na slovo ho opravíte na místě: napište správný text a stiskněte `Enter` (nebo ho **Přijmout** beze změny). **Přehrát znovu** (`Ctrl+R`, v macOS `⌘R`) ho přehraje znovu a `Esc` zavře.
- **Jen označené** zobrazí jen titulky se slovy ke kontrole.
- Slova jsou označena i pod pozicí zvuku. Kliknutím na značku přejdete na její slovo.

Když jsou všechna zkontrolovaná, **Znovu zkontrolovat přijatá slova** vrátí slova, která jste přijali. Opravená slova zůstávají zkontrolovaná.

Slova se podtrhávají, když je jejich hodnocení nižší než 40 %. Jiný práh od 20 % do 70 % zvolíte v `⋯` → **Práh nízké jistoty** nebo tlačítkem **Upravit práh** na liště. Chcete-li je přestat podtrhávat a lištu skrýt, zrušte v nabídce `⋯` zaškrtnutí **Zvýraznit slova s nízkou jistotou**.

Pokud přepis nemá hodnocení, nabídka `⋯` uvede proč: **Zapněte „Časování slov“ a přepište to znovu**, **Pro jeho jazyk není k dispozici model zarovnání**, **Přepište to znovu, aby se slova ohodnotila** (vznikl dříve, než se slova hodnotila) nebo **Slova hodnotí jen WhisperX a whisper-1**.

## Prostý text

Režim **Prostý text** zobrazuje text přepisu bez časových značek. Skládá se z titulků, takže je jen pro čtení, jak říká poznámka vedle režimů: chcete-li ho změnit, [opravte titulky](#opravy-přepisu) a prostý text se jim přizpůsobí. Všechny exporty a překlady tak používají stejný text.

Přepisy bez časových značek (např. z Google API) titulky nemají, takže jejich prostý text lze volně upravovat jako v textovém editoru. Změny se ukládají automaticky.

:::note
Dřívější verze umožňovaly upravovat prostý text přepisů s titulky. Když se takový přepis (nebo překlad) otevře, jeho prostý text se znovu složí z titulků, takže se tyto úpravy nahradí.
:::

## Kopírování a export

Tlačítko kopírování v záhlaví zkopíruje text přepisu.

Tlačítko exportu (nebo `Ctrl+S`, v macOS `⌘S`) ho uloží jako:

| Formát | Obsah |
| --- | --- |
| Dokument Word (`.docx`) | Totéž co Markdown, připravené k úpravám nebo tisku |
| JSON (`.json`) | Text, segmenty s časovými značkami, slovy a mluvčími a shrnutí, pokud existuje |
| Markdown (`.md`) | Shrnutí, pokud existuje, a text v odstavcích s časovou značkou a mluvčím každého z nich |
| Prostý text (`.txt`) | Text |
| Stylizované titulky (`.ass`) | Titulky s barvou pro každého mluvčího, pro přehrávače a editory videa |
| Tabulka (`.tsv`) | Jeden řádek na segment se začátkem a koncem (v milisekundách) a textem |
| Titulky (`.srt`) | Titulky pro přehrávače videa |
| Webové titulky (`.vtt`) | Titulky pro web |

Titulky a tabulka vyžadují časové značky. [Překlady](/cs/guides/summary-and-translation/#titulky-a-export) a [shrnutí](/cs/guides/summary-and-translation/#shrnutí) se exportují z jejich vlastních panelů.

### Export videa s titulky

Chcete-li video sdílet tam, kde nelze načíst soubory titulků (např. na sociální síti), zvolte v nabídce exportu přepisu nebo překladu **Video s titulky (.mp4)…**. Audiotext vytvoří kopii videa s vykreslenými titulky tak, jak se zobrazují v aplikaci: s jejich velikostí, umístěním a stylem (viz [Sledování videí s titulky](#sledování-videí-s-titulky)).

Kopie se vytváří na pozadí a stav ukazuje průběh. Zrušíte ji volbou **Přestat přidávat titulky do videa** ve stejné nabídce. Kopie je soubor MP4 (video H.264 a zvuk AAC) a původní video se nezmění.

Pokud žádné písmo v systému neobsahuje některé znaky titulků, vykreslí se jako čtverečky a Audiotext je na konci vypíše. Viz [Řešení problémů](/cs/help/troubleshooting/#video-s-titulky-zobrazuje-čtverečky).

## Přejmenování, štítky a poznámky

Záhlaví přepisu zobrazuje jeho název, zdroj, datum a štítek. Dvojitým kliknutím na název ho přejmenujete, kliknutím na štítek ho změníte a kliknutím na **Přidat poznámku** napíšete poznámku. Kliknutím na poznámku nebo na její tužku ji upravíte, kliknutím na její koš ji smažete.

Nabídka `⋯` tyto možnosti také obsahuje a otevírá složku zdrojového souboru nebo **složku uložených souborů**. Další možnosti najdete v [historii](/cs/guides/history/).
