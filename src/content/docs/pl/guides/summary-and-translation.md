---
title: Podsumowanie, pytania i tłumaczenie
description: Podsumowuj transkrypcje, zadawaj o nie pytania i tłumacz je za pomocą OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL lub Google Translate.
sidebar:
  order: 4
---

Gdy transkrypcja jest gotowa, Audiotext może ją podsumować, odpowiadać na pytania o nią i przetłumaczyć ją za pomocą modelu językowego lub usługi tłumaczeniowej. Wszystko jest zapisywane w historii, więc generuje się tylko raz.

## Podsumowanie

Otwórz widok **Podsumowanie** transkrypcji i kliknij **Wygeneruj podsumowanie**. Model językowy pisze:

- **Podsumowanie** transkrypcji.
- Jej **najważniejsze punkty**.
- Jej **rozdziały**, jeśli ma znaczniki czasu. Kliknij rozdział, aby odtworzyć nagranie od jego początku.

Pod tytułem panel pokazuje, który model je wygenerował i kiedy. Przyciski w jego nagłówku:

- **Szukaj** (`Ctrl+F`, `⌘F` w macOS): wyszukuje tekst w podsumowaniu.
- **Kopiuj**: kopiuje je.
- **Eksportuj**: zapisuje je osobno jako zwykły tekst, Markdown lub dokument Word, pod nazwą typu `video.summary.md`, aby nie zastąpiło transkrypcji. [Eksport](/pl/guides/transcript/#kopiowanie-i-eksport) transkrypcji do Markdown i Word też je zawiera.
- **Wygeneruj podsumowanie ponownie**: pisze je od nowa (np. po wybraniu innego modelu), po potwierdzeniu, bo obecne zostanie zastąpione.

Jeśli klucz API dostawcy nie jest ustawiony, widok **Podsumowanie** proponuje jego ustawienie. Bardzo długie transkrypcje (około trzech godzin mowy lub więcej) są podsumowywane tylko od początku.

![Podsumowanie transkrypcji z kluczowymi punktami i rozdziałami](/screenshots/summary.png)

## Pytania o transkrypcję

Otwórz widok **Zapytaj**, wpisz pytanie w polu **Zadaj pytanie o transkrypcję…** (np. co postanowiono albo kto coś powiedział) i naciśnij `Enter` lub kliknij **Zapytaj**.

- Model językowy odpowiada na podstawie transkrypcji oraz wcześniejszych pytań i odpowiedzi, więc pytanie może się do nich odnosić (np. „Dlaczego?”).
- Jeśli transkrypcja ma znaczniki czasu, każda odpowiedź zawiera odnośniki do fragmentów transkrypcji, w których to pada. Kliknij jeden, aby odtworzyć nagranie od tego miejsca.
- Pytania i odpowiedzi są zapisywane w historii razem z transkrypcją. Kosz w nagłówku czyści rozmowę po potwierdzeniu.

Na pytania odpowiada dostawca wybrany dla nich w **Preferencje** → **Dostawcy** → **Zapytaj**, czyli dostawca podsumowań, dopóki go nie zmienisz. Tak jak przy podsumowaniach, z bardzo długich transkrypcji czytany jest tylko początek.

## Tłumaczenie

Kliknij **Przetłumacz**, wybierz język w polu **Przetłumacz na:** i dostawcę w polu **Tłumacz za pomocą:**, a następnie potwierdź. Okno wyjaśnia, co robi wybrany dostawca, i proponuje ustawienie jego klucza API, jeśli go brakuje. Tłumaczenie pojawi się w panelu po prawej stronie oryginalnego tekstu.

- Jeśli transkrypcja ma znaczniki czasu, jest tłumaczona zdanie po zdaniu, z tekstem wypowiedzianym przed i po każdym fragmencie jako kontekstem, więc tłumaczenie zaczyna się ze znacznikami czasu każdego zdania: wyróżnia odtwarzane zdanie, a kliknięcie zdania je odtwarza.
- Jeśli transkrypcja nie ma znaczników czasu, cały jej tekst jest tłumaczony naraz.
- Oba teksty przewijają się razem, więc pokazują ten sam fragment nagrania. Okrągły przycisk na uchwycie między nimi włącza i wyłącza tę funkcję. Przeciągnij uchwyt, aby zmienić ich rozmiar, lub kliknij go dwukrotnie, aby przywrócić rozmiary.

Przyciski w nagłówku tłumaczenia pozwalają znaleźć i zamienić w nim tekst, skopiować je, wyeksportować, **Przetłumacz ponownie** (z tym samym dostawcą i modelem) oraz **Ukryj tłumaczenie**. Przycisk **Przetłumacz** pozwala też pokazać je ponownie, **Przetłumacz na inny język…** lub **Usuń tłumaczenie**.

### Kilka języków

Transkrypcję można przetłumaczyć na kilka języków, nawet jednocześnie, a każde tłumaczenie jest zachowywane. Tytuł panelu wybiera wyświetlane tłumaczenie, pokazuje, jaka część każdego jest przetłumaczona, i kończy się opcją tłumaczenia na inny język. Tłumaczenie na język, który ma już tłumaczenie, zastępuje je po potwierdzeniu, bo jego poprawki zostaną utracone. Menu tytułu pokazuje, ile napisów każdego niedokończonego tłumaczenia jest przetłumaczonych (np. `Angielski · 148/150`).

### Postęp tłumaczenia

Postęp jest liczony w napisach: napis jest przetłumaczony, gdy ma tekst. Nad tłumaczeniem wiersz pokazuje, ile jest przetłumaczonych (np. `Przetłumaczono: 148/150 · 98%`). Procent jest zaokrąglany w dół, więc `100%` pojawia się dopiero, gdy wszystkie są przetłumaczone.

Dopóki jakieś zostały, strzałki obok przechodzą do poprzedniego i następnego napisu **Jeszcze nieprzetłumaczone**, podświetlając każdy z nich, i pokazują, na którym jesteś (np. `1 z 2`). Najedź kursorem na jeden z nich, aby po prawej pokazać przycisk **Przetłumacz tekst…**, który otwiera okno do jego przetłumaczenia.

### Poprawianie i zmiana czasów tłumaczenia

Tłumaczenie często wymaga innych czasów niż oryginał, np. napisy, których czytanie trwa dłużej. Kliknij prawym przyciskiem napis tłumaczenia, aby:

- **Edytuj tekst…**: zmienić jego tekst.
- **Edytuj czasy…**: zmienić, kiedy się zaczyna i kończy, z dokładnością do milisekundy. Wpisz czasy jako `00:01:05,900`, `01:05,9` lub `65.9`.
- **Dodaj napis po…**: dodać napis, który domyślnie wypełnia przerwę do następnego.
- **Usuń napis**.

Możesz też zmieniać czasy transkrypcji i dodawać do niej napisy: zobacz [Poprawianie transkrypcji](/pl/guides/transcript/#poprawianie-transkrypcji).

### Tłumaczenie samodzielne

Aby samodzielnie napisać tłumaczenie, wybierz **Ręcznie** w polu **Tłumacz za pomocą:**. Nie wymaga to klucza API. Tłumaczenie zaczyna się od pustego napisu dla każdego napisu transkrypcji, oznaczonego jako **Jeszcze nieprzetłumaczone**, a panel pokazuje, ile ich zostało. Kliknij jeden z nich prawym przyciskiem i wybierz **Przetłumacz tekst…**: okno pokazuje oryginalny tekst wypowiedziany w tym czasie. Po najechaniu kursorem na jeden z nich po prawej pojawia się przycisk **Przetłumacz tekst…**, który otwiera to samo okno.

### Napisy i eksport

- W transkrypcjach filmów zaznacz **Pokaż jako napisy wideo** w menu **Przetłumacz**, aby pokazać tłumaczenie jako napisy. Przełącza je też menu filmu. Zobacz [Oglądaj filmy z napisami](/pl/guides/transcript/#oglądaj-filmy-z-napisami).
- Aby zapisać tłumaczenie do pliku, kliknij przycisk eksportu w jego panelu. Jest eksportowane w tych samych [formatach](/pl/guides/transcript/#kopiowanie-i-eksport) co transkrypcja, z językiem w nazwie pliku (np. `video.es.srt`), więc odtwarzacze wideo wczytują je razem z filmem. Napisy jeszcze nieprzetłumaczone nie są eksportowane. To samo menu tworzy [kopię filmu z napisami](/pl/guides/transcript/#eksport-filmu-z-napisami).

:::tip
Aby otrzymać transkrypcję od razu w innym języku, bez dostawcy, możesz też tłumaczyć podczas transkrypcji. Zobacz [Język](/pl/guides/transcription-settings/#język).
:::

## Dostawcy

Dostawców wybiera się w **Preferencje** → **Dostawcy**, osobno dla podsumowań, pytań i tłumaczeń.

| Dostawca | Domyślny model | Klucz API |
| --- | --- | --- |
| OpenAI (domyślny) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (lokalnie) | `llama3.2` | Niepotrzebny |

Zostaw **Model** pusty, aby użyć domyślnego modelu dostawcy, lub wpisz nazwę dowolnego innego modelu dostawcy (np. `claude-sonnet-5-5` lub `deepseek-reasoner`).

Tłumaczyć można też za pomocą:

- **DeepL**, który wymaga [klucza API DeepL](https://www.deepl.com/your-account/keys). Działają też klucze z darmowego planu.
- **Google Translate**, który używa klucza API Google z włączonym Cloud Translation API.

### Ollama

[Ollama](https://ollama.com) uruchamia modele na twoim komputerze, bez klucza API i bez wysyłania tekstu gdziekolwiek. Zainstaluj ją, pobierz model (np. `ollama pull llama3.2`) i wybierz **Ollama** jako dostawcę. Jeśli nie działa pod domyślnym adresem, zmień **Adres URL serwera** w **Preferencje** → **Dostawcy** (domyślnie `http://localhost:11434`).

:::note
Każdy dostawca pobiera opłaty za korzystanie ze swojego API, za które Audiotext nie odpowiada. Klucze API są przechowywane w magazynie poświadczeń systemu. Zobacz [Pliki i dane](/pl/reference/files-and-data/).
:::
