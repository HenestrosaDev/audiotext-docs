---
title: 参与贡献
description: 从源代码运行 Audiotext、运行测试、翻译界面并改进本文档。
sidebar:
  order: 2
---

欢迎贡献！在提交 pull request 之前，请阅读[贡献指南](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md)。你也可以在[讨论区](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas)提出想法，或查看[项目待办列表](https://github.com/users/HenestrosaDev/projects/1)。

## 搭建项目

需要 **Python 3.10 至 3.13**。

1. 安装 [FFmpeg](https://ffmpeg.org)，在 Linux 上还需安装 [PortAudio](https://www.portaudio.com/)：

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu 或 Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. 克隆仓库：

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. 创建并激活虚拟环境：

   ```bash
   python -m venv venv
   # macOS 和 Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. 安装依赖：

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt` 会安装支持 CUDA 的 PyTorch，在 Linux 和 Windows 上下载量很大。如果没有 NVIDIA GPU，请先安装 CPU 版本：

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   使用 [uv](https://docs.astral.sh/uv/) 时，请运行 `uv pip install --index-strategy unsafe-best-match -r requirements.txt`。

5. 运行应用：

   ```bash
   python src/app.py
   ```

## 开发工具

```bash
pip install -r requirements-dev.txt
pre-commit install   # 每次提交前检查并格式化代码
pytest               # 运行测试
```

## 翻译界面

界面使用 [gettext](https://www.gnu.org/software/gettext/) 翻译。文本位于 `res/locales/audiotext.pot`，各语言的翻译位于 `res/locales/<语言>/LC_MESSAGES/audiotext.po`。

当代码中的文本发生变化，或编辑 `.po` 文件（例如使用 [Poedit](https://poedit.net/)）之后，请运行此脚本。它会提取文本、更新并编译各语言目录，并列出仍需翻译或审校的文本（标记为 `fuzzy`），在此之前应用会以英语显示这些文本。只要有目录未更新，测试就会失败。

```bash
python .github/scripts/update_translations.py
```

要添加语言，请创建其目录、翻译并编译，然后将该语言添加到 `src/utils/i18n.py` 中的 `UI_LANGUAGES`：

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <代码>
python .github/scripts/update_translations.py
```

## 改进本文档

本网站使用 [Starlight](https://starlight.astro.build) 构建，位于仓库的 `web` 文件夹中。每种语言在 `web/src/content/docs` 中都有自己的文件夹（英语位于 `en`）。

```bash
cd web
npm install
npm run dev     # 在 http://localhost:4321 上运行网站
npm run build   # 将网站构建到 web/dist
```

每个页面底部都有一个**编辑此页**链接，可在 GitHub 上打开该页面。
