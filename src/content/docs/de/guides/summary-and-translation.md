---
title: Zusammenfassung, Fragen und Übersetzung
description: Fassen Sie Transkriptionen mit OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL oder Google Translate zusammen, stellen Sie Fragen dazu und übersetzen Sie sie.
sidebar:
  order: 4
---

Sobald eine Transkription fertig ist, kann Audiotext sie mit einem Sprachmodell oder einem Übersetzungsdienst zusammenfassen, Fragen dazu beantworten und sie übersetzen. Alles wird im Verlauf gespeichert und daher nur einmal erstellt.

## Zusammenfassung

Öffnen Sie den Modus **Zusammenfassung** einer Transkription und klicken Sie auf **Zusammenfassung erstellen**. Das Sprachmodell schreibt:

- Eine **Zusammenfassung** der Transkription.
- Ihre **Kernpunkte**.
- Ihre **Kapitel**, sofern sie Zeitstempel hat. Klicken Sie auf ein Kapitel, um das Audio ab seinem Beginn abzuspielen.

Unter ihrem Titel zeigt der Bereich, welches Modell sie wann erstellt hat. Die Schaltflächen ihrer Kopfzeile:

- **Suchen** (`Strg+F`, `⌘F` unter macOS): sucht einen Text in der Zusammenfassung.
- **Kopieren**: kopiert sie.
- **Exportieren**: speichert sie für sich als Nur-Text, Markdown oder Word-Dokument, mit einem Namen wie `video.summary.md`, damit sie die Transkription nicht ersetzt. Auch die [Exporte](/de/guides/transcript/#kopieren-und-exportieren) der Transkription als Markdown und Word enthalten sie.
- **Zusammenfassung neu erstellen**: schreibt sie erneut (z. B. nachdem Sie ein anderes Modell gewählt haben), nach einer Rückfrage, da die aktuelle ersetzt wird.

Ist der API-Schlüssel des Anbieters nicht festgelegt, bietet der Modus **Zusammenfassung** an, ihn festzulegen. Sehr lange Transkriptionen (etwa drei Stunden Sprache oder mehr) werden nur ab ihrem Anfang zusammengefasst.

![Die Zusammenfassung einer Transkription mit ihren Kernpunkten und Kapiteln](/screenshots/summary.png)

## Fragen zur Transkription stellen

Öffnen Sie den Modus **Fragen**, geben Sie unter **Stellen Sie eine Frage zur Transkription…** eine Frage ein (z. B. was entschieden wurde oder wer etwas gesagt hat) und drücken Sie `Eingabe` oder klicken Sie auf **Fragen**.

- Das Sprachmodell antwortet anhand der Transkription und der vorherigen Fragen und Antworten, sodass sich eine Frage auf sie beziehen kann (z. B. „Warum?“).
- Hat die Transkription Zeitstempel, verweist jede Antwort auf die Stellen der Transkription, an denen es gesagt wird. Klicken Sie auf eine, um das Audio ab dort abzuspielen.
- Die Fragen und Antworten werden mit der Transkription im Verlauf gespeichert. Der Papierkorb in der Kopfzeile löscht die Unterhaltung nach einer Rückfrage.

Die Fragen beantwortet der dafür unter **Einstellungen** → **Anbieter** → **Fragen** gewählte Anbieter, bis zu einer Änderung derjenige der Zusammenfassungen. Wie bei den Zusammenfassungen wird bei sehr langen Transkriptionen nur der Anfang gelesen.

## Übersetzung

Klicken Sie auf **Übersetzen**, wählen Sie unter **Übersetzen in:** die Sprache und unter **Übersetzen mit:** den Anbieter und bestätigen Sie. Der Dialog erklärt, was der gewählte Anbieter tut, und bietet an, seinen API-Schlüssel festzulegen, falls er fehlt. Die Übersetzung erscheint in einem Bereich rechts neben dem Originaltext.

- Hat die Transkription Zeitstempel, wird sie Satz für Satz übersetzt, mit dem Text davor und danach als Kontext, sodass die Übersetzung mit den Zeitstempeln jedes Satzes beginnt: Sie hebt den abgespielten Satz hervor, und ein Klick auf einen Satz spielt ihn ab.
- Hat die Transkription keine Zeitstempel, wird ihr ganzer Text auf einmal übersetzt.
- Beide Texte scrollen gemeinsam und zeigen so dieselbe Stelle des Audios. Die runde Schaltfläche am Griff zwischen ihnen schaltet das ein und aus. Ziehen Sie den Griff, um ihre Größe zu ändern, oder doppelklicken Sie darauf, um sie zurückzusetzen.

Mit den Schaltflächen in der Kopfzeile der Übersetzung suchen und ersetzen Sie darin, kopieren und exportieren sie, **Erneut übersetzen** (mit demselben Anbieter und Modell) und **Übersetzung ausblenden**. Über die Schaltfläche **Übersetzen** können Sie sie auch wieder einblenden, **In eine andere Sprache übersetzen…** oder **Übersetzung löschen**.

### Mehrere Sprachen

Eine Transkription lässt sich in mehrere Sprachen übersetzen, auch gleichzeitig, und jede Übersetzung bleibt erhalten. Der Titel des Bereichs wählt die angezeigte aus, zeigt, wie viel von jeder übersetzt ist, und endet mit der Option, in eine andere Sprache zu übersetzen. Eine Übersetzung in eine Sprache, die schon eine hat, ersetzt diese nach einer Rückfrage, da ihre Korrekturen verloren gehen. Das Menü des Titels zeigt, wie viele Untertitel jeder unfertigen Übersetzung übersetzt sind (z. B. `Englisch · 148/150`).

### Fortschritt der Übersetzung

Der Fortschritt wird in Untertiteln gezählt: Ein Untertitel ist übersetzt, wenn er einen Text hat. Über der Übersetzung zeigt eine Zeile, wie viele übersetzt sind (z. B. `Übersetzt: 148/150 · 98 %`). Der Prozentsatz wird abgerundet, daher erscheint `100 %` erst, wenn alle übersetzt sind.

Solange noch welche fehlen, springen die Pfeile daneben zum vorherigen und nächsten Untertitel **Noch nicht übersetzt**, heben jeden hervor und zeigen, bei welchem Sie sind (z. B. `1 von 2`). Fahren Sie mit der Maus über einen, um rechts davon die Schaltfläche **Text übersetzen…** anzuzeigen, die den Dialog zum Übersetzen öffnet.

### Die Übersetzung korrigieren und neu timen

Eine Übersetzung braucht oft ein anderes Timing als das Original, z. B. Untertitel, deren Lesen länger dauert. Klicken Sie mit der rechten Maustaste auf ein Segment der Übersetzung, um:

- **Text bearbeiten…**: seinen Text zu ändern.
- **Zeiten bearbeiten…**: millisekundengenau zu ändern, wann es beginnt und endet. Geben Sie die Zeiten als `00:01:05,900`, `01:05,9` oder `65.9` ein.
- **Segment danach hinzufügen…**: ein Segment hinzuzufügen, das standardmäßig die Lücke bis zum nächsten füllt.
- **Segment löschen**.

### Selbst übersetzen

Um die Übersetzung selbst zu schreiben, wählen Sie **Manuell** unter **Übersetzen mit:**. Dafür ist kein API-Schlüssel nötig. Die Übersetzung beginnt mit einem leeren Segment für jeden Untertitel der Transkription, angezeigt als **Noch nicht übersetzt**, und der Bereich zeigt, wie viele noch übrig sind. Klicken Sie mit der rechten Maustaste auf eines und wählen Sie **Text übersetzen…**: Der Dialog zeigt den Originaltext, der in dieser Zeit gesagt wird. Wenn Sie mit der Maus über eines fahren, erscheint rechts davon die Schaltfläche **Text übersetzen…**, die denselben Dialog öffnet.

### Untertitel und Export

- Aktivieren Sie bei Transkriptionen von Videos **Als Untertitel des Videos anzeigen** im Menü **Übersetzen**, um die Übersetzung als Untertitel zu zeigen. Auch das Menü des Videos schaltet sie um. Siehe [Videos mit Untertiteln ansehen](/de/guides/transcript/#videos-mit-untertiteln-ansehen).
- Um die Übersetzung als Datei zu speichern, klicken Sie auf die Export-Schaltfläche ihres Bereichs. Sie wird in denselben [Formaten](/de/guides/transcript/#kopieren-und-exportieren) wie die Transkription exportiert, mit ihrer Sprache im Dateinamen (z. B. `video.es.srt`), sodass Videoplayer sie zusammen mit dem Video laden. Noch nicht übersetzte Segmente werden in den Untertiteln ausgelassen. Dasselbe Menü erstellt eine [Kopie des Videos mit seinen Untertiteln](/de/guides/transcript/#das-video-mit-seinen-untertiteln-exportieren).

:::tip
Um die Transkription ohne Anbieter direkt in einer anderen Sprache zu erhalten, können Sie auch beim Transkribieren übersetzen. Siehe [Sprache](/de/guides/transcription-settings/#sprache).
:::

## Anbieter

Die Anbieter wählen Sie unter **Einstellungen** → **Anbieter**, getrennt für Zusammenfassungen, Fragen und Übersetzungen.

| Anbieter | Standardmodell | API-Schlüssel |
| --- | --- | --- |
| OpenAI (Standard) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (lokal) | `llama3.2` | Nicht nötig |

Lassen Sie das **Modell** leer, um das Standardmodell des Anbieters zu verwenden, oder geben Sie den Namen eines anderen Modells des Anbieters ein (z. B. `claude-sonnet-5-5` oder `deepseek-reasoner`).

Übersetzungen sind außerdem möglich mit:

- **DeepL**, das einen [DeepL-API-Schlüssel](https://www.deepl.com/your-account/keys) erfordert. Schlüssel des kostenlosen Tarifs funktionieren ebenfalls.
- **Google Translate**, das den Google-API-Schlüssel mit aktivierter Cloud Translation API verwendet.

### Ollama

[Ollama](https://ollama.com) führt die Modelle auf Ihrem Computer aus, ohne API-Schlüssel und ohne den Text irgendwohin zu senden. Installieren Sie es, laden Sie ein Modell herunter (z. B. `ollama pull llama3.2`) und wählen Sie **Ollama** als Anbieter. Läuft es nicht unter der Standardadresse, ändern Sie die **Server-URL** unter **Einstellungen** → **Anbieter** (standardmäßig `http://localhost:11434`).

:::note
Jeder Anbieter berechnet die Nutzung seiner API; Audiotext übernimmt dafür keine Verantwortung. Die API-Schlüssel werden im Anmeldedatenspeicher Ihres Systems aufbewahrt. Siehe [Dateien und Daten](/de/reference/files-and-data/).
:::
