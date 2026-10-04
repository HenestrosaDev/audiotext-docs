---
title: Transcription settings
description: Choose the engine, the languages, the context, the options and the output of each transcription.
sidebar:
  order: 2
---

Before transcribing, Audiotext shows the settings of the transcription, grouped in cards. They're remembered for the next time, and each transcription keeps the settings it was made with.

![The settings of the transcription of a file](/screenshots/transcription-settings.png)

## Engine

The **Transcription method**:

| Engine | Where it runs | Cost | Notes |
| --- | --- | --- | --- |
| **WhisperX** (default) | Your computer | Free and unlimited | Private and offline. More options: speakers, word timings, live text. |
| **Whisper API** | OpenAI servers | Paid per minute | Requires an [OpenAI API key](/en/reference/preferences/#api-keys). For computers that can't run WhisperX smoothly. |
| **Google API** | Google servers | Free tier, or paid | Lower quality and no timestamps. An API key is optional. |

The **Model** depends on the engine. With WhisperX, larger models are more accurate, but slower. With the Whisper API, it decides whether the transcription has timestamps and speakers. See [Engines](/en/reference/engines/) to compare them.

## Language

- **Language of the audio**: **Auto-detect** by default. Choosing it avoids mistakes in short or mixed audios. The Google API can't detect it, so you have to choose it.
- **Language of the transcription**: **Same as the audio** by default. Choose another language to translate the audio while transcribing.

When both languages differ, the **Translation** options appear:

- **Translate with Whisper (recommended)**: Whisper transcribes and translates the audio in one step. It can only translate into English.
- **Write it directly in _language_ (experimental)**: Whisper is asked to write the transcription in that language directly. It works well for many languages, but check the result.

The Google API can't translate. To translate a transcription into any language later, with more providers, use the [Translate](/en/guides/summary-and-translation/#translation) button of the transcript.

## Context

Two optional fields that help the model:

- **Keywords**: names, terms or acronyms said in the audio, separated by commas (e.g. `Audiotext, WhisperX, Henestrosa`), so they're spelled right. They're only hints: a keyword is only written if it's said in the audio.
- **Description**: what the audio is about, such as its topic or setting (e.g. `An interview about speech recognition`).

They're used by WhisperX and the Whisper API, except by the `gpt-4o-transcribe-diarize` model. The Google API doesn't use them.

## Options

- **Word-level timings** (WhisperX): aligns each word with the audio, to highlight it while playing. Takes a bit longer. The subtitles already use them.
- **Extract speech**: reduces music and background noise before transcribing.
- **Identify speakers** (WhisperX): labels who speaks in each part, e.g. `SPEAKER_00`. If you know how many people speak, enter it in **Number of speakers** (`0` detects it). It requires a free Hugging Face token; see [Identify the speakers](#identify-the-speakers). With the Whisper API, the `gpt-4o-transcribe-diarize` model identifies the speakers.

### Identify the speakers

The model that identifies the speakers, [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1), is free but requires a Hugging Face token:

1. Create an account on [Hugging Face](https://huggingface.co/join) and accept the conditions of [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1).
2. Create a token with the `Read` role in [your settings](https://huggingface.co/settings/tokens).
3. Click **Set Hugging Face token…** and paste it.

The model is downloaded the first time it's used. After that, the speakers are identified offline.

## Live text

Only shown for the microphone. See [Live text](/en/guides/sources/#live-text).

## Folder and Output

Only shown for folders:

- **Watch the folder**: see [Watch a folder](/en/guides/sources/#watch-a-folder).
- **File types**: with WhisperX, one or more of `.txt`, `.srt`, `.vtt`, `.json`, `.tsv` and `.aud`. With the Whisper API, the format of the files (`text`, `json`, `verbose_json`, `srt` or `vtt`); the subtitles need a model with timestamps. The Google API returns plain text (`.txt`).
- **Location**: the files are saved next to each source file. Click **Change…** to save them in another folder (its subfolders are recreated), or **Next to the source** to go back.
- **Overwrite existing files**: transcribes again the files that already have a transcription, replacing it.

The subtitle options (line width, line count, highlighted words) are in the [Preferences](/en/reference/preferences/#subtitles).
