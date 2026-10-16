---
title: Tóm tắt, câu hỏi và dịch
description: Tóm tắt, đặt câu hỏi và dịch bản chép lời bằng OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL hoặc Google Translate.
sidebar:
  order: 4
---

Khi bản chép lời đã sẵn sàng, Audiotext có thể tóm tắt, trả lời câu hỏi về nó và dịch nó bằng mô hình ngôn ngữ hoặc dịch vụ dịch thuật. Tất cả đều được lưu trong lịch sử, nên chỉ tạo một lần.

## Tóm tắt

Mở chế độ **Bản tóm tắt** của một bản chép lời và nhấp **Tạo bản tóm tắt**. Mô hình ngôn ngữ sẽ viết:

- **Bản tóm tắt** của bản chép lời.
- Các **ý chính**.
- Các **chương**, nếu có dấu thời gian. Nhấp vào một chương để phát âm thanh từ chỗ chương bắt đầu.

Bên dưới tiêu đề, bảng cho biết mô hình nào đã tạo bản tóm tắt và vào lúc nào. Các nút ở phần đầu:

- **Tìm** (`Ctrl+F`, `⌘F` trên macOS): tìm một đoạn văn bản trong bản tóm tắt.
- **Sao chép**: sao chép nó.
- **Xuất**: lưu riêng nó dưới dạng văn bản thuần, Markdown hoặc tài liệu Word, với tên như `video.summary.md` để không thay thế bản chép lời. Các [bản xuất](/vi/guides/transcript/#sao-chép-và-xuất) Markdown và Word của bản chép lời cũng bao gồm nó.
- **Tạo lại bản tóm tắt**: viết lại nó (ví dụ sau khi chọn mô hình khác), sau khi hỏi bạn, vì bản hiện tại sẽ bị thay thế.

Nếu chưa đặt khóa API của nhà cung cấp, chế độ **Bản tóm tắt** sẽ đề nghị bạn đặt. Các bản chép lời rất dài (khoảng ba giờ nói trở lên) chỉ được tóm tắt từ phần đầu.

![Bản tóm tắt của một bản chép lời, với các ý chính và các chương](/screenshots/summary.png)

## Hỏi về bản chép lời

Mở chế độ **Hỏi**, gõ câu hỏi vào **Đặt câu hỏi về bản chép lời…** (ví dụ điều gì đã được quyết định, hoặc ai đã nói điều gì đó) rồi nhấn `Enter` hoặc nhấp **Hỏi**.

- Mô hình ngôn ngữ trả lời dựa trên bản chép lời, cùng các câu hỏi và câu trả lời trước đó, nên một câu hỏi có thể nhắc đến chúng (ví dụ “Tại sao?”).
- Nếu bản chép lời có dấu thời gian, mỗi câu trả lời liên kết đến các phần của bản chép lời nơi điều đó được nói. Nhấp vào một liên kết để phát âm thanh từ đó.
- Các câu hỏi và câu trả lời được lưu trong lịch sử cùng bản chép lời. Thùng rác ở phần đầu xóa cuộc trò chuyện, sau khi hỏi bạn.

Các câu hỏi được trả lời bởi nhà cung cấp đã chọn cho chúng trong **Tùy chọn ưu tiên** → **Nhà cung cấp** → **Hỏi**, tức là nhà cung cấp của bản tóm tắt cho đến khi bạn đổi. Giống như bản tóm tắt, với các bản chép lời rất dài thì chỉ phần đầu được đọc.

## Bản dịch

Nhấp **Dịch**, chọn ngôn ngữ ở **Dịch sang:** và nhà cung cấp ở **Dịch bằng:**, rồi xác nhận. Hộp thoại cho biết nhà cung cấp đã chọn làm gì, và đề nghị đặt khóa API nếu còn thiếu. Bản dịch hiển thị trong một bảng bên phải văn bản gốc.

- Nếu bản chép lời có dấu thời gian, nó được dịch theo từng câu, với văn bản được nói trước và sau mỗi phần làm ngữ cảnh, nên bản dịch bắt đầu với dấu thời gian của từng câu: câu đang phát được đánh dấu, và nhấp vào một câu sẽ phát câu đó.
- Nếu bản chép lời không có dấu thời gian, toàn bộ văn bản được dịch một lần.
- Hai văn bản cuộn cùng nhau, nên chúng hiển thị cùng một phần của âm thanh. Nút tròn trên tay nắm giữa chúng bật và tắt tính năng này. Kéo tay nắm để đổi kích thước, hoặc nhấp đúp vào đó để đặt lại.

Các nút ở phần đầu bản dịch cho phép tìm và thay thế trong đó, sao chép, xuất, **Dịch lại** (với cùng nhà cung cấp và mô hình) và **Ẩn bản dịch**. Nút **Dịch** cũng cho phép hiển thị lại nó, **Dịch sang ngôn ngữ khác…** hoặc **Xóa bản dịch**.

### Nhiều ngôn ngữ

Một bản chép lời có thể được dịch sang nhiều ngôn ngữ, thậm chí cùng lúc, và mỗi bản dịch đều được lưu. Tiêu đề của bảng chọn bản dịch được hiển thị, cho biết mỗi bản đã dịch được bao nhiêu, và kết thúc bằng tùy chọn dịch sang ngôn ngữ khác. Dịch sang một ngôn ngữ đã có bản dịch sẽ thay thế bản đó, sau khi hỏi bạn, vì các chỉnh sửa của nó sẽ mất. Menu của tiêu đề cho biết mỗi bản dịch chưa xong đã dịch được bao nhiêu phụ đề (ví dụ: `Tiếng Anh · 148/150`).

### Tiến độ dịch

Tiến độ được tính theo phụ đề: một phụ đề được coi là đã dịch khi có văn bản. Phía trên bản dịch, một dòng cho biết đã dịch được bao nhiêu (ví dụ: `Đã dịch: 148/150 · 98%`). Tỷ lệ phần trăm được làm tròn xuống, nên `100%` chỉ hiện khi tất cả đã được dịch.

Khi vẫn còn phụ đề chưa dịch, các mũi tên bên cạnh chuyển đến phụ đề **Chưa được dịch** trước và sau, tô sáng từng phụ đề, và cho biết bạn đang ở phụ đề nào (ví dụ: `1/2`). Di chuột lên một phụ đề để hiện nút **Dịch văn bản…** bên phải nó, nút này mở hộp thoại để dịch.

### Sửa và căn lại thời gian bản dịch

Bản dịch thường cần thời gian khác với bản gốc, ví dụ phụ đề cần đọc lâu hơn. Nhấp chuột phải vào một đoạn của bản dịch để:

- **Chỉnh sửa văn bản…**: đổi nội dung.
- **Chỉnh sửa thời gian…**: đổi thời điểm bắt đầu và kết thúc, chính xác đến mili giây. Nhập thời gian dạng `00:01:05,900`, `01:05,9` hoặc `65.9`.
- **Thêm một đoạn phía sau…**: thêm một đoạn, theo mặc định lấp khoảng trống đến đoạn tiếp theo.
- **Xóa đoạn**.

### Tự dịch

Để tự viết bản dịch, hãy chọn **Thủ công** ở **Dịch bằng:**. Không cần khóa API. Bản dịch bắt đầu với một đoạn trống cho mỗi phụ đề của bản chép lời, hiển thị là **Chưa được dịch**, và bảng cho biết còn bao nhiêu đoạn. Nhấp chuột phải vào một đoạn và chọn **Dịch văn bản…**: hộp thoại hiển thị văn bản gốc được nói trong khoảng đó. Di chuột lên một đoạn sẽ hiện nút **Dịch văn bản…** bên phải nó, nút này mở cùng hộp thoại đó.

### Phụ đề và xuất tệp

- Với bản chép lời của video, chọn **Hiển thị làm phụ đề của video** trong menu **Dịch** để hiển thị bản dịch làm phụ đề. Menu của video cũng chuyển được. Xem [Xem video có phụ đề](/vi/guides/transcript/#xem-video-có-phụ-đề).
- Để lưu bản dịch thành tệp, hãy nhấp nút xuất trên bảng của nó. Bản dịch được xuất theo cùng các [định dạng](/vi/guides/transcript/#sao-chép-và-xuất) như bản chép lời, có ngôn ngữ trong tên tệp (ví dụ `video.es.srt`), nên trình phát video sẽ tải nó cùng video. Các đoạn chưa được dịch sẽ bị bỏ khỏi phụ đề. Cùng menu đó tạo một [bản sao video kèm phụ đề](/vi/guides/transcript/#xuất-video-kèm-phụ-đề).

:::tip
Để có bản chép lời trực tiếp bằng ngôn ngữ khác mà không cần nhà cung cấp, bạn cũng có thể dịch trong khi chép lời. Xem [Ngôn ngữ](/vi/guides/transcription-settings/#ngôn-ngữ).
:::

## Nhà cung cấp

Nhà cung cấp được chọn trong **Tùy chọn ưu tiên** → **Nhà cung cấp**, riêng cho tóm tắt, câu hỏi và bản dịch.

| Nhà cung cấp | Mô hình mặc định | Khóa API |
| --- | --- | --- |
| OpenAI (mặc định) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (cục bộ) | `llama3.2` | Không cần |

Để trống **Mô hình** để dùng mô hình mặc định của nhà cung cấp, hoặc nhập tên bất kỳ mô hình nào khác của nhà cung cấp đó (ví dụ `claude-sonnet-5-5` hoặc `deepseek-reasoner`).

Bản dịch cũng có thể được tạo bởi:

- **DeepL**, cần [khóa API DeepL](https://www.deepl.com/your-account/keys). Khóa của gói miễn phí cũng dùng được.
- **Google Translate**, dùng khóa Google API đã bật Cloud Translation API.

### Ollama

[Ollama](https://ollama.com) chạy mô hình trên máy tính của bạn, không cần khóa API và không gửi văn bản đi đâu cả. Cài đặt Ollama, tải một mô hình (ví dụ `ollama pull llama3.2`) và chọn **Ollama** làm nhà cung cấp. Nếu Ollama không chạy ở địa chỉ mặc định, hãy đổi **URL máy chủ** trong **Tùy chọn ưu tiên** → **Nhà cung cấp** (mặc định `http://localhost:11434`).

:::note
Mỗi nhà cung cấp tính phí cho việc sử dụng API của họ, và Audiotext không chịu trách nhiệm về khoản phí này. Khóa API được lưu trong kho thông tin xác thực của hệ thống. Xem [Tệp và dữ liệu](/vi/reference/files-and-data/).
:::
