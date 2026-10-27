---
title: Bản chép lời đầu tiên của bạn
description: Giới thiệu cửa sổ Audiotext và các bước chép lời một tệp âm thanh hoặc video.
sidebar:
  order: 2
---

## Cửa sổ

Cửa sổ Audiotext gồm ba phần:

- **Thanh trên cùng**: các nút để bắt đầu **Bản chép lời mới** từ **Tệp**, **URL**, **Micrô** hoặc **Thư mục**, trạng thái của ứng dụng và biểu tượng bánh răng mở [Tùy chọn ưu tiên](/vi/reference/preferences/). Nút bên trái hiện hoặc ẩn lịch sử.
- **Lịch sử**, ở bên trái: tất cả bản chép lời của bạn, có thể tìm kiếm, ghim, nhóm và đổi tên. Xem [Lịch sử](/vi/guides/history/).
- **Vùng chính**: nguồn bạn đang thiết lập, tiến trình của một bản chép lời hoặc bản chép lời bạn đã chọn trong lịch sử.

![Các phần của cửa sổ Audiotext: thanh trên cùng, lịch sử và vùng chính](/screenshots/window.png)

Khi mở ứng dụng, vùng chính hỏi **Bạn muốn chép lời gì?** và hiển thị một thẻ cho mỗi loại nguồn.

:::tip
Thả một tệp hoặc thư mục vào bất kỳ vị trí nào trên cửa sổ để chép lời.
:::

## Chép lời một tệp

1. Nhấp **Tệp** trên thanh trên cùng (hoặc nhấn `Ctrl+O`, `⌘O` trên macOS) và chọn một tệp âm thanh hoặc video, hoặc thả tệp vào cửa sổ. Sau đó nhấp **Tiếp tục**.
2. Xem lại cài đặt. Giá trị mặc định phù hợp với hầu hết âm thanh:
   - **Công cụ**: WhisperX, chạy trên máy tính của bạn. Chọn **Mô hình** nhỏ hơn (như `small`) nếu máy tính của bạn chậm.
   - **Ngôn ngữ**: **Ngôn ngữ của âm thanh** được tự động phát hiện. Hãy chọn nếu bạn biết, để tránh lỗi. Để dịch, chọn một **Ngôn ngữ của bản chép lời** khác.
   - **Ngữ cảnh** và **Tùy chọn**: gợi ý và tính năng không bắt buộc, chẳng hạn nhận diện người nói.

   Xem [Cài đặt chép lời](/vi/guides/transcription-settings/) để biết tất cả.
3. Nhấp **Bắt đầu chép lời** (hoặc nhấn `Ctrl+Enter`, `⌘↩` trên macOS).

Trong khi chạy, tiến trình của từng bước (tải mô hình, chép lời, căn chỉnh từ…) sẽ được hiển thị. Bạn có thể tiếp tục dùng Audiotext trong lúc đó: kết quả được lưu vào lịch sử và mở ra khi hoàn tất. Để hủy, nhấp **Hủy** hoặc nhấn `Esc`.

Nếu có bản chép lời khác đang chạy, nút sẽ đổi thành **Thêm vào hàng đợi**, và bản mới sẽ bắt đầu khi bản hiện tại kết thúc.

## Đọc và dùng kết quả

Khi hoàn tất, bản chép lời sẽ mở ra:

- Nhấp vào một đoạn để phát âm thanh từ chỗ đó.
- Chuyển giữa **Phụ đề**, **Văn bản thuần**, **Bản tóm tắt** và **Hỏi**, để đặt câu hỏi về nó.
- Dùng **Dịch** để dịch, và các nút ở phần đầu bản chép lời để tìm và thay thế trong đó, sao chép hoặc lưu thành tệp.
- Rà soát các từ được gạch chân, là những từ công cụ kém chắc chắn nhất.

Xem [Bản ghi lời](/vi/guides/transcript/) để biết mọi điều bạn có thể làm với nó.

## Phím tắt

| Phím tắt | Thao tác |
| --- | --- |
| `Ctrl+Enter` / `⌘↩` | Bắt đầu chép lời, hoặc bắt đầu và dừng ghi âm |
| `Ctrl+O` / `⌘O` | Chọn tệp (hoặc thư mục, ở nguồn thư mục) |
| `Ctrl+S` / `⌘S` | Xuất văn bản bạn đang làm việc: bản chép lời hoặc bản dịch của nó |
| `Ctrl+F` / `⌘F` | Tìm và thay thế trong văn bản bạn đang làm việc (hoặc tìm trong bản tóm tắt) |
| `Ctrl+J` / `⌘J` | Chuyển đến từ có độ tin cậy thấp tiếp theo |
| `Shift+Ctrl+J` / `⇧⌘J` | Chuyển đến từ có độ tin cậy thấp trước đó |
| `Esc` | Hủy bản chép lời đang thực hiện (hoặc bỏ chọn các tệp của một thư mục) |
| `Ctrl+A` / `⌘A` | Chọn tất cả các tệp đang hiển thị của một thư mục |
| `Enter` | Mở tệp đã chọn của một thư mục |
| `Phím cách` | Phát hoặc tạm dừng âm thanh |
| `←` / `→` | Lùi hoặc tiến 5 giây |
