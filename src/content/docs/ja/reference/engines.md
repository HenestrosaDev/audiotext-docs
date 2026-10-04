---
title: エンジン
description: WhisperX、Whisper API、Google API を比較し、モデルと詳細オプションを選びます。
sidebar:
  order: 1
---

Audiotext は 3 つのエンジンのいずれかで文字起こしします。エンジンは[文字起こしの設定](/ja/guides/transcription-settings/#エンジン)の **エンジン** カードで選びます。

| | WhisperX | Whisper API | Google API |
| --- | --- | --- | --- |
| 実行場所 | お使いのコンピューター | OpenAI のサーバー | Google のサーバー |
| インターネット | モデルのダウンロード時のみ | 必要 | 必要 |
| 費用 | 無料・無制限 | 有料 | 無料枠（月 60 分）、または API キーで有料 |
| 言語の検出 | ✓ | ✓ | ✗ |
| 翻訳 | ✓ | ✓ | ✗ |
| タイムスタンプ | ✓ | モデルによる | ✗ |
| 話者の識別 | ✓（Hugging Face トークン） | `gpt-4o-transcribe-diarize` | ✗ |
| 単語ごとのタイミング | ✓ | `whisper-1` | ✗ |
| ライブテキスト | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) は、お使いのコンピューターで動作する OpenAI の Whisper の高速な実装で、音声がコンピューターの外に出ることはありません。CPU で動作し、CUDA 対応の NVIDIA GPU ではずっと高速に動作します。

### モデル

大きいモデルほど正確ですが、遅く、メモリも多く使います。モデルは初回使用時にダウンロードされます。

| モデル | パラメーター数 | 必要な VRAM |
| :---: | :---: | :---: |
| `tiny`, `tiny.en` | 39 M | 約 1 GB |
| `base`, `base.en` | 74 M | 約 1 GB |
| `small`, `small.en` | 244 M | 約 2 GB |
| `distil-small.en` | 166 M | 約 2 GB |
| `medium`, `medium.en` | 769 M | 約 5 GB |
| `distil-medium.en` | 394 M | 約 3 GB |
| `large-v1`, `large-v2`, `large-v3` | 1550 M | 8 GB 未満 |
| `large-v3-turbo` | 809 M | 約 6 GB |
| `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5` | 756 M | 約 5 GB |

- **`large-v2`** が既定です。`large-v3` は、特に日本語など一部の言語で、幻覚やテキストの繰り返しが起こりやすく、句読点の抜けも多いためです。
- **`large-v3-turbo`** は `large-v3` を軽量化したもので、ずっと高速でありながら精度はほぼ同等です。
- 末尾が **`.en`** のモデル（`tiny.en`、`base.en`、`small.en`、`medium.en`）と**蒸留**モデル（`distil-small.en`、`distil-medium.en`、`distil-large-v2`、`distil-large-v3`、`distil-large-v3.5`）は英語のみを文字起こしします。同じサイズの多言語モデルより高速です。

:::tip
Audiotext をすぐに試すには `tiny` か `small` を選びます。最高の品質を得るには、GPU で `large-v2` か `large-v3-turbo` を使います。
:::

### 詳細オプション

**環境設定** → **WhisperX** にあります。問題があるとき、または内容を理解している場合にのみ変更してください。GPU のメモリが不足するとシステムが固まることがあります。

- **計算タイプ**: モデルの数値の精度です。`float16` は GPU で高速です（CUDA 使用時の既定）。`int8` はメモリ使用量が少なく、CPU での既定です。多くの CPU は `float16` を効率よく扱えないためです。`float32` は最も精度が高く、VRAM が 8 GB を超える GPU 向けです。
- **バッチサイズ**: 音声のいくつの部分を同時に処理するか（既定は `8`）。品質ではなく速度だけに影響します。メモリが足りない場合は下げてください。`16` までが推奨です。
- **CPU を使用**: WhisperX を CPU で実行します。CUDA 対応 GPU が見つからない場合は常にオンです。

## Whisper API

[OpenAI の音声認識 API](https://platform.openai.com/docs/guides/speech-to-text) を使います。WhisperX がスムーズに動かないコンピューター向けで、OpenAI の API キーが必要です（[API キー](/ja/reference/preferences/#api-キー)をご覧ください）。

| モデル | タイムスタンプ | 話者 | 備考 |
| --- | :---: | :---: | --- |
| `whisper-1`（既定） | ✓ | ✗ | 文単位で再生でき、字幕も作れます。英語に翻訳できます。 |
| `gpt-transcribe` | ✗ | ✗ | より正確ですが、タイムスタンプはありません。 |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | 話者を識別します。キーワードと説明は使いません。 |

英語への翻訳は、翻訳できる唯一のモデルである `whisper-1` が必ず行います。

API は 25 MB を超えるファイルを受け付けないため、長い音声は最大 10 分のチャンクに分割されます。単語が途中で切れないよう、無音の箇所で区切られます。`whisper-1` では各チャンクの末尾が次のチャンクのコンテキストとして渡され、`gpt-4o-transcribe-diarize` では各話者の声のサンプルが次のチャンクとともに送られ、ラベルが維持されます。

### オプション

- **応答形式**（出力カード、フォルダー用）: `text`（既定）、`json`、`verbose_json`、`srt`、`vtt`。字幕と `verbose_json` にはタイムスタンプを返すモデルが必要です。
- **温度**（環境設定 → Whisper API）: 0 から 1 の間。0.8 のような高い値は結果をよりランダムに、0.2 のような低い値はより焦点の定まったものにします。0（既定）の場合、モデルが必要に応じて自動で上げます。
- **単語のタイムスタンプ**（環境設定 → Whisper API）: 再生中にハイライトするため、`whisper-1` が各単語のタイムスタンプも返すかどうか。時間がかかります。既定でオンです。

## Google API

[Google Speech-to-Text API](https://cloud.google.com/speech-to-text) を使います。文に句読点を付けず（句読点は Audiotext が付けます）、品質も Whisper より低いため、文字起こしの修正が必要になることがよくあります。言語の検出も翻訳もできず、タイムスタンプのないプレーンテキストを返します。

API キーがない場合は、月 60 分までの無料枠が使われます。拡張するには Google の API キーを設定します。Google は利用料金を請求します。これについて Audiotext は責任を負いません。
