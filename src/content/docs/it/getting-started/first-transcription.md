---
title: La tua prima trascrizione
description: Un giro nella finestra di Audiotext e i passaggi per trascrivere un file audio o video.
sidebar:
  order: 2
---

## La finestra

La finestra di Audiotext ha tre parti:

- **La barra superiore**: i pulsanti per avviare una **Nuova trascrizione** da un **File**, un **URL**, il **Microfono** o una **Cartella**, lo stato dell'app e l'ingranaggio che apre le [Preferenze](/it/reference/preferences/). Il pulsante a sinistra mostra o nasconde la cronologia.
- **La cronologia**, a sinistra: tutte le tue trascrizioni, che puoi cercare, fissare, raggruppare e rinominare. Consulta [Cronologia](/it/guides/history/).
- **L'area principale**: l'origine che stai configurando, l'avanzamento di una trascrizione o la trascrizione selezionata nella cronologia.

![Le parti della finestra di Audiotext: la barra superiore, la cronologia e l'area principale](/screenshots/window.png)

Quando apri l'app, l'area principale chiede **Cosa vuoi trascrivere?** e mostra una scheda per ogni tipo di origine.

:::tip
Trascina un file o una cartella in un punto qualsiasi della finestra per trascriverlo.
:::

## Trascrivi un file

1. Fai clic su **File** nella barra superiore (o premi `Ctrl+O`, `⌘O` su macOS) e scegli un file audio o video, oppure trascinalo nella finestra. Poi fai clic su **Continua**.
2. Controlla le impostazioni. I valori predefiniti vanno bene per la maggior parte degli audio:
   - **Motore**: WhisperX, che funziona sul tuo computer. Scegli un **Modello** più piccolo (come `small`) se il computer è lento.
   - **Lingua**: la **Lingua dell'audio** viene rilevata automaticamente. Sceglila se la conosci, per evitare errori. Per tradurre, scegli un'altra **Lingua della trascrizione**.
   - **Contesto** e **Opzioni**: suggerimenti e funzioni facoltativi, come identificare i parlanti.

   Consulta [Impostazioni della trascrizione](/it/guides/transcription-settings/) per vederle tutte.
3. Fai clic su **Avvia la trascrizione** (o premi `Ctrl+Invio`, `⌘↩` su macOS).

Mentre lavora, viene mostrato l'avanzamento di ogni passaggio (caricamento del modello, trascrizione, allineamento delle parole…). Nel frattempo puoi continuare a usare Audiotext: il risultato viene salvato nella cronologia e si apre quando è pronto. Per annullarla, fai clic su **Annulla** o premi `Esc`.

Se c'è un'altra trascrizione in corso, il pulsante diventa **Aggiungi alla coda**, e la nuova inizia quando finisce quella attuale.

## Leggi e usa il risultato

Quando finisce, la trascrizione si apre:

- Fai clic su una frase per riprodurre l'audio da quel punto.
- Passa tra **Trascrizione**, **Testo semplice** e **Riassunto**.
- Usa **Traduci**, **Copia** ed **Esporta** per tradurla, copiarla o salvarla come file.

Consulta [La trascrizione](/it/guides/transcript/) per scoprire tutto quello che puoi farci.

## Scorciatoie da tastiera

| Scorciatoia | Azione |
| --- | --- |
| `Ctrl+Invio` / `⌘↩` | Avviare la trascrizione, o avviare e fermare la registrazione |
| `Ctrl+O` / `⌘O` | Scegliere un file (o una cartella, nell'origine cartella) |
| `Ctrl+S` / `⌘S` | Esportare la trascrizione mostrata |
| `Ctrl+F` / `⌘F` | Cercare nella trascrizione |
| `Esc` | Annullare la trascrizione in corso |
| `Spazio` | Riprodurre o mettere in pausa l'audio |
| `←` / `→` | Tornare indietro o andare avanti di 5 secondi |
