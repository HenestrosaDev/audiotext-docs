---
title: Preferensi
description: Semua pengaturan di jendela Preferensi, tab demi tab.
sidebar:
  order: 2
---

**Preferensi** berisi pengaturan yang tidak berubah di setiap transkripsi. Buka dengan roda gigi di kanan atas jendela. Perubahan disimpan secara otomatis.

## Umum

- **Tampilan**: **Sistem** (mengikuti sistem Anda), **Terang**, atau **Gelap**.
- **Ukuran antarmuka**: ukuran teks dan kontrol, dari 80% hingga 200%. Bawaannya `100%`. Perubahan langsung diterapkan.
- **Bahasa antarmuka**: bahasa Audiotext, atau **Bahasa sistem**. Lihat [bahasa yang tersedia](/id/reference/formats-and-languages/#bahasa-antarmuka).
- **Format tanggal**: cara tanggal transkripsi ditampilkan, dalam bahasa antarmuka: pendek (`04/10/26`), sedang (`4 Okt 2026`, bawaan), panjang (`4 Oktober 2026`), atau ISO (`2026-10-04`). Menu menampilkan setiap format dengan contohnya.
- **Format waktu**: **Otomatis** (jam bahasa antarmuka), 12 jam (`1.30 PM`), atau 24 jam (`13.30`).
- **Notifikasi**: menampilkan notifikasi sistem saat transkripsi siap (untuk folder, saat semua filenya siap, dan untuk folder yang dipantau, setiap kali file baru siap, dalam satu notifikasi). Aktif secara default. Di macOS, notifikasi berasal dari **Script Editor**, dan di Windows dari **Windows PowerShell**, sehingga diizinkan atau dibisukan untuk aplikasi tersebut di pengaturan sistem. Di Linux, notifikasi memerlukan `notify-send` (paket `libnotify-bin` atau `libnotify`).
- **Periksa pembaruan secara otomatis**: memeriksa versi baru saat aplikasi dibuka dan, jika ada, menampilkan tombol **Versi … tersedia** di bilah atas yang membuka halaman unduhannya. Versi pra-rilis tidak ditawarkan. Aktif secara default.

## Penyedia

Penyedia [ringkasan, pertanyaan, dan terjemahan](/id/guides/summary-and-translation/):

- **Ringkasan** → **Penyedia** dan **Model**.
- **Tanya** → **Penyedia** dan **Model**: yang menjawab pertanyaan tentang transkripsi. Sampai Anda mengubahnya, keduanya sama dengan milik ringkasan.
- **Terjemahan** → **Penyedia** dan **Model**. DeepL dan Google Translate tidak memiliki model untuk dipilih.
- **Ollama** → **URL server**: alamat Ollama, `http://localhost:11434` secara bawaan.

Biarkan **Model** kosong untuk menggunakan model bawaan penyedia. Tombol di samping penyedia mengatur kunci API-nya.

## Kunci API

Kunci untuk setiap layanan. Klik **Atur kunci API…** untuk memasukkan kunci, atau **Ubah kunci API…** untuk menggantinya (biarkan kosong untuk menghapusnya). Kunci disimpan di penyimpanan kredensial sistem Anda. Kunci-kunci ini dikelompokkan menurut kegunaannya, dan yang sudah diatur menampilkan tanda centang.

| Grup | Kunci | Digunakan untuk |
| --- | --- | --- |
| **Penyedia LLM** | Kunci API OpenAI | Whisper API, serta meringkas, bertanya, dan menerjemahkan dengan OpenAI |
| | Kunci API Anthropic | Meringkas, bertanya, dan menerjemahkan dengan Claude |
| | Kunci API DeepSeek | Meringkas, bertanya, dan menerjemahkan dengan DeepSeek |
| | Kunci API Gemini | Meringkas, bertanya, dan menerjemahkan dengan Gemini (dari Google AI Studio) |
| | Kunci API Mistral | Meringkas, bertanya, dan menerjemahkan dengan Mistral |
| | Kunci API xAI | Meringkas, bertanya, dan menerjemahkan dengan Grok |
| **Terjemahan** | Kunci API DeepL | Menerjemahkan dengan DeepL (kunci paket gratis juga berfungsi) |
| | Kunci Google API | Google Speech-to-Text di luar tingkat gratis, dan Google Translate (Cloud Translation API) |
| **Transkripsi** | Token Hugging Face | Mengidentifikasi pembicara dengan WhisperX |

:::caution
Setiap penyedia mengenakan biaya atas penggunaan API-nya, dan Audiotext tidak bertanggung jawab atas hal itu. Jika OpenAI mengembalikan kesalahan `429` dengan kunci baru, lihat [Pemecahan masalah](/id/help/troubleshooting/#whisper-api-mengembalikan-kesalahan-429).
:::

## Transkripsi

Opsi mesin-mesinnya, masing-masing dalam satu bagian.

### WhisperX

**Jenis komputasi**, **Ukuran batch**, dan **Gunakan CPU**. Lihat [opsi lanjutan WhisperX](/id/reference/engines/#opsi-lanjutan). Di Mac dengan Apple Silicon, WhisperX mentranskripsi di GPU-nya kecuali **Gunakan CPU** aktif. Lihat [Di Mac](/id/reference/engines/#di-mac). Di GPU Mac, petunjuk **Jenis komputasi** dan **Ukuran batch** menyebutkan bahwa opsi itu tidak berlaku, dan **Gunakan CPU** menautkan ke **Model yang didukung**.

### Whisper API

**Temperatur** dan **Stempel waktu kata**. Lihat [opsi Whisper API](/id/reference/engines/#opsi).

## Subtitle

Cara subtitle dibagi: yang ditampilkan di atas video dan di mode **Subtitle**, file subtitle yang diekspor, dan [video dengan subtitle](/id/guides/transcript/#ekspor-video-beserta-subtitlenya). Setiap opsi memiliki nilai untuk video horizontal dan nilai lain untuk video vertikal (lebih tinggi daripada lebarnya, mis. untuk ponsel), yang lebih sempit:

| Opsi | Horizontal | Vertikal |
| --- | :---: | :---: |
| **Maks. baris per subtitel** | `2` | `2` |
| **Maks. karakter per baris** | `42` | `24` |
| **Mandarin, Jepang, dan Korea**: karakter per baris dalam bahasa-bahasa ini, yang karakternya sekitar dua kali lebih lebar daripada karakter Latin | `16` | `10` |

Baris-baris dalam satu subtitle diseimbangkan, dan bahasa yang ditulis tanpa spasi dipotong di antara karakter.

**Sorot kata** menggarisbawahi setiap kata saat diucapkan di file `.srt` dan `.vtt`. Nonaktif secara bawaan.

## Tentang

Versi Audiotext dan tautan ke dokumentasi ini, kode sumber di GitHub, dan halaman donasi. **Periksa pembaruan** langsung memeriksa versi baru: jika ada, tombolnya berubah menjadi **Unduh** dan membuka halamannya.
