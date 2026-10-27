---
title: 命令行界面
description: 通过 Audiotext 命令行，在脚本中转写、摘要和翻译文件、文件夹和 YouTube 视频。
sidebar:
  order: 3
---

也可以通过命令行使用 Audiotext，例如从脚本中进行转写。它有三个命令：

- `transcribe`：转写一个文件、文件夹中的文件或一个 YouTube 视频。
- `watch`：转写添加到文件夹中的文件，直到按 `Ctrl+C` 停止。
- `check-update`：检查是否有新版本可用，并输出下载链接。

未指定的选项会使用应用中配置的值。转写结果始终保存在每个被转写文件的旁边，或保存到 `--output-dir` 指定的文件夹中（会在其中重建被转写文件夹的子文件夹结构）。

## 运行

已安装的应用在收到其中一个命令时会以命令行方式运行：

| 系统 | 命令 |
| --- | --- |
| Linux | `audiotext`（由 `install.sh` 安装到 `~/.local/bin`） |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | Audiotext 安装文件夹中的 `audiotext-cli.exe`（默认为 `%LOCALAPPDATA%\Programs\Audiotext`） |

[从源代码运行](/zh-cn/help/contributing/#搭建项目)时，请改用 `uv run src/cli.py`。

## 示例

```bash
# 转写一个文件。文本也会被打印出来，因此可以重定向
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# 转写文件夹中的文件并识别说话人
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# 使用 Whisper API 转写 YouTube 视频
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# 使用 Whisper API 转写会议，附带关键词和背景信息
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "一次关于下个版本的会议"

# 保存字幕和 Word 文档，生成摘要，并翻译成西班牙语
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# 转写添加到文件夹中的文件，直到按 Ctrl+C 停止
audiotext watch inbox/ --output-types srt

# 同上，但先转写文件夹中已有的文件
audiotext watch inbox/ --existing
```

## 选项

| 选项 | 说明 |
| --- | --- |
| `-m`, `--method` | 转写方式：`whisperx`、`whisper-api` 或 `google` |
| `-l`, `--language` | 音频语言的 ISO 639-1 代码（例如 `zh`），或使用 `auto` 自动检测（Google 不支持） |
| `-t`, `--output-types` | 用逗号分隔的输出文件类型，可选 `aud`、`json`、`srt`、`txt`、`tsv`、`vtt`、`md`、`docx` 和 `ass`（例如 `txt,srt,md`） |
| `-o`, `--output-dir` | 保存转写的文件夹（默认：每个被转写文件的旁边） |
| `--overwrite` | 重新转写已有转写的文件并替换其转写 |
| `--existing` | （仅 `watch`）先转写文件夹中已有且还没有转写的文件 |
| `-p`, `--prompt` | 音频的内容，例如主题或场景（Google 不支持） |
| `-k`, `--keywords` | 音频中出现的人名、术语或缩写，用逗号分隔，使其拼写正确（Google 不支持） |
| `--translate` | 在转写时将音频翻译成英语（Google 不支持）。其他语言请参阅 `--translate-to` |
| `-q`, `--quiet` | 只打印错误 |
| `-v`, `--verbose` | 打印日志以便调试错误 |
| `--version` | 打印 Audiotext 的版本 |

转写方式本身不保存的输出类型（例如 `md` 或 `docx`）会像在应用中一样，从其结果导出。`aud` 只有 WhisperX 会保存。

**摘要和翻译选项**

| 选项 | 说明 |
| --- | --- |
| `--summarize` | 为每个转写生成摘要，包含要点和章节，保存到 `.summary.md` 文件 |
| `--summary-provider` | 生成摘要的语言模型提供商：`openai`、`anthropic`、`deepseek`、`gemini`、`mistral`、`grok` 或 `ollama` |
| `--summary-model` | 生成摘要的语言模型 |
| `--translate-to` | 将每个转写翻译成某种语言（ISO 639-1 代码），并以其输出文件类型保存（例如 `talk.es.srt`） |
| `--translation-provider` | 翻译的提供商：`--summary-provider` 的提供商、`deepl` 或 `google` |
| `--translation-model` | 用于翻译的语言模型，适用于语言模型提供商 |

未指定时，使用应用中配置的提供商和模型。请参阅[提供商](/zh-cn/guides/summary-and-translation/#提供商)。

**WhisperX 选项**

| 选项 | 说明 |
| --- | --- |
| `--diarize` | 识别说话人 |
| `--speakers` | 识别时的说话人数量（`0` 表示自动检测） |
| `--model-size` | 模型，例如 `small` 或 `large-v2`（请参阅[引擎](/zh-cn/reference/engines/#模型)） |
| `--compute-type` | `int8`、`float16` 或 `float32` |
| `--batch-size` | 批处理大小 |
| `--cpu` | 在 CPU 上运行，而不是在 NVIDIA GPU 或 Mac 的 GPU 上运行 |

**Whisper API 选项**

| 选项 | 说明 |
| --- | --- |
| `--openai-model` | 转写模型：`whisper-1`、`gpt-transcribe` 或 `gpt-4o-transcribe-diarize` |

运行 `audiotext transcribe --help` 可查看所有选项及其取值。

## 输出与退出码

进度会打印到标准错误（使用 `--quiet` 隐藏），单个文件的转写文本会打印到标准输出。如果转写、摘要或翻译失败，命令以退出码 `1` 结束；如果按 `Ctrl+C` 停止，则以 `130` 结束。

如果 `--summarize` 或 `--translate-to` 的提供商未设置 API 密钥，命令会在转写前停止。摘要或翻译失败时只会报告错误，转写不会丢失，仍会被保存。

API 密钥使用应用中设置的密钥，或其[环境变量](/zh-cn/reference/files-and-data/#环境变量)，例如 `OPENAI_API_KEY`、`GOOGLE_API_KEY` 和 `HF_TOKEN`（用于识别说话人）。
