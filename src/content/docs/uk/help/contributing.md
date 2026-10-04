---
title: Участь у проєкті
description: Запустіть Audiotext із вихідного коду, запустіть тести, перекладіть інтерфейс і покращте цю документацію.
sidebar:
  order: 2
---

Ми раді будь-якому внеску! Перед відкриттям pull request прочитайте [посібник для учасників](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md). Ідеї також можна пропонувати в [обговореннях](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) або переглядати [беклог проєкту](https://github.com/users/HenestrosaDev/projects/1).

## Підготовка проєкту

Потрібен **Python від 3.10 до 3.13**.

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

3. Створіть і активуйте віртуальне середовище:

   ```bash
   python -m venv venv
   # macOS і Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. Встановіть залежності:

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt` встановлює PyTorch із підтримкою CUDA — у Linux і Windows це велике завантаження. Без відеокарти NVIDIA спершу встановіть версію для процесора:

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   З [uv](https://docs.astral.sh/uv/) виконайте `uv pip install --index-strategy unsafe-best-match -r requirements.txt`.

5. Запустіть застосунок:

   ```bash
   python src/app.py
   ```

## Інструменти розробки

```bash
pip install -r requirements-dev.txt
pre-commit install   # перевіряє й форматує код перед кожним комітом
pytest               # запускає тести
```

## Переклад інтерфейсу

Інтерфейс перекладається за допомогою [gettext](https://www.gnu.org/software/gettext/). Тексти містяться в `res/locales/audiotext.pot`, а переклади для кожної мови — у `res/locales/<мова>/LC_MESSAGES/audiotext.po`.

Коли тексти в коді змінюються або після редагування файлу `.po` (наприклад, у [Poedit](https://poedit.net/)), запустіть цей скрипт. Він витягує тексти, оновлює каталоги, компілює їх і виводить список текстів, які ще треба перекласти або перевірити (позначені як `fuzzy`); доти застосунок показує їх англійською. Тести не проходять, доки якийсь каталог застарілий.

```bash
python .github/scripts/update_translations.py
```

Щоб додати мову, створіть її каталог, перекладіть, скомпілюйте й додайте мову до `UI_LANGUAGES` у `src/utils/i18n.py`:

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <код>
python .github/scripts/update_translations.py
```

## Покращте цю документацію

Цей сайт створено на [Starlight](https://starlight.astro.build), і він міститься в папці `web` репозиторію. Кожна мова має власну папку в `web/src/content/docs` (англійська — в `en`).

```bash
cd web
npm install
npm run dev     # запускає сайт за адресою http://localhost:4321
npm run build   # збирає сайт у web/dist
```

Унизу кожної сторінки є посилання **Редагувати сторінку**, яке відкриває її на GitHub.
