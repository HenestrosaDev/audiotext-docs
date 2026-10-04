---
title: 요약과 번역
description: OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL, Google Translate로 받아쓰기를 요약하고 번역합니다.
sidebar:
  order: 4
---

받아쓰기가 완료되면 Audiotext는 언어 모델이나 번역 서비스로 요약하고 번역할 수 있습니다. 둘 다 기록에 저장되므로 한 번만 생성됩니다.

## 요약

받아쓰기의 **요약** 모드를 열고 **요약 생성**을 클릭합니다. 언어 모델이 다음을 작성합니다.

- 받아쓰기의 **요약**.
- **핵심 내용**.
- 타임스탬프가 있으면 **챕터**. 챕터를 클릭하면 그 시작 지점부터 오디오를 재생합니다.

**다시 생성**은 요약을 다시 씁니다(예: 다른 모델을 고른 뒤). **복사**로 복사할 수 있고, Markdown과 Word [내보내기](/ko/guides/transcript/#복사와-내보내기)에도 포함됩니다.

제공자의 API 키가 설정되지 않았다면 **요약** 모드에서 설정하도록 안내합니다. 매우 긴 받아쓰기(약 3시간 이상의 발화)는 앞부분만 요약합니다.

![핵심 요점과 챕터가 포함된 전사본 요약](/screenshots/summary.png)

## 번역

**번역**을 클릭하고 **번역할 언어**와 **제공자**를 고른 다음 확인합니다. 번역은 원본 텍스트 오른쪽 패널에 표시됩니다.

- 받아쓰기에 타임스탬프가 있으면 문장별로 따로 번역되어 번역에도 타임스탬프가 유지됩니다. 재생 중인 문장이 강조되고, 문장을 클릭하면 재생됩니다.
- 일반 텍스트를 편집했다면 편집한 텍스트가 타임스탬프 없이 번역됩니다.
- 두 텍스트 사이의 핸들을 끌어 크기를 조절하고, 더블클릭하면 원래 크기로 돌아갑니다.
- **번역** 버튼에서 **번역 숨기기**, **다른 언어로 번역…**, **번역 삭제**도 할 수 있습니다.

:::tip
제공자 없이 다른 언어로 바로 받아쓰기를 얻으려면 받아쓰는 동안 번역할 수도 있습니다. [언어](/ko/guides/transcription-settings/#언어)를 참고하세요.
:::

## 제공자

제공자는 **환경설정** → **AI**에서 요약과 번역 각각에 대해 고릅니다.

| 제공자 | 기본 모델 | API 키 |
| --- | --- | --- |
| OpenAI(기본값) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude(Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini(Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama(로컬) | `llama3.2` | 필요 없음 |

**모델**을 비워 두면 제공자의 기본 모델을 사용합니다. 제공자의 다른 모델 이름을 입력할 수도 있습니다(예: `claude-sonnet-5-5`, `deepseek-reasoner`).

번역은 다음 서비스로도 할 수 있습니다.

- **DeepL**: [DeepL API 키](https://www.deepl.com/your-account/keys)가 필요합니다. 무료 요금제 키도 작동합니다.
- **Google Translate**: Cloud Translation API가 활성화된 Google API 키를 사용합니다.

### Ollama

[Ollama](https://ollama.com)는 API 키 없이, 텍스트를 어디에도 보내지 않고 내 컴퓨터에서 모델을 실행합니다. 설치하고 모델을 다운로드한 다음(예: `ollama pull llama3.2`) 제공자로 **Ollama**를 고르세요. 기본 주소에서 실행되지 않는다면 **환경설정** → **AI**의 **서버 URL**을 바꾸세요(기본값 `http://localhost:11434`).

:::note
각 제공자는 API 사용 요금을 청구하며, Audiotext는 이에 대해 책임지지 않습니다. API 키는 시스템의 자격 증명 저장소에 보관됩니다. [파일과 데이터](/ko/reference/files-and-data/)를 참고하세요.
:::
