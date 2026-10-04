---
title: Komut satırı
description: Audiotext komut satırıyla betiklerden dosyaları, klasörleri ve YouTube videolarını yazıya dökün.
sidebar:
  order: 3
---

Audiotext'i [kaynak koddan çalıştırdığınızda](/tr/help/contributing/#projeyi-hazırlayın), betiklerden yazıya dökmek için komut satırından da kullanabilirsiniz. Üç komutu vardır:

- `transcribe`: bir dosyayı, bir klasörün dosyalarını veya bir YouTube videosunu yazıya döker.
- `watch`: `Ctrl+C` ile durdurulana kadar bir klasöre eklenen dosyaları yazıya döker.
- `check-update`: yeni bir sürüm olup olmadığını denetler ve indirme bağlantısını yazdırır.

Verilmeyen seçenekler uygulamada ayarlanan değerleri alır. Transkripsiyonlar her zaman yazıya dökülen her dosyanın yanına veya `--output-dir` ile verilen klasöre kaydedilir (yazıya dökülen bir klasörün alt klasörleri burada yeniden oluşturulur).

## Örnekler

```bash
# Bir dosyayı yazıya dök. Metin ayrıca yazdırılır, böylece yönlendirilebilir
python src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Bir klasörün dosyalarını konuşmacıları belirleyerek yazıya dök
python src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Bir YouTube videosunu Whisper API ile yazıya dök
python src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Bir toplantıyı anahtar kelimeleri ve bağlamıyla Whisper API ile yazıya dök
python src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Bir sonraki sürüm hakkında bir toplantı"

# Bir klasöre eklenen dosyaları Ctrl+C ile durdurulana kadar yazıya dök
python src/cli.py watch inbox/ --output-types srt
```

## Seçenekler

| Seçenek | Açıklama |
| --- | --- |
| `-m`, `--method` | Transkripsiyon yöntemi: `whisperx`, `whisper-api` veya `google` |
| `-l`, `--language` | ISO 639-1 kodu olarak sesin dili (ör. `tr`) veya algılamak için `auto` (Google desteklemez) |
| `-o`, `--output-dir` | Transkripsiyonların kaydedildiği klasör (varsayılan: yazıya dökülen her dosyanın yanı) |
| `--overwrite` | Mevcut transkripsiyonların üzerine yaz |
| `-p`, `--prompt` | Kaydın konusu veya ortamı gibi neyle ilgili olduğu (Google desteklemez) |
| `-k`, `--keywords` | Kayıtta geçen adlar, terimler veya kısaltmalar, doğru yazılmaları için virgülle ayrılmış (Google desteklemez) |
| `--translate` | Sesi İngilizceye çevir (Google desteklemez) |
| `-q`, `--quiet` | Yalnızca hataları yazdır |
| `-v`, `--verbose` | Hataları ayıklamak için günlükleri yazdır |

**WhisperX seçenekleri**

| Seçenek | Açıklama |
| --- | --- |
| `-t`, `--output-types` | Virgülle ayrılmış çıktı dosyası türleri (ör. `txt,srt`) |
| `--diarize` | Konuşmacıları belirle |
| `--speakers` | Belirlerken konuşmacı sayısı (algılamak için `0`) |
| `--model-size` | Model, ör. `small` veya `large-v2` ([Motorlar](/tr/reference/engines/#model) bölümüne bakın) |
| `--compute-type` | `int8`, `float16` veya `float32` |
| `--batch-size` | Toplu iş boyutu |
| `--cpu` | İşlemcide çalıştır |

**Whisper API seçenekleri**

| Seçenek | Açıklama |
| --- | --- |
| `--openai-model` | Transkripsiyon modeli: `whisper-1`, `gpt-transcribe` veya `gpt-4o-transcribe-diarize` |

Tüm seçenekleri ve değerlerini görmek için `python src/cli.py transcribe --help` komutunu çalıştırın.

## Çıktı ve çıkış kodu

İlerleme standart hata akışına yazdırılır (`--quiet` ile gizleyin), tek bir dosyanın transkripsiyon metni ise standart çıktıya. Bir transkripsiyon başarısız olursa komut `1` koduyla sonlanır.

API anahtarları uygulamada ayarlananlar veya `OPENAI_API_KEY`, `GOOGLE_API_KEY` ve `HF_TOKEN` (konuşmacıları belirlemek için) ortam değişkenleridir.
