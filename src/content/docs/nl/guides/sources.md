---
title: Audiobronnen
description: Transcribeer bestanden, YouTube-video's en links, microfoonopnamen, mappen en bewaakte mappen.
sidebar:
  order: 1
---

Audiotext transcribeert vanuit vier soorten bronnen, die je in de bovenbalk kiest bij **Nieuwe transcriptie**.

## Bestand

Transcribeert een audio- of videobestand. Klik op **Bestand kiezen…** of sleep het bestand naar het venster. De bestandskiezer toont standaard **Alle ondersteunde bestanden**; je kunt ook alleen **Audiobestanden** of **Videobestanden** tonen. Zie [Formaten en talen](/nl/reference/formats-and-languages/) voor de ondersteunde formaten.

Je kunt maar één bestand tegelijk toevoegen. Gebruik de bron [Map](#map) om meerdere bestanden te transcriberen.

## URL

Transcribeert een **YouTube-video** of een **directe link naar een audio- of videobestand** (bijvoorbeeld een aflevering van een podcast). Plak de URL (met **Plakken** of `Ctrl+V`) en klik op **Doorgaan**. De URL moet beginnen met `http://` of `https://`.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

Eerst wordt de audio gedownload, dus er is een internetverbinding nodig.

## Microfoon

Neemt je stem of een vergadering op en transcribeert die. De opname blijft in je geschiedenis bewaard, zodat je hem later kunt afspelen.

1. Kies de microfoon in de lijst (klik op de vernieuwknop als je hem net hebt aangesloten).
2. Klik op de opnameknop (of druk op `Ctrl+Enter`, `⌘↩` op macOS) om de opname te starten. De niveaumeter laat zien of het geluid **Te zacht** is, een **Goed niveau** heeft of **Te luid** is.
3. Klik er nogmaals op om te stoppen en te transcriberen.

### Livetekst

Zet met **WhisperX** **Tekst weergeven tijdens opname** aan op de kaart **Livetekst** om een concept van de tekst te zien terwijl je praat. Het concept wordt geschreven door een snel **Livemodel** (standaard `small`). Als je stopt, wordt de hele opname opnieuw getranscribeerd met het nauwkeurigere model van de engine en wordt het concept vervangen.

![De live tekst tijdens het opnemen met de microfoon](/screenshots/live-text.png)

:::caution
Je systeem moet een invoerapparaat herkennen en de app toestaan het te gebruiken. Anders wordt **Geen microfoon gevonden** getoond. Sta Audiotext op macOS toe bij **Systeeminstellingen** → **Privacy en beveiliging** → **Microfoon**.
:::

## Map

Transcribeert alle audio- en videobestanden van een map **en de submappen ervan**. Klik op **Map kiezen…** of sleep de map naar het venster. Audiotext laat zien hoeveel bestanden het heeft gevonden.

De transcriptie van elk bestand wordt ernaast opgeslagen (of in een andere map die je kiest op de kaart **Uitvoer**), met dezelfde naam en de extensie van elk gekozen **bestandstype**. Bijvoorbeeld met `.txt` en `.vtt`:

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

Bestanden die al een transcriptie hebben, worden **overgeslagen**, tenzij je **Bestaande bestanden overschrijven** aanzet. Als je dus een bestand aan de map toevoegt en hem opnieuw transcribeert, wordt alleen het nieuwe bestand getranscribeerd.

Als een bestand niet getranscribeerd kan worden, worden de andere toch getranscribeerd, en de mapweergave toont welke zijn mislukt en waarom. **Opnieuw transcriberen** herhaalt de map, en de mapknop opent de map met de opgeslagen bestanden.

### Een map bewaken

Zet **Map bewaken** aan op de kaart **Map** om de bestanden die aan de map (of de submappen) worden toegevoegd te blijven transcriberen, totdat je op **Stoppen met bewaken** klikt. Handig voor opnamen van een dictafoon of een vergadertool die naar een map worden gekopieerd.

- Bestanden die al in de map staan, worden overgeslagen. Transcribeer de map zonder te bewaken om ze te transcriberen.
- Een bestand wordt getranscribeerd zodra het volledig is gekopieerd (als de grootte niet meer verandert), dus grote bestanden worden niet half getranscribeerd.
- Fouten stoppen het bewaken niet.

## De wachtrij

Je kunt een nieuwe transcriptie instellen terwijl er een andere bezig is: de knop wordt **Toevoegen aan wachtrij**, en hij start zodra de huidige klaar is. Transcripties in de wachtrij en lopende transcripties worden in de geschiedenis getoond.
