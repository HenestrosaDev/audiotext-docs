---
title: Instalace
description: Stáhněte si Audiotext pro Windows, macOS nebo Linux a poprvé ho spusťte.
sidebar:
  order: 1
---

Audiotext je desktopová aplikace pro **Windows**, **macOS** a **Linux**. Přepisuje do textu zvuk ze souborů, videí z YouTube a nahrávek z mikrofonu a umí ho přeložit, shrnout a převést na titulky.

## Stáhněte si aplikaci

Stáhněte si soubor pro svůj systém z [nejnovější verze](https://github.com/HenestrosaDev/audiotext/releases/latest) na GitHubu:

| Systém | Soubor |
| --- | --- |
| Windows (64bitový) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 nebo novější (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

Aplikace obsahuje vše, co potřebuje, včetně FFmpeg.

### Windows

Spusťte instalační program a postupujte podle kroků. Nepotřebuje oprávnění správce. Pokud máte grafickou kartu NVIDIA, zaškrtněte možnost použít kartu NVIDIA (CUDA): instalační program pak stáhne doplněk pro GPU, který WhisperX výrazně zrychlí. Instalační program není podepsaný, takže Windows SmartScreen může zobrazit varování: rozbalte další informace a zvolte, že ho chcete přesto spustit.

### macOS

Otevřete soubor `.dmg` a přetáhněte **Audiotext** do složky **Aplikace**. Aplikace není ověřená společností Apple, takže ji macOS při prvním otevření zablokuje: přejděte do **Nastavení systému** → **Soukromí a zabezpečení** a klikněte na **Přesto otevřít** u zprávy o Audiotextu. V macOS běží WhisperX na procesoru, protože CUDA tam není k dispozici. Počítače Mac s procesorem Intel nejsou podporovány, protože je PyTorch už nepodporuje.

### Linux

Rozbalte archiv a spusťte instalační program v terminálu:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Nainstaluje Audiotext pro vašeho uživatele a přidá ho do nabídky aplikací (lze ho otevřít i příkazem `audiotext`). Pokud zjistí kartu NVIDIA, nabídne stažení doplňku pro GPU. Spuštěním `./install.sh --gpu` nebo `./install.sh --cpu` zvolíte bez dotazu, `./install.sh --uninstall` aplikaci odinstaluje (nastavení zůstanou zachována).

:::tip
Doplněk pro GPU má ke stažení asi 2 GB ve Windows a 4 GB v Linuxu, takže se vyplatí jen s kartou NVIDIA. Bez něj běží WhisperX na procesoru a Whisper API i Google API fungují stejně. Chcete-li později přejít mezi verzí pro procesor a verzí pro GPU, nainstalujte aplikaci znovu a zvolte druhou možnost.
:::

:::note
Při prvním přepisu pomocí **WhisperX** (výchozího nástroje) se stáhne jeho model. Má od ~75 MB (`tiny`) do ~3 GB (`large-v2`), takže to může chvíli trvat. Další přepisy začínají okamžitě.
:::

## Požadavky

- **WhisperX** běží na vašem počítači. Funguje na jakémkoli procesoru, ale na grafické kartě NVIDIA s CUDA je mnohem rychlejší. V části [Nástroje](/cs/reference/engines/) vyberete model vhodný pro váš hardware.
- **Whisper API** a **Google API** běží na vzdálených serverech, takže potřebují připojení k internetu, ale ne výkonný hardware.
- Pro přepis z mikrofonu musí systém rozpoznat vstupní zařízení.
- V Linuxu nahrávání a přehrávání vyžaduje [PortAudio](https://www.portaudio.com/) (`sudo apt install libportaudio2` v Ubuntu nebo Debianu).

## Aktualizujte aplikaci

Když vyjde nová verze, Audiotext zobrazí na horní liště tlačítko **Je k dispozici verze …**. Kliknutím otevřete stránku vydání, stáhněte soubor pro svůj systém a nainstalujte ho stejně jako poprvé: ve Windows spusťte nový instalátor, v macOS přetáhněte novou aplikaci do složky **Aplikace** a v Linuxu spusťte `install.sh` z nového archivu. Předchozí verze se nahradí a vaše nastavení i historie zůstanou zachovány, protože jsou uloženy v [uživatelské konfigurační složce](/cs/reference/files-and-data/#uživatelská-konfigurační-složka). Pokud používáte doplněk pro GPU, při instalaci ho zvolte znovu.

Chcete-li novou verzi zkontrolovat sami, otevřete **Předvolby** → **O aplikaci** → **Zkontrolovat aktualizace**. Chcete-li kontrolu při otevření aplikace vypnout, vypněte **Obecné** → **Aktualizace**.

## Změňte jazyk rozhraní

Audiotext používá jazyk systému, pokud je k dispozici. Chcete-li ho změnit, otevřete **Předvolby** (ozubené kolo vpravo nahoře) a vyberte jazyk v **Obecné** → **Jazyk rozhraní**.

## Spuštění ze zdrojového kódu

Pokud chcete spustit nejnovější kód nebo přispět, přečtěte si [Přispívání](/cs/help/contributing/) a připravte projekt v Pythonu.

## Další kroky

- [Váš první přepis](/cs/getting-started/first-transcription/) vysvětluje okno a postup přepisu.
