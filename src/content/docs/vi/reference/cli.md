---
title: Giao diện dòng lệnh
description: Chép lời, tóm tắt và dịch tệp, thư mục và video YouTube từ script bằng dòng lệnh của Audiotext.
sidebar:
  order: 3
---

Audiotext cũng có thể dùng từ dòng lệnh, ví dụ để chép lời từ script. Có ba lệnh:

- `transcribe`: chép lời một tệp, các tệp trong thư mục hoặc một video YouTube.
- `watch`: chép lời các tệp được thêm vào thư mục cho đến khi dừng bằng `Ctrl+C`.
- `check-update`: kiểm tra xem có phiên bản mới hay không và in liên kết để tải xuống.

Các tùy chọn không được chỉ định sẽ lấy giá trị đã cấu hình trong ứng dụng. Bản chép lời luôn được lưu cạnh mỗi tệp được chép lời, hoặc trong thư mục chỉ định bằng `--output-dir` (nơi các thư mục con của thư mục được chép lời được tạo lại).

## Chạy dòng lệnh

Ứng dụng đã cài đặt sẽ chạy dòng lệnh khi nhận được một trong các lệnh của nó:

| Hệ thống | Lệnh |
| --- | --- |
| Linux | `audiotext` (được `install.sh` cài vào `~/.local/bin`) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe`, trong thư mục cài đặt Audiotext (mặc định là `%LOCALAPPDATA%\Programs\Audiotext`) |

Khi [chạy từ mã nguồn](/vi/help/contributing/#thiết-lập-dự-án), hãy dùng `uv run src/cli.py` thay thế.

## Ví dụ

```bash
# Chép lời một tệp. Văn bản cũng được in ra, nên có thể chuyển hướng
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Chép lời các tệp trong thư mục và nhận diện người nói
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Chép lời video YouTube bằng Whisper API
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Chép lời một cuộc họp bằng Whisper API, kèm từ khóa và ngữ cảnh
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Cuộc họp về phiên bản tiếp theo"

# Lưu phụ đề và tài liệu Word, tóm tắt và dịch sang tiếng Tây Ban Nha
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Chép lời các tệp được thêm vào thư mục cho đến khi dừng bằng Ctrl+C
audiotext watch inbox/ --output-types srt
```

## Tùy chọn

| Tùy chọn | Mô tả |
| --- | --- |
| `-m`, `--method` | Phương thức chép lời: `whisperx`, `whisper-api` hoặc `google` |
| `-l`, `--language` | Ngôn ngữ của âm thanh dưới dạng mã ISO 639-1 (ví dụ `vi`), hoặc `auto` để tự phát hiện (Google không hỗ trợ) |
| `-t`, `--output-types` | Các loại tệp đầu ra, phân tách bằng dấu phẩy, trong số `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` và `ass` (ví dụ `txt,srt,md`) |
| `-o`, `--output-dir` | Thư mục lưu bản chép lời (mặc định: cạnh mỗi tệp được chép lời) |
| `--overwrite` | Ghi đè các bản chép lời hiện có |
| `-p`, `--prompt` | Âm thanh nói về điều gì, chẳng hạn chủ đề hoặc bối cảnh (Google không hỗ trợ) |
| `-k`, `--keywords` | Tên riêng, thuật ngữ hoặc từ viết tắt trong âm thanh, phân tách bằng dấu phẩy, để viết đúng (Google không hỗ trợ) |
| `--translate` | Dịch âm thanh sang tiếng Anh trong khi chép lời (Google không hỗ trợ). Với các ngôn ngữ khác, xem `--translate-to` |
| `-q`, `--quiet` | Chỉ in lỗi |
| `-v`, `--verbose` | In nhật ký để gỡ lỗi |
| `--version` | In phiên bản của Audiotext |

Các loại đầu ra mà phương thức chép lời không tự lưu (ví dụ `md` hoặc `docx`) được xuất từ kết quả của nó, giống như từ ứng dụng. `aud` chỉ được WhisperX lưu.

**Tùy chọn tóm tắt và dịch**

| Tùy chọn | Mô tả |
| --- | --- |
| `--summarize` | Tóm tắt từng bản chép lời, kèm các ý chính và các chương, vào tệp `.summary.md` |
| `--summary-provider` | Nhà cung cấp mô hình ngôn ngữ tóm tắt: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` hoặc `ollama` |
| `--summary-model` | Mô hình ngôn ngữ tóm tắt |
| `--translate-to` | Dịch từng bản chép lời sang một ngôn ngữ (mã ISO 639-1), được lưu theo các loại tệp đầu ra (ví dụ `talk.es.srt`) |
| `--translation-provider` | Nhà cung cấp bản dịch: các nhà cung cấp của `--summary-provider`, `deepl` hoặc `google` |
| `--translation-model` | Mô hình ngôn ngữ dịch, cho các nhà cung cấp mô hình ngôn ngữ |

Nếu không chỉ định, nhà cung cấp và mô hình đã cấu hình trong ứng dụng sẽ được dùng. Xem [Nhà cung cấp](/vi/guides/summary-and-translation/#nhà-cung-cấp).

**Tùy chọn WhisperX**

| Tùy chọn | Mô tả |
| --- | --- |
| `--diarize` | Nhận diện người nói |
| `--speakers` | Số người nói khi nhận diện (`0` để tự phát hiện) |
| `--model-size` | Mô hình, ví dụ `small` hoặc `large-v2` (xem [Công cụ](/vi/reference/engines/#mô-hình)) |
| `--compute-type` | `int8`, `float16` hoặc `float32` |
| `--batch-size` | Kích thước lô |
| `--cpu` | Chạy trên CPU, thay vì trên GPU NVIDIA hoặc GPU của máy Mac |

**Tùy chọn Whisper API**

| Tùy chọn | Mô tả |
| --- | --- |
| `--openai-model` | Mô hình chép lời: `whisper-1`, `gpt-transcribe` hoặc `gpt-4o-transcribe-diarize` |

Chạy `audiotext transcribe --help` để xem tất cả tùy chọn và giá trị của chúng.

## Đầu ra và mã thoát

Tiến trình được in ra luồng lỗi chuẩn (ẩn bằng `--quiet`), còn văn bản chép lời của một tệp đơn lẻ được in ra đầu ra chuẩn. Lệnh thoát với mã `1` nếu một bản chép lời, bản tóm tắt hoặc bản dịch thất bại, và với mã `130` nếu bị dừng bằng `Ctrl+C`.

Nếu khóa API của nhà cung cấp cho `--summarize` hoặc `--translate-to` chưa được đặt, lệnh sẽ dừng trước khi chép lời. Bản tóm tắt hoặc bản dịch thất bại sẽ được báo mà không làm mất bản chép lời, vốn vẫn được lưu.

Khóa API là khóa đã đặt trong ứng dụng, hoặc các [biến môi trường](/vi/reference/files-and-data/#biến-môi-trường) của chúng, như `OPENAI_API_KEY`, `GOOGLE_API_KEY` và `HF_TOKEN` (để nhận diện người nói).
