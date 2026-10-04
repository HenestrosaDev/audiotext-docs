---
title: Audioquellen
description: Transkribieren Sie Dateien, YouTube-Videos und Links, Mikrofonaufnahmen, Ordner und überwachte Ordner.
sidebar:
  order: 1
---

Audiotext transkribiert aus vier Arten von Quellen, die Sie in der oberen Leiste unter **Neue Transkription** wählen.

## Datei

Transkribiert eine Audio- oder Videodatei. Klicken Sie auf **Datei auswählen…** oder ziehen Sie die Datei ins Fenster. Der Dateidialog zeigt standardmäßig **Alle unterstützten Dateien**; Sie können auch nur **Audiodateien** oder **Videodateien** anzeigen. Die unterstützten Formate finden Sie unter [Formate und Sprachen](/de/reference/formats-and-languages/).

Es kann jeweils nur eine Datei hinzugefügt werden. Um mehrere Dateien zu transkribieren, verwenden Sie die Quelle [Ordner](#ordner).

## URL

Transkribiert ein **YouTube-Video** oder einen **direkten Link zu einer Audio- oder Videodatei** (z. B. die Folge eines Podcasts). Fügen Sie die URL ein (mit **Einfügen** oder `Strg+V`) und klicken Sie auf **Weiter**. Die URL muss mit `http://` oder `https://` beginnen.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

Das Audio wird zuerst heruntergeladen, dafür ist eine Internetverbindung nötig.

## Mikrofon

Nimmt Ihre Stimme oder ein Meeting auf und transkribiert es. Die Aufnahme bleibt im Verlauf erhalten, sodass Sie sie später abspielen können.

1. Wählen Sie das Mikrofon in der Liste (klicken Sie auf die Aktualisieren-Schaltfläche, wenn Sie es gerade angeschlossen haben).
2. Klicken Sie auf die Aufnahmeschaltfläche (oder drücken Sie `Strg+Eingabe`, `⌘↩` unter macOS), um die Aufnahme zu starten. Die Pegelanzeige sagt Ihnen, ob der Ton **Zu leise** ist, einen **Guten Pegel** hat oder **Zu laut** ist.
3. Klicken Sie erneut, um die Aufnahme zu beenden und zu transkribieren.

### Live-Text

Aktivieren Sie mit **WhisperX** auf der Karte **Live-Text** die Option **Text während der Aufnahme anzeigen**, um beim Sprechen einen Entwurf des Textes zu sehen. Den Entwurf schreibt ein schnelles **Live-Modell** (standardmäßig `small`). Wenn Sie aufhören, wird die ganze Aufnahme mit dem genaueren Modell der Engine erneut transkribiert und der Entwurf ersetzt.

![Der Live-Text während der Aufnahme mit dem Mikrofon](/screenshots/live-text.png)

:::caution
Ihr System muss ein Eingabegerät erkennen und der App erlauben, es zu verwenden. Andernfalls wird **Kein Mikrofon gefunden** angezeigt. Erlauben Sie Audiotext unter macOS den Zugriff in **Systemeinstellungen** → **Datenschutz & Sicherheit** → **Mikrofon**.
:::

## Ordner

Transkribiert alle Audio- und Videodateien eines Ordners **und seiner Unterordner**. Klicken Sie auf **Ordner auswählen…** oder ziehen Sie den Ordner ins Fenster. Audiotext zeigt an, wie viele Dateien es gefunden hat.

Die Transkription jeder Datei wird neben ihr gespeichert (oder in einem anderen Ordner, den Sie auf der Karte **Ausgabe** wählen), mit demselben Namen und der Endung jedes ausgewählten **Dateityps**. Zum Beispiel mit `.txt` und `.vtt`:

```text
files-to-transcribe
├── paranoid-android.mp3
├── paranoid-android.txt
├── paranoid-android.vtt
└── movies
    ├── mulholland-dr.avi
    ├── mulholland-dr.txt
    └── mulholland-dr.vtt
```

Dateien, die bereits eine Transkription haben, werden **übersprungen**, außer Sie aktivieren **Vorhandene Dateien überschreiben**. Wenn Sie dem Ordner also eine Datei hinzufügen und ihn erneut transkribieren, wird nur die neue Datei transkribiert.

Kann eine Datei nicht transkribiert werden, werden die übrigen trotzdem transkribiert, und die Ordneransicht zeigt, welche fehlgeschlagen sind und warum. **Erneut transkribieren** wiederholt den Ordner, und die Ordnerschaltfläche öffnet den Ordner mit den gespeicherten Dateien.

### Einen Ordner überwachen

Aktivieren Sie auf der Karte **Ordner** die Option **Ordner überwachen**, um die Dateien, die dem Ordner (oder seinen Unterordnern) hinzugefügt werden, laufend zu transkribieren, bis Sie auf **Überwachung beenden** klicken. Das ist praktisch für Aufnahmen eines Diktiergeräts oder eines Meeting-Tools, die in einen Ordner kopiert werden.

- Dateien, die der Ordner bereits enthält, werden übersprungen. Um sie zu transkribieren, transkribieren Sie den Ordner ohne Überwachung.
- Eine Datei wird transkribiert, sobald sie vollständig kopiert ist (wenn sich ihre Größe nicht mehr ändert), sodass große Dateien nicht halb transkribiert werden.
- Fehler beenden die Überwachung nicht.

## Die Warteschlange

Sie können eine neue Transkription einrichten, während eine andere läuft: Die Schaltfläche wird zu **Zur Warteschlange hinzufügen**, und sie startet, sobald die aktuelle fertig ist. Wartende und laufende Transkriptionen werden im Verlauf angezeigt.
