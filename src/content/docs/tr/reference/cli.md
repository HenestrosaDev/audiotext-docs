---
title: Komut satırı
description: Audiotext komut satırıyla betiklerden dosyaları, klasörleri ve YouTube videolarını yazıya dökün, özetleyin ve çevirin.
sidebar:
  order: 3
---

Audiotext'i komut satırından da kullanabilirsiniz, ör. betiklerden yazıya dökmek için. Üç komutu vardır:

- `transcribe`: bir dosyayı, bir klasörün dosyalarını veya bir YouTube videosunu yazıya döker.
- `watch`: `Ctrl+C` ile durdurulana kadar bir klasöre eklenen dosyaları yazıya döker.
- `check-update`: yeni bir sürüm olup olmadığını denetler ve indirme bağlantısını yazdırır.

Verilmeyen seçenekler uygulamada ayarlanan değerleri alır. Transkripsiyonlar her zaman yazıya dökülen her dosyanın yanına veya `--output-dir` ile verilen klasöre kaydedilir (yazıya dökülen bir klasörün alt klasörleri burada yeniden oluşturulur).

## Çalıştırın

Kurulu uygulama, komutlarından birini aldığında komut satırını çalıştırır:

| Sistem | Komut |
| --- | --- |
| Linux | `audiotext` (`install.sh` tarafından `~/.local/bin` içine kurulur) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | Audiotext'in kurulu olduğu klasördeki `audiotext-cli.exe` (varsayılan olarak `%LOCALAPPDATA%\Programs\Audiotext`) |

Onu [kaynak koddan çalıştırdığınızda](/tr/help/contributing/#projeyi-hazırlayın) bunun yerine `uv run src/cli.py` komutunu kullanın.

## Örnekler

```bash
# Bir dosyayı yazıya dök. Metin ayrıca yazdırılır, böylece yönlendirilebilir
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Bir klasörün dosyalarını konuşmacıları belirleyerek yazıya dök
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Bir YouTube videosunu Whisper API ile yazıya dök
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Bir toplantıyı anahtar kelimeleri ve bağlamıyla Whisper API ile yazıya dök
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Bir sonraki sürüm hakkında bir toplantı"

# Altyazıları ve bir Word belgesini kaydet, özetle ve İspanyolcaya çevir
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Bir klasöre eklenen dosyaları Ctrl+C ile durdurulana kadar yazıya dök
audiotext watch inbox/ --output-types srt
```

## Seçenekler

| Seçenek | Açıklama |
| --- | --- |
| `-m`, `--method` | Transkripsiyon yöntemi: `whisperx`, `whisper-api` veya `google` |
| `-l`, `--language` | ISO 639-1 kodu olarak sesin dili (ör. `tr`) veya algılamak için `auto` (Google desteklemez) |
| `-t`, `--output-types` | `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` ve `ass` arasından virgülle ayrılmış çıktı dosyası türleri (ör. `txt,srt,md`) |
| `-o`, `--output-dir` | Transkripsiyonların kaydedildiği klasör (varsayılan: yazıya dökülen her dosyanın yanı) |
| `--overwrite` | Mevcut transkripsiyonların üzerine yaz |
| `-p`, `--prompt` | Kaydın konusu veya ortamı gibi neyle ilgili olduğu (Google desteklemez) |
| `-k`, `--keywords` | Kayıtta geçen adlar, terimler veya kısaltmalar, doğru yazılmaları için virgülle ayrılmış (Google desteklemez) |
| `--translate` | Sesi yazıya dökerken İngilizceye çevir (Google desteklemez). Diğer diller için `--translate-to` seçeneğine bakın |
| `-q`, `--quiet` | Yalnızca hataları yazdır |
| `-v`, `--verbose` | Hataları ayıklamak için günlükleri yazdır |
| `--version` | Audiotext sürümünü yazdır |

Transkripsiyon yönteminin kendisinin kaydetmediği çıktı türleri (ör. `md` veya `docx`), uygulamadaki gibi sonucundan dışa aktarılır. `aud` yalnızca WhisperX tarafından kaydedilir.

**Özet ve çeviri seçenekleri**

| Seçenek | Açıklama |
| --- | --- |
| `--summarize` | Her transkripsiyonu ana noktaları ve bölümleriyle bir `.summary.md` dosyasında özetle |
| `--summary-provider` | Özetleyen dil modelinin sağlayıcısı: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` veya `ollama` |
| `--summary-model` | Özetleyen dil modeli |
| `--translate-to` | Her transkripsiyonu bir dile (ISO 639-1 kodu) çevir; çeviri çıktı dosyası türlerinde kaydedilir (ör. `talk.es.srt`) |
| `--translation-provider` | Çevirilerin sağlayıcısı: `--summary-provider` için olanlar, `deepl` veya `google` |
| `--translation-model` | Çeviren dil modeli, dil modeli sağlayıcıları için |

Verilmezlerse uygulamada ayarlanan sağlayıcılar ve modeller kullanılır. [Sağlayıcılar](/tr/guides/summary-and-translation/#sağlayıcılar) bölümüne bakın.

**WhisperX seçenekleri**

| Seçenek | Açıklama |
| --- | --- |
| `--diarize` | Konuşmacıları belirle |
| `--speakers` | Belirlerken konuşmacı sayısı (algılamak için `0`) |
| `--model-size` | Model, ör. `small` veya `large-v2` ([Motorlar](/tr/reference/engines/#model) bölümüne bakın) |
| `--compute-type` | `int8`, `float16` veya `float32` |
| `--batch-size` | Toplu iş boyutu |
| `--cpu` | NVIDIA ekran kartı veya Mac'in grafik işlemcisi yerine işlemcide çalıştır |

**Whisper API seçenekleri**

| Seçenek | Açıklama |
| --- | --- |
| `--openai-model` | Transkripsiyon modeli: `whisper-1`, `gpt-transcribe` veya `gpt-4o-transcribe-diarize` |

Tüm seçenekleri ve değerlerini görmek için `audiotext transcribe --help` komutunu çalıştırın.

## Çıktı ve çıkış kodu

İlerleme standart hata akışına yazdırılır (`--quiet` ile gizleyin), tek bir dosyanın transkripsiyon metni ise standart çıktıya. Bir transkripsiyon, özet veya çeviri başarısız olursa komut `1` koduyla, `Ctrl+C` ile durdurulursa `130` koduyla sonlanır.

`--summarize` veya `--translate-to` sağlayıcısının API anahtarı ayarlı değilse komut yazıya dökmeden önce durur. Başarısız olan bir özet veya çeviri, transkripsiyon kaybolmadan bildirilir; transkripsiyon yine de kaydedilir.

API anahtarları uygulamada ayarlananlar veya [ortam değişkenleri](/tr/reference/files-and-data/#ortam-değişkenleri), ör. `OPENAI_API_KEY`, `GOOGLE_API_KEY` ve `HF_TOKEN` (konuşmacıları belirlemek için).
