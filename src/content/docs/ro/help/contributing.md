---
title: Contribuiți
description: Rulați Audiotext din codul sursă, rulați testele, traduceți interfața și îmbunătățiți această documentație.
sidebar:
  order: 2
---

Contribuțiile sunt binevenite! Citiți [ghidul de contribuție](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) înainte de a deschide un pull request. Puteți propune idei și în [discuții](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) sau puteți consulta [backlogul proiectului](https://github.com/users/HenestrosaDev/projects/1).

## Pregătiți proiectul

Este necesar **Python 3.10 până la 3.13**.

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

3. Creați și activați un mediu virtual:

   ```bash
   python -m venv venv
   # macOS și Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. Instalați dependențele:

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt` instalează PyTorch cu suport CUDA, o descărcare mare pe Linux și Windows. Fără placă NVIDIA, instalați mai întâi versiunea pentru procesor:

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   Cu [uv](https://docs.astral.sh/uv/), rulați `uv pip install --index-strategy unsafe-best-match -r requirements.txt`.

5. Porniți aplicația:

   ```bash
   python src/app.py
   ```

## Instrumente de dezvoltare

```bash
pip install -r requirements-dev.txt
pre-commit install   # verifică și formatează codul înainte de fiecare commit
pytest               # rulează testele
```

## Traduceți interfața

Interfața este tradusă cu [gettext](https://www.gnu.org/software/gettext/). Textele se află în `res/locales/audiotext.pot`, iar traducerile fiecărei limbi în `res/locales/<limbă>/LC_MESSAGES/audiotext.po`.

Când textele din cod se schimbă sau după ce editați un fișier `.po` (de ex. cu [Poedit](https://poedit.net/)), rulați acest script. Extrage textele, actualizează cataloagele, le compilează și listează textele care mai trebuie traduse sau revizuite (marcate ca `fuzzy`), pe care aplicația le afișează în engleză până atunci. Testele eșuează cât timp un catalog nu este actualizat.

```bash
python .github/scripts/update_translations.py
```

Pentru a adăuga o limbă, creați-i catalogul, traduceți-l, compilați-l și adăugați limba în `UI_LANGUAGES` din `src/utils/i18n.py`:

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <cod>
python .github/scripts/update_translations.py
```

## Îmbunătățiți această documentație

Acest site este construit cu [Starlight](https://starlight.astro.build) și se află în dosarul `web` al depozitului. Fiecare limbă are propriul dosar în `web/src/content/docs` (engleza este în `en`).

```bash
cd web
npm install
npm run dev     # servește site-ul la http://localhost:4321
npm run build   # construiește site-ul în web/dist
```

Fiecare pagină are în partea de jos un link **Editează pagina** care o deschide pe GitHub.
