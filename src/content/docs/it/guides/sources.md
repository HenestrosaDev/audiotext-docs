---
title: Origini dell'audio
description: Trascrivi file, video di YouTube e link, registrazioni del microfono, cartelle e cartelle monitorate.
sidebar:
  order: 1
---

Audiotext trascrive da quattro tipi di origine, che scegli nella barra superiore, in **Nuova trascrizione**.

## File

Trascrive un file audio o video. Fai clic su **Scegli file…** o trascina il file nella finestra. L'esplora file mostra **Tutti i file supportati** per impostazione predefinita; puoi mostrare solo i **File audio** o i **File video**. Consulta [Formati e lingue](/it/reference/formats-and-languages/) per i formati supportati.

Si può aggiungere un solo file alla volta. Per trascrivere più file, usa l'origine [Cartella](#cartella).

## URL

Trascrive un **video di YouTube** o un **link diretto a un file audio o video** (ad esempio l'episodio di un podcast). Incolla l'URL (con **Incolla** o `Ctrl+V`) e fai clic su **Continua**. L'URL deve iniziare con `http://` o `https://`.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

Prima viene scaricato l'audio, quindi serve una connessione a Internet.

## Microfono

Registra la tua voce o una riunione e la trascrive. La registrazione resta nella cronologia, così puoi riprodurla in seguito.

1. Scegli il microfono nell'elenco (fai clic sul pulsante di aggiornamento se l'hai appena collegato).
2. Fai clic sul pulsante di registrazione (o premi `Ctrl+Invio`, `⌘↩` su macOS) per iniziare a registrare. Il misuratore di livello ti dice se il suono è **Troppo basso**, a un **Livello buono** o **Troppo alto**.
3. Fai di nuovo clic per fermare e trascrivere.

### Testo dal vivo

Con **WhisperX**, attiva **Mostra testo durante la registrazione** nella scheda **Testo dal vivo** per vedere una bozza del testo mentre parli. La bozza è scritta da un **Modello dal vivo** veloce (`small` per impostazione predefinita). Quando ti fermi, l'intera registrazione viene trascritta di nuovo con il modello del motore, più preciso, e la bozza viene sostituita.

![Il testo in tempo reale durante la registrazione dal microfono](/screenshots/live-text.png)

:::caution
Il sistema deve rilevare un dispositivo di ingresso e consentire all'app di usarlo. Altrimenti viene mostrato **Nessun microfono trovato**. Su macOS, consenti l'accesso ad Audiotext in **Impostazioni di Sistema** → **Privacy e sicurezza** → **Microfono**.
:::

### Registrare l'audio del computer

Per trascrivere ciò che il computer riproduce (una videochiamata, un webinar, un video che non si può scaricare), registralo da un dispositivo che invia il suono degli altoparlanti a un ingresso. Configuralo una volta, fai clic sul pulsante di aggiornamento e sceglilo nell'elenco dei microfoni. Viene registrato tutto ciò che il computer riproduce, notifiche comprese, ma non la tua voce.

- **Windows**: esegui `mmsys.cpl` e, nella scheda **Registrazione**, fai clic destro sull'elenco per mostrare i dispositivi disattivati e attiva **Missaggio stereo**. Se la tua scheda audio non lo ha, installa [VB-CABLE](https://vb-audio.com/Cable/), imposta **CABLE Input** come dispositivo di uscita e scegli **CABLE Output** in Audiotext. Per continuare a sentire il suono, seleziona **Ascolta questo dispositivo** nelle proprietà di **CABLE Output**.
- **macOS**: installa [BlackHole](https://existential.audio/blackhole/) (`brew install blackhole-2ch`) e scegli **BlackHole 2ch** in Audiotext. Per continuare a sentire il suono, crea un [dispositivo a uscita multipla](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) con i tuoi altoparlanti e BlackHole, e impostalo come dispositivo di uscita.
- **Linux** (PulseAudio o PipeWire): scegli **pulse** in Audiotext e avvia la registrazione. Poi, nella scheda **Registrazione** di `pavucontrol`, cambia la sorgente di Audiotext con il monitor dei tuoi altoparlanti.

## Cartella

Trascrive tutti i file audio e video di una cartella e, se **Includi sottocartelle** è attivo nella scheda **Cartella**, delle sue sottocartelle. Fai clic su **Scegli cartella…** o trascina la cartella nella finestra. Audiotext ti dice quanti file ha trovato. Per escludere alcuni file, scrivi i loro nomi o percorsi, separati da virgole, in **Salta i file corrispondenti a** (ad es. `*.wav, drafts/*`). I file nascosti vengono sempre saltati.

La trascrizione di ogni file viene salvata accanto a esso (o in un'altra cartella che scegli nella scheda **Output**), con lo stesso nome e l'estensione di ogni **tipo di file** selezionato. Ad esempio, con `.txt` e `.vtt`:

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

Se due file hanno lo stesso nome e un'estensione diversa (ad es. `talk.mp3` e `talk.mp4`), le loro trascrizioni mantengono l'estensione nel nome (`talk.mp3.txt` e `talk.mp4.txt`), così non si sostituiscono a vicenda.

I file che hanno già una trascrizione vengono **saltati**: un file viene saltato solo se ha tutti i tipi di file selezionati, quindi aggiungere un tipo di file lo trascrive di nuovo. Se un file non può essere trascritto, gli altri vengono trascritti comunque.

### I file di una cartella

La pagina di una cartella nella cronologia elenca i suoi file, con lo stato, la durata e la dimensione di ciascuno e un'anteprima del testo. Cercali, filtrali per stato (**Tutti**, **Completati**, **Non riusciti** o **In sospeso**) e ordinali per nome, stato, durata o dimensione. I file spostati o eliminati sono segnati come **File non trovato**.

- Fai clic su un file per aprire la sua trascrizione, oppure fai clic sul suo pulsante `⋯` (o clic destro su di esso) per copiarne il testo, aprirlo direttamente nell'esportazione, nel riassunto o nella traduzione, mostrarlo nel gestore file o scegliere **Trascrivi di nuovo questo file**.
- Seleziona più file con `Ctrl`/`⌘` o `Maiusc`, o tutti i file mostrati con `Ctrl+A` / `⌘A`, e scegli **Trascrivi di nuovo**, **Esporta…** (per esportarli insieme in un unico file TXT, Markdown o Word) o **Rimuovi dalla cronologia…**. `Invio` apre il file selezionato, ed `Esc` annulla la selezione.
- **Riprova i non riusciti** trascrive di nuovo i file non riusciti. **Analizza di nuovo la cartella** trascrive solo i file senza trascrizione, come quelli nuovi, e indica quanti sono stati saltati perché ne avevano già una.
- Il menu `⋯` della cartella ha **Trascrivi tutto di nuovo…** (trascrive di nuovo tutti i suoi file, sostituendo le loro trascrizioni), **Esporta tutto…** (in un unico file), un'opzione per togliere dall'elenco i file mancanti, e le opzioni per aprire la cartella di origine o quella dei file salvati.
- Quando cambi le impostazioni della cartella, vengono indicati i file trascritti con altre impostazioni (motore, modello, lingua…), con il pulsante **Trascrivili di nuovo**.

L'intestazione mostra dove vengono salvati i file e rimanda alla cartella di origine. **Modifica impostazioni** cambia le impostazioni della cartella, e **Salva e analizza di nuovo** trascrive con esse i file a cui manca una trascrizione.

### Monitora una cartella

Attiva **Monitora cartella** nella scheda **Cartella** per continuare a trascrivere i file aggiunti alla cartella (o alle sue sottocartelle) finché non fai clic su **Interrompi monitoraggio**. È utile per le registrazioni di un registratore vocale o di uno strumento per riunioni che vengono copiate in una cartella.

- I file che la cartella contiene già vengono saltati, a meno che tu non attivi **Trascrivi i file già presenti nella cartella**: in tal caso quelli senza trascrizione vengono trascritti per primi.
- Un file viene trascritto quando è stato copiato completamente (quando la sua dimensione smette di cambiare), quindi i file grandi non vengono trascritti a metà.
- Le cartelle monitorate alla chiusura di Audiotext vengono monitorate di nuovo alla sua apertura, riprendendo dai file che avevano già visto. Le cartelle fermate si possono monitorare di nuovo con **Riprendi monitoraggio**.
- Se la cartella non è disponibile (ad es. si trova su un'unità non collegata), Audiotext la aspetta invece di fallire.
- Per trascrivere altro o registrare, la cartella viene messa in pausa (la nuova trascrizione mostra **Avvio…** finché non lo è) e poi monitorata di nuovo.
- Gli errori non fermano il monitoraggio, e i file trascritti insieme vengono segnalati in un'unica notifica.

## La coda

Puoi configurare una nuova trascrizione mentre un'altra è in corso: il pulsante diventa **Aggiungi alla coda**, e inizia quando finisce quella attuale. Le trascrizioni in coda e in corso sono mostrate nella cronologia.
