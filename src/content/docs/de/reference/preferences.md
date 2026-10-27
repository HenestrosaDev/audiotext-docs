---
title: Einstellungen
description: Alle Einstellungen des Einstellungsfensters, Tab für Tab.
sidebar:
  order: 2
---

Die **Einstellungen** enthalten alles, was sich nicht mit jeder Transkription ändert. Öffnen Sie sie mit dem Zahnrad oben rechts im Fenster. Änderungen werden automatisch gespeichert.

## Allgemein

- **Erscheinungsbild**: **System** (folgt Ihrem System), **Hell** oder **Dunkel**.
- **Größe der Oberfläche**: die Größe der Texte und der Bedienelemente, von 80 % bis 200 %. Standardmäßig `100%`. Die Änderung wird sofort übernommen.
- **Sprache der Oberfläche**: die Sprache von Audiotext oder **Systemsprache**. Siehe die [verfügbaren Sprachen](/de/reference/formats-and-languages/#sprachen-der-oberfläche).
- **Datumsformat**: wie die Daten der Transkriptionen angezeigt werden, in der Sprache der Oberfläche: kurz (`04.10.26`), mittel (`04.10.2026`, Standard), lang (`4. Oktober 2026`) oder ISO (`2026-10-04`). Das Menü zeigt jedes Format mit einem Beispiel.
- **Uhrzeitformat**: **Automatisch** (die Uhr der Sprache der Oberfläche), 12 Stunden (`1:30 PM`) oder 24 Stunden (`13:30`).
- **Benachrichtigungen**: zeigt eine Systembenachrichtigung an, wenn eine Transkription fertig ist (bei einem Ordner, wenn alle seine Dateien fertig sind, und bei einem überwachten Ordner jedes Mal, wenn neue Dateien fertig sind, in einer einzigen Benachrichtigung). Standardmäßig aktiviert. Unter macOS kommen sie vom **Skripteditor** und unter Windows von **Windows PowerShell**, daher werden sie für diese Apps in den Systemeinstellungen erlaubt oder stummgeschaltet. Unter Linux benötigen sie `notify-send` (das Paket `libnotify-bin` oder `libnotify`).
- **Automatisch nach Updates suchen**: sucht beim Öffnen der App nach einer neuen Version und zeigt, falls es eine gibt, in der oberen Leiste die Schaltfläche **Version … ist verfügbar**, die ihre Download-Seite öffnet. Vorabversionen werden nicht angeboten. Standardmäßig aktiviert.

## Anbieter

Die Anbieter der [Zusammenfassungen, Fragen und Übersetzungen](/de/guides/summary-and-translation/):

- **Zusammenfassung** → **Anbieter** und **Modell**.
- **Fragen** → **Anbieter** und **Modell**: die, die Fragen zu den Transkriptionen beantworten. Bis Sie sie ändern, sind es die der Zusammenfassungen.
- **Übersetzung** → **Anbieter** und **Modell**. DeepL und Google Translate haben keine Modelle zur Auswahl.
- **Ollama** → **Server-URL**: die Adresse von Ollama, standardmäßig `http://localhost:11434`.

Lassen Sie das **Modell** leer, um das Standardmodell des Anbieters zu verwenden. Die Schaltfläche neben dem Anbieter legt dessen API-Schlüssel fest.

## API-Schlüssel

Die Schlüssel der einzelnen Dienste. Klicken Sie auf **API-Schlüssel festlegen…**, um einen einzugeben, oder auf **API-Schlüssel ändern…**, um ihn zu ersetzen (lassen Sie das Feld leer, um ihn zu entfernen). Sie werden im Anmeldedatenspeicher Ihres Systems aufbewahrt. Sie sind nach ihrem Zweck gruppiert, und festgelegte Schlüssel zeigen ein Häkchen.

| Gruppe | Schlüssel | Verwendet für |
| --- | --- | --- |
| **LLM-Anbieter** | OpenAI-API-Schlüssel | Die Whisper-API sowie Zusammenfassen, Fragen und Übersetzen mit OpenAI |
| | Anthropic-API-Schlüssel | Zusammenfassen, Fragen und Übersetzen mit Claude |
| | DeepSeek-API-Schlüssel | Zusammenfassen, Fragen und Übersetzen mit DeepSeek |
| | Gemini-API-Schlüssel | Zusammenfassen, Fragen und Übersetzen mit Gemini (aus Google AI Studio) |
| | Mistral-API-Schlüssel | Zusammenfassen, Fragen und Übersetzen mit Mistral |
| | xAI-API-Schlüssel | Zusammenfassen, Fragen und Übersetzen mit Grok |
| **Übersetzung** | DeepL-API-Schlüssel | Übersetzen mit DeepL (Schlüssel des kostenlosen Tarifs funktionieren auch) |
| | Google-API-Schlüssel | Google Speech-to-Text über das kostenlose Kontingent hinaus sowie Google Translate (Cloud Translation API) |
| **Transkription** | Hugging-Face-Token | Sprecher mit WhisperX erkennen |

:::caution
Jeder Anbieter berechnet die Nutzung seiner API; Audiotext übernimmt dafür keine Verantwortung. Wenn OpenAI mit einem neuen Schlüssel den Fehler `429` zurückgibt, siehe [Fehlerbehebung](/de/help/troubleshooting/#die-whisper-api-gibt-den-fehler-429-zurück).
:::

## Transkription

Die Optionen der Engines, in je einem Abschnitt.

### WhisperX

**Berechnungstyp**, **Batchgröße** und **CPU verwenden**. Siehe [Erweiterte Optionen von WhisperX](/de/reference/engines/#erweiterte-optionen). Auf einem Mac mit Apple Silicon transkribiert WhisperX auf dessen GPU, sofern **CPU verwenden** nicht aktiv ist. Siehe [Auf einem Mac](/de/reference/engines/#auf-einem-mac). Auf der GPU des Mac sagen die Hinweise von **Berechnungstyp** und **Batchgröße**, dass sie nicht gelten, und **CPU verwenden** verlinkt auf die **Unterstützte Modelle**.

### Whisper API

**Temperatur** und **Zeitstempel der Wörter**. Siehe [Optionen der Whisper-API](/de/reference/engines/#optionen).

## Untertitel

Wie die Untertitel aufgeteilt werden: die über dem Video und im Modus **Untertitel** angezeigten, die exportierten Untertiteldateien und die [Videos mit Untertiteln](/de/guides/transcript/#das-video-mit-seinen-untertiteln-exportieren). Jede Option hat einen Wert für Querformat-Videos und einen für Hochformat-Videos (höher als breit, z. B. für Smartphones), die schmaler sind:

| Option | Horizontal | Vertikal |
| --- | :---: | :---: |
| **Max. Zeilen pro Untertitel** | `2` | `2` |
| **Max. Zeichen pro Zeile** | `42` | `24` |
| **Chinesisch, Japanisch und Koreanisch**: die Zeichen pro Zeile in diesen Sprachen, deren Zeichen etwa doppelt so breit wie lateinische sind | `16` | `10` |

Die Zeilen eines Untertitels werden ausgeglichen, und Sprachen ohne Leerzeichen werden zwischen Zeichen umbrochen.

**Wörter hervorheben** unterstreicht in den `.srt`- und `.vtt`-Dateien jedes Wort, während es gesprochen wird. Standardmäßig aus.

## Über

Die Version von Audiotext sowie Links zu dieser Dokumentation, zum Quellcode auf GitHub und zur Spendenseite. **Nach Updates suchen** sucht sofort nach einer neuen Version: Gibt es eine, wird die Schaltfläche zu **Herunterladen** und öffnet ihre Seite.
