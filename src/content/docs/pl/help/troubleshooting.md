---
title: Rozwiązywanie problemów
description: Rozwiązania najczęstszych problemów z Audiotext.
sidebar:
  order: 1
---

## Pierwsza transkrypcja w WhisperX trwa długo

Przy pierwszym użyciu model jest pobierany, co może potrwać kilka minut, zależnie od połączenia i wielkości modelu (do ~3 GB). Postęp pokazuje, kiedy model się ładuje. Model pozostaje w pamięci, dopóki jego opcje się nie zmienią, więc kolejne transkrypcje zaczynają się od razu.

## WhisperX kończy się błędem `CUDA out of memory`

Karta graficzna nie ma dość pamięci dla tych ustawień. Spróbuj w tej kolejności:

1. Zmniejsz **Rozmiar partii** (np. `4`) w **Preferencje** → **WhisperX**.
2. Użyj mniejszego modelu (np. `small` lub `base`).
3. Użyj lżejszego **Typu obliczeń** (np. `int8`).

Dwa ostatnie mogą obniżyć jakość. Ile pamięci potrzebuje każdy model, zobaczysz w sekcji [Silniki](/pl/reference/engines/#model).

## Transkrypcja trwa zbyt długo

Szybkość WhisperX zależy od sprzętu, więc na słabszych procesorach nie oczekuj natychmiastowych wyników. Wypróbuj mniejszy model, np. `small`, `large-v3-turbo` na karcie graficznej lub typ obliczeń `int8`. Możesz też użyć **API Whisper** lub **API Google**, które działają na zdalnych serwerach.

## API Whisper zwraca błąd `429`

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

Na koncie OpenAI skończyły się środki albo trzeba je doładować przed pierwszym użyciem API (nawet jeśli masz darmowe środki). Kup środki w sekcji [Billing](https://platform.openai.com/settings/organization/billing/overview) konta OpenAI. Aktywacja konta może potrwać do 10 minut.

Jeśli klucz API utworzono przed pierwszym doładowaniem, a błąd nie znika po 10 minutach, utwórz nowy klucz i ustaw go w **Preferencje** → **Klucze API**.

## Mówcy nie są rozpoznawani

Rozpoznawanie mówców wymaga tokenu Hugging Face i zaakceptowania warunków modelu. Sprawdź, czy:

- Zaakceptowano warunki [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) na tym samym koncie.
- Token ma rolę `Read` i jest ustawiony w **Preferencje** → **Klucze API**.

Zobacz [Rozpoznawanie mówców](/pl/guides/transcription-settings/#rozpoznawanie-mówców).

## Nie znaleziono mikrofonu lub nic się nie nagrywa

- Sprawdź, czy mikrofon jest podłączony, i kliknij przycisk odświeżania obok listy mikrofonów.
- W macOS zezwól Audiotext na dostęp w **Ustawienia systemowe** → **Prywatność i ochrona** → **Mikrofon**. W Windows w **Ustawienia** → **Prywatność** → **Mikrofon**.
- Jeśli miernik poziomu pokazuje **Brak dźwięku**, wybierz inny mikrofon z listy lub sprawdź, czy nie jest wyciszony.

## Nie można odtworzyć nagrania transkrypcji

Plik źródłowy został przeniesiony lub usunięty. Tekst pozostaje, ale nagranie można odtworzyć tylko z oryginalnego pliku. Nagrania z mikrofonu i dźwięk z adresów URL Audiotext przechowuje sam.

## Nie można pobrać filmu z YouTube

Sprawdź, czy adres URL jest poprawny, a film publiczny. YouTube często się zmienia, więc jeśli problem nie znika, sprawdź, czy jest nowsza wersja Audiotext.

## Folder nie transkrybuje żadnego pliku

Pliki, które mają już transkrypcję, są pomijane. Włącz **Zastępuj istniejące pliki**, aby transkrybować je ponownie. Folder musi też zawierać [obsługiwane pliki](/pl/reference/formats-and-languages/).

## API Google prosi o język

API Google nie potrafi wykryć języka. Wybierz **Język nagrania** w ustawieniach.

## Coś innego

Przeszukaj [zgłoszenia](https://github.com/HenestrosaDev/audiotext/issues) lub zapytaj w [dyskusjach](https://github.com/HenestrosaDev/audiotext/discussions). Jeśli znajdziesz błąd, [zgłoś go](https://github.com/HenestrosaDev/audiotext/issues/new/choose), podając system, wersję Audiotext i kroki, które go wywołują.
