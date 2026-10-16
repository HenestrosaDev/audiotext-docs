---
title: Transkrip
description: Putar, cari, koreksi, tinjau, salin, dan ekspor transkripsi, serta tonton atau ekspor video dengan subtitlenya.
sidebar:
  order: 3
---

Pilih transkripsi di [riwayat](/id/guides/history/) untuk membukanya. Bilah alat beralih di antara empat mode, **Subtitle**, **Teks biasa**, **Ringkasan**, dan **Tanya**, serta memiliki tombol **Terjemahkan** dan menu `⋯`.

Transkripsi ditampilkan di kartu yang berjudul bahasanya. Tombol di header kartu mencari dan mengganti di dalamnya, menyalinnya, mengekspornya, dan **Transkripsi lagi** (setelah meminta konfirmasi, karena koreksi teksnya akan hilang).

## Subtitle

Menampilkan transkripsi yang dibagi menjadi subtitle video, beserta waktu mulai dan selesai setiap subtitle dan, jika pembicara diidentifikasi, pembicaranya. Panjangnya mengikuti [preferensi subtitle](/id/reference/preferences/#subtitle).

Secara bawaan, waktu ditampilkan hingga milidetik, seperti pada subtitle (`00:01:05,900 – 00:01:09,350`). Untuk menyederhanakannya (`01:05 – 01:09`), hapus centang **Stempel waktu presisi (HH:MM:SS,mmm)** di menu `⋯`.

Di atas subtitle, sebuah baris menghitung jumlahnya dan, jika pembicara sudah diidentifikasi, jumlah pembicara (mis. `Subtitle: 120 · Pembicara: 3`). Segmen panjang yang dipecah menjadi beberapa subtitle dihitung sebagai beberapa subtitle.

Stempel waktu hanya tersedia dengan **WhisperX** serta model `whisper-1` dan `gpt-4o-transcribe-diarize` dari **Whisper API**. Tanpa stempel waktu, transkrip tidak dapat diputar per subtitle; gunakan mode **Teks biasa**.

### Putar audio

- **Klik subtitle** untuk memutar audio dari titik tersebut. Subtitle yang diputar disorot dan dijaga di tengah teks. Dengan waktu per kata, setiap kata juga disorot.
- Gunakan bilah pemutar untuk memutar, menjeda, berpindah ke titik mana pun, dan mengubah **kecepatan**, dari `0.5×` hingga `2×`, tanpa mengubah nada suara.
- Pintasan keyboard: `Spasi` memutar atau menjeda, dan `←`/`→` mundur atau maju 5 detik.

Jika file sumber dipindahkan atau dihapus, audio tidak tersedia, tetapi teksnya tetap ada. Rekaman mikrofon disimpan oleh Audiotext, sehingga selalu dapat diputar.

![Transkripsi yang sedang diputar, dengan segmen saat ini disorot](/screenshots/transcript.png)

### Tonton video dengan subtitle

Transkripsi video menampilkan video di atas teks. Menunya memungkinkan Anda **Tampilkan subtitle di video** dan memilih **Ukuran** (kecil, sedang, atau besar), **Posisi** (bawah atau atas), dan **Gaya** (latar gelap atau garis tepi). Jika transkripsi memiliki [terjemahan](/id/guides/summary-and-translation/#terjemahan), menu juga memilih apakah subtitle menampilkan **Transkripsi** atau **Terjemahan** ke suatu bahasa. Tombol **Subtitle** di bilah pemutar juga menampilkan atau menyembunyikannya, dan panah di sebelahnya membuka menu yang sama.

## Cari dan ganti

Tekan `Ctrl+F` (`⌘F` di macOS), atau klik kaca pembesar di header, untuk membuka jendela cari dan ganti di teks yang sedang Anda kerjakan: transkripsi atau terjemahannya. Jendela ini menemukan teks saat Anda mengetik (stempel waktu dan pembicara tidak dicari) dan menampilkan jumlah kecocokan.

- `Enter` dan `Shift+Enter`, atau tombol panah, berpindah ke kecocokan berikutnya dan sebelumnya.
- **Ganti** mengganti kecocokan saat ini, dan **Ganti semua** mengganti semuanya, mis. nama yang salah eja. Centang **Cocokkan huruf besar/kecil** untuk hanya menemukan teks dengan huruf kapital yang sama.
- Jendela ini tidak modal, sehingga Anda dapat membaca dan memutar teks selagi jendela terbuka. **Selalu di atas** menjaganya di atas jendela utama.
- `Esc` menutupnya.

Di mode **Teks biasa**, jendela hanya mencari (**Cari di transkripsi**), karena kecocokan di sana tidak dapat dikaitkan ke sebuah subtitle. Kembali ke **Subtitle** untuk mengganti.

## Koreksi transkripsi

Untuk mengoreksi transkripsi sambil mempertahankan stempel waktunya (yang digunakan oleh subtitle dan pemutaran), gunakan jendela [Cari dan ganti](#cari-dan-ganti), atau klik kanan subtitle:

- **Putar dari sini**: memutarnya.
- **Salin**: menyalin teksnya.
- **Edit teks…**: mengubah teksnya.
- **Ganti nama pembicara…**: memberi nama kepada setiap pembicara (`SPEAKER_00` → `Ana`). Memberi dua pembicara nama yang sama akan menggabungkan keduanya. Opsi ini juga ada di menu `⋯`.

Kata yang tidak berubah tetap mempertahankan waktunya, sehingga tetap disorot saat diputar.

## Tinjau kata dengan keyakinan rendah

Kata yang paling tidak diyakini mesin digarisbawahi, agar Anda tahu bagian mana yang perlu diperiksa lebih dulu. WhisperX menilai setiap kata saat menentukan waktunya (**Waktu per kata**, aktif secara bawaan), dan model `whisper-1` dari Whisper API menilai setiap segmen, sehingga segmennya digarisbawahi seluruhnya.

Bilah di atas teks menampilkan berapa kata yang masih perlu ditinjau (mis. `3 dari 12 perlu ditinjau`):

- Tombol panahnya, atau `Ctrl+J` dan `Shift+Ctrl+J` (`⌘J` dan `⇧⌘J` di macOS), berpindah ke kata berikutnya dan sebelumnya, dan memindahkan pemutar ke sana. Dengan **Putar otomatis**, setiap kata diputar bersama sedikit konteks di sekitarnya.
- `Enter` menerima kata yang dituju apa adanya, lalu berpindah ke kata berikutnya. **Terima sisanya** menerima semua kata yang tersisa, dan **Urungkan** membatalkan tinjauan terakhir.
- Klik kata untuk mengoreksinya di tempat: ketik teks yang benar lalu tekan `Enter` (atau **Terima** tanpa perubahan). **Putar ulang** (`Ctrl+R`, `⌘R` di macOS) memutarnya lagi, dan `Esc` menutupnya.
- **Hanya yang ditandai** hanya menampilkan subtitle yang berisi kata untuk ditinjau.
- Kata-kata juga ditandai di bawah posisi audio. Klik sebuah tanda untuk menuju katanya.

Jika semua sudah ditinjau, **Tinjau lagi kata yang diterima** mengembalikan kata yang Anda terima. Kata yang dikoreksi tetap dianggap sudah ditinjau.

Kata digarisbawahi jika nilainya di bawah 40%. Pilih ambang lain, dari 20% hingga 70%, di `⋯` → **Ambang keyakinan rendah**, atau dari **Sesuaikan ambang** di bilah. Untuk berhenti menggarisbawahinya dan menyembunyikan bilah, hapus centang **Sorot kata dengan keyakinan rendah** di menu `⋯`.

Jika transkripsi tidak memiliki nilai, menu `⋯` menjelaskan alasannya: **Aktifkan “Waktu per kata” dan transkripsikan ulang**, **Tidak ada model penyelarasan untuk bahasanya**, **Transkripsikan ulang untuk menilai kata-katanya** (dibuat sebelum kata dinilai) atau **Hanya WhisperX dan whisper-1 yang menilai kata**.

## Teks biasa

Mode **Teks biasa** menampilkan teks transkripsi tanpa stempel waktu. Teks ini dibangun dari subtitle, jadi hanya baca, seperti yang dikatakan catatan di sebelah mode: untuk mengubahnya, [koreksi subtitle-nya](#koreksi-transkripsi), dan teks biasa akan mengikutinya. Dengan begitu, semua ekspor dan terjemahan memakai teks yang sama.

Transkripsi tanpa stempel waktu (mis. dari Google API) tidak punya subtitle, jadi teks biasanya dapat diedit dengan bebas, seperti di editor teks. Perubahan disimpan secara otomatis.

:::note
Versi sebelumnya memungkinkan Anda mengedit teks biasa dari transkripsi yang punya subtitle. Saat salah satu transkripsi (atau terjemahan) itu dibuka, teks biasanya dibangun ulang dari subtitle-nya, sehingga suntingan tersebut diganti.
:::

## Salin dan ekspor

Tombol salin di header menyalin teks transkripsi.

Tombol ekspor (atau `Ctrl+S`, `⌘S` di macOS) menyimpannya sebagai:

| Format | Isi |
| --- | --- |
| Dokumen Word (`.docx`) | Sama seperti Markdown, siap diedit atau dicetak |
| JSON (`.json`) | Teks, segmen beserta stempel waktu, kata, dan pembicaranya, serta ringkasan, jika ada |
| Markdown (`.md`) | Ringkasan, jika ada, dan teks dalam paragraf beserta stempel waktu dan pembicara masing-masing |
| Subtitle (`.srt`) | Subtitle untuk pemutar video |
| Subtitle bergaya (`.ass`) | Subtitle dengan warna untuk setiap pembicara, untuk pemutar dan editor video |
| Subtitle web (`.vtt`) | Subtitle untuk web |
| Tabel (`.tsv`) | Satu baris per segmen, dengan awal dan akhir (dalam milidetik) serta teksnya |
| Teks biasa (`.txt`) | Teks |

Subtitle dan tabel memerlukan stempel waktu. [Terjemahan](/id/guides/summary-and-translation/#subtitle-dan-ekspor) dan [ringkasan](/id/guides/summary-and-translation/#ringkasan) diekspor dari panelnya masing-masing.

### Ekspor video beserta subtitlenya

Untuk membagikan video di tempat yang tidak dapat memuat file subtitle (mis. media sosial), pilih **Video dengan subtitle (.mp4)…** di menu ekspor transkripsi, atau terjemahan. Audiotext membuat salinan video dengan subtitle yang digambar di atasnya, seperti yang ditampilkan di aplikasi: dengan ukuran, posisi, dan gayanya (lihat [Tonton video dengan subtitle](#tonton-video-dengan-subtitle)).

Salinan dibuat di latar belakang, dan status menampilkan kemajuannya. Untuk membatalkannya, pilih **Berhenti menambahkan subtitle ke video** di menu yang sama. Salinan berupa file MP4 (video H.264 dan audio AAC), dan video asli tidak berubah.

Jika tidak ada fon di sistem Anda yang memiliki beberapa karakter subtitle, karakter tersebut digambar sebagai kotak, dan Audiotext mencantumkannya setelah selesai. Lihat [Pemecahan masalah](/id/help/troubleshooting/#video-dengan-subtitle-menampilkan-kotak).

## Ganti nama, label, dan catatan

Header transkripsi menampilkan nama, sumber, tanggal, dan labelnya. Klik dua kali nama untuk mengganti namanya, klik label untuk mengubahnya, atau klik **Tambahkan catatan** untuk menulis catatan. Klik catatan, atau pensilnya, untuk mengeditnya, dan tempat sampahnya untuk menghapusnya.

Menu `⋯` juga memiliki opsi-opsi ini, dan membuka folder file sumber atau **folder file yang disimpan**. Opsi lainnya ada di [riwayat](/id/guides/history/).
