---
title: Preferensi
description: Semua pengaturan di jendela Preferensi, tab demi tab.
sidebar:
  order: 2
---

**Preferensi** berisi pengaturan yang tidak berubah di setiap transkripsi. Buka dengan roda gigi di kanan atas jendela. Perubahan disimpan secara otomatis.

## Umum

- **Tampilan**: **Sistem** (mengikuti sistem Anda), **Terang**, atau **Gelap**.
- **Bahasa antarmuka**: bahasa Audiotext, atau **Bahasa sistem**. Lihat [bahasa yang tersedia](/id/reference/formats-and-languages/#bahasa-antarmuka).
- **Format tanggal**: cara tanggal transkripsi ditampilkan, dalam bahasa antarmuka: pendek (`04/10/26`), sedang (`4 Okt 2026`, bawaan), panjang (`4 Oktober 2026`), atau ISO (`2026-10-04`). Menu menampilkan setiap format dengan contohnya.
- **Format waktu**: **Otomatis** (jam bahasa antarmuka), 12 jam (`1.30 PM`), atau 24 jam (`13.30`).
- **Notifikasi**: menampilkan notifikasi sistem saat transkripsi siap (untuk folder, saat semua filenya siap, dan untuk folder yang dipantau, setiap kali file baru siap). Aktif secara default. Di macOS, notifikasi berasal dari **Script Editor**, dan di Windows dari **Windows PowerShell**, sehingga diizinkan atau dibisukan untuk aplikasi tersebut di pengaturan sistem. Di Linux, notifikasi memerlukan `notify-send` (paket `libnotify-bin` atau `libnotify`).

## AI

Penyedia [ringkasan dan terjemahan](/id/guides/summary-and-translation/):

- **Ringkasan** → **Penyedia** dan **Model**.
- **Terjemahan** → **Penyedia** dan **Model**. DeepL dan Google Translate tidak memiliki model untuk dipilih.
- **Ollama** → **URL server**: alamat Ollama, `http://localhost:11434` secara bawaan.

Biarkan **Model** kosong untuk menggunakan model bawaan penyedia. Tombol di samping penyedia mengatur kunci API-nya.

## Kunci API

Kunci untuk setiap layanan. Klik **Atur…** untuk memasukkan kunci, atau **Ubah…** untuk menggantinya (biarkan kosong untuk menghapusnya). Kunci disimpan di penyimpanan kredensial sistem Anda.

| Kunci | Digunakan untuk |
| --- | --- |
| Kunci API OpenAI | Whisper API, serta meringkas dan menerjemahkan dengan OpenAI |
| Kunci API Anthropic | Meringkas dan menerjemahkan dengan Claude |
| Kunci API DeepSeek | Meringkas dan menerjemahkan dengan DeepSeek |
| Kunci API Gemini | Meringkas dan menerjemahkan dengan Gemini (dari Google AI Studio) |
| Kunci API Mistral | Meringkas dan menerjemahkan dengan Mistral |
| Kunci API xAI | Meringkas dan menerjemahkan dengan Grok |
| Kunci API DeepL | Menerjemahkan dengan DeepL (kunci paket gratis juga berfungsi) |
| Kunci Google API | Google Speech-to-Text di luar tingkat gratis, dan Google Translate (Cloud Translation API) |
| Token Hugging Face | Mengidentifikasi pembicara dengan WhisperX |

:::caution
Setiap penyedia mengenakan biaya atas penggunaan API-nya, dan Audiotext tidak bertanggung jawab atas hal itu. Jika OpenAI mengembalikan kesalahan `429` dengan kunci baru, lihat [Pemecahan masalah](/id/help/troubleshooting/#whisper-api-mengembalikan-kesalahan-429).
:::

## WhisperX

**Jenis komputasi**, **Ukuran batch**, dan **Gunakan CPU**. Lihat [opsi lanjutan WhisperX](/id/reference/engines/#opsi-lanjutan).

## Subtitle

Opsi file `.srt` dan `.vtt` yang disimpan saat mentranskripsi folder dengan WhisperX:

- **Sorot kata**: menggarisbawahi setiap kata saat diucapkan. Nonaktif secara bawaan.
- **Maks. jumlah baris**: jumlah baris maksimum setiap subtitle. `2` secara bawaan.
- **Maks. lebar baris**: jumlah karakter maksimum satu baris sebelum dipotong. `42` secara bawaan.

## Whisper API

**Temperatur** dan **Stempel waktu kata**. Lihat [opsi Whisper API](/id/reference/engines/#opsi).

## Tentang

Versi Audiotext dan tautan ke dokumentasi ini, kode sumber di GitHub, dan halaman donasi.
