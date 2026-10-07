---
title: 安装
description: 下载适用于 Windows、macOS 或 Linux 的 Audiotext，并首次打开它。
sidebar:
  order: 1
---

Audiotext 是一款适用于 **Windows**、**macOS** 和 **Linux** 的桌面应用。它能把文件、YouTube 视频和麦克风录音中的语音转写为文字，还能翻译、生成摘要和制作字幕。

## 下载应用

从 GitHub 上的[最新版本](https://github.com/HenestrosaDev/audiotext/releases/latest)下载适用于你的系统的文件：

| 系统 | 文件 |
| --- | --- |
| Windows（64 位） | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 或更高版本（Apple 芯片） | `Audiotext-<version>-macos-arm64.dmg` |
| Linux（x86_64） | `Audiotext-<version>-linux-x86_64.tar.gz` |

应用已包含所需的一切，包括 FFmpeg。

### Windows

运行安装程序并按步骤操作。不需要管理员权限。如果你有 NVIDIA GPU，请勾选使用 NVIDIA GPU（CUDA）的选项：安装程序会下载 GPU 附加组件，让 WhisperX 快得多。 安装程序未签名，因此 Windows SmartScreen 可能会发出警告：展开更多信息，然后选择仍要运行。

### macOS

打开 `.dmg` 文件，将 **Audiotext** 拖到**应用程序**文件夹。该应用未经 Apple 公证，因此首次打开时 macOS 会阻止它：前往**系统设置** → **隐私与安全性**，点击 Audiotext 相关提示旁的**仍要打开**。在 macOS 上没有 CUDA，因此 WhisperX 在 CPU 上运行。 由于 PyTorch 已不再支持 Intel 芯片的 Mac，因此不支持此类电脑。

### Linux

解压归档文件，然后在终端中运行安装程序：

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

它会为当前用户安装 Audiotext 并添加到应用程序菜单（也可以用 `audiotext` 命令打开）。如果检测到 NVIDIA GPU，它会提示下载 GPU 附加组件。运行 `./install.sh --gpu` 或 `./install.sh --cpu` 可直接选择而不询问，运行 `./install.sh --uninstall` 可卸载（设置会保留）。

:::tip
GPU 附加组件在 Windows 上约 2 GB，在 Linux 上约 4 GB，因此只有在拥有 NVIDIA GPU 时才值得下载。没有它时，WhisperX 在 CPU 上运行，Whisper API 和 Google API 照常工作。之后如需在 CPU 版本和 GPU 版本之间切换，请重新安装应用并选择另一个选项。
:::

:::note
首次使用 **WhisperX**（默认引擎）转写时，会下载其模型。大小从 `tiny` 的约 75 MB 到 `large-v2` 的约 3 GB 不等，因此可能需要一些时间。之后的转写会立即开始。
:::

## 系统要求

- **WhisperX** 在你的电脑上运行。它可以在任何 CPU 上运行，但在支持 CUDA 的 NVIDIA GPU 上要快得多。请参阅[引擎](/zh-cn/reference/engines/)，选择适合你硬件的模型。
- **Whisper API** 和 **Google API** 在远程服务器上运行，因此需要联网，但不需要高性能硬件。
- 要从麦克风转写，系统必须能识别输入设备。
- 在 Linux 上，录音和播放需要 [PortAudio](https://www.portaudio.com/)（在 Ubuntu 或 Debian 上运行 `sudo apt install libportaudio2`）。

## 更新应用

新版本发布后，Audiotext 会在顶部栏显示**版本 … 可用**按钮。点击它打开发布页面，下载适用于你系统的文件，然后像第一次一样安装：在 Windows 上运行新的安装程序，在 macOS 上将新应用拖到**应用程序**文件夹，在 Linux 上运行新压缩包中的 `install.sh`。旧版本会被替换，而你的设置和历史记录会保留，因为它们保存在你的[用户配置文件夹](/zh-cn/reference/files-and-data/#用户配置文件夹)中。如果你使用 GPU 附加组件，请在安装时再次选择它。

要自行检查新版本，请打开**偏好设置** → **关于** → **检查更新**。要在打开应用时不再检查，请关闭**常规** → **更新**。

## 卸载应用

- **Windows**：和其他应用一样，在**设置** → **应用**中卸载。
- **macOS**：将 **Audiotext** 从**应用程序**文件夹拖到废纸篓。
- **Linux**：在压缩包的文件夹中运行 `./install.sh --uninstall`。如果该文件夹已不在，请删除 `~/.local/share/audiotext`、`~/.local/bin/audiotext` 和 `~/.local/share/applications/audiotext.desktop`。

你的设置、历史记录和录音会保留，因此重新安装后它们仍然存在。要删除所有内容：

1. 卸载前，在**偏好设置** → **API 密钥**中删除你的 API 密钥（点击**更改…**并留空），因为它们保存在系统的凭据存储中。
2. 删除你的[用户配置文件夹](/zh-cn/reference/files-and-data/#用户配置文件夹)。
3. 删除已下载的[模型](/zh-cn/reference/files-and-data/#模型)。

## 更改界面语言

如果可用，Audiotext 会使用系统语言。要更改，请打开**偏好设置**（右上角的齿轮），在**常规** → **界面语言**中选择语言。

## 从源代码运行

如果你想运行最新代码或参与贡献，请参阅[参与贡献](/zh-cn/help/contributing/)，用 Python 搭建项目。

## 下一步

- [你的第一次转写](/zh-cn/getting-started/first-transcription/)介绍窗口和转写步骤。
