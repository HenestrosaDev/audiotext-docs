---
title: Pengaturan transkripsi
description: Pilih mesin, bahasa, konteks, opsi, dan keluaran setiap transkripsi.
sidebar:
  order: 2
---

Sebelum mentranskripsi, Audiotext menampilkan pengaturan transkripsi yang dikelompokkan dalam kartu. Pengaturan ini diingat untuk berikutnya, dan setiap transkripsi menyimpan pengaturan yang digunakan saat dibuat.

![Pengaturan transkripsi sebuah berkas](/screenshots/transcription-settings.png)

## Mesin

**Metode transkripsi**:

| Mesin | Tempat berjalan | Biaya | Catatan |
| --- | --- | --- | --- |
| **WhisperX** (bawaan) | Komputer Anda | Gratis dan tanpa batas | Privat dan offline. Lebih banyak opsi: pembicara, waktu per kata, teks langsung. |
| **Whisper API** | Server OpenAI | Berbayar per menit | Memerlukan [kunci API OpenAI](/id/reference/preferences/#kunci-api). Untuk komputer yang tidak bisa menjalankan WhisperX dengan lancar. |
| **Google API** | Server Google | Tingkat gratis, atau berbayar | Kualitas lebih rendah dan tanpa stempel waktu. Kunci API opsional. |

**Model** bergantung pada mesin. Dengan WhisperX, model yang lebih besar lebih akurat tetapi lebih lambat. Dengan Whisper API, model menentukan apakah transkripsi memiliki stempel waktu dan pembicara. Lihat [Mesin](/id/reference/engines/) untuk membandingkannya.

## Bahasa

- **Bahasa audio**: **Deteksi otomatis** secara bawaan. Memilihnya menghindari kesalahan pada audio yang pendek atau campuran. Google API tidak dapat mendeteksinya, jadi Anda harus memilihnya.
- **Bahasa transkripsi**: **Sama dengan audio** secara bawaan. Pilih bahasa lain untuk menerjemahkan audio sambil mentranskripsi.

Jika kedua bahasa berbeda, muncul opsi **Terjemahan**:

- **Terjemahkan dengan Whisper (disarankan)**: Whisper mentranskripsi dan menerjemahkan audio dalam satu langkah. Hanya dapat menerjemahkan ke bahasa Inggris.
- **Tulis langsung dalam bahasa _bahasa_ (eksperimental)**: Whisper diminta menulis transkripsi langsung dalam bahasa tersebut. Cara ini berhasil untuk banyak bahasa, tetapi periksa hasilnya.

Google API tidak dapat menerjemahkan. Untuk menerjemahkan transkripsi ke bahasa apa pun nanti, dengan lebih banyak penyedia, gunakan tombol [Terjemahkan](/id/guides/summary-and-translation/#terjemahan) pada transkrip.

## Konteks

Dua kolom opsional yang membantu model:

- **Kata kunci**: nama, istilah, atau akronim yang diucapkan dalam audio, dipisahkan koma (mis. `Audiotext, WhisperX, Henestrosa`), agar ejaannya benar. Ini hanya petunjuk: kata kunci hanya ditulis jika diucapkan dalam audio.
- **Deskripsi**: tentang apa audio itu, seperti topik atau latarnya (mis. `Wawancara tentang pengenalan suara`).

Keduanya digunakan oleh WhisperX dan Whisper API, kecuali model `gpt-4o-transcribe-diarize`. Google API tidak menggunakannya.

## Opsi

- **Waktu per kata** (WhisperX): menyelaraskan setiap kata dengan audio agar disorot saat diputar. Memerlukan sedikit lebih banyak waktu. Subtitle sudah menggunakannya.
- **Ekstrak suara**: mengurangi musik dan suara latar sebelum mentranskripsi.
- **Identifikasi pembicara** (WhisperX): menandai siapa yang berbicara di setiap bagian, mis. `SPEAKER_00`. Jika Anda tahu berapa orang yang berbicara, masukkan di **Jumlah pembicara** (`0` mendeteksinya otomatis). Memerlukan token Hugging Face gratis; lihat [Identifikasi para pembicara](#identifikasi-para-pembicara). Dengan Whisper API, model `gpt-4o-transcribe-diarize` mengidentifikasi pembicara.

### Identifikasi para pembicara

Model yang mengidentifikasi pembicara, [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1), gratis tetapi memerlukan token Hugging Face:

1. Buat akun di [Hugging Face](https://huggingface.co/join) dan setujui ketentuan [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1).
2. Buat token dengan peran `Read` di [pengaturan Anda](https://huggingface.co/settings/tokens).
3. Klik **Atur token Hugging Face…** dan tempelkan.

Model diunduh saat pertama kali digunakan. Setelah itu, pembicara diidentifikasi secara offline.

## Teks langsung

Hanya ditampilkan untuk mikrofon. Lihat [Teks langsung](/id/guides/sources/#teks-langsung).

## Folder dan Keluaran

Hanya ditampilkan untuk folder:

- **Pantau folder**: lihat [Pantau folder](/id/guides/sources/#pantau-folder).
- **Jenis file**: dengan WhisperX, satu atau beberapa dari `.txt`, `.srt`, `.vtt`, `.json`, `.tsv`, dan `.aud`. Dengan Whisper API, format file (`text`, `json`, `verbose_json`, `srt`, atau `vtt`); subtitle memerlukan model dengan stempel waktu. Google API mengembalikan teks biasa (`.txt`).
- **Lokasi**: file disimpan di samping setiap file sumber. Klik **Ubah…** untuk menyimpannya di folder lain (subfoldernya dibuat ulang), atau **Di samping sumber** untuk kembali.
- **Timpa file yang ada**: mentranskripsi ulang file yang sudah memiliki transkripsi dan menggantinya.

Opsi subtitle (lebar baris, jumlah baris, kata yang disorot) ada di [Preferensi](/id/reference/preferences/#subtitle).
