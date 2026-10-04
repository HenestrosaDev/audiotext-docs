---
title: Interfície de línia d'ordres
description: Transcriu fitxers, carpetes i vídeos de YouTube des d'scripts amb la línia d'ordres d'Audiotext.
sidebar:
  order: 3
---

Audiotext també es pot fer servir des de la línia d'ordres per transcriure des d'scripts, quan l'[executes des del codi font](/ca/help/contributing/#prepara-el-projecte). Té tres ordres:

- `transcribe`: transcriu un fitxer, els fitxers d'una carpeta o un vídeo de YouTube.
- `watch`: transcriu els fitxers que s'afegeixen a una carpeta fins que s'atura amb `Ctrl+C`.
- `check-update`: comprova si hi ha una versió nova i mostra l'enllaç per baixar-la.

Les opcions que no s'indiquen prenen els valors configurats a l'aplicació. Les transcripcions sempre es desen al costat de cada fitxer transcrit, o a la carpeta indicada amb `--output-dir` (on es recreen les subcarpetes d'una carpeta transcrita).

## Exemples

```bash
# Transcriu un fitxer. El text també s'imprimeix, així que es pot redirigir
python src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Transcriu els fitxers d'una carpeta identificant els parlants
python src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transcriu un vídeo de YouTube amb l'API de Whisper
python src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transcriu una reunió amb l'API de Whisper, amb les paraules clau i el context
python src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Una reunió sobre la propera versió"

# Transcriu els fitxers que s'afegeixen a una carpeta fins que s'atura amb Ctrl+C
python src/cli.py watch inbox/ --output-types srt
```

## Opcions

| Opció | Descripció |
| --- | --- |
| `-m`, `--method` | Mètode de transcripció: `whisperx`, `whisper-api` o `google` |
| `-l`, `--language` | Idioma de l'àudio com a codi ISO 639-1 (p. ex. `ca`), o `auto` per detectar-lo (no compatible amb Google) |
| `-o`, `--output-dir` | Carpeta on es desen les transcripcions (per defecte: al costat de cada fitxer transcrit) |
| `--overwrite` | Sobreescriure les transcripcions existents |
| `-p`, `--prompt` | De què tracta l'àudio, com ara el tema o el context (no compatible amb Google) |
| `-k`, `--keywords` | Noms, termes o sigles que es diuen a l'àudio, separats per comes, perquè s'escriguin bé (no compatible amb Google) |
| `--translate` | Traduir l'àudio a l'anglès (no compatible amb Google) |
| `-q`, `--quiet` | Imprimir només els errors |
| `-v`, `--verbose` | Imprimir els registres per depurar errors |

**Opcions de WhisperX**

| Opció | Descripció |
| --- | --- |
| `-t`, `--output-types` | Tipus de fitxer de sortida separats per comes (p. ex. `txt,srt`) |
| `--diarize` | Identificar els parlants |
| `--speakers` | Nombre de parlants en identificar-los (`0` per detectar-lo) |
| `--model-size` | Model, p. ex. `small` o `large-v2` (consulta [Motors](/ca/reference/engines/#model)) |
| `--compute-type` | `int8`, `float16` o `float32` |
| `--batch-size` | Mida del lot |
| `--cpu` | Executar a la CPU |

**Opcions de l'API de Whisper**

| Opció | Descripció |
| --- | --- |
| `--openai-model` | Model de transcripció: `whisper-1`, `gpt-transcribe` o `gpt-4o-transcribe-diarize` |

Executa `python src/cli.py transcribe --help` per veure totes les opcions i els seus valors.

## Sortida i codi de sortida

El progrés s'imprimeix a la sortida d'error estàndard (amaga'l amb `--quiet`), i el text de la transcripció d'un sol fitxer a la sortida estàndard. L'ordre acaba amb el codi `1` si falla una transcripció.

Les claus d'API són les configurades a l'aplicació, o les variables d'entorn `OPENAI_API_KEY`, `GOOGLE_API_KEY` i `HF_TOKEN` (per identificar els parlants).
