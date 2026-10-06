---
title: Your first transcription
description: A tour of the Audiotext window and the steps to transcribe an audio or video file.
sidebar:
  order: 2
---

## The window

The window of Audiotext has three parts:

- **The top bar**: the buttons to start a **New transcription** from a **File**, a **URL**, the **Microphone** or a **Folder**, the status of the app, and the gear that opens the [Preferences](/en/reference/preferences/). The button on the left shows or hides the history.
- **The history**, on the left: all your transcriptions, which you can search, pin, group and rename. See [History](/en/guides/history/).
- **The main area**: the source you're setting up, the progress of a transcription, or the transcription you selected in the history.

![The parts of the Audiotext window: the top bar, the history and the main area](/screenshots/window.png)

When you open the app, the main area asks **What do you want to transcribe?** and shows a card for each kind of source.

:::tip
Drop a file or a folder anywhere on the window to transcribe it.
:::

## Transcribe a file

1. Click **File** in the top bar (or press `Ctrl+O`, `⌘O` on macOS) and choose an audio or video file, or drop it on the window. Then click **Continue**.
2. Review the settings. The defaults work well for most audios:
   - **Engine**: WhisperX, which runs on your computer. Choose a smaller **Model** (such as `small`) if your computer is slow.
   - **Language**: the **Language of the audio** is detected automatically. Choose it if you know it, to avoid mistakes. To translate, choose another **Language of the transcription**.
   - **Context** and **Options**: optional hints and features, such as identifying the speakers.

   See [Transcription settings](/en/guides/transcription-settings/) for all of them.
3. Click **Start transcription** (or press `Ctrl+Enter`, `⌘↩` on macOS).

The progress of each step (loading the model, transcribing, aligning the words…) is shown while it works. You can keep using Audiotext meanwhile: the result is saved in your history and opens when it's ready. To cancel it, click **Cancel** or press `Esc`.

If another transcription is in progress, the button becomes **Add to queue**, and the new one starts when the current one finishes.

## Read and use the result

When it finishes, the transcription opens:

- Click a segment to play the audio from there.
- Switch between **Transcript**, **Plain text** and **Summary**.
- Use **Translate**, **Copy** and **Export** to translate it, copy it or save it as a file.

See [The transcript](/en/guides/transcript/) to learn everything you can do with it.

## Keyboard shortcuts

| Shortcut | Action |
| --- | --- |
| `Ctrl+Enter` / `⌘↩` | Start the transcription, or start and stop recording |
| `Ctrl+O` / `⌘O` | Choose a file (or a folder, in the folder source) |
| `Ctrl+S` / `⌘S` | Export the transcription being shown |
| `Ctrl+F` / `⌘F` | Search the transcription |
| `Esc` | Cancel the transcription in progress |
| `Space` | Play or pause the audio |
| `←` / `→` | Go back or forward 5 seconds |
