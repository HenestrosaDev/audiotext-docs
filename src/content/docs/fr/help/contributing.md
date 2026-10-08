---
title: Contribuer
description: Exécutez Audiotext depuis le code source, lancez les tests, traduisez l’interface et améliorez cette documentation.
sidebar:
  order: 2
---

Les contributions sont les bienvenues ! Lisez le [guide de contribution](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) avant d’ouvrir une pull request. Vous pouvez aussi proposer des idées dans les [discussions](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) ou consulter le [backlog du projet](https://github.com/users/HenestrosaDev/projects/1).

## Préparez le projet

**Python 3.10 à 3.13** est requis. uv le télécharge s’il manque.

1. Installez [FFmpeg](https://ffmpeg.org) et, sous Linux, [PortAudio](https://www.portaudio.com/) :

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu ou Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Clonez le dépôt :

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Installez [uv](https://docs.astral.sh/uv/getting-started/installation/), qui gère les dépendances et l’environnement virtuel.

4. Installez les dépendances :

   ```bash
   uv sync
   ```

   `uv sync` installe PyTorch avec la prise en charge de CUDA, un téléchargement volumineux sous Linux et Windows. Sans GPU NVIDIA, installez plutôt la version CPU :

   ```bash
   uv sync --no-group cuda --group cpu
   ```

5. Lancez l’application :

   ```bash
   uv run src/app.py
   ```

## Outils de développement

```bash
uv run pre-commit install   # vérifie et formate le code avant chaque commit
uv run pytest               # lance les tests
```

## Traduisez l’interface

L’interface est traduite avec [gettext](https://www.gnu.org/software/gettext/). Les textes se trouvent dans `res/locales/audiotext.pot`, et les traductions de chaque langue dans `res/locales/<langue>/LC_MESSAGES/audiotext.po`.

Lorsque les textes du code changent, ou après avoir modifié un fichier `.po` (p. ex. avec [Poedit](https://poedit.net/)), exécutez ce script. Il extrait les textes, met à jour les catalogues, les compile et liste les textes à traduire ou à relire (marqués `fuzzy`), que l’application affiche en anglais d’ici là. Les tests échouent tant qu’un catalogue n’est pas à jour.

```bash
uv run .github/scripts/update_translations.py
```

Pour ajouter une langue, créez son catalogue, traduisez-le, compilez-le et ajoutez-la à `UI_LANGUAGES` dans `src/utils/i18n.py` :

```bash
uv run pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <code>
uv run .github/scripts/update_translations.py
```

## Améliorez cette documentation

Ce site est construit avec [Starlight](https://starlight.astro.build) et se trouve dans le dépôt [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs). Chaque langue a son propre dossier dans `src/content/docs` (l’anglais est dans `en`).

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # sert le site sur http://localhost:4321
npm run build   # construit le site dans dist
```

Chaque page comporte un lien **Modifier cette page** en bas qui l’ouvre sur GitHub.
