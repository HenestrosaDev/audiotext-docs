---
title: Files and data
description: Where Audiotext stores its settings, history, recordings and API keys, and the environment variables it reads.
sidebar:
  order: 5
---

Audiotext keeps your data on your computer. Nothing is sent anywhere unless you use a remote engine (the Whisper API or the Google API) or an AI provider other than Ollama. When it opens, it also asks GitHub whether there's a new version, which you can turn off in **Preferences** → **General** → **Updates**.

## User configuration folder

The settings, the history and the recordings are stored in your user configuration folder, so they survive updates:

| System | Folder |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (or `$XDG_CONFIG_HOME/audiotext`) |

It contains:

- `config.ini`: your settings. Delete it to restore the defaults.
- `history.json`: your transcriptions, with their summaries, translations and corrections.
- `media/`: the recordings of the microphone and the audio downloaded from URLs, so they can be played later. They're removed when their transcription is deleted from the history.

To use another folder, e.g. for a portable installation, set the `AUDIOTEXT_CONFIG_DIR` environment variable.

:::note
The `config.ini` file of the app folder contains the default settings and is never modified.
:::

## API keys

The API keys and the Hugging Face token are kept in the credential store of your system:

- **macOS**: the Keychain.
- **Windows**: the Credential Manager.
- **Linux**: the Secret Service (e.g. GNOME Keyring or KWallet).

If the system has none (e.g. a server without a desktop), they're stored in a `.env` file in the configuration folder, readable only by your user. The keys that previous versions stored in that file are moved to the credential store the first time the app opens.

The keys are **only** used to make requests to the API of each service.

## Environment variables

Environment variables with the names of the keys take precedence over the ones set in the app:

| Variable | Service |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (Whisper API, summaries, translations) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text and Google Translate |
| `HF_TOKEN` | Hugging Face (speaker identification) |
| `AUDIOTEXT_CONFIG_DIR` | The folder of the settings and the history |

## Models

The models of WhisperX and of the speaker identification are downloaded the first time they're used and cached by Hugging Face in `~/.cache/huggingface` (or `%USERPROFILE%\.cache\huggingface` on Windows). Delete that folder to free the space they take.
