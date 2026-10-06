---
title: Bản ghi lời
description: Phát, tìm kiếm, sửa, sao chép và xuất bản chép lời, và xem video cùng phụ đề.
sidebar:
  order: 3
---

Chọn một bản chép lời trong [lịch sử](/vi/guides/history/) để mở. Thanh công cụ chuyển giữa ba chế độ, **Bản ghi lời**, **Văn bản thuần** và **Bản tóm tắt**, và có các nút **Dịch**, **Sao chép** và **Xuất**.

## Chế độ bản ghi lời

Hiển thị từng đoạn của bản chép lời (một câu, hoặc một phần của câu dài) kèm thời điểm bắt đầu và kết thúc và, nếu đã nhận diện người nói, người nói của đoạn đó.

Theo mặc định, thời gian được hiển thị rút gọn (`01:05 – 01:09`). Để xem chính xác đến mili giây như trong phụ đề (`00:01:05,900 – 00:01:09,350`), hãy chọn **Dấu thời gian chính xác (00:00:01,000)** trong menu `⋯`.

Dấu thời gian chỉ có với **WhisperX** và các mô hình `whisper-1` và `gpt-4o-transcribe-diarize` của **Whisper API**. Không có dấu thời gian, bản ghi lời không thể phát theo từng đoạn; hãy dùng chế độ **Văn bản thuần**.

### Phát âm thanh

- **Nhấp vào một đoạn** để phát âm thanh từ đó. Đoạn đang phát được đánh dấu, và văn bản cuộn theo khi phát. Với thời gian theo từng từ, mỗi từ cũng được đánh dấu.
- Dùng thanh trình phát để phát, tạm dừng, chuyển đến bất kỳ vị trí nào và đổi **tốc độ**, từ `0.5×` đến `2×`, mà vẫn giữ cao độ giọng nói.
- Phím tắt: `Phím cách` phát hoặc tạm dừng, `←`/`→` lùi hoặc tiến 5 giây.

Nếu tệp nguồn đã bị di chuyển hoặc xóa, âm thanh sẽ không khả dụng nhưng văn bản vẫn còn. Audiotext tự lưu các bản ghi âm từ micrô, nên luôn có thể phát lại.

![Một bản chép lời đang phát, với đoạn hiện tại được tô sáng](/screenshots/transcript.png)

### Xem video có phụ đề

Bản chép lời của video hiển thị video phía trên văn bản. Menu của video cho phép **Hiển thị phụ đề trên video** và chọn **Kích thước** (nhỏ, vừa hoặc lớn), **Vị trí** (dưới hoặc trên) và **Kiểu** (nền tối hoặc viền chữ). Nếu bản chép lời có [bản dịch](/vi/guides/summary-and-translation/#bản-dịch), menu cũng cho chọn phụ đề hiển thị **Chép lời** hay **Bản dịch**.

### Tìm kiếm

Nhấn `Ctrl+F` (`⌘F` trên macOS) và gõ. `Enter` và `Shift+Enter` chuyển đến kết quả tiếp theo và trước đó, còn `Esc` xóa tìm kiếm.

## Sửa bản chép lời

Để sửa bản chép lời mà vẫn giữ dấu thời gian (được phụ đề và trình phát sử dụng), hãy dùng các tùy chọn trong menu `⋯`, hoặc nhấp chuột phải vào một đoạn:

- **Tìm và thay thế…**: thay một từ hoặc cụm từ trong toàn bộ bản chép lời, ví dụ một cái tên bị viết sai. Cho biết văn bản xuất hiện bao nhiêu lần trước khi thay, và có thể **Phân biệt hoa thường**.
- **Đổi tên người nói…**: đặt tên cho từng người nói (`SPEAKER_00` → `Lan`). Đặt cùng một tên cho hai người nói sẽ gộp họ lại.
- **Chỉnh sửa văn bản…**: nhấp chuột phải vào một đoạn để đổi nội dung.
- **Phát từ đây**: nhấp chuột phải vào một đoạn để phát đoạn đó.

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
| Bảng (`.tsv`) | Mỗi đoạn một dòng, với thời điểm bắt đầu và kết thúc (tính bằng mili giây) và văn bản |
| JSON (`.json`) | Văn bản, các đoạn kèm dấu thời gian, từ và người nói, và bản tóm tắt (nếu có) |

Phụ đề và bảng cần có dấu thời gian.

Nếu bản chép lời có bản dịch, hãy chọn **Bản dịch sang…** trong cùng menu (hoặc nhấp nút xuất của bản dịch) để xuất bản dịch theo cùng các định dạng. Tên tệp có chứa ngôn ngữ (ví dụ `video.es.srt`), nên trình phát video sẽ tải nó cùng video.

## Đổi tên, gắn nhãn và ghi chú

Phần đầu của bản chép lời hiển thị tên, nguồn, ngày và nhãn. Nhấp đúp vào tên để đổi tên, nhấp vào nhãn để thay đổi, hoặc nhấp **Thêm ghi chú** để viết ghi chú. Nhấp vào ghi chú, hoặc biểu tượng bút chì, để sửa, và biểu tượng thùng rác để xóa. Các tùy chọn khác nằm trong [lịch sử](/vi/guides/history/).
