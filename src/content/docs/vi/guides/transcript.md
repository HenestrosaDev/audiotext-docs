---
title: Bản ghi lời
description: Phát, tìm kiếm, sửa, sao chép và xuất bản chép lời, và xem video cùng phụ đề.
sidebar:
  order: 3
---

Chọn một bản chép lời trong [lịch sử](/vi/guides/history/) để mở. Thanh công cụ chuyển giữa ba chế độ, **Bản ghi lời**, **Văn bản thuần** và **Bản tóm tắt**, và có các nút **Dịch**, **Sao chép** và **Xuất**.

## Chế độ bản ghi lời

Hiển thị từng câu kèm dấu thời gian và, nếu đã nhận diện người nói, người nói của câu đó.

Dấu thời gian chỉ có với **WhisperX** và các mô hình `whisper-1` và `gpt-4o-transcribe-diarize` của **Whisper API**. Không có dấu thời gian, bản ghi lời không thể phát theo từng câu; hãy dùng chế độ **Văn bản thuần**.

### Phát âm thanh

- **Nhấp vào một câu** để phát âm thanh từ đó. Câu đang phát được đánh dấu, và văn bản cuộn theo khi phát. Với thời gian theo từng từ, mỗi từ cũng được đánh dấu.
- Dùng thanh trình phát để phát, tạm dừng, chuyển đến bất kỳ vị trí nào và đổi **tốc độ**, từ `0.5×` đến `2×`, mà vẫn giữ cao độ giọng nói.
- Phím tắt: `Phím cách` phát hoặc tạm dừng, `←`/`→` lùi hoặc tiến 5 giây.

Nếu tệp nguồn đã bị di chuyển hoặc xóa, âm thanh sẽ không khả dụng nhưng văn bản vẫn còn. Audiotext tự lưu các bản ghi âm từ micrô, nên luôn có thể phát lại.

![Một bản chép lời đang phát, với câu hiện tại được tô sáng](/screenshots/transcript.png)

### Xem video có phụ đề

Bản chép lời của video hiển thị video phía trên văn bản. Menu của video cho phép **Hiển thị phụ đề trên video** và chọn **Kích thước** (nhỏ, vừa hoặc lớn), **Vị trí** (dưới hoặc trên) và **Kiểu** (nền tối hoặc viền chữ).

### Tìm kiếm

Nhấn `Ctrl+F` (`⌘F` trên macOS) và gõ. `Enter` và `Shift+Enter` chuyển đến kết quả tiếp theo và trước đó, còn `Esc` xóa tìm kiếm.

## Sửa bản chép lời

Để sửa bản chép lời mà vẫn giữ dấu thời gian (được phụ đề và trình phát sử dụng), hãy dùng các tùy chọn trong menu `⋯`, hoặc nhấp chuột phải vào một câu:

- **Tìm và thay thế…**: thay một từ hoặc cụm từ trong toàn bộ bản chép lời, ví dụ một cái tên bị viết sai. Cho biết văn bản xuất hiện bao nhiêu lần trước khi thay, và có thể **Phân biệt hoa thường**.
- **Đổi tên người nói…**: đặt tên cho từng người nói (`SPEAKER_00` → `Lan`). Đặt cùng một tên cho hai người nói sẽ gộp họ lại.
- **Chỉnh sửa văn bản…**: nhấp chuột phải vào một câu để đổi nội dung.
- **Phát từ đây**: nhấp chuột phải vào một câu để phát câu đó.

Các từ không thay đổi giữ nguyên thời gian, nên vẫn được đánh dấu khi phát.

## Văn bản thuần

Chế độ **Văn bản thuần** cho phép chỉnh sửa văn bản tự do, như trong trình soạn thảo văn bản. Thay đổi được lưu tự động. Bản ghi lời giữ văn bản gốc kèm dấu thời gian, nên phụ đề không dùng các chỉnh sửa trong văn bản thuần.

## Sao chép và xuất

**Sao chép** sao chép văn bản của chế độ hiện tại (bản ghi lời, bản tóm tắt hoặc bản dịch).

**Xuất** (hoặc `Ctrl+S`, `⌘S` trên macOS) lưu bản chép lời dưới dạng:

| Định dạng | Nội dung |
| --- | --- |
| Văn bản thuần (`.txt`) | Văn bản |
| Markdown (`.md`) | Bản tóm tắt (nếu có) và văn bản theo đoạn, kèm dấu thời gian và người nói của mỗi đoạn |
| Tài liệu Word (`.docx`) | Giống Markdown, sẵn sàng để chỉnh sửa hoặc in |
| Phụ đề (`.srt`) | Phụ đề cho trình phát video |
| Phụ đề web (`.vtt`) | Phụ đề cho web |
| Bảng (`.tsv`) | Mỗi câu một dòng, với thời điểm bắt đầu và kết thúc (tính bằng mili giây) và văn bản |
| JSON (`.json`) | Văn bản, các đoạn kèm dấu thời gian, từ và người nói, và bản tóm tắt (nếu có) |

Phụ đề và bảng cần có dấu thời gian.

## Đổi tên, gắn nhãn và ghi chú

Phần đầu của bản chép lời hiển thị tên, nguồn, ngày và nhãn. Nhấp đúp vào tên để đổi tên, nhấp vào nhãn để thay đổi, hoặc nhấp **Thêm ghi chú** để viết ghi chú. Các tùy chọn khác nằm trong [lịch sử](/vi/guides/history/).
