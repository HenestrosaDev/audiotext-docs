---
title: La teva primera transcripció
description: Un recorregut per la finestra d'Audiotext i els passos per transcriure un fitxer d'àudio o vídeo.
sidebar:
  order: 2
---

## La finestra

La finestra d'Audiotext té tres parts:

- **La barra superior**: els botons per començar una **Transcripció nova** des d'un **Fitxer**, una **URL**, el **Micròfon** o una **Carpeta**, l'estat de l'aplicació i l'engranatge que obre les [Preferències](/ca/reference/preferences/). El botó de l'esquerra mostra o amaga l'historial.
- **L'historial**, a l'esquerra: totes les teves transcripcions, que pots cercar, fixar, agrupar i reanomenar. Consulta [Historial](/ca/guides/history/).
- **L'àrea principal**: l'origen que estàs configurant, el progrés d'una transcripció o la transcripció que has seleccionat a l'historial.

![Les parts de la finestra d'Audiotext: la barra superior, l'historial i l'àrea principal](/screenshots/window.png)

En obrir l'aplicació, l'àrea principal pregunta **Què vols transcriure?** i mostra una targeta per a cada tipus d'origen.

:::tip
Deixa anar un fitxer o una carpeta a qualsevol lloc de la finestra per transcriure'l.
:::

## Transcriu un fitxer

1. Fes clic a **Fitxer** a la barra superior (o prem `Ctrl+O`, `⌘O` a macOS) i tria un fitxer d'àudio o vídeo, o deixa'l anar a la finestra. Després, fes clic a **Continua**.
2. Revisa la configuració. Els valors per defecte funcionen bé per a la majoria d'àudios:
   - **Motor**: WhisperX, que s'executa al teu ordinador. Tria un **Model** més petit (com `small`) si l'ordinador és lent.
   - **Idioma**: l'**Idioma de l'àudio** es detecta automàticament. Tria'l si el saps, per evitar errors. Per traduir, tria un altre **Idioma de la transcripció**.
   - **Context** i **Opcions**: pistes i funcions opcionals, com identificar els parlants.

   Consulta [Configuració de la transcripció](/ca/guides/transcription-settings/) per veure-les totes.
3. Fes clic a **Comença la transcripció** (o prem `Ctrl+Enter`, `⌘↩` a macOS).

Mentre treballa, es mostra el progrés de cada pas (carregar el model, transcriure, alinear les paraules…). Mentrestant, pots continuar fent servir Audiotext: el resultat es desa a l'historial i s'obre quan està llest. Per cancel·lar-la, fes clic a **Cancel·la** o prem `Esc`.

Si hi ha una altra transcripció en curs, el botó passa a ser **Afegeix a la cua**, i la nova comença quan acaba l'actual.

## Llegeix i fes servir el resultat

Quan acaba, s'obre la transcripció:

- Fes clic en un segment per reproduir l'àudio des d'aquell punt.
- Canvia entre **Subtítols**, **Text pla**, **Resum** i **Pregunta**, per fer-hi preguntes.
- Fes servir **Tradueix** per traduir-la, i els botons de la capçalera de la transcripció per cercar-hi i substituir, copiar-la o desar-la com a fitxer.
- Revisa les paraules subratllades, de què el motor està menys segur.

Consulta [La transcripció](/ca/guides/transcript/) per saber tot el que hi pots fer.

## Dreceres de teclat

| Drecera | Acció |
| --- | --- |
| `Ctrl+Enter` / `⌘↩` | Començar la transcripció, o començar i aturar l'enregistrament |
| `Ctrl+O` / `⌘O` | Triar un fitxer (o una carpeta, a l'origen de carpeta) |
| `Ctrl+S` / `⌘S` | Exportar el text amb què treballes: la transcripció o la seva traducció |
| `Ctrl+F` / `⌘F` | Cercar i substituir al text amb què treballes (o cercar al resum) |
| `Ctrl+J` / `⌘J` | Anar a la paraula de baixa confiança següent |
| `Maj+Ctrl+J` / `⇧⌘J` | Anar a la paraula de baixa confiança anterior |
| `Esc` | Cancel·lar la transcripció en curs (o esborrar la selecció de fitxers d'una carpeta) |
| `Ctrl+A` / `⌘A` | Seleccionar tots els fitxers que es mostren d'una carpeta |
| `Enter` | Obrir el fitxer seleccionat d'una carpeta |
| `Espai` | Reproduir o posar en pausa l'àudio |
| `←` / `→` | Retrocedir o avançar 5 segons |
