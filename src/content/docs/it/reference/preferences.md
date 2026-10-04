---
title: Preferenze
description: Tutte le impostazioni della finestra Preferenze, scheda per scheda.
sidebar:
  order: 2
---

Le **Preferenze** contengono le impostazioni che non cambiano a ogni trascrizione. Aprile con l'ingranaggio in alto a destra della finestra. Le modifiche vengono salvate automaticamente.

## Generale

- **Aspetto**: **Sistema** (segue il sistema), **Chiaro** o **Scuro**.
- **Lingua dell'interfaccia**: la lingua di Audiotext, o **Lingua di sistema**. Si può cambiare quando non ci sono trascrizioni in corso. Consulta le [lingue disponibili](/it/reference/formats-and-languages/#lingue-dellinterfaccia).
- **Notifiche**: mostra una notifica di sistema quando una trascrizione è pronta (per una cartella, quando lo sono tutti i suoi file, e per una cartella monitorata, ogni volta che lo è un nuovo file). Attivo per impostazione predefinita. Su macOS provengono da **Script Editor** e su Windows da **Windows PowerShell**, quindi si consentono o si silenziano per queste app nelle impostazioni del sistema. Su Linux richiedono `notify-send` (il pacchetto `libnotify-bin` o `libnotify`).

## IA

I fornitori dei [riassunti e delle traduzioni](/it/guides/summary-and-translation/):

- **Riassunto** → **Fornitore** e **Modello**.
- **Traduzione** → **Fornitore** e **Modello**. DeepL e Google Translate non hanno modelli da scegliere.
- **Ollama** → **URL del server**: l'indirizzo di Ollama, `http://localhost:11434` per impostazione predefinita.

Lascia il **Modello** vuoto per usare il modello predefinito del fornitore. Il pulsante accanto al fornitore imposta la sua chiave API.

## Chiavi API

Le chiavi di ogni servizio. Fai clic su **Imposta…** per inserirne una, o su **Cambia…** per sostituirla (lasciala vuota per rimuoverla). Sono conservate nell'archivio delle credenziali del sistema.

| Chiave | Usata per |
| --- | --- |
| Chiave API di OpenAI | La API di Whisper, e riassumere e tradurre con OpenAI |
| Chiave API di Anthropic | Riassumere e tradurre con Claude |
| Chiave API di DeepSeek | Riassumere e tradurre con DeepSeek |
| Chiave API di Gemini | Riassumere e tradurre con Gemini (da Google AI Studio) |
| Chiave API di Mistral | Riassumere e tradurre con Mistral |
| Chiave API di xAI | Riassumere e tradurre con Grok |
| Chiave API di DeepL | Tradurre con DeepL (funzionano anche le chiavi del piano gratuito) |
| Chiave API di Google | Google Speech-to-Text oltre il livello gratuito, e Google Translate (Cloud Translation API) |
| Token di Hugging Face | Identificare i parlanti con WhisperX |

:::caution
Ogni fornitore addebita l'uso della sua API, di cui Audiotext non è responsabile. Se OpenAI restituisce l'errore `429` con una chiave nuova, consulta [Risoluzione dei problemi](/it/help/troubleshooting/#la-api-di-whisper-restituisce-lerrore-429).
:::

## WhisperX

**Tipo di calcolo**, **Dimensione del batch** e **Usa la CPU**. Consulta le [opzioni avanzate di WhisperX](/it/reference/engines/#opzioni-avanzate).

## Sottotitoli

Le opzioni dei file `.srt` e `.vtt` salvati quando si trascrive una cartella con WhisperX:

- **Evidenzia le parole**: sottolinea ogni parola mentre viene pronunciata. Disattivato per impostazione predefinita.
- **N. max di righe**: il numero massimo di righe di ogni sottotitolo. `2` per impostazione predefinita.
- **Larghezza max riga**: il numero massimo di caratteri di una riga prima di andare a capo. `42` per impostazione predefinita.

## Whisper API

**Temperatura** e **Marcatori temporali delle parole**. Consulta le [opzioni della API di Whisper](/it/reference/engines/#opzioni).

## Informazioni

La versione di Audiotext e i link a questa documentazione, al codice sorgente su GitHub e alla pagina delle donazioni.
