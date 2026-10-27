---
title: Döküm
description: Bir transkripsiyonu oynatın, içinde arayın, düzeltin, inceleyin, kopyalayın ve dışa aktarın; videoları altyazılarıyla izleyin veya dışa aktarın.
sidebar:
  order: 3
---

Açmak için [geçmişte](/tr/guides/history/) bir transkripsiyon seçin. Araç çubuğu dört mod arasında geçiş yapar: **Altyazılar**, **Düz metin**, **Özet** ve **Sor**; ayrıca **Çevir** düğmesini ve `⋯` menüsünü içerir.

Transkripsiyon, dilinin adını taşıyan bir kartta gösterilir. Kartın başlığındaki düğmeler içinde bulup değiştirir, onu kopyalar, dışa aktarır ve **Yeniden yazıya dök** seçeneğini sunar (metindeki düzeltmeler kaybolacağı için önce sorar).

## Altyazılar

Transkripsiyonu videonun altyazılarına bölünmüş olarak, her birinin başlangıç ve bitiş zamanıyla ve konuşmacılar belirlendiyse konuşmacısıyla gösterir. Uzunlukları [altyazı tercihlerine](/tr/reference/preferences/#altyazılar) göre belirlenir.

Varsayılan olarak zamanlar altyazılardaki gibi milisaniye hassasiyetinde gösterilir (`00:01:05,900 – 00:01:09,350`). Sadeleştirmek için (`01:05 – 01:09`) `⋯` menüsünde **Hassas zaman damgaları (HH:MM:SS,mmm)** işaretini kaldırın.

Altyazıların üstündeki bir satır onları ve konuşmacılar belirlendiyse konuşmacıları sayar (ör. `Altyazılar: 120 · Konuşmacı: 3`). Birkaç altyazıya bölünmüş uzun bir segment, birkaç altyazı sayılır.

Zaman damgaları yalnızca **WhisperX** ile ve **Whisper API**'nin `whisper-1` ve `gpt-4o-transcribe-diarize` modelleriyle kullanılabilir. Bunlar olmadan döküm altyazı altyazı oynatılamaz; bunun yerine **Düz metin** modunu kullanın.

### Sesi oynatın

- Sesi oradan oynatmak için **bir altyazıya tıklayın**. Oynatılan altyazı vurgulanır ve metnin ortasında tutulur. Kelime düzeyinde zamanlamayla her kelime de vurgulanır.
- Oynatıcı çubuğuyla oynatabilir, duraklatabilir, herhangi bir noktaya gidebilir ve sesin tonunu koruyarak **hızı** `0.5×` ile `2×` arasında değiştirebilirsiniz.
- Klavye kısayolları: `Boşluk` oynatır veya duraklatır, `←`/`→` 5 saniye geri veya ileri gider.

Kaynak dosya taşındıysa veya silindiyse ses kullanılamaz, ancak metin kalır. Mikrofon kayıtlarını Audiotext saklar, bu yüzden her zaman oynatılabilirler.

![Geçerli segmenti vurgulanmış, oynatılan bir transkripsiyon](/screenshots/transcript.png)

### Videoları altyazılarıyla izleyin

Videoların transkripsiyonları videoyu metnin üstünde gösterir. Videonun menüsünden **Altyazıları videoda göster** seçeneğini açabilir ve altyazıların **Boyut**unu (küçük, orta veya büyük), **Konum**unu (alt veya üst) ve **Stil**ini (koyu arka plan veya kontur) seçebilirsiniz. Transkripsiyonun [çevirileri](/tr/guides/summary-and-translation/#çeviri) varsa, menü altyazıların **Transkripsiyon**u mu yoksa bir dildeki **Çeviri**yi mi göstereceğini de seçer. Oynatıcı çubuğundaki **Altyazılar** düğmesi de onları gösterir veya gizler; yanındaki ok aynı menüyü açar.

## Bul ve değiştir

Üzerinde çalıştığınız metinde (transkripsiyonda veya çevirisinde) bulma ve değiştirme penceresini açmak için `Ctrl+F` (macOS'ta `⌘F`) tuşlarına basın veya başlıktaki büyütece tıklayın. Siz yazarken metni bulur (zaman damgaları ve konuşmacılarda arama yapılmaz) ve kaç eşleşme olduğunu gösterir.

- `Enter` ve `Shift+Enter` veya oklar sonraki ve önceki eşleşmeye gider.
- **Değiştir** geçerli eşleşmeyi, **Tümünü değiştir** hepsini değiştirir, ör. yanlış yazılmış bir adı. Yalnızca aynı büyük harflere sahip metni bulmak için **Büyük/küçük harf eşleştir**'i işaretleyin.
- Pencere kalıcı (modal) değildir, bu yüzden açıkken metni okuyup oynatabilirsiniz. **Üstte tut** onu ana pencerenin üstünde tutar.
- `Esc` pencereyi kapatır.

**Düz metin** modunda pencere yalnızca bulur (**Transkripsiyonda bul**), çünkü oradaki bir eşleşme bir altyazıya bağlanamaz. Değiştirmek için **Altyazılar** moduna geri dönün.

## Transkripsiyonu düzeltin

Zaman damgalarını (altyazıların ve oynatmanın kullandığı) koruyarak transkripsiyonu düzeltmek için [Bul ve değiştir](#bul-ve-değiştir) penceresini kullanın veya bir altyazıya sağ tıklayın:

- **Buradan oynat**: onu oynatır.
- **Kopyala**: metnini kopyalar.
- **Metni düzenle…**: metnini değiştirir.
- **Zamanlamayı düzenle…**: başlangıç ve bitişini milisaniye hassasiyetinde değiştirir. Zamanları `00:01:05,900`, `01:05,9` veya `65.9` biçiminde yazın.
- **Sonrasına altyazı ekle…**: eksik bir altyazı ekler; bu altyazı varsayılan olarak bir sonrakine kadarki boşluğu doldurur. Konuşmacılar belirlendiyse kimin söylediğini seçin (varsayılan olarak önceki altyazının konuşmacısı) veya yeni bir konuşmacı yazın. Altyazı, metnini yazdığınızda eklenir.
- **Konuşmacıyı değiştir…**: konuşmacılar belirlendiyse onu kimin söylediğini veya yeni bir konuşmacıyı seçer. **Konuşmacıları yeniden adlandır…** seçeneğinin aksine yalnızca bu altyazıyı değiştirir.
- **Konuşmacıları yeniden adlandır…**: her konuşmacıya bir ad verir (`SPEAKER_00` → `Ayşe`). İki konuşmacıya aynı adı vermek onları birleştirir. `⋯` menüsünde de bulunur.
- **Altyazıyı sil**: onu siler. Metni varsa önce onay ister.

Değişmeyen kelimeler zamanlamalarını korur, bu yüzden oynatma sırasında vurgulanmaya devam ederler. Zamanlamasını değiştirdiğiniz veya eklediğiniz bir altyazının kelime zamanlamaları yoktur; bu yüzden kelimeleri vurgulanmaz ve düşük güvenli olarak altı çizilmez.

## Düşük güvenilirlikli kelimeleri inceleyin

Motorun en az emin olduğu kelimelerin altı çizilir, böylece önce nereyi kontrol edeceğinizi bilirsiniz. WhisperX her kelimeyi zamanlamasını belirlerken puanlar (**Kelime düzeyinde zamanlama**, varsayılan olarak açık); Whisper API'nin `whisper-1` modeli ise her segmenti puanlar, bu yüzden segmentlerinin tamamının altı çizilir.

Metnin üstündeki bir çubuk incelenecek kaç kelime kaldığını gösterir (ör. `İncelenecek 12 kelimeden 3 kaldı`):

- Çubuğun okları veya `Ctrl+J` ve `Shift+Ctrl+J` (macOS'ta `⌘J` ve `⇧⌘J`) sonraki ve önceki kelimeye gider ve oynatıcıyı oraya taşır. **Otomatik oynat** ile her kelime çevresinden bir parçayla birlikte oynatılır.
- `Enter` gittiğiniz kelimeyi olduğu gibi kabul eder ve sonrakine geçer. **Kalanları kabul et** kalan tüm kelimeleri kabul eder, **Geri al** son incelemeyi geri alır.
- Bir kelimeyi yerinde düzeltmek için ona tıklayın: doğru metni yazın ve `Enter`'a basın (veya değiştirmeden **Kabul et**'e tıklayın). **Yeniden oynat** (`Ctrl+R`, macOS'ta `⌘R`) onu tekrar oynatır, `Esc` kapatır.
- **Yalnızca işaretliler** yalnızca incelenecek kelime içeren altyazıları gösterir.
- Kelimeler sesin konumunun altında da işaretlenir. Bir işarete tıklayarak kelimesine gidin.

Hepsi incelendiğinde **Kabul edilen kelimeleri yeniden incele** kabul ettiğiniz kelimeleri geri getirir. Düzeltilen kelimeler incelenmiş olarak kalır.

Kelimelerin altı, puanları %40'ın altında olduğunda çizilir. `⋯` → **Düşük güvenilirlik eşiği** bölümünden veya çubuktaki **Eşiği ayarla** ile %20 ile %70 arasında başka bir eşik seçin. Altlarını çizmeyi bırakmak ve çubuğu gizlemek için `⋯` menüsünde **Düşük güvenilirlikli kelimeleri vurgula** işaretini kaldırın.

Bir transkripsiyonun puanı yoksa `⋯` menüsü nedenini söyler: **“Kelime düzeyinde zamanlama”yı açıp yeniden yazıya dökün**, **Bu dil için hizalama modeli yok**, **Kelimeleri puanlamak için yeniden yazıya dökün** (kelimeler puanlanmadan önce yapılmış) veya **Kelimeleri yalnızca WhisperX ve whisper-1 puanlar**.

## Düz metin

**Düz metin** modu, transkripsiyonun metnini zaman damgaları olmadan gösterir. Altyazılardan oluşturulduğu için, modların yanındaki notun dediği gibi salt okunurdur: değiştirmek için [altyazıları düzeltin](#transkripsiyonu-düzeltin), düz metin de onları izler. Böylece tüm dışa aktarmalar ve çeviriler aynı metni kullanır.

Zaman damgası olmayan transkripsiyonların (ör. Google API'den) altyazısı yoktur, bu yüzden düz metinleri bir metin düzenleyicideki gibi serbestçe düzenlenebilir. Değişiklikler otomatik olarak kaydedilir.

:::note
Önceki sürümler, altyazılı transkripsiyonların düz metnini düzenlemeye izin veriyordu. Bu transkripsiyonlardan (veya çevirilerden) biri açıldığında düz metni altyazılarından yeniden oluşturulur, bu yüzden o düzenlemeler değiştirilir.
:::

## Kopyalayın ve dışa aktarın

Başlıktaki kopyalama düğmesi transkripsiyonun metnini kopyalar.

Dışa aktarma düğmesi (veya `Ctrl+S`, macOS'ta `⌘S`) onu şu biçimlerde kaydeder:

| Biçim | İçerik |
| --- | --- |
| Altyazılar (`.srt`) | Video oynatıcılar için altyazılar |
| Biçimli altyazılar (`.ass`) | Her konuşmacı için bir renkle altyazılar; video oynatıcılar ve düzenleyiciler için |
| Düz metin (`.txt`) | Metin |
| JSON (`.json`) | Metin, zaman damgaları, kelimeler ve konuşmacılarla segmentler ve varsa özet |
| Markdown (`.md`) | Varsa özet ve her birinin zaman damgası ve konuşmacısıyla paragraflar halinde metin |
| Tablo (`.tsv`) | Segment başına bir satır; başlangıç ve bitiş (milisaniye cinsinden) ve metin |
| Web altyazıları (`.vtt`) | Web için altyazılar |
| Word belgesi (`.docx`) | Markdown ile aynı, düzenlemeye veya yazdırmaya hazır |

Altyazılar ve tablo zaman damgası gerektirir. [Çeviriler](/tr/guides/summary-and-translation/#altyazılar-ve-dışa-aktarma) ve [özet](/tr/guides/summary-and-translation/#özet) kendi panellerinden dışa aktarılır.

### Videoyu altyazılarıyla dışa aktarın

Altyazı dosyalarının yüklenemediği bir yerde (ör. bir sosyal ağda) bir videoyu paylaşmak için transkripsiyonun veya bir çevirinin dışa aktarma menüsünde **Altyazılı video (.mp4)…** seçeneğini seçin. Audiotext, altyazıları uygulamada göründüğü gibi üzerine çizilmiş olarak videonun bir kopyasını oluşturur: boyutları, konumları ve stilleriyle ([Videoları altyazılarıyla izleyin](#videoları-altyazılarıyla-izleyin) bölümüne bakın).

Kopya arka planda oluşturulur ve durum çubuğu ilerlemeyi gösterir. İptal etmek için aynı menüde **Altyazıları videoya eklemeyi durdur**'u seçin. Kopya bir MP4 dosyasıdır (H.264 video ve AAC ses) ve orijinal video değişmez.

Sisteminizdeki hiçbir yazı tipinde altyazıların bazı karakterleri yoksa bunlar kutu olarak çizilir ve Audiotext bitirdiğinde bunları listeler. [Sorun giderme](/tr/help/troubleshooting/#altyazılı-video-kutular-gösteriyor) bölümüne bakın.

## Yeniden adlandırma, etiketler ve notlar

Transkripsiyonun başlığı adını, kaynağını, tarihini ve etiketini gösterir. Yeniden adlandırmak için ada çift tıklayın, değiştirmek için etikete tıklayın veya not yazmak için **Not ekle**'ye tıklayın. Notu düzenlemek için nota veya kalemine, silmek için çöp kutusuna tıklayın.

`⋯` menüsünde de bu seçenekler bulunur; ayrıca kaynak dosyanın klasörünü veya **kaydedilen dosyaların klasörünü** açar. Daha fazla seçenek [geçmişte](/tr/guides/history/) bulunur.
