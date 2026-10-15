---
title: Bijdragen
description: Voer Audiotext uit vanuit de broncode, draai de tests, vertaal de interface en verbeter deze documentatie.
sidebar:
  order: 2
---

Bijdragen zijn welkom! Lees de [bijdragegids](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) voordat je een pull request opent. Je kunt ook ideeën voorstellen in de [discussies](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) of de [projectbacklog](https://github.com/users/HenestrosaDev/projects/1) bekijken.

## Het project opzetten

**Python 3.10 tot en met 3.13** is vereist. Als het ontbreekt, downloadt uv het.

1. Installeer [FFmpeg](https://ffmpeg.org) en, op Linux, [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu of Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Kloon de repository:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Installeer [uv](https://docs.astral.sh/uv/getting-started/installation/), dat de afhankelijkheden en de virtuele omgeving beheert.

4. Installeer de afhankelijkheden:

   ```bash
   uv sync
   ```

   `uv sync` installeert PyTorch met CUDA-ondersteuning, een grote download op Linux en Windows. Installeer zonder NVIDIA-GPU in plaats daarvan de CPU-versie:

   ```bash
   uv sync --no-group cuda --group cpu
   ```

5. Start de app:

   ```bash
   uv run src/app.py
   ```

## Ontwikkeltools

```bash
uv run pre-commit install   # controleert en formatteert de code voor elke commit
uv run pytest               # voert de tests uit
```

## De interface vertalen

De interface wordt vertaald met [gettext](https://www.gnu.org/software/gettext/). De teksten staan in `res/locales/audiotext.pot`, en de vertalingen van elke taal in `res/locales/<taal>/LC_MESSAGES/audiotext.po`.

Als de teksten in de code veranderen, of nadat je een `.po`-bestand hebt bewerkt (bijv. met [Poedit](https://poedit.net/)), voer je dit script uit. Het extraheert de teksten, werkt de catalogi bij, compileert ze en toont de teksten die nog vertaald of nagekeken moeten worden (gemarkeerd als `fuzzy`), die de app tot die tijd in het Engels toont. De tests mislukken zolang een catalogus niet bijgewerkt is.

```bash
uv run .github/scripts/update_translations.py
```

Om een taal toe te voegen, maak je de catalogus aan, vertaal en compileer je die, en voeg je de taal toe aan `UI_LANGUAGES` in `src/utils/i18n.py`:

```bash
uv run pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <code>
uv run .github/scripts/update_translations.py
```

## Deze documentatie verbeteren

Deze website is gebouwd met [Starlight](https://starlight.astro.build) en staat in de repository [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs). Elke taal heeft een eigen map in `src/content/docs` (Engels staat in `en`).

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # serveert de website op http://localhost:4321
npm run build   # bouwt de website in dist
```

Elke pagina heeft onderaan een link **Pagina bewerken** die hem op GitHub opent.
