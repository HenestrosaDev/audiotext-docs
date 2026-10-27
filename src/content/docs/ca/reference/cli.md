---
title: Interfície de línia d'ordres
description: Transcriu, resumeix i tradueix fitxers, carpetes i vídeos de YouTube des d'scripts amb la línia d'ordres d'Audiotext.
sidebar:
  order: 3
---

Audiotext també es pot fer servir des de la línia d'ordres, p. ex. per transcriure des d'scripts. Té tres ordres:

- `transcribe`: transcriu un fitxer, els fitxers d'una carpeta o un vídeo de YouTube.
- `watch`: transcriu els fitxers que s'afegeixen a una carpeta fins que s'atura amb `Ctrl+C`.
- `check-update`: comprova si hi ha una versió nova i mostra l'enllaç per baixar-la.

Les opcions que no s'indiquen prenen els valors configurats a l'aplicació. Les transcripcions sempre es desen al costat de cada fitxer transcrit, o a la carpeta indicada amb `--output-dir` (on es recreen les subcarpetes d'una carpeta transcrita).

## Executa-la

L'aplicació instal·lada executa la línia d'ordres quan rep una de les seves ordres:

| Sistema | Ordre |
| --- | --- |
| Linux | `audiotext` (instal·lada a `~/.local/bin` per `install.sh`) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe`, a la carpeta on és instal·lat Audiotext (`%LOCALAPPDATA%\Programs\Audiotext` per defecte) |

Si l'[executes des del codi font](/ca/help/contributing/#prepara-el-projecte), executa `uv run src/cli.py` en lloc d'això.

## Exemples

```bash
# Transcriu un fitxer. El text també s'imprimeix, així que es pot redirigir
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Transcriu els fitxers d'una carpeta identificant els parlants
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transcriu un vídeo de YouTube amb l'API de Whisper
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transcriu una reunió amb l'API de Whisper, amb les paraules clau i el context
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Una reunió sobre la propera versió"

# Desa els subtítols i un document de Word, el resumeix i el tradueix al castellà
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Transcriu els fitxers que s'afegeixen a una carpeta fins que s'atura amb Ctrl+C
audiotext watch inbox/ --output-types srt

# El mateix, transcrivint primer els fitxers que ja conté
audiotext watch inbox/ --existing
```

## Opcions

| Opció | Descripció |
| --- | --- |
| `-m`, `--method` | Mètode de transcripció: `whisperx`, `whisper-api` o `google` |
| `-l`, `--language` | Idioma de l'àudio com a codi ISO 639-1 (p. ex. `ca`), o `auto` per detectar-lo (no compatible amb Google) |
| `-t`, `--output-types` | Tipus de fitxer de sortida separats per comes, d'entre `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` i `ass` (p. ex. `txt,srt,md`) |
| `-o`, `--output-dir` | Carpeta on es desen les transcripcions (per defecte: al costat de cada fitxer transcrit) |
| `--overwrite` | Tornar a transcriure els fitxers que ja tenen una transcripció, substituint-la |
| `--existing` | (només `watch`) Transcriure primer els fitxers que ja conté la carpeta i que encara no tenen transcripció |
| `-p`, `--prompt` | De què tracta l'àudio, com ara el tema o el context (no compatible amb Google) |
| `-k`, `--keywords` | Noms, termes o sigles que es diuen a l'àudio, separats per comes, perquè s'escriguin bé (no compatible amb Google) |
| `--translate` | Traduir l'àudio a l'anglès mentre es transcriu (no compatible amb Google). Consulta `--translate-to` per a altres idiomes |
| `-q`, `--quiet` | Imprimir només els errors |
| `-v`, `--verbose` | Imprimir els registres per depurar errors |
| `--version` | Imprimir la versió d'Audiotext |

Els tipus de sortida que el mètode de transcripció no desa per si mateix (p. ex. `md` o `docx`) s'exporten a partir del seu resultat, com des de l'aplicació. `aud` només el desa WhisperX.

**Opcions de resum i traducció**

| Opció | Descripció |
| --- | --- |
| `--summarize` | Resumir cada transcripció, amb els punts clau i els capítols, en un fitxer `.summary.md` |
| `--summary-provider` | Proveïdor del model de llenguatge que resumeix: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` o `ollama` |
| `--summary-model` | Model de llenguatge que resumeix |
| `--translate-to` | Traduir cada transcripció a un idioma (un codi ISO 639-1), que es desa en els seus tipus de fitxer de sortida (p. ex. `talk.es.srt`) |
| `--translation-provider` | Proveïdor de les traduccions: els de `--summary-provider`, `deepl` o `google` |
| `--translation-model` | Model de llenguatge que tradueix, per als proveïdors de models de llenguatge |

Els proveïdors i els models són els configurats a l'aplicació si no s'indiquen. Consulta [Proveïdors](/ca/guides/summary-and-translation/#proveïdors).

**Opcions de WhisperX**

| Opció | Descripció |
| --- | --- |
| `--diarize` | Identificar els parlants |
| `--speakers` | Nombre de parlants en identificar-los (`0` per detectar-lo) |
| `--model-size` | Model, p. ex. `small` o `large-v2` (consulta [Motors](/ca/reference/engines/#model)) |
| `--compute-type` | `int8`, `float16` o `float32` |
| `--batch-size` | Mida del lot |
| `--cpu` | Executar a la CPU, en lloc d'una GPU NVIDIA o de la GPU d'un Mac |

**Opcions de l'API de Whisper**

| Opció | Descripció |
| --- | --- |
| `--openai-model` | Model de transcripció: `whisper-1`, `gpt-transcribe` o `gpt-4o-transcribe-diarize` |

Executa `audiotext transcribe --help` per veure totes les opcions i els seus valors.

## Sortida i codi de sortida

El progrés s'imprimeix a la sortida d'error estàndard (amaga'l amb `--quiet`), i el text de la transcripció d'un sol fitxer a la sortida estàndard. L'ordre acaba amb el codi `1` si falla una transcripció, un resum o una traducció, i amb `130` si s'atura amb `Ctrl+C`.

Si la clau d'API del proveïdor de `--summarize` o `--translate-to` no està definida, l'ordre s'atura abans de transcriure. Un resum o una traducció que falla s'informa sense perdre la transcripció, que es desa igualment.

Les claus d'API són les configurades a l'aplicació, o les seves [variables d'entorn](/ca/reference/files-and-data/#variables-dentorn), com ara `OPENAI_API_KEY`, `GOOGLE_API_KEY` i `HF_TOKEN` (per identificar els parlants).
