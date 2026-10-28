---
title: Orígens de l'àudio
description: Transcriu fitxers, vídeos de YouTube i enllaços, enregistraments del micròfon, carpetes i carpetes vigilades.
sidebar:
  order: 1
---

Audiotext transcriu des de quatre tipus d'origen, que tries a la barra superior, a **Transcripció nova**.

## Fitxer

Transcriu un fitxer d'àudio o vídeo. Fes clic a **Tria fitxer…** o deixa anar el fitxer a la finestra. L'explorador de fitxers mostra **Tots els fitxers compatibles** per defecte; pots mostrar només **Fitxers d'àudio** o **Fitxers de vídeo**. Consulta [Formats i idiomes](/ca/reference/formats-and-languages/) per veure els formats compatibles.

Només es pot afegir un fitxer alhora. Per transcriure'n diversos, fes servir l'origen [Carpeta](#carpeta).

## URL

Transcriu un **vídeo de YouTube** o un **enllaç directe a un fitxer d'àudio o vídeo** (per exemple, l'episodi d'un pòdcast). Enganxa l'URL (amb **Enganxa** o `Ctrl+V`) i fes clic a **Continua**. L'URL ha de començar per `http://` o `https://`.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

Primer es descarrega l'àudio, així que necessita connexió a Internet.

## Micròfon

Enregistra la teva veu o una reunió i la transcriu. L'enregistrament es desa a l'historial, perquè el puguis reproduir més tard.

1. Tria el micròfon a la llista (fes clic al botó d'actualitzar si l'acabes de connectar).
2. Fes clic al botó d'enregistrar (o prem `Ctrl+Enter`, `⌘↩` a macOS) per començar a enregistrar. El mesurador de nivell t'indica si el so és **Massa baix**, té un **Bon nivell** o és **Massa alt**.
3. Torna-hi a fer clic per aturar-lo i transcriure'l.

### Text en directe

Amb **WhisperX**, activa **Mostra el text mentre s'enregistra** a la targeta **Text en directe** per veure un esborrany del text mentre parles. L'esborrany l'escriu un **Model en directe** ràpid (`small` per defecte). En aturar-lo, tot l'enregistrament es torna a transcriure amb el model del motor, que és més precís, i l'esborrany se substitueix.

![El text en directe mentre es grava amb el micròfon](/screenshots/live-text.png)

:::caution
El sistema ha de detectar un dispositiu d'entrada i permetre que l'aplicació el faci servir. Si no, es mostra **No s'ha trobat cap micròfon**. A macOS, permet l'accés a Audiotext a **Configuració del Sistema** → **Privacitat i seguretat** → **Micròfon**.
:::

### Gravar l'àudio de l'ordinador

Per transcriure el que reprodueix l'ordinador (una videotrucada, un webinar, un vídeo que no es pot baixar), grava'l des d'un dispositiu que enviï el so dels altaveus a una entrada. Configura'l una vegada, fes clic al botó d'actualitzar i tria'l a la llista de micròfons. Es grava tot el que reprodueix l'ordinador, també les notificacions, però no la teva veu.

- **Windows**: executa `mmsys.cpl` i, a la pestanya **Enregistrament**, fes clic dret a la llista per mostrar els dispositius desactivats i activa **Mescla estèreo**. Si la targeta de so no en té, instal·la [VB-CABLE](https://vb-audio.com/Cable/), posa **CABLE Input** com a dispositiu de sortida i tria **CABLE Output** a Audiotext. Per continuar sentint el so, marca **Escolta aquest dispositiu** a les propietats de **CABLE Output**.
- **macOS**: instal·la [BlackHole](https://existential.audio/blackhole/) (`brew install blackhole-2ch`) i tria **BlackHole 2ch** a Audiotext. Per continuar sentint el so, crea un [dispositiu de sortida múltiple](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) amb els altaveus i BlackHole, i posa'l com a dispositiu de sortida.
- **Linux** (PulseAudio o PipeWire): tria **pulse** a Audiotext i comença a gravar. Després, a la pestanya **Enregistrament** de `pavucontrol`, canvia la font d'Audiotext pel monitor dels altaveus.

## Carpeta

Transcriu tots els fitxers d'àudio i vídeo d'una carpeta i, si **Inclou les subcarpetes** està activat a la targeta **Carpeta**, de les seves subcarpetes. Fes clic a **Tria carpeta…** o deixa anar la carpeta a la finestra. Audiotext t'indica quants fitxers ha trobat. Per deixar fora alguns fitxers, escriu-ne els noms o els camins, separats per comes, a **Omet els fitxers que coincideixin amb** (p. ex. `*.wav, drafts/*`). Els fitxers ocults sempre s'ometen.

La transcripció de cada fitxer es desa al costat seu (o en una altra carpeta que triïs a la targeta **Sortida**), amb el mateix nom i l'extensió de cada **tipus de fitxer** que hagis seleccionat. Per exemple, amb `.txt` i `.vtt`:

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

Si dos fitxers tenen el mateix nom i una extensió diferent (p. ex. `talk.mp3` i `talk.mp4`), les seves transcripcions mantenen l'extensió al nom (`talk.mp3.txt` i `talk.mp4.txt`), perquè no se substitueixin entre elles.

Els fitxers que ja tenen una transcripció **s'ometen**: un fitxer només s'omet si té tots els tipus de fitxer que has seleccionat, així que afegir-hi un tipus de fitxer el torna a transcriure. Si un fitxer no es pot transcriure, la resta es continuen transcrivint.

### Els fitxers d'una carpeta

La pàgina d'una carpeta a l'historial n'enumera els fitxers, amb l'estat, la durada i la mida de cadascun i una previsualització del seu text. Cerca'ls, filtra'ls per estat (**Tots**, **Completats**, **Amb errors** o **Pendents**) i ordena'ls per nom, estat, durada o mida. Els fitxers que s'han mogut o eliminat es marquen com a **No s'ha trobat el fitxer**.

- Fes clic a un fitxer per obrir-ne la transcripció, o fes clic al seu botó `⋯` (o fes-hi clic amb el botó dret) per copiar-ne el text, obrir-lo directament a la seva exportació, resum o traducció, mostrar-lo al gestor de fitxers o triar **Torna a transcriure aquest fitxer**.
- Selecciona diversos fitxers amb `Ctrl`/`⌘` o `Maj`, o tots els fitxers que es mostren amb `Ctrl+A` / `⌘A`, i tria **Torna a transcriure**, **Exporta…** (per exportar-los junts en un sol fitxer TXT, Markdown o Word) o **Treu de l'historial…**. `Enter` obre el fitxer seleccionat, i `Esc` esborra la selecció.
- **Reintenta els fallits** torna a transcriure els fitxers que han fallat. **Torna a analitzar la carpeta** transcriu només els fitxers sense transcripció, com els nous, i indica quants s'han omès perquè ja en tenien una.
- El menú `⋯` de la carpeta té **Torna a transcriure-ho tot…** (torna a transcriure tots els seus fitxers, substituint-ne les transcripcions), **Exporta-ho tot…** (en un sol fitxer), una opció per treure de la llista els fitxers que falten, i les opcions per obrir la carpeta d'origen o la carpeta dels fitxers desats.
- Quan canvies els ajustos de la carpeta, s'indiquen els fitxers transcrits amb altres ajustos (motor, model, idioma…), amb el botó **Torna a transcriure'ls**.

La capçalera mostra on es desen els fitxers i enllaça amb la carpeta d'origen. **Edita la configuració** canvia els ajustos de la carpeta, i **Desa i torna a analitzar** transcriu amb ells els fitxers als quals els falta una transcripció.

### Vigila una carpeta

Activa **Vigila carpeta** a la targeta **Carpeta** per continuar transcrivint els fitxers que s'afegeixin a la carpeta (o a les seves subcarpetes) fins que facis clic a **Deixa de vigilar**. És útil per als enregistraments d'una gravadora de veu o d'una eina de reunions que es copien a una carpeta.

- Els fitxers que ja conté la carpeta s'ometen, llevat que activis **Transcriu els fitxers que ja hi ha a la carpeta**: aleshores primer es transcriuen els que no tenen transcripció.
- Un fitxer es transcriu quan s'ha copiat del tot (quan la seva mida deixa de canviar), així que els fitxers grans no es transcriuen a mitges.
- Les carpetes que es vigilaven quan es va tancar Audiotext es tornen a vigilar quan s'obre, continuant des dels fitxers que ja havien vist. Les carpetes aturades es poden tornar a vigilar amb **Reprèn la vigilància**.
- Si la carpeta no està disponible (p. ex. és en una unitat que no està connectada), Audiotext l'espera en lloc de fallar.
- Per transcriure una altra cosa o enregistrar, la carpeta es posa en pausa (la nova transcripció diu **S'està iniciant…** fins que ho està) i després es torna a vigilar.
- Els errors no aturen la vigilància, i els fitxers transcrits alhora es notifiquen en una sola notificació.

## La cua

Pots configurar una transcripció nova mentre n'hi ha una altra en curs: el botó passa a ser **Afegeix a la cua**, i comença quan acaba l'actual. Les transcripcions a la cua i en curs es mostren a l'historial.
