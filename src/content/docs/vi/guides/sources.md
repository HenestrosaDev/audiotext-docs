---
title: Nguồn âm thanh
description: Chép lời tệp, video YouTube và liên kết, bản ghi âm từ micrô, thư mục và thư mục được theo dõi.
sidebar:
  order: 1
---

Audiotext chép lời từ bốn loại nguồn, mà bạn chọn trên thanh trên cùng ở mục **Bản chép lời mới**.

## Tệp

Chép lời một tệp âm thanh hoặc video. Nhấp **Chọn tệp…** hoặc thả tệp vào cửa sổ. Trình duyệt tệp mặc định hiển thị **Tất cả tệp được hỗ trợ**; bạn có thể chỉ hiển thị **Tệp âm thanh** hoặc **Tệp video**. Xem [Định dạng và ngôn ngữ](/vi/reference/formats-and-languages/) để biết các định dạng được hỗ trợ.

Mỗi lần chỉ thêm được một tệp. Để chép lời nhiều tệp, hãy dùng nguồn [Thư mục](#thư-mục).

## URL

Chép lời một **video YouTube** hoặc một **liên kết trực tiếp đến tệp âm thanh hoặc video** (ví dụ một tập podcast). Dán URL (bằng **Dán** hoặc `Ctrl+V`) và nhấp **Tiếp tục**. URL phải bắt đầu bằng `http://` hoặc `https://`.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

Âm thanh được tải xuống trước, nên cần kết nối Internet.

## Micrô

Ghi âm giọng nói của bạn hoặc một cuộc họp và chép lời. Bản ghi được lưu trong lịch sử để bạn có thể phát lại sau.

1. Chọn micrô trong danh sách (nhấp nút làm mới nếu bạn vừa kết nối micrô).
2. Nhấp nút ghi âm (hoặc nhấn `Ctrl+Enter`, `⌘↩` trên macOS) để bắt đầu ghi. Đồng hồ mức âm cho biết âm thanh **Quá nhỏ**, ở **Mức tốt** hay **Quá to**.
3. Nhấp lần nữa để dừng và chép lời.

### Văn bản trực tiếp

Với **WhisperX**, bật **Hiển thị văn bản khi ghi âm** trong thẻ **Văn bản trực tiếp** để xem bản nháp văn bản trong khi bạn nói. Bản nháp do một **Mô hình trực tiếp** tốc độ cao viết (mặc định là `small`). Khi bạn dừng, toàn bộ bản ghi được chép lời lại bằng mô hình của công cụ, chính xác hơn, và bản nháp sẽ được thay thế.

![Văn bản trực tiếp khi ghi âm từ micrô](/screenshots/live-text.png)

:::caution
Hệ thống phải nhận diện được thiết bị đầu vào và cho phép ứng dụng sử dụng. Nếu không, thông báo **Không tìm thấy micrô** sẽ hiện ra. Trên macOS, hãy cấp quyền cho Audiotext trong **Cài đặt hệ thống** → **Quyền riêng tư & Bảo mật** → **Micrô**.
:::

### Ghi âm âm thanh của máy tính

Để phiên âm những gì máy tính đang phát (cuộc gọi video, hội thảo trực tuyến, video không tải xuống được), hãy ghi âm từ một thiết bị chuyển âm thanh của loa sang đầu vào. Thiết lập một lần, nhấn nút làm mới và chọn thiết bị đó trong danh sách micrô. Mọi âm thanh máy tính phát đều được ghi lại, kể cả thông báo, nhưng không ghi giọng của bạn.

- **Windows**: chạy `mmsys.cpl`, trong thẻ **Recording**, nhấp chuột phải vào danh sách để hiện các thiết bị bị tắt và bật **Stereo Mix**. Nếu card âm thanh không có, hãy cài [VB-CABLE](https://vb-audio.com/Cable/), đặt **CABLE Input** làm thiết bị đầu ra và chọn **CABLE Output** trong Audiotext. Để vẫn nghe được âm thanh, đánh dấu **Listen to this device** trong thuộc tính của **CABLE Output**.
- **macOS**: cài [BlackHole](https://existential.audio/blackhole/) (`brew install blackhole-2ch`) và chọn **BlackHole 2ch** trong Audiotext. Để vẫn nghe được âm thanh, hãy tạo một [thiết bị nhiều đầu ra](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) gồm loa của bạn và BlackHole, rồi đặt nó làm thiết bị đầu ra.
- **Linux** (PulseAudio hoặc PipeWire): chọn **pulse** trong Audiotext và bắt đầu ghi âm. Sau đó, trong thẻ **Recording** của `pavucontrol`, đổi nguồn của Audiotext thành monitor của loa.

## Thư mục

Chép lời tất cả các tệp âm thanh và video trong một thư mục, và nếu **Bao gồm thư mục con** được bật trong thẻ **Thư mục**, cả các thư mục con của nó. Nhấp vào **Chọn thư mục…** hoặc thả thư mục vào cửa sổ. Audiotext cho bạn biết đã tìm thấy bao nhiêu tệp. Để bỏ qua một số tệp, hãy nhập tên hoặc đường dẫn của chúng, phân tách bằng dấu phẩy, vào **Bỏ qua các tệp khớp với** (ví dụ `*.wav, drafts/*`). Các tệp ẩn luôn bị bỏ qua.

Bản chép lời của mỗi tệp được lưu cạnh tệp đó (hoặc trong thư mục khác bạn chọn ở thẻ **Đầu ra**), với cùng tên và phần mở rộng của mỗi **loại tệp** bạn đã chọn. Ví dụ, với `.txt` và `.vtt`:

```text
files-to-transcribe
├── paranoid-android.mp3
├── paranoid-android.txt
├── paranoid-android.vtt
└── movies
    ├── mulholland-dr.avi
    ├── mulholland-dr.txt
    └── mulholland-dr.vtt
```

Nếu hai tệp có cùng tên và khác phần mở rộng (ví dụ `talk.mp3` và `talk.mp4`), bản chép lời của chúng giữ phần mở rộng trong tên (`talk.mp3.txt` và `talk.mp4.txt`), để không thay thế lẫn nhau.

Các tệp đã có bản chép lời sẽ **bị bỏ qua**: một tệp chỉ bị bỏ qua nếu có đủ tất cả các loại tệp bạn đã chọn, nên việc thêm một loại tệp sẽ chép lời lại tệp đó. Nếu một tệp không thể chép lời, các tệp còn lại vẫn được chép lời.

### Các tệp của một thư mục

Trang của một thư mục trong lịch sử liệt kê các tệp của nó, kèm trạng thái, thời lượng, kích thước của từng tệp và bản xem trước văn bản. Bạn có thể tìm kiếm, lọc theo trạng thái (**Tất cả**, **Hoàn tất**, **Thất bại** hoặc **Đang chờ**) và sắp xếp theo tên, trạng thái, thời lượng hoặc kích thước. Các tệp đã bị di chuyển hoặc xóa được đánh dấu là **Không tìm thấy tệp**.

- Nhấp vào một tệp để mở bản chép lời của nó, hoặc nhấp vào nút `⋯` của tệp (hoặc nhấp chuột phải vào tệp) để sao chép văn bản, mở thẳng phần xuất, tóm tắt hoặc bản dịch của tệp, hiển thị tệp trong trình quản lý tệp hoặc chọn **Chép lời lại tệp này**.
- Chọn nhiều tệp bằng `Ctrl`/`⌘` hoặc `Shift`, hoặc tất cả các tệp đang hiển thị bằng `Ctrl+A` / `⌘A`, rồi chọn **Chép lời lại**, **Xuất…** (để xuất chúng cùng nhau vào một tệp TXT, Markdown hoặc Word duy nhất) hoặc **Gỡ khỏi lịch sử…**. `Enter` mở tệp đã chọn, và `Esc` bỏ chọn.
- **Thử lại các tệp lỗi** chép lời lại các tệp bị lỗi. **Quét lại thư mục** chỉ chép lời các tệp chưa có bản chép lời, như các tệp mới, và cho biết bao nhiêu tệp đã bị bỏ qua vì đã có bản chép lời.
- Menu `⋯` của thư mục có **Chép lời lại tất cả…** (chép lời lại tất cả các tệp, thay thế bản chép lời của chúng), **Xuất tất cả…** (vào một tệp duy nhất), tùy chọn xóa các tệp bị thiếu khỏi danh sách, và các tùy chọn mở thư mục nguồn hoặc thư mục chứa các tệp đã lưu.
- Khi bạn thay đổi cài đặt của thư mục, các tệp được chép lời bằng cài đặt khác (công cụ, mô hình, ngôn ngữ…) sẽ được liệt kê, kèm nút **Chép lời lại**.

Phần đầu trang cho biết nơi lưu các tệp và liên kết đến thư mục nguồn. **Sửa cài đặt** thay đổi cài đặt của thư mục, và **Lưu và quét lại** dùng các cài đặt đó để chép lời những tệp chưa có bản chép lời.

### Theo dõi một thư mục

Bật **Theo dõi thư mục** trong thẻ **Thư mục** để tiếp tục chép lời các tệp được thêm vào thư mục (hoặc thư mục con) cho đến khi bạn nhấp **Dừng theo dõi**. Tính năng này hữu ích cho các bản ghi từ máy ghi âm hoặc công cụ họp được sao chép vào một thư mục.

- Các tệp đã có sẵn trong thư mục sẽ bị bỏ qua, trừ khi bạn bật **Chép lời các tệp đã có trong thư mục**: khi đó các tệp chưa có bản chép lời sẽ được chép lời trước.
- Một tệp được chép lời khi đã sao chép xong hoàn toàn (khi kích thước ngừng thay đổi), nên tệp lớn không bị chép lời dở dang.
- Các thư mục đang được theo dõi khi đóng Audiotext sẽ được theo dõi lại khi mở, tiếp tục từ các tệp chúng đã thấy. Các thư mục đã dừng có thể được theo dõi lại bằng **Tiếp tục theo dõi**.
- Nếu thư mục không khả dụng (ví dụ nằm trên một ổ đĩa chưa được kết nối), Audiotext sẽ chờ thay vì báo lỗi.
- Để chép lời nội dung khác hoặc ghi âm, thư mục sẽ được tạm dừng (bản chép lời mới hiển thị **Đang bắt đầu…** cho đến khi tạm dừng xong), rồi được theo dõi lại sau đó.
- Lỗi không làm dừng việc theo dõi, và các tệp được chép lời cùng lúc sẽ được thông báo trong một thông báo duy nhất.

## Hàng đợi

Bạn có thể thiết lập bản chép lời mới trong khi bản khác đang chạy: nút đổi thành **Thêm vào hàng đợi**, và bản mới sẽ bắt đầu khi bản hiện tại kết thúc. Các bản chép lời đang chờ và đang chạy được hiển thị trong lịch sử.
