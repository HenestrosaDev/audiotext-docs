---
title: Instalasi
description: Unduh Audiotext untuk Windows, macOS, atau Linux dan buka untuk pertama kali.
sidebar:
  order: 1
---

Audiotext adalah aplikasi desktop untuk **Windows**, **macOS**, dan **Linux**. Aplikasi ini mentranskripsi audio dari file, video YouTube, dan rekaman mikrofon menjadi teks, serta dapat menerjemahkan, meringkas, dan menjadikannya subtitle.

## Unduh aplikasi

Unduh file untuk sistem Anda dari [versi terbaru](https://github.com/HenestrosaDev/audiotext/releases/latest) di GitHub:

| Sistem | File |
| --- | --- |
| Windows (64-bit) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 atau lebih baru (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

Aplikasi ini sudah berisi semua yang dibutuhkan, termasuk FFmpeg.

### Windows

Jalankan penginstal dan ikuti langkah-langkahnya. Tidak memerlukan izin administrator. Jika Anda memiliki GPU NVIDIA, centang opsi untuk menggunakan GPU NVIDIA (CUDA): penginstal kemudian mengunduh add-on GPU, yang membuat WhisperX jauh lebih cepat. Penginstal tidak ditandatangani, sehingga Windows SmartScreen mungkin menampilkan peringatan: buka info selengkapnya lalu pilih untuk tetap menjalankannya.

### macOS

Buka file `.dmg` dan seret **Audiotext** ke folder **Aplikasi**. Aplikasi ini tidak dinotarisasi oleh Apple, sehingga macOS memblokirnya saat pertama kali dibuka: buka **Pengaturan Sistem** → **Privasi & Keamanan** dan klik **Tetap Buka** di samping pesan tentang Audiotext. Di macOS, WhisperX berjalan di CPU, karena CUDA tidak tersedia. Mac dengan prosesor Intel tidak didukung, karena PyTorch tidak lagi mendukungnya.

### Linux

Ekstrak arsip dan jalankan penginstal dari terminal:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Penginstal memasang Audiotext untuk pengguna Anda dan menambahkannya ke menu aplikasi (juga dapat dibuka dengan perintah `audiotext`). Jika mendeteksi GPU NVIDIA, penginstal menawarkan untuk mengunduh add-on GPU. Jalankan `./install.sh --gpu` atau `./install.sh --cpu` untuk memilih tanpa ditanya, dan `./install.sh --uninstall` untuk menghapusnya (pengaturan Anda tetap disimpan).

:::tip
Add-on GPU berukuran beberapa GB, jadi hanya sepadan jika Anda memiliki GPU NVIDIA. Tanpanya, WhisperX berjalan di CPU, dan Whisper API serta Google API tetap bekerja seperti biasa.
:::

:::note
Saat pertama kali mentranskripsi dengan **WhisperX** (mesin bawaan), modelnya akan diunduh. Ukurannya dari ~75 MB untuk `tiny` hingga ~3 GB untuk `large-v2`, jadi mungkin perlu waktu. Transkripsi berikutnya langsung dimulai.
:::

## Persyaratan

- **WhisperX** berjalan di komputer Anda. Ia bekerja di CPU apa pun, tetapi jauh lebih cepat di GPU NVIDIA dengan CUDA. Lihat [Mesin](/id/reference/engines/) untuk memilih model yang sesuai dengan perangkat keras Anda.
- **Whisper API** dan **Google API** berjalan di server jarak jauh, jadi memerlukan koneksi internet, tetapi tidak memerlukan perangkat keras yang kuat.
- Untuk mentranskripsi dari mikrofon, sistem Anda harus mendeteksi perangkat input.
- Di Linux, merekam dan memutar audio memerlukan [PortAudio](https://www.portaudio.com/) (`sudo apt install libportaudio2` di Ubuntu atau Debian).

## Ubah bahasa antarmuka

Audiotext menggunakan bahasa sistem Anda jika tersedia. Untuk mengubahnya, buka **Preferensi** (ikon roda gigi di kanan atas) dan pilih bahasa di **Umum** → **Bahasa antarmuka**. Bahasa dapat diubah saat tidak ada transkripsi yang sedang berjalan.

## Jalankan dari kode sumber

Jika Anda ingin menjalankan kode terbaru atau berkontribusi, lihat [Berkontribusi](/id/help/contributing/) untuk menyiapkan proyek dengan Python.

## Langkah berikutnya

- [Transkripsi pertama Anda](/id/getting-started/first-transcription/) menjelaskan jendela aplikasi dan langkah-langkah untuk mentranskripsi.
