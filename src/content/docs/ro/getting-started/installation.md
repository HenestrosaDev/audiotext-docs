---
title: Instalare
description: Descărcați Audiotext pentru Windows, macOS sau Linux și deschideți-l pentru prima dată.
sidebar:
  order: 1
---

Audiotext este o aplicație desktop pentru **Windows**, **macOS** și **Linux**. Transcrie în text sunetul din fișiere, videoclipuri YouTube și înregistrări de la microfon și îl poate traduce, rezuma și transforma în subtitrări.

## Descărcați aplicația

Descărcați fișierul pentru sistemul dumneavoastră din [cea mai recentă versiune](https://github.com/HenestrosaDev/audiotext/releases/latest) de pe GitHub:

| Sistem | Fișier |
| --- | --- |
| Windows (64 de biți) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 sau mai nou (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

Aplicația include tot ce îi trebuie, inclusiv FFmpeg.

### Windows

Rulați programul de instalare și urmați pașii. Nu necesită drepturi de administrator. Dacă aveți o placă video NVIDIA, bifați opțiunea de a folosi placa NVIDIA (CUDA): programul de instalare descarcă atunci suplimentul GPU, care face WhisperX mult mai rapid. Programul de instalare nu este semnat, așa că Windows SmartScreen poate afișa un avertisment: deschideți informațiile suplimentare și alegeți să îl rulați oricum.

### macOS

Deschideți fișierul `.dmg` și trageți **Audiotext** în dosarul **Aplicații**. Aplicația nu este notarizată de Apple, așa că macOS o blochează la prima deschidere: accesați **Configurări sistem** → **Confidențialitate și securitate** și faceți clic pe **Deschide oricum** lângă mesajul despre Audiotext. Pe macOS, WhisperX rulează pe procesor, deoarece CUDA nu este disponibil. Mac-urile cu Intel nu sunt acceptate, deoarece PyTorch nu le mai acceptă.

### Linux

Extrageți arhiva și rulați programul de instalare dintr-un terminal:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Instalează Audiotext pentru utilizatorul dumneavoastră și îl adaugă în meniul de aplicații (poate fi deschis și cu comanda `audiotext`). Dacă detectează o placă NVIDIA, oferă să descarce suplimentul GPU. Rulați `./install.sh --gpu` sau `./install.sh --cpu` pentru a alege fără întrebări, și `./install.sh --uninstall` pentru a-l dezinstala (setările se păstrează).

:::tip
Suplimentul GPU are aproximativ 2 GB pe Windows și 4 GB pe Linux, așa că merită doar cu o placă NVIDIA. Fără el, WhisperX rulează pe procesor, iar API-ul Whisper și API-ul Google funcționează la fel. Pentru a trece mai târziu între versiunea pentru procesor și cea pentru GPU, reinstalează aplicația și alege cealaltă opțiune.
:::

:::note
Prima dată când transcrieți cu **WhisperX** (motorul implicit), modelul acestuia este descărcat. Are între ~75 MB pentru `tiny` și ~3 GB pentru `large-v2`, așa că poate dura puțin. Transcrierile următoare încep imediat.
:::

## Cerințe

- **WhisperX** rulează pe computerul dumneavoastră. Funcționează pe orice procesor, dar este mult mai rapid pe o placă video NVIDIA cu CUDA. Consultați [Motoare](/ro/reference/engines/) pentru a alege un model potrivit hardware-ului.
- **API-ul Whisper** și **API-ul Google** rulează pe servere la distanță, deci au nevoie de conexiune la internet, dar nu de hardware puternic.
- Pentru a transcrie de la microfon, sistemul trebuie să detecteze un dispozitiv de intrare.
- Pe Linux, înregistrarea și redarea necesită [PortAudio](https://www.portaudio.com/) (`sudo apt install libportaudio2` pe Ubuntu sau Debian).

## Schimbați limba interfeței

Audiotext folosește limba sistemului, dacă este disponibilă. Pentru a o schimba, deschideți **Preferințe** (rotița din dreapta sus) și alegeți o limbă în **General** → **Limba interfeței**. Poate fi schimbată când nu este nicio transcriere în curs.

## Rulați din codul sursă

Dacă doriți să rulați cel mai recent cod sau să contribuiți, consultați [Contribuiți](/ro/help/contributing/) pentru a pregăti proiectul cu Python.

## Pașii următori

- [Prima dumneavoastră transcriere](/ro/getting-started/first-transcription/) explică fereastra și pașii pentru a transcrie.
