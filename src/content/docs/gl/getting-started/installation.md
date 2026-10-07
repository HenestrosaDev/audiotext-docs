---
title: Instalación
description: Descarga Audiotext para Windows, macOS ou Linux e ábreo por primeira vez.
sidebar:
  order: 1
---

Audiotext é unha aplicación de escritorio para **Windows**, **macOS** e **Linux**. Transcribe a texto o audio de ficheiros, vídeos de YouTube e gravacións do micrófono, e pode traducilo, resumilo e subtitulalo.

## Descarga a aplicación

Descarga o ficheiro do teu sistema desde a [última versión](https://github.com/HenestrosaDev/audiotext/releases/latest) en GitHub:

| Sistema | Ficheiro |
| --- | --- |
| Windows (64 bits) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 ou posterior (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

A aplicación inclúe todo o que necesita, FFmpeg incluído.

### Windows

Executa o instalador e segue os seus pasos. Non precisa permisos de administrador. Se tes unha GPU NVIDIA, marca a opción de usar a GPU de NVIDIA (CUDA): o instalador descargará o complemento para GPU, que fai WhisperX moito máis rápido. O instalador non está asinado, así que Windows SmartScreen pode mostrar un aviso: abre a información adicional e escolle executalo igualmente.

### macOS

Abre o ficheiro `.dmg` e arrastra **Audiotext** ao cartafol **Aplicacións**. A aplicación non está notarizada por Apple, así que macOS bloquéaa a primeira vez que a abres: vai a **Configuración do Sistema** → **Privacidade e seguranza** e fai clic en **Abrir igualmente** xunto á mensaxe sobre Audiotext. En macOS, WhisperX execútase na CPU, xa que CUDA non está dispoñible. Os Mac con Intel non son compatibles, xa que PyTorch xa non os admite.

### Linux

Extrae o arquivo e executa o instalador desde un terminal:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Instala Audiotext para o teu usuario e engádeo ao menú de aplicacións (tamén se pode abrir co comando `audiotext`). Se detecta unha GPU NVIDIA, ofrece descargar o complemento para GPU. Executa `./install.sh --gpu` ou `./install.sh --cpu` para escoller sen que pregunte, e `./install.sh --uninstall` para desinstalalo (a configuración consérvase).

:::tip
O complemento para GPU é unha descarga duns 2 GB en Windows e 4 GB en Linux, así que só paga a pena cunha GPU NVIDIA. Sen el, WhisperX execútase na CPU, e a API de Whisper e a API de Google funcionan igual. Para cambiar máis adiante entre a versión para CPU e a versión para GPU, volve instalar a aplicación e escolle a outra opción.
:::

:::note
A primeira vez que transcribes con **WhisperX** (o motor predeterminado), descárgase o seu modelo. Ocupa desde ~75 MB para `tiny` ata ~3 GB para `large-v2`, así que pode tardar un pouco. As seguintes transcricións comezan ao momento.
:::

## Requisitos

- **WhisperX** execútase no teu ordenador. Funciona en calquera CPU, pero é moito máis rápido nunha GPU NVIDIA con CUDA. Consulta [Motores](/gl/reference/engines/) para escoller un modelo axeitado ao teu hardware.
- A **API de Whisper** e a **API de Google** execútanse en servidores remotos, así que precisan conexión a Internet, pero non un hardware potente.
- Para transcribir desde o micrófono, o teu sistema debe detectar un dispositivo de entrada.
- En Linux, gravar e reproducir audio require [PortAudio](https://www.portaudio.com/) (`sudo apt install libportaudio2` en Ubuntu ou Debian).

## Actualiza a aplicación

Cando se publica unha versión nova, Audiotext mostra un botón **A versión … está dispoñible** na barra superior. Fai clic nel para abrir a páxina da versión, descarga o ficheiro do teu sistema e instálao como a primeira vez: executa o novo instalador en Windows, arrastra a nova aplicación ao cartafol **Aplicacións** en macOS ou executa o `install.sh` do novo arquivo en Linux. A versión anterior substitúese, e a túa configuración e o teu historial consérvanse, xa que se gardan no teu [cartafol de configuración de usuario](/gl/reference/files-and-data/#cartafol-de-configuración-de-usuario). Se usas o complemento de GPU, volve escollelo ao instalar.

Para comprobar ti mesmo se hai unha versión nova, abre **Preferencias** → **Acerca de** → **Buscar actualizacións**. Para que non se comprobe ao abrir a aplicación, desactiva **Xeral** → **Actualizacións**.

## Cambia o idioma da interface

Audiotext usa o idioma do teu sistema se está dispoñible. Para cambialo, abre as **Preferencias** (a roda dentada de arriba á dereita) e escolle un idioma en **Xeral** → **Idioma da interface**.

## Execútao desde o código fonte

Se queres executar o código máis recente ou contribuír, consulta [Contribuír](/gl/help/contributing/) para preparar o proxecto con Python.

## Seguintes pasos

- [A túa primeira transcrición](/gl/getting-started/first-transcription/) explica a xanela e os pasos para transcribir.
