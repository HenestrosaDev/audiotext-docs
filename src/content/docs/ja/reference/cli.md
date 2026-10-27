---
title: コマンドラインインターフェース
description: Audiotext のコマンドラインで、スクリプトからファイル、フォルダー、YouTube 動画を文字起こし・要約・翻訳します。
sidebar:
  order: 3
---

Audiotext はコマンドラインからも使えます（スクリプトからの文字起こしなど）。コマンドは 3 つあります。

- `transcribe`: ファイル、フォルダー内のファイル、または YouTube 動画を文字起こしします。
- `watch`: `Ctrl+C` で止めるまで、フォルダーに追加されたファイルを文字起こしします。
- `check-update`: 新しいバージョンが利用可能かを確認し、ダウンロード用のリンクを表示します。

指定しなかったオプションには、アプリで設定した値が使われます。文字起こしは常に、文字起こしした各ファイルの隣か、`--output-dir` で指定したフォルダーに保存されます（文字起こししたフォルダーのサブフォルダー構成はそこに再現されます）。

## 実行する

インストールしたアプリは、コマンドを渡されるとコマンドラインとして動作します。

| システム | コマンド |
| --- | --- |
| Linux | `audiotext`（`install.sh` が `~/.local/bin` にインストール） |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | Audiotext のインストール先フォルダーにある `audiotext-cli.exe`（既定は `%LOCALAPPDATA%\Programs\Audiotext`） |

[ソースコードから実行](/ja/help/contributing/#プロジェクトを準備する)している場合は、代わりに `uv run src/cli.py` を使います。

## 例

```bash
# ファイルを文字起こしする。テキストも出力されるのでリダイレクトできる
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# 話者を識別しながらフォルダー内のファイルを文字起こしする
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Whisper API で YouTube 動画を文字起こしする
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# キーワードとコンテキストを付けて Whisper API で会議を文字起こしする
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "次のリリースについての会議"

# 字幕と Word 文書を保存し、要約して、スペイン語に翻訳する
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Ctrl+C で止めるまで、フォルダーに追加されたファイルを文字起こしする
audiotext watch inbox/ --output-types srt

# 同じ処理を、フォルダーにすでにあるファイルから文字起こしして実行
audiotext watch inbox/ --existing
```

## オプション

| オプション | 説明 |
| --- | --- |
| `-m`, `--method` | 文字起こしの方法: `whisperx`、`whisper-api`、`google` |
| `-l`, `--language` | 音声の言語（ISO 639-1 コード、例: `ja`）、または検出する場合は `auto`（Google は非対応） |
| `-t`, `--output-types` | 出力ファイルの種類のカンマ区切りリスト。`aud`、`json`、`srt`、`txt`、`tsv`、`vtt`、`md`、`docx`、`ass` から選びます（例: `txt,srt,md`） |
| `-o`, `--output-dir` | 文字起こしの保存先フォルダー（既定: 文字起こしした各ファイルの隣） |
| `--overwrite` | すでに文字起こしがあるファイルをもう一度文字起こしして置き換える |
| `--existing` | （`watch` のみ）フォルダーにすでにあり、まだ文字起こしのないファイルを最初に文字起こしする |
| `-p`, `--prompt` | 音声の内容（テーマや場面など）（Google は非対応） |
| `-k`, `--keywords` | 正しく表記させたい名前・用語・略語のカンマ区切りリスト（Google は非対応） |
| `--translate` | 文字起こししながら音声を英語に翻訳する（Google は非対応）。ほかの言語は `--translate-to` を参照 |
| `-q`, `--quiet` | エラーのみを出力する |
| `-v`, `--verbose` | エラーをデバッグするためにログを出力する |
| `--version` | Audiotext のバージョンを出力する |

文字起こしの方法が自分では保存しない出力形式（`md` や `docx` など）は、アプリと同じく、その結果からエクスポートされます。`aud` を保存するのは WhisperX だけです。

**要約と翻訳のオプション**

| オプション | 説明 |
| --- | --- |
| `--summarize` | 各文字起こしを、要点と章を含めて `.summary.md` ファイルに要約する |
| `--summary-provider` | 要約する言語モデルのプロバイダー: `openai`、`anthropic`、`deepseek`、`gemini`、`mistral`、`grok`、`ollama` |
| `--summary-model` | 要約する言語モデル |
| `--translate-to` | 各文字起こしをある言語（ISO 639-1 コード）に翻訳し、その出力形式で保存する（例: `talk.es.srt`） |
| `--translation-provider` | 翻訳のプロバイダー: `--summary-provider` のもの、`deepl`、`google` |
| `--translation-model` | 翻訳する言語モデル（言語モデルのプロバイダーの場合） |

指定しない場合は、アプリで設定したプロバイダーとモデルが使われます。[プロバイダー](/ja/guides/summary-and-translation/#プロバイダー)をご覧ください。

**WhisperX のオプション**

| オプション | 説明 |
| --- | --- |
| `--diarize` | 話者を識別する |
| `--speakers` | 識別する話者の数（`0` で自動検出） |
| `--model-size` | モデル（例: `small`、`large-v2`、[エンジン](/ja/reference/engines/#モデル)を参照） |
| `--compute-type` | `int8`、`float16`、`float32` |
| `--batch-size` | バッチサイズ |
| `--cpu` | NVIDIA GPU や Mac の GPU ではなく CPU で実行する |

**Whisper API のオプション**

| オプション | 説明 |
| --- | --- |
| `--openai-model` | 文字起こしモデル: `whisper-1`、`gpt-transcribe`、`gpt-4o-transcribe-diarize` |

すべてのオプションと値は `audiotext transcribe --help` で確認できます。

## 出力と終了コード

進捗は標準エラー出力に表示され（`--quiet` で非表示）、単一ファイルの文字起こしのテキストは標準出力に表示されます。文字起こし、要約、翻訳のいずれかが失敗するとコマンドは終了コード `1` で、`Ctrl+C` で止めた場合は `130` で終了します。

`--summarize` や `--translate-to` のプロバイダーの API キーが設定されていない場合、コマンドは文字起こしの前に停止します。要約や翻訳が失敗しても、その旨が報告されるだけで文字起こしは失われず、保存されます。

API キーには、アプリで設定したもの、またはその[環境変数](/ja/reference/files-and-data/#環境変数)（`OPENAI_API_KEY`、`GOOGLE_API_KEY`、`HF_TOKEN`（話者の識別用）など）が使われます。
