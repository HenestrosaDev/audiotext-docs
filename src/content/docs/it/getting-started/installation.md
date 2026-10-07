---
title: Installazione
description: Scarica Audiotext per Windows, macOS o Linux e aprilo per la prima volta.
sidebar:
  order: 1
---

Audiotext è un'app desktop per **Windows**, **macOS** e **Linux**. Trascrive in testo l'audio di file, video di YouTube e registrazioni del microfono, e può tradurlo, riassumerlo e sottotitolarlo.

## Scarica l'app

Scarica il file per il tuo sistema dall'[ultima versione](https://github.com/HenestrosaDev/audiotext/releases/latest) su GitHub:

| Sistema | File |
| --- | --- |
| Windows (64 bit) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 o successivo (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

L'app include tutto ciò che le serve, FFmpeg compreso.

### Windows

Esegui il programma di installazione e segui i passaggi. Non servono permessi di amministratore. Se hai una GPU NVIDIA, seleziona l'opzione per usare la GPU NVIDIA (CUDA): il programma di installazione scaricherà il componente aggiuntivo per GPU, che rende WhisperX molto più veloce. Il programma di installazione non è firmato, quindi Windows SmartScreen potrebbe mostrare un avviso: apri le informazioni aggiuntive e scegli di eseguirlo comunque.

### macOS

Apri il file `.dmg` e trascina **Audiotext** nella cartella **Applicazioni**. L'app non è autenticata da Apple, quindi macOS la blocca la prima volta che la apri: vai in **Impostazioni di Sistema** → **Privacy e sicurezza** e fai clic su **Apri comunque** accanto al messaggio su Audiotext. Su macOS, WhisperX funziona sulla CPU, perché CUDA non è disponibile. I Mac con processore Intel non sono supportati, perché PyTorch non li supporta più.

### Linux

Estrai l'archivio ed esegui il programma di installazione da un terminale:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Installa Audiotext per il tuo utente e lo aggiunge al menu delle applicazioni (si può aprire anche con il comando `audiotext`). Se rileva una GPU NVIDIA, propone di scaricare il componente aggiuntivo per GPU. Esegui `./install.sh --gpu` o `./install.sh --cpu` per scegliere senza domande, e `./install.sh --uninstall` per disinstallarlo (le impostazioni vengono conservate).

:::tip
Il componente aggiuntivo per GPU è un download di circa 2 GB su Windows e 4 GB su Linux, quindi conviene solo con una GPU NVIDIA. Senza di esso, WhisperX funziona sulla CPU, e la API di Whisper e la API di Google funzionano allo stesso modo. Per passare in seguito dalla versione per CPU a quella per GPU, o viceversa, reinstalla l'app e scegli l'altra opzione.
:::

:::note
La prima volta che trascrivi con **WhisperX** (il motore predefinito), viene scaricato il suo modello. Occupa da ~75 MB per `tiny` a ~3 GB per `large-v2`, quindi può richiedere un po' di tempo. Le trascrizioni successive iniziano subito.
:::

## Requisiti

- **WhisperX** funziona sul tuo computer. Gira su qualsiasi CPU, ma è molto più veloce su una GPU NVIDIA con CUDA. Consulta [Motori](/it/reference/engines/) per scegliere un modello adatto al tuo hardware.
- La **API di Whisper** e la **API di Google** funzionano su server remoti, quindi richiedono una connessione a Internet, ma non un hardware potente.
- Per trascrivere dal microfono, il sistema deve rilevare un dispositivo di ingresso.
- Su Linux, registrare e riprodurre audio richiede [PortAudio](https://www.portaudio.com/) (`sudo apt install libportaudio2` su Ubuntu o Debian).

## Aggiorna l'app

Quando esce una nuova versione, Audiotext mostra un pulsante **La versione … è disponibile** nella barra superiore. Fai clic per aprire la pagina della versione, scarica il file per il tuo sistema e installalo come la prima volta: esegui il nuovo programma di installazione su Windows, trascina la nuova app nella cartella **Applicazioni** su macOS, oppure esegui l'`install.sh` del nuovo archivio su Linux. La versione precedente viene sostituita, e le impostazioni e la cronologia vengono mantenute, perché sono salvate nella tua [cartella di configurazione dell'utente](/it/reference/files-and-data/#cartella-di-configurazione-dellutente). Se usi il componente aggiuntivo per la GPU, sceglilo di nuovo durante l'installazione.

Per controllare tu stesso se c'è una nuova versione, apri **Preferenze** → **Informazioni** → **Controlla aggiornamenti**. Per non controllare più all'apertura dell'app, disattiva **Generale** → **Aggiornamenti**.

## Cambia la lingua dell'interfaccia

Audiotext usa la lingua del sistema, se disponibile. Per cambiarla, apri le **Preferenze** (l'ingranaggio in alto a destra) e scegli una lingua in **Generale** → **Lingua dell'interfaccia**.

## Eseguilo dal codice sorgente

Se vuoi eseguire il codice più recente o contribuire, consulta [Contribuire](/it/help/contributing/) per preparare il progetto con Python.

## Passi successivi

- [La tua prima trascrizione](/it/getting-started/first-transcription/) spiega la finestra e i passaggi per trascrivere.
