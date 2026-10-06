---
title: Sammanfattning och översättning
description: Sammanfatta och översätt transkriberingar med OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL eller Google Translate.
sidebar:
  order: 4
---

När en transkribering är klar kan Audiotext sammanfatta och översätta den med en språkmodell eller en översättningstjänst. Båda sparas i historiken, så de skapas bara en gång.

## Sammanfattning

Öppna läget **Sammanfattning** för en transkribering och klicka på **Skapa sammanfattning**. Språkmodellen skriver:

- En **sammanfattning** av transkriberingen.
- Dess **huvudpunkter**.
- Dess **kapitel**, om den har tidsstämplar. Klicka på ett kapitel för att spela upp ljudet från där det börjar.

**Skapa igen** skriver den på nytt (t.ex. efter att du valt en annan modell). **Kopiera** kopierar den, och [exporterna](/sv/guides/transcript/#kopiera-och-exportera) till Markdown och Word innehåller den.

Om leverantörens API-nyckel inte är angiven erbjuder läget **Sammanfattning** att ange den. Mycket långa transkriberingar (ungefär tre timmars tal eller mer) sammanfattas bara från början.

![Sammanfattningen av en transkription, med nyckelpunkter och kapitel](/screenshots/summary.png)

## Översättning

Klicka på **Översätt**, välj språk under **Översätt till** och **Leverantör**, och bekräfta. Översättningen visas i en panel till höger om originaltexten.

- Om transkriberingen har tidsstämplar översätts varje segment för sig, så översättningen börjar med samma tidsstämplar: den markerar segmentet som spelas upp, och ett klick på ett segment spelar upp det.
- Om du har redigerat den oformaterade texten översätts den redigerade texten i stället, utan tidsstämplar.
- Dra i handtaget mellan texterna för att ändra deras storlek, eller dubbelklicka på det för att återställa storlekarna.
- Med knappen **Översätt** kan du också **Dölj översättningen**, **Översätt till ett annat språk…** eller **Ta bort översättningen**.

### Korrigera och tajma om översättningen

En översättning behöver ofta andra tider än originalet, t.ex. undertexter som tar längre tid att läsa. Högerklicka på ett segment i översättningen för att:

- **Redigera texten…**: ändra dess text.
- **Redigera tiderna…**: ändra när det börjar och slutar, på millisekunden. Skriv tiderna som `00:01:05,900`, `01:05,9` eller `65.9`.
- **Lägg till ett segment efter…**: lägga till ett segment, som som standard fyller luckan fram till nästa.
- **Radera segmentet**.

### Översätt själv

För att skriva översättningen själv väljer du **Själv, från grunden** som **Leverantör**. Ingen API-nyckel behövs. Översättningen börjar med transkriberingens tidsstämplar och tomma segment, som visas som **Inte översatt ännu**, och panelen visar hur många som är kvar. Högerklicka på ett och välj **Översätt texten…**: dialogrutan visar originaltexten som sägs under tiden.

### Undertexter och export

- I transkriberingar av videor markerar du **Visa den som videons undertexter** i menyn **Översätt** för att visa översättningen som undertexter. Videons meny växlar dem också. Se [Se videor med undertexter](/sv/guides/transcript/#se-videor-med-undertexter).
- För att spara översättningen som en fil väljer du **Översättning till…** i menyn **Exportera**, eller klickar på översättningens exportknapp. Den exporteras i samma [format](/sv/guides/transcript/#kopiera-och-exportera) som transkriberingen, med språket i filnamnet (t.ex. `video.es.srt`), så att videospelare läser in den med videon. Segment som inte är översatta ännu utelämnas ur undertexterna.

:::tip
För att få transkriberingen direkt på ett annat språk, utan leverantör, kan du också översätta under transkriberingen. Se [Språk](/sv/guides/transcription-settings/#språk).
:::

## Leverantörer

Leverantörerna väljs under **Inställningar** → **AI**, separat för sammanfattningar och översättningar.

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

[Ollama](https://ollama.com) kör modellerna på din dator, utan API-nyckel och utan att skicka texten någonstans. Installera det, ladda ner en modell (t.ex. `ollama pull llama3.2`) och välj **Ollama** som leverantör. Om det inte körs på standardadressen ändrar du **Serverns URL** under **Inställningar** → **AI** (`http://localhost:11434` som standard).

:::note
Varje leverantör tar betalt för användningen av sitt API, vilket Audiotext inte ansvarar för. API-nycklarna sparas i systemets lösenordsarkiv. Se [Filer och data](/sv/reference/files-and-data/).
:::
