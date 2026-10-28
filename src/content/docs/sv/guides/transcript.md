---
title: Transkriptet
description: Spela upp, sök i, korrigera, granska, kopiera och exportera en transkribering, och se eller exportera videor med undertexter.
sidebar:
  order: 3
---

Välj en transkribering i [historiken](/sv/guides/history/) för att öppna den. Verktygsfältet växlar mellan fyra lägen, **Undertexter**, **Oformaterad text**, **Sammanfattning** och **Fråga**, och har knappen **Översätt** och menyn `⋯`.

Transkriberingen visas i ett kort med språket som rubrik. Med knapparna i kortets rubrik söker och ersätter du i den, kopierar och exporterar den och kan **Transkribera igen** (efter en bekräftelse, eftersom korrigeringarna av texten går förlorade).

## Undertexter

Visar transkriberingen uppdelad i videons undertexter, med när varje undertext börjar och slutar och, om talarna identifierades, dess talare. Längden följer [inställningarna för undertexter](/sv/reference/preferences/#undertexter).

Som standard visas tiderna på millisekunden, som i undertexterna (`00:01:05,900 – 00:01:09,350`). För att förenkla dem (`01:05 – 01:09`) avmarkerar du **Exakta tidsstämplar (HH:MM:SS,mmm)** i menyn `⋯`.

Ovanför undertexterna räknar en rad dem och, om talarna har identifierats, även talarna (t.ex. `Undertexter: 120 · Talare: 3`). Ett långt segment som delats upp i flera undertexter räknas som flera.

Tidsstämplar finns bara med **WhisperX** och med modellerna `whisper-1` och `gpt-4o-transcribe-diarize` i **Whisper-API:t**. Utan dem kan transkriptet inte spelas upp undertext för undertext; använd läget **Oformaterad text** i stället.

### Spela upp ljudet

- **Klicka på en undertext** för att spela upp ljudet därifrån. Undertexten som spelas markeras och hålls i mitten av texten. Med tider per ord markeras även varje ord.
- Använd uppspelningsfältet för att spela upp, pausa, gå till valfri punkt och ändra **hastigheten**, från `0.5×` till `2×`, med bibehållen tonhöjd.
- Kortkommandon: `Blanksteg` spelar upp eller pausar, och `←`/`→` går 5 sekunder bakåt eller framåt.

Om källfilen har flyttats eller tagits bort är ljudet inte tillgängligt, men texten är det. Mikrofoninspelningar sparas av Audiotext, så de kan alltid spelas upp.

![En transkription som spelas upp, med det aktuella segmentet markerat](/screenshots/transcript.png)

### Se videor med undertexter

Transkriberingar av videor visar videon ovanför texten. Dess meny låter dig **Visa undertexter på videon** och välja deras **Storlek** (liten, medel eller stor), **Position** (nederst eller överst) och **Stil** (mörk bakgrund eller kontur). Om transkriberingen har [översättningar](/sv/guides/summary-and-translation/#översättning) väljer menyn även om undertexterna visar **Transkribering** eller **Översättning till…** ett språk. Knappen **Undertexter** i spelarfältet visar eller döljer dem också, och pilen bredvid öppnar samma meny.

## Sök och ersätt

Tryck `Ctrl+F` (`⌘F` på macOS), eller klicka på förstoringsglaset i rubriken, för att öppna fönstret för att söka och ersätta i texten du arbetar med: transkriberingen eller dess översättning. Det hittar texten medan du skriver (tidsstämplar och talare genomsöks inte) och visar hur många träffar det finns.

- `Enter` och `Skift+Enter`, eller pilarna, går till nästa och föregående träff.
- **Ersätt** ersätter den aktuella träffen, och **Ersätt alla** alla, t.ex. ett felstavat namn. Markera **Matcha skiftläge** för att bara hitta text med samma versaler.
- Fönstret är inte modalt, så du kan läsa och spela upp texten medan det är öppet. **Håll överst** håller det ovanför huvudfönstret.
- `Esc` stänger det.

I läget **Oformaterad text** söker fönstret bara (**Sök i transkriptionen**), eftersom en träff där inte kan kopplas till en undertext. Byt tillbaka till **Undertexter** för att ersätta.

## Korrigera transkriberingen

För att korrigera transkriberingen och behålla tidsstämplarna (som undertexterna och uppspelningen använder) använder du fönstret [Sök och ersätt](#sök-och-ersätt), eller högerklickar på en undertext:

- **Spela upp härifrån**: spelar upp den.
- **Kopiera**: kopierar dess text.
- **Redigera text…**: ändrar dess text.
- **Redigera tider…**: ändrar när den börjar och slutar, på millisekunden. Skriv tiderna som `00:01:05,900`, `01:05,9` eller `65.9`.
- **Lägg till undertext efter…**: lägger till en saknad undertext, som som standard fyller luckan fram till nästa. Om talarna har identifierats väljer du vem som säger den (som standard talaren i föregående undertext) eller skriver en ny. Den läggs till när du skriver dess text.
- **Byt talare…**: väljer, om talarna har identifierats, vem som säger den, eller en ny talare. Till skillnad från **Byt namn på talare…** ändrar den bara den här undertexten.
- **Byt namn på talare…**: ger varje talare ett namn (`SPEAKER_00` → `Anna`). Om två talare får samma namn slås de ihop. Finns även i menyn `⋯`.
- **Radera undertext**: raderar den. Om den har text får du bekräfta först.

Ord som inte ändras behåller sina tider, så de markeras fortfarande under uppspelning. En undertext vars tider du ändrar, eller som du lägger till, har inga ordtider, så dess ord markeras inte och stryks inte under som osäkra.

## Granska ord med låg säkerhet

Orden som motorn är minst säker på stryks under, så att du vet var du ska korrekturläsa först. WhisperX poängsätter varje ord när det bestämmer dess tider (**Tider per ord**, på som standard), och modellen `whisper-1` i Whisper-API:t poängsätter varje segment, så dess segment stryks under i sin helhet.

Ett fält ovanför texten visar hur många ord som återstår att granska (t.ex. `3 av 12 att granska`):

- Dess pilar, eller `Ctrl+J` och `Skift+Ctrl+J` (`⌘J` och `⇧⌘J` på macOS), går till nästa och föregående ord och flyttar spelaren dit. Med **Spela upp automatiskt** spelas varje ord upp med lite sammanhang runt omkring.
- `Enter` godkänner ordet du gick till som det är och går till nästa. **Godkänn återstående** godkänner alla kvarvarande ord, och **Ångra** ångrar den senaste granskningen.
- Klicka på ett ord för att korrigera det på plats: skriv rätt text och tryck `Enter` (eller **Godkänn** det oförändrat). **Spela upp igen** (`Ctrl+R`, `⌘R` på macOS) spelar upp det igen, och `Esc` stänger.
- **Bara markerade** visar bara undertexterna med ord att granska.
- Orden markeras också under ljudets position. Klicka på en markering för att gå till dess ord.

När alla är granskade tar **Granska godkända ord igen** tillbaka orden du godkände. Korrigerade ord förblir granskade.

Orden stryks under när deras poäng är under 40 %. Välj en annan tröskel, från 20 % till 70 %, under `⋯` → **Tröskel för låg säkerhet**, eller med **Justera tröskeln** i fältet. För att sluta stryka under dem och dölja fältet avmarkerar du **Markera ord med låg säkerhet** i menyn `⋯`.

Om en transkribering saknar poäng säger menyn `⋯` varför: **Slå på ”Tider per ord” och transkribera igen**, **Det finns ingen justeringsmodell för språket**, **Transkribera igen för att poängsätta orden** (den gjordes innan orden poängsattes) eller **Bara WhisperX och whisper-1 poängsätter orden**.

## Oformaterad text

Läget **Oformaterad text** visar transkriberingens text utan tidsstämplar. Den byggs upp från undertexterna och är därför skrivskyddad, som anteckningen bredvid lägena säger: för att ändra den [korrigerar du undertexterna](#korrigera-transkriberingen), och den oformaterade texten följer dem. På så sätt använder alla exporter och översättningar samma text.

Transkriberingar utan tidsstämplar (t.ex. från Google-API:t) har inga undertexter, så deras oformaterade text kan redigeras fritt, som i en textredigerare. Ändringarna sparas automatiskt.

:::note
Tidigare versioner lät dig redigera den oformaterade texten i transkriberingar med undertexter. När en sådan transkribering (eller översättning) öppnas byggs dess oformaterade text upp igen från undertexterna, så de ändringarna ersätts.
:::

## Kopiera och exportera

Kopieringsknappen i rubriken kopierar transkriberingens text.

Exportknappen (eller `Ctrl+S`, `⌘S` på macOS) sparar den som:

| Format | Innehåll |
| --- | --- |
| Formaterade undertexter (`.ass`) | Undertexter med en färg för varje talare, för videospelare och videoredigerare |
| JSON (`.json`) | Texten, segmenten med tidsstämplar, ord och talare, och sammanfattningen, om den finns |
| Markdown (`.md`) | Sammanfattningen, om den finns, och texten i stycken med tidsstämpel och talare för varje stycke |
| Oformaterad text (`.txt`) | Texten |
| Tabell (`.tsv`) | En rad per segment, med start och slut (i millisekunder) och texten |
| Undertexter (`.srt`) | Undertexter för videospelare |
| Webbundertexter (`.vtt`) | Undertexter för webben |
| Word-dokument (`.docx`) | Samma som Markdown, redo att redigera eller skriva ut |

Undertexterna och tabellen kräver tidsstämplar. [Översättningarna](/sv/guides/summary-and-translation/#undertexter-och-export) och [sammanfattningen](/sv/guides/summary-and-translation/#sammanfattning) exporteras från sina egna paneler.

### Exportera videon med undertexterna

För att dela en video där undertextfiler inte kan läsas in (t.ex. ett socialt nätverk) väljer du **Video med undertexter (.mp4)…** i exportmenyn för transkriberingen eller för en översättning. Audiotext gör en kopia av videon med undertexterna inritade, så som de visas i appen: med deras storlek, position och stil (se [Se videor med undertexter](#se-videor-med-undertexter)).

Kopian görs i bakgrunden, och statusen visar förloppet. För att avbryta väljer du **Sluta lägga till undertexter i videon** i samma meny. Kopian är en MP4-fil (H.264-video och AAC-ljud), och originalvideon ändras inte.

Om inget typsnitt i ditt system har vissa tecken i undertexterna ritas de som rutor, och Audiotext listar dem när det är klart. Se [Felsökning](/sv/help/troubleshooting/#videon-med-undertexter-visar-rutor).

## Byt namn, etiketter och anteckningar

Transkriberingens rubrik visar namn, källa, datum och etikett. Dubbelklicka på namnet för att byta namn, klicka på etiketten för att ändra den eller klicka på **Lägg till anteckning** för att skriva en anteckning. Klicka på anteckningen, eller dess penna, för att redigera den, och på dess papperskorg för att radera den.

Menyn `⋯` har också de här alternativen, och öppnar källfilens mapp eller **mappen med sparade filer**. Fler alternativ finns i [historiken](/sv/guides/history/).
