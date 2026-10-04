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

## Složka

Přepíše všechny zvukové a video soubory ve složce **a jejích podsložkách**. Klikněte na **Vybrat složku…** nebo složku přetáhněte do okna. Audiotext ukáže, kolik souborů našel.

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

Soubory, které už přepis mají, se **přeskočí**, pokud nezapnete **Přepsat existující soubory**. Když tedy do složky přidáte soubor a přepíšete ji znovu, přepíše se jen nový soubor.

Pokud některý soubor přepsat nelze, ostatní se přepíšou i tak a zobrazení složky ukáže, které selhaly a proč. **Přepsat znovu** zopakuje složku a tlačítko složky otevře složku s uloženými soubory.

### Sledování složky

Zapněte **Sledovat složku** na kartě **Složka**, aby se soubory přidávané do složky (nebo jejích podsložek) přepisovaly, dokud nekliknete na **Zastavit sledování**. Hodí se to pro nahrávky z diktafonu nebo nástroje pro schůzky, které se kopírují do složky.

- Soubory, které už ve složce jsou, se přeskočí. Chcete-li je přepsat, přepište složku bez sledování.
- Soubor se přepíše, až je zcela zkopírovaný (když se jeho velikost přestane měnit), takže velké soubory se nepřepisují napůl.
- Chyby sledování nezastaví.

## Fronta

Nový přepis můžete nastavit, i když jiný probíhá: tlačítko se změní na **Přidat do fronty** a přepis začne po dokončení aktuálního. Přepisy ve frontě a probíhající přepisy se zobrazují v historii.
