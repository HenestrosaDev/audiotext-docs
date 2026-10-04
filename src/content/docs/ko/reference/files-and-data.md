---
title: 파일과 데이터
description: Audiotext가 설정, 기록, 녹음, API 키를 저장하는 위치와 읽는 환경 변수.
sidebar:
  order: 5
---

Audiotext는 데이터를 내 컴퓨터에 보관합니다. 원격 엔진(Whisper API 또는 Google API)이나 Ollama 이외의 AI 제공자를 사용하지 않는 한 아무것도 전송되지 않습니다.

## 사용자 설정 폴더

설정, 기록, 녹음은 사용자 설정 폴더에 저장되므로 업데이트 후에도 유지됩니다.

| 시스템 | 폴더 |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext`(또는 `$XDG_CONFIG_HOME/audiotext`) |

들어 있는 항목:

- `config.ini`: 설정. 삭제하면 기본값으로 돌아갑니다.
- `history.json`: 받아쓰기와 그 요약, 번역, 수정 내용.
- `media/`: 나중에 재생할 수 있도록 보관하는 마이크 녹음과 URL에서 다운로드한 오디오. 해당 받아쓰기를 기록에서 삭제하면 함께 삭제됩니다.

휴대용 설치 등으로 다른 폴더를 쓰려면 환경 변수 `AUDIOTEXT_CONFIG_DIR`을 설정하세요.

:::note
앱 폴더의 `config.ini` 파일에는 기본 설정이 들어 있으며 절대 수정되지 않습니다.
:::

## API 키

API 키와 Hugging Face 토큰은 시스템의 자격 증명 저장소에 보관됩니다.

- **macOS**: 키체인.
- **Windows**: 자격 증명 관리자.
- **Linux**: Secret Service(예: GNOME Keyring, KWallet).

시스템에 저장소가 없으면(예: 데스크톱이 없는 서버) 설정 폴더의 `.env` 파일에 저장되며, 내 사용자만 읽을 수 있습니다. 이전 버전이 이 파일에 저장한 키는 앱을 처음 열 때 자격 증명 저장소로 옮겨집니다.

키는 각 서비스의 API에 요청을 보낼 때**만** 사용됩니다.

## 환경 변수

키와 이름이 같은 환경 변수는 앱에서 설정한 키보다 우선합니다.

| 변수 | 서비스 |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI(Whisper API, 요약, 번역) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text와 Google Translate |
| `HF_TOKEN` | Hugging Face(화자 식별) |
| `AUDIOTEXT_CONFIG_DIR` | 설정과 기록 폴더 |

## 모델

WhisperX와 화자 식별 모델은 처음 사용할 때 다운로드되며 Hugging Face가 `~/.cache/huggingface`(Windows에서는 `%USERPROFILE%\.cache\huggingface`)에 캐시합니다. 차지하는 공간을 비우려면 이 폴더를 삭제하세요.
