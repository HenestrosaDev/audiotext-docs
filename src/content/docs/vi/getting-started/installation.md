---
title: Cài đặt
description: Tải Audiotext cho Windows, macOS hoặc Linux và mở ứng dụng lần đầu tiên.
sidebar:
  order: 1
---

Audiotext là ứng dụng máy tính cho **Windows**, **macOS** và **Linux**. Ứng dụng chép lời âm thanh từ tệp, video YouTube và bản ghi âm từ micrô thành văn bản, đồng thời có thể dịch, tóm tắt và tạo phụ đề.

## Tải ứng dụng

Tải tệp dành cho hệ điều hành của bạn từ [phiên bản mới nhất](https://github.com/HenestrosaDev/audiotext/releases/latest) trên GitHub:

| Hệ điều hành | Tệp |
| --- | --- |
| Windows (64-bit) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 trở lên (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

Ứng dụng đã bao gồm mọi thứ cần thiết, kể cả FFmpeg.

### Windows

Chạy trình cài đặt và làm theo các bước. Không cần quyền quản trị viên. Nếu có GPU NVIDIA, hãy chọn tùy chọn dùng GPU NVIDIA (CUDA): trình cài đặt sẽ tải thêm gói GPU, giúp WhisperX nhanh hơn nhiều. Trình cài đặt chưa được ký, nên Windows SmartScreen có thể cảnh báo: mở phần thông tin thêm rồi chọn vẫn chạy.

### macOS

Mở tệp `.dmg` và kéo **Audiotext** vào thư mục **Ứng dụng**. Ứng dụng chưa được Apple công chứng, nên macOS sẽ chặn lần mở đầu tiên: vào **Cài đặt hệ thống** → **Quyền riêng tư & Bảo mật** và nhấp **Vẫn mở** cạnh thông báo về Audiotext. Trên macOS, WhisperX chạy trên CPU vì không có CUDA. Máy Mac dùng chip Intel không được hỗ trợ, vì PyTorch không còn hỗ trợ chúng.

### Linux

Giải nén tệp lưu trữ và chạy trình cài đặt trong terminal:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Trình cài đặt cài Audiotext cho người dùng của bạn và thêm vào menu ứng dụng (cũng có thể mở bằng lệnh `audiotext`). Nếu phát hiện GPU NVIDIA, nó sẽ đề nghị tải gói GPU. Chạy `./install.sh --gpu` hoặc `./install.sh --cpu` để chọn mà không bị hỏi, và `./install.sh --uninstall` để gỡ cài đặt (cài đặt của bạn vẫn được giữ).

:::tip
Gói GPU có dung lượng khoảng 2 GB trên Windows và 4 GB trên Linux, nên chỉ đáng tải khi bạn có GPU NVIDIA. Không có gói này, WhisperX chạy trên CPU, còn Whisper API và Google API vẫn hoạt động như bình thường. Để chuyển đổi giữa phiên bản CPU và phiên bản GPU sau này, hãy cài đặt lại ứng dụng và chọn tùy chọn còn lại.
:::

:::note
Lần đầu chép lời bằng **WhisperX** (công cụ mặc định), mô hình của nó sẽ được tải xuống. Dung lượng từ ~75 MB cho `tiny` đến ~3 GB cho `large-v2`, nên có thể mất một lúc. Những lần chép lời sau sẽ bắt đầu ngay.
:::

## Yêu cầu

- **WhisperX** chạy trên máy tính của bạn. Nó hoạt động trên mọi CPU, nhưng nhanh hơn nhiều trên GPU NVIDIA có CUDA. Xem [Công cụ](/vi/reference/engines/) để chọn mô hình phù hợp với phần cứng của bạn.
- **Whisper API** và **Google API** chạy trên máy chủ từ xa, nên cần kết nối Internet nhưng không cần phần cứng mạnh.
- Để chép lời từ micrô, hệ thống phải nhận diện được thiết bị đầu vào.
- Trên Linux, ghi âm và phát âm thanh cần [PortAudio](https://www.portaudio.com/) (`sudo apt install libportaudio2` trên Ubuntu hoặc Debian).

## Cập nhật ứng dụng

Khi có phiên bản mới, Audiotext hiển thị nút **Đã có phiên bản …** trên thanh trên cùng. Nhấp vào nút để mở trang phát hành, tải tệp cho hệ thống của bạn và cài đặt như lần đầu: chạy trình cài đặt mới trên Windows, kéo ứng dụng mới vào thư mục **Ứng dụng** trên macOS, hoặc chạy `install.sh` của bản lưu trữ mới trên Linux. Phiên bản trước sẽ được thay thế, còn cài đặt và lịch sử của bạn vẫn được giữ, vì chúng được lưu trong [thư mục cấu hình người dùng](/vi/reference/files-and-data/#thư-mục-cấu-hình-người-dùng). Nếu bạn dùng tiện ích bổ sung GPU, hãy chọn lại khi cài đặt.

Để tự kiểm tra phiên bản mới, mở **Tùy chọn ưu tiên** → **Giới thiệu** → **Kiểm tra cập nhật**. Để ngừng kiểm tra khi mở ứng dụng, tắt **Chung** → **Cập nhật**.

## Gỡ cài đặt ứng dụng

- **Windows**: gỡ cài đặt trong **Cài đặt** → **Ứng dụng**, như mọi ứng dụng khác.
- **macOS**: kéo **Audiotext** từ thư mục **Ứng dụng** vào Thùng rác.
- **Linux**: chạy `./install.sh --uninstall` từ thư mục của bản lưu trữ. Nếu không còn thư mục đó, hãy xóa `~/.local/share/audiotext`, `~/.local/bin/audiotext` và `~/.local/share/applications/audiotext.desktop`.

Cài đặt, lịch sử và bản ghi âm của bạn vẫn được giữ, nên chúng vẫn còn nếu bạn cài lại ứng dụng. Để xóa mọi thứ:

1. Trước khi gỡ cài đặt, hãy xóa khóa API trong **Tùy chọn ưu tiên** → **Khóa API** (nhấp **Thay đổi…** và để trống), vì chúng được lưu trong kho thông tin đăng nhập của hệ thống.
2. Xóa [thư mục cấu hình người dùng](/vi/reference/files-and-data/#thư-mục-cấu-hình-người-dùng) của bạn.
3. Xóa các [mô hình](/vi/reference/files-and-data/#mô-hình) đã tải xuống.

## Đổi ngôn ngữ giao diện

Audiotext dùng ngôn ngữ của hệ thống nếu có. Để đổi, mở **Tùy chọn ưu tiên** (biểu tượng bánh răng ở góc trên bên phải) và chọn ngôn ngữ trong **Chung** → **Ngôn ngữ giao diện**.

## Chạy từ mã nguồn

Nếu bạn muốn chạy mã mới nhất hoặc đóng góp, hãy xem [Đóng góp](/vi/help/contributing/) để thiết lập dự án bằng Python.

## Bước tiếp theo

- [Bản chép lời đầu tiên của bạn](/vi/getting-started/first-transcription/) giải thích cửa sổ ứng dụng và các bước chép lời.
