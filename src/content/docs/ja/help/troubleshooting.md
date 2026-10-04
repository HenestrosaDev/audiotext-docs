---
title: トラブルシューティング
description: Audiotext でよくある問題の解決方法。
sidebar:
  order: 1
---

## WhisperX での最初の文字起こしに時間がかかる

モデルは初回使用時にダウンロードされるため、接続状況とモデルのサイズ（最大約 3 GB）によっては数分かかることがあります。進捗表示で読み込み中かどうかがわかります。モデルはオプションが変わらない限りメモリに残るので、次回以降の文字起こしはすぐに始まります。

## WhisperX が `CUDA out of memory` で失敗する

GPU のメモリが設定に対して不足しています。次の順に試してください。

1. **環境設定** → **WhisperX** で **バッチサイズ** を下げます（例: `4`）。
2. より小さいモデルを使います（例: `small` や `base`）。
3. より軽い **計算タイプ** を使います（例: `int8`）。

最後の 2 つは品質が下がることがあります。各モデルに必要なメモリは[エンジン](/ja/reference/engines/#モデル)をご覧ください。

## 文字起こしに時間がかかりすぎる

WhisperX の速度はハードウェアに左右されるため、性能の低い CPU ではすぐに結果が出ることは期待できません。`small` などの小さいモデル、GPU での `large-v3-turbo`、計算タイプ `int8` を試してください。リモートサーバーで動作する **Whisper API** や **Google API** を使う方法もあります。

## Whisper API がエラー 429 を返す

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

OpenAI アカウントのクレジットがなくなったか、初めて API を使う前に入金が必要です（無料クレジットがある場合でも）。OpenAI アカウントの [Billing](https://platform.openai.com/settings/organization/billing/overview) でクレジットを購入してください。アカウントが有効になるまで最大 10 分かかることがあります。

初めて入金する前に API キーを作成していて、10 分経ってもエラーが続く場合は、新しいキーを作成して **環境設定** → **API キー** で設定してください。

## 話者を識別できない

話者の識別には、Hugging Face のトークンとモデルの利用条件への同意が必要です。次を確認してください。

- 同じアカウントで [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) の利用条件に同意していること。
- トークンが `Read` ロールで、**環境設定** → **API キー** で設定されていること。

[話者の識別](/ja/guides/transcription-settings/#話者の識別)をご覧ください。

## マイクが見つからない、または何も録音されない

- マイクが接続されていることを確認し、マイク一覧の横にある更新ボタンをクリックします。
- macOS では **システム設定** → **プライバシーとセキュリティ** → **マイク** で、Windows では **設定** → **プライバシー** → **マイク** で Audiotext を許可します。
- レベルメーターに **音がありません** と表示される場合は、一覧から別のマイクを選ぶか、ミュートになっていないか確認します。

## 文字起こしの音声を再生できない

ソースファイルが移動または削除されています。テキストは残りますが、音声は元のファイルからしか再生できません。マイクの録音と URL の音声は Audiotext が保存しています。

## YouTube 動画をダウンロードできない

URL が正しく、動画が公開されていることを確認してください。YouTube は頻繁に変わるため、それでも失敗する場合は Audiotext の新しいバージョンがないか確認してください。

## フォルダーのファイルが 1 つも文字起こしされない

すでに文字起こしがあるファイルはスキップされます。もう一度文字起こしするには、**既存のファイルを上書き** をオンにします。また、フォルダーに[対応ファイル](/ja/reference/formats-and-languages/)が含まれている必要があります。

## Google API が言語を求める

Google API は言語を検出できません。設定で **音声の言語** を選んでください。

## その他

[issues](https://github.com/HenestrosaDev/audiotext/issues) を検索するか、[ディスカッション](https://github.com/HenestrosaDev/audiotext/discussions)で質問してください。バグを見つけた場合は、システム、Audiotext のバージョン、再現手順を添えて[報告](https://github.com/HenestrosaDev/audiotext/issues/new/choose)してください。
