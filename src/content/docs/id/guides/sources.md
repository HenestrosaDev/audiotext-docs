---
title: Sumber audio
description: Transkripsikan file, video YouTube dan tautan, rekaman mikrofon, folder, dan folder yang dipantau.
sidebar:
  order: 1
---

Audiotext mentranskripsi dari empat jenis sumber, yang Anda pilih di bilah atas pada **Transkripsi baru**.

## File

Mentranskripsi file audio atau video. Klik **Pilih file…** atau lepaskan file ke jendela. Penjelajah file menampilkan **Semua file yang didukung** secara bawaan; Anda dapat menampilkan **File audio** atau **File video** saja. Lihat [Format dan bahasa](/id/reference/formats-and-languages/) untuk format yang didukung.

Hanya satu file yang dapat ditambahkan dalam satu waktu. Untuk mentranskripsi beberapa file, gunakan sumber [Folder](#folder).

## URL

Mentranskripsi **video YouTube** atau **tautan langsung ke file audio atau video** (misalnya episode podcast). Tempel URL (dengan **Tempel** atau `Ctrl+V`) dan klik **Lanjutkan**. URL harus diawali dengan `http://` atau `https://`.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

Audio diunduh terlebih dahulu, jadi diperlukan koneksi internet.

## Mikrofon

Merekam suara Anda atau rapat lalu mentranskripsinya. Rekaman disimpan di riwayat sehingga dapat Anda putar nanti.

1. Pilih mikrofon dalam daftar (klik tombol segarkan jika Anda baru saja menyambungkannya).
2. Klik tombol rekam (atau tekan `Ctrl+Enter`, `⌘↩` di macOS) untuk mulai merekam. Pengukur level memberi tahu apakah suara **Terlalu pelan**, berada di **Level baik**, atau **Terlalu keras**.
3. Klik lagi untuk berhenti dan mentranskripsi.

### Teks langsung

Dengan **WhisperX**, aktifkan **Tampilkan teks saat merekam** di kartu **Teks langsung** untuk melihat draf teks saat Anda berbicara. Draf ditulis oleh **Model langsung** yang cepat (`small` secara bawaan). Saat Anda berhenti, seluruh rekaman ditranskripsi ulang dengan model mesin yang lebih akurat, lalu draf diganti.

![Teks langsung saat merekam dari mikrofon](/screenshots/live-text.png)

:::caution
Sistem Anda harus mendeteksi perangkat input dan mengizinkan aplikasi menggunakannya. Jika tidak, akan muncul **Mikrofon tidak ditemukan**. Di macOS, izinkan Audiotext di **Pengaturan Sistem** → **Privasi & Keamanan** → **Mikrofon**.
:::

## Folder

Mentranskripsi semua file audio dan video dalam folder **beserta subfoldernya**. Klik **Pilih folder…** atau lepaskan folder ke jendela. Audiotext memberi tahu berapa banyak file yang ditemukan.

Transkripsi setiap file disimpan di sampingnya (atau di folder lain yang Anda pilih di kartu **Keluaran**), dengan nama yang sama dan ekstensi dari setiap **jenis file** yang Anda pilih. Misalnya, dengan `.txt` dan `.vtt`:

```text
files-to-transcribe
├── paranoid-android.mp3
├── paranoid-android.txt
├── paranoid-android.vtt
└── movies
    ├── mulholland-dr.avi
    ├── mulholland-dr.txt
    └── mulholland-dr.vtt
```

File yang sudah memiliki transkripsi akan **dilewati**, kecuali Anda mengaktifkan **Timpa file yang ada**. Jadi, jika Anda menambahkan file ke folder lalu mentranskripsinya lagi, hanya file baru yang ditranskripsi.

Jika sebuah file tidak dapat ditranskripsi, file lainnya tetap ditranskripsi, dan tampilan folder menunjukkan file mana yang gagal dan alasannya. **Transkripsi lagi** mengulang folder, dan tombol folder membuka folder berisi file yang disimpan.

### Pantau folder

Aktifkan **Pantau folder** di kartu **Folder** untuk terus mentranskripsi file yang ditambahkan ke folder (atau subfoldernya) sampai Anda mengklik **Berhenti memantau**. Ini berguna untuk rekaman dari perekam suara atau alat rapat yang disalin ke sebuah folder.

- File yang sudah ada di folder akan dilewati. Untuk mentranskripsinya, transkripsikan folder tanpa memantaunya.
- File ditranskripsi setelah selesai disalin sepenuhnya (saat ukurannya berhenti berubah), sehingga file besar tidak ditranskripsi setengah jalan.
- Kesalahan tidak menghentikan pemantauan.

## Antrean

Anda dapat mengatur transkripsi baru saat transkripsi lain sedang berjalan: tombolnya berubah menjadi **Tambahkan ke antrean**, dan transkripsi dimulai setelah yang sekarang selesai. Transkripsi dalam antrean dan yang sedang berjalan ditampilkan di riwayat.
