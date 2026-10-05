---
title: 설치
description: Windows, macOS, Linux용 Audiotext를 다운로드하고 처음 실행합니다.
sidebar:
  order: 1
---

Audiotext는 **Windows**, **macOS**, **Linux**용 데스크톱 앱입니다. 파일, YouTube 동영상, 마이크 녹음의 오디오를 텍스트로 받아쓰고, 번역, 요약, 자막 생성도 할 수 있습니다.

## 앱 다운로드

GitHub의 [최신 릴리스](https://github.com/HenestrosaDev/audiotext/releases/latest)에서 사용하는 시스템용 파일을 다운로드하세요.

| 시스템 | 파일 |
| --- | --- |
| Windows(64비트) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 이상(Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux(x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

앱에는 FFmpeg를 포함해 필요한 모든 것이 들어 있습니다.

### Windows

설치 프로그램을 실행하고 단계를 따르세요. 관리자 권한이 필요하지 않습니다. NVIDIA GPU가 있다면 NVIDIA GPU(CUDA)를 사용하는 옵션을 선택하세요. 설치 프로그램이 GPU 애드온을 다운로드해 WhisperX가 훨씬 빨라집니다. 설치 프로그램에 서명이 없으므로 Windows SmartScreen이 경고를 표시할 수 있습니다. 추가 정보를 열고 그래도 실행하도록 선택하세요.

### macOS

`.dmg` 파일을 열고 **Audiotext**를 **응용 프로그램** 폴더로 끌어다 놓으세요. 이 앱은 Apple의 공증을 받지 않았으므로 처음 열 때 macOS가 차단합니다. **시스템 설정** → **개인정보 보호 및 보안**으로 이동해 Audiotext 관련 메시지 옆의 **그래도 열기**를 클릭하세요. macOS에서는 CUDA를 사용할 수 없으므로 WhisperX가 CPU에서 실행됩니다. PyTorch가 더 이상 지원하지 않으므로 Intel Mac은 지원되지 않습니다.

### Linux

압축을 풀고 터미널에서 설치 프로그램을 실행하세요.

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Audiotext를 현재 사용자용으로 설치하고 응용 프로그램 메뉴에 추가합니다(`audiotext` 명령으로도 열 수 있습니다). NVIDIA GPU를 감지하면 GPU 애드온 다운로드를 제안합니다. 묻지 않고 선택하려면 `./install.sh --gpu` 또는 `./install.sh --cpu`를, 제거하려면 `./install.sh --uninstall`을 실행하세요(설정은 유지됩니다).

:::tip
GPU 애드온은 Windows에서 약 2 GB, Linux에서 약 4 GB를 내려받으므로 NVIDIA GPU가 있을 때만 의미가 있습니다. 애드온 없이도 WhisperX는 CPU에서 실행되며, Whisper API와 Google API는 똑같이 작동합니다. 나중에 CPU 버전과 GPU 버전을 바꾸려면 앱을 다시 설치하고 다른 옵션을 선택하세요.
:::

:::note
**WhisperX**(기본 엔진)로 처음 받아쓸 때 모델이 다운로드됩니다. 크기는 `tiny`의 약 75 MB부터 `large-v2`의 약 3 GB까지이므로 시간이 조금 걸릴 수 있습니다. 이후 받아쓰기는 바로 시작됩니다.
:::

## 요구 사항

- **WhisperX**는 내 컴퓨터에서 실행됩니다. 어떤 CPU에서도 작동하지만 CUDA를 지원하는 NVIDIA GPU에서 훨씬 빠릅니다. 하드웨어에 맞는 모델을 고르려면 [엔진](/ko/reference/engines/)을 참고하세요.
- **Whisper API**와 **Google API**는 원격 서버에서 실행되므로 인터넷 연결이 필요하지만 고성능 하드웨어는 필요하지 않습니다.
- 마이크에서 받아쓰려면 시스템이 입력 장치를 인식해야 합니다.
- Linux에서 녹음과 재생에는 [PortAudio](https://www.portaudio.com/)가 필요합니다(Ubuntu 또는 Debian에서는 `sudo apt install libportaudio2`).

## 인터페이스 언어 변경

Audiotext는 사용 가능한 경우 시스템 언어를 사용합니다. 바꾸려면 **환경설정**(오른쪽 위의 톱니바퀴)을 열고 **일반** → **인터페이스 언어**에서 언어를 고르세요. 진행 중인 받아쓰기가 없을 때 바꿀 수 있습니다.

## 소스 코드에서 실행

최신 코드를 실행하거나 기여하고 싶다면 [기여하기](/ko/help/contributing/)를 참고해 Python으로 프로젝트를 준비하세요.

## 다음 단계

- [첫 받아쓰기](/ko/getting-started/first-transcription/)에서 창 구성과 받아쓰기 단계를 설명합니다.
