---
title: Das Transkript
description: Spielen Sie eine Transkription ab, durchsuchen, korrigieren, kopieren und exportieren Sie sie, und sehen Sie Videos mit Untertiteln.
sidebar:
  order: 3
---

Wählen Sie eine Transkription im [Verlauf](/de/guides/history/), um sie zu öffnen. Die Werkzeugleiste wechselt zwischen drei Modi – **Transkript**, **Nur-Text** und **Zusammenfassung** – und bietet die Schaltflächen **Übersetzen**, **Kopieren** und **Exportieren**.

## Transkript

Zeigt jeden Satz mit seinem Zeitstempel und, falls die Sprecher erkannt wurden, seinem Sprecher.

Zeitstempel gibt es nur mit **WhisperX** und mit den Modellen `whisper-1` und `gpt-4o-transcribe-diarize` der **Whisper-API**. Ohne sie lässt sich das Transkript nicht Satz für Satz abspielen; verwenden Sie stattdessen den Modus **Nur-Text**.

### Audio abspielen

- **Klicken Sie auf einen Satz**, um das Audio ab dort abzuspielen. Der aktuelle Satz wird hervorgehoben, und der Text folgt der Wiedergabe. Mit Zeiten pro Wort wird auch jedes Wort hervorgehoben.
- Mit der Wiedergabeleiste spielen Sie ab, pausieren, springen an jede Stelle und ändern die **Geschwindigkeit** von `0.5×` bis `2×`, ohne die Tonhöhe der Stimmen zu verändern.
- Tastenkürzel: `Leertaste` spielt ab oder pausiert, `←`/`→` springen 5 Sekunden zurück oder vor.

Wurde die Quelldatei verschoben oder gelöscht, ist das Audio nicht verfügbar, der Text aber schon. Mikrofonaufnahmen bewahrt Audiotext selbst auf, sie lassen sich also immer abspielen.

![Eine Transkription bei der Wiedergabe, mit hervorgehobenem aktuellem Satz](/screenshots/transcript.png)

### Videos mit Untertiteln ansehen

Bei Transkriptionen von Videos wird das Video über dem Text angezeigt. Über sein Menü können Sie **Untertitel im Video anzeigen** und deren **Größe** (klein, mittel oder groß), **Position** (unten oder oben) und **Stil** (dunkler Hintergrund oder Kontur) wählen.

### Suchen

Drücken Sie `Strg+F` (`⌘F` unter macOS) und tippen Sie. `Eingabe` und `Umschalt+Eingabe` springen zum nächsten und vorherigen Treffer, `Esc` leert die Suche.

## Die Transkription korrigieren

Um die Transkription zu korrigieren und dabei ihre Zeitstempel zu behalten (die Untertitel und Wiedergabe nutzen), verwenden Sie die Optionen des Menüs `⋯` oder klicken Sie mit der rechten Maustaste auf einen Satz:

- **Suchen und ersetzen…**: ersetzt ein Wort oder eine Wendung in der ganzen Transkription, z. B. einen falsch geschriebenen Namen. Zeigt vor dem Ersetzen, wie oft der Text vorkommt, und kann **Groß-/Kleinschreibung beachten**.
- **Sprecher umbenennen…**: gibt jedem Sprecher einen Namen (`SPEAKER_00` → `Anna`). Zwei Sprecher mit demselben Namen werden zusammengeführt.
- **Text bearbeiten…**: Klicken Sie mit der rechten Maustaste auf einen Satz, um seinen Text zu ändern.
- **Ab hier abspielen**: Klicken Sie mit der rechten Maustaste auf einen Satz, um ihn abzuspielen.

Unveränderte Wörter behalten ihre Zeiten und werden daher beim Abspielen weiterhin hervorgehoben.

## Nur-Text

Im Modus **Nur-Text** können Sie den Text frei bearbeiten, wie in einem Texteditor. Die Änderungen werden automatisch gespeichert. Das Transkript behält den Originaltext mit seinen Zeitstempeln, daher nutzen die Untertitel die Änderungen am Nur-Text nicht.

## Kopieren und exportieren

**Kopieren** kopiert den Text des aktuellen Modus (das Transkript, die Zusammenfassung oder die Übersetzung).

**Exportieren** (oder `Strg+S`, `⌘S` unter macOS) speichert die Transkription als:

| Format | Inhalt |
| --- | --- |
| Nur-Text (`.txt`) | Der Text |
| Markdown (`.md`) | Die Zusammenfassung, falls vorhanden, und der Text in Absätzen mit Zeitstempel und Sprecher |
| Word-Dokument (`.docx`) | Wie Markdown, bereit zum Bearbeiten oder Drucken |
| Untertitel (`.srt`) | Untertitel für Videoplayer |
| Web-Untertitel (`.vtt`) | Untertitel für das Web |
| Tabelle (`.tsv`) | Eine Zeile pro Satz mit Anfang und Ende (in Millisekunden) und Text |
| JSON (`.json`) | Der Text, die Segmente mit Zeitstempeln, Wörtern und Sprechern sowie die Zusammenfassung, falls vorhanden |

Untertitel und Tabelle erfordern Zeitstempel.

## Umbenennen, Etiketten und Notizen

Die Kopfzeile der Transkription zeigt Namen, Quelle, Datum und Etikett. Doppelklicken Sie auf den Namen, um sie umzubenennen, klicken Sie auf das Etikett, um es zu ändern, oder klicken Sie auf **Notiz hinzufügen**, um eine Notiz zu schreiben. Weitere Optionen finden Sie im [Verlauf](/de/guides/history/).
