---
title: Kommandozeile
description: Transkribieren Sie Dateien, Ordner und YouTube-Videos aus Skripten mit der Kommandozeile von Audiotext.
sidebar:
  order: 3
---

Audiotext lässt sich auch über die Kommandozeile verwenden, um aus Skripten zu transkribieren, wenn Sie es [aus dem Quellcode ausführen](/de/help/contributing/#projekt-einrichten). Es gibt drei Befehle:

- `transcribe`: transkribiert eine Datei, die Dateien eines Ordners oder ein YouTube-Video.
- `watch`: transkribiert die Dateien, die einem Ordner hinzugefügt werden, bis er mit `Strg+C` beendet wird.
- `check-update`: prüft, ob eine neue Version verfügbar ist, und gibt den Link zum Herunterladen aus.

Nicht angegebene Optionen übernehmen die in der App eingestellten Werte. Die Transkriptionen werden immer neben jeder transkribierten Datei gespeichert oder in dem mit `--output-dir` angegebenen Ordner (in dem die Unterordner eines transkribierten Ordners nachgebildet werden).

## Beispiele

```bash
# Eine Datei transkribieren. Der Text wird auch ausgegeben und lässt sich umleiten
uv run src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Die Dateien eines Ordners transkribieren und die Sprecher erkennen
uv run src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Ein YouTube-Video mit der Whisper-API transkribieren
uv run src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Ein Meeting mit der Whisper-API transkribieren, mit Schlüsselwörtern und Kontext
uv run src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Ein Meeting über die nächste Version"

# Die einem Ordner hinzugefügten Dateien transkribieren, bis mit Strg+C beendet
uv run src/cli.py watch inbox/ --output-types srt
```

## Optionen

| Option | Beschreibung |
| --- | --- |
| `-m`, `--method` | Transkriptionsmethode: `whisperx`, `whisper-api` oder `google` |
| `-l`, `--language` | Sprache des Audios als ISO-639-1-Code (z. B. `de`) oder `auto` zur Erkennung (nicht mit Google) |
| `-o`, `--output-dir` | Ordner, in dem die Transkriptionen gespeichert werden (Standard: neben jeder transkribierten Datei) |
| `--overwrite` | Vorhandene Transkriptionen überschreiben |
| `-p`, `--prompt` | Worum es im Audio geht, etwa Thema oder Rahmen (nicht mit Google) |
| `-k`, `--keywords` | Durch Kommas getrennte Namen, Begriffe oder Abkürzungen aus dem Audio, damit sie richtig geschrieben werden (nicht mit Google) |
| `--translate` | Das Audio ins Englische übersetzen (nicht mit Google) |
| `-q`, `--quiet` | Nur Fehler ausgeben |
| `-v`, `--verbose` | Protokolle zur Fehlersuche ausgeben |

**WhisperX-Optionen**

| Option | Beschreibung |
| --- | --- |
| `-t`, `--output-types` | Durch Kommas getrennte Ausgabedateitypen (z. B. `txt,srt`) |
| `--diarize` | Sprecher erkennen |
| `--speakers` | Anzahl der Sprecher beim Erkennen (`0` zur automatischen Erkennung) |
| `--model-size` | Modell, z. B. `small` oder `large-v2` (siehe [Engines](/de/reference/engines/#modell)) |
| `--compute-type` | `int8`, `float16` oder `float32` |
| `--batch-size` | Batchgröße |
| `--cpu` | Auf der CPU ausführen |

**Whisper-API-Optionen**

| Option | Beschreibung |
| --- | --- |
| `--openai-model` | Transkriptionsmodell: `whisper-1`, `gpt-transcribe` oder `gpt-4o-transcribe-diarize` |

Führen Sie `uv run src/cli.py transcribe --help` aus, um alle Optionen und ihre Werte zu sehen.

## Ausgabe und Exit-Code

Der Fortschritt wird auf die Standardfehlerausgabe geschrieben (mit `--quiet` ausblenden), der Text der Transkription einer einzelnen Datei auf die Standardausgabe. Der Befehl endet mit Code `1`, wenn eine Transkription fehlschlägt.

Die API-Schlüssel sind die in der App festgelegten oder die Umgebungsvariablen `OPENAI_API_KEY`, `GOOGLE_API_KEY` und `HF_TOKEN` (zum Erkennen der Sprecher).
