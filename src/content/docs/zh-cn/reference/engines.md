---
title: 引擎
description: 比较 WhisperX、Whisper API 和 Google API，并选择它们的模型和高级选项。
sidebar:
  order: 1
---

Audiotext 使用三种引擎之一进行转写，可在[转写设置](/zh-cn/guides/transcription-settings/#引擎)的**引擎**卡片中选择。

| | WhisperX | Whisper API | Google API |
| --- | --- | --- | --- |
| 运行位置 | 你的电脑 | OpenAI 服务器 | Google 服务器 |
| 网络 | 仅下载模型时需要 | 需要 | 需要 |
| 费用 | 免费、不限量 | 付费 | 免费额度（每月 60 分钟），或使用 API 密钥付费 |
| 检测语言 | ✓ | ✓ | ✗ |
| 翻译 | ✓ | ✓ | ✗ |
| 时间戳 | ✓ | 取决于模型 | ✗ |
| 识别说话人 | ✓（Hugging Face 令牌） | `gpt-4o-transcribe-diarize` | ✗ |
| 逐词时间 | ✓ | `whisper-1` | ✗ |
| 实时文本 | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) 是 OpenAI Whisper 的快速实现，在你的电脑上运行，因此音频永远不会离开你的电脑。它可以在 CPU 上运行，在支持 CUDA 的 NVIDIA GPU 上则快得多。

### 模型

模型越大越准确，但速度更慢、占用内存更多。模型会在首次使用时下载。

| 模型 | 参数量 | 所需显存 |
| :---: | :---: | :---: |
| `tiny`, `tiny.en` | 39 M | 约 1 GB |
| `base`, `base.en` | 74 M | 约 1 GB |
| `small`, `small.en` | 244 M | 约 2 GB |
| `distil-small.en` | 166 M | 约 2 GB |
| `medium`, `medium.en` | 769 M | 约 5 GB |
| `distil-medium.en` | 394 M | 约 3 GB |
| `large-v1`, `large-v2`, `large-v3` | 1550 M | 小于 8 GB |
| `large-v3-turbo` | 809 M | 约 6 GB |
| `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5` | 756 M | 约 5 GB |

- **`large-v2`** 是默认模型，因为 `large-v3` 更容易出现幻觉和重复文本（尤其是日语等语言），并且漏掉更多标点。
- **`large-v3-turbo`** 是 `large-v3` 的精简版，速度快得多，准确度几乎相同。
- 以 **`.en`** 结尾的模型（`tiny.en`、`base.en`、`small.en`、`medium.en`）和**蒸馏**模型（`distil-small.en`、`distil-medium.en`、`distil-large-v2`、`distil-large-v3`、`distil-large-v3.5`）只能转写英语。它们比同等大小的多语言模型更快。

:::tip
想快速试用 Audiotext，请选择 `tiny` 或 `small`。想获得最佳质量，请在 GPU 上使用 `large-v2` 或 `large-v3-turbo`。
:::

### 高级选项

位于**偏好设置** → **WhisperX**。只有在遇到问题或清楚自己在做什么时才修改：GPU 显存耗尽可能会让系统卡死。

- **计算类型**：模型数值的精度。`float16` 在 GPU 上更快（使用 CUDA 时的默认值）。`int8` 占用内存更少，是 CPU 上的默认值，因为许多 CPU 无法高效支持 `float16`。`float32` 精度最高，适合显存超过 8 GB 的 GPU。
- **批处理大小**：同时处理的音频片段数（默认 `8`）。它只影响速度，不影响质量。内存不足时请调低；建议最大为 `16`。
- **使用 CPU**：在 CPU 上运行 WhisperX。如果没有找到 CUDA GPU，则始终开启。

## Whisper API

使用 [OpenAI 的语音转文字 API](https://platform.openai.com/docs/guides/speech-to-text)。它适用于无法流畅运行 WhisperX 的电脑，需要 OpenAI API 密钥（请参阅 [API 密钥](/zh-cn/reference/preferences/#api-密钥)）。

| 模型 | 时间戳 | 说话人 | 说明 |
| --- | :---: | :---: | --- |
| `whisper-1`（默认） | ✓ | ✗ | 可逐句播放并制作字幕。可翻译成英语。 |
| `gpt-transcribe` | ✗ | ✗ | 更准确，但没有时间戳。 |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | 识别说话人。不使用关键词和描述。 |

翻译成英语始终由 `whisper-1` 完成，因为它是唯一能翻译的模型。

由于 API 拒绝大于 25 MB 的文件，长音频会被切分为最长 10 分钟的片段，并在静音处切分以免截断字词。使用 `whisper-1` 时，每个片段的结尾会作为下一个片段的上下文；使用 `gpt-4o-transcribe-diarize` 时，会随后续片段一起发送每位说话人的声音样本，以保持其标签一致。

### 选项

- **响应格式**（输出卡片，用于文件夹）：`text`（默认）、`json`、`verbose_json`、`srt` 或 `vtt`。字幕和 `verbose_json` 需要能返回时间戳的模型。
- **温度**（偏好设置 → Whisper API）：介于 0 和 1 之间。较高的值（如 0.8）会让结果更随机，较低的值（如 0.2）更集中。为 0（默认）时，模型会在需要时自动调高。
- **单词时间戳**（偏好设置 → Whisper API）：`whisper-1` 是否也返回每个单词的时间戳，以便播放时高亮。耗时更长。默认开启。

## Google API

使用 [Google Speech-to-Text API](https://cloud.google.com/speech-to-text)。它不会为句子添加标点（由 Audiotext 添加），质量也低于 Whisper，因此转写常常需要校对。它无法检测语言或翻译，返回不带时间戳的纯文本。

没有 API 密钥时使用免费额度，每月限 60 分钟。要扩展额度，请设置 Google API 密钥。Google 会对使用收费，Audiotext 对此不承担责任。
