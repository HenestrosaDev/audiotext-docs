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

### Het geluid van je computer opnemen

Om te transcriberen wat je computer afspeelt (een videogesprek, een webinar, een video die niet te downloaden is), neem je het op vanaf een apparaat dat het geluid van de luidsprekers naar een ingang stuurt. Stel het één keer in, klik op de vernieuwknop en kies het in de lijst met microfoons. Alles wat de computer afspeelt wordt opgenomen, ook meldingen, maar niet je stem.

- **Windows**: voer `mmsys.cpl` uit, klik op het tabblad **Opnemen** met de rechtermuisknop in de lijst om de uitgeschakelde apparaten te tonen en schakel **Stereomix** in. Heeft je geluidskaart dat niet, installeer dan [VB-CABLE](https://vb-audio.com/Cable/), stel **CABLE Input** in als uitvoerapparaat en kies **CABLE Output** in Audiotext. Om het geluid te blijven horen, vink je **Naar dit apparaat luisteren** aan in de eigenschappen van **CABLE Output**.
- **macOS**: installeer [BlackHole](https://existential.audio/blackhole/) (`brew install blackhole-2ch`) en kies **BlackHole 2ch** in Audiotext. Om het geluid te blijven horen, maak je een [apparaat met meerdere uitgangen](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) met je luidsprekers en BlackHole, en stel je het in als uitvoerapparaat.
- **Linux** (PulseAudio of PipeWire): kies **pulse** in Audiotext en start de opname. Wijzig daarna op het tabblad **Opnemen** van `pavucontrol` de bron van Audiotext in de monitor van je luidsprekers.

## Map

Transcribeert alle audio- en videobestanden van een map en, als **Submappen opnemen** aan staat op de kaart **Map**, van de submappen. Klik op **Map kiezen…** of zet de map neer in het venster. Audiotext laat zien hoeveel bestanden het heeft gevonden. Om bestanden over te slaan, typ je hun namen of paden, gescheiden door komma's, in **Bestanden overslaan die overeenkomen met** (bijv. `*.wav, drafts/*`). Verborgen bestanden worden altijd overgeslagen.

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

Als twee bestanden dezelfde naam en een andere extensie hebben (bijv. `talk.mp3` en `talk.mp4`), houden hun transcripties de extensie in de naam (`talk.mp3.txt` en `talk.mp4.txt`), zodat ze elkaar niet vervangen.

Bestanden die al een transcriptie hebben, worden **overgeslagen**: een bestand wordt alleen overgeslagen als het alle gekozen bestandstypen heeft, dus als je een bestandstype toevoegt, wordt het opnieuw getranscribeerd. Als een bestand niet getranscribeerd kan worden, worden de andere toch getranscribeerd.

### De bestanden van een map

De pagina van een map in de geschiedenis toont de bestanden, elk met de status, duur, grootte en een voorbeeld van de tekst. Doorzoek ze, filter ze op status (**Alle**, **Klaar**, **Mislukt** of **In afwachting**) en sorteer ze op naam, status, duur of grootte. Bestanden die zijn verplaatst of verwijderd, worden gemarkeerd als **Bestand niet gevonden**.

- Klik op een bestand om de transcriptie te openen, of klik op de knop `⋯` ervan (of klik er met de rechtermuisknop op) om de tekst te kopiëren, het direct te openen in de export, samenvatting of vertaling, het te tonen in de bestandsbeheerder of **Dit bestand opnieuw transcriberen** te kiezen.
- Selecteer meerdere bestanden met `Ctrl`/`⌘` of `Shift`, of alle getoonde bestanden met `Ctrl+A` / `⌘A`, en kies **Opnieuw transcriberen**, **Exporteren…** (om ze samen naar één TXT-, Markdown- of Word-bestand te exporteren) of **Uit de geschiedenis verwijderen…**. `Enter` opent het geselecteerde bestand, en `Esc` wist de selectie.
- **Mislukte opnieuw proberen** transcribeert de mislukte bestanden opnieuw. **Map opnieuw scannen** transcribeert alleen de bestanden zonder transcriptie, zoals de nieuwe, en laat zien hoeveel er zijn overgeslagen omdat ze er al een hadden.
- Met het menu `⋯` van de map kun je **Alles opnieuw transcriberen…** (alle bestanden, met vervanging van hun transcripties), **Alles exporteren…** (naar één bestand), ontbrekende bestanden uit de lijst halen, en de bronmap of de map met opgeslagen bestanden openen.
- Als je de instellingen van de map wijzigt, worden de bestanden getoond die met andere instellingen (engine, model, taal…) zijn getranscribeerd, met een knop **Opnieuw transcriberen**.

De kop laat zien waar de bestanden worden opgeslagen en linkt naar de bronmap. **Instellingen bewerken** wijzigt de instellingen van de map, en **Opslaan en opnieuw scannen** transcribeert daarmee de bestanden die nog geen transcriptie hebben.

### Een map bewaken

Zet **Map bewaken** aan op de kaart **Map** om de bestanden die aan de map (of de submappen) worden toegevoegd te blijven transcriberen, totdat je op **Stoppen met bewaken** klikt. Handig voor opnamen van een dictafoon of een vergadertool die naar een map worden gekopieerd.

- De bestanden die al in de map staan, worden overgeslagen, tenzij je **Bestanden transcriberen die al in de map staan** aanzet: dan worden eerst de bestanden zonder transcriptie getranscribeerd.
- Een bestand wordt getranscribeerd zodra het volledig is gekopieerd (als de grootte niet meer verandert), dus grote bestanden worden niet half getranscribeerd.
- De mappen die werden bewaakt toen Audiotext werd gesloten, worden weer bewaakt als het opent, vanaf de bestanden die ze al hadden gezien. Gestopte mappen kun je weer bewaken met **Bewaken hervatten**.
- Als de map niet beschikbaar is (bijv. op een schijf die niet is aangesloten), wacht Audiotext erop in plaats van te mislukken.
- Om iets anders te transcriberen of op te nemen, wordt de map gepauzeerd (de nieuwe transcriptie toont **Starten…** tot dat zo is) en daarna weer bewaakt.
- Fouten stoppen het bewaken niet, en de bestanden die samen zijn getranscribeerd, worden in één melding gemeld.

## De wachtrij

Je kunt een nieuwe transcriptie instellen terwijl er een andere bezig is: de knop wordt **Toevoegen aan wachtrij**, en hij start zodra de huidige klaar is. Transcripties in de wachtrij en lopende transcripties worden in de geschiedenis getoond.
