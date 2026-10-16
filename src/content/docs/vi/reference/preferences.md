---
title: Tùy chọn ưu tiên
description: Toàn bộ cài đặt trong cửa sổ Tùy chọn ưu tiên, theo từng thẻ.
sidebar:
  order: 2
---

**Tùy chọn ưu tiên** chứa các cài đặt không thay đổi theo từng bản chép lời. Mở bằng biểu tượng bánh răng ở góc trên bên phải cửa sổ. Thay đổi được lưu tự động.

## Chung

- **Chế độ hiển thị**: **Hệ thống** (theo hệ thống), **Sáng** hoặc **Tối**.
- **Kích thước giao diện**: kích thước của văn bản và các điều khiển, từ 80% đến 200%. Mặc định là `100%`. Thay đổi được áp dụng ngay.
- **Ngôn ngữ giao diện**: ngôn ngữ của Audiotext, hoặc **Ngôn ngữ hệ thống**. Xem các [ngôn ngữ có sẵn](/vi/reference/formats-and-languages/#ngôn-ngữ-giao-diện).
- **Định dạng ngày**: cách hiển thị ngày của các bản chép lời, theo ngôn ngữ giao diện: ngắn (`4/10/26`), vừa (`4 thg 10, 2026`, mặc định), dài (`4 tháng 10, 2026`) hoặc ISO (`2026-10-04`). Menu hiển thị từng định dạng kèm ví dụ.
- **Định dạng giờ**: **Tự động** (đồng hồ của ngôn ngữ giao diện), 12 giờ (`1:30 CH`) hoặc 24 giờ (`13:30`).
- **Thông báo**: hiển thị thông báo của hệ thống khi bản chép lời đã sẵn sàng (với một thư mục, khi tất cả các tệp của nó đã xong, và với thư mục được theo dõi, mỗi khi một tệp mới xong). Bật theo mặc định. Trên macOS, thông báo đến từ **Script Editor**, còn trên Windows từ **Windows PowerShell**, nên chúng được cho phép hoặc tắt cho các ứng dụng đó trong cài đặt của hệ thống. Trên Linux, cần có `notify-send` (gói `libnotify-bin` hoặc `libnotify`).
- **Cập nhật**: kiểm tra phiên bản mới khi mở ứng dụng và, nếu có, hiển thị nút **Đã có phiên bản …** trên thanh trên cùng để mở trang tải xuống. Các bản phát hành thử nghiệm không được đề xuất. Bật theo mặc định.

## AI

Nhà cung cấp cho [tóm tắt, câu hỏi và bản dịch](/vi/guides/summary-and-translation/):

- **Bản tóm tắt** → **Nhà cung cấp** và **Mô hình**.
- **Hỏi** → **Nhà cung cấp** và **Mô hình**: những thứ trả lời câu hỏi về bản chép lời. Cho đến khi bạn đổi, chúng giống với của bản tóm tắt.
- **Bản dịch** → **Nhà cung cấp** và **Mô hình**. DeepL và Google Translate không có mô hình để chọn.
- **Ollama** → **URL máy chủ**: địa chỉ của Ollama, mặc định `http://localhost:11434`.

Để trống **Mô hình** để dùng mô hình mặc định của nhà cung cấp. Nút bên cạnh nhà cung cấp dùng để đặt khóa API của họ.

## Khóa API

Khóa của từng dịch vụ. Nhấp **Đặt khóa API…** để nhập khóa, hoặc **Đổi khóa API…** để thay thế (để trống để xóa). Khóa được lưu trong kho thông tin xác thực của hệ thống.

| Khóa | Dùng cho |
| --- | --- |
| Khóa API OpenAI | Whisper API, và tóm tắt, hỏi, dịch bằng OpenAI |
| Khóa API Anthropic | Tóm tắt, hỏi và dịch bằng Claude |
| Khóa API DeepSeek | Tóm tắt, hỏi và dịch bằng DeepSeek |
| Khóa API Gemini | Tóm tắt, hỏi và dịch bằng Gemini (từ Google AI Studio) |
| Khóa API Mistral | Tóm tắt, hỏi và dịch bằng Mistral |
| Khóa API xAI | Tóm tắt, hỏi và dịch bằng Grok |
| Khóa API DeepL | Dịch bằng DeepL (khóa của gói miễn phí cũng dùng được) |
| Khóa Google API | Google Speech-to-Text vượt gói miễn phí, và Google Translate (Cloud Translation API) |
| Token Hugging Face | Nhận diện người nói với WhisperX |

:::caution
Mỗi nhà cung cấp tính phí cho việc sử dụng API của họ, và Audiotext không chịu trách nhiệm về khoản phí này. Nếu OpenAI trả về lỗi `429` với khóa mới, xem [Khắc phục sự cố](/vi/help/troubleshooting/#whisper-api-trả-về-lỗi-429).
:::

## WhisperX

**Kiểu tính toán**, **Kích thước lô** và **Dùng CPU**. Xem [tùy chọn nâng cao của WhisperX](/vi/reference/engines/#tùy-chọn-nâng-cao). Trên máy Mac dùng Apple Silicon, WhisperX chép lời trên GPU của máy trừ khi **Dùng CPU** được bật. Xem [Trên máy Mac](/vi/reference/engines/#trên-máy-mac).

## Phụ đề

Cách chia phụ đề: phụ đề hiển thị trên video và trong chế độ **Phụ đề**, các tệp phụ đề được xuất và [video có phụ đề](/vi/guides/transcript/#xuất-video-kèm-phụ-đề). Mỗi tùy chọn có một giá trị cho video ngang và một giá trị khác cho video dọc (cao hơn rộng, ví dụ cho điện thoại), vốn hẹp hơn:

| Tùy chọn | Ngang | Dọc |
| --- | :---: | :---: |
| **Số dòng tối đa mỗi phụ đề** | `2` | `2` |
| **Số ký tự tối đa mỗi dòng** | `42` | `24` |
| **Tiếng Trung, Nhật và Hàn**: số ký tự mỗi dòng trong các ngôn ngữ này, có ký tự rộng gấp khoảng hai lần ký tự Latinh | `16` | `10` |

Các dòng của một phụ đề được cân bằng, và các ngôn ngữ viết không có dấu cách được ngắt giữa các ký tự.

**Đánh dấu từ** gạch chân từng từ khi được nói trong các tệp `.srt` và `.vtt`. Tắt theo mặc định.

## Whisper API

**Nhiệt độ** và **Dấu thời gian của từ**. Xem [tùy chọn của Whisper API](/vi/reference/engines/#tùy-chọn).

## Giới thiệu

Phiên bản Audiotext và liên kết đến tài liệu này, mã nguồn trên GitHub và trang ủng hộ. **Kiểm tra cập nhật** kiểm tra phiên bản mới ngay lập tức: nếu có, nút sẽ đổi thành **Tải xuống** và mở trang của phiên bản đó.
