---
title: コマンドラインインターフェース
description: Audiotext のコマンドラインで、スクリプトからファイル、フォルダー、YouTube 動画を文字起こしします。
sidebar:
  order: 3
---

[ソースコードから実行](/ja/help/contributing/#プロジェクトを準備する)している場合、Audiotext はスクリプトから文字起こしするためにコマンドラインからも使えます。コマンドは 3 つあります。

- `transcribe`: ファイル、フォルダー内のファイル、または YouTube 動画を文字起こしします。
- `watch`: `Ctrl+C` で止めるまで、フォルダーに追加されたファイルを文字起こしします。
- `check-update`: 新しいバージョンが利用可能かを確認し、ダウンロード用のリンクを表示します。

指定しなかったオプションには、アプリで設定した値が使われます。文字起こしは常に、文字起こしした各ファイルの隣か、`--output-dir` で指定したフォルダーに保存されます（文字起こししたフォルダーのサブフォルダー構成はそこに再現されます）。

## 例

```bash
# ファイルを文字起こしする。テキストも出力されるのでリダイレクトできる
python src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# 話者を識別しながらフォルダー内のファイルを文字起こしする
python src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Whisper API で YouTube 動画を文字起こしする
python src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# キーワードとコンテキストを付けて Whisper API で会議を文字起こしする
python src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "次のリリースについての会議"

# Ctrl+C で止めるまで、フォルダーに追加されたファイルを文字起こしする
python src/cli.py watch inbox/ --output-types srt
```

## オプション

| オプション | 説明 |
| --- | --- |
| `-m`, `--method` | 文字起こしの方法: `whisperx`、`whisper-api`、`google` |
| `-l`, `--language` | 音声の言語（ISO 639-1 コード、例: `ja`）、または検出する場合は `auto`（Google は非対応） |
| `-o`, `--output-dir` | 文字起こしの保存先フォルダー（既定: 文字起こしした各ファイルの隣） |
| `--overwrite` | 既存の文字起こしを上書きする |
| `-p`, `--prompt` | 音声の内容（テーマや場面など）（Google は非対応） |
| `-k`, `--keywords` | 正しく表記させたい名前・用語・略語のカンマ区切りリスト（Google は非対応） |
| `--translate` | 音声を英語に翻訳する（Google は非対応） |
| `-q`, `--quiet` | エラーのみを出力する |
| `-v`, `--verbose` | エラーをデバッグするためにログを出力する |

**WhisperX のオプション**

| オプション | 説明 |
| --- | --- |
| `-t`, `--output-types` | 出力ファイルの種類のカンマ区切りリスト（例: `txt,srt`） |
| `--diarize` | 話者を識別する |
| `--speakers` | 識別する話者の数（`0` で自動検出） |
| `--model-size` | モデル（例: `small`、`large-v2`、[エンジン](/ja/reference/engines/#モデル)を参照） |
| `--compute-type` | `int8`、`float16`、`float32` |
| `--batch-size` | バッチサイズ |
| `--cpu` | CPU で実行する |

**Whisper API のオプション**

| オプション | 説明 |
| --- | --- |
| `--openai-model` | 文字起こしモデル: `whisper-1`、`gpt-transcribe`、`gpt-4o-transcribe-diarize` |

すべてのオプションと値は `python src/cli.py transcribe --help` で確認できます。

## 出力と終了コード

進捗は標準エラー出力に表示され（`--quiet` で非表示）、単一ファイルの文字起こしのテキストは標準出力に表示されます。文字起こしが失敗すると、コマンドは終了コード `1` で終了します。

API キーには、アプリで設定したもの、または環境変数 `OPENAI_API_KEY`、`GOOGLE_API_KEY`、`HF_TOKEN`（話者の識別用）が使われます。
