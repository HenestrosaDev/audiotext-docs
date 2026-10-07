---
title: Khắc phục sự cố
description: Cách xử lý các sự cố thường gặp nhất với Audiotext.
sidebar:
  order: 1
---

## Lần chép lời đầu tiên bằng WhisperX mất nhiều thời gian

Lần đầu dùng một mô hình, mô hình đó sẽ được tải xuống, có thể mất vài phút tùy vào kết nối và kích thước mô hình (tới ~3 GB). Tiến trình cho biết khi nào mô hình đang được tải. Mô hình vẫn nằm trong bộ nhớ khi các tùy chọn của nó không thay đổi, nên các lần chép lời tiếp theo bắt đầu ngay.

## WhisperX báo lỗi `CUDA out of memory`

GPU của bạn không đủ bộ nhớ cho cài đặt hiện tại. Hãy thử lần lượt:

1. Giảm **Kích thước lô** (ví dụ `4`) trong **Tùy chọn ưu tiên** → **WhisperX**.
2. Dùng mô hình nhỏ hơn (ví dụ `small` hoặc `base`).
3. Dùng **Kiểu tính toán** nhẹ hơn (ví dụ `int8`).

Hai cách cuối có thể làm giảm chất lượng. Xem [Công cụ](/vi/reference/engines/#mô-hình) để biết bộ nhớ mỗi mô hình cần.

## Chép lời mất quá nhiều thời gian

Tốc độ của WhisperX phụ thuộc vào phần cứng, nên đừng mong kết quả tức thì trên CPU phổ thông. Hãy thử mô hình nhỏ hơn như `small`, `large-v3-turbo` trên GPU, hoặc kiểu tính toán `int8`. Bạn cũng có thể dùng **Whisper API** hoặc **Google API**, vốn chạy trên máy chủ từ xa.

## Whisper API trả về lỗi `429`

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

Tài khoản OpenAI của bạn đã hết tín dụng, hoặc bạn cần nạp tiền trước khi dùng API lần đầu (kể cả khi có tín dụng miễn phí). Mua tín dụng trong mục [Billing](https://platform.openai.com/settings/organization/billing/overview) của tài khoản OpenAI. Tài khoản có thể mất tới 10 phút để được kích hoạt.

Nếu bạn tạo khóa API trước lần nạp tiền đầu tiên và lỗi vẫn còn sau 10 phút, hãy tạo khóa mới và đặt trong **Tùy chọn ưu tiên** → **Khóa API**.

## Không nhận diện được người nói

Nếu bản chép lời thất bại với **Nhận diện người nói cần token Hugging Face.** hoặc **Không thể tải xuống mô hình nhận diện người nói.**, token bị thiếu, không hợp lệ hoặc không truy cập được mô hình.

Nhận diện người nói cần token Hugging Face và việc chấp nhận điều khoản của mô hình. Hãy kiểm tra rằng:

- Bạn đã chấp nhận điều khoản của [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) bằng cùng một tài khoản.
- Token có vai trò `Read` và đã được đặt trong **Tùy chọn ưu tiên** → **Khóa API**.

Xem [Nhận diện những người nói](/vi/guides/transcription-settings/#nhận-diện-những-người-nói).

## Không tìm thấy micrô, hoặc không ghi được gì

- Kiểm tra micrô đã được kết nối và nhấp nút làm mới cạnh danh sách micrô.
- Trên macOS, cấp quyền cho Audiotext trong **Cài đặt hệ thống** → **Quyền riêng tư & Bảo mật** → **Micrô**. Trên Windows, trong **Cài đặt** → **Quyền riêng tư** → **Micrô**.
- Nếu đồng hồ mức âm hiển thị **Không có âm thanh**, hãy chọn micrô khác trong danh sách hoặc kiểm tra micrô có bị tắt tiếng không.
- Nếu hiển thị **Không ghi được âm thanh nào.**, việc ghi âm đã kết thúc trước khi micrô gửi bất kỳ âm thanh nào. Hãy ghi lại, hoặc chọn micrô khác.

## Văn bản trực tiếp không hiển thị

Nếu **Không thể hiển thị văn bản khi đang ghi âm.** hiển thị khi đang ghi âm, **Mô hình trực tiếp** không tải được: ví dụ, mô hình được tải xuống lần đầu khi dùng, việc này cần kết nối Internet, hoặc không đủ bộ nhớ. Bản ghi âm không bị ảnh hưởng và vẫn được chép lời như thường khi bạn dừng. Chọn **Mô hình trực tiếp** nhỏ hơn (ví dụ `tiny` hoặc `base`) trong thẻ **Văn bản trực tiếp**.

## Không phát được âm thanh của bản chép lời

Tệp nguồn đã bị di chuyển hoặc xóa. Văn bản vẫn được giữ lại, nhưng âm thanh chỉ phát được từ tệp gốc. Audiotext tự lưu các bản ghi âm từ micrô và âm thanh từ URL.

## Không tải được video YouTube

Hãy kiểm tra URL đúng và video ở chế độ công khai. YouTube thay đổi thường xuyên, nên nếu vẫn lỗi, hãy kiểm tra xem có phiên bản Audiotext mới hơn không.

Nếu thay vào đó hiển thị **Video YouTube không có rãnh âm thanh.**, video không có âm thanh để chép lời.

## Không thể chép lời một liên kết

- **URL không trỏ đến tệp âm thanh hoặc video.**: liên kết mở một trang web, không phải một tệp. Chỉ liên kết của video YouTube và liên kết trực tiếp đến tệp âm thanh hoặc video mới dùng được. Hãy tìm trên trang liên kết tải tệp xuống (ví dụ tập của một podcast) và dùng nó, hoặc tải tệp xuống rồi chép lời bằng nguồn **Tệp**.
- **Không thể tải xuống tệp: …**: không truy cập được tệp. Kiểm tra liên kết có mở được trong trình duyệt không và bạn có đang kết nối Internet không. Không thể tải xuống liên kết yêu cầu đăng nhập: hãy tự tải tệp xuống và dùng nguồn **Tệp**.

## Thư mục không chép lời được tệp nào

Các tệp đã có bản chép lời sẽ bị bỏ qua. Bật **Ghi đè tệp hiện có** để chép lời lại. Thư mục cũng phải chứa [tệp được hỗ trợ](/vi/reference/formats-and-languages/).

## Google API yêu cầu chọn ngôn ngữ

Google API không thể phát hiện ngôn ngữ. Hãy chọn **Ngôn ngữ của âm thanh** trong cài đặt.

## Tóm tắt hoặc bản dịch thất bại

- **DeepL không thể dịch sang ….**: DeepL không hỗ trợ ngôn ngữ đó. Hãy chọn nhà cung cấp khác, như một mô hình ngôn ngữ.
- **Phản hồi của mô hình quá dài.**, **Mô hình không trả về bản tóm tắt hợp lệ.** hoặc **Mô hình không trả về bản dịch hợp lệ.**: mô hình không viết tóm tắt hoặc bản dịch theo định dạng mong đợi. Hãy thử lại, hoặc chọn mô hình lớn hơn trong **Tùy chọn ưu tiên** → **AI**. Các mô hình nhỏ của Ollama thất bại thường xuyên hơn.
- Với mọi lỗi khác, hãy kiểm tra khóa API của nhà cung cấp đã được đặt trong **Tùy chọn ưu tiên** → **Khóa API** và tài khoản của bạn còn tín dụng.

## Không thể kiểm tra cập nhật

**Không thể kiểm tra cập nhật.** nghĩa là Audiotext không kết nối được với GitHub. Hãy kiểm tra kết nối Internet, hoặc xem tường lửa hay proxy có chặn kết nối không. Bạn luôn có thể tải phiên bản mới nhất từ [trang phát hành](https://github.com/HenestrosaDev/audiotext/releases/latest).

## Sự cố khác

Tìm trong [issues](https://github.com/HenestrosaDev/audiotext/issues) hoặc đặt câu hỏi trong [thảo luận](https://github.com/HenestrosaDev/audiotext/discussions). Nếu bạn phát hiện lỗi, hãy [báo cáo](https://github.com/HenestrosaDev/audiotext/issues/new/choose) kèm hệ điều hành, phiên bản Audiotext và các bước tái hiện lỗi.
