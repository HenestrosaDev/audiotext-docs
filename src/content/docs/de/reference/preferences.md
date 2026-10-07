---
title: Einstellungen
description: Alle Einstellungen des Einstellungsfensters, Tab für Tab.
sidebar:
  order: 2
---

Die **Einstellungen** enthalten alles, was sich nicht mit jeder Transkription ändert. Öffnen Sie sie mit dem Zahnrad oben rechts im Fenster. Änderungen werden automatisch gespeichert.

## Allgemein

- **Erscheinungsbild**: **System** (folgt Ihrem System), **Hell** oder **Dunkel**.
- **Sprache der Oberfläche**: die Sprache von Audiotext oder **Systemsprache**. Siehe die [verfügbaren Sprachen](/de/reference/formats-and-languages/#sprachen-der-oberfläche).
- **Datumsformat**: wie die Daten der Transkriptionen angezeigt werden, in der Sprache der Oberfläche: kurz (`04.10.26`), mittel (`04.10.2026`, Standard), lang (`4. Oktober 2026`) oder ISO (`2026-10-04`). Das Menü zeigt jedes Format mit einem Beispiel.
- **Uhrzeitformat**: **Automatisch** (die Uhr der Sprache der Oberfläche), 12 Stunden (`1:30 PM`) oder 24 Stunden (`13:30`).
- **Benachrichtigungen**: zeigt eine Systembenachrichtigung an, wenn eine Transkription fertig ist (bei einem Ordner, wenn alle seine Dateien fertig sind, und bei einem überwachten Ordner jedes Mal, wenn eine neue Datei fertig ist). Standardmäßig aktiviert. Unter macOS kommen sie vom **Skripteditor** und unter Windows von **Windows PowerShell**, daher werden sie für diese Apps in den Systemeinstellungen erlaubt oder stummgeschaltet. Unter Linux benötigen sie `notify-send` (das Paket `libnotify-bin` oder `libnotify`).
- **Updates**: sucht beim Öffnen der App nach einer neuen Version und zeigt, falls es eine gibt, in der oberen Leiste die Schaltfläche **Version … ist verfügbar**, die ihre Download-Seite öffnet. Vorabversionen werden nicht angeboten. Standardmäßig aktiviert.

## KI

Die Anbieter der [Zusammenfassungen und Übersetzungen](/de/guides/summary-and-translation/):

- **Zusammenfassung** → **Anbieter** und **Modell**.
- **Übersetzung** → **Anbieter** und **Modell**. DeepL und Google Translate haben keine Modelle zur Auswahl.
- **Ollama** → **Server-URL**: die Adresse von Ollama, standardmäßig `http://localhost:11434`.

Lassen Sie das **Modell** leer, um das Standardmodell des Anbieters zu verwenden. Die Schaltfläche neben dem Anbieter legt dessen API-Schlüssel fest.

## API-Schlüssel

Die Schlüssel der einzelnen Dienste. Klicken Sie auf **Festlegen…**, um einen einzugeben, oder auf **Ändern…**, um ihn zu ersetzen (lassen Sie das Feld leer, um ihn zu entfernen). Sie werden im Anmeldedatenspeicher Ihres Systems aufbewahrt.

| Schlüssel | Verwendet für |
| --- | --- |
| OpenAI-API-Schlüssel | Die Whisper-API sowie Zusammenfassen und Übersetzen mit OpenAI |
| Anthropic-API-Schlüssel | Zusammenfassen und Übersetzen mit Claude |
| DeepSeek-API-Schlüssel | Zusammenfassen und Übersetzen mit DeepSeek |
| Gemini-API-Schlüssel | Zusammenfassen und Übersetzen mit Gemini (aus Google AI Studio) |
| Mistral-API-Schlüssel | Zusammenfassen und Übersetzen mit Mistral |
| xAI-API-Schlüssel | Zusammenfassen und Übersetzen mit Grok |
| DeepL-API-Schlüssel | Übersetzen mit DeepL (Schlüssel des kostenlosen Tarifs funktionieren auch) |
| Google-API-Schlüssel | Google Speech-to-Text über das kostenlose Kontingent hinaus sowie Google Translate (Cloud Translation API) |
| Hugging-Face-Token | Sprecher mit WhisperX erkennen |

:::caution
Jeder Anbieter berechnet die Nutzung seiner API; Audiotext übernimmt dafür keine Verantwortung. Wenn OpenAI mit einem neuen Schlüssel den Fehler `429` zurückgibt, siehe [Fehlerbehebung](/de/help/troubleshooting/#die-whisper-api-gibt-den-fehler-429-zurück).
:::

## WhisperX

**Berechnungstyp**, **Batchgröße** und **CPU verwenden**. Siehe [Erweiterte Optionen von WhisperX](/de/reference/engines/#erweiterte-optionen).

## Untertitel

Die Optionen der `.srt`- und `.vtt`-Dateien, die beim Transkribieren eines Ordners mit WhisperX gespeichert werden:

- **Wörter hervorheben**: unterstreicht jedes Wort, während es gesprochen wird. Standardmäßig aus.
- **Max. Zeilenanzahl**: die maximale Anzahl Zeilen pro Untertitel. Standardmäßig `2`.
- **Max. Zeilenbreite**: die maximale Anzahl Zeichen einer Zeile vor dem Umbruch. Standardmäßig `42`.

## Whisper API

**Temperatur** und **Zeitstempel der Wörter**. Siehe [Optionen der Whisper-API](/de/reference/engines/#optionen).

## Über

Die Version von Audiotext sowie Links zu dieser Dokumentation, zum Quellcode auf GitHub und zur Spendenseite. **Nach Updates suchen** sucht sofort nach einer neuen Version: Gibt es eine, wird die Schaltfläche zu **Herunterladen** und öffnet ihre Seite.
