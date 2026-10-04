---
title: 엔진
description: WhisperX, Whisper API, Google API를 비교하고 모델과 고급 옵션을 고릅니다.
sidebar:
  order: 1
---

Audiotext는 세 가지 엔진 중 하나로 받아쓰며, 엔진은 [받아쓰기 설정](/ko/guides/transcription-settings/#엔진)의 **엔진** 카드에서 고릅니다.

| | WhisperX | Whisper API | Google API |
| --- | --- | --- | --- |
| 실행 위치 | 내 컴퓨터 | OpenAI 서버 | Google 서버 |
| 인터넷 | 모델 다운로드 시에만 | 필요 | 필요 |
| 비용 | 무료, 무제한 | 유료 | 무료 등급(월 60분) 또는 API 키로 유료 |
| 언어 감지 | ✓ | ✓ | ✗ |
| 번역 | ✓ | ✓ | ✗ |
| 타임스탬프 | ✓ | 모델에 따라 다름 | ✗ |
| 화자 식별 | ✓(Hugging Face 토큰) | `gpt-4o-transcribe-diarize` | ✗ |
| 단어별 타이밍 | ✓ | `whisper-1` | ✗ |
| 실시간 텍스트 | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX)는 내 컴퓨터에서 실행되는 OpenAI Whisper의 빠른 구현이라 오디오가 컴퓨터 밖으로 나가지 않습니다. CPU에서 실행되며, CUDA를 지원하는 NVIDIA GPU에서는 훨씬 빠릅니다.

### 모델

큰 모델일수록 정확하지만 느리고 메모리를 더 많이 씁니다. 모델은 처음 사용할 때 다운로드됩니다.

| 모델 | 매개변수 | 필요한 VRAM |
| :---: | :---: | :---: |
| `tiny`, `tiny.en` | 39 M | 약 1 GB |
| `base`, `base.en` | 74 M | 약 1 GB |
| `small`, `small.en` | 244 M | 약 2 GB |
| `distil-small.en` | 166 M | 약 2 GB |
| `medium`, `medium.en` | 769 M | 약 5 GB |
| `distil-medium.en` | 394 M | 약 3 GB |
| `large-v1`, `large-v2`, `large-v3` | 1550 M | 8 GB 미만 |
| `large-v3-turbo` | 809 M | 약 6 GB |
| `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5` | 756 M | 약 5 GB |

- **`large-v2`**가 기본값입니다. `large-v3`는 특히 일본어 같은 일부 언어에서 환각과 텍스트 반복이 더 잦고 구두점을 더 많이 빠뜨리기 때문입니다.
- **`large-v3-turbo`**는 `large-v3`를 경량화한 버전으로 훨씬 빠르면서 정확도는 거의 같습니다.
- 이름이 **`.en`**으로 끝나는 모델(`tiny.en`, `base.en`, `small.en`, `medium.en`)과 **증류** 모델(`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`)은 영어만 받아씁니다. 같은 크기의 다국어 모델보다 빠릅니다.

:::tip
Audiotext를 빠르게 써 보려면 `tiny`나 `small`을 고르세요. 최고 품질을 원한다면 GPU에서 `large-v2`나 `large-v3-turbo`를 사용하세요.
:::

### 고급 옵션

**환경설정** → **WhisperX**에 있습니다. 문제가 있거나 무엇을 하는지 알 때만 바꾸세요. GPU 메모리가 부족하면 시스템이 멈출 수 있습니다.

- **연산 유형**: 모델 숫자의 정밀도입니다. `float16`은 GPU에서 더 빠릅니다(CUDA 사용 시 기본값). `int8`은 메모리를 덜 쓰며 CPU의 기본값입니다. 많은 CPU가 `float16`을 효율적으로 처리하지 못하기 때문입니다. `float32`는 가장 정밀하며 VRAM이 8 GB를 넘는 GPU용입니다.
- **배치 크기**: 오디오의 몇 부분을 동시에 처리할지 정합니다(기본값 `8`). 품질은 그대로이고 속도만 달라집니다. 메모리가 부족하면 낮추세요. `16`까지 권장합니다.
- **CPU 사용**: WhisperX를 CPU에서 실행합니다. CUDA GPU를 찾지 못하면 항상 켜집니다.

## Whisper API

[OpenAI 음성-텍스트 API](https://platform.openai.com/docs/guides/speech-to-text)를 사용합니다. WhisperX가 원활히 실행되지 않는 컴퓨터를 위한 것이며 OpenAI API 키가 필요합니다([API 키](/ko/reference/preferences/#api-키) 참고).

| 모델 | 타임스탬프 | 화자 | 참고 |
| --- | :---: | :---: | --- |
| `whisper-1`(기본값) | ✓ | ✗ | 문장 단위로 재생하고 자막을 만들 수 있습니다. 영어로 번역합니다. |
| `gpt-transcribe` | ✗ | ✗ | 더 정확하지만 타임스탬프가 없습니다. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | 화자를 식별합니다. 키워드와 설명을 사용하지 않습니다. |

영어 번역은 번역할 수 있는 유일한 모델인 `whisper-1`이 항상 맡습니다.

API가 25 MB보다 큰 파일을 거부하므로, 긴 오디오는 단어가 잘리지 않도록 무음 구간에서 최대 10분 단위로 나뉩니다. `whisper-1`에서는 각 조각의 끝부분을 다음 조각의 맥락으로 넘기고, `gpt-4o-transcribe-diarize`에서는 각 화자의 목소리 샘플을 다음 조각과 함께 보내 라벨을 유지합니다.

### 옵션

- **응답 형식**(출력 카드, 폴더용): `text`(기본값), `json`, `verbose_json`, `srt`, `vtt`. 자막과 `verbose_json`에는 타임스탬프를 반환하는 모델이 필요합니다.
- **온도**(환경설정 → Whisper API): 0과 1 사이. 0.8 같은 높은 값은 결과를 더 무작위로, 0.2 같은 낮은 값은 더 일관되게 만듭니다. 0(기본값)이면 필요할 때 모델이 자동으로 높입니다.
- **단어 타임스탬프**(환경설정 → Whisper API): 재생 중 강조할 수 있도록 `whisper-1`이 각 단어의 타임스탬프도 반환할지 여부입니다. 시간이 더 걸립니다. 기본적으로 켜져 있습니다.

## Google API

[Google Speech-to-Text API](https://cloud.google.com/speech-to-text)를 사용합니다. 문장에 구두점을 넣지 않으며(Audiotext가 추가합니다) 품질이 Whisper보다 낮아 받아쓰기를 자주 고쳐야 합니다. 언어를 감지하거나 번역할 수 없으며, 타임스탬프 없는 일반 텍스트를 반환합니다.

API 키가 없으면 월 60분으로 제한된 무료 등급을 사용합니다. 늘리려면 Google API 키를 설정하세요. Google은 사용 요금을 청구하며, Audiotext는 이에 대해 책임지지 않습니다.
