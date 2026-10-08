---
title: 명령줄 인터페이스
description: Audiotext 명령줄로 스크립트에서 파일, 폴더, YouTube 동영상을 받아씁니다.
sidebar:
  order: 3
---

[소스 코드에서 실행](/ko/help/contributing/#프로젝트-준비)할 때는 스크립트에서 받아쓰도록 명령줄에서도 Audiotext를 사용할 수 있습니다. 명령은 세 가지입니다.

- `transcribe`: 파일, 폴더의 파일들, 또는 YouTube 동영상을 받아씁니다.
- `watch`: `Ctrl+C`로 멈출 때까지 폴더에 추가되는 파일을 받아씁니다.
- `check-update`: 새 버전이 있는지 확인하고 다운로드 링크를 표시합니다.

지정하지 않은 옵션은 앱에서 설정한 값을 사용합니다. 받아쓰기는 항상 받아쓴 각 파일 옆이나 `--output-dir`로 지정한 폴더에 저장됩니다(받아쓴 폴더의 하위 폴더 구조가 그 안에 다시 만들어집니다).

## 예시

```bash
# 파일을 받아씁니다. 텍스트도 출력되므로 리디렉션할 수 있습니다
uv run src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# 화자를 식별하며 폴더의 파일들을 받아씁니다
uv run src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Whisper API로 YouTube 동영상을 받아씁니다
uv run src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# 키워드와 맥락을 넣어 Whisper API로 회의를 받아씁니다
uv run src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "다음 릴리스에 관한 회의"

# Ctrl+C로 멈출 때까지 폴더에 추가되는 파일을 받아씁니다
uv run src/cli.py watch inbox/ --output-types srt
```

## 옵션

| 옵션 | 설명 |
| --- | --- |
| `-m`, `--method` | 받아쓰기 방법: `whisperx`, `whisper-api`, `google` |
| `-l`, `--language` | ISO 639-1 코드로 된 오디오 언어(예: `ko`), 또는 감지하려면 `auto`(Google은 지원 안 함) |
| `-o`, `--output-dir` | 받아쓰기를 저장할 폴더(기본값: 받아쓴 각 파일 옆) |
| `--overwrite` | 기존 받아쓰기 덮어쓰기 |
| `-p`, `--prompt` | 오디오의 주제나 상황 등 내용(Google은 지원 안 함) |
| `-k`, `--keywords` | 철자가 올바르게 적히도록 오디오에 나오는 이름, 용어, 약어를 쉼표로 구분(Google은 지원 안 함) |
| `--translate` | 오디오를 영어로 번역(Google은 지원 안 함) |
| `-q`, `--quiet` | 오류만 출력 |
| `-v`, `--verbose` | 오류 디버깅을 위해 로그 출력 |

**WhisperX 옵션**

| 옵션 | 설명 |
| --- | --- |
| `-t`, `--output-types` | 쉼표로 구분한 출력 파일 형식(예: `txt,srt`) |
| `--diarize` | 화자 식별 |
| `--speakers` | 식별할 화자 수(`0`이면 자동 감지) |
| `--model-size` | 모델(예: `small`, `large-v2`, [엔진](/ko/reference/engines/#모델) 참고) |
| `--compute-type` | `int8`, `float16`, `float32` |
| `--batch-size` | 배치 크기 |
| `--cpu` | CPU에서 실행 |

**Whisper API 옵션**

| 옵션 | 설명 |
| --- | --- |
| `--openai-model` | 받아쓰기 모델: `whisper-1`, `gpt-transcribe`, `gpt-4o-transcribe-diarize` |

모든 옵션과 값은 `uv run src/cli.py transcribe --help`로 확인하세요.

## 출력과 종료 코드

진행 상황은 표준 오류로 출력되고(`--quiet`로 숨김), 단일 파일 받아쓰기의 텍스트는 표준 출력으로 출력됩니다. 받아쓰기가 실패하면 명령은 코드 `1`로 종료됩니다.

API 키는 앱에서 설정한 키 또는 환경 변수 `OPENAI_API_KEY`, `GOOGLE_API_KEY`, `HF_TOKEN`(화자 식별용)을 사용합니다.
