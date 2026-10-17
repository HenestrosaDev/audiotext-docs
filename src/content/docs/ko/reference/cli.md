---
title: 명령줄 인터페이스
description: Audiotext 명령줄로 스크립트에서 파일, 폴더, YouTube 동영상을 받아쓰고 요약하고 번역합니다.
sidebar:
  order: 3
---

Audiotext는 명령줄에서도 사용할 수 있습니다(예: 스크립트에서 받아쓰기). 명령은 세 가지입니다.

- `transcribe`: 파일, 폴더의 파일들, 또는 YouTube 동영상을 받아씁니다.
- `watch`: `Ctrl+C`로 멈출 때까지 폴더에 추가되는 파일을 받아씁니다.
- `check-update`: 새 버전이 있는지 확인하고 다운로드 링크를 표시합니다.

지정하지 않은 옵션은 앱에서 설정한 값을 사용합니다. 받아쓰기는 항상 받아쓴 각 파일 옆이나 `--output-dir`로 지정한 폴더에 저장됩니다(받아쓴 폴더의 하위 폴더 구조가 그 안에 다시 만들어집니다).

## 실행하기

설치된 앱은 명령을 받으면 명령줄로 실행됩니다.

| 시스템 | 명령 |
| --- | --- |
| Linux | `audiotext`(`install.sh`가 `~/.local/bin`에 설치) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | Audiotext가 설치된 폴더의 `audiotext-cli.exe`(기본값 `%LOCALAPPDATA%\Programs\Audiotext`) |

[소스 코드에서 실행](/ko/help/contributing/#프로젝트-준비)할 때는 대신 `uv run src/cli.py`를 사용하세요.

## 예시

```bash
# 파일을 받아씁니다. 텍스트도 출력되므로 리디렉션할 수 있습니다
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# 화자를 식별하며 폴더의 파일들을 받아씁니다
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Whisper API로 YouTube 동영상을 받아씁니다
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# 키워드와 맥락을 넣어 Whisper API로 회의를 받아씁니다
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "다음 릴리스에 관한 회의"

# 자막과 Word 문서를 저장하고, 요약한 뒤 스페인어로 번역합니다
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Ctrl+C로 멈출 때까지 폴더에 추가되는 파일을 받아씁니다
audiotext watch inbox/ --output-types srt

# 같은 작업을 폴더에 이미 있는 파일부터 받아쓰며 실행
audiotext watch inbox/ --existing
```

## 옵션

| 옵션 | 설명 |
| --- | --- |
| `-m`, `--method` | 받아쓰기 방법: `whisperx`, `whisper-api`, `google` |
| `-l`, `--language` | ISO 639-1 코드로 된 오디오 언어(예: `ko`), 또는 감지하려면 `auto`(Google은 지원 안 함) |
| `-t`, `--output-types` | 쉼표로 구분한 출력 파일 형식. `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx`, `ass` 중에서 고릅니다(예: `txt,srt,md`) |
| `-o`, `--output-dir` | 받아쓰기를 저장할 폴더(기본값: 받아쓴 각 파일 옆) |
| `--overwrite` | 이미 받아쓰기가 있는 파일을 다시 받아쓰고 교체 |
| `--existing` | (`watch` 전용) 폴더에 이미 있고 아직 받아쓰기가 없는 파일을 먼저 받아쓰기 |
| `-p`, `--prompt` | 오디오의 주제나 상황 등 내용(Google은 지원 안 함) |
| `-k`, `--keywords` | 철자가 올바르게 적히도록 오디오에 나오는 이름, 용어, 약어를 쉼표로 구분(Google은 지원 안 함) |
| `--translate` | 받아쓰는 동안 오디오를 영어로 번역(Google은 지원 안 함). 다른 언어는 `--translate-to` 참고 |
| `-q`, `--quiet` | 오류만 출력 |
| `-v`, `--verbose` | 오류 디버깅을 위해 로그 출력 |
| `--version` | Audiotext 버전 출력 |

받아쓰기 방법이 직접 저장하지 않는 출력 형식(예: `md`, `docx`)은 앱에서처럼 그 결과에서 내보냅니다. `aud`는 WhisperX만 저장합니다.

**요약 및 번역 옵션**

| 옵션 | 설명 |
| --- | --- |
| `--summarize` | 각 받아쓰기를 핵심 내용과 챕터와 함께 `.summary.md` 파일로 요약 |
| `--summary-provider` | 요약하는 언어 모델의 제공자: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok`, `ollama` |
| `--summary-model` | 요약하는 언어 모델 |
| `--translate-to` | 각 받아쓰기를 한 언어(ISO 639-1 코드)로 번역해 그 출력 파일 형식으로 저장(예: `talk.es.srt`) |
| `--translation-provider` | 번역 제공자: `--summary-provider`의 제공자, `deepl`, `google` |
| `--translation-model` | 번역하는 언어 모델(언어 모델 제공자인 경우) |

지정하지 않으면 앱에서 설정한 제공자와 모델을 사용합니다. [제공자](/ko/guides/summary-and-translation/#제공자)를 참고하세요.

**WhisperX 옵션**

| 옵션 | 설명 |
| --- | --- |
| `--diarize` | 화자 식별 |
| `--speakers` | 식별할 화자 수(`0`이면 자동 감지) |
| `--model-size` | 모델(예: `small`, `large-v2`, [엔진](/ko/reference/engines/#모델) 참고) |
| `--compute-type` | `int8`, `float16`, `float32` |
| `--batch-size` | 배치 크기 |
| `--cpu` | NVIDIA GPU나 Mac의 GPU 대신 CPU에서 실행 |

**Whisper API 옵션**

| 옵션 | 설명 |
| --- | --- |
| `--openai-model` | 받아쓰기 모델: `whisper-1`, `gpt-transcribe`, `gpt-4o-transcribe-diarize` |

모든 옵션과 값은 `audiotext transcribe --help`로 확인하세요.

## 출력과 종료 코드

진행 상황은 표준 오류로 출력되고(`--quiet`로 숨김), 단일 파일 받아쓰기의 텍스트는 표준 출력으로 출력됩니다. 받아쓰기, 요약, 번역 중 하나라도 실패하면 명령은 코드 `1`로, `Ctrl+C`로 멈추면 `130`으로 종료됩니다.

`--summarize`나 `--translate-to`의 제공자 API 키가 설정되어 있지 않으면 명령은 받아쓰기 전에 멈춥니다. 요약이나 번역이 실패해도 그 사실만 알리고 받아쓰기는 잃지 않으며, 그대로 저장됩니다.

API 키는 앱에서 설정한 키 또는 해당 [환경 변수](/ko/reference/files-and-data/#환경-변수)(예: `OPENAI_API_KEY`, `GOOGLE_API_KEY`, 화자 식별용 `HF_TOKEN`)를 사용합니다.
