---
title: Contribuire
description: Esegui Audiotext dal codice sorgente, avvia i test, traduci l'interfaccia e migliora questa documentazione.
sidebar:
  order: 2
---

I contributi sono benvenuti! Leggi la [guida per contribuire](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) prima di aprire una pull request. Puoi anche proporre idee nelle [discussioni](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) o consultare il [backlog del progetto](https://github.com/users/HenestrosaDev/projects/1).

## Prepara il progetto

È richiesto **Python da 3.10 a 3.13**.

1. Installa [FFmpeg](https://ffmpeg.org) e, su Linux, [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu o Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Clona il repository:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Crea e attiva un ambiente virtuale:

   ```bash
   python -m venv venv
   # macOS e Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. Installa le dipendenze:

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt` installa PyTorch con supporto CUDA, un download pesante su Linux e Windows. Senza una GPU NVIDIA, installa prima la versione per CPU:

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   Con [uv](https://docs.astral.sh/uv/), esegui `uv pip install --index-strategy unsafe-best-match -r requirements.txt`.

5. Avvia l'app:

   ```bash
   python src/app.py
   ```

## Strumenti di sviluppo

```bash
pip install -r requirements-dev.txt
pre-commit install   # controlla e formatta il codice prima di ogni commit
pytest               # esegue i test
```

## Traduci l'interfaccia

L'interfaccia è tradotta con [gettext](https://www.gnu.org/software/gettext/). I testi si trovano in `res/locales/audiotext.pot`, e le traduzioni di ogni lingua in `res/locales/<lingua>/LC_MESSAGES/audiotext.po`.

Quando cambiano i testi del codice, o dopo aver modificato un file `.po` (es. con [Poedit](https://poedit.net/)), esegui questo script. Estrae i testi, aggiorna i cataloghi, li compila ed elenca i testi ancora da tradurre o da rivedere (contrassegnati come `fuzzy`), che l'app mostra in inglese fino ad allora. I test falliscono finché un catalogo non è aggiornato.

```bash
python .github/scripts/update_translations.py
```

Per aggiungere una lingua, crea il suo catalogo, traducilo, compilalo e aggiungila a `UI_LANGUAGES` in `src/utils/i18n.py`:

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <codice>
python .github/scripts/update_translations.py
```

## Migliora questa documentazione

Questo sito è realizzato con [Starlight](https://starlight.astro.build) e si trova nella cartella `web` del repository. Ogni lingua ha la sua cartella in `web/src/content/docs` (l'inglese è in `en`).

```bash
cd web
npm install
npm run dev     # serve il sito su http://localhost:4321
npm run build   # genera il sito in web/dist
```

Ogni pagina ha in fondo un link **Modifica pagina** che la apre su GitHub.
