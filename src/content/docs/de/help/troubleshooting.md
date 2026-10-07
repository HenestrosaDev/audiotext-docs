---
title: Fehlerbehebung
description: Lösungen für die häufigsten Probleme mit Audiotext.
sidebar:
  order: 1
---

## Die erste Transkription mit WhisperX dauert lange

Bei der ersten Verwendung wird ein Modell heruntergeladen, was je nach Verbindung und Modellgröße (bis zu ~3 GB) einige Minuten dauern kann. Der Fortschritt zeigt an, wann es geladen wird. Das Modell bleibt im Speicher, solange sich seine Optionen nicht ändern, daher starten die nächsten Transkriptionen sofort.

## WhisperX bricht mit `CUDA out of memory` ab

Ihre GPU hat nicht genug Speicher für die Einstellungen. Versuchen Sie in dieser Reihenfolge:

1. Verringern Sie die **Batchgröße** (z. B. `4`) unter **Einstellungen** → **WhisperX**.
2. Verwenden Sie ein kleineres Modell (z. B. `small` oder `base`).
3. Verwenden Sie einen leichteren **Berechnungstyp** (z. B. `int8`).

Die letzten beiden können die Qualität verringern. Wie viel Speicher jedes Modell braucht, steht unter [Engines](/de/reference/engines/#modell).

## Das Transkribieren dauert zu lange

Die Geschwindigkeit von WhisperX hängt von Ihrer Hardware ab; auf schwachen CPUs sind keine sofortigen Ergebnisse zu erwarten. Versuchen Sie ein kleineres Modell wie `small`, `large-v3-turbo` auf einer GPU oder den Berechnungstyp `int8`. Alternativ können Sie die **Whisper-API** oder die **Google-API** verwenden, die auf entfernten Servern laufen.

## Die Whisper-API gibt den Fehler `429` zurück

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

Ihr OpenAI-Konto hat kein Guthaben mehr, oder Sie müssen vor der ersten Nutzung der API Guthaben aufladen (auch wenn Sie Gratisguthaben haben). Kaufen Sie Guthaben im Bereich [Billing](https://platform.openai.com/settings/organization/billing/overview) Ihres OpenAI-Kontos. Die Aktivierung Ihres Kontos kann bis zu 10 Minuten dauern.

Wenn Sie den API-Schlüssel vor der ersten Aufladung erstellt haben und der Fehler nach 10 Minuten weiterhin auftritt, erstellen Sie einen neuen Schlüssel und legen Sie ihn unter **Einstellungen** → **API-Schlüssel** fest.

## Die Sprecher werden nicht erkannt

Wenn die Transkription mit **Für die Sprechererkennung wird ein Hugging-Face-Token benötigt.** oder **Das Modell zur Sprechererkennung konnte nicht heruntergeladen werden.** fehlschlägt, fehlt das Token, ist ungültig oder hat keinen Zugriff auf das Modell.

Die Sprechererkennung erfordert ein Hugging-Face-Token und die Annahme der Bedingungen des Modells. Prüfen Sie, ob:

- Sie die Bedingungen von [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) mit demselben Konto akzeptiert haben.
- das Token die Rolle `Read` hat und unter **Einstellungen** → **API-Schlüssel** festgelegt ist.

Siehe [Sprecher erkennen](/de/guides/transcription-settings/#sprecher-erkennen).

## Kein Mikrofon gefunden oder nichts aufgenommen

- Prüfen Sie, ob das Mikrofon angeschlossen ist, und klicken Sie auf die Aktualisieren-Schaltfläche neben der Mikrofonliste.
- Erlauben Sie Audiotext unter macOS den Zugriff in **Systemeinstellungen** → **Datenschutz & Sicherheit** → **Mikrofon**, unter Windows in **Einstellungen** → **Datenschutz** → **Mikrofon**.
- Zeigt die Pegelanzeige **Kein Ton**, wählen Sie ein anderes Mikrofon in der Liste oder prüfen Sie, ob es stummgeschaltet ist.
- Wenn **Es wurde kein Audio aufgenommen.** angezeigt wird, endete die Aufnahme, bevor das Mikrofon einen Ton gesendet hat. Nehmen Sie erneut auf oder wählen Sie ein anderes Mikrofon.

## Der Live-Text wird nicht angezeigt

Wenn während der Aufnahme **Der Text kann während der Aufnahme nicht angezeigt werden.** angezeigt wird, konnte das **Live-Modell** nicht geladen werden: Es wird zum Beispiel bei der ersten Verwendung heruntergeladen, wofür eine Internetverbindung nötig ist, oder der Speicher reicht nicht aus. Die Aufnahme ist davon nicht betroffen und wird beim Beenden wie gewohnt transkribiert. Wählen Sie in der Karte **Live-Text** ein kleineres **Live-Modell** (z. B. `tiny` oder `base`).

## Das Audio einer Transkription lässt sich nicht abspielen

Die Quelldatei wurde verschoben oder gelöscht. Der Text bleibt erhalten, das Audio lässt sich aber nur aus der Originaldatei abspielen. Mikrofonaufnahmen und das Audio von URLs bewahrt Audiotext selbst auf.

## Ein YouTube-Video lässt sich nicht herunterladen

Prüfen Sie, ob die URL korrekt und das Video öffentlich ist. YouTube ändert sich häufig – schlägt es weiterhin fehl, prüfen Sie, ob es eine neuere Version von Audiotext gibt.

Wird stattdessen **Das YouTube-Video hat keine Tonspur.** angezeigt, hat das Video keinen Ton, der transkribiert werden kann.

## Ein Link lässt sich nicht transkribieren

- **Die URL verweist nicht auf eine Audio- oder Videodatei.**: Der Link öffnet eine Webseite, keine Datei. Es funktionieren nur Links zu YouTube-Videos und direkte Links zu Audio- oder Videodateien. Suchen Sie auf der Seite den Link, der die Datei herunterlädt (z. B. die Folge eines Podcasts), und verwenden Sie ihn, oder laden Sie die Datei herunter und transkribieren Sie sie mit der Quelle **Datei**.
- **Die Datei konnte nicht heruntergeladen werden: …**: Die Datei war nicht erreichbar. Prüfen Sie, ob sich der Link in Ihrem Browser öffnet und ob Sie mit dem Internet verbunden sind. Links, die eine Anmeldung erfordern, können nicht heruntergeladen werden: Laden Sie die Datei selbst herunter und verwenden Sie die Quelle **Datei**.

## Ein Ordner transkribiert keine Datei

Dateien, die bereits eine Transkription haben, werden übersprungen. Aktivieren Sie **Vorhandene Dateien überschreiben**, um sie erneut zu transkribieren. Der Ordner muss außerdem [unterstützte Dateien](/de/reference/formats-and-languages/) enthalten.

## Die Google-API verlangt die Sprache

Die Google-API kann die Sprache nicht erkennen. Wählen Sie in den Einstellungen die **Sprache des Audios**.

## Eine Zusammenfassung oder Übersetzung schlägt fehl

- **DeepL kann nicht nach … übersetzen.**: DeepL unterstützt diese Sprache nicht. Wählen Sie einen anderen Anbieter, etwa ein Sprachmodell.
- **Die Antwort des Modells war zu lang.**, **Das Modell hat keine gültige Zusammenfassung zurückgegeben.** oder **Das Modell hat keine gültige Übersetzung zurückgegeben.**: Das Modell hat die Zusammenfassung oder die Übersetzung nicht im erwarteten Format geschrieben. Versuchen Sie es erneut oder wählen Sie unter **Einstellungen** → **KI** ein größeres Modell. Die kleinen Modelle von Ollama scheitern häufiger.
- Prüfen Sie bei jedem anderen Fehler, ob der API-Schlüssel des Anbieters unter **Einstellungen** → **API-Schlüssel** gesetzt ist und Ihr Konto Guthaben hat.

## Updates können nicht gesucht werden

**Die Suche nach Updates ist fehlgeschlagen.** bedeutet, dass Audiotext GitHub nicht erreichen konnte. Prüfen Sie Ihre Internetverbindung oder ob eine Firewall oder ein Proxy die Verbindung blockiert. Die neueste Version können Sie jederzeit von der [Release-Seite](https://github.com/HenestrosaDev/audiotext/releases/latest) herunterladen.

## Etwas anderes

Durchsuchen Sie die [Issues](https://github.com/HenestrosaDev/audiotext/issues) oder fragen Sie in den [Discussions](https://github.com/HenestrosaDev/audiotext/discussions). Wenn Sie einen Fehler finden, [melden Sie ihn](https://github.com/HenestrosaDev/audiotext/issues/new/choose) mit Ihrem System, der Version von Audiotext und den Schritten, um ihn nachzustellen.
