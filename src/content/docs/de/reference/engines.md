---
title: Engines
description: Vergleichen Sie WhisperX, die Whisper-API und die Google-API und wählen Sie deren Modelle und erweiterte Optionen.
sidebar:
  order: 1
---

Audiotext transkribiert mit einer von drei Engines, die Sie auf der Karte **Engine** der [Transkriptionseinstellungen](/de/guides/transcription-settings/#engine) wählen.

| | WhisperX | Whisper-API | Google-API |
| --- | --- | --- | --- |
| Läuft auf | Ihrem Computer | Servern von OpenAI | Servern von Google |
| Internet | Nur zum Herunterladen der Modelle | Erforderlich | Erforderlich |
| Kosten | Kostenlos, unbegrenzt | Kostenpflichtig | Kostenloses Kontingent (60 Min./Monat) oder kostenpflichtig mit API-Schlüssel |
| Erkennt die Sprache | ✓ | ✓ | ✗ |
| Übersetzt | ✓ | ✓ | ✗ |
| Zeitstempel | ✓ | Je nach Modell | ✗ |
| Erkennt Sprecher | ✓ (Hugging-Face-Token) | `gpt-4o-transcribe-diarize` | ✗ |
| Zeiten pro Wort | ✓ | `whisper-1` | ✗ |
| Live-Text | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) ist eine schnelle Implementierung von OpenAIs Whisper, die auf Ihrem Computer läuft – Ihr Audio verlässt ihn also nie. Es läuft auf der CPU oder, viel schneller, auf einer NVIDIA-GPU mit CUDA.

### Modell

Größere Modelle sind genauer, aber langsamer und brauchen mehr Speicher. Das Modell wird bei der ersten Verwendung heruntergeladen.

| Modell | Parameter | Benötigter VRAM |
| :---: | :---: | :---: |
| `tiny`, `tiny.en` | 39 M | ~1 GB |
| `base`, `base.en` | 74 M | ~1 GB |
| `small`, `small.en` | 244 M | ~2 GB |
| `distil-small.en` | 166 M | ~2 GB |
| `medium`, `medium.en` | 769 M | ~5 GB |
| `distil-medium.en` | 394 M | ~3 GB |
| `large-v1`, `large-v2`, `large-v3` | 1550 M | <8 GB |
| `large-v3-turbo` | 809 M | ~6 GB |
| `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5` | 756 M | ~5 GB |

- **`large-v2`** ist der Standard, da `large-v3` häufiger halluziniert und Text wiederholt, besonders in manchen Sprachen wie Japanisch, und mehr Satzzeichen auslässt.
- **`large-v3-turbo`** ist eine verkleinerte Version von `large-v3`, viel schneller und fast genauso genau.
- Die Modelle mit der Endung **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) und die **destillierten** Modelle (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) transkribieren nur Englisch. Sie sind schneller als die mehrsprachigen Modelle gleicher Größe.

:::tip
Um Audiotext schnell auszuprobieren, wählen Sie `tiny` oder `small`. Für die beste Qualität verwenden Sie `large-v2` oder `large-v3-turbo` auf einer GPU.
:::

### Erweiterte Optionen

Sie finden sie unter **Einstellungen** → **WhisperX**. Ändern Sie sie nur bei Problemen oder wenn Sie wissen, was Sie tun: Eine GPU ohne freien Speicher kann Ihr System einfrieren.

- **Berechnungstyp**: die Genauigkeit der Zahlen des Modells. `float16` ist auf GPUs schneller (Standard mit CUDA). `int8` braucht weniger Speicher und ist der Standard auf der CPU, da viele CPUs `float16` nicht effizient unterstützen. `float32` ist am genauesten, für GPUs mit mehr als 8 GB VRAM.
- **Batchgröße**: wie viele Teile des Audios gleichzeitig verarbeitet werden (standardmäßig `8`). Sie ändert nicht die Qualität, nur die Geschwindigkeit. Verringern Sie sie, wenn der Speicher nicht reicht; empfohlen sind höchstens `16`.
- **CPU verwenden**: führt WhisperX auf der CPU aus. Immer aktiv, wenn keine CUDA-GPU gefunden wurde.

## Whisper-API

Verwendet die [Speech-to-Text-API von OpenAI](https://platform.openai.com/docs/guides/speech-to-text). Sie ist für Computer gedacht, auf denen WhisperX nicht flüssig läuft, und erfordert einen OpenAI-API-Schlüssel (siehe [API-Schlüssel](/de/reference/preferences/#api-schlüssel)).

| Modell | Zeitstempel | Sprecher | Hinweise |
| --- | :---: | :---: | --- |
| `whisper-1` (Standard) | ✓ | ✗ | Lässt sich Segment für Segment abspielen und untertiteln. Übersetzt ins Englische. |
| `gpt-transcribe` | ✗ | ✗ | Genauer, aber ohne Zeitstempel. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Erkennt die Sprecher. Verwendet weder Schlüsselwörter noch Beschreibung. |

Übersetzungen ins Englische erstellt immer `whisper-1`, da es das einzige Modell ist, das übersetzt.

Lange Aufnahmen werden in Abschnitte von bis zu 10 Minuten geteilt, jeweils an einer Stille, damit kein Wort zerschnitten wird, da die API Dateien über 25 MB ablehnt. Bei `whisper-1` wird das Ende jedes Abschnitts dem nächsten als Kontext mitgegeben; bei `gpt-4o-transcribe-diarize` wird mit den folgenden Abschnitten eine Stimmprobe jedes Sprechers gesendet, damit die Bezeichnungen erhalten bleiben.

### Optionen

- **Antwortformat** (Karte Ausgabe, für Ordner): `text` (Standard), `json`, `verbose_json`, `srt` oder `vtt`. Untertitel und `verbose_json` erfordern ein Modell mit Zeitstempeln.
- **Temperatur** (Einstellungen → Whisper API): zwischen 0 und 1. Hohe Werte wie 0,8 machen das Ergebnis zufälliger, niedrige wie 0,2 fokussierter. Bei 0 (Standard) erhöht das Modell sie bei Bedarf automatisch.
- **Zeitstempel der Wörter** (Einstellungen → Whisper API): ob `whisper-1` auch die Zeitstempel jedes Wortes liefert, um es beim Abspielen hervorzuheben. Dauert länger. Standardmäßig aktiv.

## Google-API

Verwendet die [Google Speech-to-Text-API](https://cloud.google.com/speech-to-text). Sie setzt keine Satzzeichen (die fügt Audiotext hinzu), und ihre Qualität ist geringer als die von Whisper, daher müssen die Transkriptionen oft korrigiert werden. Sie kann die Sprache weder erkennen noch übersetzen und liefert Nur-Text ohne Zeitstempel.

Ohne API-Schlüssel wird das kostenlose Kontingent genutzt, begrenzt auf 60 Minuten pro Monat. Um es zu erweitern, legen Sie einen Google-API-Schlüssel fest. Google berechnet die Nutzung; Audiotext übernimmt dafür keine Verantwortung.
