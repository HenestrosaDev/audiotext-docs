---
title: Định dạng và ngôn ngữ
description: Các định dạng âm thanh và video, ngôn ngữ của âm thanh và ngôn ngữ giao diện mà Audiotext hỗ trợ.
sidebar:
  order: 4
---

## Định dạng âm thanh và video

Audiotext tách âm thanh khỏi tệp video bằng FFmpeg, nên chép lời được cả hai.

**Âm thanh**: `.aac`, `.flac`, `.mp3`, `.mpeg`, `.oga`, `.ogg`, `.opus`, `.wav`, `.wma`

**Video**: `.3g2`, `.3gp`, `.3gp2`, `.3gpp`, `.3gpp2`, `.asf`, `.avi`, `.f4a`, `.f4b`, `.f4v`, `.flv`, `.m4a`, `.m4b`, `.m4r`, `.m4v`, `.mkv`, `.mov`, `.mp4`, `.ogv`, `.ogx`, `.webm`, `.wmv`

## Định dạng đầu ra

| Định dạng | Xuất | Thư mục (WhisperX) | Thư mục (Whisper API) |
| --- | :---: | :---: | :---: |
| Văn bản thuần (`.txt`) | ✓ | ✓ | `text` |
| Markdown (`.md`) | ✓ | ✗ | ✗ |
| Tài liệu Word (`.docx`) | ✓ | ✗ | ✗ |
| Phụ đề (`.srt`) | ✓ | ✓ | `srt` |
| Phụ đề web (`.vtt`) | ✓ | ✓ | `vtt` |
| Bảng (`.tsv`) | ✓ | ✓ | ✗ |
| JSON (`.json`) | ✓ | ✓ | `json`, `verbose_json` |
| Nhãn Audacity (`.aud`) | ✗ | ✓ | ✗ |

Xem [Xuất](/vi/guides/transcript/#sao-chép-và-xuất) và [thẻ Đầu ra](/vi/guides/transcription-settings/#thư-mục-và-đầu-ra).

## Ngôn ngữ của âm thanh

WhisperX và Whisper API tự động phát hiện ngôn ngữ, và có thể chép lời 100 ngôn ngữ sau (Google API yêu cầu chọn ngôn ngữ):

tiếng Afrikaans, Albania, Amhara, Anh, Ả Rập, Armenia, Assam, Azerbaijan, Ba Lan, Ba Tư, Bashkir, Basque, Belarus, Bengal, Bồ Đào Nha, Bosnia, Breton, Bulgaria, Catalan, Creole Haiti, Croatia, Đan Mạch, Do Thái (Hebrew), Đức, Estonia, Faroe, Galicia, Gruzia, Gujarati, Hà Lan, Hàn, Hausa, Hawaii, Hindi, Hungary, Hy Lạp, Iceland, Indonesia, Java, Kannada, Kazakh, Khmer, Lào, Latinh, Latvia, Lingala, Litva, Luxembourg, Macedonia, Malagasy, Malayalam, Mã Lai, Malta, Maori, Marathi, Mông Cổ, Myanmar, Na Uy, Na Uy (Nynorsk), Nepal, Nga, Nhật, Occitan, Pashto, Pháp, Phần Lan, Punjab, Philippines (Tagalog), Phạn, Quảng Đông, Romania, Séc, Serbia, Shona, Sindhi, Sinhala, Slovakia, Slovenia, Somali, Sunda, Swahili, Tajik, Tamil, Tatar, Tây Ban Nha, Telugu, Thái, Thổ Nhĩ Kỳ, Thụy Điển, Tây Tạng, Trung, Turkmen, Ukraina, Urdu, Uzbek, Việt, Wales, Ý, Yiddish và Yoruba.

Chất lượng phụ thuộc vào ngôn ngữ: tốt nhất với các ngôn ngữ phổ biến như tiếng Anh, Tây Ban Nha, Pháp, Đức, Bồ Đào Nha, Ý hoặc Nhật.

## Ngôn ngữ giao diện

Giao diện Audiotext, và tài liệu này, có sẵn bằng:

| Ngôn ngữ | | Ngôn ngữ | |
| --- | --- | --- | --- |
| Català | Tiếng Catalan | Polski | Tiếng Ba Lan |
| Čeština | Tiếng Séc | Português | Tiếng Bồ Đào Nha |
| Deutsch | Tiếng Đức | Română | Tiếng Romania |
| English | Tiếng Anh | Русский | Tiếng Nga |
| Español | Tiếng Tây Ban Nha | Svenska | Tiếng Thụy Điển |
| Français | Tiếng Pháp | Türkçe | Tiếng Thổ Nhĩ Kỳ |
| Galego | Tiếng Galicia | Українська | Tiếng Ukraina |
| हिन्दी | Tiếng Hindi | Tiếng Việt | Tiếng Việt |
| Bahasa Indonesia | Tiếng Indonesia | 简体中文 | Tiếng Trung giản thể |
| Italiano | Tiếng Ý | 日本語 | Tiếng Nhật |
| Nederlands | Tiếng Hà Lan | 한국어 | Tiếng Hàn |

Đổi trong **Tùy chọn ưu tiên** → **Chung** → **Ngôn ngữ giao diện**. Để cải thiện bản dịch hoặc thêm ngôn ngữ, xem [Đóng góp](/vi/help/contributing/#dịch-giao-diện).
