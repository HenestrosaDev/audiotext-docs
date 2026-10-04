---
title: Troubleshooting
description: Solutions to the most common problems with Audiotext.
sidebar:
  order: 1
---

## The first WhisperX transcription takes a long time

The first time a model is used, it's downloaded, which can take several minutes depending on your connection and the size of the model (up to ~3 GB). The progress shows when it's loading. The model stays in memory while its options don't change, so the next transcriptions start right away.

## WhisperX fails with `CUDA out of memory`

Your GPU doesn't have enough memory for the settings. Try, in this order:

1. Lower the **Batch size** (e.g. `4`) in **Preferences** → **WhisperX**.
2. Use a smaller model (e.g. `small` or `base`).
3. Use a lighter **Compute type** (e.g. `int8`).

The last two can reduce the quality. See [Engines](/en/reference/engines/#model) for the memory each model needs.

## Transcribing takes too long

The speed of WhisperX depends on your hardware, so don't expect instant results on modest CPUs. Try a smaller model, such as `small` or `large-v3-turbo` on a GPU, or the `int8` compute type. Alternatively, use the **Whisper API** or the **Google API**, which run on remote servers.

## The Whisper API returns the error `429`

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

Your OpenAI account has run out of credits, or you need to add funds before using the API for the first time (even if you have free credits). Buy credits in the [Billing](https://platform.openai.com/settings/organization/billing/overview) section of your OpenAI account. It may take up to 10 minutes for your account to become active.

If you created the API key before adding funds for the first time and the error persists after 10 minutes, create a new key and set it in **Preferences** → **API keys**.

## The speakers can't be identified

Identifying the speakers requires a Hugging Face token, and accepting the conditions of the model. Check that:

- You've accepted the conditions of [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) with the same account.
- The token has the `Read` role and is set in **Preferences** → **API keys**.

See [Identify the speakers](/en/guides/transcription-settings/#identify-the-speakers).

## No microphone is found, or nothing is recorded

- Check that the microphone is connected and click the refresh button next to the list of microphones.
- On macOS, allow Audiotext in **System Settings** → **Privacy & Security** → **Microphone**. On Windows, in **Settings** → **Privacy** → **Microphone**.
- If the level meter shows **No sound**, choose another microphone in the list or check that it isn't muted.

## The audio of a transcription can't be played

The source file was moved or deleted. The text is kept, but the audio can only be played from the original file. The recordings of the microphone and the audio of URLs are kept by Audiotext.

## A YouTube video can't be downloaded

Make sure the URL is correct and the video is public. YouTube changes often, so if it still fails, check for a newer version of Audiotext.

## A folder doesn't transcribe any file

The files that already have a transcription are skipped. Turn on **Overwrite existing files** to transcribe them again. The folder must also contain [supported files](/en/reference/formats-and-languages/).

## The Google API asks for the language

The Google API can't detect the language. Choose the **Language of the audio** in the settings.

## Something else

Search the [issues](https://github.com/HenestrosaDev/audiotext/issues) or ask in the [discussions](https://github.com/HenestrosaDev/audiotext/discussions). If you find a bug, [report it](https://github.com/HenestrosaDev/audiotext/issues/new/choose) with your system, the version of Audiotext and the steps to reproduce it.
