---
title: Origini dell'audio
description: Trascrivi file, video di YouTube e link, registrazioni del microfono, cartelle e cartelle monitorate.
sidebar:
  order: 1
---

Audiotext trascrive da quattro tipi di origine, che scegli nella barra superiore, in **Nuova trascrizione**.

## File

Trascrive un file audio o video. Fai clic su **Scegli un file…** o trascina il file nella finestra. L'esplora file mostra **Tutti i file supportati** per impostazione predefinita; puoi mostrare solo i **File audio** o i **File video**. Consulta [Formati e lingue](/it/reference/formats-and-languages/) per i formati supportati.

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

Con **WhisperX**, attiva **Mostra il testo durante la registrazione** nella scheda **Testo dal vivo** per vedere una bozza del testo mentre parli. La bozza è scritta da un **Modello dal vivo** veloce (`small` per impostazione predefinita). Quando ti fermi, l'intera registrazione viene trascritta di nuovo con il modello del motore, più preciso, e la bozza viene sostituita.

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

Trascrive tutti i file audio e video di una cartella **e delle sue sottocartelle**. Fai clic su **Scegli una cartella…** o trascina la cartella nella finestra. Audiotext ti dice quanti file ha trovato.

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

I file che hanno già una trascrizione **vengono saltati**, a meno che tu non attivi **Sovrascrivi i file esistenti**. Così, se aggiungi un file alla cartella e la trascrivi di nuovo, viene trascritto solo il file nuovo.

Se un file non può essere trascritto, gli altri vengono trascritti comunque, e la vista della cartella mostra quali non sono riusciti e perché. **Trascrivi di nuovo** ripete la cartella, e il pulsante della cartella apre la cartella dei file salvati.

### Monitora una cartella

Attiva **Monitora la cartella** nella scheda **Cartella** per continuare a trascrivere i file aggiunti alla cartella (o alle sue sottocartelle) finché non fai clic su **Interrompi monitoraggio**. È utile per le registrazioni di un registratore vocale o di uno strumento per riunioni che vengono copiate in una cartella.

- I file già presenti nella cartella vengono saltati. Per trascriverli, trascrivi la cartella senza monitorarla.
- Un file viene trascritto quando è stato copiato completamente (quando la sua dimensione smette di cambiare), quindi i file grandi non vengono trascritti a metà.
- Gli errori non interrompono il monitoraggio.

## La coda

Puoi configurare una nuova trascrizione mentre un'altra è in corso: il pulsante diventa **Aggiungi alla coda**, e inizia quando finisce quella attuale. Le trascrizioni in coda e in corso sono mostrate nella cronologia.
