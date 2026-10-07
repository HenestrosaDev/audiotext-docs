---
title: Installation
description: Laden Sie Audiotext für Windows, macOS oder Linux herunter und öffnen Sie es zum ersten Mal.
sidebar:
  order: 1
---

Audiotext ist eine Desktop-App für **Windows**, **macOS** und **Linux**. Sie transkribiert das Audio von Dateien, YouTube-Videos und Mikrofonaufnahmen in Text und kann ihn übersetzen, zusammenfassen und untertiteln.

## App herunterladen

Laden Sie die Datei für Ihr System aus der [neuesten Version](https://github.com/HenestrosaDev/audiotext/releases/latest) auf GitHub herunter:

| System | Datei |
| --- | --- |
| Windows (64 Bit) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 oder neuer (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

Die App enthält alles, was sie braucht, einschließlich FFmpeg.

### Windows

Führen Sie das Installationsprogramm aus und folgen Sie den Schritten. Es braucht keine Administratorrechte. Wenn Sie eine NVIDIA-GPU haben, aktivieren Sie die Option, die NVIDIA-GPU (CUDA) zu verwenden: Das Installationsprogramm lädt dann die GPU-Erweiterung herunter, die WhisperX viel schneller macht. Das Installationsprogramm ist nicht signiert, daher kann Windows SmartScreen davor warnen: Blenden Sie die weiteren Informationen ein und wählen Sie, es trotzdem auszuführen.

### macOS

Öffnen Sie die `.dmg`-Datei und ziehen Sie **Audiotext** in den Ordner **Programme**. Die App ist nicht von Apple notarisiert, daher blockiert macOS sie beim ersten Öffnen: Öffnen Sie **Systemeinstellungen** → **Datenschutz & Sicherheit** und klicken Sie neben der Meldung zu Audiotext auf **Trotzdem öffnen**. Unter macOS läuft WhisperX auf der CPU, da CUDA dort nicht verfügbar ist. Intel-Macs werden nicht unterstützt, da PyTorch sie nicht mehr unterstützt.

### Linux

Entpacken Sie das Archiv und führen Sie das Installationsprogramm in einem Terminal aus:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Es installiert Audiotext für Ihren Benutzer und fügt es dem Anwendungsmenü hinzu (es lässt sich auch mit dem Befehl `audiotext` öffnen). Erkennt es eine NVIDIA-GPU, bietet es an, die GPU-Erweiterung herunterzuladen. Mit `./install.sh --gpu` oder `./install.sh --cpu` wählen Sie ohne Rückfrage, mit `./install.sh --uninstall` deinstallieren Sie es (Ihre Einstellungen bleiben erhalten).

:::tip
Die GPU-Erweiterung ist ein Download von etwa 2 GB unter Windows und 4 GB unter Linux und lohnt sich daher nur mit einer NVIDIA-GPU. Ohne sie läuft WhisperX auf der CPU, und die Whisper-API und die Google-API funktionieren genauso. Um später zwischen der CPU- und der GPU-Version zu wechseln, installiere die App erneut und wähle die andere Option.
:::

:::note
Wenn Sie zum ersten Mal mit **WhisperX** (der Standard-Engine) transkribieren, wird dessen Modell heruntergeladen. Es ist zwischen ~75 MB (`tiny`) und ~3 GB (`large-v2`) groß, das kann also etwas dauern. Die nächsten Transkriptionen starten sofort.
:::

## Voraussetzungen

- **WhisperX** läuft auf Ihrem Computer. Es funktioniert auf jeder CPU, ist aber auf einer NVIDIA-GPU mit CUDA viel schneller. Unter [Engines](/de/reference/engines/) finden Sie ein Modell, das zu Ihrer Hardware passt.
- Die **Whisper-API** und die **Google-API** laufen auf entfernten Servern. Sie brauchen also eine Internetverbindung, aber keine leistungsstarke Hardware.
- Um vom Mikrofon zu transkribieren, muss Ihr System ein Eingabegerät erkennen.
- Unter Linux brauchen Aufnahme und Wiedergabe [PortAudio](https://www.portaudio.com/) (`sudo apt install libportaudio2` unter Ubuntu oder Debian).

## Die App aktualisieren

Wenn eine neue Version erscheint, zeigt Audiotext in der oberen Leiste die Schaltfläche **Version … ist verfügbar**. Klicken Sie darauf, um die Seite der Version zu öffnen, laden Sie die Datei für Ihr System herunter und installieren Sie sie wie beim ersten Mal: Führen Sie unter Windows das neue Installationsprogramm aus, ziehen Sie unter macOS die neue App in den Ordner **Programme** oder führen Sie unter Linux das `install.sh` des neuen Archivs aus. Die vorherige Version wird ersetzt, und Ihre Einstellungen und Ihr Verlauf bleiben erhalten, da sie in Ihrem [Benutzerkonfigurationsordner](/de/reference/files-and-data/#benutzerkonfigurationsordner) gespeichert sind. Wenn Sie das GPU-Add-on verwenden, wählen Sie es bei der Installation erneut aus.

Um selbst nach einer neuen Version zu suchen, öffnen Sie **Einstellungen** → **Über** → **Nach Updates suchen**. Damit beim Öffnen der App nicht mehr gesucht wird, deaktivieren Sie **Allgemein** → **Updates**.

## Die App deinstallieren

- **Windows**: Deinstallieren Sie sie wie jede andere App unter **Einstellungen** → **Apps**.
- **macOS**: Ziehen Sie **Audiotext** aus dem Ordner **Programme** in den Papierkorb.
- **Linux**: Führen Sie `./install.sh --uninstall` im Ordner des Archivs aus. Wenn Sie ihn nicht mehr haben, löschen Sie `~/.local/share/audiotext`, `~/.local/bin/audiotext` und `~/.local/share/applications/audiotext.desktop`.

Ihre Einstellungen, Ihr Verlauf und Ihre Aufnahmen bleiben erhalten, sodass sie bei einer erneuten Installation wieder da sind. Um alles zu entfernen:

1. Entfernen Sie vor der Deinstallation Ihre API-Schlüssel unter **Einstellungen** → **API-Schlüssel** (klicken Sie auf **Ändern…** und lassen Sie das Feld leer), da sie im Anmeldeinformationsspeicher Ihres Systems liegen.
2. Löschen Sie Ihren [Benutzerkonfigurationsordner](/de/reference/files-and-data/#benutzerkonfigurationsordner).
3. Löschen Sie die heruntergeladenen [Modelle](/de/reference/files-and-data/#modelle).

## Sprache der Oberfläche ändern

Audiotext verwendet die Sprache Ihres Systems, sofern sie verfügbar ist. Um sie zu ändern, öffnen Sie die **Einstellungen** (das Zahnrad oben rechts) und wählen Sie unter **Allgemein** → **Sprache der Oberfläche** eine Sprache.

## Aus dem Quellcode ausführen

Wenn Sie den neuesten Code ausführen oder mitwirken möchten, lesen Sie [Mitwirken](/de/help/contributing/), um das Projekt mit Python einzurichten.

## Nächste Schritte

- [Ihre erste Transkription](/de/getting-started/first-transcription/) erklärt das Fenster und die Schritte zum Transkribieren.
