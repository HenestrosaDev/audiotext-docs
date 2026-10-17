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

### Merekam audio komputer

Untuk mentranskripsikan apa yang diputar komputer Anda (panggilan video, webinar, video yang tidak dapat diunduh), rekam dari perangkat yang mengirim suara speaker ke input. Atur sekali, klik tombol segarkan, dan pilih perangkat itu di daftar mikrofon. Semua yang diputar komputer akan terekam, termasuk notifikasi, tetapi suara Anda tidak.

- **Windows**: jalankan `mmsys.cpl`, lalu di tab **Recording**, klik kanan daftar untuk menampilkan perangkat yang dinonaktifkan dan aktifkan **Stereo Mix**. Jika kartu suara Anda tidak memilikinya, instal [VB-CABLE](https://vb-audio.com/Cable/), jadikan **CABLE Input** sebagai perangkat output, dan pilih **CABLE Output** di Audiotext. Agar tetap mendengar suaranya, centang **Listen to this device** di properti **CABLE Output**.
- **macOS**: instal [BlackHole](https://existential.audio/blackhole/) (`brew install blackhole-2ch`) dan pilih **BlackHole 2ch** di Audiotext. Agar tetap mendengar suaranya, buat [Multi-Output Device](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) dengan speaker Anda dan BlackHole, lalu jadikan sebagai perangkat output.
- **Linux** (PulseAudio atau PipeWire): pilih **pulse** di Audiotext dan mulai merekam. Lalu, di tab **Recording** pada `pavucontrol`, ubah sumber Audiotext ke monitor speaker Anda.

## Folder

Mentranskripsi semua file audio dan video dalam sebuah folder dan, jika **Sertakan subfolder** aktif di kartu **Folder**, dalam subfoldernya. Klik **Pilih folder…** atau letakkan folder di jendela. Audiotext memberi tahu berapa file yang ditemukannya. Untuk melewati beberapa file, tulis nama atau jalurnya, dipisahkan koma, di **Lewati file yang cocok dengan** (mis. `*.wav, drafts/*`). File tersembunyi selalu dilewati.

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

Jika dua file memiliki nama yang sama dan ekstensi berbeda (mis. `talk.mp3` dan `talk.mp4`), transkripsinya menyimpan ekstensi di namanya (`talk.mp3.txt` dan `talk.mp4.txt`), agar tidak saling menggantikan.

File yang sudah memiliki transkripsi akan **dilewati**: sebuah file hanya dilewati jika memiliki semua jenis file yang Anda pilih, jadi menambahkan jenis file akan mentranskripsinya lagi. Jika sebuah file tidak dapat ditranskripsi, file lainnya tetap ditranskripsi.

### File dalam folder

Halaman sebuah folder di riwayat menampilkan file-filenya, dengan status, durasi, dan ukuran masing-masing serta pratinjau teksnya. Cari, filter menurut status (**Semua**, **Selesai**, **Gagal**, atau **Tertunda**), dan urutkan menurut nama, status, durasi, atau ukuran. File yang dipindahkan atau dihapus ditandai sebagai **File tidak ditemukan**.

- Klik sebuah file untuk membuka transkripsinya, atau klik tombol `⋯`-nya (atau klik kanan file itu) untuk menyalin teksnya, membukanya langsung di ekspor, ringkasan, atau terjemahannya, menampilkannya di pengelola file, atau memilih **Transkripsi ulang file ini**.
- Pilih beberapa file dengan `Ctrl`/`⌘` atau `Shift`, atau semua file yang ditampilkan dengan `Ctrl+A` / `⌘A`, lalu pilih **Transkripsi ulang**, **Ekspor…** (untuk mengekspornya bersama ke satu file TXT, Markdown, atau Word), atau **Hapus dari riwayat…**. `Enter` membuka file yang dipilih, dan `Esc` menghapus pilihan.
- **Coba lagi yang gagal** mentranskripsi lagi file yang gagal. **Pindai ulang folder** hanya mentranskripsi file yang belum memiliki transkripsi, seperti file baru, dan memberi tahu berapa yang dilewati karena sudah memilikinya.
- Menu `⋯` folder berisi **Transkripsi ulang semua…** (mentranskripsi lagi semua filenya, menggantikan transkripsinya), **Ekspor semua…** (ke satu file), opsi untuk menghapus file yang hilang dari daftar, serta opsi untuk membuka folder sumber atau folder file yang disimpan.
- Saat Anda mengubah pengaturan folder, file yang ditranskripsi dengan pengaturan lain (mesin, model, bahasa…) ditampilkan, dengan tombol **Transkripsi ulang**.

Header menunjukkan tempat file disimpan dan menautkan ke folder sumber. **Edit pengaturan** mengubah pengaturan folder, dan **Simpan dan pindai ulang** mentranskripsi dengan pengaturan itu file yang belum memiliki transkripsi.

### Pantau folder

Aktifkan **Pantau folder** di kartu **Folder** untuk terus mentranskripsi file yang ditambahkan ke folder (atau subfoldernya) sampai Anda mengklik **Berhenti memantau**. Ini berguna untuk rekaman dari perekam suara atau alat rapat yang disalin ke sebuah folder.

- File yang sudah ada di folder akan dilewati, kecuali Anda mengaktifkan **Transkripsi file yang sudah ada di folder**: maka file yang belum memiliki transkripsi ditranskripsi lebih dulu.
- File ditranskripsi setelah selesai disalin sepenuhnya (saat ukurannya berhenti berubah), sehingga file besar tidak ditranskripsi setengah jalan.
- Folder yang sedang dipantau saat Audiotext ditutup akan dipantau lagi saat dibuka, melanjutkan dari file yang sudah dilihatnya. Folder yang dihentikan dapat dipantau lagi dengan **Lanjutkan pemantauan**.
- Jika folder tidak tersedia (mis. berada di drive yang tidak terhubung), Audiotext menunggunya alih-alih gagal.
- Untuk mentranskripsi hal lain atau merekam, folder dijeda (transkripsi baru menampilkan **Memulai…** sampai jeda terjadi), lalu dipantau lagi setelahnya.
- Kesalahan tidak menghentikan pemantauan, dan file yang ditranskripsi bersamaan diberitahukan dalam satu notifikasi.

## Antrean

Anda dapat mengatur transkripsi baru saat transkripsi lain sedang berjalan: tombolnya berubah menjadi **Tambahkan ke antrean**, dan transkripsi dimulai setelah yang sekarang selesai. Transkripsi dalam antrean dan yang sedang berjalan ditampilkan di riwayat.
