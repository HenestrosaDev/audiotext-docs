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

Jeśli transkrypcja kończy się błędem **Rozpoznawanie mówców wymaga tokenu Hugging Face.** lub **Nie udało się pobrać modelu rozpoznawania mówców.**, brakuje tokenu, jest on nieprawidłowy albo nie ma dostępu do modelu.

Rozpoznawanie mówców wymaga tokenu Hugging Face i zaakceptowania warunków modelu. Sprawdź, czy:

- Zaakceptowano warunki [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) na tym samym koncie.
- Token ma rolę `Read` i jest ustawiony w **Preferencje** → **Klucze API**.

Zobacz [Rozpoznawanie mówców](/pl/guides/transcription-settings/#rozpoznawanie-mówców).

## Nie znaleziono mikrofonu lub nic się nie nagrywa

- Sprawdź, czy mikrofon jest podłączony, i kliknij przycisk odświeżania obok listy mikrofonów.
- W macOS zezwól Audiotext na dostęp w **Ustawienia systemowe** → **Prywatność i ochrona** → **Mikrofon**. W Windows w **Ustawienia** → **Prywatność** → **Mikrofon**.
- Jeśli miernik poziomu pokazuje **Brak dźwięku**, wybierz inny mikrofon z listy lub sprawdź, czy nie jest wyciszony.
- Jeśli pojawia się **Nie nagrano żadnego dźwięku.**, nagrywanie zakończyło się, zanim mikrofon przesłał jakikolwiek dźwięk. Nagraj ponownie lub wybierz inny mikrofon.

## Tekst na żywo się nie wyświetla

Jeśli podczas nagrywania pojawia się **Tekstu nie można pokazywać podczas nagrywania.**, nie udało się wczytać **Model na żywo**: na przykład jest on pobierany przy pierwszym użyciu, co wymaga połączenia z internetem, albo brakuje pamięci. Nie wpływa to na nagranie, które po zatrzymaniu zostaje przetranskrybowane jak zwykle. Wybierz mniejszy **Model na żywo** (np. `tiny` lub `base`) na karcie **Tekst na żywo**.

## Nie można odtworzyć nagrania transkrypcji

Plik źródłowy został przeniesiony lub usunięty. Tekst pozostaje, ale nagranie można odtworzyć tylko z oryginalnego pliku. Nagrania z mikrofonu i dźwięk z adresów URL Audiotext przechowuje sam.

## Nie można pobrać filmu z YouTube

Sprawdź, czy adres URL jest poprawny, a film publiczny. YouTube często się zmienia, więc jeśli problem nie znika, sprawdź, czy jest nowsza wersja Audiotext.

Jeśli zamiast tego pojawia się **Film na YouTube nie ma ścieżki dźwiękowej.**, film nie ma dźwięku do transkrypcji.

## Nie można przetranskrybować linku

- **Adres URL nie wskazuje pliku audio ani wideo.**: link otwiera stronę internetową, a nie plik. Działają tylko linki do filmów z YouTube i bezpośrednie linki do plików audio lub wideo. Znajdź na stronie link, który pobiera plik (np. odcinek podcastu), i użyj go albo pobierz plik i przetranskrybuj go ze źródła **Plik**.
- **Nie udało się pobrać pliku: …**: nie udało się dotrzeć do pliku. Sprawdź, czy link otwiera się w przeglądarce i czy masz połączenie z internetem. Linków wymagających zalogowania nie da się pobrać: pobierz plik samodzielnie i użyj źródła **Plik**.

## Folder nie transkrybuje żadnego pliku

Pliki, które mają już transkrypcję, są pomijane. Włącz **Zastępuj istniejące pliki**, aby transkrybować je ponownie. Folder musi też zawierać [obsługiwane pliki](/pl/reference/formats-and-languages/).

## API Google prosi o język

API Google nie potrafi wykryć języka. Wybierz **Język nagrania** w ustawieniach.

## Podsumowanie lub tłumaczenie kończy się błędem

- **DeepL nie może tłumaczyć na język: ….**: DeepL nie obsługuje tego języka. Wybierz innego dostawcę, na przykład model językowy.
- **Odpowiedź modelu była za długa.**, **Model nie zwrócił prawidłowego podsumowania.** lub **Model nie zwrócił prawidłowego tłumaczenia.**: model nie napisał podsumowania lub tłumaczenia w oczekiwanym formacie. Spróbuj ponownie lub wybierz większy model w **Preferencje** → **AI**. Małe modele Ollamy zawodzą częściej.
- Przy każdym innym błędzie sprawdź, czy klucz API dostawcy jest ustawiony w **Preferencje** → **Klucze API** i czy na koncie są środki.

## Nie można sprawdzić aktualizacji

**Nie udało się sprawdzić aktualizacji.** oznacza, że Audiotext nie mógł połączyć się z GitHubem. Sprawdź połączenie z internetem albo czy nie blokuje go zapora lub serwer proxy. Najnowszą wersję zawsze możesz pobrać ze [strony wydań](https://github.com/HenestrosaDev/audiotext/releases/latest).

## Coś innego

Przeszukaj [zgłoszenia](https://github.com/HenestrosaDev/audiotext/issues) lub zapytaj w [dyskusjach](https://github.com/HenestrosaDev/audiotext/discussions). Jeśli znajdziesz błąd, [zgłoś go](https://github.com/HenestrosaDev/audiotext/issues/new/choose), podając system, wersję Audiotext i kroki, które go wywołują.
