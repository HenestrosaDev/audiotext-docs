---
title: Riassunto e traduzione
description: Riassumi e traduci le trascrizioni con OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL o Google Translate.
sidebar:
  order: 4
---

Quando una trascrizione è pronta, Audiotext può riassumerla e tradurla con un modello linguistico o un servizio di traduzione. Entrambi vengono conservati nella cronologia, quindi vengono generati una sola volta.

## Riassunto

Apri la modalità **Riassunto** di una trascrizione e fai clic su **Genera riassunto**. Il modello linguistico scrive:

- Un **riassunto** della trascrizione.
- I suoi **punti chiave**.
- I suoi **capitoli**, se ha marcatori temporali. Fai clic su un capitolo per riprodurre l'audio dal suo inizio.

**Rigenera** lo riscrive (es. dopo aver scelto un altro modello). **Copia** lo copia, e le [esportazioni](/it/guides/transcript/#copia-ed-esporta) in Markdown e Word lo includono.

Se la chiave API del fornitore non è impostata, la modalità **Riassunto** propone di impostarla. Le trascrizioni molto lunghe (circa tre ore di parlato o più) vengono riassunte solo dall'inizio.

![Il riassunto di una trascrizione, con i punti chiave e i capitoli](/screenshots/summary.png)

## Traduzione

Fai clic su **Traduci**, scegli la lingua in **Traduci in** e il **Fornitore**, e conferma. La traduzione viene mostrata in un pannello a destra del testo originale.

- Se la trascrizione ha marcatori temporali, ogni frase viene tradotta separatamente, quindi la traduzione li conserva: evidenzia la frase in riproduzione, e fare clic su una frase la riproduce.
- Se hai modificato il testo semplice, viene tradotto il testo modificato, senza marcatori temporali.
- Trascina il separatore tra i due testi per ridimensionarli, o fai doppio clic su di esso per ripristinarne le dimensioni.
- Il pulsante **Traduci** permette anche di **Nascondere la traduzione**, **Tradurre in un'altra lingua…** o **Eliminare la traduzione**.

:::tip
Per ottenere la trascrizione direttamente in un'altra lingua, senza fornitore, puoi anche tradurre durante la trascrizione. Consulta [Lingua](/it/guides/transcription-settings/#lingua).
:::

## Fornitori

I fornitori si scelgono in **Preferenze** → **IA**, separatamente per i riassunti e le traduzioni.

| Fornitore | Modello predefinito | Chiave API |
| --- | --- | --- |
| OpenAI (predefinito) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (locale) | `llama3.2` | Non necessaria |

Lascia il **Modello** vuoto per usare il modello predefinito del fornitore, o digita il nome di qualsiasi altro modello del fornitore (es. `claude-sonnet-5-5` o `deepseek-reasoner`).

Le traduzioni si possono fare anche con:

- **DeepL**, che richiede una [chiave API di DeepL](https://www.deepl.com/your-account/keys). Funzionano anche le chiavi del piano gratuito.
- **Google Translate**, che usa la chiave API di Google con la Cloud Translation API attivata.

### Ollama

[Ollama](https://ollama.com) esegue i modelli sul tuo computer, senza chiave API e senza inviare il testo da nessuna parte. Installalo, scarica un modello (es. `ollama pull llama3.2`) e scegli **Ollama** come fornitore. Se non funziona all'indirizzo predefinito, cambia l'**URL del server** in **Preferenze** → **IA** (`http://localhost:11434` per impostazione predefinita).

:::note
Ogni fornitore addebita l'uso della sua API, di cui Audiotext non è responsabile. Le chiavi API sono conservate nell'archivio delle credenziali del sistema. Consulta [File e dati](/it/reference/files-and-data/).
:::
