---
title: 故障排除
description: Audiotext 常见问题的解决方法。
sidebar:
  order: 1
---

## 首次使用 WhisperX 转写需要很长时间

模型在首次使用时下载，根据网络和模型大小（最大约 3 GB）可能需要几分钟。进度会显示模型何时正在加载。只要模型选项不变，模型就会保留在内存中，因此之后的转写会立即开始。

## WhisperX 报错 `CUDA out of memory`

你的 GPU 显存不足以支持当前设置。请按以下顺序尝试：

1. 在**偏好设置** → **WhisperX** 中调低**批处理大小**（例如 `4`）。
2. 使用更小的模型（例如 `small` 或 `base`）。
3. 使用更轻量的**计算类型**（例如 `int8`）。

后两项可能会降低质量。各模型所需的内存请参阅[引擎](/zh-cn/reference/engines/#模型)。

## 转写耗时过长

WhisperX 的速度取决于你的硬件，在普通 CPU 上不要指望立即出结果。请尝试较小的模型，如 `small`、在 GPU 上使用 `large-v3-turbo`，或使用 `int8` 计算类型。你也可以使用在远程服务器上运行的 **Whisper API** 或 **Google API**。

## Whisper API 返回 429 错误

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

你的 OpenAI 账户额度已用完，或者在首次使用 API 前需要先充值（即使你有免费额度）。请在 OpenAI 账户的 [Billing](https://platform.openai.com/settings/organization/billing/overview) 页面购买额度。账户可能需要最多 10 分钟才能生效。

如果你在首次充值前就创建了 API 密钥，且 10 分钟后错误仍然存在，请创建一个新密钥，并在**偏好设置** → **API 密钥**中设置。

## 无法识别说话人

识别说话人需要 Hugging Face 令牌，并接受模型的使用条款。请确认：

- 你已使用同一账号接受 [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) 的条款。
- 令牌的角色为 `Read`，并已在**偏好设置** → **API 密钥**中设置。

请参阅[识别说话人的设置](/zh-cn/guides/transcription-settings/#识别说话人的设置)。

## 找不到麦克风，或什么都录不到

- 检查麦克风是否已连接，并点击麦克风列表旁的刷新按钮。
- 在 macOS 上，请在**系统设置** → **隐私与安全性** → **麦克风**中允许 Audiotext；在 Windows 上，请在**设置** → **隐私** → **麦克风**中允许。
- 如果电平表显示**没有声音**，请在列表中选择其他麦克风，或检查麦克风是否被静音。

## 无法播放转写的音频

源文件已被移动或删除。文本会保留，但音频只能从原始文件播放。麦克风录音和来自 URL 的音频由 Audiotext 保存。

## 无法下载 YouTube 视频

请确认 URL 正确且视频是公开的。YouTube 经常变化，如果仍然失败，请检查是否有新版本的 Audiotext。

## 文件夹中没有任何文件被转写

已有转写的文件会被跳过。打开**覆盖现有文件**即可重新转写。文件夹中还必须包含[支持的文件](/zh-cn/reference/formats-and-languages/)。

## Google API 要求选择语言

Google API 无法检测语言。请在设置中选择**音频语言**。

## 其他问题

在 [issues](https://github.com/HenestrosaDev/audiotext/issues) 中搜索，或在[讨论区](https://github.com/HenestrosaDev/audiotext/discussions)提问。如果发现 bug，请附上你的系统、Audiotext 版本和复现步骤进行[报告](https://github.com/HenestrosaDev/audiotext/issues/new/choose)。
