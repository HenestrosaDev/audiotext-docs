---
title: Přispívání
description: Spusťte Audiotext ze zdrojového kódu, spusťte testy, přeložte rozhraní a vylepšete tuto dokumentaci.
sidebar:
  order: 2
---

Příspěvky jsou vítány! Než otevřete pull request, přečtěte si [průvodce přispíváním](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md). Nápady můžete navrhovat také v [diskuzích](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) nebo si prohlédnout [backlog projektu](https://github.com/users/HenestrosaDev/projects/1).

## Příprava projektu

Je potřeba **Python 3.10 až 3.13**. Pokud chybí, uv ho stáhne.

1. Nainstalujte [FFmpeg](https://ffmpeg.org) a v Linuxu také [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu nebo Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Naklonujte repozitář:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Nainstalujte [uv](https://docs.astral.sh/uv/getting-started/installation/), které spravuje závislosti a virtuální prostředí.

4. Nainstalujte závislosti:

   ```bash
   uv sync
   ```

   `uv sync` instaluje PyTorch s podporou CUDA, což je v Linuxu a Windows velké stahování. Bez grafické karty NVIDIA místo toho nainstalujte verzi pro procesor:

   ```bash
   uv sync --no-group cuda --group cpu
   ```

5. Spusťte aplikaci:

   ```bash
   uv run src/app.py
   ```

## Vývojářské nástroje

```bash
uv run pre-commit install   # kontroluje a formátuje kód před každým commitem
uv run pytest               # spouští testy
```

## Překlad rozhraní

Rozhraní se překládá pomocí [gettext](https://www.gnu.org/software/gettext/). Texty jsou v `res/locales/audiotext.pot` a překlady jednotlivých jazyků v `res/locales/<jazyk>/LC_MESSAGES/audiotext.po`.

Když se texty v kódu změní nebo po úpravě souboru `.po` (např. v [Poedit](https://poedit.net/)), spusťte tento skript. Extrahuje texty, aktualizuje katalogy, zkompiluje je a vypíše texty, které je ještě třeba přeložit nebo zkontrolovat (označené jako `fuzzy`); aplikace je do té doby zobrazuje anglicky. Testy selžou, dokud je některý katalog zastaralý.

```bash
uv run .github/scripts/update_translations.py
```

Chcete-li přidat jazyk, vytvořte jeho katalog, přeložte ho, zkompilujte a přidejte jazyk do `UI_LANGUAGES` v `src/utils/i18n.py`:

```bash
uv run pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <kód>
uv run .github/scripts/update_translations.py
```

## Vylepšete tuto dokumentaci

Tento web je postavený na [Starlightu](https://starlight.astro.build) a nachází se v repozitáři [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs). Každý jazyk má vlastní složku v `src/content/docs` (angličtina je v `en`).

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # spustí web na http://localhost:4321
npm run build   # sestaví web do dist
```

Každá stránka má dole odkaz **Upravit stránku**, který ji otevře na GitHubu.
