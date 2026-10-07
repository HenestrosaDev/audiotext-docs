---
title: 偏好设置
description: 按标签页介绍偏好设置窗口中的所有设置。
sidebar:
  order: 2
---

**偏好设置**包含不会随每次转写而改变的设置。点击窗口右上角的齿轮即可打开。更改会自动保存。

## 常规

- **外观**：**跟随系统**、**浅色**或**深色**。
- **界面语言**：Audiotext 的语言，或**系统语言**。请参阅[可用语言](/zh-cn/reference/formats-and-languages/#界面语言)。
- **日期格式**：转写日期的显示方式，使用界面语言：短（`2026/10/4`）、中（`2026年10月4日`，默认）、长或 ISO（`2026-10-04`）。菜单会用示例显示每种格式（看起来相同的格式只显示一次）。
- **时间格式**：**自动**（界面语言的时钟）、12 小时制（`下午1:30`）或 24 小时制（`13:30`）。
- **通知**：转写完成时显示系统通知（对于文件夹，在其所有文件都完成时；对于监视的文件夹，每完成一个新文件时）。默认开启。在 macOS 上通知来自**脚本编辑器**，在 Windows 上来自 **Windows PowerShell**，因此需在系统设置中为这些应用允许或关闭通知。在 Linux 上需要 `notify-send`（`libnotify-bin` 或 `libnotify` 软件包）。
- **更新**：打开应用时检查是否有新版本，如果有，会在顶部栏显示**版本 … 可用**按钮，点击即可打开其下载页面。不会提供预发布版本。默认开启。

## AI

[摘要和翻译](/zh-cn/guides/summary-and-translation/)的提供商：

- **摘要** → **提供商**和**模型**。
- **翻译** → **提供商**和**模型**。DeepL 和 Google Translate 没有可选的模型。
- **Ollama** → **服务器 URL**：Ollama 的地址，默认为 `http://localhost:11434`。

将**模型**留空即使用提供商的默认模型。提供商旁边的按钮用于设置其 API 密钥。

## API 密钥

各项服务的密钥。点击**设置…**输入密钥，或点击**更改…**替换（留空即可删除）。密钥保存在系统的凭据存储中。

| 密钥 | 用途 |
| --- | --- |
| OpenAI API 密钥 | Whisper API，以及使用 OpenAI 生成摘要和翻译 |
| Anthropic API 密钥 | 使用 Claude 生成摘要和翻译 |
| DeepSeek API 密钥 | 使用 DeepSeek 生成摘要和翻译 |
| Gemini API 密钥 | 使用 Gemini（来自 Google AI Studio）生成摘要和翻译 |
| Mistral API 密钥 | 使用 Mistral 生成摘要和翻译 |
| xAI API 密钥 | 使用 Grok 生成摘要和翻译 |
| DeepL API 密钥 | 使用 DeepL 翻译（免费套餐的密钥也可以） |
| Google API 密钥 | 超出免费额度的 Google Speech-to-Text，以及 Google Translate（Cloud Translation API） |
| Hugging Face 令牌 | 使用 WhisperX 识别说话人 |

:::caution
各提供商会对其 API 的使用收费，Audiotext 对此不承担责任。如果 OpenAI 对新密钥返回 `429` 错误，请参阅[故障排除](/zh-cn/help/troubleshooting/#whisper-api-返回-429-错误)。
:::

## WhisperX

**计算类型**、**批处理大小**和**使用 CPU**。请参阅 [WhisperX 高级选项](/zh-cn/reference/engines/#高级选项)。

## 字幕

使用 WhisperX 转写文件夹时所保存的 `.srt` 和 `.vtt` 文件的选项：

- **高亮单词**：在说出每个字词时为其加下划线。默认关闭。
- **最大行数**：每条字幕的最大行数。默认 `2`。
- **最大行宽**：换行前每行的最大字符数。默认 `42`。

## Whisper API

**温度**和**单词时间戳**。请参阅 [Whisper API 选项](/zh-cn/reference/engines/#选项)。

## 关于

Audiotext 的版本，以及本文档、GitHub 源代码和捐赠页面的链接。**检查更新**会立即检查是否有新版本：如果有，按钮会变为**下载**并打开其页面。
