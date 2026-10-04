---
title: Ustawienia transkrypcji
description: Wybierz silnik, języki, kontekst, opcje i wynik każdej transkrypcji.
sidebar:
  order: 2
---

Przed transkrypcją Audiotext pokazuje jej ustawienia pogrupowane w karty. Są zapamiętywane na kolejny raz, a każda transkrypcja zachowuje ustawienia, z którymi powstała.

![Ustawienia transkrypcji pliku](/screenshots/transcription-settings.png)

## Silnik

**Metoda transkrypcji**:

| Silnik | Gdzie działa | Koszt | Uwagi |
| --- | --- | --- | --- |
| **WhisperX** (domyślny) | Twój komputer | Za darmo i bez limitów | Prywatnie i offline. Więcej opcji: mówcy, czasy słów, tekst na żywo. |
| **API Whisper** | Serwery OpenAI | Płatny za minutę | Wymaga [klucza API OpenAI](/pl/reference/preferences/#klucze-api). Dla komputerów, na których WhisperX nie działa płynnie. |
| **API Google** | Serwery Google | Darmowy limit lub płatny | Niższa jakość i brak znaczników czasu. Klucz API jest opcjonalny. |

**Model** zależy od silnika. W WhisperX większe modele są dokładniejsze, ale wolniejsze. W API Whisper decyduje, czy transkrypcja ma znaczniki czasu i mówców. Porównanie znajdziesz w sekcji [Silniki](/pl/reference/engines/).

## Język

- **Język nagrania**: domyślnie **Wykryj automatycznie**. Wybranie go pozwala uniknąć błędów w krótkich lub mieszanych nagraniach. API Google nie potrafi go wykryć, więc trzeba go wybrać.
- **Język transkrypcji**: domyślnie **Taki sam jak nagranie**. Wybierz inny język, aby przetłumaczyć nagranie podczas transkrypcji.

Gdy języki się różnią, pojawiają się opcje w sekcji **Tłumaczenie**:

- **Tłumacz za pomocą Whisper (zalecane)**: Whisper transkrybuje i tłumaczy nagranie w jednym kroku. Tłumaczy tylko na angielski.
- **Zapisz bezpośrednio w języku: _język_ (eksperymentalne)**: Whisper otrzymuje polecenie zapisania transkrypcji bezpośrednio w tym języku. W wielu językach działa to dobrze, ale sprawdź wynik.

API Google nie tłumaczy. Aby później przetłumaczyć transkrypcję na dowolny język, korzystając z większej liczby dostawców, użyj przycisku [Przetłumacz](/pl/guides/summary-and-translation/#tłumaczenie) w transkrypcji.

## Kontekst

Dwa opcjonalne pola, które pomagają modelowi:

- **Słowa kluczowe**: nazwy, terminy lub skróty wypowiadane w nagraniu, oddzielone przecinkami (np. `Audiotext, WhisperX, Henestrosa`), aby były poprawnie zapisane. To tylko podpowiedzi: słowo kluczowe zostanie zapisane tylko wtedy, gdy pada w nagraniu.
- **Opis**: o czym jest nagranie, np. jego temat lub okoliczności (np. `Wywiad o rozpoznawaniu mowy`).

Używają ich WhisperX i API Whisper, z wyjątkiem modelu `gpt-4o-transcribe-diarize`. API Google ich nie używa.

## Opcje

- **Czasy poszczególnych słów** (WhisperX): wyrównuje każde słowo z nagraniem, aby wyróżniać je podczas odtwarzania. Trwa nieco dłużej. Napisy już z nich korzystają.
- **Wyodrębnij mowę**: przed transkrypcją redukuje muzykę i szum tła.
- **Rozpoznawaj mówców** (WhisperX): oznacza, kto mówi w każdej części, np. `SPEAKER_00`. Jeśli wiesz, ile osób mówi, wpisz to w polu **Liczba mówców** (`0` wykrywa automatycznie). Wymaga darmowego tokenu Hugging Face; zobacz [Rozpoznawanie mówców](#rozpoznawanie-mówców). W API Whisper mówców rozpoznaje model `gpt-4o-transcribe-diarize`.

### Rozpoznawanie mówców

Model rozpoznający mówców, [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1), jest darmowy, ale wymaga tokenu Hugging Face:

1. Załóż konto w [Hugging Face](https://huggingface.co/join) i zaakceptuj warunki [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1).
2. Utwórz token z rolą `Read` w [swoich ustawieniach](https://huggingface.co/settings/tokens).
3. Kliknij **Ustaw token Hugging Face…** i wklej go.

Model jest pobierany przy pierwszym użyciu. Potem mówcy są rozpoznawani offline.

## Tekst na żywo

Widoczny tylko dla mikrofonu. Zobacz [Tekst na żywo](/pl/guides/sources/#tekst-na-żywo).

## Folder i Wynik

Widoczne tylko dla folderów:

- **Obserwuj folder**: zobacz [Obserwuj folder](/pl/guides/sources/#obserwuj-folder).
- **Typy plików**: w WhisperX jeden lub więcej spośród `.txt`, `.srt`, `.vtt`, `.json`, `.tsv` i `.aud`. W API Whisper format plików (`text`, `json`, `verbose_json`, `srt` lub `vtt`); napisy wymagają modelu ze znacznikami czasu. API Google zwraca zwykły tekst (`.txt`).
- **Lokalizacja**: pliki są zapisywane obok każdego pliku źródłowego. Kliknij **Zmień…**, aby zapisać je w innym folderze (jego podfoldery zostaną odtworzone), lub **Obok źródła**, aby wrócić.
- **Zastępuj istniejące pliki**: ponownie transkrybuje pliki, które mają już transkrypcję, i ją zastępuje.

Opcje napisów (szerokość wiersza, liczba wierszy, wyróżnione słowa) znajdują się w [Preferencjach](/pl/reference/preferences/#napisy).
