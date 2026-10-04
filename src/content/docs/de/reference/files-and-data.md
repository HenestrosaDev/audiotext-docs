---
title: Dateien und Daten
description: Wo Audiotext Einstellungen, Verlauf, Aufnahmen und API-Schlüssel speichert und welche Umgebungsvariablen es liest.
sidebar:
  order: 5
---

Audiotext bewahrt Ihre Daten auf Ihrem Computer auf. Es wird nichts gesendet, außer Sie verwenden eine entfernte Engine (die Whisper-API oder die Google-API) oder einen anderen KI-Anbieter als Ollama.

## Benutzerkonfigurationsordner

Einstellungen, Verlauf und Aufnahmen werden in Ihrem Benutzerkonfigurationsordner gespeichert und bleiben daher bei Updates erhalten:

| System | Ordner |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (oder `$XDG_CONFIG_HOME/audiotext`) |

Er enthält:

- `config.ini`: Ihre Einstellungen. Löschen Sie die Datei, um die Standardwerte wiederherzustellen.
- `history.json`: Ihre Transkriptionen mit Zusammenfassungen, Übersetzungen und Korrekturen.
- `media/`: die Mikrofonaufnahmen und das von URLs heruntergeladene Audio, damit sie später abgespielt werden können. Sie werden entfernt, wenn die zugehörige Transkription aus dem Verlauf gelöscht wird.

Um einen anderen Ordner zu verwenden, z. B. für eine portable Installation, setzen Sie die Umgebungsvariable `AUDIOTEXT_CONFIG_DIR`.

:::note
Die Datei `config.ini` im App-Ordner enthält die Standardeinstellungen und wird nie verändert.
:::

## API-Schlüssel

Die API-Schlüssel und das Hugging-Face-Token werden im Anmeldedatenspeicher Ihres Systems aufbewahrt:

- **macOS**: der Schlüsselbund.
- **Windows**: die Anmeldeinformationsverwaltung.
- **Linux**: der Secret Service (z. B. GNOME Keyring oder KWallet).

Hat das System keinen (z. B. ein Server ohne Desktop), werden sie in einer `.env`-Datei im Konfigurationsordner gespeichert, die nur Ihr Benutzer lesen kann. Schlüssel, die frühere Versionen in dieser Datei gespeichert haben, werden beim ersten Öffnen der App in den Anmeldedatenspeicher verschoben.

Die Schlüssel werden **nur** für Anfragen an die API des jeweiligen Dienstes verwendet.

## Umgebungsvariablen

Umgebungsvariablen mit den Namen der Schlüssel haben Vorrang vor den in der App festgelegten:

| Variable | Dienst |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (Whisper-API, Zusammenfassungen, Übersetzungen) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text und Google Translate |
| `HF_TOKEN` | Hugging Face (Sprechererkennung) |
| `AUDIOTEXT_CONFIG_DIR` | Der Ordner der Einstellungen und des Verlaufs |

## Modelle

Die Modelle von WhisperX und der Sprechererkennung werden bei der ersten Verwendung heruntergeladen und von Hugging Face in `~/.cache/huggingface` (bzw. `%USERPROFILE%\.cache\huggingface` unter Windows) zwischengespeichert. Löschen Sie diesen Ordner, um den belegten Speicher freizugeben.
