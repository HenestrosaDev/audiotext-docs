---
title: Ringkasan dan terjemahan
description: Ringkas dan terjemahkan transkripsi dengan OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL, atau Google Translate.
sidebar:
  order: 4
---

Setelah transkripsi siap, Audiotext dapat meringkas dan menerjemahkannya dengan model bahasa atau layanan terjemahan. Keduanya disimpan di riwayat, jadi hanya dibuat sekali.

## Ringkasan

Buka mode **Ringkasan** pada transkripsi dan klik **Buat ringkasan**. Model bahasa akan menulis:

- **Ringkasan** transkripsi.
- **Poin penting**-nya.
- **Bab**-nya, jika memiliki stempel waktu. Klik bab untuk memutar audio dari awal bab tersebut.

**Buat ulang** menulisnya kembali (mis. setelah memilih model lain). **Salin** menyalinnya, dan [ekspor](/id/guides/transcript/#salin-dan-ekspor) Markdown dan Word menyertakannya.

Jika kunci API penyedia belum diatur, mode **Ringkasan** menawarkan untuk mengaturnya. Transkripsi yang sangat panjang (sekitar tiga jam ucapan atau lebih) hanya diringkas dari bagian awalnya.

![Ringkasan sebuah transkripsi, dengan poin-poin utama dan babnya](/screenshots/summary.png)

## Terjemahan

Klik **Terjemahkan**, pilih bahasa di **Terjemahkan ke** dan **Penyedia**, lalu konfirmasi. Terjemahan ditampilkan di panel di sebelah kanan teks asli.

- Jika transkripsi memiliki stempel waktu, setiap kalimat diterjemahkan tersendiri, sehingga terjemahan mempertahankannya: kalimat yang diputar disorot, dan mengklik kalimat akan memutarnya.
- Jika Anda telah mengedit teks biasa, yang diterjemahkan adalah teks yang sudah diedit, tanpa stempel waktu.
- Seret pegangan di antara kedua teks untuk mengubah ukurannya, atau klik dua kali untuk mengembalikan ukurannya.
- Tombol **Terjemahkan** juga memungkinkan Anda **Sembunyikan terjemahan**, **Terjemahkan ke bahasa lain…**, atau **Hapus terjemahan**.

:::tip
Untuk mendapatkan transkripsi langsung dalam bahasa lain tanpa penyedia, Anda juga dapat menerjemahkan saat mentranskripsi. Lihat [Bahasa](/id/guides/transcription-settings/#bahasa).
:::

## Penyedia

Penyedia dipilih di **Preferensi** → **AI**, terpisah untuk ringkasan dan terjemahan.

| Penyedia | Model bawaan | Kunci API |
| --- | --- | --- |
| OpenAI (bawaan) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (lokal) | `llama3.2` | Tidak diperlukan |

Biarkan **Model** kosong untuk menggunakan model bawaan penyedia, atau ketik nama model lain dari penyedia tersebut (mis. `claude-sonnet-5-5` atau `deepseek-reasoner`).

Terjemahan juga dapat dibuat oleh:

- **DeepL**, yang memerlukan [kunci API DeepL](https://www.deepl.com/your-account/keys). Kunci paket gratis juga berfungsi.
- **Google Translate**, yang menggunakan kunci Google API dengan Cloud Translation API diaktifkan.

### Ollama

[Ollama](https://ollama.com) menjalankan model di komputer Anda, tanpa kunci API dan tanpa mengirim teks ke mana pun. Instal, unduh model (mis. `ollama pull llama3.2`), lalu pilih **Ollama** sebagai penyedia. Jika tidak berjalan di alamat bawaan, ubah **URL server** di **Preferensi** → **AI** (`http://localhost:11434` secara bawaan).

:::note
Setiap penyedia mengenakan biaya atas penggunaan API-nya, dan Audiotext tidak bertanggung jawab atas hal itu. Kunci API disimpan di penyimpanan kredensial sistem Anda. Lihat [File dan data](/id/reference/files-and-data/).
:::
