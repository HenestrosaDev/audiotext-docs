---
title: Bidra
description: Kör Audiotext från källkoden, kör testerna, översätt gränssnittet och förbättra denna dokumentation.
sidebar:
  order: 2
---

Bidrag är välkomna! Läs [riktlinjerna för bidrag](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) innan du öppnar en pull request. Du kan också föreslå idéer i [diskussionerna](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) eller se [projektets backlog](https://github.com/users/HenestrosaDev/projects/1).

## Konfigurera projektet

**Python 3.10 till 3.13** krävs.

1. Installera [FFmpeg](https://ffmpeg.org) och, på Linux, [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu eller Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Klona repositoryt:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Skapa och aktivera en virtuell miljö:

   ```bash
   python -m venv venv
   # macOS och Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. Installera beroendena:

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt` installerar PyTorch med CUDA-stöd, en stor nedladdning på Linux och Windows. Utan NVIDIA-grafikkort installerar du först CPU-versionen:

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   Med [uv](https://docs.astral.sh/uv/) kör du `uv pip install --index-strategy unsafe-best-match -r requirements.txt`.

5. Starta appen:

   ```bash
   python src/app.py
   ```

## Utvecklingsverktyg

```bash
pip install -r requirements-dev.txt
pre-commit install   # kontrollerar och formaterar koden före varje commit
pytest               # kör testerna
```

## Översätt gränssnittet

Gränssnittet översätts med [gettext](https://www.gnu.org/software/gettext/). Texterna finns i `res/locales/audiotext.pot`, och översättningarna för varje språk i `res/locales/<språk>/LC_MESSAGES/audiotext.po`.

När texterna i koden ändras, eller efter att du har redigerat en `.po`-fil (t.ex. med [Poedit](https://poedit.net/)), kör du det här skriptet. Det extraherar texterna, uppdaterar katalogerna, kompilerar dem och listar texterna som återstår att översätta eller granska (markerade som `fuzzy`), som appen visar på engelska tills dess. Testerna misslyckas så länge en katalog är inaktuell.

```bash
python .github/scripts/update_translations.py
```

För att lägga till ett språk skapar du dess katalog, översätter och kompilerar den och lägger till språket i `UI_LANGUAGES` i `src/utils/i18n.py`:

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <kod>
python .github/scripts/update_translations.py
```

## Förbättra denna dokumentation

Den här webbplatsen är byggd med [Starlight](https://starlight.astro.build) och finns i mappen `web` i repositoryt. Varje språk har en egen mapp i `web/src/content/docs` (engelska ligger i `en`).

```bash
cd web
npm install
npm run dev     # visar webbplatsen på http://localhost:4321
npm run build   # bygger webbplatsen i web/dist
```

Varje sida har en länk **Redigera sida** längst ner som öppnar den på GitHub.
