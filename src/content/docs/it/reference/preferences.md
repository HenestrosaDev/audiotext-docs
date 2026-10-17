---
title: Preferenze
description: Tutte le impostazioni della finestra Preferenze, scheda per scheda.
sidebar:
  order: 2
---

Le **Preferenze** contengono le impostazioni che non cambiano a ogni trascrizione. Aprile con l'ingranaggio in alto a destra della finestra. Le modifiche vengono salvate automaticamente.

## Generale

- **Aspetto**: **Sistema** (segue il sistema), **Chiaro** o **Scuro**.
- **Dimensione dell'interfaccia**: la dimensione del testo e dei controlli, dall'80% al 200%. `100%` per impostazione predefinita. La modifica si applica subito.
- **Lingua dell'interfaccia**: la lingua di Audiotext, o **Lingua di sistema**. Consulta le [lingue disponibili](/it/reference/formats-and-languages/#lingue-dellinterfaccia).
- **Formato della data**: come vengono mostrate le date delle trascrizioni, nella lingua dell'interfaccia: breve (`04/10/26`), medio (`4 ott 2026`, predefinito), lungo (`4 ottobre 2026`) o ISO (`2026-10-04`). Il menu mostra ogni formato con un esempio.
- **Formato dell'ora**: **Automatico** (l'orologio della lingua dell'interfaccia), a 12 ore (`1:30 PM`) o a 24 ore (`13:30`).
- **Notifiche**: mostra una notifica di sistema quando una trascrizione è pronta (per una cartella, quando lo sono tutti i suoi file, e per una cartella monitorata, ogni volta che lo sono nuovi file, in un'unica notifica). Attivo per impostazione predefinita. Su macOS provengono da **Script Editor** e su Windows da **Windows PowerShell**, quindi si consentono o si silenziano per queste app nelle impostazioni del sistema. Su Linux richiedono `notify-send` (il pacchetto `libnotify-bin` o `libnotify`).
- **Controlla automaticamente gli aggiornamenti**: controlla se è disponibile una nuova versione all'apertura dell'app e, se c'è, mostra nella barra superiore un pulsante **La versione … è disponibile** che apre la sua pagina di download. Le versioni preliminari non vengono proposte. Attivo per impostazione predefinita.

## Fornitori

I fornitori dei [riassunti, delle domande e delle traduzioni](/it/guides/summary-and-translation/):

- **Riassunto** → **Fornitore** e **Modello**.
- **Chiedi** → **Fornitore** e **Modello**: quelli che rispondono alle domande sulle trascrizioni. Sono quelli dei riassunti finché non li cambi.
- **Traduzione** → **Fornitore** e **Modello**. DeepL e Google Translate non hanno modelli da scegliere.
- **Ollama** → **URL del server**: l'indirizzo di Ollama, `http://localhost:11434` per impostazione predefinita.

Lascia il **Modello** vuoto per usare il modello predefinito del fornitore. Il pulsante accanto al fornitore imposta la sua chiave API.

## Chiavi API

Le chiavi di ogni servizio. Fai clic su **Imposta chiave API…** per inserirne una, o su **Cambia chiave API…** per sostituirla (lasciala vuota per rimuoverla). Sono conservate nell'archivio delle credenziali del sistema. Sono raggruppate in base a cosa servono, e quelle impostate mostrano un segno di spunta.

| Gruppo | Chiave | Usata per |
| --- | --- | --- |
| **Fornitori di LLM** | Chiave API di OpenAI | La API di Whisper, e riassumere, fare domande e tradurre con OpenAI |
| | Chiave API di Anthropic | Riassumere, fare domande e tradurre con Claude |
| | Chiave API di DeepSeek | Riassumere, fare domande e tradurre con DeepSeek |
| | Chiave API di Gemini | Riassumere, fare domande e tradurre con Gemini (da Google AI Studio) |
| | Chiave API di Mistral | Riassumere, fare domande e tradurre con Mistral |
| | Chiave API di xAI | Riassumere, fare domande e tradurre con Grok |
| **Traduzione** | Chiave API di DeepL | Tradurre con DeepL (funzionano anche le chiavi del piano gratuito) |
| | Chiave API di Google | Google Speech-to-Text oltre il livello gratuito, e Google Translate (Cloud Translation API) |
| **Trascrizione** | Token di Hugging Face | Identificare i parlanti con WhisperX |

:::caution
Ogni fornitore addebita l'uso della sua API, di cui Audiotext non è responsabile. Se OpenAI restituisce l'errore `429` con una chiave nuova, consulta [Risoluzione dei problemi](/it/help/troubleshooting/#la-api-di-whisper-restituisce-lerrore-429).
:::

## Trascrizione

Le opzioni dei motori, in una sezione ciascuno.

### WhisperX

**Tipo di calcolo**, **Dimensione del batch** e **Usa la CPU**. Consulta le [opzioni avanzate di WhisperX](/it/reference/engines/#opzioni-avanzate). Su un Mac con Apple Silicon, WhisperX trascrive sulla sua GPU a meno che **Usa la CPU** sia attiva. Consulta [Su un Mac](/it/reference/engines/#su-un-mac). Sulla GPU del Mac, i suggerimenti di **Tipo di calcolo** e **Dimensione del batch** dicono che non si applicano, e **Usa la CPU** rimanda ai **Modelli supportati**.

### Whisper API

**Temperatura** e **Marcatori temporali delle parole**. Consulta le [opzioni della API di Whisper](/it/reference/engines/#opzioni).

## Sottotitoli

Come vengono divisi i sottotitoli: quelli mostrati sul video e nella modalità **Sottotitoli**, i file di sottotitoli esportati e i [video con sottotitoli](/it/guides/transcript/#esporta-il-video-con-i-sottotitoli). Ogni opzione ha un valore per i video orizzontali e un altro per quelli verticali (più alti che larghi, es. per i telefoni), che sono più stretti:

| Opzione | Orizzontale | Verticale |
| --- | :---: | :---: |
| **Righe max per sottotitolo** | `2` | `2` |
| **Caratteri max per riga** | `42` | `24` |
| **Cinese, giapponese e coreano**: i caratteri per riga in queste lingue, i cui caratteri sono larghi circa il doppio di quelli latini | `16` | `10` |

Le righe di un sottotitolo vengono bilanciate, e le lingue scritte senza spazi vanno a capo tra i caratteri.

**Evidenzia le parole** sottolinea ogni parola mentre viene pronunciata nei file `.srt` e `.vtt`. Disattivato per impostazione predefinita.

## Informazioni

La versione di Audiotext e i link a questa documentazione, al codice sorgente su GitHub e alla pagina delle donazioni. **Controlla aggiornamenti** controlla subito se c'è una nuova versione: se c'è, il pulsante diventa **Scarica** e apre la sua pagina.
