---
title: Inställningar
description: Alla inställningar i fönstret Inställningar, flik för flik.
sidebar:
  order: 2
---

**Inställningar** innehåller allt som inte ändras med varje transkribering. Öppna dem med kugghjulet uppe till höger i fönstret. Ändringar sparas automatiskt.

## Allmänt

- **Utseende**: **System** (följer systemet), **Ljust** eller **Mörkt**.
- **Gränssnittets språk**: Audiotexts språk, eller **Systemspråk**. Det kan ändras när ingen transkribering pågår. Se de [tillgängliga språken](/sv/reference/formats-and-languages/#gränssnittets-språk).
- **Aviseringar**: visar en systemavisering när en transkribering är klar (för en mapp, när alla dess filer är klara, och för en bevakad mapp, varje gång en ny fil är klar). På som standard. På macOS kommer de från **Skriptredigerare** och på Windows från **Windows PowerShell**, så de tillåts eller tystas för de apparna i systemets inställningar. På Linux kräver de `notify-send` (paketet `libnotify-bin` eller `libnotify`).

## AI

Leverantörerna för [sammanfattningar och översättningar](/sv/guides/summary-and-translation/):

- **Sammanfattning** → **Leverantör** och **Modell**.
- **Översättning** → **Leverantör** och **Modell**. DeepL och Google Translate har inga modeller att välja.
- **Ollama** → **Serverns URL**: Ollamas adress, `http://localhost:11434` som standard.

Lämna **Modell** tom för att använda leverantörens standardmodell. Knappen bredvid leverantören anger dess API-nyckel.

## API-nycklar

Nycklarna för varje tjänst. Klicka på **Ange…** för att ange en, eller på **Ändra…** för att ersätta den (lämna fältet tomt för att ta bort den). De sparas i systemets lösenordsarkiv.

| Nyckel | Används för |
| --- | --- |
| API-nyckel för OpenAI | Whisper-API:t, och att sammanfatta och översätta med OpenAI |
| API-nyckel för Anthropic | Att sammanfatta och översätta med Claude |
| API-nyckel för DeepSeek | Att sammanfatta och översätta med DeepSeek |
| API-nyckel för Gemini | Att sammanfatta och översätta med Gemini (från Google AI Studio) |
| API-nyckel för Mistral | Att sammanfatta och översätta med Mistral |
| API-nyckel för xAI | Att sammanfatta och översätta med Grok |
| API-nyckel för DeepL | Att översätta med DeepL (nycklar från gratisplanen fungerar också) |
| API-nyckel för Google | Google Speech-to-Text utöver gratisnivån, och Google Translate (Cloud Translation API) |
| Hugging Face-token | Att identifiera talarna med WhisperX |

:::caution
Varje leverantör tar betalt för användningen av sitt API, vilket Audiotext inte ansvarar för. Om OpenAI returnerar felet `429` med en ny nyckel, se [Felsökning](/sv/help/troubleshooting/#whisper-apit-returnerar-felet-429).
:::

## WhisperX

**Beräkningstyp**, **Batchstorlek** och **Använd CPU**. Se [WhisperX avancerade alternativ](/sv/reference/engines/#avancerade-alternativ).

## Undertexter

Alternativen för `.srt`- och `.vtt`-filerna som sparas när en mapp transkriberas med WhisperX:

- **Markera ord**: stryker under varje ord medan det sägs. Av som standard.
- **Max. antal rader**: det högsta antalet rader per undertext. `2` som standard.
- **Max. radbredd**: det högsta antalet tecken på en rad innan den bryts. `42` som standard.

## Whisper API

**Temperatur** och **Tidsstämplar för orden**. Se [Whisper-API:ts alternativ](/sv/reference/engines/#alternativ).

## Om

Audiotexts version och länkar till denna dokumentation, till källkoden på GitHub och till donationssidan.
