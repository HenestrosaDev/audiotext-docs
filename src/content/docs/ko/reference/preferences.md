---
title: 환경설정
description: 환경설정 창의 모든 설정을 탭별로 설명합니다.
sidebar:
  order: 2
---

**환경설정**에는 받아쓰기마다 바뀌지 않는 설정이 있습니다. 창 오른쪽 위의 톱니바퀴로 엽니다. 변경 사항은 자동으로 저장됩니다.

## 일반

- **모양**: **시스템**(시스템 설정을 따름), **밝게**, **어둡게**.
- **인터페이스 언어**: Audiotext의 언어 또는 **시스템 언어**. 진행 중인 받아쓰기가 없을 때 바꿀 수 있습니다. [사용 가능한 언어](/ko/reference/formats-and-languages/#인터페이스-언어)를 참고하세요.
- **알림**: 받아쓰기가 완료되면 시스템 알림을 표시합니다(폴더는 모든 파일이 완료되었을 때, 감시 중인 폴더는 새 파일이 완료될 때마다). 기본적으로 켜져 있습니다. macOS에서는 **스크립트 편집기**, Windows에서는 **Windows PowerShell**의 알림으로 표시되므로 시스템 설정에서 해당 앱의 알림을 허용하거나 끕니다. Linux에서는 `notify-send`(`libnotify-bin` 또는 `libnotify` 패키지)가 필요합니다.

## AI

[요약과 번역](/ko/guides/summary-and-translation/)의 제공자입니다.

- **요약** → **제공자**와 **모델**.
- **번역** → **제공자**와 **모델**. DeepL과 Google Translate에는 고를 모델이 없습니다.
- **Ollama** → **서버 URL**: Ollama의 주소이며 기본값은 `http://localhost:11434`입니다.

**모델**을 비워 두면 제공자의 기본 모델을 사용합니다. 제공자 옆 버튼으로 해당 API 키를 설정합니다.

## API 키

각 서비스의 키입니다. **설정…**을 클릭해 입력하거나 **변경…**을 클릭해 바꿉니다(비워 두면 삭제됩니다). 키는 시스템의 자격 증명 저장소에 보관됩니다.

| 키 | 용도 |
| --- | --- |
| OpenAI API 키 | Whisper API, OpenAI로 요약·번역 |
| Anthropic API 키 | Claude로 요약·번역 |
| DeepSeek API 키 | DeepSeek로 요약·번역 |
| Gemini API 키 | Gemini(Google AI Studio)로 요약·번역 |
| Mistral API 키 | Mistral로 요약·번역 |
| xAI API 키 | Grok으로 요약·번역 |
| DeepL API 키 | DeepL로 번역(무료 요금제 키도 작동) |
| Google API 키 | 무료 등급을 넘는 Google Speech-to-Text, Google Translate(Cloud Translation API) |
| Hugging Face 토큰 | WhisperX로 화자 식별 |

:::caution
각 제공자는 API 사용 요금을 청구하며, Audiotext는 이에 대해 책임지지 않습니다. 새 키로 OpenAI가 `429` 오류를 반환한다면 [문제 해결](/ko/help/troubleshooting/#whisper-api가-429-오류를-반환함)을 참고하세요.
:::

## WhisperX

**연산 유형**, **배치 크기**, **CPU 사용**. [WhisperX 고급 옵션](/ko/reference/engines/#고급-옵션)을 참고하세요.

## 자막

WhisperX로 폴더를 받아쓸 때 저장되는 `.srt`와 `.vtt` 파일의 옵션입니다.

- **단어 강조**: 각 단어를 말하는 순간 밑줄로 표시합니다. 기본적으로 꺼져 있습니다.
- **최대 줄 수**: 자막 하나의 최대 줄 수. 기본값 `2`.
- **최대 줄 너비**: 줄을 바꾸기 전 한 줄의 최대 글자 수. 기본값 `42`.

## Whisper API

**온도**와 **단어 타임스탬프**. [Whisper API 옵션](/ko/reference/engines/#옵션)을 참고하세요.

## 정보

Audiotext 버전과 이 문서, GitHub 소스 코드, 후원 페이지로 가는 링크입니다.
