---
title: 문제 해결
description: Audiotext에서 자주 생기는 문제의 해결 방법.
sidebar:
  order: 1
---

## WhisperX의 첫 받아쓰기가 오래 걸림

모델은 처음 사용할 때 다운로드되므로 연결 상태와 모델 크기(최대 약 3 GB)에 따라 몇 분 걸릴 수 있습니다. 진행 상황에 로드 중인지 표시됩니다. 모델은 옵션이 바뀌지 않는 한 메모리에 남아 있으므로 이후 받아쓰기는 바로 시작됩니다.

## WhisperX가 `CUDA out of memory`로 실패함

GPU 메모리가 설정에 비해 부족합니다. 다음 순서로 시도하세요.

1. **환경설정** → **WhisperX**에서 **배치 크기**를 낮춥니다(예: `4`).
2. 더 작은 모델을 사용합니다(예: `small` 또는 `base`).
3. 더 가벼운 **연산 유형**을 사용합니다(예: `int8`).

마지막 두 가지는 품질이 떨어질 수 있습니다. 모델별 필요 메모리는 [엔진](/ko/reference/engines/#모델)을 참고하세요.

## 받아쓰기가 너무 오래 걸림

WhisperX의 속도는 하드웨어에 따라 달라지므로 사양이 낮은 CPU에서는 즉각적인 결과를 기대하기 어렵습니다. `small` 같은 작은 모델, GPU에서 `large-v3-turbo`, 또는 연산 유형 `int8`을 시도해 보세요. 원격 서버에서 실행되는 **Whisper API**나 **Google API**를 사용할 수도 있습니다.

## Whisper API가 429 오류를 반환함

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

OpenAI 계정의 크레딧이 떨어졌거나, API를 처음 쓰기 전에 충전해야 합니다(무료 크레딧이 있어도 마찬가지). OpenAI 계정의 [Billing](https://platform.openai.com/settings/organization/billing/overview)에서 크레딧을 구매하세요. 계정이 활성화되기까지 최대 10분이 걸릴 수 있습니다.

처음 충전하기 전에 API 키를 만들었고 10분이 지나도 오류가 계속된다면, 새 키를 만들어 **환경설정** → **API 키**에서 설정하세요.

## 화자가 식별되지 않음

화자 식별에는 Hugging Face 토큰과 모델 이용 조건 동의가 필요합니다. 다음을 확인하세요.

- 같은 계정으로 [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1)의 이용 조건에 동의했는지.
- 토큰이 `Read` 역할이며 **환경설정** → **API 키**에 설정되어 있는지.

[화자를 식별하려면](/ko/guides/transcription-settings/#화자를-식별하려면)을 참고하세요.

## 마이크를 찾을 수 없거나 아무것도 녹음되지 않음

- 마이크가 연결되어 있는지 확인하고 마이크 목록 옆의 새로 고침 버튼을 클릭하세요.
- macOS에서는 **시스템 설정** → **개인정보 보호 및 보안** → **마이크**에서, Windows에서는 **설정** → **개인 정보** → **마이크**에서 Audiotext를 허용하세요.
- 레벨 미터에 **소리가 없습니다**가 표시되면 목록에서 다른 마이크를 고르거나 음소거되지 않았는지 확인하세요.

## 받아쓰기의 오디오를 재생할 수 없음

원본 파일이 이동되었거나 삭제되었습니다. 텍스트는 남지만 오디오는 원본 파일에서만 재생할 수 있습니다. 마이크 녹음과 URL의 오디오는 Audiotext가 보관합니다.

## YouTube 동영상을 다운로드할 수 없음

URL이 올바르고 동영상이 공개 상태인지 확인하세요. YouTube는 자주 바뀌므로 계속 실패한다면 Audiotext의 새 버전이 있는지 확인하세요.

## 폴더의 파일이 하나도 받아써지지 않음

이미 받아쓰기가 있는 파일은 건너뜁니다. 다시 받아쓰려면 **기존 파일 덮어쓰기**를 켜세요. 폴더에는 [지원되는 파일](/ko/reference/formats-and-languages/)도 있어야 합니다.

## Google API가 언어를 요구함

Google API는 언어를 감지할 수 없습니다. 설정에서 **오디오 언어**를 고르세요.

## 기타

[issues](https://github.com/HenestrosaDev/audiotext/issues)를 검색하거나 [토론](https://github.com/HenestrosaDev/audiotext/discussions)에서 질문하세요. 버그를 발견하면 시스템, Audiotext 버전, 재현 단계를 적어 [신고](https://github.com/HenestrosaDev/audiotext/issues/new/choose)해 주세요.
