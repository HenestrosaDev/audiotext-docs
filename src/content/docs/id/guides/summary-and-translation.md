---
title: Ringkasan, pertanyaan, dan terjemahan
description: Ringkas, ajukan pertanyaan tentang, dan terjemahkan transkripsi dengan OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL, atau Google Translate.
sidebar:
  order: 4
---

Setelah transkripsi siap, Audiotext dapat meringkasnya, menjawab pertanyaan tentangnya, dan menerjemahkannya dengan model bahasa atau layanan terjemahan. Semuanya disimpan di riwayat, jadi hanya dibuat sekali.

## Ringkasan

Buka mode **Ringkasan** pada transkripsi dan klik **Buat ringkasan**. Model bahasa akan menulis:

- **Ringkasan** transkripsi.
- **Poin penting**-nya.
- **Bab**-nya, jika memiliki stempel waktu. Klik bab untuk memutar audio dari awal bab tersebut.

Di bawah judulnya, panel menampilkan model yang membuatnya dan kapan. Tombol di header-nya:

- **Cari** (`Ctrl+F`, `⌘F` di macOS): mencari teks di ringkasan.
- **Salin**: menyalinnya.
- **Ekspor**: menyimpannya tersendiri sebagai teks biasa, Markdown, atau dokumen Word, dengan nama seperti `video.summary.md` agar tidak menggantikan transkripsi. [Ekspor](/id/guides/transcript/#salin-dan-ekspor) Markdown dan Word dari transkripsi juga menyertakannya.
- **Buat ulang ringkasan**: menulisnya kembali (mis. setelah memilih model lain), setelah meminta konfirmasi, karena ringkasan saat ini akan diganti.

Jika kunci API penyedia belum diatur, mode **Ringkasan** menawarkan untuk mengaturnya. Transkripsi yang sangat panjang (sekitar tiga jam ucapan atau lebih) hanya diringkas dari bagian awalnya.

![Ringkasan sebuah transkripsi, dengan poin-poin utama dan babnya](/screenshots/summary.png)

## Tanya tentang transkripsi

Buka mode **Tanya**, ketik pertanyaan di **Ajukan pertanyaan tentang transkripsi…** (mis. apa yang diputuskan, atau siapa yang mengatakan sesuatu) lalu tekan `Enter` atau klik **Tanya**.

- Model bahasa menjawab berdasarkan transkripsi, serta pertanyaan dan jawaban sebelumnya, sehingga pertanyaan dapat merujuk padanya (mis. “Mengapa?”).
- Jika transkripsi memiliki stempel waktu, setiap jawaban menautkan ke bagian transkripsi tempat hal itu diucapkan. Klik salah satunya untuk memutar audio dari sana.
- Pertanyaan dan jawabannya disimpan di riwayat bersama transkripsi. Tempat sampah di header menghapus percakapan, setelah meminta konfirmasi.

Pertanyaan dijawab oleh penyedia yang dipilih untuknya di **Preferensi** → **AI** → **Tanya**, yaitu penyedia ringkasan sampai Anda mengubahnya. Seperti ringkasan, transkripsi yang sangat panjang hanya dibaca bagian awalnya.

## Terjemahan

Klik **Terjemahkan**, pilih bahasa di **Terjemahkan ke:** dan penyedia di **Terjemahkan dengan:**, lalu konfirmasi. Dialog menjelaskan apa yang dilakukan penyedia yang dipilih, dan menawarkan untuk mengatur kunci API-nya jika belum ada. Terjemahan ditampilkan di panel di sebelah kanan teks asli.

- Jika transkripsi memiliki stempel waktu, transkripsi diterjemahkan kalimat demi kalimat, dengan teks yang diucapkan sebelum dan sesudah setiap bagian sebagai konteks, sehingga terjemahan dimulai dengan stempel waktu setiap kalimat: kalimat yang diputar disorot, dan mengklik kalimat akan memutarnya.
- Jika Anda telah mengedit teks biasa, yang diterjemahkan adalah teks yang sudah diedit, tanpa stempel waktu.
- Kedua teks bergulir bersama, sehingga menampilkan bagian audio yang sama. Tombol bulat di pegangan di antara keduanya mengaktifkan dan menonaktifkannya. Seret pegangan untuk mengubah ukurannya, atau klik dua kali untuk mengembalikan ukurannya.

Tombol di header terjemahan mencari dan mengganti di dalamnya, menyalinnya, mengekspornya, **Terjemahkan ulang** (dengan penyedia dan model yang sama), dan **Sembunyikan terjemahan**. Tombol **Terjemahkan** juga memungkinkan Anda menampilkannya lagi, **Terjemahkan ke bahasa lain…**, atau **Hapus terjemahan**.

### Beberapa bahasa

Transkripsi dapat diterjemahkan ke beberapa bahasa, bahkan secara bersamaan, dan setiap terjemahan disimpan. Judul panel memilih terjemahan yang ditampilkan, menunjukkan seberapa banyak masing-masing sudah diterjemahkan, dan diakhiri dengan opsi untuk menerjemahkan ke bahasa lain. Menerjemahkan ke bahasa yang sudah memiliki terjemahan akan menggantikannya, setelah meminta konfirmasi, karena koreksinya akan hilang.

### Koreksi dan atur ulang waktu terjemahan

Terjemahan sering kali memerlukan waktu yang berbeda dari aslinya, mis. subtitle yang lebih lama dibaca. Klik kanan segmen terjemahan untuk:

- **Edit teks…**: mengubah teksnya.
- **Edit waktu…**: mengubah kapan segmen dimulai dan berakhir, hingga milidetik. Ketik waktunya sebagai `00:01:05,900`, `01:05,9`, atau `65.9`.
- **Tambahkan segmen sesudahnya…**: menambahkan segmen, yang secara bawaan mengisi jeda hingga segmen berikutnya.
- **Hapus segmen**.

### Terjemahkan sendiri

Untuk menulis terjemahan sendiri, pilih **Manual** di **Terjemahkan dengan:**. Tidak memerlukan kunci API. Terjemahan dimulai dengan segmen kosong untuk setiap subtitle transkripsi, yang ditampilkan sebagai **Belum diterjemahkan**, dan panel menampilkan berapa yang tersisa. Klik kanan salah satunya dan pilih **Terjemahkan teks…**: dialog menampilkan teks asli yang diucapkan pada saat itu.

### Subtitle dan ekspor

- Pada transkripsi video, centang **Tampilkan sebagai subtitle video** di menu **Terjemahkan** untuk menampilkan terjemahan sebagai subtitle. Menu video juga dapat menggantinya. Lihat [Tonton video dengan subtitle](/id/guides/transcript/#tonton-video-dengan-subtitle).
- Untuk menyimpan terjemahan sebagai file, klik tombol ekspor di panelnya. Terjemahan diekspor dalam [format](/id/guides/transcript/#salin-dan-ekspor) yang sama dengan transkripsi, dengan bahasanya di nama file (mis. `video.es.srt`), sehingga pemutar video memuatnya bersama video. Segmen yang belum diterjemahkan tidak disertakan dalam subtitle. Menu yang sama membuat [salinan video beserta subtitlenya](/id/guides/transcript/#ekspor-video-beserta-subtitlenya).

:::tip
Untuk mendapatkan transkripsi langsung dalam bahasa lain tanpa penyedia, Anda juga dapat menerjemahkan saat mentranskripsi. Lihat [Bahasa](/id/guides/transcription-settings/#bahasa).
:::

## Penyedia

Penyedia dipilih di **Preferensi** → **AI**, terpisah untuk ringkasan, pertanyaan, dan terjemahan.

| Penyedia | Model bawaan | Kunci API |
| --- | --- | --- |
| OpenAI (bawaan) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (lokal) | `llama3.2` | Tidak diperlukan |

Biarkan **Model** kosong untuk menggunakan model bawaan penyedia, atau ketik nama model lain dari penyedia tersebut (mis. `claude-sonnet-5-5` atau `deepseek-reasoner`).

Terjemahan juga dapat dibuat oleh:

- **DeepL**, yang memerlukan [kunci API DeepL](https://www.deepl.com/your-account/keys). Kunci paket gratis juga berfungsi.
- **Google Translate**, yang menggunakan kunci Google API dengan Cloud Translation API diaktifkan.

### Ollama

[Ollama](https://ollama.com) menjalankan model di komputer Anda, tanpa kunci API dan tanpa mengirim teks ke mana pun. Instal, unduh model (mis. `ollama pull llama3.2`), lalu pilih **Ollama** sebagai penyedia. Jika tidak berjalan di alamat bawaan, ubah **URL server** di **Preferensi** → **AI** (`http://localhost:11434` secara bawaan).

:::note
Setiap penyedia mengenakan biaya atas penggunaan API-nya, dan Audiotext tidak bertanggung jawab atas hal itu. Kunci API disimpan di penyimpanan kredensial sistem Anda. Lihat [File dan data](/id/reference/files-and-data/).
:::
