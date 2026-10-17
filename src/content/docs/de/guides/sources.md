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

### Den Ton des Computers aufnehmen

Um zu transkribieren, was Ihr Computer abspielt (einen Videoanruf, ein Webinar, ein Video, das sich nicht herunterladen lässt), nehmen Sie es von einem Gerät auf, das den Ton der Lautsprecher an einen Eingang weiterleitet. Richten Sie es einmal ein, klicken Sie auf die Aktualisieren-Schaltfläche und wählen Sie es in der Liste der Mikrofone aus. Alles, was der Computer abspielt, wird aufgenommen, auch Benachrichtigungen, aber nicht Ihre Stimme.

- **Windows**: Führen Sie `mmsys.cpl` aus, klicken Sie auf der Registerkarte **Aufnahme** mit der rechten Maustaste in die Liste, um die deaktivierten Geräte anzuzeigen, und aktivieren Sie **Stereomix**. Wenn Ihre Soundkarte es nicht hat, installieren Sie [VB-CABLE](https://vb-audio.com/Cable/), legen Sie **CABLE Input** als Ausgabegerät fest und wählen Sie **CABLE Output** in Audiotext aus. Um den Ton weiterhin zu hören, aktivieren Sie in den Eigenschaften von **CABLE Output** die Option **Dieses Gerät als Wiedergabequelle verwenden**.
- **macOS**: Installieren Sie [BlackHole](https://existential.audio/blackhole/) (`brew install blackhole-2ch`) und wählen Sie **BlackHole 2ch** in Audiotext aus. Um den Ton weiterhin zu hören, erstellen Sie ein [Multi-Ausgabegerät](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) mit Ihren Lautsprechern und BlackHole und legen Sie es als Ausgabegerät fest.
- **Linux** (PulseAudio oder PipeWire): Wählen Sie **pulse** in Audiotext aus und starten Sie die Aufnahme. Ändern Sie dann auf der Registerkarte **Aufnahme** von `pavucontrol` die Quelle von Audiotext auf den Monitor Ihrer Lautsprecher.

## Ordner

Transkribiert alle Audio- und Videodateien eines Ordners und, wenn **Unterordner einbeziehen** in der Karte **Ordner** aktiviert ist, seiner Unterordner. Klicken Sie auf **Ordner auswählen…** oder ziehen Sie den Ordner ins Fenster. Audiotext zeigt an, wie viele Dateien es gefunden hat. Um Dateien auszulassen, geben Sie ihre Namen oder Pfade, durch Kommas getrennt, in **Dateien überspringen, die passen auf** ein (z. B. `*.wav, drafts/*`). Versteckte Dateien werden immer übersprungen.

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

Wenn zwei Dateien denselben Namen und eine andere Endung haben (z. B. `talk.mp3` und `talk.mp4`), behalten ihre Transkriptionen die Endung im Namen (`talk.mp3.txt` und `talk.mp4.txt`), damit sie sich nicht gegenseitig ersetzen.

Dateien, die bereits eine Transkription haben, werden **übersprungen**: Eine Datei wird nur übersprungen, wenn sie alle ausgewählten Dateitypen hat. Wenn Sie einen Dateityp hinzufügen, wird sie also erneut transkribiert. Wenn eine Datei nicht transkribiert werden kann, werden die übrigen trotzdem transkribiert.

### Die Dateien eines Ordners

Die Seite eines Ordners im Verlauf listet seine Dateien auf, jeweils mit Status, Dauer, Größe und einer Vorschau des Textes. Sie können sie durchsuchen, nach Status filtern (**Alle**, **Fertig**, **Fehlgeschlagen** oder **Ausstehend**) und nach Name, Status, Dauer oder Größe sortieren. Verschobene oder gelöschte Dateien werden als **Datei nicht gefunden** markiert.

- Klicken Sie auf eine Datei, um ihre Transkription zu öffnen, oder klicken Sie auf ihre Schaltfläche `⋯` (oder klicken Sie sie mit der rechten Maustaste an), um ihren Text zu kopieren, sie direkt im Export, in der Zusammenfassung oder in der Übersetzung zu öffnen, sie im Dateimanager anzuzeigen oder **Diese Datei erneut transkribieren** zu wählen.
- Wählen Sie mehrere Dateien mit `Strg`/`⌘` oder `Umschalt` aus, oder alle angezeigten Dateien mit `Strg+A` / `⌘A`, um sie mit **Erneut transkribieren** neu zu transkribieren, mit **Exportieren…** gemeinsam in eine einzige TXT-, Markdown- oder Word-Datei zu exportieren oder mit **Aus dem Verlauf entfernen…** zu entfernen. `Eingabe` öffnet die ausgewählte Datei, und `Esc` hebt die Auswahl auf.
- **Fehlgeschlagene wiederholen** transkribiert die fehlgeschlagenen Dateien erneut. **Ordner erneut durchsuchen** transkribiert nur die Dateien ohne Transkription, etwa die neuen, und zeigt, wie viele übersprungen wurden, weil sie bereits eine hatten.
- Im Menü `⋯` des Ordners können Sie mit **Alle erneut transkribieren…** alle Dateien neu transkribieren und ihre Transkriptionen ersetzen, sie mit **Alle exportieren…** in eine einzige Datei exportieren, fehlende Dateien aus der Liste entfernen und den Quellordner oder den Ordner der gespeicherten Dateien öffnen.
- Wenn Sie die Einstellungen des Ordners ändern, werden die Dateien angezeigt, die mit anderen Einstellungen (Engine, Modell, Sprache…) transkribiert wurden, mit einer Schaltfläche **Erneut transkribieren**.

Die Kopfzeile zeigt, wo die Dateien gespeichert werden, und verlinkt den Quellordner. **Einstellungen bearbeiten** ändert die Einstellungen des Ordners, und **Speichern und erneut durchsuchen** transkribiert damit die Dateien, denen eine Transkription fehlt.

### Einen Ordner überwachen

Aktivieren Sie auf der Karte **Ordner** die Option **Ordner überwachen**, um die Dateien, die dem Ordner (oder seinen Unterordnern) hinzugefügt werden, laufend zu transkribieren, bis Sie auf **Überwachung beenden** klicken. Das ist praktisch für Aufnahmen eines Diktiergeräts oder eines Meeting-Tools, die in einen Ordner kopiert werden.

- Die Dateien, die der Ordner bereits enthält, werden übersprungen, außer Sie aktivieren **Bereits im Ordner vorhandene Dateien transkribieren**: Dann werden zuerst die ohne Transkription transkribiert.
- Eine Datei wird transkribiert, sobald sie vollständig kopiert ist (wenn sich ihre Größe nicht mehr ändert), sodass große Dateien nicht halb transkribiert werden.
- Die Ordner, die beim Schließen von Audiotext überwacht wurden, werden beim Öffnen wieder überwacht, ab den Dateien, die sie schon gesehen hatten. Beendete Ordner können mit **Überwachung fortsetzen** wieder überwacht werden.
- Wenn der Ordner nicht verfügbar ist (z. B. auf einem nicht angeschlossenen Laufwerk), wartet Audiotext auf ihn, statt fehlzuschlagen.
- Um etwas anderes zu transkribieren oder aufzunehmen, wird der Ordner pausiert (die neue Transkription zeigt **Wird gestartet…**, bis es so weit ist) und danach wieder überwacht.
- Fehler beenden die Überwachung nicht, und gemeinsam transkribierte Dateien werden in einer einzigen Benachrichtigung gemeldet.

## Die Warteschlange

Sie können eine neue Transkription einrichten, während eine andere läuft: Die Schaltfläche wird zu **Zur Warteschlange hinzufügen**, und sie startet, sobald die aktuelle fertig ist. Wartende und laufende Transkriptionen werden im Verlauf angezeigt.
