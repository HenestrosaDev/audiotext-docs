---
title: Wiersz poleceń
description: Transkrybuj, podsumowuj i tłumacz pliki, foldery i filmy z YouTube ze skryptów za pomocą wiersza poleceń Audiotext.
sidebar:
  order: 3
---

Z Audiotext można też korzystać z wiersza poleceń, np. aby transkrybować ze skryptów. Ma trzy polecenia:

- `transcribe`: transkrybuje plik, pliki z folderu lub film z YouTube.
- `watch`: transkrybuje pliki dodawane do folderu, dopóki nie zostanie zatrzymane klawiszami `Ctrl+C`.
- `check-update`: sprawdza, czy jest dostępna nowa wersja, i wyświetla link do jej pobrania.

Opcje, których nie podasz, przyjmują wartości ustawione w aplikacji. Transkrypcje są zawsze zapisywane obok każdego transkrybowanego pliku albo w folderze podanym w `--output-dir` (w którym odtwarzane są podfoldery transkrybowanego folderu).

## Uruchamianie

Zainstalowana aplikacja uruchamia wiersz poleceń, gdy otrzyma jedno z jego poleceń:

| System | Polecenie |
| --- | --- |
| Linux | `audiotext` (instalowane w `~/.local/bin` przez `install.sh`) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe` w folderze instalacji Audiotext (domyślnie `%LOCALAPPDATA%\Programs\Audiotext`) |

Gdy [uruchamiasz go z kodu źródłowego](/pl/help/contributing/#przygotuj-projekt), użyj zamiast tego `uv run src/cli.py`.

## Przykłady

```bash
# Transkrypcja pliku. Tekst jest też wypisywany, więc można go przekierować
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Transkrypcja plików z folderu z rozpoznawaniem mówców
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transkrypcja filmu z YouTube za pomocą API Whisper
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transkrypcja spotkania za pomocą API Whisper, ze słowami kluczowymi i kontekstem
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Spotkanie o następnej wersji"

# Zapis napisów i dokumentu Word, podsumowanie i tłumaczenie na hiszpański
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Transkrypcja plików dodawanych do folderu aż do zatrzymania klawiszami Ctrl+C
audiotext watch inbox/ --output-types srt

# To samo, ale najpierw transkrybując pliki, które już są w folderze
audiotext watch inbox/ --existing
```

## Opcje

| Opcja | Opis |
| --- | --- |
| `-m`, `--method` | Metoda transkrypcji: `whisperx`, `whisper-api` lub `google` |
| `-l`, `--language` | Język nagrania jako kod ISO 639-1 (np. `pl`) lub `auto`, aby go wykryć (nieobsługiwane przez Google) |
| `-t`, `--output-types` | Typy plików wyjściowych oddzielone przecinkami, spośród `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` i `ass` (np. `txt,srt,md`) |
| `-o`, `--output-dir` | Folder, w którym zapisywane są transkrypcje (domyślnie obok każdego transkrybowanego pliku) |
| `--overwrite` | Ponownie transkrybować pliki, które mają już transkrypcję, zastępując ją |
| `--existing` | (tylko `watch`) Najpierw transkrybować pliki, które już są w folderze i nie mają jeszcze transkrypcji |
| `-p`, `--prompt` | O czym jest nagranie, np. temat lub okoliczności (nieobsługiwane przez Google) |
| `-k`, `--keywords` | Nazwy, terminy lub skróty z nagrania, oddzielone przecinkami, aby były poprawnie zapisane (nieobsługiwane przez Google) |
| `--translate` | Tłumaczenie nagrania na angielski podczas transkrypcji (nieobsługiwane przez Google). Dla innych języków zobacz `--translate-to` |
| `-q`, `--quiet` | Wypisywanie tylko błędów |
| `-v`, `--verbose` | Wypisywanie logów do debugowania błędów |
| `--version` | Wypisanie wersji Audiotext |

Typy wyjściowe, których metoda transkrypcji nie zapisuje sama (np. `md` lub `docx`), są eksportowane z jej wyniku, tak jak w aplikacji. `aud` zapisuje tylko WhisperX.

**Opcje podsumowania i tłumaczenia**

| Opcja | Opis |
| --- | --- |
| `--summarize` | Podsumowanie każdej transkrypcji, z najważniejszymi punktami i rozdziałami, w pliku `.summary.md` |
| `--summary-provider` | Dostawca modelu językowego, który podsumowuje: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` lub `ollama` |
| `--summary-model` | Model językowy, który podsumowuje |
| `--translate-to` | Tłumaczenie każdej transkrypcji na język (kod ISO 639-1), zapisywane w jej typach plików wyjściowych (np. `talk.es.srt`) |
| `--translation-provider` | Dostawca tłumaczeń: ci z `--summary-provider`, `deepl` lub `google` |
| `--translation-model` | Model językowy, który tłumaczy, dla dostawców modeli językowych |

Jeśli ich nie podasz, używane są dostawcy i modele ustawieni w aplikacji. Zobacz [Dostawcy](/pl/guides/summary-and-translation/#dostawcy).

**Opcje WhisperX**

| Opcja | Opis |
| --- | --- |
| `--diarize` | Rozpoznawanie mówców |
| `--speakers` | Liczba mówców przy rozpoznawaniu (`0`, aby ją wykryć) |
| `--model-size` | Model, np. `small` lub `large-v2` (zobacz [Silniki](/pl/reference/engines/#model)) |
| `--compute-type` | `int8`, `float16` lub `float32` |
| `--batch-size` | Rozmiar partii |
| `--cpu` | Uruchamianie na procesorze zamiast na karcie NVIDIA lub karcie graficznej Maca |

**Opcje API Whisper**

| Opcja | Opis |
| --- | --- |
| `--openai-model` | Model transkrypcji: `whisper-1`, `gpt-transcribe` lub `gpt-4o-transcribe-diarize` |

Uruchom `audiotext transcribe --help`, aby zobaczyć wszystkie opcje i ich wartości.

## Wyjście i kod zakończenia

Postęp jest wypisywany na standardowe wyjście błędów (ukryj go opcją `--quiet`), a tekst transkrypcji pojedynczego pliku na standardowe wyjście. Polecenie kończy się kodem `1`, jeśli transkrypcja, podsumowanie lub tłumaczenie się nie powiedzie, oraz kodem `130`, jeśli zostanie zatrzymane klawiszami `Ctrl+C`.

Jeśli klucz API dostawcy dla `--summarize` lub `--translate-to` nie jest ustawiony, polecenie zatrzymuje się przed transkrypcją. Nieudane podsumowanie lub tłumaczenie jest zgłaszane bez utraty transkrypcji, która i tak zostaje zapisana.

Klucze API to te ustawione w aplikacji lub ich [zmienne środowiskowe](/pl/reference/files-and-data/#zmienne-środowiskowe), np. `OPENAI_API_KEY`, `GOOGLE_API_KEY` i `HF_TOKEN` (do rozpoznawania mówców).
