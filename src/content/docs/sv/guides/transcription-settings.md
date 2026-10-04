---
title: Transkriberingsinställningar
description: Välj motor, språk, sammanhang, alternativ och utdata för varje transkribering.
sidebar:
  order: 2
---

Innan transkriberingen visar Audiotext inställningarna, grupperade i kort. De sparas till nästa gång, och varje transkribering behåller inställningarna den gjordes med.

![Inställningarna för transkriptionen av en fil](/screenshots/transcription-settings.png)

## Motor

**Transkriberingsmetod**:

| Motor | Körs på | Kostnad | Kommentarer |
| --- | --- | --- | --- |
| **WhisperX** (standard) | Din dator | Gratis och obegränsat | Privat och offline. Fler alternativ: talare, tider per ord, livetext. |
| **Whisper-API** | OpenAI:s servrar | Betalas per minut | Kräver en [API-nyckel från OpenAI](/sv/reference/preferences/#api-nycklar). För datorer som inte kör WhisperX smidigt. |
| **Google-API** | Googles servrar | Gratisnivå eller betald | Lägre kvalitet och inga tidsstämplar. En API-nyckel är valfri. |

**Modell** beror på motorn. Med WhisperX är större modeller mer exakta men långsammare. Med Whisper-API:t avgör den om transkriberingen har tidsstämplar och talare. Se [Motorer](/sv/reference/engines/) för att jämföra dem.

## Språk

- **Ljudets språk**: **Identifiera automatiskt** som standard. Om du väljer det undviker du fel i korta eller blandade inspelningar. Google-API:t kan inte identifiera det, så där måste du välja det.
- **Transkriberingens språk**: **Samma som ljudet** som standard. Välj ett annat språk för att översätta ljudet under transkriberingen.

När språken skiljer sig åt visas alternativen under **Översättning**:

- **Översätt med Whisper (rekommenderas)**: Whisper transkriberar och översätter ljudet i ett steg. Det kan bara översätta till engelska.
- **Skriv den direkt på _språk_ (experimentellt)**: Whisper ombeds skriva transkriberingen direkt på det språket. Det fungerar bra för många språk, men kontrollera resultatet.

Google-API:t kan inte översätta. För att senare översätta en transkribering till valfritt språk, med fler leverantörer, använder du transkriptets knapp [Översätt](/sv/guides/summary-and-translation/#översättning).

## Sammanhang

Två valfria fält som hjälper modellen:

- **Nyckelord**: namn, termer eller förkortningar som sägs i ljudet, separerade med kommatecken (t.ex. `Audiotext, WhisperX, Henestrosa`), så att de stavas rätt. De är bara tips: ett nyckelord skrivs bara om det sägs i ljudet.
- **Beskrivning**: vad ljudet handlar om, som ämne eller miljö (t.ex. `En intervju om taligenkänning`).

De används av WhisperX och Whisper-API:t, utom av modellen `gpt-4o-transcribe-diarize`. Google-API:t använder dem inte.

## Alternativ

- **Tider per ord** (WhisperX): justerar varje ord mot ljudet för att markera det under uppspelning. Tar lite längre tid. Undertexterna använder dem redan.
- **Extrahera tal**: minskar musik och bakgrundsljud före transkriberingen.
- **Identifiera talare** (WhisperX): anger vem som talar i varje del, t.ex. `SPEAKER_00`. Om du vet hur många som talar anger du det i **Antal talare** (`0` identifierar det automatiskt). Kräver en gratis Hugging Face-token; se [Identifiera talarna](#identifiera-talarna). Med Whisper-API:t identifierar modellen `gpt-4o-transcribe-diarize` talarna.

### Identifiera talarna

Modellen som identifierar talarna, [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1), är gratis men kräver en Hugging Face-token:

1. Skapa ett konto på [Hugging Face](https://huggingface.co/join) och godkänn villkoren för [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1).
2. Skapa en token med rollen `Read` i [dina inställningar](https://huggingface.co/settings/tokens).
3. Klicka på **Ange Hugging Face-token…** och klistra in den.

Modellen laddas ner första gången den används. Därefter identifieras talarna offline.

## Livetext

Visas bara för mikrofonen. Se [Livetext](/sv/guides/sources/#livetext).

## Mapp och Utdata

Visas bara för mappar:

- **Bevaka mappen**: se [Bevaka en mapp](/sv/guides/sources/#bevaka-en-mapp).
- **Filtyper**: med WhisperX en eller flera av `.txt`, `.srt`, `.vtt`, `.json`, `.tsv` och `.aud`. Med Whisper-API:t filernas format (`text`, `json`, `verbose_json`, `srt` eller `vtt`); undertexter kräver en modell med tidsstämplar. Google-API:t returnerar oformaterad text (`.txt`).
- **Plats**: filerna sparas bredvid varje källfil. Klicka på **Ändra…** för att spara dem i en annan mapp (dess undermappar återskapas), eller på **Bredvid källan** för att gå tillbaka.
- **Skriv över befintliga filer**: transkriberar om filer som redan har en transkribering och ersätter den.

Undertextalternativen (radbredd, antal rader, markerade ord) finns i [Inställningar](/sv/reference/preferences/#undertexter).
