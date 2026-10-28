---
title: Ljudkällor
description: Transkribera filer, YouTube-videor och länkar, mikrofoninspelningar, mappar och bevakade mappar.
sidebar:
  order: 1
---

Audiotext transkriberar från fyra typer av källor, som du väljer i det övre fältet under **Ny transkribering**.

## Fil

Transkriberar en ljud- eller videofil. Klicka på **Välj fil…** eller släpp filen i fönstret. Filväljaren visar **Alla filer som stöds** som standard; du kan visa bara **Ljudfiler** eller **Videofiler**. Se [Format och språk](/sv/reference/formats-and-languages/) för formaten som stöds.

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

Med **WhisperX** aktiverar du **Visa text under inspelning** på kortet **Livetext** för att se ett utkast av texten medan du pratar. Utkastet skrivs av en snabb **Livemodell** (`small` som standard). När du stoppar transkriberas hela inspelningen igen med motorns modell, som är mer exakt, och utkastet ersätts.

![Livetexten under inspelning från mikrofonen](/screenshots/live-text.png)

:::caution
Systemet måste hitta en inmatningsenhet och låta appen använda den. Annars visas **Ingen mikrofon hittades**. På macOS ger du Audiotext åtkomst under **Systeminställningar** → **Integritet och säkerhet** → **Mikrofon**.
:::

### Spela in datorns ljud

För att transkribera det som datorn spelar upp (ett videosamtal, ett webbinarium, en video som inte går att ladda ner) spelar du in det från en enhet som skickar högtalarnas ljud till en ingång. Ställ in den en gång, klicka på uppdateringsknappen och välj den i listan över mikrofoner. Allt som datorn spelar upp spelas in, även aviseringar, men inte din röst.

- **Windows**: kör `mmsys.cpl`, högerklicka i listan på fliken **Inspelning** för att visa de inaktiverade enheterna och aktivera **Stereomix**. Om ditt ljudkort saknar den installerar du [VB-CABLE](https://vb-audio.com/Cable/), ställer in **CABLE Input** som utenhet och väljer **CABLE Output** i Audiotext. För att fortsätta höra ljudet markerar du **Lyssna på den här enheten** i egenskaperna för **CABLE Output**.
- **macOS**: installera [BlackHole](https://existential.audio/blackhole/) (`brew install blackhole-2ch`) och välj **BlackHole 2ch** i Audiotext. För att fortsätta höra ljudet skapar du en [enhet med flera utgångar](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) med dina högtalare och BlackHole och ställer in den som utenhet.
- **Linux** (PulseAudio eller PipeWire): välj **pulse** i Audiotext och starta inspelningen. Byt sedan källan för Audiotext till monitorn för dina högtalare på fliken **Inspelning** i `pavucontrol`.

## Mapp

Transkriberar alla ljud- och videofiler i en mapp och, om **Inkludera undermappar** är aktiverat på kortet **Mapp**, i dess undermappar. Klicka på **Välj mapp…** eller släpp mappen i fönstret. Audiotext talar om hur många filer det hittade. För att hoppa över vissa filer skriver du deras namn eller sökvägar, separerade med kommatecken, i **Hoppa över filer som matchar** (t.ex. `*.wav, drafts/*`). Dolda filer hoppas alltid över.

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

Om två filer har samma namn och olika filändelse (t.ex. `talk.mp3` och `talk.mp4`) behåller deras transkriberingar filändelsen i namnet (`talk.mp3.txt` och `talk.mp4.txt`), så att de inte ersätter varandra.

Filer som redan har en transkribering **hoppas över**: en fil hoppas bara över om den har alla filtyper du valt, så om du lägger till en filtyp transkriberas den igen. Om en fil inte kan transkriberas transkriberas resten ändå.

### Filerna i en mapp

Sidan för en mapp i historiken listar dess filer, med status, längd och storlek för varje fil och en förhandsvisning av texten. Sök bland dem, filtrera dem efter status (**Alla**, **Klara**, **Misslyckade** eller **Väntande**) och sortera dem efter namn, status, längd eller storlek. Filer som har flyttats eller tagits bort markeras som **Filen hittades inte**.

- Klicka på en fil för att öppna dess transkribering, eller klicka på dess `⋯`-knapp (eller högerklicka på den) för att kopiera texten, öppna den direkt i exporten, sammanfattningen eller översättningen, visa den i filhanteraren eller välja **Transkribera den här filen igen**.
- Markera flera filer med `Ctrl`/`⌘` eller `Skift`, eller alla filer som visas med `Ctrl+A` / `⌘A`, och välj **Transkribera igen**, **Exportera…** (för att exportera dem tillsammans till en enda TXT-, Markdown- eller Word-fil) eller **Ta bort från historiken…**. `Enter` öppnar den markerade filen, och `Esc` rensar markeringen.
- **Försök igen med misslyckade** transkriberar de misslyckade filerna igen. **Sök igenom mappen igen** transkriberar bara filerna utan transkribering, som de nya, och talar om hur många som hoppades över eftersom de redan hade en.
- Mappens `⋯`-meny har **Transkribera alla igen…** (transkriberar alla dess filer igen och ersätter deras transkriberingar), **Exportera alla…** (till en enda fil), ett alternativ för att ta bort saknade filer från listan och alternativ för att öppna källmappen eller mappen med sparade filer.
- När du ändrar mappens inställningar visas de filer som transkriberades med andra inställningar (motor, modell, språk…), med knappen **Transkribera dem igen**.

Sidhuvudet visar var filerna sparas och länkar till källmappen. **Redigera inställningar** ändrar mappens inställningar, och **Spara och sök igenom igen** transkriberar med dem de filer som saknar en transkribering.

### Bevaka en mapp

Aktivera **Bevaka mapp** på kortet **Mapp** för att fortsätta transkribera filer som läggs till i mappen (eller dess undermappar) tills du klickar på **Sluta bevaka**. Det är praktiskt för inspelningar från en diktafon eller ett mötesverktyg som kopieras till en mapp.

- Filer som redan finns i mappen hoppas över, om du inte aktiverar **Transkribera filerna som redan finns i mappen**: då transkriberas först de som saknar transkribering.
- En fil transkriberas när den har kopierats helt (när storleken slutar ändras), så stora filer transkriberas inte till hälften.
- De mappar som bevakades när Audiotext stängdes bevakas igen när det öppnas, från de filer de redan hade sett. Stoppade mappar kan bevakas igen med **Återuppta bevakning**.
- Om mappen inte är tillgänglig (t.ex. om den ligger på en enhet som inte är ansluten) väntar Audiotext på den i stället för att misslyckas.
- För att transkribera något annat eller spela in pausas mappen (den nya transkriberingen visar **Startar…** tills den är det) och bevakas sedan igen.
- Fel stoppar inte bevakningen, och filer som transkriberats tillsammans meddelas i en enda avisering.

## Kön

Du kan ställa in en ny transkribering medan en annan pågår: knappen blir **Lägg till i kön**, och den startar när den nuvarande är klar. Transkriberingar i kö och pågående transkriberingar visas i historiken.
