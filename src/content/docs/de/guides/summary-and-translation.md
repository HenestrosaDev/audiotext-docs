---
title: Zusammenfassung und Übersetzung
description: Fassen Sie Transkriptionen mit OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL oder Google Translate zusammen und übersetzen Sie sie.
sidebar:
  order: 4
---

Sobald eine Transkription fertig ist, kann Audiotext sie mit einem Sprachmodell oder einem Übersetzungsdienst zusammenfassen und übersetzen. Beides wird im Verlauf gespeichert und daher nur einmal erstellt.

## Zusammenfassung

Öffnen Sie den Modus **Zusammenfassung** einer Transkription und klicken Sie auf **Zusammenfassung erstellen**. Das Sprachmodell schreibt:

- Eine **Zusammenfassung** der Transkription.
- Ihre **Kernpunkte**.
- Ihre **Kapitel**, sofern sie Zeitstempel hat. Klicken Sie auf ein Kapitel, um das Audio ab seinem Beginn abzuspielen.

**Neu erstellen** schreibt sie erneut (z. B. nachdem Sie ein anderes Modell gewählt haben). **Kopieren** kopiert sie, und die [Exporte](/de/guides/transcript/#kopieren-und-exportieren) als Markdown und Word enthalten sie.

Ist der API-Schlüssel des Anbieters nicht festgelegt, bietet der Modus **Zusammenfassung** an, ihn festzulegen. Sehr lange Transkriptionen (etwa drei Stunden Sprache oder mehr) werden nur ab ihrem Anfang zusammengefasst.

![Die Zusammenfassung einer Transkription mit ihren Kernpunkten und Kapiteln](/screenshots/summary.png)

## Übersetzung

Klicken Sie auf **Übersetzen**, wählen Sie unter **Übersetzen in** die Sprache und den **Anbieter** und bestätigen Sie. Die Übersetzung erscheint in einem Bereich rechts neben dem Originaltext.

- Hat die Transkription Zeitstempel, wird jeder Satz einzeln übersetzt, sodass die Übersetzung sie behält: Sie hebt den abgespielten Satz hervor, und ein Klick auf einen Satz spielt ihn ab.
- Haben Sie den Nur-Text bearbeitet, wird stattdessen der bearbeitete Text übersetzt, ohne Zeitstempel.
- Ziehen Sie den Griff zwischen beiden Texten, um ihre Größe zu ändern, oder doppelklicken Sie darauf, um sie zurückzusetzen.
- Über die Schaltfläche **Übersetzen** können Sie auch die **Übersetzung ausblenden**, **In eine andere Sprache übersetzen…** oder die **Übersetzung löschen**.

:::tip
Um die Transkription ohne Anbieter direkt in einer anderen Sprache zu erhalten, können Sie auch beim Transkribieren übersetzen. Siehe [Sprache](/de/guides/transcription-settings/#sprache).
:::

## Anbieter

Die Anbieter wählen Sie unter **Einstellungen** → **KI**, getrennt für Zusammenfassungen und Übersetzungen.

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

[Ollama](https://ollama.com) führt die Modelle auf Ihrem Computer aus, ohne API-Schlüssel und ohne den Text irgendwohin zu senden. Installieren Sie es, laden Sie ein Modell herunter (z. B. `ollama pull llama3.2`) und wählen Sie **Ollama** als Anbieter. Läuft es nicht unter der Standardadresse, ändern Sie die **Server-URL** unter **Einstellungen** → **KI** (standardmäßig `http://localhost:11434`).

:::note
Jeder Anbieter berechnet die Nutzung seiner API; Audiotext übernimmt dafür keine Verantwortung. Die API-Schlüssel werden im Anmeldedatenspeicher Ihres Systems aufbewahrt. Siehe [Dateien und Daten](/de/reference/files-and-data/).
:::
