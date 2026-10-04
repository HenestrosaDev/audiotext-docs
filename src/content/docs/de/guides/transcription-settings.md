---
title: Transkriptionseinstellungen
description: Wählen Sie Engine, Sprachen, Kontext, Optionen und Ausgabe jeder Transkription.
sidebar:
  order: 2
---

Vor dem Transkribieren zeigt Audiotext die Einstellungen der Transkription, gruppiert in Karten. Sie werden für das nächste Mal gespeichert, und jede Transkription behält die Einstellungen, mit denen sie erstellt wurde.

![Die Einstellungen der Transkription einer Datei](/screenshots/transcription-settings.png)

## Engine

Die **Transkriptionsmethode**:

| Engine | Läuft auf | Kosten | Hinweise |
| --- | --- | --- | --- |
| **WhisperX** (Standard) | Ihrem Computer | Kostenlos und unbegrenzt | Privat und offline. Mehr Optionen: Sprecher, Zeiten pro Wort, Live-Text. |
| **Whisper-API** | Servern von OpenAI | Kostenpflichtig pro Minute | Erfordert einen [OpenAI-API-Schlüssel](/de/reference/preferences/#api-schlüssel). Für Computer, auf denen WhisperX nicht flüssig läuft. |
| **Google-API** | Servern von Google | Kostenloses Kontingent oder kostenpflichtig | Geringere Qualität und keine Zeitstempel. Ein API-Schlüssel ist optional. |

Das **Modell** hängt von der Engine ab. Bei WhisperX sind größere Modelle genauer, aber langsamer. Bei der Whisper-API bestimmt es, ob die Transkription Zeitstempel und Sprecher hat. Vergleichen Sie sie unter [Engines](/de/reference/engines/).

## Sprache

- **Sprache des Audios**: standardmäßig **Automatisch erkennen**. Wenn Sie sie auswählen, vermeiden Sie Fehler bei kurzen oder gemischten Aufnahmen. Die Google-API kann sie nicht erkennen, daher müssen Sie sie auswählen.
- **Sprache der Transkription**: standardmäßig **Wie das Audio**. Wählen Sie eine andere Sprache, um das Audio beim Transkribieren zu übersetzen.

Wenn sich beide Sprachen unterscheiden, erscheinen die Optionen unter **Übersetzung**:

- **Mit Whisper übersetzen (empfohlen)**: Whisper transkribiert und übersetzt das Audio in einem Schritt. Es kann nur ins Englische übersetzen.
- **Direkt auf _Sprache_ schreiben (experimentell)**: Whisper wird gebeten, die Transkription direkt in dieser Sprache zu schreiben. Das funktioniert für viele Sprachen gut, prüfen Sie aber das Ergebnis.

Die Google-API kann nicht übersetzen. Um eine Transkription später mit weiteren Anbietern in eine beliebige Sprache zu übersetzen, verwenden Sie die Schaltfläche [Übersetzen](/de/guides/summary-and-translation/#übersetzung) des Transkripts.

## Kontext

Zwei optionale Felder, die dem Modell helfen:

- **Schlüsselwörter**: Namen, Begriffe oder Abkürzungen, die im Audio vorkommen, durch Kommas getrennt (z. B. `Audiotext, WhisperX, Henestrosa`), damit sie richtig geschrieben werden. Es sind nur Hinweise: Ein Schlüsselwort wird nur geschrieben, wenn es im Audio gesagt wird.
- **Beschreibung**: worum es im Audio geht, etwa das Thema oder der Rahmen (z. B. `Ein Interview über Spracherkennung`).

Sie werden von WhisperX und der Whisper-API verwendet, außer vom Modell `gpt-4o-transcribe-diarize`. Die Google-API verwendet sie nicht.

## Optionen

- **Zeiten pro Wort** (WhisperX): richtet jedes Wort am Audio aus, um es beim Abspielen hervorzuheben. Dauert etwas länger. Untertitel nutzen sie bereits.
- **Sprache extrahieren**: reduziert Musik und Hintergrundgeräusche vor dem Transkribieren.
- **Sprecher erkennen** (WhisperX): kennzeichnet, wer in welchem Teil spricht, z. B. `SPEAKER_00`. Wenn Sie wissen, wie viele Personen sprechen, geben Sie es unter **Anzahl der Sprecher** an (`0` erkennt sie automatisch). Erfordert ein kostenloses Hugging-Face-Token; siehe [Sprecher erkennen](#sprecher-erkennen). Bei der Whisper-API erkennt das Modell `gpt-4o-transcribe-diarize` die Sprecher.

### Sprecher erkennen

Das Modell, das die Sprecher erkennt, [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1), ist kostenlos, erfordert aber ein Hugging-Face-Token:

1. Erstellen Sie ein Konto bei [Hugging Face](https://huggingface.co/join) und akzeptieren Sie die Bedingungen von [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1).
2. Erstellen Sie in [Ihren Einstellungen](https://huggingface.co/settings/tokens) ein Token mit der Rolle `Read`.
3. Klicken Sie auf **Hugging-Face-Token festlegen…** und fügen Sie es ein.

Das Modell wird bei der ersten Verwendung heruntergeladen. Danach werden die Sprecher offline erkannt.

## Live-Text

Wird nur für das Mikrofon angezeigt. Siehe [Live-Text](/de/guides/sources/#live-text).

## Ordner und Ausgabe

Werden nur für Ordner angezeigt:

- **Ordner überwachen**: siehe [Einen Ordner überwachen](/de/guides/sources/#einen-ordner-überwachen).
- **Dateitypen**: bei WhisperX einer oder mehrere von `.txt`, `.srt`, `.vtt`, `.json`, `.tsv` und `.aud`. Bei der Whisper-API das Format der Dateien (`text`, `json`, `verbose_json`, `srt` oder `vtt`); Untertitel erfordern ein Modell mit Zeitstempeln. Die Google-API liefert Nur-Text (`.txt`).
- **Speicherort**: Die Dateien werden neben jeder Quelldatei gespeichert. Klicken Sie auf **Ändern…**, um sie in einem anderen Ordner zu speichern (seine Unterordner werden nachgebildet), oder auf **Neben der Quelle**, um zurückzuwechseln.
- **Vorhandene Dateien überschreiben**: transkribiert Dateien, die bereits eine Transkription haben, erneut und ersetzt sie.

Die Untertiteloptionen (Zeilenbreite, Zeilenanzahl, hervorgehobene Wörter) finden Sie in den [Einstellungen](/de/reference/preferences/#untertitel).
