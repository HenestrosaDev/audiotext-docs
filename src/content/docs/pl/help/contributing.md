---
title: Współtworzenie
description: Uruchom Audiotext z kodu źródłowego, uruchom testy, przetłumacz interfejs i ulepsz tę dokumentację.
sidebar:
  order: 2
---

Wkład jest mile widziany! Przeczytaj [przewodnik dla współtwórców](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) przed otwarciem pull requesta. Możesz też proponować pomysły w [dyskusjach](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) lub przejrzeć [backlog projektu](https://github.com/users/HenestrosaDev/projects/1).

## Przygotuj projekt

Wymagany jest **Python od 3.10 do 3.13**. Jeśli go brakuje, uv go pobierze.

1. Zainstaluj [FFmpeg](https://ffmpeg.org), a na Linuksie także [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu lub Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Zainstaluj [uv](https://docs.astral.sh/uv/getting-started/installation/), które zarządza zależnościami i środowiskiem wirtualnym.

4. Zainstaluj zależności:

   ```bash
   uv sync
   ```

   `uv sync` instaluje PyTorch z obsługą CUDA, co na Linuksie i Windows oznacza duże pobieranie. Bez karty NVIDIA zainstaluj zamiast tego wersję dla procesora:

   ```bash
   uv sync --no-group cuda --group cpu
   ```

5. Uruchom aplikację:

   ```bash
   uv run src/app.py
   ```

## Narzędzia deweloperskie

```bash
uv run pre-commit install   # sprawdza i formatuje kod przed każdym commitem
uv run pytest               # uruchamia testy
```

## Przetłumacz interfejs

Interfejs jest tłumaczony za pomocą [gettext](https://www.gnu.org/software/gettext/). Teksty znajdują się w `res/locales/audiotext.pot`, a tłumaczenia każdego języka w `res/locales/<język>/LC_MESSAGES/audiotext.po`.

Gdy teksty w kodzie się zmienią lub po edycji pliku `.po` (np. w [Poedit](https://poedit.net/)), uruchom ten skrypt. Wyodrębnia teksty, aktualizuje katalogi, kompiluje je i wypisuje teksty, które trzeba jeszcze przetłumaczyć lub sprawdzić (oznaczone jako `fuzzy`) – do tego czasu aplikacja pokazuje je po angielsku. Testy kończą się niepowodzeniem, dopóki któryś katalog jest nieaktualny.

```bash
uv run .github/scripts/update_translations.py
```

Aby dodać język, utwórz jego katalog, przetłumacz go, skompiluj i dodaj język do `UI_LANGUAGES` w `src/utils/i18n.py`:

```bash
uv run pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <kod>
uv run .github/scripts/update_translations.py
```

## Ulepsz tę dokumentację

Ta strona jest zbudowana w [Starlight](https://starlight.astro.build) i znajduje się w repozytorium [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs). Każdy język ma własny folder w `src/content/docs` (angielski jest w `en`).

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # udostępnia stronę pod adresem http://localhost:4321
npm run build   # buduje stronę w dist
```

Na dole każdej strony jest link **Edytuj stronę**, który otwiera ją na GitHubie.
