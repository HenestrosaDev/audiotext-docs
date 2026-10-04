---
title: İlk transkripsiyonunuz
description: Audiotext penceresinde bir tur ve bir ses ya da video dosyasını yazıya dökme adımları.
sidebar:
  order: 2
---

## Pencere

Audiotext penceresi üç bölümden oluşur:

- **Üst çubuk**: bir **Dosya**, **URL**, **Mikrofon** veya **Klasör** kaynağından **Yeni transkripsiyon** başlatma düğmeleri, uygulamanın durumu ve [Tercihler](/tr/reference/preferences/)'i açan dişli. Soldaki düğme geçmişi gösterir veya gizler.
- **Geçmiş** (solda): arayabileceğiniz, sabitleyebileceğiniz, gruplayabileceğiniz ve yeniden adlandırabileceğiniz tüm transkripsiyonlarınız. [Geçmiş](/tr/guides/history/) sayfasına bakın.
- **Ana alan**: ayarladığınız kaynak, bir transkripsiyonun ilerlemesi veya geçmişte seçtiğiniz transkripsiyon.

![Audiotext penceresinin bölümleri: üst çubuk, geçmiş ve ana alan](/screenshots/window.png)

Uygulamayı açtığınızda ana alan **Neyi yazıya dökmek istiyorsunuz?** diye sorar ve her kaynak türü için bir kart gösterir.

:::tip
Yazıya dökmek için bir dosyayı veya klasörü pencerenin herhangi bir yerine bırakın.
:::

## Bir dosyayı yazıya dökün

1. Üst çubukta **Dosya**'ya tıklayın (veya `Ctrl+O`, macOS'ta `⌘O` tuşlarına basın) ve bir ses ya da video dosyası seçin veya dosyayı pencereye bırakın. Ardından **Devam**'a tıklayın.
2. Ayarları gözden geçirin. Varsayılan değerler çoğu kayıt için iyi çalışır:
   - **Motor**: bilgisayarınızda çalışan WhisperX. Bilgisayarınız yavaşsa daha küçük bir **Model** (ör. `small`) seçin.
   - **Dil**: **Sesin dili** otomatik olarak algılanır. Biliyorsanız hataları önlemek için seçin. Çevirmek için farklı bir **Transkripsiyonun dili** seçin.
   - **Bağlam** ve **Seçenekler**: konuşmacıları belirleme gibi isteğe bağlı ipuçları ve özellikler.

   Tümü için [Transkripsiyon ayarları](/tr/guides/transcription-settings/) sayfasına bakın.
3. **Transkripsiyonu başlat**'a tıklayın (veya `Ctrl+Enter`, macOS'ta `⌘↩`).

Çalışırken her adımın ilerlemesi gösterilir (modeli yükleme, yazıya dökme, kelimeleri hizalama…). Bu sırada Audiotext'i kullanmaya devam edebilirsiniz: sonuç geçmişinize kaydedilir ve hazır olduğunda açılır. İptal etmek için **İptal**'e tıklayın veya `Esc` tuşuna basın.

Devam eden başka bir transkripsiyon varsa düğme **Kuyruğa ekle** olur ve yenisi, mevcut olan bitince başlar.

## Sonucu okuyun ve kullanın

Bittiğinde transkripsiyon açılır:

- Sesi oradan oynatmak için bir cümleye tıklayın.
- **Döküm**, **Düz metin** ve **Özet** arasında geçiş yapın.
- Çevirmek, kopyalamak veya dosya olarak kaydetmek için **Çevir**, **Kopyala** ve **Dışa aktar**'ı kullanın.

Onunla yapabileceğiniz her şey için [Döküm](/tr/guides/transcript/) sayfasına bakın.

## Klavye kısayolları

| Kısayol | Eylem |
| --- | --- |
| `Ctrl+Enter` / `⌘↩` | Transkripsiyonu başlatma veya kaydı başlatıp durdurma |
| `Ctrl+O` / `⌘O` | Dosya seçme (klasör kaynağında klasör) |
| `Ctrl+S` / `⌘S` | Gösterilen transkripsiyonu dışa aktarma |
| `Ctrl+F` / `⌘F` | Transkripsiyonda arama |
| `Esc` | Devam eden transkripsiyonu iptal etme |
| `Boşluk` | Sesi oynatma veya duraklatma |
| `←` / `→` | 5 saniye geri veya ileri gitme |
