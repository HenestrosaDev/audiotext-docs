---
title: Het transcript
description: Speel een transcriptie af, doorzoek, corrigeer, kopieer en exporteer hem, en bekijk video's met ondertitels.
sidebar:
  order: 3
---

Selecteer een transcriptie in de [geschiedenis](/nl/guides/history/) om hem te openen. De werkbalk wisselt tussen drie modi, **Transcript**, **Platte tekst** en **Samenvatting**, en heeft de knoppen **Vertalen**, **Kopiëren** en **Exporteren**.

## Transcript

Toont elk segment van de transcriptie (een zin, of een deel van een lange zin) met het begin en het einde en, als de sprekers zijn herkend, de spreker.

Standaard worden de tijden vereenvoudigd getoond (`01:05 – 01:09`). Om ze tot op de milliseconde te zien, zoals in de ondertitels (`00:01:05,900 – 00:01:09,350`), vink je **Nauwkeurige tijdstempels (00:00:01,000)** aan in het menu `⋯`.

Tijdstempels zijn alleen beschikbaar met **WhisperX** en met de modellen `whisper-1` en `gpt-4o-transcribe-diarize` van de **Whisper-API**. Zonder tijdstempels kan het transcript niet segment voor segment worden afgespeeld; gebruik dan de modus **Platte tekst**.

### De audio afspelen

- **Klik op een segment** om de audio vanaf daar af te spelen. Het segment dat wordt afgespeeld, wordt gemarkeerd en de tekst volgt het afspelen. Met tijden per woord wordt ook elk woord gemarkeerd.
- Gebruik de spelerbalk om af te spelen, te pauzeren, naar elk punt te springen en de **snelheid** te wijzigen, van `0.5×` tot `2×`, met behoud van de toonhoogte van de stemmen.
- Sneltoetsen: `Spatie` speelt af of pauzeert, en `←`/`→` gaan 5 seconden terug of vooruit.

Als het bronbestand is verplaatst of verwijderd, is de audio niet beschikbaar, maar de tekst wel. Microfoonopnamen bewaart Audiotext zelf, die kunnen dus altijd worden afgespeeld.

![Een transcriptie die wordt afgespeeld, met het huidige segment gemarkeerd](/screenshots/transcript.png)

### Video's met ondertitels bekijken

Transcripties van video's tonen de video boven de tekst. Via het menu kun je **Ondertitels op de video weergeven** en hun **Grootte** (klein, middel of groot), **Positie** (onder of boven) en **Stijl** (donkere achtergrond of omlijning) kiezen. Als de transcriptie een [vertaling](/nl/guides/summary-and-translation/#vertaling) heeft, kies je in het menu ook of de ondertitels de **Transcriptie** of de **Vertaling naar het…** tonen.

### Zoeken

Druk op `Ctrl+F` (`⌘F` op macOS) en typ. `Enter` en `Shift+Enter` gaan naar de volgende en vorige overeenkomst, en `Esc` wist de zoekopdracht.

## De transcriptie corrigeren

Om de transcriptie te corrigeren en de tijdstempels (die de ondertitels en het afspelen gebruiken) te behouden, gebruik je de opties van het menu `⋯`, of klik je met de rechtermuisknop op een segment:

- **Zoeken en vervangen…**: vervangt een woord of zinsdeel in de hele transcriptie, bijv. een verkeerd gespelde naam. Toont vóór het vervangen hoe vaak de tekst voorkomt, en kan **Hoofdlettergevoelig** zoeken.
- **Sprekers hernoemen…**: geeft elke spreker een naam (`SPEAKER_00` → `Anna`). Als je twee sprekers dezelfde naam geeft, worden ze samengevoegd.
- **Tekst bewerken…**: klik met de rechtermuisknop op een segment om de tekst te wijzigen.
- **Vanaf hier afspelen**: klik met de rechtermuisknop op een segment om het af te spelen.

Woorden die niet veranderen, behouden hun tijden, dus ze worden tijdens het afspelen nog steeds gemarkeerd.

## Platte tekst

In de modus **Platte tekst** kun je de tekst vrij bewerken, zoals in een teksteditor. Wijzigingen worden automatisch opgeslagen. Het transcript behoudt de oorspronkelijke tekst met tijdstempels, dus de ondertitels gebruiken de bewerkingen van de platte tekst niet.

## Kopiëren en exporteren

**Kopiëren** kopieert de tekst van de huidige modus (het transcript, de samenvatting of de vertaling).

**Exporteren** (of `Ctrl+S`, `⌘S` op macOS) slaat de transcriptie op als:

| Formaat | Inhoud |
| --- | --- |
| Platte tekst (`.txt`) | De tekst |
| Markdown (`.md`) | De samenvatting, indien aanwezig, en de tekst in alinea's met het tijdstempel en de spreker van elke alinea |
| Word-document (`.docx`) | Hetzelfde als Markdown, klaar om te bewerken of af te drukken |
| Ondertitels (`.srt`) | Ondertitels voor videospelers |
| Webondertitels (`.vtt`) | Ondertitels voor het web |
| Tabel (`.tsv`) | Eén rij per segment, met begin en einde (in milliseconden) en de tekst |
| JSON (`.json`) | De tekst, de segmenten met tijdstempels, woorden en sprekers, en de samenvatting, indien aanwezig |

Ondertitels en de tabel vereisen tijdstempels.

Als de transcriptie een vertaling heeft, kies je **Vertaling naar het…** in hetzelfde menu (of klik je op de exportknop van de vertaling) om de vertaling in dezelfde formaten te exporteren. De bestandsnaam bevat de taal (bijv. `video.es.srt`), zodat videospelers de vertaling met de video laden.

## Hernoemen, labels en notities

De kop van de transcriptie toont de naam, de bron, de datum en het label. Dubbelklik op de naam om hem te hernoemen, klik op het label om het te wijzigen, of klik op **Notitie toevoegen** om er een notitie bij te schrijven. Klik op de notitie, of op het potlood ervan, om hem te bewerken, en op de prullenbak om hem te verwijderen. Meer opties vind je in de [geschiedenis](/nl/guides/history/).
