---
title: Interfaccia a riga di comando
description: Trascrivi file, cartelle e video di YouTube da script con la riga di comando di Audiotext.
sidebar:
  order: 3
---

Audiotext si può usare anche dalla riga di comando per trascrivere da script, quando lo [esegui dal codice sorgente](/it/help/contributing/#prepara-il-progetto). Ha tre comandi:

- `transcribe`: trascrive un file, i file di una cartella o un video di YouTube.
- `watch`: trascrive i file aggiunti a una cartella finché non viene fermato con `Ctrl+C`.
- `check-update`: controlla se è disponibile una nuova versione e mostra il link per scaricarla.

Le opzioni non indicate assumono i valori configurati nell'app. Le trascrizioni vengono sempre salvate accanto a ogni file trascritto, o nella cartella indicata con `--output-dir` (dove vengono ricreate le sottocartelle di una cartella trascritta).

## Esempi

```bash
# Trascrive un file. Il testo viene anche stampato, quindi si può reindirizzare
python src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Trascrive i file di una cartella identificando i parlanti
python src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Trascrive un video di YouTube con la API di Whisper
python src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Trascrive una riunione con la API di Whisper, con parole chiave e contesto
python src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Una riunione sulla prossima versione"

# Trascrive i file aggiunti a una cartella finché non viene fermato con Ctrl+C
python src/cli.py watch inbox/ --output-types srt
```

## Opzioni

| Opzione | Descrizione |
| --- | --- |
| `-m`, `--method` | Metodo di trascrizione: `whisperx`, `whisper-api` o `google` |
| `-l`, `--language` | Lingua dell'audio come codice ISO 639-1 (es. `it`), o `auto` per rilevarla (non supportato da Google) |
| `-o`, `--output-dir` | Cartella in cui vengono salvate le trascrizioni (predefinito: accanto a ogni file trascritto) |
| `--overwrite` | Sovrascrivere le trascrizioni esistenti |
| `-p`, `--prompt` | Di cosa parla l'audio, come l'argomento o il contesto (non supportato da Google) |
| `-k`, `--keywords` | Nomi, termini o sigle pronunciati nell'audio, separati da virgole, perché siano scritti correttamente (non supportato da Google) |
| `--translate` | Tradurre l'audio in inglese (non supportato da Google) |
| `-q`, `--quiet` | Stampare solo gli errori |
| `-v`, `--verbose` | Stampare i log per il debug degli errori |

**Opzioni di WhisperX**

| Opzione | Descrizione |
| --- | --- |
| `-t`, `--output-types` | Tipi di file di output separati da virgole (es. `txt,srt`) |
| `--diarize` | Identificare i parlanti |
| `--speakers` | Numero di parlanti da identificare (`0` per rilevarlo) |
| `--model-size` | Modello, es. `small` o `large-v2` (consulta [Motori](/it/reference/engines/#modello)) |
| `--compute-type` | `int8`, `float16` o `float32` |
| `--batch-size` | Dimensione del batch |
| `--cpu` | Eseguire sulla CPU |

**Opzioni della API di Whisper**

| Opzione | Descrizione |
| --- | --- |
| `--openai-model` | Modello di trascrizione: `whisper-1`, `gpt-transcribe` o `gpt-4o-transcribe-diarize` |

Esegui `python src/cli.py transcribe --help` per vedere tutte le opzioni e i loro valori.

## Output e codice di uscita

L'avanzamento viene stampato sullo standard error (nascondilo con `--quiet`), e il testo della trascrizione di un singolo file sullo standard output. Il comando termina con il codice `1` se una trascrizione non riesce.

Le chiavi API sono quelle impostate nell'app, o le variabili d'ambiente `OPENAI_API_KEY`, `GOOGLE_API_KEY` e `HF_TOKEN` (per identificare i parlanti).
