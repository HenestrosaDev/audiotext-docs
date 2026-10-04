---
title: Bijdragen
description: Voer Audiotext uit vanuit de broncode, draai de tests, vertaal de interface en verbeter deze documentatie.
sidebar:
  order: 2
---

Bijdragen zijn welkom! Lees de [bijdragegids](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) voordat je een pull request opent. Je kunt ook ideeën voorstellen in de [discussies](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) of de [projectbacklog](https://github.com/users/HenestrosaDev/projects/1) bekijken.

## Het project opzetten

**Python 3.10 tot en met 3.13** is vereist.

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

3. Maak een virtuele omgeving en activeer die:

   ```bash
   python -m venv venv
   # macOS en Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. Installeer de afhankelijkheden:

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt` installeert PyTorch met CUDA-ondersteuning, een grote download op Linux en Windows. Installeer zonder NVIDIA-GPU eerst de CPU-versie:

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   Voer met [uv](https://docs.astral.sh/uv/) `uv pip install --index-strategy unsafe-best-match -r requirements.txt` uit.

5. Start de app:

   ```bash
   python src/app.py
   ```

## Ontwikkeltools

```bash
pip install -r requirements-dev.txt
pre-commit install   # controleert en formatteert de code voor elke commit
pytest               # voert de tests uit
```

## De interface vertalen

De interface wordt vertaald met [gettext](https://www.gnu.org/software/gettext/). De teksten staan in `res/locales/audiotext.pot`, en de vertalingen van elke taal in `res/locales/<taal>/LC_MESSAGES/audiotext.po`.

Als de teksten in de code veranderen, of nadat je een `.po`-bestand hebt bewerkt (bijv. met [Poedit](https://poedit.net/)), voer je dit script uit. Het extraheert de teksten, werkt de catalogi bij, compileert ze en toont de teksten die nog vertaald of nagekeken moeten worden (gemarkeerd als `fuzzy`), die de app tot die tijd in het Engels toont. De tests mislukken zolang een catalogus niet bijgewerkt is.

```bash
python .github/scripts/update_translations.py
```

Om een taal toe te voegen, maak je de catalogus aan, vertaal en compileer je die, en voeg je de taal toe aan `UI_LANGUAGES` in `src/utils/i18n.py`:

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <code>
python .github/scripts/update_translations.py
```

## Deze documentatie verbeteren

Deze website is gebouwd met [Starlight](https://starlight.astro.build) en staat in de map `web` van de repository. Elke taal heeft een eigen map in `web/src/content/docs` (Engels staat in `en`).

```bash
cd web
npm install
npm run dev     # serveert de website op http://localhost:4321
npm run build   # bouwt de website in web/dist
```

Elke pagina heeft onderaan een link **Pagina bewerken** die hem op GitHub opent.
