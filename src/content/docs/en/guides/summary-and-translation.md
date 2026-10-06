---
title: Summary and translation
description: Summarize and translate transcriptions with OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL or Google Translate.
sidebar:
  order: 4
---

Once a transcription is ready, Audiotext can summarize it and translate it with a language model or a translation service. Both are kept in the history, so they're only generated once.

## Summary

Open the **Summary** mode of a transcription and click **Generate summary**. The language model writes:

- A **summary** of the transcription.
- Its **key points**.
- Its **chapters**, if it has timestamps. Click a chapter to play the audio from where it starts.

**Regenerate** writes it again (e.g. after choosing another model). **Copy** copies it, and the Markdown and Word [exports](/en/guides/transcript/#copy-and-export) include it.

If the API key of the provider isn't set, the **Summary** mode offers to set it. Very long transcriptions (about three hours of speech or more) are summarized from their beginning only.

![The summary of a transcription, with its key points and chapters](/screenshots/summary.png)

## Translation

Click **Translate**, choose the language in **Translate into** and the **Provider**, and confirm. The translation is shown in a panel on the right of the original text.

- If the transcription has timestamps, each segment is translated on its own, so the translation starts with the same timestamps: it highlights the segment being played, and clicking a segment plays it.
- If you edited the plain text, the edited text is translated instead, without timestamps.
- Drag the handle between both texts to resize them, or double-click it to reset their sizes.
- The **Translate** button also lets you **Hide the translation**, **Translate into another language…** or **Delete the translation**.

### Correct and retime the translation

A translation often needs another timing than the original, e.g. subtitles that take longer to read. Right-click a segment of the translation to:

- **Edit the text…**: change its text.
- **Edit the timing…**: change when it starts and ends, to the millisecond. Type the times as `00:01:05,900`, `01:05,9` or `65.9`.
- **Add a segment after…**: add a segment, which by default fills the gap until the next one.
- **Delete the segment**.

### Translate it yourself

To write the translation yourself, choose **Myself, from scratch** as the **Provider**. It needs no API key. The translation starts with the timestamps of the transcription and empty segments, shown as **Not translated yet**, and the panel shows how many are left. Right-click one and choose **Translate the text…**: the dialog shows the original text said meanwhile.

### Subtitles and export

- In the transcriptions of videos, check **Show it as the subtitles of the video** in the **Translate** menu to show the translation as the subtitles. The menu of the video switches them too. See [Watch videos with subtitles](/en/guides/transcript/#watch-videos-with-subtitles).
- To save the translation as a file, choose **Translation into…** in the **Export** menu, or click the export button of the translation. It's exported in the same [formats](/en/guides/transcript/#copy-and-export) as the transcription, with its language in the name of the file (e.g. `video.es.srt`), so the video players load it with the video. The segments not translated yet are left out of the subtitles.

:::tip
To get the transcription directly in another language, without a provider, you can also translate while transcribing. See [Language](/en/guides/transcription-settings/#language).
:::

## Providers

The providers are chosen in **Preferences** → **AI**, separately for the summaries and the translations.

| Provider | Default model | API key |
| --- | --- | --- |
| OpenAI (default) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (local) | `llama3.2` | Not needed |

Leave the **Model** empty to use the default one of the provider, or type the name of any other model of the provider (e.g. `claude-sonnet-5-5` or `deepseek-reasoner`).

The translations can also be made by:

- **DeepL**, which requires a [DeepL API key](https://www.deepl.com/your-account/keys). The keys of the free plan work too.
- **Google Translate**, which uses the Google API key with the Cloud Translation API enabled.

### Ollama

[Ollama](https://ollama.com) runs the models on your computer, without an API key and without sending the text anywhere. Install it, download a model (e.g. `ollama pull llama3.2`) and choose **Ollama** as the provider. If it doesn't run on the default address, change the **Server URL** in **Preferences** → **AI** (`http://localhost:11434` by default).

:::note
Each provider charges for the use of its API, for which Audiotext is not responsible. The API keys are kept in the credential store of your system. See [Files and data](/en/reference/files-and-data/).
:::
