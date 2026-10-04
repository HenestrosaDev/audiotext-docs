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

Identificare i parlanti richiede un token di Hugging Face e l'accettazione delle condizioni del modello. Verifica che:

- Hai accettato le condizioni di [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) con lo stesso account.
- Il token ha il ruolo `Read` ed è impostato in **Preferenze** → **Chiavi API**.

Consulta [Identifica i parlanti](/it/guides/transcription-settings/#identifica-i-parlanti).

## Nessun microfono trovato, o non viene registrato nulla

- Verifica che il microfono sia collegato e fai clic sul pulsante di aggiornamento accanto all'elenco dei microfoni.
- Su macOS, consenti l'accesso ad Audiotext in **Impostazioni di Sistema** → **Privacy e sicurezza** → **Microfono**. Su Windows, in **Impostazioni** → **Privacy** → **Microfono**.
- Se il misuratore di livello mostra **Nessun suono**, scegli un altro microfono dall'elenco o verifica che non sia disattivato.

## L'audio di una trascrizione non si può riprodurre

Il file di origine è stato spostato o eliminato. Il testo resta, ma l'audio si può riprodurre solo dal file originale. Le registrazioni del microfono e l'audio degli URL sono conservati da Audiotext.

## Un video di YouTube non si può scaricare

Verifica che l'URL sia corretto e che il video sia pubblico. YouTube cambia spesso: se continua a non funzionare, controlla se c'è una versione più recente di Audiotext.

## Una cartella non trascrive nessun file

I file che hanno già una trascrizione vengono saltati. Attiva **Sovrascrivi i file esistenti** per trascriverli di nuovo. La cartella deve anche contenere [file supportati](/it/reference/formats-and-languages/).

## La API di Google chiede la lingua

La API di Google non può rilevare la lingua. Scegli la **Lingua dell'audio** nelle impostazioni.

## Altro

Cerca nelle [issue](https://github.com/HenestrosaDev/audiotext/issues) o chiedi nelle [discussioni](https://github.com/HenestrosaDev/audiotext/discussions). Se trovi un bug, [segnalalo](https://github.com/HenestrosaDev/audiotext/issues/new/choose) indicando il tuo sistema, la versione di Audiotext e i passaggi per riprodurlo.
