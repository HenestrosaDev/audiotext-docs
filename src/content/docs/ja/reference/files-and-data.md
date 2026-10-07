---
title: ファイルとデータ
description: Audiotext が設定、履歴、録音、API キーを保存する場所と、読み込む環境変数。
sidebar:
  order: 5
---

Audiotext はデータをお使いのコンピューターに保存します。リモートのエンジン（Whisper API または Google API）や Ollama 以外の AI プロバイダーを使わない限り、何も送信されません。また、起動時に新しいバージョンがあるかを GitHub に問い合わせます。これは **環境設定** → **一般** → **アップデート** でオフにできます。

## ユーザー設定フォルダー

設定、履歴、録音はユーザー設定フォルダーに保存されるため、アップデート後も残ります。

| システム | フォルダー |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext`（または `$XDG_CONFIG_HOME/audiotext`） |

中身は次のとおりです。

- `config.ini`: 設定。削除すると既定値に戻ります。
- `history.json`: 文字起こしと、その要約、翻訳、修正。
- `media/`: 後で再生できるよう保存された、マイクの録音と URL からダウンロードした音声。対応する文字起こしを履歴から削除すると削除されます。

ポータブルインストールなどで別のフォルダーを使うには、環境変数 `AUDIOTEXT_CONFIG_DIR` を設定します。

:::note
アプリのフォルダーにある `config.ini` ファイルには既定の設定が入っており、変更されることはありません。
:::

## API キー

API キーと Hugging Face のトークンは、システムの資格情報ストアに保存されます。

- **macOS**: キーチェーン。
- **Windows**: 資格情報マネージャー。
- **Linux**: Secret Service（GNOME Keyring や KWallet など）。

システムにストアがない場合（デスクトップのないサーバーなど）は、設定フォルダー内の `.env` ファイルに保存され、あなたのユーザーだけが読み取れます。以前のバージョンがこのファイルに保存していたキーは、アプリの初回起動時に資格情報ストアへ移されます。

キーは各サービスの API へのリクエストに**のみ**使われます。

## 環境変数

キーと同じ名前の環境変数は、アプリで設定したキーより優先されます。

| 変数 | サービス |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI（Whisper API、要約、翻訳） |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text と Google Translate |
| `HF_TOKEN` | Hugging Face（話者の識別） |
| `AUDIOTEXT_CONFIG_DIR` | 設定と履歴のフォルダー |

## モデル

WhisperX と話者識別のモデルは初回使用時にダウンロードされ、Hugging Face によって `~/.cache/huggingface`（Windows では `%USERPROFILE%\.cache\huggingface`）にキャッシュされます。使用している容量を空けるには、このフォルダーを削除します。
