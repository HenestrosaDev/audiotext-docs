---
title: Je eerste transcriptie
description: Een rondleiding door het venster van Audiotext en de stappen om een audio- of videobestand te transcriberen.
sidebar:
  order: 2
---

## Het venster

Het venster van Audiotext bestaat uit drie delen:

- **De bovenbalk**: de knoppen om een **Nieuwe transcriptie** te starten vanuit een **Bestand**, een **URL**, de **Microfoon** of een **Map**, de status van de app en het tandwiel dat de [Voorkeuren](/nl/reference/preferences/) opent. De knop links toont of verbergt de geschiedenis.
- **De geschiedenis**, links: al je transcripties, die je kunt doorzoeken, vastzetten, groeperen en hernoemen. Zie [Geschiedenis](/nl/guides/history/).
- **Het hoofdgedeelte**: de bron die je instelt, de voortgang van een transcriptie of de transcriptie die je in de geschiedenis hebt geselecteerd.

![De delen van het venster van Audiotext: de bovenbalk, de geschiedenis en het hoofdgebied](/screenshots/window.png)

Bij het openen van de app vraagt het hoofdgedeelte **Wat wil je transcriberen?** en toont het een kaart voor elk soort bron.

:::tip
Sleep een bestand of map ergens naar het venster om het te transcriberen.
:::

## Een bestand transcriberen

1. Klik op **Bestand** in de bovenbalk (of druk op `Ctrl+O`, `⌘O` op macOS) en kies een audio- of videobestand, of sleep het naar het venster. Klik daarna op **Doorgaan**.
2. Controleer de instellingen. De standaardwaarden werken goed voor de meeste audio:
   - **Engine**: WhisperX, dat op je computer draait. Kies een kleiner **Model** (zoals `small`) als je computer traag is.
   - **Taal**: de **Taal van de audio** wordt automatisch gedetecteerd. Kies hem als je hem weet, om fouten te voorkomen. Kies een andere **Taal van de transcriptie** om te vertalen.
   - **Context** en **Opties**: optionele hints en functies, zoals sprekers herkennen.

   Zie [Transcriptie-instellingen](/nl/guides/transcription-settings/) voor alle instellingen.
3. Klik op **Transcriptie starten** (of druk op `Ctrl+Enter`, `⌘↩` op macOS).

Tijdens het werk wordt de voortgang van elke stap getoond (model laden, transcriberen, woorden uitlijnen…). Je kunt Audiotext ondertussen blijven gebruiken: het resultaat wordt in je geschiedenis opgeslagen en geopend zodra het klaar is. Klik op **Annuleren** of druk op `Esc` om te annuleren.

Als er al een andere transcriptie bezig is, wordt de knop **Toevoegen aan wachtrij**, en de nieuwe start zodra de huidige klaar is.

## Het resultaat lezen en gebruiken

Als hij klaar is, wordt de transcriptie geopend:

- Klik op een zin om de audio vanaf daar af te spelen.
- Wissel tussen **Transcript**, **Platte tekst** en **Samenvatting**.
- Gebruik **Vertalen**, **Kopiëren** en **Exporteren** om hem te vertalen, te kopiëren of als bestand op te slaan.

Zie [Het transcript](/nl/guides/transcript/) voor alles wat je ermee kunt doen.

## Sneltoetsen

| Sneltoets | Actie |
| --- | --- |
| `Ctrl+Enter` / `⌘↩` | De transcriptie starten, of de opname starten en stoppen |
| `Ctrl+O` / `⌘O` | Een bestand kiezen (of een map, bij de mapbron) |
| `Ctrl+S` / `⌘S` | De getoonde transcriptie exporteren |
| `Ctrl+F` / `⌘F` | In de transcriptie zoeken |
| `Esc` | De lopende transcriptie annuleren |
| `Spatie` | De audio afspelen of pauzeren |
| `←` / `→` | 5 seconden terug of vooruit |
