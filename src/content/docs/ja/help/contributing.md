---
title: コントリビュート
description: ソースコードから Audiotext を実行し、テストを実行し、インターフェースを翻訳し、このドキュメントを改善します。
sidebar:
  order: 2
---

コントリビュートは大歓迎です。pull request を作成する前に[コントリビュートガイド](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md)をお読みください。[ディスカッション](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas)でアイデアを提案したり、[プロジェクトのバックログ](https://github.com/users/HenestrosaDev/projects/1)を確認したりすることもできます。

## プロジェクトを準備する

**Python 3.10 から 3.13** が必要です。

1. [FFmpeg](https://ffmpeg.org) と、Linux では [PortAudio](https://www.portaudio.com/) をインストールします。

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu または Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. リポジトリをクローンします。

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. 仮想環境を作成して有効にします。

   ```bash
   python -m venv venv
   # macOS と Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. 依存関係をインストールします。

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt` は CUDA 対応の PyTorch をインストールするため、Linux と Windows ではダウンロードが大きくなります。NVIDIA GPU がない場合は、先に CPU 版をインストールしてください。

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   [uv](https://docs.astral.sh/uv/) を使う場合は `uv pip install --index-strategy unsafe-best-match -r requirements.txt` を実行します。

5. アプリを起動します。

   ```bash
   python src/app.py
   ```

## 開発ツール

```bash
pip install -r requirements-dev.txt
pre-commit install   # コミットのたびにコードをチェック・整形する
pytest               # テストを実行する
```

## インターフェースを翻訳する

インターフェースは [gettext](https://www.gnu.org/software/gettext/) で翻訳されています。テキストは `res/locales/audiotext.pot` に、各言語の翻訳は `res/locales/<言語>/LC_MESSAGES/audiotext.po` にあります。

コードのテキストが変わったとき、または `.po` ファイルを編集した後（[Poedit](https://poedit.net/) など）は、このスクリプトを実行します。テキストの抽出、カタログの更新とコンパイルを行い、まだ翻訳または確認が必要なテキスト（`fuzzy` の印付き）を一覧表示します。それまでアプリはそれらを英語で表示します。古いカタログがある間はテストが失敗します。

```bash
python .github/scripts/update_translations.py
```

言語を追加するには、カタログを作成して翻訳・コンパイルし、`src/utils/i18n.py` の `UI_LANGUAGES` に追加します。

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <コード>
python .github/scripts/update_translations.py
```

## このドキュメントを改善する

このサイトは [Starlight](https://starlight.astro.build) で作られており、[audiotext-docs](https://github.com/HenestrosaDev/audiotext-docs) リポジトリにあります。言語ごとに `src/content/docs` 内にフォルダーがあります（英語は `en` にあります）。

```bash
git clone https://github.com/HenestrosaDev/audiotext-docs.git
cd audiotext-docs
npm install
npm run dev     # http://localhost:4321 でサイトを表示する
npm run build   # dist にサイトをビルドする
```

各ページの下部には、GitHub でそのページを開く **ページを編集** リンクがあります。
