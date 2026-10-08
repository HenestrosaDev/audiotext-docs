---
title: コントリビュート
description: ソースコードから Audiotext を実行し、テストを実行し、インターフェースを翻訳し、このドキュメントを改善します。
sidebar:
  order: 2
---

コントリビュートは大歓迎です。pull request を作成する前に[コントリビュートガイド](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md)をお読みください。[ディスカッション](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas)でアイデアを提案したり、[プロジェクトのバックログ](https://github.com/users/HenestrosaDev/projects/1)を確認したりすることもできます。

## プロジェクトを準備する

**Python 3.10 から 3.13** が必要です。インストールされていない場合は uv がダウンロードします。

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

3. 依存関係と仮想環境を管理する [uv](https://docs.astral.sh/uv/getting-started/installation/) をインストールします。

4. 依存関係をインストールします。

   ```bash
   uv sync
   ```

   `uv sync` は CUDA 対応の PyTorch をインストールするため、Linux と Windows ではダウンロードが大きくなります。NVIDIA GPU がない場合は、代わりに CPU 版をインストールしてください。

   ```bash
   uv sync --no-group cuda --group cpu
   ```

5. アプリを起動します。

   ```bash
   uv run src/app.py
   ```

## 開発ツール

```bash
uv run pre-commit install   # コミットのたびにコードをチェック・整形する
uv run pytest               # テストを実行する
```

## インターフェースを翻訳する

インターフェースは [gettext](https://www.gnu.org/software/gettext/) で翻訳されています。テキストは `res/locales/audiotext.pot` に、各言語の翻訳は `res/locales/<言語>/LC_MESSAGES/audiotext.po` にあります。

コードのテキストが変わったとき、または `.po` ファイルを編集した後（[Poedit](https://poedit.net/) など）は、このスクリプトを実行します。テキストの抽出、カタログの更新とコンパイルを行い、まだ翻訳または確認が必要なテキスト（`fuzzy` の印付き）を一覧表示します。それまでアプリはそれらを英語で表示します。古いカタログがある間はテストが失敗します。

```bash
uv run .github/scripts/update_translations.py
```

言語を追加するには、カタログを作成して翻訳・コンパイルし、`src/utils/i18n.py` の `UI_LANGUAGES` に追加します。

```bash
uv run pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <コード>
uv run .github/scripts/update_translations.py
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
