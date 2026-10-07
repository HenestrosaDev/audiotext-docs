---
title: 文件与数据
description: Audiotext 在哪里保存设置、历史记录、录音和 API 密钥，以及它读取哪些环境变量。
sidebar:
  order: 5
---

Audiotext 将你的数据保存在你的电脑上。除非你使用远程引擎（Whisper API 或 Google API）或 Ollama 以外的 AI 提供商，否则不会发送任何内容。打开时，它还会向 GitHub 查询是否有新版本，你可以在**偏好设置** → **常规** → **更新**中关闭此功能。

## 用户配置文件夹

设置、历史记录和录音保存在你的用户配置文件夹中，因此更新后依然保留：

| 系统 | 文件夹 |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext`（或 `$XDG_CONFIG_HOME/audiotext`） |

其中包含：

- `config.ini`：你的设置。删除它即可恢复默认值。
- `history.json`：你的转写，以及其摘要、翻译和校对。
- `media/`：麦克风录音以及从 URL 下载的音频，以便之后播放。从历史记录中删除对应的转写时，它们也会被删除。

如需使用其他文件夹（例如便携安装），请设置环境变量 `AUDIOTEXT_CONFIG_DIR`。

:::note
应用文件夹中的 `config.ini` 文件包含默认设置，永远不会被修改。
:::

## API 密钥

API 密钥和 Hugging Face 令牌保存在系统的凭据存储中：

- **macOS**：钥匙串。
- **Windows**：凭据管理器。
- **Linux**：Secret Service（例如 GNOME Keyring 或 KWallet）。

如果系统没有凭据存储（例如没有桌面环境的服务器），它们会保存在配置文件夹中的 `.env` 文件里，只有你的用户可以读取。旧版本保存在该文件中的密钥，会在首次打开应用时迁移到凭据存储。

密钥**仅**用于向各项服务的 API 发送请求。

## 环境变量

与密钥同名的环境变量优先于应用中设置的密钥：

| 变量 | 服务 |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI（Whisper API、摘要、翻译） |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text 和 Google Translate |
| `HF_TOKEN` | Hugging Face（识别说话人） |
| `AUDIOTEXT_CONFIG_DIR` | 设置和历史记录所在的文件夹 |

## 模型

WhisperX 和说话人识别的模型会在首次使用时下载，并由 Hugging Face 缓存在 `~/.cache/huggingface`（Windows 上为 `%USERPROFILE%\.cache\huggingface`）。用于对齐英语、法语、德语、西班牙语和意大利语单词的模型由 PyTorch 缓存在 `~/.cache/torch`（Windows 上为 `%USERPROFILE%\.cache\torch`）。删除这些文件夹即可释放它们占用的空间。其他应用也可能把模型存放在那里，并像 Audiotext 一样在需要时重新下载。
