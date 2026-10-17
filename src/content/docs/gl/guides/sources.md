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

Transcribe todos os ficheiros de audio e vídeo dun cartafol e, se **Incluír subcartafoles** está activado na tarxeta **Cartafol**, dos seus subcartafoles. Fai clic en **Escoller un cartafol…** ou solta o cartafol na xanela. Audiotext indícache cantos ficheiros atopou. Para deixar fóra algúns ficheiros, escribe os seus nomes ou rutas, separados por comas, en **Omitir os ficheiros que coincidan con** (p. ex. `*.wav, drafts/*`). Os ficheiros ocultos sempre se omiten.

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

Se dous ficheiros teñen o mesmo nome e outra extensión (p. ex. `talk.mp3` e `talk.mp4`), as súas transcricións manteñen a extensión no nome (`talk.mp3.txt` e `talk.mp4.txt`), para que non se substitúan entre si.

Os ficheiros que xa teñen unha transcrición **omítense**: un ficheiro só se omite se ten todos os tipos de ficheiro que seleccionaches, así que engadir un tipo de ficheiro transcríbeo de novo. Se un ficheiro non se pode transcribir, o resto séguese transcribindo.

### Os ficheiros dun cartafol

A páxina dun cartafol no historial mostra os seus ficheiros, co estado, a duración e o tamaño de cada un e unha vista previa do seu texto. Búscaos, fíltraos por estado (**Todos**, **Completados**, **Con erros** ou **Pendentes**) e ordénaos por nome, estado, duración ou tamaño. Os ficheiros que se moveron ou eliminaron márcanse como **Non se atopa o ficheiro**.

- Fai clic nun ficheiro para abrir a súa transcrición, ou fai clic no seu botón `⋯` (ou clic dereito sobre el) para copiar o seu texto, abrilo directamente na súa exportación, resumo ou tradución, mostralo no xestor de ficheiros ou escoller **Volver transcribir este ficheiro**.
- Selecciona varios ficheiros con `Ctrl`/`⌘` ou `Maiús`, ou todos os ficheiros mostrados con `Ctrl+A` / `⌘A`, e escolle **Volver transcribir**, **Exportar…** (para exportalos xuntos nun só ficheiro TXT, Markdown ou Word) ou **Quitar do historial…**. `Enter` abre o ficheiro seleccionado, e `Esc` quita a selección.
- **Reintentar os fallidos** volve transcribir os ficheiros que fallaron. **Volver analizar o cartafol** transcribe só os ficheiros sen transcrición, como os novos, e indica cantos se omitiron porque xa tiñan unha.
- O menú `⋯` do cartafol ten **Volver transcribir todo…** (volve transcribir todos os seus ficheiros, substituíndo as súas transcricións), **Exportar todo…** (nun só ficheiro), unha opción para quitar da lista os ficheiros que faltan, e as opcións para abrir o cartafol de orixe ou o dos ficheiros gardados.
- Cando cambias os axustes do cartafol, indícanse os ficheiros transcritos con outros axustes (motor, modelo, idioma…), co botón **Volver transcribilos**.

A cabeceira mostra onde se gardan os ficheiros e ten unha ligazón ao cartafol de orixe. **Editar a configuración** cambia os axustes do cartafol, e **Gardar e volver analizar** transcribe con eles os ficheiros aos que lles falta unha transcrición.

### Vixía un cartafol

Activa **Vixiar o cartafol** na tarxeta **Cartafol** para seguir transcribindo os ficheiros que se engadan ao cartafol (ou aos seus subcartafoles) ata que fagas clic en **Deixar de vixiar**. É útil para as gravacións dunha gravadora de voz ou dunha ferramenta de reunións que se copian a un cartafol.

- Os ficheiros que xa contén o cartafol omítense, agás que actives **Transcribir os ficheiros que xa hai no cartafol**: entón primeiro transcríbense os que non teñen transcrición.
- Un ficheiro transcríbese cando se copiou por completo (cando o seu tamaño deixa de cambiar), así que os ficheiros grandes non se transcriben a medias.
- Os cartafoles que se estaban vixiando ao pechar Audiotext vólvense vixiar ao abrilo, continuando desde os ficheiros que xa viran. Os cartafoles detidos pódense volver vixiar con **Retomar a vixilancia**.
- Se o cartafol non está dispoñible (p. ex. está nunha unidade que non está conectada), Audiotext espérao en lugar de fallar.
- Para transcribir outra cousa ou gravar, o cartafol ponse en pausa (a nova transcrición indica **Iniciando…** ata que o está) e despois vólvese vixiar.
- Os erros non deteñen a vixilancia, e os ficheiros transcritos á vez avísanse nunha soa notificación.

## A cola

Podes configurar unha nova transcrición mentres hai outra en curso: o botón pasa a ser **Engadir á cola**, e comeza cando remata a actual. As transcricións na cola e en curso móstranse no historial.
