---
title: Mitwirken
description: Führen Sie Audiotext aus dem Quellcode aus, starten Sie die Tests, übersetzen Sie die Oberfläche und verbessern Sie diese Dokumentation.
sidebar:
  order: 2
---

Beiträge sind willkommen! Lesen Sie den [Leitfaden für Beiträge](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md), bevor Sie einen Pull Request öffnen. Sie können auch Ideen in den [Discussions](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) vorschlagen oder das [Projekt-Backlog](https://github.com/users/HenestrosaDev/projects/1) ansehen.

## Projekt einrichten

Erforderlich ist **Python 3.10 bis 3.13**.

1. Installieren Sie [FFmpeg](https://ffmpeg.org) und unter Linux [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu oder Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Klonen Sie das Repository:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Erstellen und aktivieren Sie eine virtuelle Umgebung:

   ```bash
   python -m venv venv
   # macOS und Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. Installieren Sie die Abhängigkeiten:

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt` installiert PyTorch mit CUDA-Unterstützung, ein großer Download unter Linux und Windows. Ohne NVIDIA-GPU installieren Sie zuerst die CPU-Version:

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   Mit [uv](https://docs.astral.sh/uv/) führen Sie `uv pip install --index-strategy unsafe-best-match -r requirements.txt` aus.

5. Starten Sie die App:

   ```bash
   python src/app.py
   ```

## Entwicklungswerkzeuge

```bash
pip install -r requirements-dev.txt
pre-commit install   # prüft und formatiert den Code vor jedem Commit
pytest               # führt die Tests aus
```

## Oberfläche übersetzen

Die Oberfläche wird mit [gettext](https://www.gnu.org/software/gettext/) übersetzt. Die Texte stehen in `res/locales/audiotext.pot`, die Übersetzungen jeder Sprache in `res/locales/<Sprache>/LC_MESSAGES/audiotext.po`.

Wenn sich die Texte im Code ändern oder nachdem Sie eine `.po`-Datei bearbeitet haben (z. B. mit [Poedit](https://poedit.net/)), führen Sie dieses Skript aus. Es extrahiert die Texte, aktualisiert die Kataloge, kompiliert sie und listet die Texte auf, die noch übersetzt oder geprüft werden müssen (als `fuzzy` markiert) – die App zeigt sie bis dahin auf Englisch. Die Tests schlagen fehl, solange ein Katalog nicht aktuell ist.

```bash
python .github/scripts/update_translations.py
```

Um eine Sprache hinzuzufügen, erstellen Sie ihren Katalog, übersetzen und kompilieren Sie ihn und fügen Sie die Sprache zu `UI_LANGUAGES` in `src/utils/i18n.py` hinzu:

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <Code>
python .github/scripts/update_translations.py
```

## Diese Dokumentation verbessern

Diese Website ist mit [Starlight](https://starlight.astro.build) gebaut und liegt im Repository [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs). Jede Sprache hat ihren eigenen Ordner in `src/content/docs` (Englisch liegt in `en`).

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # stellt die Website unter http://localhost:4321 bereit
npm run build   # erstellt die Website in dist
```

Jede Seite hat unten einen Link **Seite bearbeiten**, der sie auf GitHub öffnet.
