---
title: Zdroje zvuku
description: Přepisujte soubory, videa z YouTube a odkazy, nahrávky z mikrofonu, složky a sledované složky.
sidebar:
  order: 1
---

Audiotext přepisuje ze čtyř druhů zdrojů, které vybíráte v horní liště v části **Nový přepis**.

## Soubor

Přepíše zvukový nebo video soubor. Klikněte na **Vybrat soubor…** nebo soubor přetáhněte do okna. Dialog pro výběr souborů ve výchozím stavu zobrazuje **Všechny podporované soubory**; můžete zobrazit jen **Zvukové soubory** nebo **Video soubory**. Podporované formáty najdete v části [Formáty a jazyky](/cs/reference/formats-and-languages/).

Najednou lze přidat jen jeden soubor. Chcete-li přepsat více souborů, použijte zdroj [Složka](#složka).

## URL

Přepíše **video z YouTube** nebo **přímý odkaz na zvukový nebo video soubor** (například díl podcastu). Vložte URL (tlačítkem **Vložit** nebo `Ctrl+V`) a klikněte na **Pokračovat**. URL musí začínat `http://` nebo `https://`.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

Nejprve se stáhne zvuk, takže je potřeba připojení k internetu.

## Mikrofon

Nahraje váš hlas nebo schůzku a přepíše je. Nahrávka zůstane v historii, takže ji můžete později přehrát.

1. Vyberte mikrofon v seznamu (pokud jste ho právě připojili, klikněte na tlačítko obnovení).
2. Kliknutím na tlačítko nahrávání (nebo stisknutím `Ctrl+Enter`, v macOS `⌘↩`) začnete nahrávat. Měřič úrovně ukazuje, zda je zvuk **Příliš tichý**, má **Dobrou úroveň**, nebo je **Příliš hlasitý**.
3. Dalším kliknutím nahrávání zastavíte a přepíšete.

### Živý text

S **WhisperX** zapněte na kartě **Živý text** volbu **Zobrazovat text během nahrávání** a uvidíte koncept textu už při mluvení. Koncept píše rychlý **Živý model** (výchozí `small`). Po zastavení se celá nahrávka znovu přepíše přesnějším modelem nástroje a koncept se nahradí.

![Živý text během nahrávání z mikrofonu](/screenshots/live-text.png)

:::caution
Systém musí rozpoznat vstupní zařízení a povolit ho aplikaci. Jinak se zobrazí **Nebyl nalezen žádný mikrofon**. V macOS povolte Audiotextu přístup v **Nastavení systému** → **Soukromí a zabezpečení** → **Mikrofon**.
:::

### Nahrávání zvuku počítače

Chcete-li přepsat to, co počítač přehrává (videohovor, webinář, video, které nelze stáhnout), nahrajte to ze zařízení, které posílá zvuk reproduktorů na vstup. Nastavte ho jednou, klikněte na tlačítko obnovení a vyberte ho v seznamu mikrofonů. Nahraje se vše, co počítač přehrává, včetně oznámení, ale ne váš hlas.

- **Windows**: spusťte `mmsys.cpl`, na kartě **Záznam** klikněte pravým tlačítkem do seznamu, aby se zobrazila zakázaná zařízení, a povolte **Stereo Mix**. Pokud ho vaše zvuková karta nemá, nainstalujte [VB-CABLE](https://vb-audio.com/Cable/), nastavte **CABLE Input** jako výstupní zařízení a v Audiotextu vyberte **CABLE Output**. Abyste zvuk dál slyšeli, zaškrtněte ve vlastnostech **CABLE Output** možnost **Poslouchat toto zařízení**.
- **macOS**: nainstalujte [BlackHole](https://existential.audio/blackhole/) (`brew install blackhole-2ch`) a v Audiotextu vyberte **BlackHole 2ch**. Abyste zvuk dál slyšeli, vytvořte [zařízení s více výstupy](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) s reproduktory a BlackHole a nastavte ho jako výstupní zařízení.
- **Linux** (PulseAudio nebo PipeWire): v Audiotextu vyberte **pulse** a začněte nahrávat. Potom na kartě **Nahrávání** v `pavucontrol` změňte zdroj Audiotextu na monitor reproduktorů.

## Složka

Přepíše všechny zvukové a video soubory složky a, pokud je na kartě **Složka** zapnuto **Zahrnout podsložky**, i jejích podsložek. Klikněte na **Vybrat složku…** nebo složku přetáhněte do okna. Audiotext vám řekne, kolik souborů našel. Chcete-li některé soubory vynechat, napište jejich názvy nebo cesty oddělené čárkami do pole **Přeskočit soubory odpovídající** (např. `*.wav, drafts/*`). Skryté soubory se vynechávají vždy.

Přepis každého souboru se uloží vedle něj (nebo do jiné složky, kterou vyberete na kartě **Výstup**), se stejným názvem a příponou každého vybraného **typu souboru**. Například s `.txt` a `.vtt`:

```text
files-to-transcribe
├── paranoid-android.mp3
├── paranoid-android.txt
├── paranoid-android.vtt
└── movies
    ├── mulholland-dr.avi
    ├── mulholland-dr.txt
    └── mulholland-dr.vtt
```

Pokud mají dva soubory stejný název a jinou příponu (např. `talk.mp3` a `talk.mp4`), jejich přepisy si ponechají příponu v názvu (`talk.mp3.txt` a `talk.mp4.txt`), aby se navzájem nepřepsaly.

Soubory, které už mají přepis, se **přeskočí**: soubor se přeskočí, jen pokud má všechny typy souborů, které jste vybrali, takže přidáním typu souboru se přepíše znovu. Pokud soubor nelze přepsat, ostatní se přepisují dál.

### Soubory složky

Stránka složky v historii uvádí její soubory se stavem, délkou a velikostí každého z nich a s náhledem jeho textu. Můžete je hledat, filtrovat podle stavu (**Vše**, **Hotové**, **Selhalé** nebo **Čekající**) a řadit podle názvu, stavu, délky nebo velikosti. Soubory, které byly přesunuty nebo smazány, se označí jako **Soubor nebyl nalezen**.

- Kliknutím na soubor otevřete jeho přepis. Kliknutím na jeho tlačítko `⋯` (nebo pravým tlačítkem) můžete zkopírovat jeho text, otevřít ho rovnou v exportu, shrnutí nebo překladu, zobrazit ho ve správci souborů nebo zvolit **Přepsat tento soubor znovu**.
- Vyberte více souborů pomocí `Ctrl`/`⌘` nebo `Shift`, nebo všechny zobrazené soubory pomocí `Ctrl+A` / `⌘A`, a zvolte **Přepsat znovu**, **Exportovat…** (společně do jednoho souboru TXT, Markdown nebo Word) nebo **Odebrat z historie…**. `Enter` otevře vybraný soubor a `Esc` zruší výběr.
- **Zkusit neúspěšné znovu** znovu přepíše soubory, které selhaly. **Znovu prohledat složku** přepíše jen soubory bez přepisu, například nové, a řekne, kolik jich bylo přeskočeno, protože už přepis měly.
- Nabídka `⋯` složky nabízí **Přepsat vše znovu…** (přepíše znovu všechny její soubory a nahradí jejich přepisy), **Exportovat vše…** (do jednoho souboru), odebrání chybějících souborů ze seznamu a otevření zdrojové složky nebo složky uložených souborů.
- Když změníte nastavení složky, zobrazí se soubory přepsané s jiným nastavením (modul, model, jazyk…) s tlačítkem **Přepsat je znovu**.

Záhlaví ukazuje, kam se soubory ukládají, a odkazuje na zdrojovou složku. **Upravit nastavení** mění nastavení složky a **Uložit a znovu prohledat** s ním přepíše soubory, kterým chybí přepis.

### Sledování složky

Zapněte **Sledovat složku** na kartě **Složka**, aby se soubory přidávané do složky (nebo jejích podsložek) přepisovaly, dokud nekliknete na **Zastavit sledování**. Hodí se to pro nahrávky z diktafonu nebo nástroje pro schůzky, které se kopírují do složky.

- Soubory, které složka už obsahuje, se přeskočí, pokud nezapnete **Přepsat soubory, které už ve složce jsou**: pak se nejprve přepíší ty, které ještě nemají přepis.
- Soubor se přepíše, až je zcela zkopírovaný (když se jeho velikost přestane měnit), takže velké soubory se nepřepisují napůl.
- Složky, které se sledovaly při zavření Audiotextu, se po jeho otevření sledují znovu a pokračuje se od souborů, které už viděly. Zastavené složky lze znovu sledovat pomocí **Pokračovat ve sledování**.
- Pokud složka není dostupná (např. je na disku, který není připojený), Audiotext na ni počká, místo aby selhal.
- Kvůli přepisu něčeho jiného nebo nahrávání se složka pozastaví (nový přepis ukazuje **Spouštění…**, dokud se to nestane) a poté se znovu sleduje.
- Chyby sledování nezastaví a soubory přepsané společně se oznámí jedním oznámením.

## Fronta

Nový přepis můžete nastavit, i když jiný probíhá: tlačítko se změní na **Přidat do fronty** a přepis začne po dokončení aktuálního. Přepisy ve frontě a probíhající přepisy se zobrazují v historii.
