---
title: 環境設定
description: 環境設定ウィンドウのすべての設定をタブごとに説明します。
sidebar:
  order: 2
---

**環境設定** には、文字起こしごとに変わらない設定があります。ウィンドウ右上の歯車から開きます。変更は自動で保存されます。

## 一般

- **外観**: **システム**（システムに従う）、**ライト**、**ダーク**。
- **インターフェースの言語**: Audiotext の言語、または **システムの言語**。文字起こしの実行中でなければ変更できます。[利用できる言語](/ja/reference/formats-and-languages/#インターフェースの言語)をご覧ください。
- **通知**: 文字起こしが完了したときにシステムの通知を表示します（フォルダの場合は、すべてのファイルが完了したとき。監視中のフォルダの場合は、新しいファイルが完了するたび）。既定でオンです。macOS では **スクリプトエディタ**、Windows では **Windows PowerShell** からの通知として表示されるため、システムの設定でこれらのアプリの通知を許可または停止します。Linux では `notify-send`（`libnotify-bin` または `libnotify` パッケージ）が必要です。

## AI

[要約と翻訳](/ja/guides/summary-and-translation/)のプロバイダーです。

- **要約** → **プロバイダー** と **モデル**。
- **翻訳** → **プロバイダー** と **モデル**。DeepL と Google Translate には選べるモデルはありません。
- **Ollama** → **サーバー URL**: Ollama のアドレス。既定は `http://localhost:11434`。

**モデル** を空にするとプロバイダーの既定のモデルを使います。プロバイダーの横のボタンで、その API キーを設定します。

## API キー

各サービスのキーです。**設定…** をクリックしてキーを入力するか、**変更…** で置き換えます（空にすると削除されます）。キーはシステムの資格情報ストアに保存されます。

| キー | 用途 |
| --- | --- |
| OpenAI の API キー | Whisper API、および OpenAI での要約と翻訳 |
| Anthropic の API キー | Claude での要約と翻訳 |
| DeepSeek の API キー | DeepSeek での要約と翻訳 |
| Gemini の API キー | Gemini（Google AI Studio）での要約と翻訳 |
| Mistral の API キー | Mistral での要約と翻訳 |
| xAI の API キー | Grok での要約と翻訳 |
| DeepL の API キー | DeepL での翻訳（無料プランのキーも使えます） |
| Google の API キー | 無料枠を超える Google Speech-to-Text と、Google Translate（Cloud Translation API） |
| Hugging Face のトークン | WhisperX での話者の識別 |

:::caution
各プロバイダーは API の利用料金を請求します。これについて Audiotext は責任を負いません。新しいキーで OpenAI がエラー `429` を返す場合は、[トラブルシューティング](/ja/help/troubleshooting/#whisper-api-がエラー-429-を返す)をご覧ください。
:::

## WhisperX

**計算タイプ**、**バッチサイズ**、**CPU を使用**。[WhisperX の詳細オプション](/ja/reference/engines/#詳細オプション)をご覧ください。

## 字幕

WhisperX でフォルダーを文字起こしするときに保存される `.srt` と `.vtt` ファイルのオプションです。

- **単語をハイライト**: 各単語を話されたタイミングで下線表示します。既定ではオフです。
- **最大行数**: 1 つの字幕の最大行数。既定は `2`。
- **1 行の最大文字数**: 改行するまでの 1 行の最大文字数。既定は `42`。

## Whisper API

**温度** と **単語のタイムスタンプ**。[Whisper API のオプション](/ja/reference/engines/#オプション)をご覧ください。

## このアプリについて

Audiotext のバージョンと、このドキュメント、GitHub のソースコード、寄付ページへのリンクです。
