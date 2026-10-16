---
title: Riassunto, domande e traduzione
description: Riassumi, fai domande e traduci le trascrizioni con OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL o Google Translate.
sidebar:
  order: 4
---

Quando una trascrizione è pronta, Audiotext può riassumerla, rispondere a domande su di essa e tradurla con un modello linguistico o un servizio di traduzione. Tutto viene conservato nella cronologia, quindi viene generato una sola volta.

## Riassunto

Apri la modalità **Riassunto** di una trascrizione e fai clic su **Genera riassunto**. Il modello linguistico scrive:

- Un **riassunto** della trascrizione.
- I suoi **punti chiave**.
- I suoi **capitoli**, se ha marcatori temporali. Fai clic su un capitolo per riprodurre l'audio dal suo inizio.

Sotto il titolo, il pannello dice quale modello lo ha generato e quando. I pulsanti della sua intestazione:

- **Cerca** (`Ctrl+F`, `⌘F` su macOS): cerca un testo nel riassunto.
- **Copia**: lo copia.
- **Esporta**: lo salva da solo come testo semplice, Markdown o documento Word, con un nome come `video.summary.md` perché non sostituisca la trascrizione. Anche le [esportazioni](/it/guides/transcript/#copia-ed-esporta) in Markdown e Word della trascrizione lo includono.
- **Rigenera il riassunto**: lo riscrive (es. dopo aver scelto un altro modello), dopo averti chiesto conferma, perché quello attuale viene sostituito.

Se la chiave API del fornitore non è impostata, la modalità **Riassunto** propone di impostarla. Le trascrizioni molto lunghe (circa tre ore di parlato o più) vengono riassunte solo dall'inizio.

![Il riassunto di una trascrizione, con i punti chiave e i capitoli](/screenshots/summary.png)

## Fai domande sulla trascrizione

Apri la modalità **Chiedi**, scrivi una domanda in **Fai una domanda sulla trascrizione…** (es. cosa è stato deciso, o chi ha detto qualcosa) e premi `Invio` o fai clic su **Chiedi**.

- Il modello linguistico risponde con la trascrizione, e con le domande precedenti e le loro risposte, quindi una domanda può riferirsi a esse (es. «Perché?»).
- Se la trascrizione ha marcatori temporali, ogni risposta rimanda alle parti della trascrizione in cui viene detto. Fai clic su una per riprodurre l'audio da lì.
- Le domande e le risposte sono conservate nella cronologia con la trascrizione. Il cestino dell'intestazione cancella la conversazione, dopo averti chiesto conferma.

Le domande ricevono risposta dal fornitore scelto per esse in **Preferenze** → **Fornitori** → **Chiedi**, che è quello dei riassunti finché non lo cambi. Come per i riassunti, delle trascrizioni molto lunghe si legge solo l'inizio.

## Traduzione

Fai clic su **Traduci**, scegli la lingua in **Traduci in:** e il fornitore in **Traduci con:**, e conferma. La finestra dice cosa fa il fornitore scelto, e propone di impostarne la chiave API se manca. La traduzione viene mostrata in un pannello a destra del testo originale.

- Se la trascrizione ha marcatori temporali, viene tradotta frase per frase, con il testo detto prima e dopo ogni parte come contesto, quindi la traduzione inizia con i marcatori temporali di ogni frase: evidenzia la frase in riproduzione, e fare clic su una la riproduce.
- Se la trascrizione non ha marcatori temporali, tutto il testo viene tradotto in una volta.
- I due testi scorrono insieme, quindi mostrano la stessa parte dell'audio. Il pulsante rotondo sul separatore tra di essi lo attiva e disattiva. Trascina il separatore per ridimensionarli, o fai doppio clic su di esso per ripristinarne le dimensioni.

I pulsanti dell'intestazione della traduzione trovano e sostituiscono nel testo, lo copiano, lo esportano, **Traduci di nuovo** (con lo stesso fornitore e modello) e **Nascondi la traduzione**. Il pulsante **Traduci** permette anche di mostrarla di nuovo, **Traduci in un'altra lingua…** o **Elimina la traduzione**.

### Più lingue

Una trascrizione si può tradurre in più lingue, anche contemporaneamente, e ogni traduzione viene conservata. Il titolo del pannello sceglie quella mostrata, dice quanto è tradotta ciascuna e termina con l'opzione per tradurre in un'altra lingua. Tradurre in una lingua che ha già una traduzione la sostituisce, dopo averti chiesto conferma, perché le sue correzioni vanno perse. Il menu del titolo mostra quanti sottotitoli di ogni traduzione non finita sono tradotti (ad es. `Inglese · 148/150`).

### Avanzamento della traduzione

L'avanzamento si conta in sottotitoli: uno è tradotto quando ha un testo. Sopra la traduzione, una riga mostra quanti sono tradotti (ad es. `Tradotto: 148/150 · 98%`). La percentuale è arrotondata per difetto, quindi `100%` appare solo quando sono tutti tradotti.

Finché ne mancano, le frecce accanto vanno ai sottotitoli precedente e successivo **Non ancora tradotto**, evidenziandoli uno alla volta, e mostrano su quale sei (ad es. `1 di 2`). Passa il mouse su uno di essi per mostrare il pulsante **Traduci testo…** alla sua destra, che apre la finestra per tradurlo.

### Correggi e cambia i tempi della traduzione

Una traduzione richiede spesso tempi diversi dall'originale, ad es. sottotitoli che richiedono più tempo per essere letti. Fai clic con il tasto destro su un segmento della traduzione per:

- **Modifica testo…**: cambiarne il testo.
- **Modifica i tempi…**: cambiare quando inizia e finisce, al millisecondo. Scrivi i tempi come `00:01:05,900`, `01:05,9` o `65.9`.
- **Aggiungi un segmento dopo…**: aggiungere un segmento che, per impostazione predefinita, riempie lo spazio fino al successivo.
- **Elimina il segmento**.

### Traducila tu stesso

Per scrivere la traduzione tu stesso, scegli **Manuale** in **Traduci con:**. Non serve una chiave API. La traduzione inizia con un segmento vuoto per ogni sottotitolo della trascrizione, mostrato come **Non ancora tradotto**, e il pannello mostra quanti ne mancano. Fai clic con il tasto destro su uno e scegli **Traduci testo…**: la finestra mostra il testo originale detto in quel momento. Passando il mouse su uno compare un pulsante **Traduci testo…** alla sua destra, che apre la stessa finestra.

### Sottotitoli ed esportazione

- Nelle trascrizioni dei video, seleziona **Mostrala come sottotitoli del video** nel menu **Traduci** per mostrare la traduzione come sottotitoli. Anche il menu del video li cambia. Vedi [Guarda i video con i sottotitoli](/it/guides/transcript/#guarda-i-video-con-i-sottotitoli).
- Per salvare la traduzione in un file, fai clic sul pulsante di esportazione del suo pannello. Viene esportata negli stessi [formati](/it/guides/transcript/#copia-ed-esporta) della trascrizione, con la sua lingua nel nome del file (ad es. `video.es.srt`), così i lettori video la caricano insieme al video. I segmenti non ancora tradotti vengono esclusi dai sottotitoli. Lo stesso menu crea una [copia del video con i sottotitoli](/it/guides/transcript/#esporta-il-video-con-i-sottotitoli).

:::tip
Per ottenere la trascrizione direttamente in un'altra lingua, senza fornitore, puoi anche tradurre durante la trascrizione. Consulta [Lingua](/it/guides/transcription-settings/#lingua).
:::

## Fornitori

I fornitori si scelgono in **Preferenze** → **Fornitori**, separatamente per i riassunti, le domande e le traduzioni.

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

[Ollama](https://ollama.com) esegue i modelli sul tuo computer, senza chiave API e senza inviare il testo da nessuna parte. Installalo, scarica un modello (es. `ollama pull llama3.2`) e scegli **Ollama** come fornitore. Se non funziona all'indirizzo predefinito, cambia l'**URL del server** in **Preferenze** → **Fornitori** (`http://localhost:11434` per impostazione predefinita).

:::note
Ogni fornitore addebita l'uso della sua API, di cui Audiotext non è responsabile. Le chiavi API sono conservate nell'archivio delle credenziali del sistema. Consulta [File e dati](/it/reference/files-and-data/).
:::
