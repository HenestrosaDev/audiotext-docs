---
title: Preferencje
description: Wszystkie ustawienia okna Preferencje, karta po karcie.
sidebar:
  order: 2
---

**Preferencje** zawierają ustawienia, które nie zmieniają się przy każdej transkrypcji. Otwórz je kołem zębatym w prawym górnym rogu okna. Zmiany zapisują się automatycznie.

## Ogólne

- **Wygląd**: **Systemowy** (zgodny z systemem), **Jasny** lub **Ciemny**.
- **Rozmiar interfejsu**: rozmiar tekstu i elementów sterujących, od 80% do 200%. Domyślnie `100%`. Zmiana jest stosowana od razu.
- **Język interfejsu**: język Audiotext lub **Język systemu**. Zobacz [dostępne języki](/pl/reference/formats-and-languages/#języki-interfejsu).
- **Format daty**: jak wyświetlane są daty transkrypcji, w języku interfejsu: krótki (`4.10.2026`), średni (`4 paź 2026`, domyślny), długi (`4 października 2026`) lub ISO (`2026-10-04`). Menu pokazuje każdy format na przykładzie.
- **Format godziny**: **Automatycznie** (zegar języka interfejsu), 12-godzinny (`1:30 PM`) lub 24-godzinny (`13:30`).
- **Powiadomienia**: wyświetla powiadomienie systemowe, gdy transkrypcja jest gotowa (w przypadku folderu — gdy gotowe są wszystkie jego pliki, a w przypadku obserwowanego folderu — za każdym razem, gdy gotowy jest nowy plik). Domyślnie włączone. W macOS pochodzą z aplikacji **Edytor skryptów**, a w Windows z **Windows PowerShell**, więc zezwala się na nie lub wycisza je dla tych aplikacji w ustawieniach systemu. W Linuksie wymagają `notify-send` (pakiet `libnotify-bin` lub `libnotify`).
- **Aktualizacje**: przy otwieraniu aplikacji sprawdza, czy jest dostępna nowa wersja, a jeśli tak, pokazuje na górnym pasku przycisk **Dostępna jest wersja …**, który otwiera stronę pobierania. Wersje przedpremierowe nie są proponowane. Domyślnie włączone.

## AI

Dostawcy [podsumowań, pytań i tłumaczeń](/pl/guides/summary-and-translation/):

- **Podsumowanie** → **Dostawca** i **Model**.
- **Zapytaj** → **Dostawca** i **Model**: te, które odpowiadają na pytania o transkrypcje. Dopóki ich nie zmienisz, są takie same jak dla podsumowań.
- **Tłumaczenie** → **Dostawca** i **Model**. DeepL i Google Translate nie mają modeli do wyboru.
- **Ollama** → **Adres URL serwera**: adres Ollamy, domyślnie `http://localhost:11434`.

Zostaw **Model** pusty, aby użyć domyślnego modelu dostawcy. Przycisk obok dostawcy ustawia jego klucz API.

## Klucze API

Klucze poszczególnych usług. Kliknij **Ustaw klucz API…**, aby wpisać klucz, lub **Zmień klucz API…**, aby go zastąpić (zostaw puste pole, aby go usunąć). Są przechowywane w magazynie poświadczeń systemu.

| Klucz | Do czego służy |
| --- | --- |
| Klucz API OpenAI | API Whisper oraz podsumowywanie, pytania i tłumaczenie za pomocą OpenAI |
| Klucz API Anthropic | Podsumowywanie, pytania i tłumaczenie za pomocą Claude |
| Klucz API DeepSeek | Podsumowywanie, pytania i tłumaczenie za pomocą DeepSeek |
| Klucz API Gemini | Podsumowywanie, pytania i tłumaczenie za pomocą Gemini (z Google AI Studio) |
| Klucz API Mistral | Podsumowywanie, pytania i tłumaczenie za pomocą Mistral |
| Klucz API xAI | Podsumowywanie, pytania i tłumaczenie za pomocą Grok |
| Klucz API DeepL | Tłumaczenie za pomocą DeepL (działają też klucze z darmowego planu) |
| Klucz API Google | Google Speech-to-Text ponad darmowy limit oraz Google Translate (Cloud Translation API) |
| Token Hugging Face | Rozpoznawanie mówców w WhisperX |

:::caution
Każdy dostawca pobiera opłaty za korzystanie ze swojego API, za które Audiotext nie odpowiada. Jeśli OpenAI zwraca błąd `429` z nowym kluczem, zobacz [Rozwiązywanie problemów](/pl/help/troubleshooting/#api-whisper-zwraca-błąd-429).
:::

## WhisperX

**Typ obliczeń**, **Rozmiar partii** i **Używaj CPU**. Zobacz [opcje zaawansowane WhisperX](/pl/reference/engines/#opcje-zaawansowane). Na Macu z Apple Silicon WhisperX transkrybuje na jego karcie graficznej, chyba że opcja **Używaj CPU** jest włączona. Zobacz [Na Macu](/pl/reference/engines/#na-macu).

## Napisy

Jak dzielone są napisy: te wyświetlane na filmie i w widoku **Napisy**, eksportowane pliki napisów oraz [filmy z napisami](/pl/guides/transcript/#eksport-filmu-z-napisami). Każda opcja ma wartość dla filmów poziomych i drugą dla pionowych (wyższych niż szerokich, np. na telefony), które są węższe:

| Opcja | Poziome | Pionowe |
| --- | :---: | :---: |
| **Maks. wierszy na napis** | `2` | `2` |
| **Maks. znaków w wierszu** | `42` | `24` |
| **Chiński, japoński i koreański**: znaki w wierszu w tych językach, których znaki są mniej więcej dwa razy szersze od łacińskich | `16` | `10` |

Wiersze napisu są wyrównywane długością, a języki zapisywane bez spacji są łamane między znakami.

**Wyróżniaj słowa** podkreśla w plikach `.srt` i `.vtt` każde słowo w chwili, gdy jest wypowiadane. Domyślnie wyłączone.

## Whisper API

**Temperatura** i **Znaczniki czasu słów**. Zobacz [opcje API Whisper](/pl/reference/engines/#opcje).

## O programie

Wersja Audiotext i linki do tej dokumentacji, kodu źródłowego na GitHubie i strony wsparcia. **Sprawdź aktualizacje** od razu sprawdza, czy jest nowa wersja: jeśli tak, przycisk zmienia się w **Pobierz** i otwiera jej stronę.
