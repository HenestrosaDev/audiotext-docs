---
title: Preferences
description: All the settings of the Preferences window, tab by tab.
sidebar:
  order: 2
---

The **Preferences** hold the settings that don't change with each transcription. Open them with the gear at the top right of the window. The changes are saved automatically.

## General

- **Appearance**: **System** (follows your system), **Light** or **Dark**.
- **Interface language**: the language of Audiotext, or **System language**. See the [available languages](/en/reference/formats-and-languages/#interface-languages).
- **Date format**: how the dates of the transcriptions are shown, in the interface language: short (`10/4/26`), medium (`Oct 4, 2026`, the default), long (`October 4, 2026`) or ISO (`2026-10-04`). The menu shows each one with an example.
- **Time format**: **Automatic** (the clock of the interface language), 12-hour (`1:30 PM`) or 24-hour (`13:30`).
- **Notifications**: shows a notification of the system when a transcription is ready (for a folder, when all its files are, and for a watched folder, each time a new file is). On by default. On macOS, they come from **Script Editor**, and on Windows from **Windows PowerShell**, so they're allowed or silenced for those apps in the settings of the system. On Linux, they require `notify-send` (the `libnotify-bin` or `libnotify` package).
- **Updates**: checks for a new version when the app opens and, if there's one, shows a **Version … is available** button in the top bar that opens its download page. Pre-releases aren't offered. On by default.

## AI

The providers of the [summaries and the translations](/en/guides/summary-and-translation/):

- **Summary** → **Provider** and **Model**.
- **Translation** → **Provider** and **Model**. DeepL and Google Translate have no models to choose.
- **Ollama** → **Server URL**: the address of Ollama, `http://localhost:11434` by default.

Leave the **Model** empty to use the default one of the provider. The button next to the provider sets its API key.

## API keys

The keys of each service. Click **Set…** to enter one, or **Change…** to replace it (leave it empty to remove it). They're kept in the credential store of your system.

| Key | Used for |
| --- | --- |
| OpenAI API key | The Whisper API, and summarizing and translating with OpenAI |
| Anthropic API key | Summarizing and translating with Claude |
| DeepSeek API key | Summarizing and translating with DeepSeek |
| Gemini API key | Summarizing and translating with Gemini (from Google AI Studio) |
| Mistral API key | Summarizing and translating with Mistral |
| xAI API key | Summarizing and translating with Grok |
| DeepL API key | Translating with DeepL (keys of the free plan work too) |
| Google API key | Google Speech-to-Text beyond the free tier, and Google Translate (Cloud Translation API) |
| Hugging Face token | Identifying the speakers with WhisperX |

:::caution
Each provider charges for the use of its API, for which Audiotext is not responsible. If OpenAI returns the error `429` with a new key, see [Troubleshooting](/en/help/troubleshooting/#the-whisper-api-returns-the-error-429).
:::

## WhisperX

**Compute type**, **Batch size** and **Use CPU**. See [WhisperX advanced options](/en/reference/engines/#advanced-options).

## Subtitles

The options of the `.srt` and `.vtt` files saved when transcribing a folder with WhisperX:

- **Highlight words**: underlines each word as it's said. Off by default.
- **Max. line count**: the maximum number of lines of each subtitle. `2` by default.
- **Max. line width**: the maximum number of characters of a line before breaking it. `42` by default.

## Whisper API

**Temperature** and **Timestamps of the words**. See [Whisper API options](/en/reference/engines/#options).

## About

The version of Audiotext and links to this documentation, the source code on GitHub and the donation page. **Check for updates** checks for a new version right away: if there's one, the button becomes **Download** and opens its page.
