---
title: Command-line interface
description: Transcribe files, folders and YouTube videos from scripts with the Audiotext command line.
sidebar:
  order: 3
---

Audiotext can also be used from the command line to transcribe from scripts, when [running it from the source code](/en/help/contributing/#set-up-the-project). It has three commands:

- `transcribe`: transcribes a file, the files of a folder or a YouTube video.
- `watch`: transcribes the files added to a folder until it's stopped with `Ctrl+C`.
- `check-update`: checks whether a new version is available and prints the link to download it.

The options that are not given take the values configured in the app. The transcriptions are always saved next to each transcribed file, or in the folder given with `--output-dir` (where the subfolders of a transcribed folder are recreated).

## Examples

```bash
# Transcribe a file. The text is also printed, so it can be redirected
uv run src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Transcribe the files of a folder identifying the speakers
uv run src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transcribe a YouTube video with the Whisper API
uv run src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transcribe a meeting with the Whisper API, with its keywords and its context
uv run src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "A meeting about the next release"

# Transcribe the files added to a folder until stopped with Ctrl+C
uv run src/cli.py watch inbox/ --output-types srt
```

## Options

| Option | Description |
| --- | --- |
| `-m`, `--method` | Transcription method: `whisperx`, `whisper-api` or `google` |
| `-l`, `--language` | Language of the audio as an ISO 639-1 code (e.g. `es`), or `auto` to detect it (not supported by Google) |
| `-o`, `--output-dir` | Folder where the transcriptions are saved (default: next to each transcribed file) |
| `--overwrite` | Overwrite existing transcriptions |
| `-p`, `--prompt` | What the audio is about, such as its topic or setting (not supported by Google) |
| `-k`, `--keywords` | Comma-separated names, terms or acronyms said in the audio, so they're spelled right (not supported by Google) |
| `--translate` | Translate the audio into English (not supported by Google) |
| `-q`, `--quiet` | Only print errors |
| `-v`, `--verbose` | Print the logs to debug errors |

**WhisperX options**

| Option | Description |
| --- | --- |
| `-t`, `--output-types` | Comma-separated output file types (e.g. `txt,srt`) |
| `--diarize` | Identify the speakers |
| `--speakers` | Number of speakers when identifying them (`0` to detect it) |
| `--model-size` | Model, e.g. `small` or `large-v2` (see [Engines](/en/reference/engines/#model)) |
| `--compute-type` | `int8`, `float16` or `float32` |
| `--batch-size` | Batch size |
| `--cpu` | Run on the CPU |

**Whisper API options**

| Option | Description |
| --- | --- |
| `--openai-model` | Transcription model: `whisper-1`, `gpt-transcribe` or `gpt-4o-transcribe-diarize` |

Run `uv run src/cli.py transcribe --help` to see all the options and their values.

## Output and exit code

The progress is printed to the standard error (hide it with `--quiet`), and the text of the transcription of a single file to the standard output. The command exits with code `1` if a transcription fails.

The API keys are the ones set in the app, or the environment variables `OPENAI_API_KEY`, `GOOGLE_API_KEY` and `HF_TOKEN` (for identifying the speakers).
