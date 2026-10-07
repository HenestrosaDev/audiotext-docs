---
title: Preferencje
description: Wszystkie ustawienia okna Preferencje, karta po karcie.
sidebar:
  order: 2
---

**Preferencje** zawierają ustawienia, które nie zmieniają się przy każdej transkrypcji. Otwórz je kołem zębatym w prawym górnym rogu okna. Zmiany zapisują się automatycznie.

## Ogólne

- **Wygląd**: **Systemowy** (zgodny z systemem), **Jasny** lub **Ciemny**.
- **Język interfejsu**: język Audiotext lub **Język systemu**. Zobacz [dostępne języki](/pl/reference/formats-and-languages/#języki-interfejsu).
- **Format daty**: jak wyświetlane są daty transkrypcji, w języku interfejsu: krótki (`4.10.2026`), średni (`4 paź 2026`, domyślny), długi (`4 października 2026`) lub ISO (`2026-10-04`). Menu pokazuje każdy format na przykładzie.
- **Format godziny**: **Automatycznie** (zegar języka interfejsu), 12-godzinny (`1:30 PM`) lub 24-godzinny (`13:30`).
- **Powiadomienia**: wyświetla powiadomienie systemowe, gdy transkrypcja jest gotowa (w przypadku folderu — gdy gotowe są wszystkie jego pliki, a w przypadku obserwowanego folderu — za każdym razem, gdy gotowy jest nowy plik). Domyślnie włączone. W macOS pochodzą z aplikacji **Edytor skryptów**, a w Windows z **Windows PowerShell**, więc zezwala się na nie lub wycisza je dla tych aplikacji w ustawieniach systemu. W Linuksie wymagają `notify-send` (pakiet `libnotify-bin` lub `libnotify`).
- **Aktualizacje**: przy otwieraniu aplikacji sprawdza, czy jest dostępna nowa wersja, a jeśli tak, pokazuje na górnym pasku przycisk **Dostępna jest wersja …**, który otwiera stronę pobierania. Wersje przedpremierowe nie są proponowane. Domyślnie włączone.

## AI

Dostawcy [podsumowań i tłumaczeń](/pl/guides/summary-and-translation/):

- **Podsumowanie** → **Dostawca** i **Model**.
- **Tłumaczenie** → **Dostawca** i **Model**. DeepL i Google Translate nie mają modeli do wyboru.
- **Ollama** → **Adres URL serwera**: adres Ollamy, domyślnie `http://localhost:11434`.

Zostaw **Model** pusty, aby użyć domyślnego modelu dostawcy. Przycisk obok dostawcy ustawia jego klucz API.

## Klucze API

Klucze poszczególnych usług. Kliknij **Ustaw…**, aby wpisać klucz, lub **Zmień…**, aby go zastąpić (zostaw puste pole, aby go usunąć). Są przechowywane w magazynie poświadczeń systemu.

| Klucz | Do czego służy |
| --- | --- |
| Klucz API OpenAI | API Whisper oraz podsumowywanie i tłumaczenie za pomocą OpenAI |
| Klucz API Anthropic | Podsumowywanie i tłumaczenie za pomocą Claude |
| Klucz API DeepSeek | Podsumowywanie i tłumaczenie za pomocą DeepSeek |
| Klucz API Gemini | Podsumowywanie i tłumaczenie za pomocą Gemini (z Google AI Studio) |
| Klucz API Mistral | Podsumowywanie i tłumaczenie za pomocą Mistral |
| Klucz API xAI | Podsumowywanie i tłumaczenie za pomocą Grok |
| Klucz API DeepL | Tłumaczenie za pomocą DeepL (działają też klucze z darmowego planu) |
| Klucz API Google | Google Speech-to-Text ponad darmowy limit oraz Google Translate (Cloud Translation API) |
| Token Hugging Face | Rozpoznawanie mówców w WhisperX |

:::caution
Każdy dostawca pobiera opłaty za korzystanie ze swojego API, za które Audiotext nie odpowiada. Jeśli OpenAI zwraca błąd `429` z nowym kluczem, zobacz [Rozwiązywanie problemów](/pl/help/troubleshooting/#api-whisper-zwraca-błąd-429).
:::

## WhisperX

**Typ obliczeń**, **Rozmiar partii** i **Używaj CPU**. Zobacz [opcje zaawansowane WhisperX](/pl/reference/engines/#opcje-zaawansowane).

## Napisy

Opcje plików `.srt` i `.vtt` zapisywanych podczas transkrypcji folderu za pomocą WhisperX:

- **Wyróżniaj słowa**: podkreśla każde słowo w chwili, gdy jest wypowiadane. Domyślnie wyłączone.
- **Maks. liczba wierszy**: maksymalna liczba wierszy każdego napisu. Domyślnie `2`.
- **Maks. szerokość wiersza**: maksymalna liczba znaków w wierszu przed jego złamaniem. Domyślnie `42`.

## Whisper API

**Temperatura** i **Znaczniki czasu słów**. Zobacz [opcje API Whisper](/pl/reference/engines/#opcje).

## O programie

Wersja Audiotext i linki do tej dokumentacji, kodu źródłowego na GitHubie i strony wsparcia. **Sprawdź aktualizacje** od razu sprawdza, czy jest nowa wersja: jeśli tak, przycisk zmienia się w **Pobierz** i otwiera jej stronę.
