---
title: Cài đặt chép lời
description: Chọn công cụ, ngôn ngữ, ngữ cảnh, tùy chọn và đầu ra của mỗi bản chép lời.
sidebar:
  order: 2
---

Trước khi chép lời, Audiotext hiển thị cài đặt của bản chép lời, được nhóm thành các thẻ. Cài đặt được ghi nhớ cho lần sau, và mỗi bản chép lời giữ lại cài đặt đã dùng để tạo ra nó.

![Cài đặt chép lời của một tệp](/screenshots/transcription-settings.png)

## Công cụ

**Phương thức chép lời**:

| Công cụ | Chạy ở đâu | Chi phí | Ghi chú |
| --- | --- | --- | --- |
| **WhisperX** (mặc định) | Máy tính của bạn | Miễn phí, không giới hạn | Riêng tư và ngoại tuyến. Nhiều tùy chọn hơn: người nói, thời gian theo từng từ, văn bản trực tiếp. |
| **Whisper API** | Máy chủ của OpenAI | Trả phí theo phút | Cần [khóa API OpenAI](/vi/reference/preferences/#khóa-api). Dành cho máy tính không chạy WhisperX mượt mà. |
| **Google API** | Máy chủ của Google | Gói miễn phí hoặc trả phí | Chất lượng thấp hơn và không có dấu thời gian. Khóa API là tùy chọn. |

**Mô hình** phụ thuộc vào công cụ. Với WhisperX, mô hình lớn hơn chính xác hơn nhưng chậm hơn. Với Whisper API, mô hình quyết định bản chép lời có dấu thời gian và người nói hay không. Xem [Công cụ](/vi/reference/engines/) để so sánh.

## Ngôn ngữ

- **Ngôn ngữ của âm thanh**: mặc định là **Tự động phát hiện**. Chọn ngôn ngữ giúp tránh lỗi với âm thanh ngắn hoặc pha trộn. Google API không thể phát hiện, nên bạn phải chọn.
- **Ngôn ngữ của bản chép lời**: mặc định là **Giống âm thanh**. Chọn ngôn ngữ khác để dịch âm thanh trong khi chép lời.

Khi hai ngôn ngữ khác nhau, các tùy chọn **Bản dịch** sẽ xuất hiện:

- **Dịch bằng Whisper (khuyên dùng)**: Whisper chép lời và dịch âm thanh trong một bước. Chỉ dịch được sang tiếng Anh.
- **Viết trực tiếp bằng _ngôn ngữ_ (thử nghiệm)**: Whisper được yêu cầu viết bản chép lời trực tiếp bằng ngôn ngữ đó. Cách này hiệu quả với nhiều ngôn ngữ, nhưng hãy kiểm tra kết quả.

Google API không thể dịch. Để dịch bản chép lời sang bất kỳ ngôn ngữ nào sau này, với nhiều nhà cung cấp hơn, hãy dùng nút [Dịch](/vi/guides/summary-and-translation/#bản-dịch) của bản ghi lời.

## Ngữ cảnh

Hai trường không bắt buộc giúp ích cho mô hình:

- **Từ khóa**: tên riêng, thuật ngữ hoặc từ viết tắt xuất hiện trong âm thanh, phân tách bằng dấu phẩy (ví dụ `Audiotext, WhisperX, Henestrosa`), để chúng được viết đúng. Đây chỉ là gợi ý: một từ khóa chỉ được viết ra nếu nó được nói trong âm thanh.
- **Mô tả**: âm thanh nói về điều gì, chẳng hạn chủ đề hoặc bối cảnh (ví dụ `Một cuộc phỏng vấn về nhận dạng giọng nói`).

WhisperX và Whisper API sử dụng chúng, trừ mô hình `gpt-4o-transcribe-diarize`. Google API không sử dụng chúng.

## Tùy chọn

- **Thời gian theo từng từ** (WhisperX): căn chỉnh từng từ với âm thanh để đánh dấu khi phát. Mất thêm một chút thời gian. Phụ đề đã sử dụng sẵn.
- **Tách giọng nói**: giảm nhạc và tiếng ồn nền trước khi chép lời.
- **Nhận diện người nói** (WhisperX): gắn nhãn ai nói ở mỗi đoạn, ví dụ `SPEAKER_00`. Nếu bạn biết có bao nhiêu người nói, hãy nhập vào **Số người nói** (`0` để tự phát hiện). Cần token Hugging Face miễn phí; xem [Nhận diện những người nói](#nhận-diện-những-người-nói). Với Whisper API, mô hình `gpt-4o-transcribe-diarize` nhận diện người nói.

### Nhận diện những người nói

Mô hình nhận diện người nói, [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1), miễn phí nhưng cần token Hugging Face:

1. Tạo tài khoản trên [Hugging Face](https://huggingface.co/join) và chấp nhận điều khoản của [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1).
2. Tạo token với vai trò `Read` trong [cài đặt của bạn](https://huggingface.co/settings/tokens).
3. Nhấp **Đặt token Hugging Face…** và dán token vào.

Mô hình được tải xuống lần đầu khi sử dụng. Sau đó, người nói được nhận diện ngoại tuyến.

## Văn bản trực tiếp

Chỉ hiển thị cho micrô. Xem [Văn bản trực tiếp](/vi/guides/sources/#văn-bản-trực-tiếp).

## Thư mục và Đầu ra

Chỉ hiển thị cho thư mục:

- **Theo dõi thư mục**: xem [Theo dõi một thư mục](/vi/guides/sources/#theo-dõi-một-thư-mục).
- **Loại tệp**: với WhisperX, một hoặc nhiều trong số `.txt`, `.srt`, `.vtt`, `.json`, `.tsv` và `.aud`. Với Whisper API, định dạng của tệp (`text`, `json`, `verbose_json`, `srt` hoặc `vtt`); phụ đề cần mô hình có dấu thời gian. Google API trả về văn bản thuần (`.txt`).
- **Vị trí**: tệp được lưu cạnh từng tệp nguồn. Nhấp **Thay đổi…** để lưu vào thư mục khác (các thư mục con sẽ được tạo lại), hoặc **Cạnh nguồn** để quay lại.
- **Ghi đè tệp hiện có**: chép lời lại các tệp đã có bản chép lời và thay thế bản cũ.

Các tùy chọn phụ đề (độ rộng dòng, số dòng, đánh dấu từ) nằm trong [Tùy chọn ưu tiên](/vi/reference/preferences/#phụ-đề).
