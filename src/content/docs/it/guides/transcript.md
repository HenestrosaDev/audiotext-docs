---
title: La trascrizione
description: Riproduci, cerca, correggi, copia ed esporta una trascrizione, e guarda i video con i loro sottotitoli.
sidebar:
  order: 3
---

Seleziona una trascrizione nella [cronologia](/it/guides/history/) per aprirla. La barra degli strumenti passa tra tre modalità, **Trascrizione**, **Testo semplice** e **Riassunto**, e ha i pulsanti **Traduci**, **Copia** ed **Esporta**.

## Trascrizione

Mostra ogni frase con il suo marcatore temporale e, se i parlanti sono stati identificati, il suo parlante.

I marcatori temporali sono disponibili solo con **WhisperX** e con i modelli `whisper-1` e `gpt-4o-transcribe-diarize` della **API di Whisper**. Senza di essi, la trascrizione non può essere riprodotta frase per frase; usa invece la modalità **Testo semplice**.

### Riproduci l'audio

- **Fai clic su una frase** per riprodurre l'audio da quel punto. La frase in riproduzione viene evidenziata, e il testo segue la riproduzione. Con i tempi per parola, viene evidenziata anche ogni parola.
- Usa la barra del lettore per riprodurre, mettere in pausa, spostarti in qualsiasi punto e cambiare la **velocità**, da `0.5×` a `2×`, mantenendo il tono delle voci.
- Scorciatoie da tastiera: `Spazio` riproduce o mette in pausa, e `←`/`→` tornano indietro o vanno avanti di 5 secondi.

Se il file di origine è stato spostato o eliminato, l'audio non è disponibile, ma il testo sì. Le registrazioni del microfono sono conservate da Audiotext, quindi si possono sempre riprodurre.

![Una trascrizione in riproduzione, con la frase corrente evidenziata](/screenshots/transcript.png)

### Guarda i video con i sottotitoli

Le trascrizioni dei video mostrano il video sopra il testo. Il suo menu permette di **Mostrare i sottotitoli sul video** e di sceglierne la **Dimensione** (piccola, media o grande), la **Posizione** (in basso o in alto) e lo **Stile** (sfondo scuro o contorno).

### Cerca

Premi `Ctrl+F` (`⌘F` su macOS) e digita. `Invio` e `Maiusc+Invio` passano alla corrispondenza successiva e precedente, e `Esc` cancella la ricerca.

## Correggi la trascrizione

Per correggere la trascrizione mantenendo i marcatori temporali (usati dai sottotitoli e dalla riproduzione), usa le opzioni del menu `⋯` o fai clic con il tasto destro su una frase:

- **Trova e sostituisci…**: sostituisce una parola o un'espressione in tutta la trascrizione, es. un nome scritto male. Mostra quante volte compare il testo prima di sostituirlo, e può distinguere **Maiuscole/minuscole**.
- **Rinomina parlanti…**: dà un nome a ogni parlante (`SPEAKER_00` → `Anna`). Dare lo stesso nome a due parlanti li unisce.
- **Modifica il testo…**: fai clic con il tasto destro su una frase per cambiarne il testo.
- **Riproduci da qui**: fai clic con il tasto destro su una frase per riprodurla.

Le parole che non cambiano mantengono i loro tempi, quindi continuano a essere evidenziate durante la riproduzione.

## Testo semplice

La modalità **Testo semplice** permette di modificare liberamente il testo, come in un editor di testo. Le modifiche vengono salvate automaticamente. La trascrizione conserva il testo originale con i marcatori temporali, quindi i sottotitoli non usano le modifiche del testo semplice.

## Copia ed esporta

**Copia** copia il testo della modalità attuale (la trascrizione, il riassunto o la traduzione).

**Esporta** (o `Ctrl+S`, `⌘S` su macOS) salva la trascrizione come:

| Formato | Contenuto |
| --- | --- |
| Testo semplice (`.txt`) | Il testo |
| Markdown (`.md`) | Il riassunto, se presente, e il testo in paragrafi con il marcatore temporale e il parlante di ciascuno |
| Documento Word (`.docx`) | Come il Markdown, pronto da modificare o stampare |
| Sottotitoli (`.srt`) | Sottotitoli per i lettori video |
| Sottotitoli web (`.vtt`) | Sottotitoli per il web |
| Tabella (`.tsv`) | Una riga per frase, con inizio e fine (in millisecondi) e testo |
| JSON (`.json`) | Il testo, i segmenti con marcatori temporali, parole e parlanti, e il riassunto, se presente |

I sottotitoli e la tabella richiedono i marcatori temporali.

## Rinomina, etichetta e aggiungi note

L'intestazione della trascrizione mostra il nome, l'origine, la data e l'etichetta. Fai doppio clic sul nome per rinominarla, fai clic sull'etichetta per cambiarla o fai clic su **Aggiungi nota** per scrivere una nota. Altre opzioni sono nella [cronologia](/it/guides/history/).
