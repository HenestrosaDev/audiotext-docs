---
title: Contribueix
description: Executa Audiotext des del codi font, executa les proves, tradueix la interfície i millora aquesta documentació.
sidebar:
  order: 2
---

Les contribucions són benvingudes! Llegeix la [guia de contribució](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) abans d'obrir una pull request. També pots proposar idees a les [discussions](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) o consultar el [backlog del projecte](https://github.com/users/HenestrosaDev/projects/1).

## Prepara el projecte

Cal **Python 3.10 a 3.13**. uv el descarrega si no el tens.

1. Instal·la [FFmpeg](https://ffmpeg.org) i, a Linux, [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu o Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Clona el repositori:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Instal·la [uv](https://docs.astral.sh/uv/getting-started/installation/), que gestiona les dependències i l'entorn virtual.

4. Instal·la les dependències:

   ```bash
   uv sync
   ```

   `uv sync` instal·la PyTorch amb suport per a CUDA, que és una descàrrega gran a Linux i Windows. Sense una GPU NVIDIA, instal·la en lloc seu la versió per a CPU:

   ```bash
   uv sync --no-group cuda --group cpu
   ```

5. Executa l'aplicació:

   ```bash
   uv run src/app.py
   ```

## Eines de desenvolupament

```bash
uv run pre-commit install   # revisa i formata el codi abans de cada commit
uv run pytest               # executa les proves
```

## Tradueix la interfície

La interfície es tradueix amb [gettext](https://www.gnu.org/software/gettext/). Els textos són a `res/locales/audiotext.pot`, i les traduccions de cada idioma a `res/locales/<idioma>/LC_MESSAGES/audiotext.po`.

Quan canviïn els textos del codi, o després d'editar un fitxer `.po` (p. ex. amb [Poedit](https://poedit.net/)), executa aquest script. Extreu els textos, actualitza els catàlegs, els compila i llista els textos que falten per traduir o revisar (marcats com a `fuzzy`), que l'aplicació mostra en anglès fins aleshores. Les proves fallen mentre hi hagi un catàleg desactualitzat.

```bash
uv run .github/scripts/update_translations.py
```

Per afegir un idioma, crea'n el catàleg, tradueix-lo, compila'l i afegeix-lo a `UI_LANGUAGES` a `src/utils/i18n.py`:

```bash
uv run pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <codi>
uv run .github/scripts/update_translations.py
```

## Millora aquesta documentació

Aquest web està fet amb [Starlight](https://starlight.astro.build) i és al repositori [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs). Cada idioma té la seva pròpia carpeta a `src/content/docs` (l'anglès és a `en`).

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # serveix el web a http://localhost:4321
npm run build   # genera el web a dist
```

Cada pàgina té un enllaç **Edita la pàgina** al final que l'obre a GitHub.
