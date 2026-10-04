---
title: Tệp và dữ liệu
description: Nơi Audiotext lưu cài đặt, lịch sử, bản ghi âm và khóa API, và các biến môi trường mà ứng dụng đọc.
sidebar:
  order: 5
---

Audiotext lưu dữ liệu của bạn trên máy tính của bạn. Không có gì được gửi đi trừ khi bạn dùng công cụ từ xa (Whisper API hoặc Google API) hoặc nhà cung cấp AI khác ngoài Ollama.

## Thư mục cấu hình người dùng

Cài đặt, lịch sử và bản ghi âm được lưu trong thư mục cấu hình người dùng, nên vẫn còn sau khi cập nhật:

| Hệ điều hành | Thư mục |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (hoặc `$XDG_CONFIG_HOME/audiotext`) |

Thư mục này chứa:

- `config.ini`: cài đặt của bạn. Xóa tệp này để khôi phục giá trị mặc định.
- `history.json`: các bản chép lời của bạn, cùng bản tóm tắt, bản dịch và các chỉnh sửa.
- `media/`: các bản ghi âm từ micrô và âm thanh tải từ URL, để có thể phát lại sau. Chúng bị xóa khi bản chép lời tương ứng bị xóa khỏi lịch sử.

Để dùng thư mục khác, ví dụ cho bản cài đặt di động, hãy đặt biến môi trường `AUDIOTEXT_CONFIG_DIR`.

:::note
Tệp `config.ini` trong thư mục ứng dụng chứa cài đặt mặc định và không bao giờ bị sửa đổi.
:::

## Khóa API

Khóa API và token Hugging Face được lưu trong kho thông tin xác thực của hệ thống:

- **macOS**: Keychain.
- **Windows**: Credential Manager.
- **Linux**: Secret Service (ví dụ GNOME Keyring hoặc KWallet).

Nếu hệ thống không có kho này (ví dụ máy chủ không có môi trường desktop), khóa được lưu trong tệp `.env` ở thư mục cấu hình, chỉ người dùng của bạn mới đọc được. Các khóa mà phiên bản trước lưu trong tệp này sẽ được chuyển sang kho thông tin xác thực khi ứng dụng mở lần đầu.

Khóa **chỉ** được dùng để gửi yêu cầu đến API của từng dịch vụ.

## Biến môi trường

Biến môi trường mang tên các khóa được ưu tiên hơn khóa đặt trong ứng dụng:

| Biến | Dịch vụ |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (Whisper API, tóm tắt, bản dịch) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text và Google Translate |
| `HF_TOKEN` | Hugging Face (nhận diện người nói) |
| `AUDIOTEXT_CONFIG_DIR` | Thư mục chứa cài đặt và lịch sử |

## Mô hình

Mô hình của WhisperX và của tính năng nhận diện người nói được tải xuống lần đầu khi sử dụng và được Hugging Face lưu đệm trong `~/.cache/huggingface` (hoặc `%USERPROFILE%\.cache\huggingface` trên Windows). Xóa thư mục này để giải phóng dung lượng.
