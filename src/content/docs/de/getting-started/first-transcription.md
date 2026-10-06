---
title: Ihre erste Transkription
description: Ein Rundgang durch das Fenster von Audiotext und die Schritte, um eine Audio- oder Videodatei zu transkribieren.
sidebar:
  order: 2
---

## Das Fenster

Das Fenster von Audiotext besteht aus drei Teilen:

- **Die obere Leiste**: die Schaltflächen, um eine **Neue Transkription** aus einer **Datei**, einer **URL**, dem **Mikrofon** oder einem **Ordner** zu starten, der Status der App und das Zahnrad, das die [Einstellungen](/de/reference/preferences/) öffnet. Die Schaltfläche links blendet den Verlauf ein oder aus.
- **Der Verlauf** links: alle Ihre Transkriptionen, die Sie durchsuchen, anheften, gruppieren und umbenennen können. Siehe [Verlauf](/de/guides/history/).
- **Der Hauptbereich**: die Quelle, die Sie gerade einrichten, der Fortschritt einer Transkription oder die im Verlauf ausgewählte Transkription.

![Die Bereiche des Audiotext-Fensters: die obere Leiste, der Verlauf und der Hauptbereich](/screenshots/window.png)

Beim Öffnen der App fragt der Hauptbereich **Was möchten Sie transkribieren?** und zeigt eine Karte für jede Art von Quelle.

:::tip
Ziehen Sie eine Datei oder einen Ordner an eine beliebige Stelle des Fensters, um ihn zu transkribieren.
:::

## Eine Datei transkribieren

1. Klicken Sie in der oberen Leiste auf **Datei** (oder drücken Sie `Strg+O`, `⌘O` unter macOS) und wählen Sie eine Audio- oder Videodatei, oder ziehen Sie sie ins Fenster. Klicken Sie dann auf **Weiter**.
2. Prüfen Sie die Einstellungen. Die Standardwerte passen für die meisten Aufnahmen:
   - **Engine**: WhisperX, das auf Ihrem Computer läuft. Wählen Sie ein kleineres **Modell** (z. B. `small`), wenn Ihr Computer langsam ist.
   - **Sprache**: Die **Sprache des Audios** wird automatisch erkannt. Wählen Sie sie aus, wenn Sie sie kennen, um Fehler zu vermeiden. Zum Übersetzen wählen Sie eine andere **Sprache der Transkription**.
   - **Kontext** und **Optionen**: optionale Hinweise und Funktionen, etwa das Erkennen der Sprecher.

   Alle Einstellungen finden Sie unter [Transkriptionseinstellungen](/de/guides/transcription-settings/).
3. Klicken Sie auf **Transkription starten** (oder drücken Sie `Strg+Eingabe`, `⌘↩` unter macOS).

Während der Arbeit wird der Fortschritt jedes Schritts angezeigt (Modell laden, transkribieren, Wörter ausrichten …). Sie können Audiotext währenddessen weiter nutzen: Das Ergebnis wird im Verlauf gespeichert und geöffnet, sobald es fertig ist. Zum Abbrechen klicken Sie auf **Abbrechen** oder drücken `Esc`.

Läuft bereits eine andere Transkription, wird die Schaltfläche zu **Zur Warteschlange hinzufügen**, und die neue startet, sobald die aktuelle fertig ist.

## Das Ergebnis lesen und nutzen

Wenn sie fertig ist, öffnet sich die Transkription:

- Klicken Sie auf ein Segment, um das Audio ab dort abzuspielen.
- Wechseln Sie zwischen **Transkript**, **Nur-Text** und **Zusammenfassung**.
- Mit **Übersetzen**, **Kopieren** und **Exportieren** übersetzen, kopieren oder speichern Sie sie als Datei.

Unter [Das Transkript](/de/guides/transcript/) erfahren Sie alles, was Sie damit tun können.

## Tastenkürzel

| Tastenkürzel | Aktion |
| --- | --- |
| `Strg+Eingabe` / `⌘↩` | Transkription starten, oder Aufnahme starten und beenden |
| `Strg+O` / `⌘O` | Datei auswählen (oder einen Ordner, bei der Ordnerquelle) |
| `Strg+S` / `⌘S` | Angezeigte Transkription exportieren |
| `Strg+F` / `⌘F` | Transkription durchsuchen |
| `Esc` | Laufende Transkription abbrechen |
| `Leertaste` | Audio abspielen oder pausieren |
| `←` / `→` | 5 Sekunden zurück oder vor |
