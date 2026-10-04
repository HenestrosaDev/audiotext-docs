---
title: Podsumowanie i tłumaczenie
description: Podsumowuj i tłumacz transkrypcje za pomocą OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL lub Google Translate.
sidebar:
  order: 4
---

Gdy transkrypcja jest gotowa, Audiotext może ją podsumować i przetłumaczyć za pomocą modelu językowego lub usługi tłumaczeniowej. Oba są zapisywane w historii, więc generuje się je tylko raz.

## Podsumowanie

Otwórz widok **Podsumowanie** transkrypcji i kliknij **Wygeneruj podsumowanie**. Model językowy pisze:

- **Podsumowanie** transkrypcji.
- Jej **najważniejsze punkty**.
- Jej **rozdziały**, jeśli ma znaczniki czasu. Kliknij rozdział, aby odtworzyć nagranie od jego początku.

**Wygeneruj ponownie** pisze je od nowa (np. po wybraniu innego modelu). **Kopiuj** je kopiuje, a [eksport](/pl/guides/transcript/#kopiowanie-i-eksport) do Markdown i Word je zawiera.

Jeśli klucz API dostawcy nie jest ustawiony, widok **Podsumowanie** proponuje jego ustawienie. Bardzo długie transkrypcje (około trzech godzin mowy lub więcej) są podsumowywane tylko od początku.

![Podsumowanie transkrypcji z kluczowymi punktami i rozdziałami](/screenshots/summary.png)

## Tłumaczenie

Kliknij **Przetłumacz**, wybierz język w polu **Przetłumacz na** oraz **Dostawcę** i potwierdź. Tłumaczenie pojawi się w panelu po prawej stronie oryginalnego tekstu.

- Jeśli transkrypcja ma znaczniki czasu, każde zdanie jest tłumaczone osobno, więc tłumaczenie je zachowuje: wyróżnia odtwarzane zdanie, a kliknięcie zdania je odtwarza.
- Jeśli edytowałeś zwykły tekst, tłumaczony jest edytowany tekst, bez znaczników czasu.
- Przeciągnij uchwyt między tekstami, aby zmienić ich rozmiar, lub kliknij go dwukrotnie, aby przywrócić rozmiary.
- Przycisk **Przetłumacz** pozwala też **Ukryć tłumaczenie**, **Przetłumaczyć na inny język…** lub **Usunąć tłumaczenie**.

:::tip
Aby otrzymać transkrypcję od razu w innym języku, bez dostawcy, możesz też tłumaczyć podczas transkrypcji. Zobacz [Język](/pl/guides/transcription-settings/#język).
:::

## Dostawcy

Dostawców wybiera się w **Preferencje** → **AI**, osobno dla podsumowań i tłumaczeń.

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

[Ollama](https://ollama.com) uruchamia modele na twoim komputerze, bez klucza API i bez wysyłania tekstu gdziekolwiek. Zainstaluj ją, pobierz model (np. `ollama pull llama3.2`) i wybierz **Ollama** jako dostawcę. Jeśli nie działa pod domyślnym adresem, zmień **Adres URL serwera** w **Preferencje** → **AI** (domyślnie `http://localhost:11434`).

:::note
Każdy dostawca pobiera opłaty za korzystanie ze swojego API, za które Audiotext nie odpowiada. Klucze API są przechowywane w magazynie poświadczeń systemu. Zobacz [Pliki i dane](/pl/reference/files-and-data/).
:::
