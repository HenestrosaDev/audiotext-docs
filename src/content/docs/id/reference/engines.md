---
title: Mesin
description: Bandingkan WhisperX, Whisper API, dan Google API, lalu pilih model dan opsi lanjutannya.
sidebar:
  order: 1
---

Audiotext mentranskripsi dengan salah satu dari tiga mesin, yang dipilih di kartu **Mesin** pada [pengaturan transkripsi](/id/guides/transcription-settings/#mesin).

| | WhisperX | Whisper API | Google API |
| --- | --- | --- | --- |
| Berjalan di | Komputer Anda | Server OpenAI | Server Google |
| Internet | Hanya untuk mengunduh model | Diperlukan | Diperlukan |
| Biaya | Gratis, tanpa batas | Berbayar | Tingkat gratis (60 menit/bulan), atau berbayar dengan kunci API |
| Mendeteksi bahasa | ✓ | ✓ | ✗ |
| Menerjemahkan | ✓ | ✓ | ✗ |
| Stempel waktu | ✓ | Tergantung model | ✗ |
| Mengidentifikasi pembicara | ✓ (token Hugging Face) | `gpt-4o-transcribe-diarize` | ✗ |
| Waktu per kata | ✓ | `whisper-1` | ✗ |
| Teks langsung | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) adalah implementasi cepat Whisper dari OpenAI yang berjalan di komputer Anda, sehingga audio Anda tidak pernah meninggalkannya. Ia berjalan di CPU atau, jauh lebih cepat, di GPU NVIDIA dengan CUDA.

### Model

Model yang lebih besar lebih akurat, tetapi lebih lambat dan menggunakan lebih banyak memori. Model diunduh saat pertama kali digunakan.

| Model | Parameter | VRAM yang diperlukan |
| :---: | :---: | :---: |
| `tiny`, `tiny.en` | 39 M | ~1 GB |
| `base`, `base.en` | 74 M | ~1 GB |
| `small`, `small.en` | 244 M | ~2 GB |
| `distil-small.en` | 166 M | ~2 GB |
| `medium`, `medium.en` | 769 M | ~5 GB |
| `distil-medium.en` | 394 M | ~3 GB |
| `large-v1`, `large-v2`, `large-v3` | 1550 M | <8 GB |
| `large-v3-turbo` | 809 M | ~6 GB |
| `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5` | 756 M | ~5 GB |

- **`large-v2`** adalah bawaan, karena `large-v3` lebih sering berhalusinasi dan mengulang teks, terutama dalam beberapa bahasa seperti bahasa Jepang, dan lebih banyak melewatkan tanda baca.
- **`large-v3-turbo`** adalah versi ringkas dari `large-v3`, jauh lebih cepat dan hampir sama akuratnya.
- Model yang berakhiran **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) dan model **distilasi** (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) hanya mentranskripsi bahasa Inggris. Model ini lebih cepat daripada model multibahasa dengan ukuran yang sama.

:::tip
Untuk mencoba Audiotext dengan cepat, pilih `tiny` atau `small`. Untuk kualitas terbaik, gunakan `large-v2` atau `large-v3-turbo` di GPU.
:::

### Opsi lanjutan

Opsi ini ada di **Preferensi** → **WhisperX**. Ubah hanya jika Anda mengalami masalah atau tahu apa yang Anda lakukan: GPU yang kehabisan memori dapat membuat sistem Anda macet.

- **Jenis komputasi**: presisi angka model. `float16` lebih cepat di GPU (bawaan dengan CUDA). `int8` menggunakan lebih sedikit memori dan menjadi bawaan di CPU, karena banyak CPU tidak mendukung `float16` secara efisien. `float32` paling presisi, untuk GPU dengan VRAM lebih dari 8 GB.
- **Ukuran batch**: berapa banyak bagian audio yang diproses sekaligus (`8` secara bawaan). Tidak memengaruhi kualitas, hanya kecepatan. Turunkan jika memori habis; disarankan maksimal `16`.
- **Gunakan CPU**: menjalankan WhisperX di CPU. Selalu aktif jika tidak ditemukan GPU CUDA.

## Whisper API

Menggunakan [API ucapan-ke-teks OpenAI](https://platform.openai.com/docs/guides/speech-to-text). Ditujukan untuk komputer yang tidak dapat menjalankan WhisperX dengan lancar, dan memerlukan kunci API OpenAI (lihat [Kunci API](/id/reference/preferences/#kunci-api)).

| Model | Stempel waktu | Pembicara | Catatan |
| --- | :---: | :---: | --- |
| `whisper-1` (bawaan) | ✓ | ✗ | Dapat diputar per kalimat dan dibuatkan subtitle. Menerjemahkan ke bahasa Inggris. |
| `gpt-transcribe` | ✗ | ✗ | Lebih akurat, tetapi tanpa stempel waktu. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Mengidentifikasi pembicara. Tidak menggunakan kata kunci maupun deskripsi. |

Terjemahan ke bahasa Inggris selalu dibuat oleh `whisper-1`, karena hanya model itu yang menerjemahkan.

Audio yang panjang dibagi menjadi potongan hingga 10 menit, dipotong pada jeda hening agar tidak ada kata yang terpotong, karena API menolak file yang lebih besar dari 25 MB. Dengan `whisper-1`, akhir setiap potongan diberikan sebagai konteks ke potongan berikutnya; dengan `gpt-4o-transcribe-diarize`, sampel suara setiap pembicara dikirim bersama potongan berikutnya agar labelnya tetap sama.

### Opsi

- **Format respons** (kartu Keluaran, untuk folder): `text` (bawaan), `json`, `verbose_json`, `srt`, atau `vtt`. Subtitle dan `verbose_json` memerlukan model dengan stempel waktu.
- **Temperatur** (Preferensi → Whisper API): antara 0 dan 1. Nilai tinggi seperti 0,8 membuat hasil lebih acak, dan nilai rendah seperti 0,2 lebih terfokus. Dengan 0 (bawaan), model menaikkannya secara otomatis bila diperlukan.
- **Stempel waktu kata** (Preferensi → Whisper API): apakah `whisper-1` juga mengembalikan stempel waktu setiap kata, untuk menyorotnya saat diputar. Memerlukan waktu lebih lama. Aktif secara bawaan.

## Google API

Menggunakan [Google Speech-to-Text API](https://cloud.google.com/speech-to-text). API ini tidak memberi tanda baca (Audiotext yang menambahkannya), dan kualitasnya lebih rendah daripada Whisper, sehingga transkripsi sering kali perlu dikoreksi. API ini tidak dapat mendeteksi bahasa maupun menerjemahkan, dan mengembalikan teks biasa tanpa stempel waktu.

Tanpa kunci API, tingkat gratis digunakan, dibatasi 60 menit per bulan. Untuk memperluasnya, atur kunci Google API. Google mengenakan biaya atas penggunaannya, dan Audiotext tidak bertanggung jawab atas hal itu.
