---
title: Instalación
description: Descarga Audiotext para Windows, macOS o Linux y ábrelo por primera vez.
sidebar:
  order: 1
---

Audiotext es una aplicación de escritorio para **Windows**, **macOS** y **Linux**. Transcribe a texto el audio de archivos, vídeos de YouTube y grabaciones del micrófono, y puede traducirlo, resumirlo y subtitularlo.

## Descarga la aplicación

Descarga el archivo de tu sistema desde la [última versión](https://github.com/HenestrosaDev/audiotext/releases/latest) en GitHub:

| Sistema | Archivo |
| --- | --- |
| Windows (64 bits) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 o posterior (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

La aplicación incluye todo lo que necesita, FFmpeg incluido.

### Windows

Ejecuta el instalador y sigue sus pasos. No necesita permisos de administrador. Si tienes una GPU NVIDIA, marca **Usar la GPU de NVIDIA (CUDA) para transcribir más rápido**: el instalador descargará entonces el complemento para GPU, que hace WhisperX mucho más rápido. El instalador no está firmado, así que Windows SmartScreen puede avisar sobre él: haz clic en **Más información** → **Ejecutar de todas formas**.

### macOS

Abre el archivo `.dmg` y arrastra **Audiotext** a la carpeta **Aplicaciones**. La aplicación no está notarizada por Apple, así que macOS la bloquea la primera vez que la abres: ve a **Ajustes del Sistema** → **Privacidad y seguridad** y haz clic en **Abrir igualmente** junto al mensaje sobre Audiotext. En macOS, WhisperX se ejecuta en la CPU, ya que CUDA no está disponible. Los Mac con Intel no son compatibles, ya que PyTorch ya no los admite.

### Linux

Extrae el archivo y ejecuta el instalador desde una terminal:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Instala Audiotext para tu usuario y lo añade al menú de aplicaciones (también se puede abrir con el comando `audiotext`). Si detecta una GPU NVIDIA, ofrece descargar el complemento para GPU. Ejecuta `./install.sh --gpu` o `./install.sh --cpu` para elegir sin que te pregunte, y `./install.sh --uninstall` para desinstalarlo (tus ajustes se conservan).

:::tip
El complemento para GPU es una descarga de unos 2 GB en Windows y 4 GB en Linux, así que solo merece la pena con una GPU NVIDIA. Sin él, WhisperX se ejecuta en la CPU, y la API de Whisper y la API de Google funcionan igual. Para cambiar más adelante entre la versión para CPU y la versión para GPU, vuelve a instalar la aplicación y elige la otra opción.
:::

:::note
La primera vez que transcribes con **WhisperX** (el motor por defecto), se descarga su modelo. Ocupa desde ~75 MB para `tiny` hasta ~3 GB para `large-v2`, así que puede tardar un poco. Las siguientes transcripciones empiezan al momento.
:::

## Requisitos

- **WhisperX** se ejecuta en tu ordenador. Funciona en cualquier CPU, pero es mucho más rápido en una GPU NVIDIA con CUDA. Consulta [Motores](/es/reference/engines/) para elegir un modelo adecuado a tu hardware.
- La **API de Whisper** y la **API de Google** se ejecutan en servidores remotos, así que necesitan conexión a Internet, pero no un hardware potente.
- Para transcribir desde el micrófono, tu sistema debe detectar un dispositivo de entrada.
- En Linux, grabar y reproducir audio requiere [PortAudio](https://www.portaudio.com/) (`sudo apt install libportaudio2` en Ubuntu o Debian).

## Actualiza la aplicación

Cuando se publica una versión nueva, Audiotext muestra un botón **La versión … está disponible** en la barra superior. Haz clic en él para abrir la página de la versión, descarga el archivo de tu sistema e instálalo como la primera vez: ejecuta el nuevo instalador en Windows, arrastra la nueva aplicación a la carpeta **Aplicaciones** en macOS o ejecuta el `install.sh` del nuevo archivo en Linux. La versión anterior se reemplaza, y tu configuración y tu historial se conservan, ya que se guardan en tu [carpeta de configuración de usuario](/es/reference/files-and-data/#carpeta-de-configuración-de-usuario). Si usas el complemento de GPU, vuelve a elegirlo al instalar.

Para comprobar tú mismo si hay una versión nueva, abre **Preferencias** → **Acerca de** → **Buscar actualizaciones**. Para que no se compruebe al abrir la aplicación, desactiva **General** → **Actualizaciones**.

## Desinstala la aplicación

- **Windows**: desinstálala desde **Configuración** → **Aplicaciones**, como cualquier otra aplicación.
- **macOS**: arrastra **Audiotext** de la carpeta **Aplicaciones** a la Papelera.
- **Linux**: ejecuta `./install.sh --uninstall` desde la carpeta del archivo. Si ya no la tienes, elimina `~/.local/share/audiotext`, `~/.local/bin/audiotext` y `~/.local/share/applications/audiotext.desktop`.

Tu configuración, tu historial y tus grabaciones se conservan, así que siguen ahí si la vuelves a instalar. Para eliminarlo todo:

1. Antes de desinstalarla, elimina tus claves de API en **Preferencias** → **Claves de API** (haz clic en **Cambiar…** y déjala vacía), ya que se guardan en el almacén de credenciales de tu sistema.
2. Elimina tu [carpeta de configuración de usuario](/es/reference/files-and-data/#carpeta-de-configuración-de-usuario).
3. Elimina los [modelos](/es/reference/files-and-data/#modelos) que se han descargado.

## Cambia el idioma de la interfaz

Audiotext usa el idioma de tu sistema si está disponible. Para cambiarlo, abre las **Preferencias** (el engranaje de arriba a la derecha) y elige un idioma en **General** → **Idioma de la interfaz**.

## Ejecútalo desde el código fuente

Si quieres ejecutar el código más reciente o contribuir, consulta [Contribuir](/es/help/contributing/) para preparar el proyecto con Python.

## Siguientes pasos

- [Tu primera transcripción](/es/getting-started/first-transcription/) explica la ventana y los pasos para transcribir.
