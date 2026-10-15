---
title: 命令行界面
description: 通过 Audiotext 命令行，在脚本中转写文件、文件夹和 YouTube 视频。
sidebar:
  order: 3
---

[从源代码运行](/zh-cn/help/contributing/#搭建项目)时，也可以通过命令行使用 Audiotext，从脚本中进行转写。它有三个命令：

- `transcribe`：转写一个文件、文件夹中的文件或一个 YouTube 视频。
- `watch`：转写添加到文件夹中的文件，直到按 `Ctrl+C` 停止。
- `check-update`：检查是否有新版本可用，并输出下载链接。

未指定的选项会使用应用中配置的值。转写结果始终保存在每个被转写文件的旁边，或保存到 `--output-dir` 指定的文件夹中（会在其中重建被转写文件夹的子文件夹结构）。

## 示例

```bash
# 转写一个文件。文本也会被打印出来，因此可以重定向
uv run src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# 转写文件夹中的文件并识别说话人
uv run src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# 使用 Whisper API 转写 YouTube 视频
uv run src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# 使用 Whisper API 转写会议，附带关键词和背景信息
uv run src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "一次关于下个版本的会议"

# 转写添加到文件夹中的文件，直到按 Ctrl+C 停止
uv run src/cli.py watch inbox/ --output-types srt
```

## 选项

| 选项 | 说明 |
| --- | --- |
| `-m`, `--method` | 转写方式：`whisperx`、`whisper-api` 或 `google` |
| `-l`, `--language` | 音频语言的 ISO 639-1 代码（例如 `zh`），或使用 `auto` 自动检测（Google 不支持） |
| `-o`, `--output-dir` | 保存转写的文件夹（默认：每个被转写文件的旁边） |
| `--overwrite` | 覆盖现有转写 |
| `-p`, `--prompt` | 音频的内容，例如主题或场景（Google 不支持） |
| `-k`, `--keywords` | 音频中出现的人名、术语或缩写，用逗号分隔，使其拼写正确（Google 不支持） |
| `--translate` | 将音频翻译成英语（Google 不支持） |
| `-q`, `--quiet` | 只打印错误 |
| `-v`, `--verbose` | 打印日志以便调试错误 |

**WhisperX 选项**

| 选项 | 说明 |
| --- | --- |
| `-t`, `--output-types` | 用逗号分隔的输出文件类型（例如 `txt,srt`） |
| `--diarize` | 识别说话人 |
| `--speakers` | 识别时的说话人数量（`0` 表示自动检测） |
| `--model-size` | 模型，例如 `small` 或 `large-v2`（请参阅[引擎](/zh-cn/reference/engines/#模型)） |
| `--compute-type` | `int8`、`float16` 或 `float32` |
| `--batch-size` | 批处理大小 |
| `--cpu` | 在 CPU 上运行 |

**Whisper API 选项**

| 选项 | 说明 |
| --- | --- |
| `--openai-model` | 转写模型：`whisper-1`、`gpt-transcribe` 或 `gpt-4o-transcribe-diarize` |

运行 `uv run src/cli.py transcribe --help` 可查看所有选项及其取值。

## 输出与退出码

进度会打印到标准错误（使用 `--quiet` 隐藏），单个文件的转写文本会打印到标准输出。如果某个转写失败，命令以退出码 `1` 结束。

API 密钥使用应用中设置的密钥，或环境变量 `OPENAI_API_KEY`、`GOOGLE_API_KEY` 和 `HF_TOKEN`（用于识别说话人）。
