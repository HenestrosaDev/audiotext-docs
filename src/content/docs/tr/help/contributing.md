---
title: Katkıda bulunma
description: Audiotext'i kaynak koddan çalıştırın, testleri çalıştırın, arayüzü çevirin ve bu belgeleri iyileştirin.
sidebar:
  order: 2
---

Katkılarınızı bekliyoruz! Pull request açmadan önce [katkı rehberini](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) okuyun. Fikirlerinizi [tartışmalarda](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) önerebilir veya [proje iş listesine](https://github.com/users/HenestrosaDev/projects/1) göz atabilirsiniz.

## Projeyi hazırlayın

**Python 3.10 ile 3.13** arası gereklidir. Yüklü değilse uv onu indirir.

1. [FFmpeg](https://ffmpeg.org)'i ve Linux'ta [PortAudio](https://www.portaudio.com/)'yu kurun:

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu veya Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Depoyu klonlayın:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Bağımlılıkları ve sanal ortamı yöneten [uv](https://docs.astral.sh/uv/getting-started/installation/) aracını kurun.

4. Bağımlılıkları kurun:

   ```bash
   uv sync
   ```

   `uv sync`, PyTorch'u CUDA desteğiyle kurar; bu, Linux ve Windows'ta büyük bir indirmedir. NVIDIA ekran kartınız yoksa bunun yerine CPU sürümünü kurun:

   ```bash
   uv sync --no-group cuda --group cpu
   ```

5. Uygulamayı çalıştırın:

   ```bash
   uv run src/app.py
   ```

## Geliştirme araçları

```bash
uv run pre-commit install   # her commit'ten önce kodu denetler ve biçimlendirir
uv run pytest               # testleri çalıştırır
```

## Arayüzü çevirin

Arayüz [gettext](https://www.gnu.org/software/gettext/) ile çevrilir. Metinler `res/locales/audiotext.pot` içinde, her dilin çevirileri ise `res/locales/<dil>/LC_MESSAGES/audiotext.po` içindedir.

Koddaki metinler değiştiğinde veya bir `.po` dosyasını düzenledikten sonra (ör. [Poedit](https://poedit.net/) ile) bu betiği çalıştırın. Betik metinleri çıkarır, katalogları günceller, derler ve hâlâ çevrilmesi ya da gözden geçirilmesi gereken metinleri (`fuzzy` olarak işaretli) listeler; uygulama bu metinleri o zamana kadar İngilizce gösterir. Bir katalog güncel olmadığı sürece testler başarısız olur.

```bash
uv run .github/scripts/update_translations.py
```

Bir dil eklemek için kataloğunu oluşturun, çevirin, derleyin ve dili `src/utils/i18n.py` içindeki `UI_LANGUAGES`'a ekleyin:

```bash
uv run pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <kod>
uv run .github/scripts/update_translations.py
```

## Bu belgeleri iyileştirin

Bu site [Starlight](https://starlight.astro.build) ile oluşturulmuştur ve [audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs) deposundadır. Her dilin `src/content/docs` içinde kendi klasörü vardır (İngilizce `en` içindedir).

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # siteyi http://localhost:4321 adresinde sunar
npm run build   # siteyi dist içinde derler
```

Her sayfanın altında, sayfayı GitHub'da açan bir **Sayfayı düzenle** bağlantısı bulunur.
