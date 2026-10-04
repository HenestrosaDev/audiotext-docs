---
title: 要約と翻訳
description: OpenAI、Claude、Gemini、DeepSeek、Mistral、Grok、Ollama、DeepL、Google Translate で文字起こしを要約・翻訳します。
sidebar:
  order: 4
---

文字起こしができたら、Audiotext は言語モデルや翻訳サービスでそれを要約・翻訳できます。どちらも履歴に保存されるので、生成は一度だけです。

## 要約

文字起こしの **要約** モードを開き、**要約を生成** をクリックします。言語モデルが次の内容を書きます。

- 文字起こしの**要約**。
- **要点**。
- タイムスタンプがある場合は**チャプター**。チャプターをクリックすると、その開始位置から音声を再生します。

**再生成** で書き直せます（別のモデルを選んだ後など）。**コピー** でコピーでき、Markdown と Word の[エクスポート](/ja/guides/transcript/#コピーとエクスポート)にも含まれます。

プロバイダーの API キーが設定されていない場合、**要約** モードで設定を促されます。非常に長い文字起こし（約 3 時間以上の発話）は、冒頭部分だけが要約されます。

![要点とチャプターを含む文字起こしの要約](/screenshots/summary.png)

## 翻訳

**翻訳** をクリックし、**翻訳先** で言語を、**プロバイダー** を選んで確定します。翻訳は元のテキストの右側のパネルに表示されます。

- 文字起こしにタイムスタンプがある場合は文ごとに翻訳されるため、翻訳でもタイムスタンプが保たれます。再生中の文がハイライトされ、文をクリックすると再生されます。
- プレーンテキストを編集した場合は、編集後のテキストがタイムスタンプなしで翻訳されます。
- 2 つのテキストの間のハンドルをドラッグするとサイズを変えられ、ダブルクリックで元に戻ります。
- **翻訳** ボタンからは、**翻訳を非表示**、**別の言語に翻訳…**、**翻訳を削除** もできます。

:::tip
プロバイダーを使わずに別の言語で直接文字起こしを得るには、文字起こし中に翻訳することもできます。[言語](/ja/guides/transcription-settings/#言語)をご覧ください。
:::

## プロバイダー

プロバイダーは **環境設定** → **AI** で、要約と翻訳それぞれに選びます。

| プロバイダー | 既定のモデル | API キー |
| --- | --- | --- |
| OpenAI（既定） | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude（Anthropic） | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini（Google） | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama（ローカル） | `llama3.2` | 不要 |

**モデル** を空にするとプロバイダーの既定のモデルを使います。プロバイダーのほかのモデル名を入力することもできます（例: `claude-sonnet-5-5`、`deepseek-reasoner`）。

翻訳には次のサービスも使えます。

- **DeepL**: [DeepL の API キー](https://www.deepl.com/your-account/keys)が必要です。無料プランのキーも使えます。
- **Google Translate**: Cloud Translation API を有効にした Google の API キーを使います。

### Ollama

[Ollama](https://ollama.com) は、API キーなしで、テキストをどこにも送らずに、お使いのコンピューターでモデルを実行します。インストールしてモデルをダウンロードし（例: `ollama pull llama3.2`）、プロバイダーに **Ollama** を選びます。既定のアドレスで動いていない場合は、**環境設定** → **AI** の **サーバー URL** を変更します（既定は `http://localhost:11434`）。

:::note
各プロバイダーは API の利用料金を請求します。これについて Audiotext は責任を負いません。API キーはシステムの資格情報ストアに保存されます。[ファイルとデータ](/ja/reference/files-and-data/)をご覧ください。
:::
