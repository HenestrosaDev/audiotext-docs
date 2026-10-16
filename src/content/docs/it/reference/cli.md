---
title: Interfaccia a riga di comando
description: Trascrivi, riassumi e traduci file, cartelle e video di YouTube da script con la riga di comando di Audiotext.
sidebar:
  order: 3
---

Audiotext si può usare anche dalla riga di comando, es. per trascrivere da script. Ha tre comandi:

- `transcribe`: trascrive un file, i file di una cartella o un video di YouTube.
- `watch`: trascrive i file aggiunti a una cartella finché non viene fermato con `Ctrl+C`.
- `check-update`: controlla se è disponibile una nuova versione e mostra il link per scaricarla.

Le opzioni non indicate assumono i valori configurati nell'app. Le trascrizioni vengono sempre salvate accanto a ogni file trascritto, o nella cartella indicata con `--output-dir` (dove vengono ricreate le sottocartelle di una cartella trascritta).

## Eseguila

L'app installata esegue la riga di comando quando riceve uno dei suoi comandi:

| Sistema | Comando |
| --- | --- |
| Linux | `audiotext` (installato in `~/.local/bin` da `install.sh`) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe`, nella cartella in cui è installato Audiotext (`%LOCALAPPDATA%\Programs\Audiotext` per impostazione predefinita) |

Se la [esegui dal codice sorgente](/it/help/contributing/#prepara-il-progetto), esegui invece `uv run src/cli.py`.

## Esempi

```bash
# Trascrive un file. Il testo viene anche stampato, quindi si può reindirizzare
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Trascrive i file di una cartella identificando i parlanti
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Trascrive un video di YouTube con la API di Whisper
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Trascrive una riunione con la API di Whisper, con parole chiave e contesto
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Una riunione sulla prossima versione"

# Salva i sottotitoli e un documento Word, lo riassume e lo traduce in spagnolo
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Trascrive i file aggiunti a una cartella finché non viene fermato con Ctrl+C
audiotext watch inbox/ --output-types srt
```

## Opzioni

| Opzione | Descrizione |
| --- | --- |
| `-m`, `--method` | Metodo di trascrizione: `whisperx`, `whisper-api` o `google` |
| `-l`, `--language` | Lingua dell'audio come codice ISO 639-1 (es. `it`), o `auto` per rilevarla (non supportato da Google) |
| `-t`, `--output-types` | Tipi di file di output separati da virgole, tra `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` e `ass` (es. `txt,srt,md`) |
| `-o`, `--output-dir` | Cartella in cui vengono salvate le trascrizioni (predefinito: accanto a ogni file trascritto) |
| `--overwrite` | Sovrascrivere le trascrizioni esistenti |
| `-p`, `--prompt` | Di cosa parla l'audio, come l'argomento o il contesto (non supportato da Google) |
| `-k`, `--keywords` | Nomi, termini o sigle pronunciati nell'audio, separati da virgole, perché siano scritti correttamente (non supportato da Google) |
| `--translate` | Tradurre l'audio in inglese durante la trascrizione (non supportato da Google). Consulta `--translate-to` per altre lingue |
| `-q`, `--quiet` | Stampare solo gli errori |
| `-v`, `--verbose` | Stampare i log per il debug degli errori |
| `--version` | Stampare la versione di Audiotext |

I tipi di output che il metodo di trascrizione non salva da sé (es. `md` o `docx`) vengono esportati dal suo risultato, come dall'app. `aud` viene salvato solo da WhisperX.

**Opzioni di riassunto e traduzione**

| Opzione | Descrizione |
| --- | --- |
| `--summarize` | Riassumere ogni trascrizione, con i punti chiave e i capitoli, in un file `.summary.md` |
| `--summary-provider` | Fornitore del modello linguistico che riassume: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` o `ollama` |
| `--summary-model` | Modello linguistico che riassume |
| `--translate-to` | Tradurre ogni trascrizione in una lingua (un codice ISO 639-1), salvata nei suoi tipi di file di output (es. `talk.es.srt`) |
| `--translation-provider` | Fornitore delle traduzioni: quelli di `--summary-provider`, `deepl` o `google` |
| `--translation-model` | Modello linguistico che traduce, per i fornitori di modelli linguistici |

I fornitori e i modelli sono quelli configurati nell'app, se non indicati. Consulta [Fornitori](/it/guides/summary-and-translation/#fornitori).

**Opzioni di WhisperX**

| Opzione | Descrizione |
| --- | --- |
| `--diarize` | Identificare i parlanti |
| `--speakers` | Numero di parlanti da identificare (`0` per rilevarlo) |
| `--model-size` | Modello, es. `small` o `large-v2` (consulta [Motori](/it/reference/engines/#modello)) |
| `--compute-type` | `int8`, `float16` o `float32` |
| `--batch-size` | Dimensione del batch |
| `--cpu` | Eseguire sulla CPU, invece che su una GPU NVIDIA o sulla GPU di un Mac |

**Opzioni della API di Whisper**

| Opzione | Descrizione |
| --- | --- |
| `--openai-model` | Modello di trascrizione: `whisper-1`, `gpt-transcribe` o `gpt-4o-transcribe-diarize` |

Esegui `audiotext transcribe --help` per vedere tutte le opzioni e i loro valori.

## Output e codice di uscita

L'avanzamento viene stampato sullo standard error (nascondilo con `--quiet`), e il testo della trascrizione di un singolo file sullo standard output. Il comando termina con il codice `1` se una trascrizione, un riassunto o una traduzione non riesce, e con `130` se viene fermato con `Ctrl+C`.

Se la chiave API del fornitore di `--summarize` o `--translate-to` non è impostata, il comando si ferma prima di trascrivere. Un riassunto o una traduzione che non riesce viene segnalato senza perdere la trascrizione, che viene salvata comunque.

Le chiavi API sono quelle impostate nell'app, o le loro [variabili d'ambiente](/it/reference/files-and-data/#variabili-dambiente), come `OPENAI_API_KEY`, `GOOGLE_API_KEY` e `HF_TOKEN` (per identificare i parlanti).
