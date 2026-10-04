---
title: Berkontribusi
description: Jalankan Audiotext dari kode sumber, jalankan pengujian, terjemahkan antarmuka, dan perbaiki dokumentasi ini.
sidebar:
  order: 2
---

Kontribusi sangat diterima! Baca [panduan kontribusi](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) sebelum membuka pull request. Anda juga dapat mengusulkan ide di [diskusi](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) atau melihat [backlog proyek](https://github.com/users/HenestrosaDev/projects/1).

## Siapkan proyek

Diperlukan **Python 3.10 hingga 3.13**.

1. Instal [FFmpeg](https://ffmpeg.org) dan, di Linux, [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu atau Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Klon repositori:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Buat dan aktifkan lingkungan virtual:

   ```bash
   python -m venv venv
   # macOS dan Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. Instal dependensi:

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt` menginstal PyTorch dengan dukungan CUDA, yang merupakan unduhan besar di Linux dan Windows. Tanpa GPU NVIDIA, instal versi CPU terlebih dahulu:

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   Dengan [uv](https://docs.astral.sh/uv/), jalankan `uv pip install --index-strategy unsafe-best-match -r requirements.txt`.

5. Jalankan aplikasi:

   ```bash
   python src/app.py
   ```

## Alat pengembangan

```bash
pip install -r requirements-dev.txt
pre-commit install   # memeriksa dan memformat kode sebelum setiap commit
pytest               # menjalankan pengujian
```

## Terjemahkan antarmuka

Antarmuka diterjemahkan dengan [gettext](https://www.gnu.org/software/gettext/). Teksnya ada di `res/locales/audiotext.pot`, dan terjemahan setiap bahasa ada di `res/locales/<bahasa>/LC_MESSAGES/audiotext.po`.

Saat teks dalam kode berubah, atau setelah mengedit file `.po` (mis. dengan [Poedit](https://poedit.net/)), jalankan skrip ini. Skrip ini mengekstrak teks, memperbarui katalog, mengompilasinya, dan menampilkan daftar teks yang masih perlu diterjemahkan atau ditinjau (ditandai `fuzzy`), yang ditampilkan aplikasi dalam bahasa Inggris hingga saat itu. Pengujian gagal selama masih ada katalog yang belum diperbarui.

```bash
python .github/scripts/update_translations.py
```

Untuk menambahkan bahasa, buat katalognya, terjemahkan, kompilasi, lalu tambahkan bahasa tersebut ke `UI_LANGUAGES` di `src/utils/i18n.py`:

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <kode>
python .github/scripts/update_translations.py
```

## Perbaiki dokumentasi ini

Situs ini dibuat dengan [Starlight](https://starlight.astro.build) dan berada di folder `web` pada repositori. Setiap bahasa memiliki foldernya sendiri di `web/src/content/docs` (bahasa Inggris ada di `en`).

```bash
cd web
npm install
npm run dev     # menyajikan situs di http://localhost:4321
npm run build   # membangun situs ke web/dist
```

Setiap halaman memiliki tautan **Edit halaman** di bagian bawah yang membukanya di GitHub.
