---
title: Contribuír
description: Executa Audiotext desde o código fonte, executa as probas, traduce a interface e mellora esta documentación.
sidebar:
  order: 2
---

As contribucións son benvidas! Le a [guía de contribución](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) antes de abrir unha pull request. Tamén podes propoñer ideas nas [discusións](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) ou consultar o [backlog do proxecto](https://github.com/users/HenestrosaDev/projects/1).

## Prepara o proxecto

Precísase **Python 3.10 a 3.13**.

1. Instala [FFmpeg](https://ffmpeg.org) e, en Linux, [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu ou Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Clona o repositorio:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Crea e activa un contorno virtual:

   ```bash
   python -m venv venv
   # macOS e Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. Instala as dependencias:

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt` instala PyTorch con soporte para CUDA, que é unha descarga grande en Linux e Windows. Sen unha GPU NVIDIA, instala primeiro a versión para CPU:

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   Con [uv](https://docs.astral.sh/uv/), executa `uv pip install --index-strategy unsafe-best-match -r requirements.txt`.

5. Executa a aplicación:

   ```bash
   python src/app.py
   ```

## Ferramentas de desenvolvemento

```bash
pip install -r requirements-dev.txt
pre-commit install   # revisa e formata o código antes de cada commit
pytest               # executa as probas
```

## Traduce a interface

A interface tradúcese con [gettext](https://www.gnu.org/software/gettext/). Os textos están en `res/locales/audiotext.pot`, e as traducións de cada idioma en `res/locales/<idioma>/LC_MESSAGES/audiotext.po`.

Cando cambien os textos do código, ou despois de editar un ficheiro `.po` (p. ex. con [Poedit](https://poedit.net/)), executa este script. Extrae os textos, actualiza os catálogos, compílaos e lista os textos que faltan por traducir ou revisar (marcados como `fuzzy`), que a aplicación mostra en inglés ata entón. As probas fallan mentres haxa un catálogo desactualizado.

```bash
python .github/scripts/update_translations.py
```

Para engadir un idioma, crea o seu catálogo, tradúceo, compílao e engádeo a `UI_LANGUAGES` en `src/utils/i18n.py`:

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <código>
python .github/scripts/update_translations.py
```

## Mellora esta documentación

Esta web está feita con [Starlight](https://starlight.astro.build) e está no repositorio [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs). Cada idioma ten o seu propio cartafol en `src/content/docs` (o inglés está en `en`).

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # serve a web en http://localhost:4321
npm run build   # xera a web en dist
```

Cada páxina ten unha ligazón **Editar páxina** ao final que a abre en GitHub.
