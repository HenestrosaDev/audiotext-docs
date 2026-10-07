---
title: Instal·lació
description: Descarrega Audiotext per a Windows, macOS o Linux i obre'l per primera vegada.
sidebar:
  order: 1
---

Audiotext és una aplicació d'escriptori per a **Windows**, **macOS** i **Linux**. Transcriu a text l'àudio de fitxers, vídeos de YouTube i enregistraments del micròfon, i el pot traduir, resumir i subtitular.

## Descarrega l'aplicació

Descarrega el fitxer del teu sistema des de la [darrera versió](https://github.com/HenestrosaDev/audiotext/releases/latest) a GitHub:

| Sistema | Fitxer |
| --- | --- |
| Windows (64 bits) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 o posterior (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

L'aplicació inclou tot el que necessita, FFmpeg inclòs.

### Windows

Executa l'instal·lador i segueix-ne els passos. No necessita permisos d'administrador. Si tens una GPU NVIDIA, marca l'opció d'utilitzar la GPU de NVIDIA (CUDA): l'instal·lador descarregarà el complement per a GPU, que fa WhisperX molt més ràpid. L'instal·lador no està signat, així que Windows SmartScreen pot mostrar-ne un avís: obre'n més informació i tria executar-lo igualment.

### macOS

Obre el fitxer `.dmg` i arrossega **Audiotext** a la carpeta **Aplicacions**. L'aplicació no està notaritzada per Apple, així que macOS la bloqueja la primera vegada que l'obres: ves a **Configuració del Sistema** → **Privacitat i seguretat** i fes clic a **Obre igualment** al costat del missatge sobre Audiotext. A macOS, WhisperX s'executa a la CPU, ja que CUDA no hi està disponible. Els Mac amb Intel no són compatibles, ja que PyTorch ja no els admet.

### Linux

Extreu l'arxiu i executa l'instal·lador des d'un terminal:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Instal·la Audiotext per al teu usuari i l'afegeix al menú d'aplicacions (també es pot obrir amb l'ordre `audiotext`). Si detecta una GPU NVIDIA, ofereix descarregar el complement per a GPU. Executa `./install.sh --gpu` o `./install.sh --cpu` per triar sense que t'ho pregunti, i `./install.sh --uninstall` per desinstal·lar-lo (la configuració es conserva).

:::tip
El complement per a GPU és una descàrrega d'uns 2 GB a Windows i 4 GB a Linux, així que només val la pena amb una GPU NVIDIA. Sense ell, WhisperX s'executa a la CPU, i l'API de Whisper i l'API de Google funcionen igual. Per canviar més endavant entre la versió per a CPU i la versió per a GPU, torna a instal·lar l'aplicació i tria l'altra opció.
:::

:::note
La primera vegada que transcrius amb **WhisperX** (el motor per defecte), es descarrega el seu model. Ocupa des de ~75 MB per a `tiny` fins a ~3 GB per a `large-v2`, així que pot trigar una mica. Les transcripcions següents comencen de seguida.
:::

## Requisits

- **WhisperX** s'executa al teu ordinador. Funciona en qualsevol CPU, però és molt més ràpid en una GPU NVIDIA amb CUDA. Consulta [Motors](/ca/reference/engines/) per triar un model adequat al teu maquinari.
- L'**API de Whisper** i l'**API de Google** s'executen en servidors remots, així que necessiten connexió a Internet, però no un maquinari potent.
- Per transcriure des del micròfon, el sistema ha de detectar un dispositiu d'entrada.
- A Linux, enregistrar i reproduir àudio requereix [PortAudio](https://www.portaudio.com/) (`sudo apt install libportaudio2` a Ubuntu o Debian).

## Actualitza l'aplicació

Quan es publica una versió nova, Audiotext mostra un botó **Versió … disponible** a la barra superior. Fes-hi clic per obrir la pàgina de la versió, baixa el fitxer del teu sistema i instal·la'l com la primera vegada: executa l'instal·lador nou a Windows, arrossega l'aplicació nova a la carpeta **Aplicacions** a macOS o executa l'`install.sh` de l'arxiu nou a Linux. La versió anterior es reemplaça, i la configuració i l'historial es mantenen, ja que es desen a la teva [carpeta de configuració d'usuari](/ca/reference/files-and-data/#carpeta-de-configuració-dusuari). Si fas servir el complement de GPU, torna a triar-lo en instal·lar.

Per comprovar tu mateix si hi ha una versió nova, obre **Preferències** → **Quant a** → **Cerca actualitzacions**. Perquè no es comprovi en obrir l'aplicació, desactiva **General** → **Actualitzacions**.

## Desinstal·la l'aplicació

- **Windows**: desinstal·la-la des de **Configuració** → **Aplicacions**, com qualsevol altra aplicació.
- **macOS**: arrossega **Audiotext** de la carpeta **Aplicacions** a la Paperera.
- **Linux**: executa `./install.sh --uninstall` des de la carpeta de l'arxiu. Si ja no la tens, elimina `~/.local/share/audiotext`, `~/.local/bin/audiotext` i `~/.local/share/applications/audiotext.desktop`.

La configuració, l'historial i les gravacions es mantenen, de manera que hi continuen si la tornes a instal·lar. Per eliminar-ho tot:

1. Abans de desinstal·lar-la, elimina les claus d'API a **Preferències** → **Claus d'API** (fes clic a **Canvia…** i deixa-la buida), ja que es desen al magatzem de credencials del sistema.
2. Elimina la teva [carpeta de configuració d'usuari](/ca/reference/files-and-data/#carpeta-de-configuració-dusuari).
3. Elimina els [models](/ca/reference/files-and-data/#models) que s'han baixat.

## Canvia l'idioma de la interfície

Audiotext fa servir l'idioma del sistema si està disponible. Per canviar-lo, obre les **Preferències** (l'engranatge de dalt a la dreta) i tria un idioma a **General** → **Idioma de la interfície**.

## Executa'l des del codi font

Si vols executar el codi més recent o contribuir-hi, consulta [Contribueix](/ca/help/contributing/) per preparar el projecte amb Python.

## Passos següents

- [La teva primera transcripció](/ca/getting-started/first-transcription/) explica la finestra i els passos per transcriure.
