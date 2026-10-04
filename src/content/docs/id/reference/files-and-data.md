---
title: File dan data
description: Tempat Audiotext menyimpan pengaturan, riwayat, rekaman, dan kunci API, serta variabel lingkungan yang dibacanya.
sidebar:
  order: 5
---

Audiotext menyimpan data Anda di komputer Anda. Tidak ada yang dikirim ke mana pun kecuali Anda menggunakan mesin jarak jauh (Whisper API atau Google API) atau penyedia AI selain Ollama.

## Folder konfigurasi pengguna

Pengaturan, riwayat, dan rekaman disimpan di folder konfigurasi pengguna Anda, sehingga tetap ada setelah pembaruan:

| Sistem | Folder |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (atau `$XDG_CONFIG_HOME/audiotext`) |

Isinya:

- `config.ini`: pengaturan Anda. Hapus untuk mengembalikan nilai bawaan.
- `history.json`: transkripsi Anda, beserta ringkasan, terjemahan, dan koreksinya.
- `media/`: rekaman mikrofon dan audio yang diunduh dari URL, agar dapat diputar nanti. Semuanya dihapus saat transkripsinya dihapus dari riwayat.

Untuk menggunakan folder lain, mis. untuk instalasi portabel, atur variabel lingkungan `AUDIOTEXT_CONFIG_DIR`.

:::note
File `config.ini` di folder aplikasi berisi pengaturan bawaan dan tidak pernah diubah.
:::

## Kunci API

Kunci API dan token Hugging Face disimpan di penyimpanan kredensial sistem Anda:

- **macOS**: Keychain.
- **Windows**: Credential Manager.
- **Linux**: Secret Service (mis. GNOME Keyring atau KWallet).

Jika sistem tidak memilikinya (mis. server tanpa desktop), kunci disimpan di file `.env` di folder konfigurasi, yang hanya dapat dibaca oleh pengguna Anda. Kunci yang disimpan versi sebelumnya di file tersebut dipindahkan ke penyimpanan kredensial saat aplikasi pertama kali dibuka.

Kunci **hanya** digunakan untuk mengirim permintaan ke API setiap layanan.

## Variabel lingkungan

Variabel lingkungan dengan nama kunci tersebut lebih diutamakan daripada yang diatur di aplikasi:

| Variabel | Layanan |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (Whisper API, ringkasan, terjemahan) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text dan Google Translate |
| `HF_TOKEN` | Hugging Face (identifikasi pembicara) |
| `AUDIOTEXT_CONFIG_DIR` | Folder pengaturan dan riwayat |

## Model

Model WhisperX dan model identifikasi pembicara diunduh saat pertama kali digunakan dan disimpan dalam cache oleh Hugging Face di `~/.cache/huggingface` (atau `%USERPROFILE%\.cache\huggingface` di Windows). Hapus folder tersebut untuk mengosongkan ruang yang digunakannya.
