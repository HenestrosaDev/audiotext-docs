---
title: Antarmuka baris perintah
description: Transkripsikan file, folder, dan video YouTube dari skrip dengan baris perintah Audiotext.
sidebar:
  order: 3
---

Audiotext juga dapat digunakan dari baris perintah untuk mentranskripsi dari skrip, saat Anda [menjalankannya dari kode sumber](/id/help/contributing/#siapkan-proyek). Ada tiga perintah:

- `transcribe`: mentranskripsi file, file-file dalam folder, atau video YouTube.
- `watch`: mentranskripsi file yang ditambahkan ke folder sampai dihentikan dengan `Ctrl+C`.
- `check-update`: memeriksa apakah versi baru tersedia dan menampilkan tautan untuk mengunduhnya.

Opsi yang tidak diberikan menggunakan nilai yang diatur di aplikasi. Transkripsi selalu disimpan di samping setiap file yang ditranskripsi, atau di folder yang diberikan dengan `--output-dir` (tempat subfolder dari folder yang ditranskripsi dibuat ulang).

## Contoh

```bash
# Transkripsi file. Teks juga dicetak, sehingga dapat dialihkan
python src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Transkripsi file-file dalam folder sambil mengidentifikasi pembicara
python src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transkripsi video YouTube dengan Whisper API
python src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transkripsi rapat dengan Whisper API, beserta kata kunci dan konteksnya
python src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Rapat tentang rilis berikutnya"

# Transkripsi file yang ditambahkan ke folder sampai dihentikan dengan Ctrl+C
python src/cli.py watch inbox/ --output-types srt
```

## Opsi

| Opsi | Deskripsi |
| --- | --- |
| `-m`, `--method` | Metode transkripsi: `whisperx`, `whisper-api`, atau `google` |
| `-l`, `--language` | Bahasa audio sebagai kode ISO 639-1 (mis. `id`), atau `auto` untuk mendeteksinya (tidak didukung Google) |
| `-o`, `--output-dir` | Folder tempat transkripsi disimpan (bawaan: di samping setiap file yang ditranskripsi) |
| `--overwrite` | Menimpa transkripsi yang ada |
| `-p`, `--prompt` | Tentang apa audio itu, seperti topik atau latarnya (tidak didukung Google) |
| `-k`, `--keywords` | Nama, istilah, atau akronim yang diucapkan dalam audio, dipisahkan koma, agar ejaannya benar (tidak didukung Google) |
| `--translate` | Menerjemahkan audio ke bahasa Inggris (tidak didukung Google) |
| `-q`, `--quiet` | Hanya mencetak kesalahan |
| `-v`, `--verbose` | Mencetak log untuk men-debug kesalahan |

**Opsi WhisperX**

| Opsi | Deskripsi |
| --- | --- |
| `-t`, `--output-types` | Jenis file keluaran yang dipisahkan koma (mis. `txt,srt`) |
| `--diarize` | Mengidentifikasi pembicara |
| `--speakers` | Jumlah pembicara saat mengidentifikasi (`0` untuk mendeteksinya) |
| `--model-size` | Model, mis. `small` atau `large-v2` (lihat [Mesin](/id/reference/engines/#model)) |
| `--compute-type` | `int8`, `float16`, atau `float32` |
| `--batch-size` | Ukuran batch |
| `--cpu` | Berjalan di CPU |

**Opsi Whisper API**

| Opsi | Deskripsi |
| --- | --- |
| `--openai-model` | Model transkripsi: `whisper-1`, `gpt-transcribe`, atau `gpt-4o-transcribe-diarize` |

Jalankan `python src/cli.py transcribe --help` untuk melihat semua opsi dan nilainya.

## Keluaran dan kode keluar

Kemajuan dicetak ke error standar (sembunyikan dengan `--quiet`), dan teks transkripsi dari satu file ke keluaran standar. Perintah keluar dengan kode `1` jika transkripsi gagal.

Kunci API adalah kunci yang diatur di aplikasi, atau variabel lingkungan `OPENAI_API_KEY`, `GOOGLE_API_KEY`, dan `HF_TOKEN` (untuk mengidentifikasi pembicara).
