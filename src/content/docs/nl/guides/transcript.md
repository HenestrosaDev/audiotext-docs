---
title: Het transcript
description: Speel een transcriptie af, doorzoek, corrigeer, controleer, kopieer en exporteer hem, en bekijk of exporteer video's met ondertitels.
sidebar:
  order: 3
---

Selecteer een transcriptie in de [geschiedenis](/nl/guides/history/) om hem te openen. De werkbalk wisselt tussen vier modi, **Ondertitels**, **Platte tekst**, **Samenvatting** en **Vragen**, en heeft de knop **Vertalen** en het menu `⋯`.

De transcriptie staat in een kaart met de taal als titel. Met de knoppen in de kop zoek en vervang je erin, kopieer en exporteer je hem en kun je hem **Opnieuw transcriberen** (na bevestiging, want de correcties van de tekst gaan verloren).

## Ondertitels

Toont de transcriptie verdeeld in de ondertitels van de video, met het begin en einde van elke ondertitel en, als de sprekers zijn herkend, de spreker. De lengte volgt de [voorkeuren voor ondertitels](/nl/reference/preferences/#ondertitels).

Standaard worden de tijden tot op de milliseconde getoond, zoals in de ondertitels (`00:01:05,900 – 00:01:09,350`). Om ze te vereenvoudigen (`01:05 – 01:09`), vink je **Nauwkeurige tijdstempels (HH:MM:SS,mmm)** uit in het menu `⋯`.

Boven de ondertitels telt een regel ze en, als de sprekers zijn herkend, ook de sprekers (bijv. `Ondertitels: 120 · Sprekers: 3`). Een lang segment dat over meerdere ondertitels is verdeeld, telt als meerdere.

Tijdstempels zijn alleen beschikbaar met **WhisperX** en met de modellen `whisper-1` en `gpt-4o-transcribe-diarize` van de **Whisper-API**. Zonder tijdstempels kan het transcript niet ondertitel voor ondertitel worden afgespeeld; gebruik dan de modus **Platte tekst**.

### De audio afspelen

- **Klik op een ondertitel** om de audio vanaf daar af te spelen. De ondertitel die wordt afgespeeld, wordt gemarkeerd en in het midden van de tekst gehouden. Met tijden per woord wordt ook elk woord gemarkeerd.
- Gebruik de spelerbalk om af te spelen, te pauzeren, naar elk punt te springen en de **snelheid** te wijzigen, van `0.5×` tot `2×`, met behoud van de toonhoogte van de stemmen.
- Sneltoetsen: `Spatie` speelt af of pauzeert, en `←`/`→` gaan 5 seconden terug of vooruit.

Als het bronbestand is verplaatst of verwijderd, is de audio niet beschikbaar, maar de tekst wel. Microfoonopnamen bewaart Audiotext zelf, die kunnen dus altijd worden afgespeeld.

![Een transcriptie die wordt afgespeeld, met het huidige segment gemarkeerd](/screenshots/transcript.png)

### Video's met ondertitels bekijken

Transcripties van video's tonen de video boven de tekst. Via het menu kun je **Ondertitels op de video weergeven** en hun **Grootte** (klein, middel of groot), **Positie** (onder of boven) en **Stijl** (donkere achtergrond of omlijning) kiezen. Als de transcriptie [vertalingen](/nl/guides/summary-and-translation/#vertaling) heeft, kies je in het menu ook of de ondertitels de **Transcriptie** of de **Vertaling naar het…** van een taal tonen. De knop **Ondertitels** van de spelerbalk toont of verbergt ze ook, en de pijl ernaast opent hetzelfde menu.

## Zoeken en vervangen

Druk op `Ctrl+F` (`⌘F` op macOS), of klik op het vergrootglas in de kop, om het venster te openen om te zoeken en te vervangen in de tekst waaraan je werkt: de transcriptie of de vertaling ervan. Het vindt de tekst terwijl je typt (tijdstempels en sprekers worden niet doorzocht) en toont hoeveel overeenkomsten er zijn.

- `Enter` en `Shift+Enter`, of de pijlen, gaan naar de volgende en vorige overeenkomst.
- **Vervangen** vervangt de huidige overeenkomst, en **Alles vervangen** ze allemaal, bijv. een verkeerd gespelde naam. Vink **Hoofdlettergevoelig** aan om alleen tekst met dezelfde hoofdletters te vinden.
- Het venster is niet modaal, dus je kunt de tekst lezen en afspelen terwijl het open is. **Bovenop houden** houdt het boven het hoofdvenster.
- `Esc` sluit het.

In de modus **Platte tekst** zoekt het venster alleen (**Zoeken in de transcriptie**), omdat een overeenkomst daar niet aan een ondertitel kan worden gekoppeld. Ga terug naar **Ondertitels** om te vervangen.

## De transcriptie corrigeren

Om de transcriptie te corrigeren en de tijdstempels (die de ondertitels en het afspelen gebruiken) te behouden, gebruik je het venster [Zoeken en vervangen](#zoeken-en-vervangen), of klik je met de rechtermuisknop op een ondertitel:

- **Vanaf hier afspelen**: speelt hem af.
- **Kopiëren**: kopieert de tekst.
- **Tekst bewerken…**: wijzigt de tekst.
- **Timing bewerken…**: wijzigt wanneer hij begint en eindigt, tot op de milliseconde. Typ de tijden als `00:01:05,900`, `01:05,9` of `65.9`.
- **Ondertitel erna toevoegen…**: voegt een ontbrekende ondertitel toe, die standaard de ruimte tot de volgende vult. Als de sprekers zijn herkend, kies je wie hem zegt (standaard de spreker van de vorige ondertitel) of typ je een nieuwe. Hij wordt toegevoegd zodra je de tekst schrijft.
- **Spreker wijzigen…**: kiest, als de sprekers zijn herkend, wie hem zegt, of een nieuwe spreker. Anders dan **Sprekers hernoemen…** wijzigt dit alleen deze ondertitel.
- **Sprekers hernoemen…**: geeft elke spreker een naam (`SPEAKER_00` → `Anna`). Als je twee sprekers dezelfde naam geeft, worden ze samengevoegd. Staat ook in het menu `⋯`.
- **Ondertitel verwijderen**: verwijdert hem. Als hij tekst bevat, wordt eerst om bevestiging gevraagd.

Woorden die niet veranderen, behouden hun tijden, dus ze worden tijdens het afspelen nog steeds gemarkeerd. Een ondertitel waarvan je de timing wijzigt, of die je toevoegt, heeft geen woordtijden, dus de woorden worden niet gemarkeerd of onderstreept als onzeker.

## Woorden met lage betrouwbaarheid nakijken

De woorden waarvan de engine het minst zeker is, worden onderstreept, zodat je weet waar je eerst moet nalezen. WhisperX beoordeelt elk woord wanneer het de tijden ervan bepaalt (**Tijden per woord**, standaard aan), en het model `whisper-1` van de Whisper-API beoordeelt elk segment, dus de segmenten daarvan worden in hun geheel onderstreept.

Een balk boven de tekst toont hoeveel woorden nog na te kijken zijn (bijv. `3 van 12 na te kijken`):

- De pijlen, of `Ctrl+J` en `Shift+Ctrl+J` (`⌘J` en `⇧⌘J` op macOS), gaan naar het volgende en vorige woord en zetten de speler daar neer. Met **Automatisch afspelen** wordt elk woord met wat context eromheen afgespeeld.
- `Enter` accepteert het woord waar je naartoe bent gegaan zoals het is, en gaat naar het volgende. **Overige accepteren** accepteert alle resterende woorden, en **Ongedaan maken** maakt de laatste controle ongedaan.
- Klik op een woord om het ter plekke te corrigeren: typ de juiste tekst en druk op `Enter` (of **Accepteren** zonder wijziging). **Opnieuw afspelen** (`Ctrl+R`, `⌘R` op macOS) speelt het nogmaals af, en `Esc` sluit.
- **Alleen gemarkeerd** toont alleen de ondertitels met na te kijken woorden.
- De woorden zijn ook gemarkeerd onder de positie van de audio. Klik op een markering om naar het woord te gaan.

Als alles is nagekeken, haalt **Geaccepteerde woorden opnieuw nakijken** de woorden terug die je hebt geaccepteerd. Gecorrigeerde woorden blijven nagekeken.

De woorden worden onderstreept als hun score lager is dan 40%. Kies een andere drempel, van 20% tot 70%, via `⋯` → **Drempel voor lage betrouwbaarheid**, of via **Drempel aanpassen** in de balk. Om ze niet meer te onderstrepen en de balk te verbergen, vink je **Woorden met lage betrouwbaarheid markeren** uit in het menu `⋯`.

Als een transcriptie geen scores heeft, zegt het menu `⋯` waarom: **Zet „Tijden per woord” aan en transcribeer opnieuw**, **Er is geen uitlijningsmodel voor deze taal**, **Transcribeer opnieuw om de woorden te beoordelen** (hij is gemaakt voordat woorden werden beoordeeld) of **Alleen WhisperX en whisper-1 beoordelen de woorden**.

## Platte tekst

De modus **Platte tekst** toont de tekst van de transcriptie zonder tijdstempels. Die wordt opgebouwd uit de ondertitels en is dus alleen-lezen, zoals de notitie naast de modi zegt: om hem te wijzigen, [corrigeer je de ondertitels](#de-transcriptie-corrigeren), en de platte tekst volgt ze. Zo gebruiken alle exports en vertalingen dezelfde tekst.

Transcripties zonder tijdstempels (bijv. van de Google-API) hebben geen ondertitels, dus hun platte tekst kun je vrij bewerken, zoals in een teksteditor. Wijzigingen worden automatisch opgeslagen.

:::note
In eerdere versies kon je de platte tekst van transcripties met ondertitels bewerken. Wanneer zo'n transcriptie (of vertaling) wordt geopend, wordt de platte tekst opnieuw opgebouwd uit de ondertitels, dus die bewerkingen worden vervangen.
:::

## Kopiëren en exporteren

De kopieerknop in de kop kopieert de tekst van de transcriptie.

De exportknop (of `Ctrl+S`, `⌘S` op macOS) slaat hem op als:

| Formaat | Inhoud |
| --- | --- |
| JSON (`.json`) | De tekst, de segmenten met tijdstempels, woorden en sprekers, en de samenvatting, indien aanwezig |
| Markdown (`.md`) | De samenvatting, indien aanwezig, en de tekst in alinea's met het tijdstempel en de spreker van elke alinea |
| Ondertitels (`.srt`) | Ondertitels voor videospelers |
| Opgemaakte ondertitels (`.ass`) | Ondertitels met een kleur per spreker, voor videospelers en -editors |
| Platte tekst (`.txt`) | De tekst |
| Tabel (`.tsv`) | Eén rij per segment, met begin en einde (in milliseconden) en de tekst |
| Webondertitels (`.vtt`) | Ondertitels voor het web |
| Word-document (`.docx`) | Hetzelfde als Markdown, klaar om te bewerken of af te drukken |

Ondertitels en de tabel vereisen tijdstempels. De [vertalingen](/nl/guides/summary-and-translation/#ondertitels-en-export) en de [samenvatting](/nl/guides/summary-and-translation/#samenvatting) exporteer je vanuit hun eigen panelen.

### De video met ondertitels exporteren

Om een video te delen waar geen ondertitelbestanden kunnen worden geladen (bijv. een sociaal netwerk), kies je **Video met ondertitels (.mp4)…** in het exportmenu van de transcriptie of van een vertaling. Audiotext maakt een kopie van de video met de ondertitels erin getekend, zoals ze in de app worden getoond: met hun grootte, positie en stijl (zie [Video's met ondertitels bekijken](#videos-met-ondertitels-bekijken)).

De kopie wordt op de achtergrond gemaakt, en de status toont de voortgang. Om te annuleren kies je **Stoppen met ondertitels toevoegen aan video** in hetzelfde menu. De kopie is een MP4-bestand (H.264-video en AAC-audio), en de oorspronkelijke video verandert niet.

Als geen enkel lettertype van je systeem bepaalde tekens van de ondertitels bevat, worden ze als vakjes getekend, en Audiotext somt ze aan het einde op. Zie [Probleemoplossing](/nl/help/troubleshooting/#de-video-met-ondertitels-toont-vakjes).

## Hernoemen, labels en notities

De kop van de transcriptie toont de naam, de bron, de datum en het label. Dubbelklik op de naam om hem te hernoemen, klik op het label om het te wijzigen, of klik op **Notitie toevoegen** om er een notitie bij te schrijven. Klik op de notitie, of op het potlood ervan, om hem te bewerken, en op de prullenbak om hem te verwijderen.

Het menu `⋯` heeft deze opties ook, en opent de map van het bronbestand of de **map met opgeslagen bestanden**. Meer opties vind je in de [geschiedenis](/nl/guides/history/).
