---
title: Участь у проєкті
description: Запустіть Audiotext із вихідного коду, запустіть тести, перекладіть інтерфейс і покращте цю документацію.
sidebar:
  order: 2
---

Ми раді будь-якому внеску! Перед відкриттям pull request прочитайте [посібник для учасників](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md). Ідеї також можна пропонувати в [обговореннях](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) або переглядати [беклог проєкту](https://github.com/users/HenestrosaDev/projects/1).

## Підготовка проєкту

Потрібен **Python від 3.10 до 3.13**. Якщо його немає, uv завантажить його сам.

1. Встановіть [FFmpeg](https://ffmpeg.org), а в Linux також [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu або Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Клонуйте репозиторій:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Встановіть [uv](https://docs.astral.sh/uv/getting-started/installation/) — він керує залежностями та віртуальним середовищем.

4. Встановіть залежності:

   ```bash
   uv sync
   ```

   `uv sync` встановлює PyTorch із підтримкою CUDA — у Linux і Windows це велике завантаження. Без відеокарти NVIDIA натомість встановіть версію для процесора:

   ```bash
   uv sync --no-group cuda --group cpu
   ```

5. Запустіть застосунок:

   ```bash
   uv run src/app.py
   ```

## Інструменти розробки

```bash
uv run pre-commit install   # перевіряє й форматує код перед кожним комітом
uv run pytest               # запускає тести
```

## Переклад інтерфейсу

Інтерфейс перекладається за допомогою [gettext](https://www.gnu.org/software/gettext/). Тексти містяться в `res/locales/audiotext.pot`, а переклади для кожної мови — у `res/locales/<мова>/LC_MESSAGES/audiotext.po`.

Коли тексти в коді змінюються або після редагування файлу `.po` (наприклад, у [Poedit](https://poedit.net/)), запустіть цей скрипт. Він витягує тексти, оновлює каталоги, компілює їх і виводить список текстів, які ще треба перекласти або перевірити (позначені як `fuzzy`); доти застосунок показує їх англійською. Тести не проходять, доки якийсь каталог застарілий.

```bash
uv run .github/scripts/update_translations.py
```

Щоб додати мову, створіть її каталог, перекладіть, скомпілюйте й додайте мову до `UI_LANGUAGES` у `src/utils/i18n.py`:

```bash
uv run pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <код>
uv run .github/scripts/update_translations.py
```

## Покращте цю документацію

Цей сайт створено на [Starlight](https://starlight.astro.build), і він міститься в репозиторії [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs). Кожна мова має власну папку в `src/content/docs` (англійська — в `en`).

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # запускає сайт за адресою http://localhost:4321
npm run build   # збирає сайт у dist
```

Унизу кожної сторінки є посилання **Редагувати сторінку**, яке відкриває її на GitHub.
