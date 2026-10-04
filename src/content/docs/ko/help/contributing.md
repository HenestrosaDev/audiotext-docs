---
title: 기여하기
description: 소스 코드에서 Audiotext를 실행하고, 테스트를 돌리고, 인터페이스를 번역하고, 이 문서를 개선합니다.
sidebar:
  order: 2
---

기여는 언제나 환영합니다! pull request를 열기 전에 [기여 가이드](https://github.com/HenestrosaDev/audiotext/blob/main/.github/CONTRIBUTING.md)를 읽어 주세요. [토론](https://github.com/HenestrosaDev/audiotext/discussions/new?category=ideas)에서 아이디어를 제안하거나 [프로젝트 백로그](https://github.com/users/HenestrosaDev/projects/1)를 볼 수도 있습니다.

## 프로젝트 준비

**Python 3.10~3.13**이 필요합니다.

1. [FFmpeg](https://ffmpeg.org)를 설치하고, Linux에서는 [PortAudio](https://www.portaudio.com/)도 설치합니다.

   ```bash
   # macOS
   brew install ffmpeg
   # Ubuntu 또는 Debian
   sudo apt install ffmpeg libportaudio2
   # Windows
   choco install ffmpeg
   ```

2. 저장소를 복제합니다.

   ```bash
   git clone https://github.com/HenestrosaDev/audiotext.git
   cd audiotext
   ```

3. 가상 환경을 만들고 활성화합니다.

   ```bash
   python -m venv venv
   # macOS와 Linux
   source venv/bin/activate
   # Windows
   . venv/Scripts/activate
   ```

4. 의존성을 설치합니다.

   ```bash
   pip install -r requirements.txt
   ```

   `requirements.txt`는 CUDA를 지원하는 PyTorch를 설치하므로 Linux와 Windows에서는 다운로드 용량이 큽니다. NVIDIA GPU가 없다면 먼저 CPU 버전을 설치하세요.

   ```bash
   pip install torch==2.8.0 torchaudio==2.8.0 torchvision==0.23.0 --index-url https://download.pytorch.org/whl/cpu
   ```

   [uv](https://docs.astral.sh/uv/)를 사용한다면 `uv pip install --index-strategy unsafe-best-match -r requirements.txt`를 실행하세요.

5. 앱을 실행합니다.

   ```bash
   python src/app.py
   ```

## 개발 도구

```bash
pip install -r requirements-dev.txt
pre-commit install   # 커밋할 때마다 코드를 검사하고 정리합니다
pytest               # 테스트를 실행합니다
```

## 인터페이스 번역

인터페이스는 [gettext](https://www.gnu.org/software/gettext/)로 번역됩니다. 텍스트는 `res/locales/audiotext.pot`에, 언어별 번역은 `res/locales/<언어>/LC_MESSAGES/audiotext.po`에 있습니다.

코드의 텍스트가 바뀌었거나 `.po` 파일을 편집한 뒤에는(예: [Poedit](https://poedit.net/)) 이 스크립트를 실행하세요. 텍스트를 추출하고 카탈로그를 업데이트해 컴파일한 다음, 아직 번역하거나 검토해야 할 텍스트(`fuzzy` 표시)를 보여 줍니다. 그때까지 앱은 해당 텍스트를 영어로 표시합니다. 오래된 카탈로그가 있으면 테스트가 실패합니다.

```bash
python .github/scripts/update_translations.py
```

언어를 추가하려면 카탈로그를 만들어 번역하고 컴파일한 다음 `src/utils/i18n.py`의 `UI_LANGUAGES`에 추가하세요.

```bash
pybabel init -i res/locales/audiotext.pot -d res/locales -D audiotext -l <코드>
python .github/scripts/update_translations.py
```

## 이 문서 개선하기

이 사이트는 [Starlight](https://starlight.astro.build)로 만들어졌으며 저장소의 `web` 폴더에 있습니다. 언어마다 `web/src/content/docs`에 자체 폴더가 있습니다(영어는 `en`에 있습니다).

```bash
cd web
npm install
npm run dev     # http://localhost:4321에서 사이트를 띄웁니다
npm run build   # web/dist에 사이트를 빌드합니다
```

각 페이지 하단에는 GitHub에서 해당 페이지를 여는 **페이지 편집** 링크가 있습니다.
