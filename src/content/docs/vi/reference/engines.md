---
title: Công cụ
description: So sánh WhisperX, Whisper API và Google API, và chọn mô hình cùng các tùy chọn nâng cao.
sidebar:
  order: 1
---

Audiotext chép lời bằng một trong ba công cụ, được chọn trong thẻ **Công cụ** của [cài đặt chép lời](/vi/guides/transcription-settings/#công-cụ).

| | WhisperX | Whisper API | Google API |
| --- | --- | --- | --- |
| Chạy trên | Máy tính của bạn | Máy chủ OpenAI | Máy chủ Google |
| Internet | Chỉ để tải mô hình | Bắt buộc | Bắt buộc |
| Chi phí | Miễn phí, không giới hạn | Trả phí | Gói miễn phí (60 phút/tháng), hoặc trả phí với khóa API |
| Phát hiện ngôn ngữ | ✓ | ✓ | ✗ |
| Dịch | ✓ | ✓ | ✗ |
| Dấu thời gian | ✓ | Tùy mô hình | ✗ |
| Nhận diện người nói | ✓ (token Hugging Face) | `gpt-4o-transcribe-diarize` | ✗ |
| Thời gian theo từng từ | ✓ | `whisper-1` | ✗ |
| Văn bản trực tiếp | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) là bản triển khai nhanh của Whisper (OpenAI) chạy trên máy tính của bạn, nên âm thanh không bao giờ rời khỏi máy. Nó chạy trên CPU hoặc, nhanh hơn nhiều, trên GPU NVIDIA có CUDA.

### Mô hình

Mô hình lớn hơn chính xác hơn, nhưng chậm hơn và dùng nhiều bộ nhớ hơn. Mô hình được tải xuống lần đầu khi sử dụng.

| Mô hình | Tham số | VRAM cần thiết |
| :---: | :---: | :---: |
| `tiny`, `tiny.en` | 39 M | ~1 GB |
| `base`, `base.en` | 74 M | ~1 GB |
| `small`, `small.en` | 244 M | ~2 GB |
| `distil-small.en` | 166 M | ~2 GB |
| `medium`, `medium.en` | 769 M | ~5 GB |
| `distil-medium.en` | 394 M | ~3 GB |
| `large-v1`, `large-v2`, `large-v3` | 1550 M | <8 GB |
| `large-v3-turbo` | 809 M | ~6 GB |
| `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5` | 756 M | ~5 GB |

- **`large-v2`** là mặc định, vì `large-v3` thường "ảo giác" và lặp lại văn bản hơn, đặc biệt ở một số ngôn ngữ như tiếng Nhật, và bỏ sót dấu câu nhiều hơn.
- **`large-v3-turbo`** là phiên bản rút gọn của `large-v3`, nhanh hơn nhiều mà độ chính xác gần như tương đương.
- Các mô hình kết thúc bằng **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) và các mô hình **chưng cất** (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) chỉ chép lời tiếng Anh. Chúng nhanh hơn các mô hình đa ngôn ngữ cùng kích thước.

:::tip
Để dùng thử Audiotext nhanh, hãy chọn `tiny` hoặc `small`. Để có chất lượng tốt nhất, hãy dùng `large-v2` hoặc `large-v3-turbo` trên GPU.
:::

### Tùy chọn nâng cao

Nằm trong **Tùy chọn ưu tiên** → **WhisperX**. Chỉ thay đổi khi gặp sự cố hoặc khi bạn biết mình đang làm gì: GPU hết bộ nhớ có thể làm treo hệ thống.

- **Kiểu tính toán**: độ chính xác số học của mô hình. `float16` nhanh hơn trên GPU (mặc định khi có CUDA). `int8` dùng ít bộ nhớ hơn và là mặc định trên CPU, vì nhiều CPU không hỗ trợ `float16` hiệu quả. `float32` chính xác nhất, dành cho GPU có trên 8 GB VRAM.
- **Kích thước lô**: số phần âm thanh được xử lý cùng lúc (mặc định `8`). Không ảnh hưởng chất lượng, chỉ ảnh hưởng tốc độ. Giảm xuống nếu hết bộ nhớ; khuyến nghị tối đa `16`.
- **Dùng CPU**: chạy WhisperX trên CPU. Luôn bật nếu không tìm thấy GPU CUDA.

## Whisper API

Dùng [API chuyển giọng nói thành văn bản của OpenAI](https://platform.openai.com/docs/guides/speech-to-text). API này dành cho máy tính không chạy WhisperX mượt mà, và cần khóa API OpenAI (xem [Khóa API](/vi/reference/preferences/#khóa-api)).

| Mô hình | Dấu thời gian | Người nói | Ghi chú |
| --- | :---: | :---: | --- |
| `whisper-1` (mặc định) | ✓ | ✗ | Có thể phát theo từng đoạn và tạo phụ đề. Dịch sang tiếng Anh. |
| `gpt-transcribe` | ✗ | ✗ | Chính xác hơn, nhưng không có dấu thời gian. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Nhận diện người nói. Không dùng từ khóa và mô tả. |

Bản dịch sang tiếng Anh luôn do `whisper-1` thực hiện, vì đây là mô hình duy nhất biết dịch.

Âm thanh dài được chia thành các đoạn tối đa 10 phút, cắt ở chỗ im lặng để không cắt đôi từ nào, vì API từ chối tệp lớn hơn 25 MB. Với `whisper-1`, phần cuối của mỗi đoạn được dùng làm ngữ cảnh cho đoạn tiếp theo; với `gpt-4o-transcribe-diarize`, một mẫu giọng của từng người nói được gửi kèm các đoạn tiếp theo để họ giữ nguyên nhãn.

### Tùy chọn

- **Định dạng phản hồi** (thẻ Đầu ra, cho thư mục): `text` (mặc định), `json`, `verbose_json`, `srt` hoặc `vtt`. Phụ đề và `verbose_json` cần mô hình có dấu thời gian.
- **Nhiệt độ** (Tùy chọn ưu tiên → Whisper API): từ 0 đến 1. Giá trị cao như 0,8 làm kết quả ngẫu nhiên hơn, giá trị thấp như 0,2 làm kết quả tập trung hơn. Với 0 (mặc định), mô hình tự tăng khi cần.
- **Dấu thời gian của từ** (Tùy chọn ưu tiên → Whisper API): `whisper-1` có trả về dấu thời gian của từng từ hay không, để đánh dấu khi phát. Mất nhiều thời gian hơn. Bật theo mặc định.

## Google API

Dùng [Google Speech-to-Text API](https://cloud.google.com/speech-to-text). API này không thêm dấu câu (Audiotext sẽ thêm), và chất lượng thấp hơn Whisper, nên bản chép lời thường cần sửa. Nó không thể phát hiện ngôn ngữ hay dịch, và trả về văn bản thuần không có dấu thời gian.

Không có khóa API thì dùng gói miễn phí, giới hạn 60 phút mỗi tháng. Để mở rộng, hãy đặt khóa Google API. Google tính phí sử dụng, và Audiotext không chịu trách nhiệm về khoản phí này.
