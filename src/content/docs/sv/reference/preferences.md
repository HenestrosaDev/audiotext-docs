---
title: Inställningar
description: Alla inställningar i fönstret Inställningar, flik för flik.
sidebar:
  order: 2
---

**Inställningar** innehåller allt som inte ändras med varje transkribering. Öppna dem med kugghjulet uppe till höger i fönstret. Ändringar sparas automatiskt.

## Allmänt

- **Utseende**: **System** (följer systemet), **Ljust** eller **Mörkt**.
- **Gränssnittets storlek**: storleken på texten och kontrollerna, från 80 % till 200 %. `100%` som standard. Ändringen tillämpas direkt.
- **Gränssnittets språk**: Audiotexts språk, eller **Systemspråk**. Se de [tillgängliga språken](/sv/reference/formats-and-languages/#gränssnittets-språk).
- **Datumformat**: hur transkriberingarnas datum visas, på gränssnittets språk: kort (`2026-10-04`), medel (`4 okt. 2026`, standard), långt (`4 oktober 2026`) eller ISO (`2026-10-04`). Menyn visar varje format med ett exempel (format som ser likadana ut visas en gång).
- **Tidsformat**: **Automatiskt** (gränssnittsspråkets klocka), 12-timmars (`1:30 em`) eller 24-timmars (`13:30`).
- **Aviseringar**: visar en systemavisering när en transkribering är klar (för en mapp, när alla dess filer är klara, och för en bevakad mapp, varje gång en ny fil är klar). På som standard. På macOS kommer de från **Skriptredigerare** och på Windows från **Windows PowerShell**, så de tillåts eller tystas för de apparna i systemets inställningar. På Linux kräver de `notify-send` (paketet `libnotify-bin` eller `libnotify`).
- **Sök efter uppdateringar automatiskt**: söker efter en ny version när appen öppnas och visar, om det finns en, knappen **Version … är tillgänglig** i det övre fältet, som öppnar dess nedladdningssida. Förhandsversioner erbjuds inte. På som standard.

## Leverantörer

Leverantörerna för [sammanfattningar, frågor och översättningar](/sv/guides/summary-and-translation/):

- **Sammanfattning** → **Leverantör** och **Modell**.
- **Fråga** → **Leverantör** och **Modell**: de som svarar på frågorna om transkriberingarna. Tills du ändrar dem är de samma som för sammanfattningarna.
- **Översättning** → **Leverantör** och **Modell**. DeepL och Google Translate har inga modeller att välja.
- **Ollama** → **Serverns URL**: Ollamas adress, `http://localhost:11434` som standard.

Lämna **Modell** tom för att använda leverantörens standardmodell. Knappen bredvid leverantören anger dess API-nyckel.

## API-nycklar

Nycklarna för varje tjänst. Klicka på **Ange API-nyckel…** för att ange en, eller på **Ändra API-nyckel…** för att ersätta den (lämna fältet tomt för att ta bort den). De sparas i systemets lösenordsarkiv. De är grupperade efter vad de används till, och de som är inställda visar en bock.

| Grupp | Nyckel | Används för |
| --- | --- | --- |
| **LLM-leverantörer** | API-nyckel för OpenAI | Whisper-API:t, och att sammanfatta, fråga och översätta med OpenAI |
| | API-nyckel för Anthropic | Att sammanfatta, fråga och översätta med Claude |
| | API-nyckel för DeepSeek | Att sammanfatta, fråga och översätta med DeepSeek |
| | API-nyckel för Gemini | Att sammanfatta, fråga och översätta med Gemini (från Google AI Studio) |
| | API-nyckel för Mistral | Att sammanfatta, fråga och översätta med Mistral |
| | API-nyckel för xAI | Att sammanfatta, fråga och översätta med Grok |
| **Översättning** | API-nyckel för DeepL | Att översätta med DeepL (nycklar från gratisplanen fungerar också) |
| | API-nyckel för Google | Google Speech-to-Text utöver gratisnivån, och Google Translate (Cloud Translation API) |
| **Transkribering** | Hugging Face-token | Att identifiera talarna med WhisperX |

:::caution
Varje leverantör tar betalt för användningen av sitt API, vilket Audiotext inte ansvarar för. Om OpenAI returnerar felet `429` med en ny nyckel, se [Felsökning](/sv/help/troubleshooting/#whisper-apit-returnerar-felet-429).
:::

## Transkribering

Motorernas alternativ, i ett eget avsnitt per motor.

### WhisperX

**Beräkningstyp**, **Batchstorlek** och **Använd CPU**. Se [WhisperX avancerade alternativ](/sv/reference/engines/#avancerade-alternativ). På en Mac med Apple Silicon transkriberar WhisperX på dess grafikprocessor om inte **Använd CPU** är på. Se [På en Mac](/sv/reference/engines/#på-en-mac). På Macens GPU säger tipsen för **Beräkningstyp** och **Batchstorlek** att de inte gäller, och **Använd CPU** länkar till **Modeller som stöds**.

### Whisper API

**Temperatur** och **Tidsstämplar för orden**. Se [Whisper-API:ts alternativ](/sv/reference/engines/#alternativ).

## Undertexter

Hur undertexterna delas upp: de som visas på videon och i läget **Undertexter**, de exporterade undertextfilerna och [videorna med undertexter](/sv/guides/transcript/#exportera-videon-med-undertexterna). Varje alternativ har ett värde för liggande videor och ett för stående (högre än breda, t.ex. för mobiler), som är smalare:

| Alternativ | Horisontell | Vertikal |
| --- | :---: | :---: |
| **Max. rader per undertext** | `2` | `2` |
| **Max. tecken per rad** | `42` | `24` |
| **Kinesiska, japanska och koreanska**: tecknen per rad på dessa språk, vars tecken är ungefär dubbelt så breda som latinska | `16` | `10` |

Raderna i en undertext jämnas ut, och språk som skrivs utan mellanslag bryts mellan tecken.

**Markera ord** stryker under varje ord medan det sägs i `.srt`- och `.vtt`-filerna. Av som standard.

## Om

Audiotexts version och länkar till denna dokumentation, till källkoden på GitHub och till donationssidan. **Sök efter uppdateringar** söker direkt efter en ny version: om det finns en blir knappen **Ladda ned** och öppnar dess sida.
