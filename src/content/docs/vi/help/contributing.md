---
title: Đóng góp
description: Chạy Audiotext từ mã nguồn, chạy kiểm thử, dịch giao diện và cải thiện tài liệu này.
sidebar:
  order: 2
---

Mọi đóng góp đều được hoan nghênh! Hãy đọc [hướng dẫn đóng góp](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md) trước khi mở pull request. Bạn cũng có thể đề xuất ý tưởng trong [thảo luận](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas) hoặc xem [backlog của dự án](https://github.com/users/HenestrosaDev/projects/1).

## Thiết lập dự án

Cần **Python 3.10 đến 3.13**.

1. Cài [FFmpeg](https://ffmpeg.org) và, trên Linux, [PortAudio](https://www.portaudio.com/):

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu hoặc Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. Sao chép kho mã:

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. Tạo và kích hoạt môi trường ảo:

   ```bash
   python -m venv venv
   # macOS và Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. Cài các thư viện phụ thuộc:

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt` cài PyTorch có hỗ trợ CUDA, dung lượng tải lớn trên Linux và Windows. Nếu không có GPU NVIDIA, hãy cài bản dành cho CPU trước:

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   Với [uv](https://docs.astral.sh/uv/), chạy `uv pip install --index-strategy unsafe-best-match -r requirements.txt`.

5. Chạy ứng dụng:

   ```bash
   python src/app.py
   ```

## Công cụ phát triển

```bash
pip install -r requirements-dev.txt
pre-commit install   # kiểm tra và định dạng mã trước mỗi commit
pytest               # chạy kiểm thử
```

## Dịch giao diện

Giao diện được dịch bằng [gettext](https://www.gnu.org/software/gettext/). Các chuỗi văn bản nằm trong `res/locales/audiotext.pot`, và bản dịch của từng ngôn ngữ nằm trong `res/locales/<ngôn-ngữ>/LC_MESSAGES/audiotext.po`.

Khi văn bản trong mã thay đổi, hoặc sau khi sửa tệp `.po` (ví dụ bằng [Poedit](https://poedit.net/)), hãy chạy script này. Script trích xuất văn bản, cập nhật các danh mục, biên dịch chúng và liệt kê những văn bản còn cần dịch hoặc xem lại (được đánh dấu `fuzzy`), mà ứng dụng sẽ hiển thị bằng tiếng Anh cho đến lúc đó. Các bài kiểm thử sẽ thất bại khi còn danh mục chưa được cập nhật.

```bash
python .github/scripts/update_translations.py
```

Để thêm ngôn ngữ, hãy tạo danh mục, dịch, biên dịch và thêm ngôn ngữ đó vào `UI_LANGUAGES` trong `src/utils/i18n.py`:

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <mã>
python .github/scripts/update_translations.py
```

## Cải thiện tài liệu này

Trang web này được xây dựng bằng [Starlight](https://starlight.astro.build) và nằm trong thư mục `web` của kho mã. Mỗi ngôn ngữ có thư mục riêng trong `web/src/content/docs` (tiếng Anh nằm trong `en`).

```bash
cd web
npm install
npm run dev     # chạy trang web tại http://localhost:4321
npm run build   # xây dựng trang web vào web/dist
```

Mỗi trang có liên kết **Chỉnh sửa trang** ở cuối để mở trang đó trên GitHub.
