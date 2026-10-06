---
title: Orixes do audio
description: Transcribe ficheiros, vídeos de YouTube e ligazóns, gravacións do micrófono, cartafoles e cartafoles vixiados.
sidebar:
  order: 1
---

Audiotext transcribe desde catro tipos de orixe, que escolles na barra superior, en **Nova transcrición**.

## Ficheiro

Transcribe un ficheiro de audio ou vídeo. Fai clic en **Escoller un ficheiro…** ou solta o ficheiro na xanela. O explorador de ficheiros mostra **Todos os ficheiros compatibles** de forma predeterminada; podes mostrar só **Ficheiros de audio** ou **Ficheiros de vídeo**. Consulta [Formatos e idiomas](/gl/reference/formats-and-languages/) para ver os formatos compatibles.

Só se pode engadir un ficheiro de cada vez. Para transcribir varios ficheiros, usa a orixe [Cartafol](#cartafol).

## URL

Transcribe un **vídeo de YouTube** ou unha **ligazón directa a un ficheiro de audio ou vídeo** (por exemplo, o episodio dun podcast). Pega o URL (con **Pegar** ou `Ctrl+V`) e fai clic en **Continuar**. O URL debe comezar por `http://` ou `https://`.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

Primeiro descárgase o audio, así que precisa conexión a Internet.

## Micrófono

Grava a túa voz ou unha reunión e transcríbea. A gravación gárdase no teu historial, para que poidas reproducila despois.

1. Escolle o micrófono na lista (fai clic no botón de actualizar se acabas de conectalo).
2. Fai clic no botón de gravar (ou preme `Ctrl+Enter`, `⌘↩` en macOS) para comezar a gravar. O medidor de nivel indícache se o son está **Demasiado baixo**, ten **Bo nivel** ou está **Demasiado alto**.
3. Volve facer clic para detela e transcribila.

### Texto en directo

Con **WhisperX**, activa **Mostrar o texto mentres se grava** na tarxeta **Texto en directo** para ver un borrador do texto mentres falas. O borrador escríbeo un **Modelo en directo** rápido (`small` de forma predeterminada). Ao detela, toda a gravación vólvese transcribir co modelo do motor, que é máis preciso, e o borrador substitúese.

![O texto en directo mentres se grava co micrófono](/screenshots/live-text.png)

:::caution
O teu sistema debe detectar un dispositivo de entrada e permitir que a aplicación o use. Se non, móstrase **Non se atopou ningún micrófono**. En macOS, permite o acceso a Audiotext en **Configuración do Sistema** → **Privacidade e seguranza** → **Micrófono**.
:::

### Gravar o audio do teu ordenador

Para transcribir o que reproduce o teu ordenador (unha videochamada, un webinar, un vídeo que non se pode descargar), grávao desde un dispositivo que envíe o son dos altofalantes a unha entrada. Configúrao unha vez, fai clic no botón de actualizar e escólleo na lista de micrófonos. Grávase todo o que reproduce o ordenador, tamén as notificacións, pero non a túa voz.

- **Windows**: executa `mmsys.cpl` e, na lapela **Gravación**, fai clic dereito na lista para mostrar os dispositivos desactivados e activa **Mestura estéreo**. Se a túa tarxeta de son non a ten, instala [VB-CABLE](https://vb-audio.com/Cable/), pon **CABLE Input** como dispositivo de saída e escolle **CABLE Output** en Audiotext. Para seguir oíndo o son, marca **Escoitar este dispositivo** nas propiedades de **CABLE Output**.
- **macOS**: instala [BlackHole](https://existential.audio/blackhole/) (`brew install blackhole-2ch`) e escolle **BlackHole 2ch** en Audiotext. Para seguir oíndo o son, crea un [dispositivo de saída múltiple](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) cos teus altofalantes e BlackHole, e ponno como dispositivo de saída.
- **Linux** (PulseAudio ou PipeWire): escolle **pulse** en Audiotext e comeza a gravar. Despois, na lapela **Gravación** de `pavucontrol`, cambia a fonte de Audiotext polo monitor dos teus altofalantes.

## Cartafol

Transcribe todos os ficheiros de audio e vídeo dun cartafol **e dos seus subcartafoles**. Fai clic en **Escoller un cartafol…** ou solta o cartafol na xanela. Audiotext indícache cantos ficheiros atopou.

A transcrición de cada ficheiro gárdase xunto a el (ou noutro cartafol que escollas na tarxeta **Saída**), co mesmo nome e a extensión de cada **tipo de ficheiro** que seleccionases. Por exemplo, con `.txt` e `.vtt`:

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

Os ficheiros que xa teñen unha transcrición **omítense**, agás que actives **Sobrescribir os ficheiros existentes**. Así, se engades un ficheiro ao cartafol e o volves transcribir, só se transcribe o ficheiro novo.

Se un ficheiro non se pode transcribir, o resto séguese transcribindo, e a vista do cartafol mostra cales fallaron e por que. **Volver transcribir** repite o cartafol, e o botón de cartafol abre o cartafol dos ficheiros gardados.

### Vixía un cartafol

Activa **Vixiar o cartafol** na tarxeta **Cartafol** para seguir transcribindo os ficheiros que se engadan ao cartafol (ou aos seus subcartafoles) ata que fagas clic en **Deixar de vixiar**. É útil para as gravacións dunha gravadora de voz ou dunha ferramenta de reunións que se copian a un cartafol.

- Os ficheiros que xa contén o cartafol omítense. Para transcribilos, transcribe o cartafol sen vixialo.
- Un ficheiro transcríbese cando se copiou por completo (cando o seu tamaño deixa de cambiar), así que os ficheiros grandes non se transcriben a medias.
- Os erros non deteñen a vixilancia.

## A cola

Podes configurar unha nova transcrición mentres hai outra en curso: o botón pasa a ser **Engadir á cola**, e comeza cando remata a actual. As transcricións na cola e en curso móstranse no historial.
