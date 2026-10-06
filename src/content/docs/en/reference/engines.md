---
title: Engines
description: Compare WhisperX, the Whisper API and the Google API, and choose their models and advanced options.
sidebar:
  order: 1
---

Audiotext transcribes with one of three engines, chosen in the **Engine** card of the [transcription settings](/en/guides/transcription-settings/#engine).

| | WhisperX | Whisper API | Google API |
| --- | --- | --- | --- |
| Runs on | Your computer | OpenAI servers | Google servers |
| Internet | Only to download the models | Required | Required |
| Cost | Free, unlimited | Paid | Free tier (60 min/month), or paid with an API key |
| Detects the language | ✓ | ✓ | ✗ |
| Translates | ✓ | ✓ | ✗ |
| Timestamps | ✓ | Depends on the model | ✗ |
| Identifies speakers | ✓ (Hugging Face token) | `gpt-4o-transcribe-diarize` | ✗ |
| Word-level timings | ✓ | `whisper-1` | ✗ |
| Live text | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) is a fast implementation of OpenAI's Whisper that runs on your computer, so your audio never leaves it. It runs on the CPU or, much faster, on an NVIDIA GPU with CUDA.

### Model

Larger models are more accurate, but slower and use more memory. The model is downloaded the first time it's used.

| Model | Parameters | Required VRAM |
| :---: | :---: | :---: |
| `tiny`, `tiny.en` | 39 M | ~1 GB |
| `base`, `base.en` | 74 M | ~1 GB |
| `small`, `small.en` | 244 M | ~2 GB |
| `distil-small.en` | 166 M | ~2 GB |
| `medium`, `medium.en` | 769 M | ~5 GB |
| `distil-medium.en` | 394 M | ~3 GB |
| `large-v1`, `large-v2`, `large-v3` | 1550 M | <8 GB |
| `large-v3-turbo` | 809 M | ~6 GB |
| `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5` | 756 M | ~5 GB |

- **`large-v2`** is the default, since `large-v3` tends to hallucinate and repeat text more often, especially in some languages like Japanese, and misses more punctuation.
- **`large-v3-turbo`** is a pruned version of `large-v3`, much faster and almost as accurate.
- The models ending in **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) and the **distilled** ones (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) only transcribe English. They're faster than the multilingual models of the same size.

:::tip
To try Audiotext quickly, choose `tiny` or `small`. For the best quality, use `large-v2` or `large-v3-turbo` on a GPU.
:::

### Advanced options

They're in **Preferences** → **WhisperX**. Change them only if you have problems or know what you're doing: a GPU that runs out of memory can freeze your system.

- **Compute type**: the precision of the numbers of the model. `float16` is faster on GPUs (the default with CUDA). `int8` uses less memory and is the default on the CPU, since many CPUs don't support `float16` efficiently. `float32` is the most precise, for GPUs with more than 8 GB of VRAM.
- **Batch size**: how many parts of the audio are processed at once (`8` by default). It doesn't change the quality, only the speed. Lower it if you run out of memory; up to `16` is recommended.
- **Use CPU**: runs WhisperX on the CPU. It's always on if no CUDA GPU was found.

## Whisper API

Uses the [speech-to-text API of OpenAI](https://platform.openai.com/docs/guides/speech-to-text). It's meant for computers that can't run WhisperX smoothly, and requires an OpenAI API key (see [API keys](/en/reference/preferences/#api-keys)).

| Model | Timestamps | Speakers | Notes |
| --- | :---: | :---: | --- |
| `whisper-1` (default) | ✓ | ✗ | Can be played segment by segment and subtitled. Translates into English. |
| `gpt-transcribe` | ✗ | ✗ | More accurate, but without timestamps. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Identifies the speakers. Doesn't use the keywords nor the description. |

Translations into English are always made by `whisper-1`, since it's the only model that translates.

Long audios are split into chunks of up to 10 minutes, cut at a silence so no word is split, since the API rejects files larger than 25 MB. With `whisper-1`, the end of each chunk is given as context to the next one; with `gpt-4o-transcribe-diarize`, a sample of each speaker's voice is sent with the next chunks, so they keep their labels.

### Options

- **Response format** (Output card, for folders): `text` (default), `json`, `verbose_json`, `srt` or `vtt`. The subtitles and `verbose_json` need a model with timestamps.
- **Temperature** (Preferences → Whisper API): between 0 and 1. Higher values like 0.8 make the output more random, and lower values like 0.2 more focused. With 0 (default), the model raises it automatically when needed.
- **Timestamps of the words** (Preferences → Whisper API): whether `whisper-1` also returns the timestamps of each word, to highlight it while playing. It takes longer. On by default.

## Google API

Uses the [Google Speech-to-Text API](https://cloud.google.com/speech-to-text). It doesn't punctuate sentences (Audiotext adds the punctuation), and its quality is lower than Whisper's, so the transcriptions often need corrections. It can't detect the language nor translate, and returns plain text without timestamps.

Without an API key, the free tier is used, limited to 60 minutes per month. To extend it, set a Google API key. Google charges for its use, for which Audiotext is not responsible.
