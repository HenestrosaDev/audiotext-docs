---
title: Installatie
description: Download Audiotext voor Windows, macOS of Linux en open het voor de eerste keer.
sidebar:
  order: 1
---

Audiotext is een desktopapp voor **Windows**, **macOS** en **Linux**. Het zet de audio van bestanden, YouTube-video's en microfoonopnamen om in tekst, en kan die vertalen, samenvatten en ondertitelen.

## De app downloaden

Download het bestand voor je systeem van de [nieuwste versie](https://github.com/HenestrosaDev/audiotext/releases/latest) op GitHub:

| Systeem | Bestand |
| --- | --- |
| Windows (64-bit) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 of nieuwer (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

De app bevat alles wat hij nodig heeft, inclusief FFmpeg.

### Windows

Voer het installatieprogramma uit en volg de stappen. Er zijn geen beheerdersrechten nodig. Heb je een NVIDIA-GPU, vink dan de optie aan om de NVIDIA-GPU (CUDA) te gebruiken: het installatieprogramma downloadt dan de GPU-uitbreiding, die WhisperX veel sneller maakt. Het installatieprogramma is niet ondertekend, dus Windows SmartScreen kan een waarschuwing tonen: open de extra informatie en kies om het toch uit te voeren.

### macOS

Open het `.dmg`-bestand en sleep **Audiotext** naar de map **Apps**. De app is niet door Apple genotariseerd, dus macOS blokkeert hem de eerste keer dat je hem opent: ga naar **Systeeminstellingen** → **Privacy en beveiliging** en klik op **Toch openen** naast de melding over Audiotext. Op macOS draait WhisperX op de CPU, omdat CUDA daar niet beschikbaar is. Intel-Macs worden niet ondersteund, omdat PyTorch ze niet meer ondersteunt.

### Linux

Pak het archief uit en voer het installatieprogramma uit in een terminal:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Het installeert Audiotext voor je gebruiker en voegt het toe aan het applicatiemenu (je kunt het ook openen met de opdracht `audiotext`). Als het een NVIDIA-GPU detecteert, biedt het aan de GPU-uitbreiding te downloaden. Gebruik `./install.sh --gpu` of `./install.sh --cpu` om te kiezen zonder vraag, en `./install.sh --uninstall` om het te verwijderen (je instellingen blijven bewaard).

:::tip
De GPU-uitbreiding is een download van ongeveer 2 GB op Windows en 4 GB op Linux, dus die is alleen de moeite waard met een NVIDIA-GPU. Zonder draait WhisperX op de CPU, en werken de Whisper-API en de Google-API hetzelfde. Om later te wisselen tussen de CPU- en de GPU-versie, installeer je de app opnieuw en kies je de andere optie.
:::

:::note
De eerste keer dat je transcribeert met **WhisperX** (de standaard-engine), wordt het model gedownload. Dat is ~75 MB voor `tiny` tot ~3 GB voor `large-v2`, dus het kan even duren. De volgende transcripties starten meteen.
:::

## Vereisten

- **WhisperX** draait op je computer. Het werkt op elke CPU, maar is veel sneller op een NVIDIA-GPU met CUDA. Zie [Engines](/nl/reference/engines/) om een model te kiezen dat bij je hardware past.
- De **Whisper-API** en de **Google-API** draaien op externe servers, dus ze hebben een internetverbinding nodig, maar geen krachtige hardware.
- Om vanaf de microfoon te transcriberen, moet je systeem een invoerapparaat herkennen.
- Op Linux is voor opnemen en afspelen [PortAudio](https://www.portaudio.com/) nodig (`sudo apt install libportaudio2` op Ubuntu of Debian).

## De app bijwerken

Als er een nieuwe versie uitkomt, toont Audiotext een knop **Versie … is beschikbaar** in de bovenste balk. Klik erop om de pagina van de release te openen, download het bestand voor je systeem en installeer het zoals de eerste keer: voer op Windows het nieuwe installatieprogramma uit, sleep op macOS de nieuwe app naar de map **Apps**, of voer op Linux de `install.sh` van het nieuwe archief uit. De vorige versie wordt vervangen, en je instellingen en geschiedenis blijven behouden, omdat ze in je [configuratiemap van de gebruiker](/nl/reference/files-and-data/#configuratiemap-van-de-gebruiker) staan. Als je de GPU-add-on gebruikt, kies die dan opnieuw bij het installeren.

Om zelf te controleren of er een nieuwe versie is, open je **Voorkeuren** → **Over** → **Controleren op updates**. Om niet meer te controleren bij het openen van de app, zet je **Algemeen** → **Updates** uit.

## De taal van de interface wijzigen

Audiotext gebruikt de taal van je systeem als die beschikbaar is. Open om die te wijzigen de **Voorkeuren** (het tandwiel rechtsboven) en kies een taal bij **Algemeen** → **Taal van de interface**.

## Uitvoeren vanuit de broncode

Wil je de nieuwste code uitvoeren of bijdragen, zie dan [Bijdragen](/nl/help/contributing/) om het project met Python op te zetten.

## Volgende stappen

- [Je eerste transcriptie](/nl/getting-started/first-transcription/) legt het venster en de stappen om te transcriberen uit.
