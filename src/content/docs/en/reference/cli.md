---
title: Command-line interface
description: Transcribe, summarize and translate files, folders and YouTube videos from scripts with the Audiotext command line.
sidebar:
  order: 3
---

Audiotext can also be used from the command line, e.g. to transcribe from scripts. It has three commands:

- `transcribe`: transcribes a file, the files of a folder or a YouTube video.
- `watch`: transcribes the files added to a folder until it's stopped with `Ctrl+C`.
- `check-update`: checks whether a new version is available and prints the link to download it.

The options that are not given take the values configured in the app. The transcriptions are always saved next to each transcribed file, or in the folder given with `--output-dir` (where the subfolders of a transcribed folder are recreated).

## Run it

The installed app runs the command line when it's given one of its commands:

| System | Command |
| --- | --- |
| Linux | `audiotext` (installed in `~/.local/bin` by `install.sh`) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe`, in the folder where Audiotext is installed (`%LOCALAPPDATA%\Programs\Audiotext` by default) |

When [running it from the source code](/en/help/contributing/#set-up-the-project), run `uv run src/cli.py` instead.

## Examples

```bash
# Transcribe a file. The text is also printed, so it can be redirected
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Transcribe the files of a folder identifying the speakers
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transcribe a YouTube video with the Whisper API
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transcribe a meeting with the Whisper API, with its keywords and its context
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "A meeting about the next release"

# Save the subtitles and a Word document, summarize it, and translate it into Spanish
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Transcribe the files added to a folder until stopped with Ctrl+C
audiotext watch inbox/ --output-types srt

# The same, transcribing first the files it already contains
audiotext watch inbox/ --existing
```

## Options

| Option | Description |
| --- | --- |
| `-m`, `--method` | Transcription method: `whisperx`, `whisper-api` or `google` |
| `-l`, `--language` | Language of the audio as an ISO 639-1 code (e.g. `es`), or `auto` to detect it (not supported by Google) |
| `-t`, `--output-types` | Comma-separated output file types, from `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` and `ass` (e.g. `txt,srt,md`) |
| `-o`, `--output-dir` | Folder where the transcriptions are saved (default: next to each transcribed file) |
| `--overwrite` | Transcribe again the files that already have a transcription, replacing it |
| `--existing` | (`watch` only) First transcribe the files that the folder already contains and that don't have a transcription yet |
| `-p`, `--prompt` | What the audio is about, such as its topic or setting (not supported by Google) |
| `-k`, `--keywords` | Comma-separated names, terms or acronyms said in the audio, so they're spelled right (not supported by Google) |
| `--translate` | Translate the audio into English while transcribing it (not supported by Google). See `--translate-to` for other languages |
| `-q`, `--quiet` | Only print errors |
| `-v`, `--verbose` | Print the logs to debug errors |
| `--version` | Print the version of Audiotext |

The output types that the transcription method doesn't save itself (e.g. `md` or `docx`) are exported from its result, like from the app. `aud` is only saved by WhisperX.

**Summary and translation options**

| Option | Description |
| --- | --- |
| `--summarize` | Summarize each transcription, with its key points and chapters, into a `.summary.md` file |
| `--summary-provider` | Provider of the language model that summarizes: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` or `ollama` |
| `--summary-model` | Language model that summarizes |
| `--translate-to` | Translate each transcription into a language (an ISO 639-1 code), saved in its output file types (e.g. `talk.es.srt`) |
| `--translation-provider` | Provider of the translations: the ones of `--summary-provider`, `deepl` or `google` |
| `--translation-model` | Language model that translates, for the providers of language models |

The providers and the models are the ones configured in the app unless given. See [Providers](/en/guides/summary-and-translation/#providers).

**WhisperX options**

| Option | Description |
| --- | --- |
| `--diarize` | Identify the speakers |
| `--speakers` | Number of speakers when identifying them (`0` to detect it) |
| `--model-size` | Model, e.g. `small` or `large-v2` (see [Engines](/en/reference/engines/#model)) |
| `--compute-type` | `int8`, `float16` or `float32` |
| `--batch-size` | Batch size |
| `--cpu` | Run on the CPU, instead of an NVIDIA GPU or the GPU of a Mac |

**Whisper API options**

| Option | Description |
| --- | --- |
| `--openai-model` | Transcription model: `whisper-1`, `gpt-transcribe` or `gpt-4o-transcribe-diarize` |

Run `audiotext transcribe --help` to see all the options and their values.

## Output and exit code

The progress is printed to the standard error (hide it with `--quiet`), and the text of the transcription of a single file to the standard output. The command exits with code `1` if a transcription, a summary or a translation fails, and with `130` if it's stopped with `Ctrl+C`.

If the API key of the provider of `--summarize` or `--translate-to` isn't set, the command stops before transcribing. A summary or a translation that fails is reported without losing the transcription, which is saved anyway.

The API keys are the ones set in the app, or their [environment variables](/en/reference/files-and-data/#environment-variables), such as `OPENAI_API_KEY`, `GOOGLE_API_KEY` and `HF_TOKEN` (for identifying the speakers).
