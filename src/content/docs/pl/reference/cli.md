---
title: Wiersz poleceń
description: Transkrybuj pliki, foldery i filmy z YouTube ze skryptów za pomocą wiersza poleceń Audiotext.
sidebar:
  order: 3
---

Z Audiotext można też korzystać z wiersza poleceń, aby transkrybować ze skryptów, gdy [uruchamiasz go z kodu źródłowego](/pl/help/contributing/#przygotuj-projekt). Ma trzy polecenia:

- `transcribe`: transkrybuje plik, pliki z folderu lub film z YouTube.
- `watch`: transkrybuje pliki dodawane do folderu, dopóki nie zostanie zatrzymane klawiszami `Ctrl+C`.
- `check-update`: sprawdza, czy jest dostępna nowa wersja, i wyświetla link do jej pobrania.

Opcje, których nie podasz, przyjmują wartości ustawione w aplikacji. Transkrypcje są zawsze zapisywane obok każdego transkrybowanego pliku albo w folderze podanym w `--output-dir` (w którym odtwarzane są podfoldery transkrybowanego folderu).

## Przykłady

```bash
# Transkrypcja pliku. Tekst jest też wypisywany, więc można go przekierować
uv run src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Transkrypcja plików z folderu z rozpoznawaniem mówców
uv run src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transkrypcja filmu z YouTube za pomocą API Whisper
uv run src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transkrypcja spotkania za pomocą API Whisper, ze słowami kluczowymi i kontekstem
uv run src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Spotkanie o następnej wersji"

# Transkrypcja plików dodawanych do folderu aż do zatrzymania klawiszami Ctrl+C
uv run src/cli.py watch inbox/ --output-types srt
```

## Opcje

| Opcja | Opis |
| --- | --- |
| `-m`, `--method` | Metoda transkrypcji: `whisperx`, `whisper-api` lub `google` |
| `-l`, `--language` | Język nagrania jako kod ISO 639-1 (np. `pl`) lub `auto`, aby go wykryć (nieobsługiwane przez Google) |
| `-o`, `--output-dir` | Folder, w którym zapisywane są transkrypcje (domyślnie obok każdego transkrybowanego pliku) |
| `--overwrite` | Zastępowanie istniejących transkrypcji |
| `-p`, `--prompt` | O czym jest nagranie, np. temat lub okoliczności (nieobsługiwane przez Google) |
| `-k`, `--keywords` | Nazwy, terminy lub skróty z nagrania, oddzielone przecinkami, aby były poprawnie zapisane (nieobsługiwane przez Google) |
| `--translate` | Tłumaczenie nagrania na angielski (nieobsługiwane przez Google) |
| `-q`, `--quiet` | Wypisywanie tylko błędów |
| `-v`, `--verbose` | Wypisywanie logów do debugowania błędów |

**Opcje WhisperX**

| Opcja | Opis |
| --- | --- |
| `-t`, `--output-types` | Typy plików wyjściowych oddzielone przecinkami (np. `txt,srt`) |
| `--diarize` | Rozpoznawanie mówców |
| `--speakers` | Liczba mówców przy rozpoznawaniu (`0`, aby ją wykryć) |
| `--model-size` | Model, np. `small` lub `large-v2` (zobacz [Silniki](/pl/reference/engines/#model)) |
| `--compute-type` | `int8`, `float16` lub `float32` |
| `--batch-size` | Rozmiar partii |
| `--cpu` | Uruchamianie na procesorze |

**Opcje API Whisper**

| Opcja | Opis |
| --- | --- |
| `--openai-model` | Model transkrypcji: `whisper-1`, `gpt-transcribe` lub `gpt-4o-transcribe-diarize` |

Uruchom `uv run src/cli.py transcribe --help`, aby zobaczyć wszystkie opcje i ich wartości.

## Wyjście i kod zakończenia

Postęp jest wypisywany na standardowe wyjście błędów (ukryj go opcją `--quiet`), a tekst transkrypcji pojedynczego pliku na standardowe wyjście. Polecenie kończy się kodem `1`, jeśli transkrypcja się nie powiedzie.

Klucze API to te ustawione w aplikacji lub zmienne środowiskowe `OPENAI_API_KEY`, `GOOGLE_API_KEY` i `HF_TOKEN` (do rozpoznawania mówców).
