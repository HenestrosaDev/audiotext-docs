---
title: Bản ghi lời
description: Phát, tìm kiếm, sửa, rà soát, sao chép và xuất bản chép lời, và xem hoặc xuất video cùng phụ đề.
sidebar:
  order: 3
---

Chọn một bản chép lời trong [lịch sử](/vi/guides/history/) để mở. Thanh công cụ chuyển giữa bốn chế độ, **Phụ đề**, **Văn bản thuần**, **Bản tóm tắt** và **Hỏi**, và có nút **Dịch** cùng menu `⋯`.

Bản chép lời hiển thị trong một thẻ có tiêu đề là ngôn ngữ của nó. Các nút ở phần đầu thẻ cho phép tìm và thay thế trong đó, sao chép, xuất và **Chép lời lại** (sau khi hỏi bạn, vì các chỉnh sửa văn bản sẽ mất).

## Phụ đề

Hiển thị bản chép lời được chia thành các phụ đề của video, kèm thời điểm bắt đầu và kết thúc của từng phụ đề và, nếu đã nhận diện người nói, người nói. Độ dài của chúng theo [tùy chọn phụ đề](/vi/reference/preferences/#phụ-đề).

Theo mặc định, thời gian được hiển thị chính xác đến mili giây như trong phụ đề (`00:01:05,900 – 00:01:09,350`). Để rút gọn (`01:05 – 01:09`), hãy bỏ chọn **Dấu thời gian chính xác (HH:MM:SS,mmm)** trong menu `⋯`.

Phía trên phụ đề, một dòng đếm số phụ đề và, nếu đã nhận diện người nói, số người nói (ví dụ: `Phụ đề: 120 · Số người nói: 3`). Một đoạn dài được chia thành nhiều phụ đề được tính là nhiều phụ đề.

Dấu thời gian chỉ có với **WhisperX** và các mô hình `whisper-1` và `gpt-4o-transcribe-diarize` của **Whisper API**. Không có dấu thời gian, bản ghi lời không thể phát theo từng phụ đề; hãy dùng chế độ **Văn bản thuần**.

### Phát âm thanh

- **Nhấp vào một phụ đề** để phát âm thanh từ đó. Phụ đề đang phát được đánh dấu và giữ ở giữa văn bản. Với thời gian theo từng từ, mỗi từ cũng được đánh dấu.
- Dùng thanh trình phát để phát, tạm dừng, chuyển đến bất kỳ vị trí nào và đổi **tốc độ**, từ `0.5×` đến `2×`, mà vẫn giữ cao độ giọng nói.
- Phím tắt: `Phím cách` phát hoặc tạm dừng, `←`/`→` lùi hoặc tiến 5 giây.

Nếu tệp nguồn đã bị di chuyển hoặc xóa, âm thanh sẽ không khả dụng nhưng văn bản vẫn còn. Audiotext tự lưu các bản ghi âm từ micrô, nên luôn có thể phát lại.

![Một bản chép lời đang phát, với đoạn hiện tại được tô sáng](/screenshots/transcript.png)

### Xem video có phụ đề

Bản chép lời của video hiển thị video phía trên văn bản. Menu của video cho phép **Hiển thị phụ đề trên video** và chọn **Kích thước** (nhỏ, vừa hoặc lớn), **Vị trí** (dưới hoặc trên) và **Kiểu** (nền tối hoặc viền chữ). Nếu bản chép lời có [bản dịch](/vi/guides/summary-and-translation/#bản-dịch), menu cũng cho chọn phụ đề hiển thị **Chép lời** hay **Bản dịch** sang một ngôn ngữ. Nút **Phụ đề** trên thanh trình phát cũng hiện hoặc ẩn chúng, và mũi tên bên cạnh mở cùng menu đó.

## Tìm và thay thế

Nhấn `Ctrl+F` (`⌘F` trên macOS), hoặc nhấp vào kính lúp ở phần đầu, để mở cửa sổ tìm và thay thế trong văn bản bạn đang làm việc: bản chép lời hoặc bản dịch của nó. Cửa sổ tìm văn bản ngay khi bạn gõ (không tìm trong dấu thời gian và người nói) và cho biết có bao nhiêu kết quả.

- `Enter` và `Shift+Enter`, hoặc các mũi tên, chuyển đến kết quả tiếp theo và trước đó.
- **Thay thế** thay kết quả hiện tại, còn **Thay thế tất cả** thay mọi kết quả, ví dụ một cái tên bị viết sai. Chọn **Phân biệt hoa thường** để chỉ tìm văn bản có cùng chữ hoa.
- Cửa sổ không chặn ứng dụng, nên bạn vẫn có thể đọc và phát văn bản khi nó đang mở. **Luôn ở trên cùng** giữ nó phía trên cửa sổ chính.
- `Esc` đóng cửa sổ.

Ở chế độ **Văn bản thuần**, cửa sổ chỉ tìm (**Tìm trong bản chép lời**), vì không thể liên kết một kết quả ở đó với một phụ đề. Hãy chuyển về **Phụ đề** để thay thế.

## Sửa bản chép lời

Để sửa bản chép lời mà vẫn giữ dấu thời gian (được phụ đề và trình phát sử dụng), hãy dùng cửa sổ [Tìm và thay thế](#tìm-và-thay-thế), hoặc nhấp chuột phải vào một phụ đề:

- **Phát từ đây**: phát phụ đề đó.
- **Sao chép**: sao chép văn bản của nó.
- **Chỉnh sửa văn bản…**: đổi nội dung.
- **Đổi tên người nói…**: đặt tên cho từng người nói (`SPEAKER_00` → `Lan`). Đặt cùng một tên cho hai người nói sẽ gộp họ lại. Mục này cũng có trong menu `⋯`.

Các từ không thay đổi giữ nguyên thời gian, nên vẫn được đánh dấu khi phát.

## Rà soát các từ có độ tin cậy thấp

Những từ mà công cụ kém chắc chắn nhất được gạch chân, để bạn biết nên kiểm tra chỗ nào trước. WhisperX chấm điểm từng từ khi xác định thời gian của nó (**Thời gian theo từng từ**, bật theo mặc định), còn mô hình `whisper-1` của Whisper API chấm điểm từng đoạn, nên các đoạn của nó được gạch chân toàn bộ.

Một thanh phía trên văn bản cho biết còn bao nhiêu từ cần xem lại (ví dụ `Còn 3/12 cần xem lại`):

- Các mũi tên của thanh, hoặc `Ctrl+J` và `Shift+Ctrl+J` (`⌘J` và `⇧⌘J` trên macOS), chuyển đến từ tiếp theo và trước đó, và đưa trình phát đến đó. Với **Tự động phát**, mỗi từ được phát kèm một đoạn ngắn xung quanh.
- `Enter` chấp nhận nguyên trạng từ bạn đã chuyển đến và sang từ tiếp theo. **Chấp nhận phần còn lại** chấp nhận tất cả các từ còn lại, và **Hoàn tác** hoàn tác lần rà soát cuối.
- Nhấp vào một từ để sửa ngay tại chỗ: gõ văn bản đúng và nhấn `Enter` (hoặc **Chấp nhận** mà không đổi). **Phát lại** (`Ctrl+R`, `⌘R` trên macOS) phát lại từ đó, và `Esc` đóng lại.
- **Chỉ các từ được đánh dấu** chỉ hiển thị các phụ đề có từ cần xem lại.
- Các từ cũng được đánh dấu bên dưới vị trí âm thanh. Nhấp vào một dấu để chuyển đến từ của nó.

Khi đã rà soát hết, **Xem lại các từ đã chấp nhận** đưa các từ bạn đã chấp nhận trở lại. Các từ đã sửa vẫn được xem là đã rà soát.

Các từ được gạch chân khi điểm của chúng dưới 40%. Chọn ngưỡng khác, từ 20% đến 70%, trong `⋯` → **Ngưỡng độ tin cậy thấp**, hoặc từ **Điều chỉnh ngưỡng** trên thanh. Để ngừng gạch chân và ẩn thanh, hãy bỏ chọn **Đánh dấu các từ có độ tin cậy thấp** trong menu `⋯`.

Nếu bản chép lời không có điểm, menu `⋯` cho biết lý do: **Bật “Thời gian theo từng từ” và phiên âm lại**, **Không có mô hình căn chỉnh cho ngôn ngữ này**, **Phiên âm lại để chấm điểm các từ** (được tạo trước khi các từ được chấm điểm) hoặc **Chỉ WhisperX và whisper-1 chấm điểm các từ**.

## Văn bản thuần

Chế độ **Văn bản thuần** hiển thị văn bản của bản chép lời không kèm dấu thời gian. Văn bản này được dựng từ phụ đề, nên chỉ đọc, như ghi chú bên cạnh các chế độ cho biết: để thay đổi, hãy [sửa phụ đề](#sửa-bản-chép-lời), và văn bản thuần sẽ theo đó. Nhờ vậy, mọi bản xuất và bản dịch đều dùng cùng một văn bản.

Các bản chép lời không có dấu thời gian (ví dụ: từ Google API) không có phụ đề, nên văn bản thuần của chúng có thể chỉnh sửa tự do, như trong trình soạn thảo văn bản. Thay đổi được lưu tự động.

:::note
Các phiên bản trước cho phép chỉnh sửa văn bản thuần của bản chép lời có phụ đề. Khi mở một bản chép lời (hoặc bản dịch) như vậy, văn bản thuần của nó được dựng lại từ phụ đề, nên các chỉnh sửa đó bị thay thế.
:::

## Sao chép và xuất

Nút sao chép ở phần đầu sao chép văn bản của bản chép lời.

Nút xuất (hoặc `Ctrl+S`, `⌘S` trên macOS) lưu nó dưới dạng:

| Định dạng | Nội dung |
| --- | --- |
| Bảng (`.tsv`) | Mỗi đoạn một dòng, với thời điểm bắt đầu và kết thúc (tính bằng mili giây) và văn bản |
| JSON (`.json`) | Văn bản, các đoạn kèm dấu thời gian, từ và người nói, và bản tóm tắt (nếu có) |
| Markdown (`.md`) | Bản tóm tắt (nếu có) và văn bản theo đoạn, kèm dấu thời gian và người nói của mỗi đoạn |
| Phụ đề (`.srt`) | Phụ đề cho trình phát video |
| Phụ đề có định dạng (`.ass`) | Phụ đề với một màu cho mỗi người nói, cho trình phát và trình chỉnh sửa video |
| Phụ đề web (`.vtt`) | Phụ đề cho web |
| Tài liệu Word (`.docx`) | Giống Markdown, sẵn sàng để chỉnh sửa hoặc in |
| Văn bản thuần (`.txt`) | Văn bản |

Phụ đề và bảng cần có dấu thời gian. Các [bản dịch](/vi/guides/summary-and-translation/#phụ-đề-và-xuất-tệp) và [bản tóm tắt](/vi/guides/summary-and-translation/#tóm-tắt) được xuất từ bảng riêng của chúng.

### Xuất video kèm phụ đề

Để chia sẻ video ở nơi không thể tải tệp phụ đề (ví dụ mạng xã hội), hãy chọn **Video có phụ đề (.mp4)…** trong menu xuất của bản chép lời, hoặc của một bản dịch. Audiotext tạo một bản sao của video với phụ đề được vẽ lên, đúng như hiển thị trong ứng dụng: với kích thước, vị trí và kiểu của chúng (xem [Xem video có phụ đề](#xem-video-có-phụ-đề)).

Bản sao được tạo ở chế độ nền, và thanh trạng thái hiển thị tiến trình. Để hủy, hãy chọn **Dừng thêm phụ đề vào video** trong cùng menu. Bản sao là tệp MP4 (video H.264 và âm thanh AAC), và video gốc không thay đổi.

Nếu không có phông chữ nào trong hệ thống có một số ký tự của phụ đề, chúng sẽ được vẽ thành ô vuông, và Audiotext liệt kê chúng khi hoàn tất. Xem [Khắc phục sự cố](/vi/help/troubleshooting/#video-có-phụ-đề-hiển-thị-ô-vuông).

## Đổi tên, gắn nhãn và ghi chú

Phần đầu của bản chép lời hiển thị tên, nguồn, ngày và nhãn. Nhấp đúp vào tên để đổi tên, nhấp vào nhãn để thay đổi, hoặc nhấp **Thêm ghi chú** để viết ghi chú. Nhấp vào ghi chú, hoặc biểu tượng bút chì, để sửa, và biểu tượng thùng rác để xóa.

Menu `⋯` cũng có các tùy chọn này, và mở thư mục của tệp nguồn hoặc **thư mục chứa các tệp đã lưu**. Các tùy chọn khác nằm trong [lịch sử](/vi/guides/history/).
