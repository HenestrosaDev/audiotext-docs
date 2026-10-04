---
title: Het transcript
description: Speel een transcriptie af, doorzoek, corrigeer, kopieer en exporteer hem, en bekijk video's met ondertitels.
sidebar:
  order: 3
---

Selecteer een transcriptie in de [geschiedenis](/nl/guides/history/) om hem te openen. De werkbalk wisselt tussen drie modi, **Transcript**, **Platte tekst** en **Samenvatting**, en heeft de knoppen **Vertalen**, **Kopiëren** en **Exporteren**.

## Transcript

Toont elke zin met zijn tijdstempel en, als de sprekers zijn herkend, de spreker.

Tijdstempels zijn alleen beschikbaar met **WhisperX** en met de modellen `whisper-1` en `gpt-4o-transcribe-diarize` van de **Whisper-API**. Zonder tijdstempels kan het transcript niet zin voor zin worden afgespeeld; gebruik dan de modus **Platte tekst**.

### De audio afspelen

- **Klik op een zin** om de audio vanaf daar af te spelen. De zin die wordt afgespeeld, wordt gemarkeerd en de tekst volgt het afspelen. Met tijden per woord wordt ook elk woord gemarkeerd.
- Gebruik de spelerbalk om af te spelen, te pauzeren, naar elk punt te springen en de **snelheid** te wijzigen, van `0.5×` tot `2×`, met behoud van de toonhoogte van de stemmen.
- Sneltoetsen: `Spatie` speelt af of pauzeert, en `←`/`→` gaan 5 seconden terug of vooruit.

Als het bronbestand is verplaatst of verwijderd, is de audio niet beschikbaar, maar de tekst wel. Microfoonopnamen bewaart Audiotext zelf, die kunnen dus altijd worden afgespeeld.

![Een transcriptie die wordt afgespeeld, met de huidige zin gemarkeerd](/screenshots/transcript.png)

### Video's met ondertitels bekijken

Transcripties van video's tonen de video boven de tekst. Via het menu kun je **Ondertitels op de video weergeven** en hun **Grootte** (klein, middel of groot), **Positie** (onder of boven) en **Stijl** (donkere achtergrond of omlijning) kiezen.

### Zoeken

Druk op `Ctrl+F` (`⌘F` op macOS) en typ. `Enter` en `Shift+Enter` gaan naar de volgende en vorige overeenkomst, en `Esc` wist de zoekopdracht.

## De transcriptie corrigeren

Om de transcriptie te corrigeren en de tijdstempels (die de ondertitels en het afspelen gebruiken) te behouden, gebruik je de opties van het menu `⋯`, of klik je met de rechtermuisknop op een zin:

- **Zoeken en vervangen…**: vervangt een woord of zinsdeel in de hele transcriptie, bijv. een verkeerd gespelde naam. Toont vóór het vervangen hoe vaak de tekst voorkomt, en kan **Hoofdlettergevoelig** zoeken.
- **Sprekers hernoemen…**: geeft elke spreker een naam (`SPEAKER_00` → `Anna`). Als je twee sprekers dezelfde naam geeft, worden ze samengevoegd.
- **Tekst bewerken…**: klik met de rechtermuisknop op een zin om de tekst te wijzigen.
- **Vanaf hier afspelen**: klik met de rechtermuisknop op een zin om hem af te spelen.

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
| Tabel (`.tsv`) | Eén rij per zin, met begin en einde (in milliseconden) en de tekst |
| JSON (`.json`) | De tekst, de segmenten met tijdstempels, woorden en sprekers, en de samenvatting, indien aanwezig |

Ondertitels en de tabel vereisen tijdstempels.

## Hernoemen, labels en notities

De kop van de transcriptie toont de naam, de bron, de datum en het label. Dubbelklik op de naam om hem te hernoemen, klik op het label om het te wijzigen, of klik op **Notitie toevoegen** om er een notitie bij te schrijven. Meer opties vind je in de [geschiedenis](/nl/guides/history/).
