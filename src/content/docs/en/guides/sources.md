---
title: Audio sources
description: Transcribe files, YouTube videos and links, microphone recordings, folders and watched folders.
sidebar:
  order: 1
---

Audiotext transcribes from four kinds of sources, which you choose in the top bar under **New transcription**.

## File

Transcribes an audio or video file. Click **Choose a file…**, or drop the file on the window. The file explorer shows **All supported files** by default; you can show only **Audio files** or **Video files**. See [Formats and languages](/en/reference/formats-and-languages/) for the supported formats.

Only one file can be added at a time. To transcribe several files, use the [Folder](#folder) source.

## URL

Transcribes a **YouTube video** or a **direct link to an audio or video file** (e.g. the episode of a podcast). Paste the URL (with **Paste** or `Ctrl+V`) and click **Continue**. The URL must start with `http://` or `https://`.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

The audio is downloaded first, so it requires an Internet connection.

## Microphone

Records your voice or a meeting and transcribes it. The recording is kept in your history, so you can play it later.

1. Choose the microphone in the list (click the refresh button if you've just connected it).
2. Click the record button (or press `Ctrl+Enter`, `⌘↩` on macOS) to start recording. The level meter tells you if the sound is **Too quiet**, a **Good level** or **Too loud**.
3. Click it again to stop and transcribe.

### Live text

With **WhisperX**, turn on **Show the text while recording** in the **Live text** card to see a draft of the text as you speak. The draft is written by a fast **Live model** (`small` by default). When you stop, the whole recording is transcribed again with the model of the engine, which is more accurate, and the draft is replaced.

![The live text while recording from the microphone](/screenshots/live-text.png)

:::caution
Your system must detect an input device and allow the app to use it. If not, **No microphone found** is shown. On macOS, allow Audiotext in **System Settings** → **Privacy & Security** → **Microphone**.
:::

## Folder

Transcribes all the audio and video files of a folder **and its subfolders**. Click **Choose a folder…** or drop the folder on the window. Audiotext tells you how many files it found.

The transcription of each file is saved next to it (or in another folder you choose in the **Output** card), with the same name and the extension of each **file type** you selected. For example, with `.txt` and `.vtt`:

```text
files-to-transcribe
├── paranoid-android.mp3
├── paranoid-android.txt
├── paranoid-android.vtt
└── movies
    ├── mulholland-dr.avi
    ├── mulholland-dr.txt
    └── mulholland-dr.vtt
```

Files that already have a transcription are **skipped** unless you turn on **Overwrite existing files**. So, if you add a file to the folder and transcribe it again, only the new file is transcribed.

If a file can't be transcribed, the rest of the files are still transcribed, and the folder view shows which ones failed and why. **Transcribe again** repeats the folder, and the folder button opens the folder of the saved files.

### Watch a folder

Turn on **Watch the folder** in the **Folder** card to keep transcribing the files added to the folder (or to its subfolders) until you click **Stop watching**. It's useful for the recordings of a voice recorder or a meeting tool that are copied to a folder.

- The files that the folder already contains are skipped. To transcribe them, transcribe the folder without watching it.
- A file is transcribed once it has been completely copied (when its size stops changing), so large files aren't transcribed halfway.
- Errors don't stop the watcher.

## The queue

You can set up a new transcription while another one is in progress: the button becomes **Add to queue**, and it starts when the current one finishes. The queued and running transcriptions are shown in the history.
