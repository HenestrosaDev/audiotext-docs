---
title: Contributing
description: Run Audiotext from the source code, run the tests, translate the interface and improve this documentation.
sidebar:
  order: 2
---

Contributions are welcome! Read the [contributing guide](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) before opening a pull request. You can also propose ideas in the [discussions](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) or check the [project backlog](https://github.com/users/HenestrosaDev/projects/1).

## Set up the project

**Python 3.10 to 3.13** is required.

1. Install [FFmpeg](https://ffmpeg.org) and, on Linux, [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu or Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Clone the repository:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   # macOS and Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. Install the dependencies:

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt` installs PyTorch with CUDA support, which is a large download on Linux and Windows. Without an NVIDIA GPU, install the CPU build first:

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   With [uv](https://docs.astral.sh/uv/), run `uv pip install --index-strategy unsafe-best-match -r requirements.txt`.

5. Run the app:

   ```bash
   python src/app.py
   ```

## Development tools

```bash
pip install -r requirements-dev.txt
pre-commit install   # lints and formats the code before each commit
pytest               # runs the tests
```

## Translate the interface

The interface is translated with [gettext](https://www.gnu.org/software/gettext/). The texts are in `res/locales/audiotext.pot`, and the translations of each language in `res/locales/<language>/LC_MESSAGES/audiotext.po`.

After the texts of the code change, or after editing a `.po` file (e.g. with [Poedit](https://poedit.net/)), run this script. It extracts the texts, updates the catalogs, compiles them and lists the texts that are still to translate or review (marked as `fuzzy`), which the app shows in English until then. The tests fail while a catalog is out of date.

```bash
python .github/scripts/update_translations.py
```

To add a language, create its catalog, translate it, compile it and add it to `UI_LANGUAGES` in `src/utils/i18n.py`:

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <code>
python .github/scripts/update_translations.py
```

## Improve this documentation

This website is built with [Starlight](https://starlight.astro.build) and lives in the `web` folder of the repository. Each language has its own folder in `web/src/content/docs` (English is in `en`).

```bash
cd web
npm install
npm run dev     # serves the site at http://localhost:4321
npm run build   # builds the site into web/dist
```

Every page has an **Edit page** link at the bottom that opens it on GitHub.
