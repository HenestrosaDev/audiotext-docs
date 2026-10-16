---
title: Sammanfattning, frågor och översättning
description: Sammanfatta, ställ frågor om och översätt transkriberingar med OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL eller Google Translate.
sidebar:
  order: 4
---

När en transkribering är klar kan Audiotext sammanfatta den, svara på frågor om den och översätta den med en språkmodell eller en översättningstjänst. Allt sparas i historiken, så det skapas bara en gång.

## Sammanfattning

Öppna läget **Sammanfattning** för en transkribering och klicka på **Skapa sammanfattning**. Språkmodellen skriver:

- En **sammanfattning** av transkriberingen.
- Dess **huvudpunkter**.
- Dess **kapitel**, om den har tidsstämplar. Klicka på ett kapitel för att spela upp ljudet från där det börjar.

Under rubriken visar panelen vilken modell som skapade den och när. Knapparna i dess rubrik:

- **Sök** (`Ctrl+F`, `⌘F` på macOS): söker efter en text i sammanfattningen.
- **Kopiera**: kopierar den.
- **Exportera**: sparar den för sig som oformaterad text, Markdown eller Word-dokument, med ett namn som `video.summary.md` så att den inte ersätter transkriberingen. Transkriberingens [exporter](/sv/guides/transcript/#kopiera-och-exportera) till Markdown och Word innehåller den också.
- **Generera sammanfattningen igen**: skriver den på nytt (t.ex. efter att du valt en annan modell), efter en bekräftelse, eftersom den nuvarande ersätts.

Om leverantörens API-nyckel inte är angiven erbjuder läget **Sammanfattning** att ange den. Mycket långa transkriberingar (ungefär tre timmars tal eller mer) sammanfattas bara från början.

![Sammanfattningen av en transkription, med nyckelpunkter och kapitel](/screenshots/summary.png)

## Fråga om transkriberingen

Öppna läget **Fråga**, skriv en fråga i **Ställ en fråga om transkriberingen…** (t.ex. vad som beslutades eller vem som sa något) och tryck `Enter` eller klicka på **Fråga**.

- Språkmodellen svarar utifrån transkriberingen och de tidigare frågorna och svaren, så en fråga kan syfta på dem (t.ex. ”Varför?”).
- Om transkriberingen har tidsstämplar länkar varje svar till de delar av transkriberingen där det sägs. Klicka på en för att spela upp ljudet därifrån.
- Frågorna och svaren sparas i historiken med transkriberingen. Papperskorgen i rubriken rensar konversationen, efter en bekräftelse.

Frågorna besvaras av leverantören som valts för dem under **Inställningar** → **Leverantörer** → **Fråga**, vilket är sammanfattningarnas leverantör tills du ändrar den. Precis som för sammanfattningarna läses bara början av mycket långa transkriberingar.

## Översättning

Klicka på **Översätt**, välj språk under **Översätt till:** och leverantör under **Översätt med:**, och bekräfta. Dialogrutan förklarar vad den valda leverantören gör, och erbjuder att ange dess API-nyckel om den saknas. Översättningen visas i en panel till höger om originaltexten.

- Om transkriberingen har tidsstämplar översätts den mening för mening, med texten som sägs före och efter varje del som sammanhang, så översättningen börjar med varje menings tidsstämplar: den markerar meningen som spelas upp, och ett klick på en mening spelar upp den.
- Om transkriberingen saknar tidsstämplar översätts hela texten på en gång.
- Båda texterna rullar tillsammans, så att de visar samma del av ljudet. Den runda knappen på handtaget mellan dem slår på och av det. Dra i handtaget för att ändra deras storlek, eller dubbelklicka på det för att återställa storlekarna.

Med knapparna i översättningens rubrik söker och ersätter du i den, kopierar och exporterar den, väljer **Översätt igen** (med samma leverantör och modell) och **Dölj översättningen**. Med knappen **Översätt** kan du också visa den igen, **Översätt till ett annat språk…** eller **Ta bort översättningen**.

### Flera språk

En transkribering kan översättas till flera språk, även samtidigt, och varje översättning sparas. Panelens rubrik väljer vilken som visas, visar hur mycket av varje som är översatt och slutar med alternativet att översätta till ett annat språk. Att översätta till ett språk som redan har en översättning ersätter den, efter en bekräftelse, eftersom dess korrigeringar går förlorade. Titelns meny visar hur många undertexter i varje ofärdig översättning som är översatta (t.ex. `Engelska · 148/150`).

### Översättningens förlopp

Förloppet räknas i undertexter: en är översatt när den har en text. Ovanför översättningen visar en rad hur många som är översatta (t.ex. `Översatt: 148/150 · 98 %`). Procentsatsen avrundas nedåt, så `100 %` visas bara när alla är översatta.

Så länge några är kvar går pilarna bredvid till föregående och nästa undertext **Inte översatt ännu**, markerar var och en och visar vilken du är på (t.ex. `1 av 2`). Håll muspekaren över en av dem för att visa knappen **Översätt text…** till höger, som öppnar dialogrutan för att översätta den.

### Korrigera och tajma om översättningen

En översättning behöver ofta andra tider än originalet, t.ex. undertexter som tar längre tid att läsa. Högerklicka på ett segment i översättningen för att:

- **Redigera text…**: ändra dess text.
- **Redigera tiderna…**: ändra när det börjar och slutar, på millisekunden. Skriv tiderna som `00:01:05,900`, `01:05,9` eller `65.9`.
- **Lägg till ett segment efter…**: lägga till ett segment, som som standard fyller luckan fram till nästa.
- **Radera segmentet**.

### Översätt själv

För att skriva översättningen själv väljer du **Manuellt** under **Översätt med:**. Ingen API-nyckel behövs. Översättningen börjar med ett tomt segment för varje undertext i transkriberingen, som visas som **Inte översatt ännu**, och panelen visar hur många som är kvar. Högerklicka på ett och välj **Översätt text…**: dialogrutan visar originaltexten som sägs under tiden. När du håller muspekaren över ett visas knappen **Översätt text…** till höger, som öppnar samma dialogruta.

### Undertexter och export

- I transkriberingar av videor markerar du **Visa den som videons undertexter** i menyn **Översätt** för att visa översättningen som undertexter. Videons meny växlar dem också. Se [Se videor med undertexter](/sv/guides/transcript/#se-videor-med-undertexter).
- För att spara översättningen som en fil klickar du på exportknappen i dess panel. Den exporteras i samma [format](/sv/guides/transcript/#kopiera-och-exportera) som transkriberingen, med språket i filnamnet (t.ex. `video.es.srt`), så att videospelare läser in den med videon. Segment som inte är översatta ännu utelämnas ur undertexterna. Samma meny gör en [kopia av videon med undertexterna](/sv/guides/transcript/#exportera-videon-med-undertexterna).

:::tip
För att få transkriberingen direkt på ett annat språk, utan leverantör, kan du också översätta under transkriberingen. Se [Språk](/sv/guides/transcription-settings/#språk).
:::

## Leverantörer

Leverantörerna väljs under **Inställningar** → **Leverantörer**, separat för sammanfattningar, frågor och översättningar.

| Leverantör | Standardmodell | API-nyckel |
| --- | --- | --- |
| OpenAI (standard) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (lokalt) | `llama3.2` | Behövs inte |

Lämna **Modell** tom för att använda leverantörens standardmodell, eller skriv namnet på någon annan av leverantörens modeller (t.ex. `claude-sonnet-5-5` eller `deepseek-reasoner`).

Översättningar kan också göras av:

- **DeepL**, som kräver en [API-nyckel från DeepL](https://www.deepl.com/your-account/keys). Nycklar från gratisplanen fungerar också.
- **Google Translate**, som använder Googles API-nyckel med Cloud Translation API aktiverat.

### Ollama

[Ollama](https://ollama.com) kör modellerna på din dator, utan API-nyckel och utan att skicka texten någonstans. Installera det, ladda ner en modell (t.ex. `ollama pull llama3.2`) och välj **Ollama** som leverantör. Om det inte körs på standardadressen ändrar du **Serverns URL** under **Inställningar** → **Leverantörer** (`http://localhost:11434` som standard).

:::note
Varje leverantör tar betalt för användningen av sitt API, vilket Audiotext inte ansvarar för. API-nycklarna sparas i systemets lösenordsarkiv. Se [Filer och data](/sv/reference/files-and-data/).
:::
