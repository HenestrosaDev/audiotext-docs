---
title: Antarmuka baris perintah
description: Transkripsikan, ringkas, dan terjemahkan file, folder, dan video YouTube dari skrip dengan baris perintah Audiotext.
sidebar:
  order: 3
---

Audiotext juga dapat digunakan dari baris perintah, mis. untuk mentranskripsi dari skrip. Ada tiga perintah:

- `transcribe`: mentranskripsi file, file-file dalam folder, atau video YouTube.
- `watch`: mentranskripsi file yang ditambahkan ke folder sampai dihentikan dengan `Ctrl+C`.
- `check-update`: memeriksa apakah versi baru tersedia dan menampilkan tautan untuk mengunduhnya.

Opsi yang tidak diberikan menggunakan nilai yang diatur di aplikasi. Transkripsi selalu disimpan di samping setiap file yang ditranskripsi, atau di folder yang diberikan dengan `--output-dir` (tempat subfolder dari folder yang ditranskripsi dibuat ulang).

## Jalankan

Aplikasi yang terinstal menjalankan baris perintah saat menerima salah satu perintahnya:

| Sistem | Perintah |
| --- | --- |
| Linux | `audiotext` (dipasang di `~/.local/bin` oleh `install.sh`) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe`, di folder tempat Audiotext diinstal (`%LOCALAPPDATA%\Programs\Audiotext` secara bawaan) |

Saat [menjalankannya dari kode sumber](/id/help/contributing/#siapkan-proyek), gunakan `uv run src/cli.py` sebagai gantinya.

## Contoh

```bash
# Transkripsi file. Teks juga dicetak, sehingga dapat dialihkan
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Transkripsi file-file dalam folder sambil mengidentifikasi pembicara
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transkripsi video YouTube dengan Whisper API
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transkripsi rapat dengan Whisper API, beserta kata kunci dan konteksnya
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Rapat tentang rilis berikutnya"

# Simpan subtitle dan dokumen Word, buat ringkasan, dan terjemahkan ke bahasa Spanyol
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Transkripsi file yang ditambahkan ke folder sampai dihentikan dengan Ctrl+C
audiotext watch inbox/ --output-types srt
```

## Opsi

| Opsi | Deskripsi |
| --- | --- |
| `-m`, `--method` | Metode transkripsi: `whisperx`, `whisper-api`, atau `google` |
| `-l`, `--language` | Bahasa audio sebagai kode ISO 639-1 (mis. `id`), atau `auto` untuk mendeteksinya (tidak didukung Google) |
| `-t`, `--output-types` | Jenis file keluaran yang dipisahkan koma, dari `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx`, dan `ass` (mis. `txt,srt,md`) |
| `-o`, `--output-dir` | Folder tempat transkripsi disimpan (bawaan: di samping setiap file yang ditranskripsi) |
| `--overwrite` | Menimpa transkripsi yang ada |
| `-p`, `--prompt` | Tentang apa audio itu, seperti topik atau latarnya (tidak didukung Google) |
| `-k`, `--keywords` | Nama, istilah, atau akronim yang diucapkan dalam audio, dipisahkan koma, agar ejaannya benar (tidak didukung Google) |
| `--translate` | Menerjemahkan audio ke bahasa Inggris saat mentranskripsi (tidak didukung Google). Untuk bahasa lain, lihat `--translate-to` |
| `-q`, `--quiet` | Hanya mencetak kesalahan |
| `-v`, `--verbose` | Mencetak log untuk men-debug kesalahan |
| `--version` | Mencetak versi Audiotext |

Jenis keluaran yang tidak disimpan sendiri oleh metode transkripsi (mis. `md` atau `docx`) diekspor dari hasilnya, seperti dari aplikasi. `aud` hanya disimpan oleh WhisperX.

**Opsi ringkasan dan terjemahan**

| Opsi | Deskripsi |
| --- | --- |
| `--summarize` | Meringkas setiap transkripsi, dengan poin-poin penting dan babnya, ke dalam file `.summary.md` |
| `--summary-provider` | Penyedia model bahasa yang meringkas: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok`, atau `ollama` |
| `--summary-model` | Model bahasa yang meringkas |
| `--translate-to` | Menerjemahkan setiap transkripsi ke suatu bahasa (kode ISO 639-1), disimpan dalam jenis file keluarannya (mis. `talk.es.srt`) |
| `--translation-provider` | Penyedia terjemahan: penyedia `--summary-provider`, `deepl`, atau `google` |
| `--translation-model` | Model bahasa yang menerjemahkan, untuk penyedia model bahasa |

Jika tidak diberikan, penyedia dan model yang diatur di aplikasi yang digunakan. Lihat [Penyedia](/id/guides/summary-and-translation/#penyedia).

**Opsi WhisperX**

| Opsi | Deskripsi |
| --- | --- |
| `--diarize` | Mengidentifikasi pembicara |
| `--speakers` | Jumlah pembicara saat mengidentifikasi (`0` untuk mendeteksinya) |
| `--model-size` | Model, mis. `small` atau `large-v2` (lihat [Mesin](/id/reference/engines/#model)) |
| `--compute-type` | `int8`, `float16`, atau `float32` |
| `--batch-size` | Ukuran batch |
| `--cpu` | Berjalan di CPU, alih-alih di GPU NVIDIA atau GPU Mac |

**Opsi Whisper API**

| Opsi | Deskripsi |
| --- | --- |
| `--openai-model` | Model transkripsi: `whisper-1`, `gpt-transcribe`, atau `gpt-4o-transcribe-diarize` |

Jalankan `audiotext transcribe --help` untuk melihat semua opsi dan nilainya.

## Keluaran dan kode keluar

Kemajuan dicetak ke error standar (sembunyikan dengan `--quiet`), dan teks transkripsi dari satu file ke keluaran standar. Perintah keluar dengan kode `1` jika transkripsi, ringkasan, atau terjemahan gagal, dan dengan `130` jika dihentikan dengan `Ctrl+C`.

Jika kunci API penyedia untuk `--summarize` atau `--translate-to` belum diatur, perintah berhenti sebelum mentranskripsi. Ringkasan atau terjemahan yang gagal dilaporkan tanpa kehilangan transkripsi, yang tetap disimpan.

Kunci API adalah kunci yang diatur di aplikasi, atau [variabel lingkungannya](/id/reference/files-and-data/#variabel-lingkungan), seperti `OPENAI_API_KEY`, `GOOGLE_API_KEY`, dan `HF_TOKEN` (untuk mengidentifikasi pembicara).
