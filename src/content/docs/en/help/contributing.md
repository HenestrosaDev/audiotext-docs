---
title: Contributing
description: Run Audiotext from the source code, run the tests, translate the interface and improve this documentation.
sidebar:
  order: 2
---

Contributions are welcome! Read the [contributing guide](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) before opening a pull request. You can also propose ideas in the [discussions](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) or check the [project backlog](https://github.com/users/HenestrosaDev/projects/1).

## Set up the project

**Python 3.10 to 3.13** is required. uv downloads it if it's missing.

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

3. Install [uv](https://docs.astral.sh/uv/getting-started/installation/), which manages the dependencies and the virtual environment.

4. Install the dependencies:

   ```bash
   uv sync
   ```

   `uv sync` installs PyTorch with CUDA support, which is a large download on Linux and Windows. Without an NVIDIA GPU, install the CPU build instead:

   ```bash
   uv sync --no-group cuda --group cpu
   ```

5. Run the app:

   ```bash
   uv run src/app.py
   ```

## Development tools

```bash
uv run pre-commit install   # lints and formats the code before each commit
uv run pytest               # runs the tests
```

## Translate the interface

The interface is translated with [gettext](https://www.gnu.org/software/gettext/). The texts are in `res/locales/audiotext.pot`, and the translations of each language in `res/locales/<language>/LC_MESSAGES/audiotext.po`.

After the texts of the code change, or after editing a `.po` file (e.g. with [Poedit](https://poedit.net/)), run this script. It extracts the texts, updates the catalogs, compiles them and lists the texts that are still to translate or review (marked as `fuzzy`), which the app shows in English until then. The tests fail while a catalog is out of date.

```bash
uv run .github/scripts/update_translations.py
```

To add a language, create its catalog, translate it, compile it and add it to `UI_LANGUAGES` in `src/utils/i18n.py`:

```bash
uv run pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <code>
uv run .github/scripts/update_translations.py
```

## Improve this documentation

This website is built with [Starlight](https://starlight.astro.build) and lives in the [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs) repository. Each language has its own folder in `src/content/docs` (English is in `en`).

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # serves the site at http://localhost:4321
npm run build   # builds the site into dist
```

Every page has an **Edit page** link at the bottom that opens it on GitHub.
