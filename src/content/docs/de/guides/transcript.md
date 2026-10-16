---
title: Das Transkript
description: Spielen Sie eine Transkription ab, durchsuchen, korrigieren, prüfen, kopieren und exportieren Sie sie, und sehen oder exportieren Sie Videos mit Untertiteln.
sidebar:
  order: 3
---

Wählen Sie eine Transkription im [Verlauf](/de/guides/history/), um sie zu öffnen. Die Werkzeugleiste wechselt zwischen vier Modi – **Untertitel**, **Nur-Text**, **Zusammenfassung** und **Fragen** – und bietet die Schaltfläche **Übersetzen** und das Menü `⋯`.

Die Transkription erscheint in einer Karte, die nach ihrer Sprache benannt ist. Mit den Schaltflächen in deren Kopfzeile suchen und ersetzen Sie darin, kopieren und exportieren sie und können sie **Erneut transkribieren** (nach einer Rückfrage, da die Korrekturen am Text verloren gehen).

## Untertitel

Zeigt die Transkription aufgeteilt in die Untertitel des Videos, jeweils mit Anfang und Ende und, falls die Sprecher erkannt wurden, dem Sprecher. Ihre Länge folgt den [Untertitel-Einstellungen](/de/reference/preferences/#untertitel).

Standardmäßig werden die Zeiten millisekundengenau wie in den Untertiteln angezeigt (`00:01:05,900 – 00:01:09,350`). Um sie zu vereinfachen (`01:05 – 01:09`), deaktivieren Sie **Genaue Zeitstempel (HH:MM:SS,mmm)** im Menü `⋯`.

Zeitstempel gibt es nur mit **WhisperX** und mit den Modellen `whisper-1` und `gpt-4o-transcribe-diarize` der **Whisper-API**. Ohne sie lässt sich das Transkript nicht Untertitel für Untertitel abspielen; verwenden Sie stattdessen den Modus **Nur-Text**.

### Audio abspielen

- **Klicken Sie auf einen Untertitel**, um das Audio ab dort abzuspielen. Der aktuelle Untertitel wird hervorgehoben und in der Mitte des Textes gehalten. Mit Zeiten pro Wort wird auch jedes Wort hervorgehoben.
- Mit der Wiedergabeleiste spielen Sie ab, pausieren, springen an jede Stelle und ändern die **Geschwindigkeit** von `0.5×` bis `2×`, ohne die Tonhöhe der Stimmen zu verändern.
- Tastenkürzel: `Leertaste` spielt ab oder pausiert, `←`/`→` springen 5 Sekunden zurück oder vor.

Wurde die Quelldatei verschoben oder gelöscht, ist das Audio nicht verfügbar, der Text aber schon. Mikrofonaufnahmen bewahrt Audiotext selbst auf, sie lassen sich also immer abspielen.

![Eine Transkription bei der Wiedergabe, mit hervorgehobenem aktuellem Segment](/screenshots/transcript.png)

### Videos mit Untertiteln ansehen

Bei Transkriptionen von Videos wird das Video über dem Text angezeigt. Über sein Menü können Sie **Untertitel im Video anzeigen** und deren **Größe** (klein, mittel oder groß), **Position** (unten oder oben) und **Stil** (dunkler Hintergrund oder Kontur) wählen. Hat die Transkription [Übersetzungen](/de/guides/summary-and-translation/#übersetzung), legt das Menü auch fest, ob die Untertitel die **Transkription** oder die **Übersetzung nach…** einer Sprache zeigen.

## Suchen und ersetzen

Drücken Sie `Strg+F` (`⌘F` unter macOS) oder klicken Sie auf die Lupe in der Kopfzeile, um das Fenster zum Suchen und Ersetzen im Text zu öffnen, an dem Sie gerade arbeiten: der Transkription oder ihrer Übersetzung. Es findet den Text schon beim Tippen (Zeitstempel und Sprecher werden nicht durchsucht) und zeigt, wie viele Treffer es gibt.

- `Eingabe` und `Umschalt+Eingabe` oder die Pfeile springen zum nächsten und vorherigen Treffer.
- **Ersetzen** ersetzt den aktuellen Treffer, **Alle ersetzen** alle, z. B. einen falsch geschriebenen Namen. Mit **Groß-/Kleinschreibung beachten** finden Sie nur Text mit derselben Schreibung.
- Das Fenster ist nicht modal, Sie können den Text also lesen und abspielen, während es offen ist. **Im Vordergrund halten** hält es über dem Hauptfenster.
- `Esc` schließt es.

## Die Transkription korrigieren

Um die Transkription zu korrigieren und dabei ihre Zeitstempel zu behalten (die Untertitel und Wiedergabe nutzen), verwenden Sie das Fenster [Suchen und ersetzen](#suchen-und-ersetzen) oder klicken Sie mit der rechten Maustaste auf einen Untertitel:

- **Ab hier abspielen**: spielt ihn ab.
- **Kopieren**: kopiert seinen Text.
- **Text bearbeiten…**: ändert seinen Text.
- **Sprecher umbenennen…**: gibt jedem Sprecher einen Namen (`SPEAKER_00` → `Anna`). Zwei Sprecher mit demselben Namen werden zusammengeführt. Auch im Menü `⋯`.

Unveränderte Wörter behalten ihre Zeiten und werden daher beim Abspielen weiterhin hervorgehoben.

## Wörter mit geringer Konfidenz prüfen

Die Wörter, bei denen sich die Engine am wenigsten sicher ist, werden unterstrichen, damit Sie wissen, wo Sie zuerst Korrektur lesen sollten. WhisperX bewertet jedes Wort, wenn es seine Zeiten bestimmt (**Zeiten pro Wort**, standardmäßig aktiv), und das Modell `whisper-1` der Whisper-API bewertet jedes Segment, sodass dessen Segmente vollständig unterstrichen werden.

Eine Leiste über dem Text zeigt, wie viele Wörter noch zu prüfen sind (z. B. `3 von 12 zu prüfen`):

- Ihre Pfeile oder `Strg+J` und `Umschalt+Strg+J` (`⌘J` und `⇧⌘J` unter macOS) springen zum nächsten und vorherigen Wort und bewegen den Player dorthin. Mit **Automatisch abspielen** wird jedes Wort mit etwas Kontext abgespielt.
- `Eingabe` übernimmt das angesprungene Wort unverändert und geht zum nächsten. **Restliche übernehmen** übernimmt alle übrigen Wörter, und **Rückgängig** macht die letzte Prüfung rückgängig.
- Klicken Sie auf ein Wort, um es direkt zu korrigieren: Geben Sie den richtigen Text ein und drücken Sie `Eingabe` (oder **Übernehmen** Sie es unverändert). **Erneut abspielen** (`Strg+R`, `⌘R` unter macOS) spielt es noch einmal ab, `Esc` schließt.
- **Nur markierte** zeigt nur die Untertitel mit zu prüfenden Wörtern.
- Die Wörter sind auch unter der Position des Audios markiert. Klicken Sie auf eine Markierung, um zu ihrem Wort zu springen.

Wenn alle geprüft sind, holt **Übernommene Wörter erneut prüfen** die übernommenen Wörter zurück. Korrigierte Wörter bleiben geprüft.

Die Wörter werden unterstrichen, wenn ihre Bewertung unter 40 % liegt. Wählen Sie eine andere Schwelle von 20 % bis 70 % unter `⋯` → **Schwelle für geringe Konfidenz** oder über **Schwelle anpassen** in der Leiste. Um sie nicht mehr zu unterstreichen und die Leiste auszublenden, deaktivieren Sie **Wörter mit geringer Konfidenz hervorheben** im Menü `⋯`.

Hat eine Transkription keine Bewertungen, nennt das Menü `⋯` den Grund: **„Zeiten pro Wort“ aktivieren und erneut transkribieren**, **Für diese Sprache gibt es kein Ausrichtungsmodell**, **Erneut transkribieren, um die Wörter zu bewerten** (sie entstand, bevor Wörter bewertet wurden) oder **Nur WhisperX und whisper-1 bewerten die Wörter**.

## Nur-Text

Im Modus **Nur-Text** können Sie den Text frei bearbeiten, wie in einem Texteditor. Die Änderungen werden automatisch gespeichert. Das Transkript behält den Originaltext mit seinen Zeitstempeln, daher nutzen die Untertitel die Änderungen am Nur-Text nicht.

## Kopieren und exportieren

Die Kopier-Schaltfläche in der Kopfzeile kopiert den Text der Transkription.

Die Export-Schaltfläche (oder `Strg+S`, `⌘S` unter macOS) speichert sie als:

| Format | Inhalt |
| --- | --- |
| Formatierte Untertitel (`.ass`) | Untertitel mit einer Farbe pro Sprecher, für Videoplayer und -editoren |
| JSON (`.json`) | Der Text, die Segmente mit Zeitstempeln, Wörtern und Sprechern sowie die Zusammenfassung, falls vorhanden |
| Markdown (`.md`) | Die Zusammenfassung, falls vorhanden, und der Text in Absätzen mit Zeitstempel und Sprecher |
| Nur-Text (`.txt`) | Der Text |
| Tabelle (`.tsv`) | Eine Zeile pro Segment mit Anfang und Ende (in Millisekunden) und Text |
| Untertitel (`.srt`) | Untertitel für Videoplayer |
| Web-Untertitel (`.vtt`) | Untertitel für das Web |
| Word-Dokument (`.docx`) | Wie Markdown, bereit zum Bearbeiten oder Drucken |

Untertitel und Tabelle erfordern Zeitstempel. Die [Übersetzungen](/de/guides/summary-and-translation/#untertitel-und-export) und die [Zusammenfassung](/de/guides/summary-and-translation/#zusammenfassung) werden aus ihren eigenen Bereichen exportiert.

### Das Video mit seinen Untertiteln exportieren

Um ein Video dort zu teilen, wo sich keine Untertiteldateien laden lassen (z. B. in einem sozialen Netzwerk), wählen Sie **Video mit Untertiteln (.mp4)…** im Exportmenü der Transkription oder einer Übersetzung. Audiotext erstellt eine Kopie des Videos mit eingebrannten Untertiteln, so wie sie in der App angezeigt werden: mit ihrer Größe, Position und ihrem Stil (siehe [Videos mit Untertiteln ansehen](#videos-mit-untertiteln-ansehen)).

Die Kopie wird im Hintergrund erstellt, und der Status zeigt den Fortschritt. Zum Abbrechen wählen Sie im selben Menü **Hinzufügen der Untertitel zum Video abbrechen**. Die Kopie ist eine MP4-Datei (H.264-Video und AAC-Audio), das Originalvideo bleibt unverändert.

Enthält keine Schriftart Ihres Systems bestimmte Zeichen der Untertitel, werden sie als Kästchen gezeichnet, und Audiotext listet sie am Ende auf. Siehe [Fehlerbehebung](/de/help/troubleshooting/#das-video-mit-untertiteln-zeigt-kästchen).

## Umbenennen, Etiketten und Notizen

Die Kopfzeile der Transkription zeigt Namen, Quelle, Datum und Etikett. Doppelklicken Sie auf den Namen, um sie umzubenennen, klicken Sie auf das Etikett, um es zu ändern, oder klicken Sie auf **Notiz hinzufügen**, um eine Notiz zu schreiben. Klicken Sie auf die Notiz oder ihren Stift, um sie zu bearbeiten, und auf ihren Papierkorb, um sie zu löschen.

Das Menü `⋯` bietet diese Optionen ebenfalls und öffnet den Ordner der Quelldatei oder den **Ordner der gespeicherten Dateien**. Weitere Optionen finden Sie im [Verlauf](/de/guides/history/).
