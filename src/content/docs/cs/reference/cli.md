---
title: Příkazová řádka
description: Přepisujte, shrnujte a překládejte soubory, složky a videa z YouTube ze skriptů pomocí příkazové řádky Audiotextu.
sidebar:
  order: 3
---

Audiotext lze používat i z příkazové řádky, např. k přepisu ze skriptů. Má tři příkazy:

- `transcribe`: přepíše soubor, soubory složky nebo video z YouTube.
- `watch`: přepisuje soubory přidávané do složky, dokud ho nezastavíte klávesami `Ctrl+C`.
- `check-update`: zkontroluje, zda je k dispozici nová verze, a vypíše odkaz ke stažení.

Nezadané možnosti přebírají hodnoty nastavené v aplikaci. Přepisy se vždy ukládají vedle každého přepsaného souboru, nebo do složky zadané pomocí `--output-dir` (ve které se znovu vytvoří podsložky přepsané složky).

## Spuštění

Nainstalovaná aplikace spustí příkazovou řádku, když dostane jeden z jejích příkazů:

| Systém | Příkaz |
| --- | --- |
| Linux | `audiotext` (instaluje ho `install.sh` do `~/.local/bin`) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe` ve složce, kam je Audiotext nainstalován (výchozí `%LOCALAPPDATA%\Programs\Audiotext`) |

Když ho [spouštíte ze zdrojového kódu](/cs/help/contributing/#příprava-projektu), použijte místo toho `uv run src/cli.py`.

## Příklady

```bash
# Přepis souboru. Text se také vypíše, takže ho lze přesměrovat
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Přepis souborů složky s rozpoznáním mluvčích
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Přepis videa z YouTube pomocí Whisper API
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Přepis schůzky pomocí Whisper API s klíčovými slovy a kontextem
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Schůzka o příští verzi"

# Uložení titulků a dokumentu Word, shrnutí a překlad do španělštiny
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Přepis souborů přidávaných do složky, dokud se nezastaví klávesami Ctrl+C
audiotext watch inbox/ --output-types srt
```

## Možnosti

| Možnost | Popis |
| --- | --- |
| `-m`, `--method` | Metoda přepisu: `whisperx`, `whisper-api` nebo `google` |
| `-l`, `--language` | Jazyk zvuku jako kód ISO 639-1 (např. `cs`), nebo `auto` pro rozpoznání (Google nepodporuje) |
| `-t`, `--output-types` | Typy výstupních souborů oddělené čárkami, z `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` a `ass` (např. `txt,srt,md`) |
| `-o`, `--output-dir` | Složka, kam se ukládají přepisy (výchozí: vedle každého přepsaného souboru) |
| `--overwrite` | Přepsat existující přepisy |
| `-p`, `--prompt` | O čem nahrávka je, například téma nebo prostředí (Google nepodporuje) |
| `-k`, `--keywords` | Jména, termíny nebo zkratky z nahrávky oddělené čárkami, aby se správně napsaly (Google nepodporuje) |
| `--translate` | Přeložit zvuk při přepisu do angličtiny (Google nepodporuje). Pro jiné jazyky viz `--translate-to` |
| `-q`, `--quiet` | Vypisovat jen chyby |
| `-v`, `--verbose` | Vypisovat protokoly pro ladění chyb |
| `--version` | Vypsat verzi Audiotextu |

Výstupní typy, které metoda přepisu sama neukládá (např. `md` nebo `docx`), se exportují z jejího výsledku stejně jako v aplikaci. `aud` ukládá jen WhisperX.

**Možnosti shrnutí a překladu**

| Možnost | Popis |
| --- | --- |
| `--summarize` | Shrnout každý přepis s hlavními body a kapitolami do souboru `.summary.md` |
| `--summary-provider` | Poskytovatel jazykového modelu, který shrnuje: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` nebo `ollama` |
| `--summary-model` | Jazykový model, který shrnuje |
| `--translate-to` | Přeložit každý přepis do jazyka (kód ISO 639-1), uložený v jeho typech výstupních souborů (např. `talk.es.srt`) |
| `--translation-provider` | Poskytovatel překladů: ti z `--summary-provider`, `deepl` nebo `google` |
| `--translation-model` | Jazykový model, který překládá, pro poskytovatele jazykových modelů |

Pokud je nezadáte, použijí se poskytovatelé a modely nastavené v aplikaci. Viz [Poskytovatelé](/cs/guides/summary-and-translation/#poskytovatelé).

**Možnosti WhisperX**

| Možnost | Popis |
| --- | --- |
| `--diarize` | Rozpoznat mluvčí |
| `--speakers` | Počet mluvčích při rozpoznávání (`0` pro automatické rozpoznání) |
| `--model-size` | Model, např. `small` nebo `large-v2` (viz [Nástroje](/cs/reference/engines/#model)) |
| `--compute-type` | `int8`, `float16` nebo `float32` |
| `--batch-size` | Velikost dávky |
| `--cpu` | Spustit na procesoru místo na grafické kartě NVIDIA nebo grafickém procesoru Macu |

**Možnosti Whisper API**

| Možnost | Popis |
| --- | --- |
| `--openai-model` | Model přepisu: `whisper-1`, `gpt-transcribe` nebo `gpt-4o-transcribe-diarize` |

Spuštěním `audiotext transcribe --help` zobrazíte všechny možnosti a jejich hodnoty.

## Výstup a návratový kód

Průběh se vypisuje na standardní chybový výstup (skryjete ho pomocí `--quiet`) a text přepisu jednoho souboru na standardní výstup. Příkaz skončí s kódem `1`, pokud selže přepis, shrnutí nebo překlad, a s kódem `130`, pokud ho zastavíte klávesami `Ctrl+C`.

Pokud není nastaven klíč API poskytovatele pro `--summarize` nebo `--translate-to`, příkaz se zastaví ještě před přepisem. Neúspěšné shrnutí nebo překlad se ohlásí, aniž by se přepis ztratil; ten se uloží i tak.

Klíče API jsou ty nastavené v aplikaci, nebo jejich [proměnné prostředí](/cs/reference/files-and-data/#proměnné-prostředí), například `OPENAI_API_KEY`, `GOOGLE_API_KEY` a `HF_TOKEN` (pro rozpoznání mluvčích).
