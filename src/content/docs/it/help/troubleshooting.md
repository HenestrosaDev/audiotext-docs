---
title: Risoluzione dei problemi
description: Soluzioni ai problemi più comuni di Audiotext.
sidebar:
  order: 1
---

## La prima trascrizione con WhisperX richiede molto tempo

Al primo utilizzo un modello viene scaricato, il che può richiedere diversi minuti a seconda della connessione e della dimensione del modello (fino a ~3 GB). L'avanzamento indica quando è in caricamento. Il modello resta in memoria finché le sue opzioni non cambiano, quindi le trascrizioni successive iniziano subito.

## WhisperX non riesce con `CUDA out of memory`

La GPU non ha abbastanza memoria per le impostazioni. Prova, in quest'ordine:

1. Abbassa la **Dimensione del batch** (es. `4`) in **Preferenze** → **WhisperX**.
2. Usa un modello più piccolo (es. `small` o `base`).
3. Usa un **Tipo di calcolo** più leggero (es. `int8`).

Gli ultimi due possono ridurre la qualità. Consulta [Motori](/it/reference/engines/#modello) per la memoria richiesta da ogni modello.

## La trascrizione richiede troppo tempo

La velocità di WhisperX dipende dall'hardware, quindi non aspettarti risultati istantanei su CPU modeste. Prova un modello più piccolo, come `small`, o `large-v3-turbo` su una GPU, o il tipo di calcolo `int8`. In alternativa, usa la **API di Whisper** o la **API di Google**, che funzionano su server remoti.

## La API di Whisper restituisce l'errore `429`

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

Il tuo account OpenAI ha esaurito i crediti, oppure devi aggiungere fondi prima di usare la API per la prima volta (anche se hai crediti gratuiti). Acquista crediti nella sezione [Billing](https://platform.openai.com/settings/organization/billing/overview) del tuo account OpenAI. L'attivazione dell'account può richiedere fino a 10 minuti.

Se hai creato la chiave API prima di aggiungere fondi per la prima volta e l'errore persiste dopo 10 minuti, crea una nuova chiave e impostala in **Preferenze** → **Chiavi API**.

## I parlanti non vengono identificati

Se la trascrizione non riesce con **Per identificare i parlanti serve un token di Hugging Face.** o **Impossibile scaricare il modello di identificazione dei parlanti.**, il token manca, non è valido o non può accedere al modello.

Identificare i parlanti richiede un token di Hugging Face e l'accettazione delle condizioni del modello. Verifica che:

- Hai accettato le condizioni di [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) con lo stesso account.
- Il token ha il ruolo `Read` ed è impostato in **Preferenze** → **Chiavi API**.

Consulta [Identifica i parlanti](/it/guides/transcription-settings/#identifica-i-parlanti).

## Nessun microfono trovato, o non viene registrato nulla

- Verifica che il microfono sia collegato e fai clic sul pulsante di aggiornamento accanto all'elenco dei microfoni.
- Su macOS, consenti l'accesso ad Audiotext in **Impostazioni di Sistema** → **Privacy e sicurezza** → **Microfono**. Su Windows, in **Impostazioni** → **Privacy** → **Microfono**.
- Se il misuratore di livello mostra **Nessun suono**, scegli un altro microfono dall'elenco o verifica che non sia disattivato.
- Se viene mostrato **Non è stato registrato alcun audio.**, la registrazione è terminata prima che il microfono inviasse alcun suono. Registra di nuovo o scegli un altro microfono.

## Il testo dal vivo non viene mostrato

Se durante la registrazione viene mostrato **Il testo non può essere mostrato durante la registrazione.**, non è stato possibile caricare il **Modello dal vivo**: per esempio, viene scaricato al primo utilizzo, il che richiede una connessione a Internet, oppure la memoria non è sufficiente. La registrazione non ne risente e viene trascritta come al solito quando la interrompi. Scegli un **Modello dal vivo** più piccolo (ad es. `tiny` o `base`) nella scheda **Testo dal vivo**.

## L'audio di una trascrizione non si può riprodurre

Il file di origine è stato spostato o eliminato. Il testo resta, ma l'audio si può riprodurre solo dal file originale. Le registrazioni del microfono e l'audio degli URL sono conservati da Audiotext.

## Un video di YouTube non si può scaricare

Verifica che l'URL sia corretto e che il video sia pubblico. YouTube cambia spesso: se continua a non funzionare, controlla se c'è una versione più recente di Audiotext.

Se invece viene mostrato **Il video di YouTube non ha una traccia audio.**, il video non ha audio da trascrivere.

## Un link non può essere trascritto

- **L'URL non punta a un file audio o video.**: il link apre una pagina web, non un file. Funzionano solo i link dei video di YouTube e i link diretti a file audio o video. Cerca nella pagina il link che scarica il file (ad es. l'episodio di un podcast) e usalo, oppure scarica il file e trascrivilo con la sorgente **File**.
- **Impossibile scaricare il file: …**: non è stato possibile raggiungere il file. Verifica che il link si apra nel browser e di essere connesso a Internet. I link che richiedono l'accesso non possono essere scaricati: scarica il file tu stesso e usa la sorgente **File**.

## Una cartella non trascrive nessun file

I file che hanno già una trascrizione vengono saltati. Attiva **Sovrascrivi i file esistenti** per trascriverli di nuovo. La cartella deve anche contenere [file supportati](/it/reference/formats-and-languages/).

## La API di Google chiede la lingua

La API di Google non può rilevare la lingua. Scegli la **Lingua dell'audio** nelle impostazioni.

## Un riassunto o una traduzione non riesce

- **DeepL non può tradurre in ….**: DeepL non supporta quella lingua. Scegli un altro fornitore, come un modello linguistico.
- **La risposta del modello era troppo lunga.**, **Il modello non ha restituito un riassunto valido.** o **Il modello non ha restituito una traduzione valida.**: il modello non ha scritto il riassunto o la traduzione nel formato previsto. Riprova, oppure scegli un modello più grande in **Preferenze** → **IA**. I modelli piccoli di Ollama falliscono più spesso.
- Per qualsiasi altro errore, verifica che la chiave API del fornitore sia impostata in **Preferenze** → **Chiavi API** e che il tuo account abbia credito.

## Non è possibile controllare gli aggiornamenti

**Impossibile controllare gli aggiornamenti.** significa che Audiotext non è riuscito a raggiungere GitHub. Controlla la connessione a Internet, o se un firewall o un proxy la blocca. Puoi sempre scaricare l'ultima versione dalla [pagina delle versioni](https://github.com/HenestrosaDev/audiotext/releases/latest).

## Altro

Cerca nelle [issue](https://github.com/HenestrosaDev/audiotext/issues) o chiedi nelle [discussioni](https://github.com/HenestrosaDev/audiotext/discussions). Se trovi un bug, [segnalalo](https://github.com/HenestrosaDev/audiotext/issues/new/choose) indicando il tuo sistema, la versione di Audiotext e i passaggi per riprodurlo.
