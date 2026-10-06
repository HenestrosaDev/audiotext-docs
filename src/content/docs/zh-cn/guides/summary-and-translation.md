---
title: 摘要与翻译
description: 使用 OpenAI、Claude、Gemini、DeepSeek、Mistral、Grok、Ollama、DeepL 或 Google Translate 为转写生成摘要并翻译。
sidebar:
  order: 4
---

转写完成后，Audiotext 可以用语言模型或翻译服务为其生成摘要并翻译。两者都会保存在历史记录中，因此只需生成一次。

## 摘要

打开转写的**摘要**模式，点击**生成摘要**。语言模型会写出：

- 转写的**摘要**。
- **要点**。
- 如果有时间戳，还会生成**章节**。点击章节即可从其开头播放音频。

**重新生成**会重写摘要（例如更换模型之后）。**复制**会复制摘要，Markdown 和 Word [导出](/zh-cn/guides/transcript/#复制与导出)中也会包含它。

如果尚未设置提供商的 API 密钥，**摘要**模式会提示你设置。非常长的转写（约三小时或更长的讲话）只会对开头部分生成摘要。

![转录的摘要,包括要点和章节](/screenshots/summary.png)

## 翻译

点击**翻译**，在**翻译成**中选择语言并选择**提供商**，然后确认。译文会显示在原文右侧的面板中。

- 如果转写有时间戳，每个片段会单独翻译，因此译文以相同的时间戳开始：会高亮正在播放的片段，点击片段即可播放。
- 如果你编辑过纯文本，则会翻译编辑后的文本，且没有时间戳。
- 拖动两段文本之间的分隔条可调整大小，双击可恢复默认大小。
- **翻译**按钮还可以**隐藏翻译**、**翻译成其他语言…**或**删除翻译**。

### 校对译文并调整时间

译文通常需要与原文不同的时间，例如需要更长阅读时间的字幕。右键点击译文的某个片段，可以：

- **编辑文本…**：修改其文本。
- **编辑时间…**：精确到毫秒地修改其开始和结束时间。时间可输入为 `00:01:05,900`、`01:05,9` 或 `65.9`。
- **在后面添加片段…**：添加一个片段，默认填满到下一个片段之间的空隙。
- **删除片段**。

### 自己翻译

要自己撰写译文，请在**提供商**中选择**自己从头翻译**。无需 API 密钥。译文以转写的时间戳和空白片段开始，空白片段显示为**尚未翻译**，面板会显示剩余数量。右键点击其中一个并选择**翻译文本…**：对话框会显示这段时间内所说的原文。

### 字幕与导出

- 在视频的转写中，于**翻译**菜单勾选**显示为视频字幕**，即可将译文显示为字幕。视频的菜单也可以切换。参见[带字幕观看视频](/zh-cn/guides/transcript/#带字幕观看视频)。
- 要将译文保存为文件，请在**导出**菜单中选择翻译（**…翻译**），或点击翻译的导出按钮。它会以与转写相同的[格式](/zh-cn/guides/transcript/#复制与导出)导出，文件名包含其语言（例如 `video.es.srt`），因此视频播放器会随视频一起加载它。尚未翻译的片段不会包含在字幕中。

:::tip
若想不借助提供商直接得到另一种语言的转写，也可以在转写时进行翻译。请参阅[语言](/zh-cn/guides/transcription-settings/#语言)。
:::

## 提供商

提供商在**偏好设置** → **AI** 中选择，摘要和翻译分别设置。

| 提供商 | 默认模型 | API 密钥 |
| --- | --- | --- |
| OpenAI（默认） | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude（Anthropic） | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini（Google） | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama（本地） | `llama3.2` | 不需要 |

将**模型**留空即使用提供商的默认模型，也可以输入该提供商的其他模型名称（例如 `claude-sonnet-5-5` 或 `deepseek-reasoner`）。

翻译还可以使用：

- **DeepL**，需要 [DeepL API 密钥](https://www.deepl.com/your-account/keys)。免费套餐的密钥也可以使用。
- **Google Translate**，使用已启用 Cloud Translation API 的 Google API 密钥。

### Ollama

[Ollama](https://ollama.com) 在你的电脑上运行模型，无需 API 密钥，也不会把文本发送到任何地方。安装它，下载一个模型（例如 `ollama pull llama3.2`），然后选择 **Ollama** 作为提供商。如果它没有运行在默认地址上，请在**偏好设置** → **AI** 中修改**服务器 URL**（默认为 `http://localhost:11434`）。

:::note
各提供商会对其 API 的使用收费，Audiotext 对此不承担责任。API 密钥保存在系统的凭据存储中。请参阅[文件与数据](/zh-cn/reference/files-and-data/)。
:::
