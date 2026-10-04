---
title: Tóm tắt và dịch
description: Tóm tắt và dịch bản chép lời bằng OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL hoặc Google Translate.
sidebar:
  order: 4
---

Khi bản chép lời đã sẵn sàng, Audiotext có thể tóm tắt và dịch bằng mô hình ngôn ngữ hoặc dịch vụ dịch thuật. Cả hai đều được lưu trong lịch sử, nên chỉ tạo một lần.

## Tóm tắt

Mở chế độ **Bản tóm tắt** của một bản chép lời và nhấp **Tạo bản tóm tắt**. Mô hình ngôn ngữ sẽ viết:

- **Bản tóm tắt** của bản chép lời.
- Các **ý chính**.
- Các **chương**, nếu có dấu thời gian. Nhấp vào một chương để phát âm thanh từ chỗ chương bắt đầu.

**Tạo lại** viết lại bản tóm tắt (ví dụ sau khi chọn mô hình khác). **Sao chép** sao chép nó, và các [bản xuất](/vi/guides/transcript/#sao-chép-và-xuất) Markdown và Word có bao gồm nó.

Nếu chưa đặt khóa API của nhà cung cấp, chế độ **Bản tóm tắt** sẽ đề nghị bạn đặt. Các bản chép lời rất dài (khoảng ba giờ nói trở lên) chỉ được tóm tắt từ phần đầu.

![Bản tóm tắt của một bản chép lời, với các ý chính và các chương](/screenshots/summary.png)

## Bản dịch

Nhấp **Dịch**, chọn ngôn ngữ ở **Dịch sang** và **Nhà cung cấp**, rồi xác nhận. Bản dịch hiển thị trong một bảng bên phải văn bản gốc.

- Nếu bản chép lời có dấu thời gian, mỗi câu được dịch riêng, nên bản dịch giữ được dấu thời gian: câu đang phát được đánh dấu, và nhấp vào một câu sẽ phát câu đó.
- Nếu bạn đã chỉnh sửa văn bản thuần, văn bản đã chỉnh sửa sẽ được dịch, không có dấu thời gian.
- Kéo tay nắm giữa hai văn bản để đổi kích thước, hoặc nhấp đúp vào đó để đặt lại.
- Nút **Dịch** cũng cho phép **Ẩn bản dịch**, **Dịch sang ngôn ngữ khác…** hoặc **Xóa bản dịch**.

:::tip
Để có bản chép lời trực tiếp bằng ngôn ngữ khác mà không cần nhà cung cấp, bạn cũng có thể dịch trong khi chép lời. Xem [Ngôn ngữ](/vi/guides/transcription-settings/#ngôn-ngữ).
:::

## Nhà cung cấp

Nhà cung cấp được chọn trong **Tùy chọn ưu tiên** → **AI**, riêng cho tóm tắt và cho bản dịch.

| Nhà cung cấp | Mô hình mặc định | Khóa API |
| --- | --- | --- |
| OpenAI (mặc định) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (cục bộ) | `llama3.2` | Không cần |

Để trống **Mô hình** để dùng mô hình mặc định của nhà cung cấp, hoặc nhập tên bất kỳ mô hình nào khác của nhà cung cấp đó (ví dụ `claude-sonnet-5-5` hoặc `deepseek-reasoner`).

Bản dịch cũng có thể được tạo bởi:

- **DeepL**, cần [khóa API DeepL](https://www.deepl.com/your-account/keys). Khóa của gói miễn phí cũng dùng được.
- **Google Translate**, dùng khóa Google API đã bật Cloud Translation API.

### Ollama

[Ollama](https://ollama.com) chạy mô hình trên máy tính của bạn, không cần khóa API và không gửi văn bản đi đâu cả. Cài đặt Ollama, tải một mô hình (ví dụ `ollama pull llama3.2`) và chọn **Ollama** làm nhà cung cấp. Nếu Ollama không chạy ở địa chỉ mặc định, hãy đổi **URL máy chủ** trong **Tùy chọn ưu tiên** → **AI** (mặc định `http://localhost:11434`).

:::note
Mỗi nhà cung cấp tính phí cho việc sử dụng API của họ, và Audiotext không chịu trách nhiệm về khoản phí này. Khóa API được lưu trong kho thông tin xác thực của hệ thống. Xem [Tệp và dữ liệu](/vi/reference/files-and-data/).
:::
