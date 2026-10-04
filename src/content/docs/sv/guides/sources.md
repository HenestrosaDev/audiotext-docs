---
title: Ljudkällor
description: Transkribera filer, YouTube-videor och länkar, mikrofoninspelningar, mappar och bevakade mappar.
sidebar:
  order: 1
---

Audiotext transkriberar från fyra typer av källor, som du väljer i det övre fältet under **Ny transkribering**.

## Fil

Transkriberar en ljud- eller videofil. Klicka på **Välj en fil…** eller släpp filen i fönstret. Filväljaren visar **Alla filer som stöds** som standard; du kan visa bara **Ljudfiler** eller **Videofiler**. Se [Format och språk](/sv/reference/formats-and-languages/) för formaten som stöds.

Det går bara att lägga till en fil i taget. För att transkribera flera filer använder du källan [Mapp](#mapp).

## URL

Transkriberar en **YouTube-video** eller en **direktlänk till en ljud- eller videofil** (till exempel ett poddavsnitt). Klistra in URL:en (med **Klistra in** eller `Ctrl+V`) och klicka på **Fortsätt**. URL:en måste börja med `http://` eller `https://`.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

Ljudet laddas ner först, så det krävs en internetanslutning.

## Mikrofon

Spelar in din röst eller ett möte och transkriberar det. Inspelningen sparas i historiken så att du kan spela upp den senare.

1. Välj mikrofonen i listan (klicka på uppdateringsknappen om du precis har anslutit den).
2. Klicka på inspelningsknappen (eller tryck `Ctrl+Enter`, `⌘↩` på macOS) för att börja spela in. Nivåmätaren visar om ljudet är **För tyst**, har **Bra nivå** eller är **För högt**.
3. Klicka igen för att stoppa och transkribera.

### Livetext

Med **WhisperX** aktiverar du **Visa texten under inspelning** på kortet **Livetext** för att se ett utkast av texten medan du pratar. Utkastet skrivs av en snabb **Livemodell** (`small` som standard). När du stoppar transkriberas hela inspelningen igen med motorns modell, som är mer exakt, och utkastet ersätts.

![Livetexten under inspelning från mikrofonen](/screenshots/live-text.png)

:::caution
Systemet måste hitta en inmatningsenhet och låta appen använda den. Annars visas **Ingen mikrofon hittades**. På macOS ger du Audiotext åtkomst under **Systeminställningar** → **Integritet och säkerhet** → **Mikrofon**.
:::

## Mapp

Transkriberar alla ljud- och videofiler i en mapp **och dess undermappar**. Klicka på **Välj en mapp…** eller släpp mappen i fönstret. Audiotext visar hur många filer den hittade.

Transkriberingen av varje fil sparas bredvid den (eller i en annan mapp som du väljer på kortet **Utdata**), med samma namn och filändelsen för varje vald **filtyp**. Till exempel med `.txt` och `.vtt`:

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

Filer som redan har en transkribering **hoppas över**, om du inte aktiverar **Skriv över befintliga filer**. Om du lägger till en fil i mappen och transkriberar den igen transkriberas alltså bara den nya filen.

Om en fil inte kan transkriberas transkriberas resten ändå, och mappvyn visar vilka som misslyckades och varför. **Transkribera igen** upprepar mappen, och mappknappen öppnar mappen med de sparade filerna.

### Bevaka en mapp

Aktivera **Bevaka mappen** på kortet **Mapp** för att fortsätta transkribera filer som läggs till i mappen (eller dess undermappar) tills du klickar på **Sluta bevaka**. Det är praktiskt för inspelningar från en diktafon eller ett mötesverktyg som kopieras till en mapp.

- Filer som redan finns i mappen hoppas över. För att transkribera dem transkriberar du mappen utan att bevaka den.
- En fil transkriberas när den har kopierats helt (när storleken slutar ändras), så stora filer transkriberas inte till hälften.
- Fel stoppar inte bevakningen.

## Kön

Du kan ställa in en ny transkribering medan en annan pågår: knappen blir **Lägg till i kön**, och den startar när den nuvarande är klar. Transkriberingar i kö och pågående transkriberingar visas i historiken.
