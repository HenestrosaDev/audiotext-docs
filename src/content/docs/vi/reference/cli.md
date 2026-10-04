---
title: Giao diện dòng lệnh
description: Chép lời tệp, thư mục và video YouTube từ script bằng dòng lệnh của Audiotext.
sidebar:
  order: 3
---

Audiotext cũng có thể dùng từ dòng lệnh để chép lời từ script, khi bạn [chạy từ mã nguồn](/vi/help/contributing/#thiết-lập-dự-án). Có ba lệnh:

- `transcribe`: chép lời một tệp, các tệp trong thư mục hoặc một video YouTube.
- `watch`: chép lời các tệp được thêm vào thư mục cho đến khi dừng bằng `Ctrl+C`.
- `check-update`: kiểm tra xem có phiên bản mới hay không và in liên kết để tải xuống.

Các tùy chọn không được chỉ định sẽ lấy giá trị đã cấu hình trong ứng dụng. Bản chép lời luôn được lưu cạnh mỗi tệp được chép lời, hoặc trong thư mục chỉ định bằng `--output-dir` (nơi các thư mục con của thư mục được chép lời được tạo lại).

## Ví dụ

```bash
# Chép lời một tệp. Văn bản cũng được in ra, nên có thể chuyển hướng
python src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Chép lời các tệp trong thư mục và nhận diện người nói
python src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Chép lời video YouTube bằng Whisper API
python src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Chép lời một cuộc họp bằng Whisper API, kèm từ khóa và ngữ cảnh
python src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Cuộc họp về phiên bản tiếp theo"

# Chép lời các tệp được thêm vào thư mục cho đến khi dừng bằng Ctrl+C
python src/cli.py watch inbox/ --output-types srt
```

## Tùy chọn

| Tùy chọn | Mô tả |
| --- | --- |
| `-m`, `--method` | Phương thức chép lời: `whisperx`, `whisper-api` hoặc `google` |
| `-l`, `--language` | Ngôn ngữ của âm thanh dưới dạng mã ISO 639-1 (ví dụ `vi`), hoặc `auto` để tự phát hiện (Google không hỗ trợ) |
| `-o`, `--output-dir` | Thư mục lưu bản chép lời (mặc định: cạnh mỗi tệp được chép lời) |
| `--overwrite` | Ghi đè các bản chép lời hiện có |
| `-p`, `--prompt` | Âm thanh nói về điều gì, chẳng hạn chủ đề hoặc bối cảnh (Google không hỗ trợ) |
| `-k`, `--keywords` | Tên riêng, thuật ngữ hoặc từ viết tắt trong âm thanh, phân tách bằng dấu phẩy, để viết đúng (Google không hỗ trợ) |
| `--translate` | Dịch âm thanh sang tiếng Anh (Google không hỗ trợ) |
| `-q`, `--quiet` | Chỉ in lỗi |
| `-v`, `--verbose` | In nhật ký để gỡ lỗi |

**Tùy chọn WhisperX**

| Tùy chọn | Mô tả |
| --- | --- |
| `-t`, `--output-types` | Các loại tệp đầu ra, phân tách bằng dấu phẩy (ví dụ `txt,srt`) |
| `--diarize` | Nhận diện người nói |
| `--speakers` | Số người nói khi nhận diện (`0` để tự phát hiện) |
| `--model-size` | Mô hình, ví dụ `small` hoặc `large-v2` (xem [Công cụ](/vi/reference/engines/#mô-hình)) |
| `--compute-type` | `int8`, `float16` hoặc `float32` |
| `--batch-size` | Kích thước lô |
| `--cpu` | Chạy trên CPU |

**Tùy chọn Whisper API**

| Tùy chọn | Mô tả |
| --- | --- |
| `--openai-model` | Mô hình chép lời: `whisper-1`, `gpt-transcribe` hoặc `gpt-4o-transcribe-diarize` |

Chạy `python src/cli.py transcribe --help` để xem tất cả tùy chọn và giá trị của chúng.

## Đầu ra và mã thoát

Tiến trình được in ra luồng lỗi chuẩn (ẩn bằng `--quiet`), còn văn bản chép lời của một tệp đơn lẻ được in ra đầu ra chuẩn. Lệnh thoát với mã `1` nếu một bản chép lời thất bại.

Khóa API là khóa đã đặt trong ứng dụng, hoặc các biến môi trường `OPENAI_API_KEY`, `GOOGLE_API_KEY` và `HF_TOKEN` (để nhận diện người nói).
