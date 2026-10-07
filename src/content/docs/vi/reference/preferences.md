---
title: Tùy chọn ưu tiên
description: Toàn bộ cài đặt trong cửa sổ Tùy chọn ưu tiên, theo từng thẻ.
sidebar:
  order: 2
---

**Tùy chọn ưu tiên** chứa các cài đặt không thay đổi theo từng bản chép lời. Mở bằng biểu tượng bánh răng ở góc trên bên phải cửa sổ. Thay đổi được lưu tự động.

## Chung

- **Chế độ hiển thị**: **Hệ thống** (theo hệ thống), **Sáng** hoặc **Tối**.
- **Ngôn ngữ giao diện**: ngôn ngữ của Audiotext, hoặc **Ngôn ngữ hệ thống**. Xem các [ngôn ngữ có sẵn](/vi/reference/formats-and-languages/#ngôn-ngữ-giao-diện).
- **Định dạng ngày**: cách hiển thị ngày của các bản chép lời, theo ngôn ngữ giao diện: ngắn (`4/10/26`), vừa (`4 thg 10, 2026`, mặc định), dài (`4 tháng 10, 2026`) hoặc ISO (`2026-10-04`). Menu hiển thị từng định dạng kèm ví dụ.
- **Định dạng giờ**: **Tự động** (đồng hồ của ngôn ngữ giao diện), 12 giờ (`1:30 CH`) hoặc 24 giờ (`13:30`).
- **Thông báo**: hiển thị thông báo của hệ thống khi bản chép lời đã sẵn sàng (với một thư mục, khi tất cả các tệp của nó đã xong, và với thư mục được theo dõi, mỗi khi một tệp mới xong). Bật theo mặc định. Trên macOS, thông báo đến từ **Script Editor**, còn trên Windows từ **Windows PowerShell**, nên chúng được cho phép hoặc tắt cho các ứng dụng đó trong cài đặt của hệ thống. Trên Linux, cần có `notify-send` (gói `libnotify-bin` hoặc `libnotify`).
- **Cập nhật**: kiểm tra phiên bản mới khi mở ứng dụng và, nếu có, hiển thị nút **Đã có phiên bản …** trên thanh trên cùng để mở trang tải xuống. Các bản phát hành thử nghiệm không được đề xuất. Bật theo mặc định.

## AI

Nhà cung cấp cho [tóm tắt và bản dịch](/vi/guides/summary-and-translation/):

- **Bản tóm tắt** → **Nhà cung cấp** và **Mô hình**.
- **Bản dịch** → **Nhà cung cấp** và **Mô hình**. DeepL và Google Translate không có mô hình để chọn.
- **Ollama** → **URL máy chủ**: địa chỉ của Ollama, mặc định `http://localhost:11434`.

Để trống **Mô hình** để dùng mô hình mặc định của nhà cung cấp. Nút bên cạnh nhà cung cấp dùng để đặt khóa API của họ.

## Khóa API

Khóa của từng dịch vụ. Nhấp **Đặt…** để nhập khóa, hoặc **Thay đổi…** để thay thế (để trống để xóa). Khóa được lưu trong kho thông tin xác thực của hệ thống.

| Khóa | Dùng cho |
| --- | --- |
| Khóa API OpenAI | Whisper API, và tóm tắt, dịch bằng OpenAI |
| Khóa API Anthropic | Tóm tắt và dịch bằng Claude |
| Khóa API DeepSeek | Tóm tắt và dịch bằng DeepSeek |
| Khóa API Gemini | Tóm tắt và dịch bằng Gemini (từ Google AI Studio) |
| Khóa API Mistral | Tóm tắt và dịch bằng Mistral |
| Khóa API xAI | Tóm tắt và dịch bằng Grok |
| Khóa API DeepL | Dịch bằng DeepL (khóa của gói miễn phí cũng dùng được) |
| Khóa Google API | Google Speech-to-Text vượt gói miễn phí, và Google Translate (Cloud Translation API) |
| Token Hugging Face | Nhận diện người nói với WhisperX |

:::caution
Mỗi nhà cung cấp tính phí cho việc sử dụng API của họ, và Audiotext không chịu trách nhiệm về khoản phí này. Nếu OpenAI trả về lỗi `429` với khóa mới, xem [Khắc phục sự cố](/vi/help/troubleshooting/#whisper-api-trả-về-lỗi-429).
:::

## WhisperX

**Kiểu tính toán**, **Kích thước lô** và **Dùng CPU**. Xem [tùy chọn nâng cao của WhisperX](/vi/reference/engines/#tùy-chọn-nâng-cao).

## Phụ đề

Tùy chọn cho các tệp `.srt` và `.vtt` được lưu khi chép lời một thư mục bằng WhisperX:

- **Đánh dấu từ**: gạch chân từng từ khi được nói. Tắt theo mặc định.
- **Số dòng tối đa**: số dòng tối đa của mỗi phụ đề. Mặc định `2`.
- **Độ rộng dòng tối đa**: số ký tự tối đa của một dòng trước khi xuống dòng. Mặc định `42`.

## Whisper API

**Nhiệt độ** và **Dấu thời gian của từ**. Xem [tùy chọn của Whisper API](/vi/reference/engines/#tùy-chọn).

## Giới thiệu

Phiên bản Audiotext và liên kết đến tài liệu này, mã nguồn trên GitHub và trang ủng hộ. **Kiểm tra cập nhật** kiểm tra phiên bản mới ngay lập tức: nếu có, nút sẽ đổi thành **Tải xuống** và mở trang của phiên bản đó.
