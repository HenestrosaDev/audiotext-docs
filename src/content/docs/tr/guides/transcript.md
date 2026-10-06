---
title: Döküm
description: Bir transkripsiyonu oynatın, içinde arayın, düzeltin, kopyalayın ve dışa aktarın; videoları altyazılarıyla izleyin.
sidebar:
  order: 3
---

Açmak için [geçmişte](/tr/guides/history/) bir transkripsiyon seçin. Araç çubuğu üç mod arasında geçiş yapar: **Döküm**, **Düz metin** ve **Özet**; ayrıca **Çevir**, **Kopyala** ve **Dışa aktar** düğmelerini içerir.

## Döküm modu

Transkripsiyonun her segmentini (bir cümle veya uzun bir cümlenin bir kısmı) başlangıç ve bitiş zamanıyla ve konuşmacılar belirlendiyse konuşmacısıyla gösterir.

Varsayılan olarak zamanlar sade gösterilir (`01:05 – 01:09`). Bunları altyazılardaki gibi milisaniye hassasiyetinde görmek için (`00:01:05,900 – 00:01:09,350`) `⋯` menüsünde **Hassas zaman damgaları (00:00:01,000)** seçeneğini işaretleyin.

Zaman damgaları yalnızca **WhisperX** ile ve **Whisper API**'nin `whisper-1` ve `gpt-4o-transcribe-diarize` modelleriyle kullanılabilir. Bunlar olmadan döküm segment segment oynatılamaz; bunun yerine **Düz metin** modunu kullanın.

### Sesi oynatın

- Sesi oradan oynatmak için **bir segmente tıklayın**. Oynatılan segment vurgulanır ve metin oynatmayı takip eder. Kelime düzeyinde zamanlamayla her kelime de vurgulanır.
- Oynatıcı çubuğuyla oynatabilir, duraklatabilir, herhangi bir noktaya gidebilir ve sesin tonunu koruyarak **hızı** `0.5×` ile `2×` arasında değiştirebilirsiniz.
- Klavye kısayolları: `Boşluk` oynatır veya duraklatır, `←`/`→` 5 saniye geri veya ileri gider.

Kaynak dosya taşındıysa veya silindiyse ses kullanılamaz, ancak metin kalır. Mikrofon kayıtlarını Audiotext saklar, bu yüzden her zaman oynatılabilirler.

![Geçerli segmenti vurgulanmış, oynatılan bir transkripsiyon](/screenshots/transcript.png)

### Videoları altyazılarıyla izleyin

Videoların transkripsiyonları videoyu metnin üstünde gösterir. Videonun menüsünden **Altyazıları videoda göster** seçeneğini açabilir ve altyazıların **Boyut**unu (küçük, orta veya büyük), **Konum**unu (alt veya üst) ve **Stil**ini (koyu arka plan veya kontur) seçebilirsiniz. Transkripsiyonun bir [çevirisi](/tr/guides/summary-and-translation/#çeviri) varsa, menü altyazıların **Transkripsiyon**u mu yoksa **Çeviri**yi mi göstereceğini de seçer.

### Arama

`Ctrl+F` (macOS'ta `⌘F`) tuşlarına basın ve yazın. `Enter` ve `Shift+Enter` sonraki ve önceki eşleşmeye gider, `Esc` aramayı temizler.

## Transkripsiyonu düzeltin

Zaman damgalarını (altyazıların ve oynatmanın kullandığı) koruyarak transkripsiyonu düzeltmek için `⋯` menüsündeki seçenekleri kullanın veya bir segmente sağ tıklayın:

- **Bul ve değiştir…**: transkripsiyonun tamamında bir kelimeyi veya ifadeyi değiştirir, ör. yanlış yazılmış bir adı. Değiştirmeden önce metnin kaç kez geçtiğini gösterir ve **Büyük/küçük harf eşleştir** seçeneği vardır.
- **Konuşmacıları yeniden adlandır…**: her konuşmacıya bir ad verir (`SPEAKER_00` → `Ayşe`). İki konuşmacıya aynı adı vermek onları birleştirir.
- **Metni düzenle…**: metnini değiştirmek için bir segmente sağ tıklayın.
- **Buradan oynat**: oynatmak için bir segmente sağ tıklayın.

Değişmeyen kelimeler zamanlamalarını korur, bu yüzden oynatma sırasında vurgulanmaya devam ederler.

## Düz metin

**Düz metin** modu, metni bir metin düzenleyicideki gibi serbestçe düzenlemenizi sağlar. Değişiklikler otomatik olarak kaydedilir. Döküm, orijinal metni zaman damgalarıyla korur, bu yüzden altyazılar düz metindeki düzenlemeleri kullanmaz.

## Kopyalayın ve dışa aktarın

**Kopyala**, geçerli modun metnini (döküm, özet veya çeviri) kopyalar.

**Dışa aktar** (veya `Ctrl+S`, macOS'ta `⌘S`) transkripsiyonu şu biçimlerde kaydeder:

| Biçim | İçerik |
| --- | --- |
| Düz metin (`.txt`) | Metin |
| Markdown (`.md`) | Varsa özet ve her birinin zaman damgası ve konuşmacısıyla paragraflar halinde metin |
| Word belgesi (`.docx`) | Markdown ile aynı, düzenlemeye veya yazdırmaya hazır |
| Altyazılar (`.srt`) | Video oynatıcılar için altyazılar |
| Web altyazıları (`.vtt`) | Web için altyazılar |
| Tablo (`.tsv`) | Segment başına bir satır; başlangıç ve bitiş (milisaniye cinsinden) ve metin |
| JSON (`.json`) | Metin, zaman damgaları, kelimeler ve konuşmacılarla segmentler ve varsa özet |

Altyazılar ve tablo zaman damgası gerektirir.

Transkripsiyonun bir çevirisi varsa, çeviriyi aynı biçimlerde dışa aktarmak için aynı menüde **Çeviri**yi seçin (veya çevirinin dışa aktarma düğmesine tıklayın). Dosyanın adı dilini içerir (ör. `video.es.srt`), böylece video oynatıcılar onu videoyla birlikte yükler.

## Yeniden adlandırma, etiketler ve notlar

Transkripsiyonun başlığı adını, kaynağını, tarihini ve etiketini gösterir. Yeniden adlandırmak için ada çift tıklayın, değiştirmek için etikete tıklayın veya not yazmak için **Not ekle**'ye tıklayın. Notu düzenlemek için nota veya kalemine, silmek için çöp kutusuna tıklayın. Daha fazla seçenek [geçmişte](/tr/guides/history/) bulunur.
