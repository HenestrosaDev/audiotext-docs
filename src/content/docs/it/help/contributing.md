---
title: Contribuire
description: Esegui Audiotext dal codice sorgente, avvia i test, traduci l'interfaccia e migliora questa documentazione.
sidebar:
  order: 2
---

I contributi sono benvenuti! Leggi la [guida per contribuire](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) prima di aprire una pull request. Puoi anche proporre idee nelle [discussioni](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) o consultare il [backlog del progetto](https://github.com/users/HenestrosaDev/projects/1).

## Prepara il progetto

È richiesto **Python da 3.10 a 3.13**. Se manca, uv lo scarica.

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

3. Installa [uv](https://docs.astral.sh/uv/getting-started/installation/), che gestisce le dipendenze e l'ambiente virtuale.

4. Installa le dipendenze:

   ```bash
   uv sync
   ```

   `uv sync` installa PyTorch con supporto CUDA, un download pesante su Linux e Windows. Senza una GPU NVIDIA, installa invece la versione per CPU:

   ```bash
   uv sync --no-group cuda --group cpu
   ```

5. Avvia l'app:

   ```bash
   uv run src/app.py
   ```

## Strumenti di sviluppo

```bash
uv run pre-commit install   # controlla e formatta il codice prima di ogni commit
uv run pytest               # esegue i test
```

## Traduci l'interfaccia

L'interfaccia è tradotta con [gettext](https://www.gnu.org/software/gettext/). I testi si trovano in `res/locales/audiotext.pot`, e le traduzioni di ogni lingua in `res/locales/<lingua>/LC_MESSAGES/audiotext.po`.

Quando cambiano i testi del codice, o dopo aver modificato un file `.po` (es. con [Poedit](https://poedit.net/)), esegui questo script. Estrae i testi, aggiorna i cataloghi, li compila ed elenca i testi ancora da tradurre o da rivedere (contrassegnati come `fuzzy`), che l'app mostra in inglese fino ad allora. I test falliscono finché un catalogo non è aggiornato.

```bash
uv run .github/scripts/update_translations.py
```

Per aggiungere una lingua, crea il suo catalogo, traducilo, compilalo e aggiungila a `UI_LANGUAGES` in `src/utils/i18n.py`:

```bash
uv run pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <codice>
uv run .github/scripts/update_translations.py
```

## Migliora questa documentazione

Questo sito è realizzato con [Starlight](https://starlight.astro.build) e si trova nel repository [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs). Ogni lingua ha la sua cartella in `src/content/docs` (l'inglese è in `en`).

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # serve il sito su http://localhost:4321
npm run build   # genera il sito in dist
```

Ogni pagina ha in fondo un link **Modifica pagina** che la apre su GitHub.
