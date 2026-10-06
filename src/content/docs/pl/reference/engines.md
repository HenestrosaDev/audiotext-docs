---
title: Silniki
description: Porównaj WhisperX, API Whisper i API Google oraz wybierz ich modele i opcje zaawansowane.
sidebar:
  order: 1
---

Audiotext transkrybuje za pomocą jednego z trzech silników, wybieranego na karcie **Silnik** w [ustawieniach transkrypcji](/pl/guides/transcription-settings/#silnik).

| | WhisperX | API Whisper | API Google |
| --- | --- | --- | --- |
| Działa na | Twoim komputerze | Serwerach OpenAI | Serwerach Google |
| Internet | Tylko do pobrania modeli | Wymagany | Wymagany |
| Koszt | Za darmo, bez limitów | Płatne | Darmowy limit (60 min/mies.) lub płatne z kluczem API |
| Wykrywa język | ✓ | ✓ | ✗ |
| Tłumaczy | ✓ | ✓ | ✗ |
| Znaczniki czasu | ✓ | Zależnie od modelu | ✗ |
| Rozpoznaje mówców | ✓ (token Hugging Face) | `gpt-4o-transcribe-diarize` | ✗ |
| Czasy słów | ✓ | `whisper-1` | ✗ |
| Tekst na żywo | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) to szybka implementacja Whisper od OpenAI, która działa na twoim komputerze, więc nagrania nigdy go nie opuszczają. Działa na procesorze lub, znacznie szybciej, na karcie graficznej NVIDIA z CUDA.

### Model

Większe modele są dokładniejsze, ale wolniejsze i zużywają więcej pamięci. Model jest pobierany przy pierwszym użyciu.

| Model | Parametry | Wymagana VRAM |
| :---: | :---: | :---: |
| `tiny`, `tiny.en` | 39 M | ~1 GB |
| `base`, `base.en` | 74 M | ~1 GB |
| `small`, `small.en` | 244 M | ~2 GB |
| `distil-small.en` | 166 M | ~2 GB |
| `medium`, `medium.en` | 769 M | ~5 GB |
| `distil-medium.en` | 394 M | ~3 GB |
| `large-v1`, `large-v2`, `large-v3` | 1550 M | <8 GB |
| `large-v3-turbo` | 809 M | ~6 GB |
| `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5` | 756 M | ~5 GB |

- **`large-v2`** jest domyślny, ponieważ `large-v3` częściej halucynuje i powtarza tekst, zwłaszcza w niektórych językach, np. japońskim, i pomija więcej znaków interpunkcyjnych.
- **`large-v3-turbo`** to odchudzona wersja `large-v3`, znacznie szybsza i prawie tak samo dokładna.
- Modele kończące się na **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) i modele **destylowane** (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) transkrybują tylko angielski. Są szybsze niż wielojęzyczne modele tej samej wielkości.

:::tip
Aby szybko wypróbować Audiotext, wybierz `tiny` lub `small`. Dla najlepszej jakości użyj `large-v2` lub `large-v3-turbo` na karcie graficznej.
:::

### Opcje zaawansowane

Znajdują się w **Preferencje** → **WhisperX**. Zmieniaj je tylko w razie problemów lub jeśli wiesz, co robisz: karta graficzna bez wolnej pamięci może zawiesić system.

- **Typ obliczeń**: precyzja liczb modelu. `float16` jest szybszy na kartach graficznych (domyślny z CUDA). `int8` zużywa mniej pamięci i jest domyślny na procesorze, ponieważ wiele procesorów nie obsługuje wydajnie `float16`. `float32` jest najdokładniejszy, dla kart z ponad 8 GB VRAM.
- **Rozmiar partii**: ile części nagrania jest przetwarzanych jednocześnie (domyślnie `8`). Nie wpływa na jakość, tylko na szybkość. Zmniejsz go, jeśli brakuje pamięci; zalecane jest maksymalnie `16`.
- **Używaj CPU**: uruchamia WhisperX na procesorze. Zawsze włączone, jeśli nie znaleziono karty z CUDA.

## API Whisper

Korzysta z [API OpenAI do zamiany mowy na tekst](https://platform.openai.com/docs/guides/speech-to-text). Jest przeznaczone dla komputerów, na których WhisperX nie działa płynnie, i wymaga klucza API OpenAI (zobacz [Klucze API](/pl/reference/preferences/#klucze-api)).

| Model | Znaczniki czasu | Mówcy | Uwagi |
| --- | :---: | :---: | --- |
| `whisper-1` (domyślny) | ✓ | ✗ | Można go odtwarzać segment po segmencie i tworzyć napisy. Tłumaczy na angielski. |
| `gpt-transcribe` | ✗ | ✗ | Dokładniejszy, ale bez znaczników czasu. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Rozpoznaje mówców. Nie używa słów kluczowych ani opisu. |

Tłumaczenia na angielski zawsze wykonuje `whisper-1`, ponieważ to jedyny model, który tłumaczy.

Długie nagrania są dzielone na fragmenty do 10 minut, cięte w miejscu ciszy, aby nie przeciąć żadnego słowa, ponieważ API odrzuca pliki większe niż 25 MB. W `whisper-1` koniec każdego fragmentu jest przekazywany jako kontekst do następnego; w `gpt-4o-transcribe-diarize` z kolejnymi fragmentami wysyłana jest próbka głosu każdego mówcy, aby zachowali swoje etykiety.

### Opcje

- **Format odpowiedzi** (karta Wynik, dla folderów): `text` (domyślny), `json`, `verbose_json`, `srt` lub `vtt`. Napisy i `verbose_json` wymagają modelu ze znacznikami czasu.
- **Temperatura** (Preferencje → Whisper API): od 0 do 1. Wysokie wartości, np. 0,8, czynią wynik bardziej losowym, a niskie, np. 0,2, bardziej skupionym. Przy 0 (domyślnie) model w razie potrzeby sam ją zwiększa.
- **Znaczniki czasu słów** (Preferencje → Whisper API): czy `whisper-1` zwraca też znaczniki czasu każdego słowa, aby wyróżniać je podczas odtwarzania. Trwa dłużej. Domyślnie włączone.

## API Google

Korzysta z [Google Speech-to-Text API](https://cloud.google.com/speech-to-text). Nie stawia znaków interpunkcyjnych (dodaje je Audiotext), a jego jakość jest niższa niż Whisper, więc transkrypcje często wymagają poprawek. Nie wykrywa języka ani nie tłumaczy i zwraca zwykły tekst bez znaczników czasu.

Bez klucza API używany jest darmowy limit, wynoszący 60 minut miesięcznie. Aby go zwiększyć, ustaw klucz API Google. Google pobiera opłaty za korzystanie, za które Audiotext nie odpowiada.
