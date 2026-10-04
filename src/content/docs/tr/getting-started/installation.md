---
title: Kurulum
description: Audiotext'i Windows, macOS veya Linux için indirin ve ilk kez açın.
sidebar:
  order: 1
---

Audiotext; **Windows**, **macOS** ve **Linux** için bir masaüstü uygulamasıdır. Dosyaların, YouTube videolarının ve mikrofon kayıtlarının sesini metne döker; bu metni çevirebilir, özetleyebilir ve altyazıya dönüştürebilir.

## Uygulamayı indirin

Sisteminize uygun dosyayı GitHub'daki [en son sürümden](https://github.com/HenestrosaDev/audiotext/releases/latest) indirin:

| Sistem | Dosya |
| --- | --- |
| Windows (64 bit) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 veya üzeri (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

Uygulama, FFmpeg dahil ihtiyaç duyduğu her şeyi içerir.

### Windows

Yükleyiciyi çalıştırın ve adımlarını izleyin. Yönetici izni gerektirmez. NVIDIA ekran kartınız varsa NVIDIA ekran kartını (CUDA) kullanma seçeneğini işaretleyin: yükleyici bu durumda WhisperX'i çok daha hızlı yapan GPU eklentisini indirir. Yükleyici imzalı olmadığından Windows SmartScreen uyarı gösterebilir: ek bilgileri açın ve yine de çalıştırmayı seçin.

### macOS

`.dmg` dosyasını açın ve **Audiotext**'i **Uygulamalar** klasörüne sürükleyin. Uygulama Apple tarafından onaylanmadığı için macOS ilk açılışta onu engeller: **Sistem Ayarları** → **Gizlilik ve Güvenlik** bölümüne gidin ve Audiotext ile ilgili mesajın yanındaki **Yine de Aç**'a tıklayın. macOS'ta CUDA bulunmadığından WhisperX işlemcide çalışır. PyTorch artık desteklemediği için Intel işlemcili Mac'ler desteklenmez.

### Linux

Arşivi çıkarın ve yükleyiciyi bir terminalden çalıştırın:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Audiotext'i kullanıcınız için kurar ve uygulamalar menüsüne ekler (`audiotext` komutuyla da açılabilir). Bir NVIDIA ekran kartı algılarsa GPU eklentisini indirmeyi önerir. Sormadan seçmek için `./install.sh --gpu` veya `./install.sh --cpu`, kaldırmak için `./install.sh --uninstall` komutunu çalıştırın (ayarlarınız korunur).

:::tip
GPU eklentisi birkaç GB'lık bir indirmedir, bu yüzden yalnızca NVIDIA ekran kartıyla değer. Eklenti olmadan WhisperX işlemcide çalışır; Whisper API ve Google API aynı şekilde çalışır.
:::

:::note
**WhisperX** (varsayılan motor) ile ilk kez yazıya döktüğünüzde modeli indirilir. Boyutu `tiny` için ~75 MB'tan `large-v2` için ~3 GB'a kadardır, bu yüzden biraz sürebilir. Sonraki transkripsiyonlar hemen başlar.
:::

## Gereksinimler

- **WhisperX** bilgisayarınızda çalışır. Her işlemcide çalışır, ancak CUDA destekli bir NVIDIA ekran kartında çok daha hızlıdır. Donanımınıza uygun modeli seçmek için [Motorlar](/tr/reference/engines/) sayfasına bakın.
- **Whisper API** ve **Google API** uzak sunucularda çalışır; internet bağlantısı gerektirir ama güçlü donanım gerektirmez.
- Mikrofondan yazıya dökmek için sisteminizin bir giriş aygıtı algılaması gerekir.
- Linux'ta kayıt ve oynatma için [PortAudio](https://www.portaudio.com/) gerekir (Ubuntu veya Debian'da `sudo apt install libportaudio2`).

## Arayüz dilini değiştirin

Audiotext, varsa sisteminizin dilini kullanır. Değiştirmek için **Tercihler**'i (sağ üstteki dişli) açın ve **Genel** → **Arayüz dili** bölümünden bir dil seçin. Devam eden bir transkripsiyon yokken değiştirilebilir.

## Kaynak koddan çalıştırın

En yeni kodu çalıştırmak veya katkıda bulunmak istiyorsanız, projeyi Python ile hazırlamak için [Katkıda bulunma](/tr/help/contributing/) sayfasına bakın.

## Sonraki adımlar

- [İlk transkripsiyonunuz](/tr/getting-started/first-transcription/) pencereyi ve yazıya dökme adımlarını açıklar.
