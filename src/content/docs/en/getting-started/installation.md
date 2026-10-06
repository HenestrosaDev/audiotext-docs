---
title: Installation
description: Download Audiotext for Windows, macOS or Linux and open it for the first time.
sidebar:
  order: 1
---

Audiotext is a desktop app for **Windows**, **macOS** and **Linux**. It transcribes the audio of files, YouTube videos and microphone recordings into text, and can translate, summarize and subtitle it.

## Download the app

Download the file for your system from the [latest release](https://github.com/HenestrosaDev/audiotext/releases/latest) on GitHub:

| System | File |
| --- | --- |
| Windows (64-bit) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 or later (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

The app includes everything it needs, FFmpeg included.

### Windows

Run the installer and follow its steps. It doesn't need administrator permissions. If you have an NVIDIA GPU, check **Use the NVIDIA GPU (CUDA) to transcribe faster**: the installer then downloads the GPU add-on, which makes WhisperX much faster. The installer isn't signed, so Windows SmartScreen may warn about it: click **More info** → **Run anyway**.

### macOS

Open the `.dmg` file and drag **Audiotext** to the **Applications** folder. The app isn't notarized by Apple, so macOS blocks it the first time you open it: go to **System Settings** → **Privacy & Security** and click **Open Anyway** next to the message about Audiotext. On macOS, WhisperX runs on the CPU, since CUDA isn't available. Intel Macs aren't supported, since PyTorch no longer supports them.

### Linux

Extract the archive and run the installer from a terminal:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

It installs Audiotext for your user and adds it to the applications menu (it can also be opened with the `audiotext` command). If it detects an NVIDIA GPU, it offers to download the GPU add-on. Run `./install.sh --gpu` or `./install.sh --cpu` to choose without being asked, and `./install.sh --uninstall` to uninstall it (your settings are kept).

:::tip
The GPU add-on is a download of about 2 GB on Windows and 4 GB on Linux, so it's only worth it with an NVIDIA GPU. Without it, WhisperX runs on the CPU, and the Whisper API and the Google API work the same. To switch between the CPU and the GPU versions later, install the app again and choose the other option.
:::

:::note
The first time you transcribe with **WhisperX** (the default engine), its model is downloaded. It takes from ~75 MB for `tiny` to ~3 GB for `large-v2`, so it may take a while. The next transcriptions start right away.
:::

## Requirements

- **WhisperX** runs on your computer. It works on any CPU, but it's much faster on an NVIDIA GPU with CUDA. See [Engines](/en/reference/engines/) to choose a model that fits your hardware.
- The **Whisper API** and the **Google API** run on remote servers, so they need an Internet connection but no powerful hardware.
- To transcribe from the microphone, your system must detect an input device.
- On Linux, recording and playing audio need [PortAudio](https://www.portaudio.com/) (`sudo apt install libportaudio2` on Ubuntu or Debian).

## Change the language of the interface

Audiotext uses the language of your system if it's available. To change it, open the **Preferences** (the gear at the top right) and choose a language in **General** → **Interface language**.

## Run it from the source code

If you want to run the latest code or contribute, see [Contributing](/en/help/contributing/) to set up the project with Python.

## Next steps

- [Your first transcription](/en/getting-started/first-transcription/) explains the window and the steps to transcribe.
