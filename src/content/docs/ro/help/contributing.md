---
title: Contribuiți
description: Rulați Audiotext din codul sursă, rulați testele, traduceți interfața și îmbunătățiți această documentație.
sidebar:
  order: 2
---

Contribuțiile sunt binevenite! Citiți [ghidul de contribuție](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) înainte de a deschide un pull request. Puteți propune idei și în [discuții](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) sau puteți consulta [backlogul proiectului](https://github.com/users/HenestrosaDev/projects/1).

## Pregătiți proiectul

Este necesar **Python 3.10 până la 3.13**. Dacă lipsește, uv îl descarcă.

1. Instalați [FFmpeg](https://ffmpeg.org) și, pe Linux, [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu sau Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Clonați depozitul:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Instalați [uv](https://docs.astral.sh/uv/getting-started/installation/), care gestionează dependențele și mediul virtual.

4. Instalați dependențele:

   ```bash
   uv sync
   ```

   `uv sync` instalează PyTorch cu suport CUDA, o descărcare mare pe Linux și Windows. Fără placă NVIDIA, instalați în schimb versiunea pentru procesor:

   ```bash
   uv sync --no-group cuda --group cpu
   ```

5. Porniți aplicația:

   ```bash
   uv run src/app.py
   ```

## Instrumente de dezvoltare

```bash
uv run pre-commit install   # verifică și formatează codul înainte de fiecare commit
uv run pytest               # rulează testele
```

## Traduceți interfața

Interfața este tradusă cu [gettext](https://www.gnu.org/software/gettext/). Textele se află în `res/locales/audiotext.pot`, iar traducerile fiecărei limbi în `res/locales/<limbă>/LC_MESSAGES/audiotext.po`.

Când textele din cod se schimbă sau după ce editați un fișier `.po` (de ex. cu [Poedit](https://poedit.net/)), rulați acest script. Extrage textele, actualizează cataloagele, le compilează și listează textele care mai trebuie traduse sau revizuite (marcate ca `fuzzy`), pe care aplicația le afișează în engleză până atunci. Testele eșuează cât timp un catalog nu este actualizat.

```bash
uv run .github/scripts/update_translations.py
```

Pentru a adăuga o limbă, creați-i catalogul, traduceți-l, compilați-l și adăugați limba în `UI_LANGUAGES` din `src/utils/i18n.py`:

```bash
uv run pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <cod>
uv run .github/scripts/update_translations.py
```

## Îmbunătățiți această documentație

Acest site este construit cu [Starlight](https://starlight.astro.build) și se află în depozitul [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs). Fiecare limbă are propriul dosar în `src/content/docs` (engleza este în `en`).

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # servește site-ul la http://localhost:4321
npm run build   # construiește site-ul în dist
```

Fiecare pagină are în partea de jos un link **Editează pagina** care o deschide pe GitHub.
