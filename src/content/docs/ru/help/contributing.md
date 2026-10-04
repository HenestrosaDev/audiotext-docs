---
title: Участие в проекте
description: Запустите Audiotext из исходного кода, запустите тесты, переведите интерфейс и улучшите эту документацию.
sidebar:
  order: 2
---

Мы рады любому вкладу! Перед открытием pull request прочитайте [руководство для участников](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md). Идеи также можно предлагать в [обсуждениях](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) или смотреть [бэклог проекта](https://github.com/users/HenestrosaDev/projects/1).

## Подготовка проекта

Нужен **Python от 3.10 до 3.13**.

1. Установите [FFmpeg](https://ffmpeg.org), а в Linux также [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu или Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Создайте и активируйте виртуальное окружение:

   ```bash
   python -m venv venv
   # macOS и Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. Установите зависимости:

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt` устанавливает PyTorch с поддержкой CUDA — в Linux и Windows это большая загрузка. Без видеокарты NVIDIA сначала установите версию для процессора:

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   С [uv](https://docs.astral.sh/uv/) выполните `uv pip install --index-strategy unsafe-best-match -r requirements.txt`.

5. Запустите приложение:

   ```bash
   python src/app.py
   ```

## Инструменты разработки

```bash
pip install -r requirements-dev.txt
pre-commit install   # проверяет и форматирует код перед каждым коммитом
pytest               # запускает тесты
```

## Перевод интерфейса

Интерфейс переводится с помощью [gettext](https://www.gnu.org/software/gettext/). Тексты находятся в `res/locales/audiotext.pot`, а переводы для каждого языка — в `res/locales/<язык>/LC_MESSAGES/audiotext.po`.

Когда тексты в коде меняются или после правки файла `.po` (например, в [Poedit](https://poedit.net/)), запустите этот скрипт. Он извлекает тексты, обновляет каталоги, компилирует их и выводит список текстов, которые ещё нужно перевести или проверить (помечены как `fuzzy`); до тех пор приложение показывает их на английском. Тесты не проходят, пока какой-либо каталог устарел.

```bash
python .github/scripts/update_translations.py
```

Чтобы добавить язык, создайте его каталог, переведите, скомпилируйте его и добавьте язык в `UI_LANGUAGES` в `src/utils/i18n.py`:

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <код>
python .github/scripts/update_translations.py
```

## Улучшите эту документацию

Этот сайт создан на [Starlight](https://starlight.astro.build) и находится в папке `web` репозитория. У каждого языка своя папка в `web/src/content/docs` (английский — в `en`).

```bash
cd web
npm install
npm run dev     # запускает сайт по адресу http://localhost:4321
npm run build   # собирает сайт в web/dist
```

Внизу каждой страницы есть ссылка **Редактировать страницу**, которая открывает её на GitHub.
