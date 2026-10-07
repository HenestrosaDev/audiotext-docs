---
title: インストール
description: Windows、macOS、Linux 用の Audiotext をダウンロードして、初めて起動します。
sidebar:
  order: 1
---

Audiotext は **Windows**、**macOS**、**Linux** 向けのデスクトップアプリです。ファイル、YouTube 動画、マイクの録音の音声をテキストに書き起こし、翻訳、要約、字幕化もできます。

## アプリをダウンロードする

GitHub の[最新リリース](https://github.com/HenestrosaDev/audiotext/releases/latest)から、お使いのシステム用のファイルをダウンロードします。

| システム | ファイル |
| --- | --- |
| Windows（64 ビット） | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 以降（Apple シリコン） | `Audiotext-<version>-macos-arm64.dmg` |
| Linux（x86_64） | `Audiotext-<version>-linux-x86_64.tar.gz` |

アプリには FFmpeg を含め、必要なものがすべて入っています。

### Windows

インストーラーを実行し、手順に従います。管理者権限は不要です。NVIDIA GPU がある場合は、NVIDIA GPU（CUDA）を使うオプションをオンにしてください。インストーラーが GPU アドオンをダウンロードし、WhisperX が大幅に速くなります。 インストーラーは署名されていないため、Windows SmartScreen が警告を表示することがあります。詳細情報を開き、そのまま実行することを選んでください。

### macOS

`.dmg` ファイルを開き、**Audiotext** を **アプリケーション** フォルダーにドラッグします。このアプリは Apple の公証を受けていないため、初回起動時に macOS がブロックします。**システム設定** → **プライバシーとセキュリティ** を開き、Audiotext に関するメッセージの横にある **このまま開く** をクリックしてください。macOS では CUDA が使えないため、WhisperX は CPU で動作します。 PyTorch のサポートが終了したため、Intel 搭載の Mac には対応していません。

### Linux

アーカイブを展開し、ターミナルからインストーラーを実行します。

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Audiotext をユーザー用にインストールし、アプリケーションメニューに追加します（`audiotext` コマンドでも起動できます）。NVIDIA GPU を検出すると、GPU アドオンのダウンロードを提案します。確認なしで選ぶには `./install.sh --gpu` または `./install.sh --cpu` を、アンインストールするには `./install.sh --uninstall` を実行します（設定は残ります）。

:::tip
GPU アドオンのダウンロードは Windows で約 2 GB、Linux で約 4 GB なので、NVIDIA GPU がある場合にのみ役立ちます。なくても WhisperX は CPU で動作し、Whisper API と Google API は同じように使えます。後で CPU 版と GPU 版を切り替えるには、アプリをもう一度インストールして、もう一方のオプションを選んでください。
:::

:::note
**WhisperX**（既定のエンジン）で初めて文字起こしするとき、そのモデルがダウンロードされます。サイズは `tiny` の約 75 MB から `large-v2` の約 3 GB まであるため、少し時間がかかることがあります。次回以降の文字起こしはすぐに始まります。
:::

## 動作要件

- **WhisperX** はお使いのコンピューターで動作します。どの CPU でも動きますが、CUDA 対応の NVIDIA GPU ではずっと高速です。ハードウェアに合ったモデルの選び方は[エンジン](/ja/reference/engines/)をご覧ください。
- **Whisper API** と **Google API** はリモートサーバーで動作するため、インターネット接続が必要ですが、高性能なハードウェアは不要です。
- マイクから文字起こしするには、システムが入力デバイスを認識している必要があります。
- Linux では、録音と再生に [PortAudio](https://www.portaudio.com/) が必要です（Ubuntu または Debian では `sudo apt install libportaudio2`）。

## アプリをアップデートする

新しいバージョンが公開されると、Audiotext は上部バーに **バージョン … が利用可能です** ボタンを表示します。クリックしてリリースのページを開き、お使いのシステム用のファイルをダウンロードして、初回と同じようにインストールします。Windows では新しいインストーラーを実行し、macOS では新しいアプリを **アプリケーション** フォルダーにドラッグし、Linux では新しいアーカイブの `install.sh` を実行します。以前のバージョンは置き換えられますが、設定と履歴は[ユーザー設定フォルダー](/ja/reference/files-and-data/#ユーザー設定フォルダー)に保存されているため、そのまま残ります。GPU アドオンを使っている場合は、インストール時にもう一度選んでください。

自分で新しいバージョンを確認するには、**環境設定** → **このアプリについて** → **アップデートを確認** を開きます。アプリを開いたときの確認を止めるには、**一般** → **アップデート** をオフにします。

## アプリをアンインストールする

- **Windows**: ほかのアプリと同じように、**設定** → **アプリ** からアンインストールします。
- **macOS**: **Audiotext** を **アプリケーション** フォルダーからゴミ箱にドラッグします。
- **Linux**: アーカイブのフォルダーで `./install.sh --uninstall` を実行します。フォルダーがもうない場合は、`~/.local/share/audiotext`、`~/.local/bin/audiotext`、`~/.local/share/applications/audiotext.desktop` を削除します。

設定、履歴、録音は残るので、再インストールしてもそのまま使えます。すべてを削除するには:

1. アンインストールする前に、**環境設定** → **API キー** で API キーを削除します（**変更…** をクリックして空のままにします）。API キーはシステムの資格情報ストアに保存されているためです。
2. [ユーザー設定フォルダー](/ja/reference/files-and-data/#ユーザー設定フォルダー)を削除します。
3. ダウンロードされた[モデル](/ja/reference/files-and-data/#モデル)を削除します。

## インターフェースの言語を変更する

Audiotext は、利用可能であればシステムの言語を使います。変更するには、**環境設定**（右上の歯車）を開き、**一般** → **インターフェースの言語** で言語を選びます。

## ソースコードから実行する

最新のコードを実行したい場合や開発に参加したい場合は、[コントリビュート](/ja/help/contributing/)を参照して Python でプロジェクトを準備してください。

## 次のステップ

- [最初の文字起こし](/ja/getting-started/first-transcription/)では、ウィンドウと文字起こしの手順を説明しています。
