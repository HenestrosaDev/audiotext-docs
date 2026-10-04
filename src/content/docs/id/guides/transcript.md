---
title: Transkrip
description: Putar, cari, koreksi, salin, dan ekspor transkripsi, serta tonton video dengan subtitlenya.
sidebar:
  order: 3
---

Pilih transkripsi di [riwayat](/id/guides/history/) untuk membukanya. Bilah alat beralih di antara tiga mode, **Transkrip**, **Teks biasa**, dan **Ringkasan**, serta memiliki tombol **Terjemahkan**, **Salin**, dan **Ekspor**.

## Mode transkrip

Menampilkan setiap kalimat beserta stempel waktunya dan, jika pembicara diidentifikasi, pembicaranya.

Stempel waktu hanya tersedia dengan **WhisperX** serta model `whisper-1` dan `gpt-4o-transcribe-diarize` dari **Whisper API**. Tanpa stempel waktu, transkrip tidak dapat diputar per kalimat; gunakan mode **Teks biasa**.

### Putar audio

- **Klik kalimat** untuk memutar audio dari titik tersebut. Kalimat yang diputar akan disorot, dan teks mengikuti pemutaran. Dengan waktu per kata, setiap kata juga disorot.
- Gunakan bilah pemutar untuk memutar, menjeda, berpindah ke titik mana pun, dan mengubah **kecepatan**, dari `0.5×` hingga `2×`, tanpa mengubah nada suara.
- Pintasan keyboard: `Spasi` memutar atau menjeda, dan `←`/`→` mundur atau maju 5 detik.

Jika file sumber dipindahkan atau dihapus, audio tidak tersedia, tetapi teksnya tetap ada. Rekaman mikrofon disimpan oleh Audiotext, sehingga selalu dapat diputar.

![Transkripsi yang sedang diputar, dengan kalimat saat ini disorot](/screenshots/transcript.png)

### Tonton video dengan subtitle

Transkripsi video menampilkan video di atas teks. Menunya memungkinkan Anda **Tampilkan subtitle di video** dan memilih **Ukuran** (kecil, sedang, atau besar), **Posisi** (bawah atau atas), dan **Gaya** (latar gelap atau garis tepi).

### Cari

Tekan `Ctrl+F` (`⌘F` di macOS) lalu ketik. `Enter` dan `Shift+Enter` berpindah ke kecocokan berikutnya dan sebelumnya, dan `Esc` menghapus pencarian.

## Koreksi transkripsi

Untuk mengoreksi transkripsi sambil mempertahankan stempel waktunya (yang digunakan oleh subtitle dan pemutaran), gunakan opsi di menu `⋯`, atau klik kanan kalimat:

- **Cari dan ganti…**: mengganti kata atau frasa di seluruh transkripsi, mis. nama yang salah eja. Menampilkan berapa kali teks muncul sebelum menggantinya, dan dapat **Cocokkan huruf besar/kecil**.
- **Ganti nama pembicara…**: memberi nama kepada setiap pembicara (`SPEAKER_00` → `Ana`). Memberi dua pembicara nama yang sama akan menggabungkan keduanya.
- **Edit teks…**: klik kanan kalimat untuk mengubah teksnya.
- **Putar dari sini**: klik kanan kalimat untuk memutarnya.

Kata yang tidak berubah tetap mempertahankan waktunya, sehingga tetap disorot saat diputar.

## Teks biasa

Mode **Teks biasa** memungkinkan Anda mengedit teks dengan bebas, seperti di editor teks. Perubahan disimpan secara otomatis. Transkrip mempertahankan teks asli beserta stempel waktunya, sehingga subtitle tidak menggunakan suntingan teks biasa.

## Salin dan ekspor

**Salin** menyalin teks dari mode saat ini (transkrip, ringkasan, atau terjemahan).

**Ekspor** (atau `Ctrl+S`, `⌘S` di macOS) menyimpan transkripsi sebagai:

| Format | Isi |
| --- | --- |
| Teks biasa (`.txt`) | Teks |
| Markdown (`.md`) | Ringkasan, jika ada, dan teks dalam paragraf beserta stempel waktu dan pembicara masing-masing |
| Dokumen Word (`.docx`) | Sama seperti Markdown, siap diedit atau dicetak |
| Subtitle (`.srt`) | Subtitle untuk pemutar video |
| Subtitle web (`.vtt`) | Subtitle untuk web |
| Tabel (`.tsv`) | Satu baris per kalimat, dengan awal dan akhir (dalam milidetik) serta teksnya |
| JSON (`.json`) | Teks, segmen beserta stempel waktu, kata, dan pembicaranya, serta ringkasan, jika ada |

Subtitle dan tabel memerlukan stempel waktu.

## Ganti nama, label, dan catatan

Header transkripsi menampilkan nama, sumber, tanggal, dan labelnya. Klik dua kali nama untuk mengganti namanya, klik label untuk mengubahnya, atau klik **Tambahkan catatan** untuk menulis catatan. Opsi lainnya ada di [riwayat](/id/guides/history/).
