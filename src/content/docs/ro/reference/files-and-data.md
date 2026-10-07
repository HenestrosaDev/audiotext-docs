---
title: Fișiere și date
description: Unde salvează Audiotext setările, istoricul, înregistrările și cheile API și ce variabile de mediu citește.
sidebar:
  order: 5
---

Audiotext păstrează datele pe computerul dumneavoastră. Nu se trimite nimic nicăieri, cu excepția cazului în care folosiți un motor la distanță (API-ul Whisper sau API-ul Google) sau un alt furnizor IA decât Ollama. La deschidere, întreabă și GitHub dacă există o versiune nouă, lucru pe care îl puteți dezactiva în **Preferințe** → **General** → **Actualizări**.

## Dosarul de configurare al utilizatorului

Setările, istoricul și înregistrările sunt salvate în dosarul de configurare al utilizatorului, deci rămân după actualizări:

| Sistem | Dosar |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (sau `$XDG_CONFIG_HOME/audiotext`) |

Conține:

- `config.ini`: setările dumneavoastră. Ștergeți-l pentru a reveni la valorile implicite.
- `history.json`: transcrierile, cu rezumatele, traducerile și corecturile lor.
- `media/`: înregistrările de la microfon și sunetul descărcat de la URL-uri, ca să poată fi redate mai târziu. Sunt eliminate când transcrierea lor este ștearsă din istoric.

Pentru a folosi alt dosar, de ex. pentru o instalare portabilă, setați variabila de mediu `AUDIOTEXT_CONFIG_DIR`.

:::note
Fișierul `config.ini` din dosarul aplicației conține setările implicite și nu este modificat niciodată.
:::

## Chei API

Cheile API și tokenul Hugging Face sunt păstrate în depozitul de credențiale al sistemului:

- **macOS**: Brelocul (Keychain).
- **Windows**: Managerul de acreditări.
- **Linux**: Secret Service (de ex. GNOME Keyring sau KWallet).

Dacă sistemul nu are unul (de ex. un server fără desktop), sunt salvate într-un fișier `.env` din dosarul de configurare, care poate fi citit doar de utilizatorul dumneavoastră. Cheile pe care versiunile anterioare le salvau în acel fișier sunt mutate în depozitul de credențiale la prima deschidere a aplicației.

Cheile sunt folosite **doar** pentru a face cereri către API-ul fiecărui serviciu.

## Variabile de mediu

Variabilele de mediu cu numele cheilor au prioritate față de cele setate în aplicație:

| Variabilă | Serviciu |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (API Whisper, rezumate, traduceri) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text și Google Translate |
| `HF_TOKEN` | Hugging Face (identificarea vorbitorilor) |
| `AUDIOTEXT_CONFIG_DIR` | Dosarul setărilor și al istoricului |

## Modele

Modelele WhisperX și de identificare a vorbitorilor se descarcă la prima utilizare și sunt păstrate în cache de Hugging Face în `~/.cache/huggingface` (`%USERPROFILE%\.cache\huggingface` pe Windows). Modelele care aliniază cuvintele din engleză, franceză, germană, spaniolă și italiană sunt păstrate de PyTorch în `~/.cache/torch` (`%USERPROFILE%\.cache\torch` pe Windows). Ștergeți aceste dosare pentru a elibera spațiul pe care îl ocupă. Și alte aplicații își pot păstra modelele acolo și le descarcă din nou când au nevoie de ele, ca Audiotext.
