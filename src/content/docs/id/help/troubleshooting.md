---
title: Pemecahan masalah
description: Solusi untuk masalah yang paling umum pada Audiotext.
sidebar:
  order: 1
---

## Transkripsi pertama dengan WhisperX memakan waktu lama

Saat pertama kali digunakan, model diunduh, yang dapat memakan waktu beberapa menit tergantung koneksi dan ukuran model (hingga ~3 GB). Kemajuan menunjukkan kapan model sedang dimuat. Model tetap di memori selama opsinya tidak berubah, sehingga transkripsi berikutnya langsung dimulai.

## WhisperX gagal dengan `CUDA out of memory`

GPU Anda tidak memiliki cukup memori untuk pengaturan tersebut. Coba, secara berurutan:

1. Turunkan **Ukuran batch** (mis. `4`) di **Preferensi** → **WhisperX**.
2. Gunakan model yang lebih kecil (mis. `small` atau `base`).
3. Gunakan **Jenis komputasi** yang lebih ringan (mis. `int8`).

Dua yang terakhir dapat menurunkan kualitas. Lihat [Mesin](/id/reference/engines/#model) untuk memori yang diperlukan setiap model.

## Transkripsi memakan waktu terlalu lama

Kecepatan WhisperX bergantung pada perangkat keras Anda, jadi jangan berharap hasil instan pada CPU yang sederhana. Coba model yang lebih kecil, seperti `small`, atau `large-v3-turbo` di GPU, atau jenis komputasi `int8`. Sebagai alternatif, gunakan **Whisper API** atau **Google API**, yang berjalan di server jarak jauh.

## Whisper API mengembalikan kesalahan `429`

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

Akun OpenAI Anda kehabisan kredit, atau Anda perlu menambahkan dana sebelum menggunakan API untuk pertama kali (meskipun Anda memiliki kredit gratis). Beli kredit di bagian [Billing](https://platform.openai.com/settings/organization/billing/overview) akun OpenAI Anda. Aktivasi akun dapat memakan waktu hingga 10 menit.

Jika Anda membuat kunci API sebelum menambahkan dana untuk pertama kali dan kesalahan tetap muncul setelah 10 menit, buat kunci baru dan atur di **Preferensi** → **Kunci API**.

## Pembicara tidak dapat diidentifikasi

Mengidentifikasi pembicara memerlukan token Hugging Face dan persetujuan atas ketentuan model. Periksa bahwa:

- Anda telah menyetujui ketentuan [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) dengan akun yang sama.
- Token memiliki peran `Read` dan sudah diatur di **Preferensi** → **Kunci API**.

Lihat [Identifikasi para pembicara](/id/guides/transcription-settings/#identifikasi-para-pembicara).

## Mikrofon tidak ditemukan, atau tidak ada yang terekam

- Periksa apakah mikrofon tersambung dan klik tombol segarkan di samping daftar mikrofon.
- Di macOS, izinkan Audiotext di **Pengaturan Sistem** → **Privasi & Keamanan** → **Mikrofon**. Di Windows, di **Pengaturan** → **Privasi** → **Mikrofon**.
- Jika pengukur level menampilkan **Tidak ada suara**, pilih mikrofon lain dalam daftar atau periksa apakah mikrofon tidak dibisukan.

## Audio transkripsi tidak dapat diputar

File sumber telah dipindahkan atau dihapus. Teks tetap tersimpan, tetapi audio hanya dapat diputar dari file aslinya. Rekaman mikrofon dan audio dari URL disimpan oleh Audiotext.

## Video YouTube tidak dapat diunduh

Pastikan URL benar dan video bersifat publik. YouTube sering berubah, jadi jika masih gagal, periksa apakah ada versi Audiotext yang lebih baru.

## Folder tidak mentranskripsi file apa pun

File yang sudah memiliki transkripsi akan dilewati. Aktifkan **Timpa file yang ada** untuk mentranskripsinya lagi. Folder juga harus berisi [file yang didukung](/id/reference/formats-and-languages/).

## Google API meminta bahasa

Google API tidak dapat mendeteksi bahasa. Pilih **Bahasa audio** di pengaturan.

## Masalah lain

Cari di [issue](https://github.com/HenestrosaDev/audiotext/issues) atau bertanya di [diskusi](https://github.com/HenestrosaDev/audiotext/discussions). Jika Anda menemukan bug, [laporkan](https://github.com/HenestrosaDev/audiotext/issues/new/choose) dengan menyertakan sistem Anda, versi Audiotext, dan langkah-langkah untuk mereproduksinya.
