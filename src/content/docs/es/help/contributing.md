---
title: Contribuir
description: Ejecuta Audiotext desde el código fuente, ejecuta las pruebas, traduce la interfaz y mejora esta documentación.
sidebar:
  order: 2
---

¡Las contribuciones son bienvenidas! Lee la [guía de contribución](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) antes de abrir una pull request. También puedes proponer ideas en las [discusiones](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) o consultar el [backlog del proyecto](https://github.com/users/HenestrosaDev/projects/1).

## Prepara el proyecto

Se necesita **Python 3.10 a 3.13**. uv lo descarga si no lo tienes.

1. Instala [FFmpeg](https://ffmpeg.org) y, en Linux, [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu o Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Clona el repositorio:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Instala [uv](https://docs.astral.sh/uv/getting-started/installation/), que gestiona las dependencias y el entorno virtual.

4. Instala las dependencias:

   ```bash
   uv sync
   ```

   `uv sync` instala PyTorch con soporte para CUDA, que es una descarga grande en Linux y Windows. Sin una GPU NVIDIA, instala en su lugar la versión para CPU:

   ```bash
   uv sync --no-group cuda --group cpu
   ```

5. Ejecuta la aplicación:

   ```bash
   uv run src/app.py
   ```

## Herramientas de desarrollo

```bash
uv run pre-commit install   # revisa y formatea el código antes de cada commit
uv run pytest               # ejecuta las pruebas
```

## Traduce la interfaz

La interfaz se traduce con [gettext](https://www.gnu.org/software/gettext/). Los textos están en `res/locales/audiotext.pot`, y las traducciones de cada idioma en `res/locales/<idioma>/LC_MESSAGES/audiotext.po`.

Cuando cambien los textos del código, o después de editar un archivo `.po` (p. ej. con [Poedit](https://poedit.net/)), ejecuta este script. Extrae los textos, actualiza los catálogos, los compila y lista los textos que faltan por traducir o revisar (marcados como `fuzzy`), que la aplicación muestra en inglés hasta entonces. Las pruebas fallan mientras haya un catálogo desactualizado.

```bash
uv run .github/scripts/update_translations.py
```

Para añadir un idioma, crea su catálogo, tradúcelo, compílalo y añádelo a `UI_LANGUAGES` en `src/utils/i18n.py`:

```bash
uv run pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <código>
uv run .github/scripts/update_translations.py
```

## Mejora esta documentación

Esta web está hecha con [Starlight](https://starlight.astro.build) y está en el repositorio [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs). Cada idioma tiene su propia carpeta en `src/content/docs` (el inglés está en `en`).

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # sirve la web en http://localhost:4321
npm run build   # genera la web en dist
```

Cada página tiene un enlace **Editar página** al final que la abre en GitHub.
