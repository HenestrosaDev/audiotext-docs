---
title: The transcript
description: Play, search, correct, copy and export a transcription, and watch videos with their subtitles.
sidebar:
  order: 3
---

Select a transcription in the [history](/en/guides/history/) to open it. The toolbar switches between three modes, **Transcript**, **Plain text** and **Summary**, and has the **Translate**, **Copy** and **Export** buttons.

## Transcript

Shows each segment of the transcription (a sentence, or a part of a long one) with when it starts and ends and, if the speakers were identified, its speaker.

The times are simplified (`01:05 – 01:09`) by default. To see them to the millisecond, like the subtitles (`00:01:05,900 – 00:01:09,350`), check **Precise timestamps (00:00:01,000)** in the `⋯` menu.

Timestamps are only available with **WhisperX** and the `whisper-1` and `gpt-4o-transcribe-diarize` models of the **Whisper API**. Without them, the transcript can't be played segment by segment; use the **Plain text** mode instead.

### Play the audio

- **Click a segment** to play the audio from there. The segment being played is highlighted, and the text follows the playback. With word-level timings, each word is highlighted too.
- Use the player bar to play, pause, move to any point and change the **speed**, from `0.5×` to `2×`, keeping the pitch of the voices.
- Keyboard shortcuts: `Space` plays or pauses, and `←`/`→` go back or forward 5 seconds.

If the source file was moved or deleted, the audio isn't available, but the text still is. Recordings from the microphone are kept by Audiotext, so they can always be played.

![A transcription being played, with the current segment highlighted](/screenshots/transcript.png)

### Watch videos with subtitles

The transcriptions of videos show the video above the text. Its menu lets you **Show subtitles on the video**, and choose their **Size** (small, medium or large), **Position** (bottom or top) and **Style** (dark background or outline). If the transcription has a [translation](/en/guides/summary-and-translation/#translation), the menu also chooses whether the subtitles show the **Transcription** or the **Translation into…** its language.

### Search

Press `Ctrl+F` (`⌘F` on macOS) and type. `Enter` and `Shift+Enter` move to the next and previous matches, and `Esc` clears the search.

## Correct the transcription

To correct the transcription while keeping its timestamps (which the subtitles and the playback use), use the options of the `⋯` menu, or right-click a segment:

- **Find and replace…**: replaces a word or a phrase in the whole transcription, e.g. a name that was spelled wrong. It shows how many times the text appears before replacing it, and can **Match case**.
- **Rename speakers…**: gives a name to each speaker (`SPEAKER_00` → `Ana`). Giving two speakers the same name merges them.
- **Edit the text…**: right-click a segment to change its text.
- **Play from here**: right-click a segment to play it.

The words that don't change keep their timings, so they're still highlighted while playing.

## Plain text

The **Plain text** mode lets you edit the text freely, like in a text editor. The changes are saved automatically. The transcript keeps the original text with its timestamps, so the edits of the plain text aren't used by the subtitles.

## Copy and export

**Copy** copies the text of the current mode (the transcript, the summary or the translation).

**Export** (or `Ctrl+S`, `⌘S` on macOS) saves the transcription as:

| Format | Contents |
| --- | --- |
| Plain text (`.txt`) | The text |
| Markdown (`.md`) | The summary, if any, and the text in paragraphs with the timestamp and the speaker of each one |
| Word document (`.docx`) | The same as Markdown, ready to edit or print |
| Subtitles (`.srt`) | Subtitles for video players |
| Web subtitles (`.vtt`) | Subtitles for the web |
| Table (`.tsv`) | One row per segment, with its start and end (in milliseconds) and its text |
| JSON (`.json`) | The text, the segments with their timestamps, words and speakers, and the summary, if any |

The subtitles and the table need timestamps.

If the transcription has a translation, choose **Translation into…** in the same menu (or click the export button of the translation) to export the translation in the same formats. The name of the file includes its language (e.g. `video.es.srt`), so the video players load it with the video.

## Rename, tag and add notes

The header of the transcription shows its name, source, date and tag. Double-click the name to rename it, click the tag to change it, or click **Add note** to write a note about it. Click the note, or its pencil, to edit it, and its trash can to delete it. More options are in the [history](/en/guides/history/).
