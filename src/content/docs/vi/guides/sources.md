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

Chép lời tất cả tệp âm thanh và video trong một thư mục **và các thư mục con**. Nhấp **Chọn thư mục…** hoặc thả thư mục vào cửa sổ. Audiotext cho biết đã tìm thấy bao nhiêu tệp.

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

Các tệp đã có bản chép lời sẽ **bị bỏ qua**, trừ khi bạn bật **Ghi đè tệp hiện có**. Vì vậy, nếu bạn thêm một tệp vào thư mục rồi chép lời lại, chỉ tệp mới được chép lời.

Nếu một tệp không thể chép lời, các tệp còn lại vẫn được chép lời, và chế độ xem thư mục cho biết tệp nào thất bại và lý do. **Chép lời lại** lặp lại thư mục, còn nút thư mục mở thư mục chứa các tệp đã lưu.

### Theo dõi một thư mục

Bật **Theo dõi thư mục** trong thẻ **Thư mục** để tiếp tục chép lời các tệp được thêm vào thư mục (hoặc thư mục con) cho đến khi bạn nhấp **Dừng theo dõi**. Tính năng này hữu ích cho các bản ghi từ máy ghi âm hoặc công cụ họp được sao chép vào một thư mục.

- Các tệp đã có sẵn trong thư mục sẽ bị bỏ qua. Để chép lời chúng, hãy chép lời thư mục mà không theo dõi.
- Một tệp được chép lời khi đã sao chép xong hoàn toàn (khi kích thước ngừng thay đổi), nên tệp lớn không bị chép lời dở dang.
- Lỗi không làm dừng việc theo dõi.

## Hàng đợi

Bạn có thể thiết lập bản chép lời mới trong khi bản khác đang chạy: nút đổi thành **Thêm vào hàng đợi**, và bản mới sẽ bắt đầu khi bản hiện tại kết thúc. Các bản chép lời đang chờ và đang chạy được hiển thị trong lịch sử.
