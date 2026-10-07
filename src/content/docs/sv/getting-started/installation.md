---
title: Installation
description: Ladda ner Audiotext för Windows, macOS eller Linux och öppna det för första gången.
sidebar:
  order: 1
---

Audiotext är en skrivbordsapp för **Windows**, **macOS** och **Linux**. Den transkriberar ljudet i filer, YouTube-videor och mikrofoninspelningar till text, och kan översätta, sammanfatta och texta det.

## Ladda ner appen

Ladda ner filen för ditt system från den [senaste versionen](https://github.com/HenestrosaDev/audiotext/releases/latest) på GitHub:

| System | Fil |
| --- | --- |
| Windows (64-bitars) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 eller senare (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

Appen innehåller allt den behöver, inklusive FFmpeg.

### Windows

Kör installationsprogrammet och följ stegen. Det kräver inga administratörsbehörigheter. Om du har ett NVIDIA-grafikkort markerar du alternativet att använda NVIDIA-grafikkortet (CUDA): installationsprogrammet laddar då ner GPU-tillägget, som gör WhisperX mycket snabbare. Installationsprogrammet är inte signerat, så Windows SmartScreen kan varna för det: visa mer information och välj att köra det ändå.

### macOS

Öppna `.dmg`-filen och dra **Audiotext** till mappen **Program**. Appen är inte notariserad av Apple, så macOS blockerar den första gången du öppnar den: gå till **Systeminställningar** → **Integritet och säkerhet** och klicka på **Öppna ändå** bredvid meddelandet om Audiotext. På macOS körs WhisperX på processorn, eftersom CUDA inte finns där. Mac-datorer med Intel stöds inte, eftersom PyTorch inte längre stöder dem.

### Linux

Packa upp arkivet och kör installationsprogrammet i en terminal:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Det installerar Audiotext för din användare och lägger till det i programmenyn (det kan också öppnas med kommandot `audiotext`). Om det hittar ett NVIDIA-grafikkort erbjuder det att ladda ner GPU-tillägget. Kör `./install.sh --gpu` eller `./install.sh --cpu` för att välja utan fråga, och `./install.sh --uninstall` för att avinstallera (dina inställningar sparas).

:::tip
GPU-tillägget är en nedladdning på ungefär 2 GB i Windows och 4 GB i Linux, så det lönar sig bara med ett NVIDIA-grafikkort. Utan det körs WhisperX på processorn, och Whisper-API:t och Google-API:t fungerar likadant. För att senare byta mellan CPU- och GPU-versionen installerar du appen igen och väljer det andra alternativet.
:::

:::note
Första gången du transkriberar med **WhisperX** (standardmotorn) laddas dess modell ner. Den är från ~75 MB för `tiny` upp till ~3 GB för `large-v2`, så det kan ta en stund. Nästa transkriberingar startar direkt.
:::

## Krav

- **WhisperX** körs på din dator. Det fungerar på alla processorer, men är mycket snabbare på ett NVIDIA-grafikkort med CUDA. Se [Motorer](/sv/reference/engines/) för att välja en modell som passar din hårdvara.
- **Whisper-API:t** och **Google-API:t** körs på fjärrservrar, så de kräver en internetanslutning men ingen kraftfull hårdvara.
- För att transkribera från mikrofonen måste systemet hitta en inmatningsenhet.
- På Linux kräver inspelning och uppspelning [PortAudio](https://www.portaudio.com/) (`sudo apt install libportaudio2` på Ubuntu eller Debian).

## Uppdatera appen

När en ny version släpps visar Audiotext knappen **Version … är tillgänglig** i det övre fältet. Klicka på den för att öppna versionens sida, ladda ned filen för ditt system och installera den som första gången: kör det nya installationsprogrammet i Windows, dra den nya appen till mappen **Program** i macOS eller kör `install.sh` i det nya arkivet i Linux. Den tidigare versionen ersätts, och dina inställningar och din historik behålls, eftersom de lagras i din [användarens konfigurationsmapp](/sv/reference/files-and-data/#användarens-konfigurationsmapp). Om du använder GPU-tillägget väljer du det igen vid installationen.

Om du vill söka efter en ny version själv öppnar du **Inställningar** → **Om** → **Sök efter uppdateringar**. Om du inte vill att appen söker när den öppnas stänger du av **Allmänt** → **Uppdateringar**.

## Avinstallera appen

- **Windows**: avinstallera den under **Inställningar** → **Appar**, som vilken annan app som helst.
- **macOS**: dra **Audiotext** från mappen **Program** till papperskorgen.
- **Linux**: kör `./install.sh --uninstall` från arkivets mapp. Om du inte har den kvar tar du bort `~/.local/share/audiotext`, `~/.local/bin/audiotext` och `~/.local/share/applications/audiotext.desktop`.

Dina inställningar, din historik och dina inspelningar behålls, så de finns kvar om du installerar appen igen. För att ta bort allt:

1. Ta bort dina API-nycklar under **Inställningar** → **API-nycklar** innan du avinstallerar (klicka på **Ändra…** och lämna fältet tomt), eftersom de sparas i systemets lagring för inloggningsuppgifter.
2. Ta bort din [användarens konfigurationsmapp](/sv/reference/files-and-data/#användarens-konfigurationsmapp).
3. Ta bort de nedladdade [modellerna](/sv/reference/files-and-data/#modeller).

## Ändra gränssnittets språk

Audiotext använder systemets språk om det finns. För att ändra det öppnar du **Inställningar** (kugghjulet uppe till höger) och väljer ett språk under **Allmänt** → **Gränssnittets språk**.

## Kör från källkoden

Om du vill köra den senaste koden eller bidra, se [Bidra](/sv/help/contributing/) för att konfigurera projektet med Python.

## Nästa steg

- [Din första transkribering](/sv/getting-started/first-transcription/) förklarar fönstret och stegen för att transkribera.
