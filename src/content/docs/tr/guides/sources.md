---
title: Ses kaynakları
description: Dosyaları, YouTube videolarını ve bağlantıları, mikrofon kayıtlarını, klasörleri ve izlenen klasörleri yazıya dökün.
sidebar:
  order: 1
---

Audiotext, üst çubuktaki **Yeni transkripsiyon** bölümünden seçtiğiniz dört tür kaynaktan yazıya döker.

## Dosya

Bir ses veya video dosyasını yazıya döker. **Dosya seç…**'e tıklayın veya dosyayı pencereye bırakın. Dosya seçici varsayılan olarak **Desteklenen tüm dosyalar**'ı gösterir; yalnızca **Ses dosyaları** veya **Video dosyaları** da gösterebilirsiniz. Desteklenen biçimler için [Biçimler ve diller](/tr/reference/formats-and-languages/) sayfasına bakın.

Aynı anda yalnızca bir dosya eklenebilir. Birden fazla dosyayı yazıya dökmek için [Klasör](#klasör) kaynağını kullanın.

## URL

Bir **YouTube videosunu** veya bir **ses ya da video dosyasına doğrudan bağlantıyı** (ör. bir podcast bölümü) yazıya döker. URL'yi yapıştırın (**Yapıştır** veya `Ctrl+V` ile) ve **Devam**'a tıklayın. URL `http://` veya `https://` ile başlamalıdır.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

Önce ses indirilir, bu yüzden internet bağlantısı gerekir.

## Mikrofon

Sesinizi veya bir toplantıyı kaydeder ve yazıya döker. Kayıt geçmişinizde saklanır, böylece daha sonra oynatabilirsiniz.

1. Listeden mikrofonu seçin (yeni bağladıysanız yenile düğmesine tıklayın).
2. Kaydı başlatmak için kayıt düğmesine tıklayın (veya `Ctrl+Enter`, macOS'ta `⌘↩`). Seviye göstergesi sesin **Çok sessiz** mi, **İyi seviye**de mi yoksa **Çok yüksek** mi olduğunu söyler.
3. Durdurup yazıya dökmek için tekrar tıklayın.

### Canlı metin

**WhisperX** ile, konuşurken metnin bir taslağını görmek için **Canlı metin** kartında **Kayıt sırasında metni göster**'i açın. Taslağı hızlı bir **Canlı model** yazar (varsayılan `small`). Durdurduğunuzda kaydın tamamı motorun daha doğru modeliyle yeniden yazıya dökülür ve taslak değiştirilir.

![Mikrofondan kayıt yapılırken canlı metin](/screenshots/live-text.png)

:::caution
Sisteminizin bir giriş aygıtı algılaması ve uygulamanın onu kullanmasına izin vermesi gerekir. Aksi takdirde **Mikrofon bulunamadı** gösterilir. macOS'ta Audiotext'e **Sistem Ayarları** → **Gizlilik ve Güvenlik** → **Mikrofon** bölümünden izin verin.
:::

### Bilgisayarın sesini kaydetme

Bilgisayarınızın çaldığı şeyi (bir görüntülü görüşme, bir web semineri, indirilemeyen bir video) metne dökmek için onu hoparlörlerin sesini bir girişe gönderen bir aygıttan kaydedin. Aygıtı bir kez ayarlayın, yenile düğmesine tıklayın ve mikrofon listesinden seçin. Bilgisayarın çaldığı her şey, bildirimler dahil, kaydedilir; ancak sizin sesiniz kaydedilmez.

- **Windows**: `mmsys.cpl` komutunu çalıştırın, **Kayıt** sekmesinde listeye sağ tıklayarak devre dışı aygıtları gösterin ve **Stereo Karışımı**'nı etkinleştirin. Ses kartınızda yoksa [VB-CABLE](https://vb-audio.com/Cable/) kurun, **CABLE Input**'u çıkış aygıtı yapın ve Audiotext'te **CABLE Output**'u seçin. Sesi duymaya devam etmek için **CABLE Output** özelliklerinde **Bu aygıtı dinle** seçeneğini işaretleyin.
- **macOS**: [BlackHole](https://existential.audio/blackhole/) kurun (`brew install blackhole-2ch`) ve Audiotext'te **BlackHole 2ch**'yi seçin. Sesi duymaya devam etmek için hoparlörleriniz ve BlackHole ile bir [Çoklu Çıkış Aygıtı](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) oluşturun ve onu çıkış aygıtı yapın.
- **Linux** (PulseAudio veya PipeWire): Audiotext'te **pulse**'u seçin ve kaydı başlatın. Ardından `pavucontrol`'ün **Kayıt** sekmesinde Audiotext'in kaynağını hoparlörlerinizin monitörü olarak değiştirin.

## Klasör

Bir klasördeki **ve alt klasörlerindeki** tüm ses ve video dosyalarını yazıya döker. **Klasör seç…**'e tıklayın veya klasörü pencereye bırakın. Audiotext kaç dosya bulduğunu söyler.

Her dosyanın transkripsiyonu dosyanın yanına (veya **Çıktı** kartında seçtiğiniz başka bir klasöre), aynı adla ve seçtiğiniz her **dosya türünün** uzantısıyla kaydedilir. Örneğin `.txt` ve `.vtt` ile:

```text
files-to-transcribe
├── paranoid-android.mp3
├── paranoid-android.txt
├── paranoid-android.vtt
└── movies
    ├── mulholland-dr.avi
    ├── mulholland-dr.txt
    └── mulholland-dr.vtt
```

Zaten transkripsiyonu olan dosyalar, **Mevcut dosyaların üzerine yaz**'ı açmadıkça **atlanır**. Yani klasöre bir dosya ekleyip klasörü yeniden yazıya dökerseniz yalnızca yeni dosya yazıya dökülür.

Bir dosya yazıya dökülemezse diğerleri yine de yazıya dökülür ve klasör görünümü hangilerinin başarısız olduğunu ve nedenini gösterir. **Yeniden yazıya dök** klasörü tekrarlar, klasör düğmesi de kaydedilen dosyaların klasörünü açar.

### Bir klasörü izleyin

**Klasör** kartında **Klasörü izle**'yi açarak klasöre (veya alt klasörlerine) eklenen dosyaları **İzlemeyi durdur**'a tıklayana kadar yazıya dökmeye devam edin. Bir ses kayıt cihazının veya toplantı aracının bir klasöre kopyalanan kayıtları için kullanışlıdır.

- Klasörde zaten bulunan dosyalar atlanır. Onları yazıya dökmek için klasörü izlemeden yazıya dökün.
- Bir dosya tamamen kopyalandığında (boyutu değişmeyi bıraktığında) yazıya dökülür, böylece büyük dosyalar yarım yazıya dökülmez.
- Hatalar izlemeyi durdurmaz.

## Kuyruk

Başka bir transkripsiyon devam ederken yenisini ayarlayabilirsiniz: düğme **Kuyruğa ekle** olur ve mevcut olan bitince başlar. Kuyruktaki ve devam eden transkripsiyonlar geçmişte gösterilir.
