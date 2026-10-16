---
title: Kommandozeile
description: Transkribieren, zusammenfassen und übersetzen Sie Dateien, Ordner und YouTube-Videos aus Skripten mit der Kommandozeile von Audiotext.
sidebar:
  order: 3
---

Audiotext lässt sich auch über die Kommandozeile verwenden, z. B. um aus Skripten zu transkribieren. Es gibt drei Befehle:

- `transcribe`: transkribiert eine Datei, die Dateien eines Ordners oder ein YouTube-Video.
- `watch`: transkribiert die Dateien, die einem Ordner hinzugefügt werden, bis er mit `Strg+C` beendet wird.
- `check-update`: prüft, ob eine neue Version verfügbar ist, und gibt den Link zum Herunterladen aus.

Nicht angegebene Optionen übernehmen die in der App eingestellten Werte. Die Transkriptionen werden immer neben jeder transkribierten Datei gespeichert oder in dem mit `--output-dir` angegebenen Ordner (in dem die Unterordner eines transkribierten Ordners nachgebildet werden).

## Ausführen

Die installierte App führt die Kommandozeile aus, wenn sie einen ihrer Befehle erhält:

| System | Befehl |
| --- | --- |
| Linux | `audiotext` (von `install.sh` in `~/.local/bin` installiert) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe` im Installationsordner von Audiotext (standardmäßig `%LOCALAPPDATA%\Programs\Audiotext`) |

Wenn Sie es [aus dem Quellcode ausführen](/de/help/contributing/#projekt-einrichten), verwenden Sie stattdessen `uv run src/cli.py`.

## Beispiele

```bash
# Eine Datei transkribieren. Der Text wird auch ausgegeben und lässt sich umleiten
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Die Dateien eines Ordners transkribieren und die Sprecher erkennen
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Ein YouTube-Video mit der Whisper-API transkribieren
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Ein Meeting mit der Whisper-API transkribieren, mit Schlüsselwörtern und Kontext
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Ein Meeting über die nächste Version"

# Untertitel und ein Word-Dokument speichern, zusammenfassen und ins Spanische übersetzen
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Die einem Ordner hinzugefügten Dateien transkribieren, bis mit Strg+C beendet
audiotext watch inbox/ --output-types srt
```

## Optionen

| Option | Beschreibung |
| --- | --- |
| `-m`, `--method` | Transkriptionsmethode: `whisperx`, `whisper-api` oder `google` |
| `-l`, `--language` | Sprache des Audios als ISO-639-1-Code (z. B. `de`) oder `auto` zur Erkennung (nicht mit Google) |
| `-t`, `--output-types` | Durch Kommas getrennte Ausgabedateitypen aus `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` und `ass` (z. B. `txt,srt,md`) |
| `-o`, `--output-dir` | Ordner, in dem die Transkriptionen gespeichert werden (Standard: neben jeder transkribierten Datei) |
| `--overwrite` | Vorhandene Transkriptionen überschreiben |
| `-p`, `--prompt` | Worum es im Audio geht, etwa Thema oder Rahmen (nicht mit Google) |
| `-k`, `--keywords` | Durch Kommas getrennte Namen, Begriffe oder Abkürzungen aus dem Audio, damit sie richtig geschrieben werden (nicht mit Google) |
| `--translate` | Das Audio beim Transkribieren ins Englische übersetzen (nicht mit Google). Für andere Sprachen siehe `--translate-to` |
| `-q`, `--quiet` | Nur Fehler ausgeben |
| `-v`, `--verbose` | Protokolle zur Fehlersuche ausgeben |
| `--version` | Die Version von Audiotext ausgeben |

Ausgabetypen, die die Transkriptionsmethode nicht selbst speichert (z. B. `md` oder `docx`), werden wie in der App aus ihrem Ergebnis exportiert. `aud` speichert nur WhisperX.

**Optionen für Zusammenfassung und Übersetzung**

| Option | Beschreibung |
| --- | --- |
| `--summarize` | Jede Transkription mit Kernpunkten und Kapiteln in einer `.summary.md`-Datei zusammenfassen |
| `--summary-provider` | Anbieter des Sprachmodells, das zusammenfasst: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` oder `ollama` |
| `--summary-model` | Sprachmodell, das zusammenfasst |
| `--translate-to` | Jede Transkription in eine Sprache (ein ISO-639-1-Code) übersetzen, gespeichert in ihren Ausgabedateitypen (z. B. `talk.es.srt`) |
| `--translation-provider` | Anbieter der Übersetzungen: die von `--summary-provider`, `deepl` oder `google` |
| `--translation-model` | Sprachmodell, das übersetzt, für die Anbieter von Sprachmodellen |

Ohne Angabe werden die in der App eingestellten Anbieter und Modelle verwendet. Siehe [Anbieter](/de/guides/summary-and-translation/#anbieter).

**WhisperX-Optionen**

| Option | Beschreibung |
| --- | --- |
| `--diarize` | Sprecher erkennen |
| `--speakers` | Anzahl der Sprecher beim Erkennen (`0` zur automatischen Erkennung) |
| `--model-size` | Modell, z. B. `small` oder `large-v2` (siehe [Engines](/de/reference/engines/#modell)) |
| `--compute-type` | `int8`, `float16` oder `float32` |
| `--batch-size` | Batchgröße |
| `--cpu` | Auf der CPU ausführen statt auf einer NVIDIA-GPU oder der GPU eines Macs |

**Whisper-API-Optionen**

| Option | Beschreibung |
| --- | --- |
| `--openai-model` | Transkriptionsmodell: `whisper-1`, `gpt-transcribe` oder `gpt-4o-transcribe-diarize` |

Führen Sie `audiotext transcribe --help` aus, um alle Optionen und ihre Werte zu sehen.

## Ausgabe und Exit-Code

Der Fortschritt wird auf die Standardfehlerausgabe geschrieben (mit `--quiet` ausblenden), der Text der Transkription einer einzelnen Datei auf die Standardausgabe. Der Befehl endet mit Code `1`, wenn eine Transkription, eine Zusammenfassung oder eine Übersetzung fehlschlägt, und mit `130`, wenn er mit `Strg+C` beendet wird.

Ist der API-Schlüssel des Anbieters von `--summarize` oder `--translate-to` nicht gesetzt, bricht der Befehl vor dem Transkribieren ab. Eine fehlgeschlagene Zusammenfassung oder Übersetzung wird gemeldet, ohne dass die Transkription verloren geht; sie wird trotzdem gespeichert.

Die API-Schlüssel sind die in der App festgelegten oder ihre [Umgebungsvariablen](/de/reference/files-and-data/#umgebungsvariablen), etwa `OPENAI_API_KEY`, `GOOGLE_API_KEY` und `HF_TOKEN` (zum Erkennen der Sprecher).
