---
title: Pliki i dane
description: Gdzie Audiotext zapisuje ustawienia, historię, nagrania i klucze API oraz jakie zmienne środowiskowe odczytuje.
sidebar:
  order: 5
---

Audiotext przechowuje twoje dane na twoim komputerze. Nic nie jest nigdzie wysyłane, chyba że używasz zdalnego silnika (API Whisper lub API Google) albo dostawcy AI innego niż Ollama. Przy otwieraniu pyta też GitHub, czy jest nowa wersja, co możesz wyłączyć w **Preferencje** → **Ogólne** → **Aktualizacje**.

## Folder konfiguracji użytkownika

Ustawienia, historia i nagrania są zapisywane w folderze konfiguracji użytkownika, więc przetrwają aktualizacje:

| System | Folder |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (lub `$XDG_CONFIG_HOME/audiotext`) |

Zawiera:

- `config.ini`: twoje ustawienia. Usuń go, aby przywrócić wartości domyślne.
- `history.json`: twoje transkrypcje z podsumowaniami, tłumaczeniami i poprawkami.
- `media/`: nagrania z mikrofonu i dźwięk pobrany z adresów URL, aby można je było później odtworzyć. Są usuwane razem z ich transkrypcją z historii.

Aby użyć innego folderu, np. w instalacji przenośnej, ustaw zmienną środowiskową `AUDIOTEXT_CONFIG_DIR`.

:::note
Plik `config.ini` w folderze aplikacji zawiera ustawienia domyślne i nigdy nie jest modyfikowany.
:::

## Klucze API

Klucze API i token Hugging Face są przechowywane w magazynie poświadczeń systemu:

- **macOS**: pęk kluczy.
- **Windows**: Menedżer poświadczeń.
- **Linux**: Secret Service (np. GNOME Keyring lub KWallet).

Jeśli system go nie ma (np. serwer bez pulpitu), są zapisywane w pliku `.env` w folderze konfiguracji, czytelnym tylko dla twojego użytkownika. Klucze, które poprzednie wersje zapisywały w tym pliku, są przenoszone do magazynu poświadczeń przy pierwszym uruchomieniu aplikacji.

Klucze są używane **wyłącznie** do wysyłania żądań do API danej usługi.

## Zmienne środowiskowe

Zmienne środowiskowe o nazwach kluczy mają pierwszeństwo przed kluczami ustawionymi w aplikacji:

| Zmienna | Usługa |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (API Whisper, podsumowania, tłumaczenia) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text i Google Translate |
| `HF_TOKEN` | Hugging Face (rozpoznawanie mówców) |
| `AUDIOTEXT_CONFIG_DIR` | Folder ustawień i historii |

## Modele

Modele WhisperX i rozpoznawania mówców są pobierane przy pierwszym użyciu i przechowywane w pamięci podręcznej Hugging Face w `~/.cache/huggingface` (lub `%USERPROFILE%\.cache\huggingface` w Windows). Usuń ten folder, aby zwolnić zajmowane przez nie miejsce.
