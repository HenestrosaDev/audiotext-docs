---
title: Transkriptet
description: Spela upp, sök i, korrigera, kopiera och exportera en transkribering, och se videor med undertexter.
sidebar:
  order: 3
---

Välj en transkribering i [historiken](/sv/guides/history/) för att öppna den. Verktygsfältet växlar mellan tre lägen, **Transkript**, **Oformaterad text** och **Sammanfattning**, och har knapparna **Översätt**, **Kopiera** och **Exportera**.

## Transkript

Visar varje mening med dess tidsstämpel och, om talarna identifierades, dess talare.

Tidsstämplar finns bara med **WhisperX** och med modellerna `whisper-1` och `gpt-4o-transcribe-diarize` i **Whisper-API:t**. Utan dem kan transkriptet inte spelas upp mening för mening; använd läget **Oformaterad text** i stället.

### Spela upp ljudet

- **Klicka på en mening** för att spela upp ljudet därifrån. Meningen som spelas markeras, och texten följer uppspelningen. Med tider per ord markeras även varje ord.
- Använd uppspelningsfältet för att spela upp, pausa, gå till valfri punkt och ändra **hastigheten**, från `0.5×` till `2×`, med bibehållen tonhöjd.
- Kortkommandon: `Blanksteg` spelar upp eller pausar, och `←`/`→` går 5 sekunder bakåt eller framåt.

Om källfilen har flyttats eller tagits bort är ljudet inte tillgängligt, men texten är det. Mikrofoninspelningar sparas av Audiotext, så de kan alltid spelas upp.

![En transkription som spelas upp, med den aktuella meningen markerad](/screenshots/transcript.png)

### Se videor med undertexter

Transkriberingar av videor visar videon ovanför texten. Dess meny låter dig **Visa undertexter på videon** och välja deras **Storlek** (liten, medel eller stor), **Position** (nederst eller överst) och **Stil** (mörk bakgrund eller kontur).

### Sök

Tryck `Ctrl+F` (`⌘F` på macOS) och skriv. `Enter` och `Skift+Enter` går till nästa och föregående träff, och `Esc` rensar sökningen.

## Korrigera transkriberingen

För att korrigera transkriberingen och behålla tidsstämplarna (som undertexterna och uppspelningen använder) använder du alternativen i menyn `⋯`, eller högerklickar på en mening:

- **Sök och ersätt…**: ersätter ett ord eller en fras i hela transkriberingen, t.ex. ett felstavat namn. Visar hur många gånger texten förekommer innan den ersätts, och kan **Matcha skiftläge**.
- **Byt namn på talare…**: ger varje talare ett namn (`SPEAKER_00` → `Anna`). Om två talare får samma namn slås de ihop.
- **Redigera texten…**: högerklicka på en mening för att ändra dess text.
- **Spela upp härifrån**: högerklicka på en mening för att spela upp den.

Ord som inte ändras behåller sina tider, så de markeras fortfarande under uppspelning.

## Oformaterad text

Läget **Oformaterad text** låter dig redigera texten fritt, som i en textredigerare. Ändringarna sparas automatiskt. Transkriptet behåller originaltexten med tidsstämplar, så undertexterna använder inte ändringarna i den oformaterade texten.

## Kopiera och exportera

**Kopiera** kopierar texten i det aktuella läget (transkriptet, sammanfattningen eller översättningen).

**Exportera** (eller `Ctrl+S`, `⌘S` på macOS) sparar transkriberingen som:

| Format | Innehåll |
| --- | --- |
| Oformaterad text (`.txt`) | Texten |
| Markdown (`.md`) | Sammanfattningen, om den finns, och texten i stycken med tidsstämpel och talare för varje stycke |
| Word-dokument (`.docx`) | Samma som Markdown, redo att redigera eller skriva ut |
| Undertexter (`.srt`) | Undertexter för videospelare |
| Webbundertexter (`.vtt`) | Undertexter för webben |
| Tabell (`.tsv`) | En rad per mening, med start och slut (i millisekunder) och texten |
| JSON (`.json`) | Texten, segmenten med tidsstämplar, ord och talare, och sammanfattningen, om den finns |

Undertexterna och tabellen kräver tidsstämplar.

## Byt namn, etiketter och anteckningar

Transkriberingens rubrik visar namn, källa, datum och etikett. Dubbelklicka på namnet för att byta namn, klicka på etiketten för att ändra den eller klicka på **Lägg till anteckning** för att skriva en anteckning. Fler alternativ finns i [historiken](/sv/guides/history/).
