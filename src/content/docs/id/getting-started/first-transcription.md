---
title: Transkripsi pertama Anda
description: Tur singkat jendela Audiotext dan langkah-langkah untuk mentranskripsi file audio atau video.
sidebar:
  order: 2
---

## Jendela

Jendela Audiotext memiliki tiga bagian:

- **Bilah atas**: tombol untuk memulai **Transkripsi baru** dari **File**, **URL**, **Mikrofon**, atau **Folder**, status aplikasi, dan roda gigi yang membuka [Preferensi](/id/reference/preferences/). Tombol di kiri menampilkan atau menyembunyikan riwayat.
- **Riwayat**, di kiri: semua transkripsi Anda, yang dapat Anda cari, sematkan, kelompokkan, dan ganti namanya. Lihat [Riwayat](/id/guides/history/).
- **Area utama**: sumber yang sedang Anda atur, kemajuan transkripsi, atau transkripsi yang Anda pilih di riwayat.

![Bagian-bagian jendela Audiotext: bilah atas, riwayat, dan area utama](/screenshots/window.png)

Saat Anda membuka aplikasi, area utama bertanya **Apa yang ingin Anda transkripsi?** dan menampilkan kartu untuk setiap jenis sumber.

:::tip
Lepaskan file atau folder di mana saja pada jendela untuk mentranskripsinya.
:::

## Transkripsi file

1. Klik **File** di bilah atas (atau tekan `Ctrl+O`, `⌘O` di macOS) dan pilih file audio atau video, atau lepaskan file ke jendela. Lalu klik **Lanjutkan**.
2. Tinjau pengaturannya. Nilai bawaan cocok untuk sebagian besar audio:
   - **Mesin**: WhisperX, yang berjalan di komputer Anda. Pilih **Model** yang lebih kecil (seperti `small`) jika komputer Anda lambat.
   - **Bahasa**: **Bahasa audio** dideteksi secara otomatis. Pilih jika Anda mengetahuinya, untuk menghindari kesalahan. Untuk menerjemahkan, pilih **Bahasa transkripsi** yang lain.
   - **Konteks** dan **Opsi**: petunjuk dan fitur opsional, seperti mengidentifikasi pembicara.

   Lihat [Pengaturan transkripsi](/id/guides/transcription-settings/) untuk semuanya.
3. Klik **Mulai transkripsi** (atau tekan `Ctrl+Enter`, `⌘↩` di macOS).

Selama berjalan, kemajuan setiap langkah ditampilkan (memuat model, mentranskripsi, menyelaraskan kata…). Sementara itu Anda tetap bisa menggunakan Audiotext: hasilnya disimpan di riwayat dan terbuka saat siap. Untuk membatalkannya, klik **Batal** atau tekan `Esc`.

Jika ada transkripsi lain yang sedang berjalan, tombolnya berubah menjadi **Tambahkan ke antrean**, dan transkripsi baru dimulai setelah yang sekarang selesai.

## Baca dan gunakan hasilnya

Setelah selesai, transkripsi akan terbuka:

- Klik segmen untuk memutar audio dari titik tersebut.
- Beralih antara **Transkrip**, **Teks biasa**, dan **Ringkasan**.
- Gunakan **Terjemahkan**, **Salin**, dan **Ekspor** untuk menerjemahkan, menyalin, atau menyimpannya sebagai file.

Lihat [Transkrip](/id/guides/transcript/) untuk semua yang dapat Anda lakukan dengannya.

## Pintasan keyboard

| Pintasan | Tindakan |
| --- | --- |
| `Ctrl+Enter` / `⌘↩` | Memulai transkripsi, atau memulai dan menghentikan rekaman |
| `Ctrl+O` / `⌘O` | Memilih file (atau folder, pada sumber folder) |
| `Ctrl+S` / `⌘S` | Mengekspor transkripsi yang ditampilkan |
| `Ctrl+F` / `⌘F` | Mencari dalam transkripsi |
| `Esc` | Membatalkan transkripsi yang sedang berjalan |
| `Spasi` | Memutar atau menjeda audio |
| `←` / `→` | Mundur atau maju 5 detik |
