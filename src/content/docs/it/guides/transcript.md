---
title: La trascrizione
description: Riproduci, cerca, correggi, rivedi, copia ed esporta una trascrizione, e guarda o esporta i video con i loro sottotitoli.
sidebar:
  order: 3
---

Seleziona una trascrizione nella [cronologia](/it/guides/history/) per aprirla. La barra degli strumenti passa tra quattro modalità, **Sottotitoli**, **Testo semplice**, **Riassunto** e **Chiedi**, e ha il pulsante **Traduci** e il menu `⋯`.

La trascrizione è mostrata in una scheda intitolata con la sua lingua. I pulsanti della sua intestazione trovano e sostituiscono nel testo, lo copiano, lo esportano e lo trascrivono di nuovo (**Trascrivi di nuovo**, dopo averti chiesto conferma, perché le correzioni del testo vanno perse).

## Sottotitoli

Mostra la trascrizione divisa nei sottotitoli del video, con l'inizio e la fine di ognuno e, se i parlanti sono stati identificati, il suo parlante. La loro lunghezza segue le [preferenze dei sottotitoli](/it/reference/preferences/#sottotitoli).

Per impostazione predefinita, i tempi sono mostrati al millisecondo, come nei sottotitoli (`00:01:05,900 – 00:01:09,350`). Per semplificarli (`01:05 – 01:09`), deseleziona **Marche temporali precise (HH:MM:SS,mmm)** nel menu `⋯`.

Sopra i sottotitoli, una riga li conta e, se i parlanti sono stati identificati, conta anche loro (ad es. `Sottotitoli: 120 · Parlanti: 3`). Un segmento lungo diviso in più sottotitoli conta come più sottotitoli.

I marcatori temporali sono disponibili solo con **WhisperX** e con i modelli `whisper-1` e `gpt-4o-transcribe-diarize` della **API di Whisper**. Senza di essi, la trascrizione non può essere riprodotta sottotitolo per sottotitolo; usa invece la modalità **Testo semplice**.

### Riproduci l'audio

- **Fai clic su un sottotitolo** per riprodurre l'audio da quel punto. Il sottotitolo in riproduzione viene evidenziato e mantenuto al centro del testo. Con i tempi per parola, viene evidenziata anche ogni parola.
- Usa la barra del lettore per riprodurre, mettere in pausa, spostarti in qualsiasi punto e cambiare la **velocità**, da `0.5×` a `2×`, mantenendo il tono delle voci.
- Scorciatoie da tastiera: `Spazio` riproduce o mette in pausa, e `←`/`→` tornano indietro o vanno avanti di 5 secondi.

Se il file di origine è stato spostato o eliminato, l'audio non è disponibile, ma il testo sì. Le registrazioni del microfono sono conservate da Audiotext, quindi si possono sempre riprodurre.

![Una trascrizione in riproduzione, con il segmento corrente evidenziato](/screenshots/transcript.png)

### Guarda i video con i sottotitoli

Le trascrizioni dei video mostrano il video sopra il testo. Il suo menu permette di **Mostra sottotitoli sul video** e di sceglierne la **Dimensione** (piccola, media o grande), la **Posizione** (in basso o in alto) e lo **Stile** (sfondo scuro o contorno). Se la trascrizione ha delle [traduzioni](/it/guides/summary-and-translation/#traduzione), il menu permette anche di scegliere se i sottotitoli mostrano la **Trascrizione** o la **Traduzione in…** una lingua. Anche il pulsante **Sottotitoli** della barra del lettore li mostra o li nasconde, e la freccia accanto apre lo stesso menu.

## Trova e sostituisci

Premi `Ctrl+F` (`⌘F` su macOS), o fai clic sulla lente dell'intestazione, per aprire la finestra per trovare e sostituire nel testo su cui stai lavorando: la trascrizione o la sua traduzione. Trova il testo mentre lo digiti (i marcatori temporali e i parlanti non vengono cercati) e mostra quante corrispondenze ci sono.

- `Invio` e `Maiusc+Invio`, o le frecce, passano alla corrispondenza successiva e precedente.
- **Sostituisci** sostituisce la corrispondenza attuale, e **Sostituisci tutto** tutte, es. un nome scritto male. Seleziona **Maiuscole/minuscole** per trovare solo il testo con le stesse maiuscole.
- La finestra non è modale, quindi puoi leggere e riprodurre il testo mentre è aperta. **Mantieni in primo piano** la tiene sopra la finestra principale.
- `Esc` la chiude.

Nella modalità **Testo semplice**, la finestra cerca soltanto (**Cerca nella trascrizione**), perché lì una corrispondenza non può essere ricondotta a un sottotitolo. Torna a **Sottotitoli** per sostituire.

## Correggi la trascrizione

Per correggere la trascrizione mantenendo i marcatori temporali (usati dai sottotitoli e dalla riproduzione), usa la finestra [Trova e sostituisci](#trova-e-sostituisci) o fai clic con il tasto destro su un sottotitolo:

- **Riproduci da qui**: lo riproduce.
- **Copia**: ne copia il testo.
- **Modifica testo…**: ne cambia il testo.
- **Rinomina parlanti…**: dà un nome a ogni parlante (`SPEAKER_00` → `Anna`). Dare lo stesso nome a due parlanti li unisce. È anche nel menu `⋯`.

Le parole che non cambiano mantengono i loro tempi, quindi continuano a essere evidenziate durante la riproduzione.

## Rivedi le parole a bassa affidabilità

Le parole di cui il motore è meno sicuro vengono sottolineate, così sai dove rileggere per prime. WhisperX valuta ogni parola quando ne calcola i tempi (**Tempi per parola**, attivo per impostazione predefinita), e il modello `whisper-1` della API di Whisper valuta ogni segmento, quindi i suoi segmenti vengono sottolineati interi.

Una barra sopra il testo mostra quante parole restano da rivedere (es. `3 di 12 da rivedere`):

- Le sue frecce, o `Ctrl+J` e `Maiusc+Ctrl+J` (`⌘J` e `⇧⌘J` su macOS), passano alla parola successiva e precedente, e vi spostano il lettore. Con **Riproduzione automatica**, ogni parola viene riprodotta con un momento intorno.
- `Invio` accetta così com'è la parola a cui sei andato, e passa alla successiva. **Accetta le restanti** accetta tutte quelle rimaste, e **Annulla** annulla l'ultima revisione.
- Fai clic su una parola per correggerla sul posto: digita il testo corretto e premi `Invio` (o **Accetta** senza modifiche). **Riascolta** (`Ctrl+R`, `⌘R` su macOS) la riproduce di nuovo, e `Esc` chiude.
- **Solo segnalate** mostra solo i sottotitoli con parole da rivedere.
- Le parole sono segnate anche sotto la posizione dell'audio. Fai clic su un segno per andare alla sua parola.

Quando sono tutte riviste, **Rivedi di nuovo le parole accettate** riporta le parole che hai accettato. Le parole corrette restano riviste.

Le parole vengono sottolineate quando la loro valutazione è inferiore al 40%. Scegli un'altra soglia, dal 20% al 70%, in `⋯` → **Soglia di bassa affidabilità**, o da **Regola la soglia** nella barra. Per non sottolinearle più e nascondere la barra, deseleziona **Evidenzia le parole a bassa affidabilità** nel menu `⋯`.

Se una trascrizione non ha valutazioni, il menu `⋯` dice perché: **Attiva «Tempi per parola» e trascrivilo di nuovo**, **Non c’è un modello di allineamento per la sua lingua**, **Trascrivilo di nuovo per valutarne le parole** (è stata fatta prima che le parole venissero valutate) o **Solo WhisperX e whisper-1 valutano le parole**.

## Testo semplice

La modalità **Testo semplice** mostra il testo della trascrizione senza marcatori temporali. È costruito dai sottotitoli, quindi è di sola lettura, come dice la nota accanto alle modalità: per cambiarlo, [correggi i sottotitoli](#correggi-la-trascrizione), e il testo semplice li segue. Così, tutte le esportazioni e le traduzioni usano lo stesso testo.

Le trascrizioni senza marcatori temporali (ad es. della API di Google) non hanno sottotitoli, quindi il loro testo semplice si può modificare liberamente, come in un editor di testo. Le modifiche vengono salvate automaticamente.

:::note
Le versioni precedenti permettevano di modificare il testo semplice delle trascrizioni con sottotitoli. Quando si apre una di quelle trascrizioni (o traduzioni), il suo testo semplice viene ricostruito dai sottotitoli, quindi quelle modifiche vengono sostituite.
:::

## Copia ed esporta

Il pulsante di copia dell'intestazione copia il testo della trascrizione.

Il pulsante di esportazione (o `Ctrl+S`, `⌘S` su macOS) la salva come:

| Formato | Contenuto |
| --- | --- |
| Documento Word (`.docx`) | Come il Markdown, pronto da modificare o stampare |
| JSON (`.json`) | Il testo, i segmenti con marcatori temporali, parole e parlanti, e il riassunto, se presente |
| Markdown (`.md`) | Il riassunto, se presente, e il testo in paragrafi con il marcatore temporale e il parlante di ciascuno |
| Sottotitoli (`.srt`) | Sottotitoli per i lettori video |
| Sottotitoli con stile (`.ass`) | Sottotitoli con un colore per ogni parlante, per lettori ed editor video |
| Sottotitoli web (`.vtt`) | Sottotitoli per il web |
| Tabella (`.tsv`) | Una riga per segmento, con inizio e fine (in millisecondi) e testo |
| Testo semplice (`.txt`) | Il testo |

I sottotitoli e la tabella richiedono i marcatori temporali. Le [traduzioni](/it/guides/summary-and-translation/#sottotitoli-ed-esportazione) e il [riassunto](/it/guides/summary-and-translation/#riassunto) si esportano dai loro pannelli.

### Esporta il video con i sottotitoli

Per condividere un video dove non si possono caricare file di sottotitoli (es. un social network), scegli **Video con sottotitoli (.mp4)…** nel menu di esportazione della trascrizione, o di una traduzione. Audiotext crea una copia del video con i sottotitoli disegnati sopra, come vengono mostrati nell'app: con la loro dimensione, posizione e stile (consulta [Guarda i video con i sottotitoli](#guarda-i-video-con-i-sottotitoli)).

Viene creata in background, e lo stato ne mostra l'avanzamento. Per annullarla, scegli **Interrompi aggiunta dei sottotitoli al video** nello stesso menu. La copia è un file MP4 (video H.264 e audio AAC), e il video originale non cambia.

Se nessun font del tuo sistema contiene alcuni caratteri dei sottotitoli, vengono disegnati come riquadri, e Audiotext li elenca alla fine. Consulta [Risoluzione dei problemi](/it/help/troubleshooting/#il-video-con-sottotitoli-mostra-riquadri).

## Rinomina, etichetta e aggiungi note

L'intestazione della trascrizione mostra il nome, l'origine, la data e l'etichetta. Fai doppio clic sul nome per rinominarla, fai clic sull'etichetta per cambiarla o fai clic su **Aggiungi nota** per scrivere una nota. Fai clic sulla nota, o sulla sua matita, per modificarla, e sul suo cestino per eliminarla.

Il menu `⋯` ha anche queste opzioni, e apre la cartella del file di origine o la **cartella dei file salvati**. Altre opzioni sono nella [cronologia](/it/guides/history/).
