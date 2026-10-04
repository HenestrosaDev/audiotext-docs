---
title: Příkazová řádka
description: Přepisujte soubory, složky a videa z YouTube ze skriptů pomocí příkazové řádky Audiotextu.
sidebar:
  order: 3
---

Audiotext lze používat i z příkazové řádky a přepisovat tak ze skriptů, když ho [spouštíte ze zdrojového kódu](/cs/help/contributing/#příprava-projektu). Má tři příkazy:

- `transcribe`: přepíše soubor, soubory složky nebo video z YouTube.
- `watch`: přepisuje soubory přidávané do složky, dokud ho nezastavíte klávesami `Ctrl+C`.
- `check-update`: zkontroluje, zda je k dispozici nová verze, a vypíše odkaz ke stažení.

Nezadané možnosti přebírají hodnoty nastavené v aplikaci. Přepisy se vždy ukládají vedle každého přepsaného souboru, nebo do složky zadané pomocí `--output-dir` (ve které se znovu vytvoří podsložky přepsané složky).

## Příklady

```bash
# Přepis souboru. Text se také vypíše, takže ho lze přesměrovat
python src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Přepis souborů složky s rozpoznáním mluvčích
python src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Přepis videa z YouTube pomocí Whisper API
python src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Přepis schůzky pomocí Whisper API s klíčovými slovy a kontextem
python src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Schůzka o příští verzi"

# Přepis souborů přidávaných do složky, dokud se nezastaví klávesami Ctrl+C
python src/cli.py watch inbox/ --output-types srt
```

## Možnosti

| Možnost | Popis |
| --- | --- |
| `-m`, `--method` | Metoda přepisu: `whisperx`, `whisper-api` nebo `google` |
| `-l`, `--language` | Jazyk zvuku jako kód ISO 639-1 (např. `cs`), nebo `auto` pro rozpoznání (Google nepodporuje) |
| `-o`, `--output-dir` | Složka, kam se ukládají přepisy (výchozí: vedle každého přepsaného souboru) |
| `--overwrite` | Přepsat existující přepisy |
| `-p`, `--prompt` | O čem nahrávka je, například téma nebo prostředí (Google nepodporuje) |
| `-k`, `--keywords` | Jména, termíny nebo zkratky z nahrávky oddělené čárkami, aby se správně napsaly (Google nepodporuje) |
| `--translate` | Přeložit zvuk do angličtiny (Google nepodporuje) |
| `-q`, `--quiet` | Vypisovat jen chyby |
| `-v`, `--verbose` | Vypisovat protokoly pro ladění chyb |

**Možnosti WhisperX**

| Možnost | Popis |
| --- | --- |
| `-t`, `--output-types` | Typy výstupních souborů oddělené čárkami (např. `txt,srt`) |
| `--diarize` | Rozpoznat mluvčí |
| `--speakers` | Počet mluvčích při rozpoznávání (`0` pro automatické rozpoznání) |
| `--model-size` | Model, např. `small` nebo `large-v2` (viz [Nástroje](/cs/reference/engines/#model)) |
| `--compute-type` | `int8`, `float16` nebo `float32` |
| `--batch-size` | Velikost dávky |
| `--cpu` | Spustit na procesoru |

**Možnosti Whisper API**

| Možnost | Popis |
| --- | --- |
| `--openai-model` | Model přepisu: `whisper-1`, `gpt-transcribe` nebo `gpt-4o-transcribe-diarize` |

Spuštěním `python src/cli.py transcribe --help` zobrazíte všechny možnosti a jejich hodnoty.

## Výstup a návratový kód

Průběh se vypisuje na standardní chybový výstup (skryjete ho pomocí `--quiet`) a text přepisu jednoho souboru na standardní výstup. Pokud přepis selže, příkaz skončí s kódem `1`.

Klíče API jsou ty nastavené v aplikaci, nebo proměnné prostředí `OPENAI_API_KEY`, `GOOGLE_API_KEY` a `HF_TOKEN` (pro rozpoznání mluvčích).
