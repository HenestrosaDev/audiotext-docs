---
title: File e dati
description: Dove Audiotext salva impostazioni, cronologia, registrazioni e chiavi API, e le variabili d'ambiente che legge.
sidebar:
  order: 5
---

Audiotext conserva i tuoi dati sul tuo computer. Niente viene inviato da nessuna parte, a meno che tu non usi un motore remoto (la API di Whisper o la API di Google) o un fornitore di IA diverso da Ollama. All'apertura chiede anche a GitHub se c'è una nuova versione, cosa che puoi disattivare in **Preferenze** → **Generale** → **Aggiornamenti**.

## Cartella di configurazione dell'utente

Le impostazioni, la cronologia e le registrazioni vengono salvate nella cartella di configurazione dell'utente, quindi restano dopo gli aggiornamenti:

| Sistema | Cartella |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (o `$XDG_CONFIG_HOME/audiotext`) |

Contiene:

- `config.ini`: le tue impostazioni. Eliminalo per ripristinare i valori predefiniti.
- `history.json`: le tue trascrizioni, con riassunti, traduzioni e correzioni.
- `media/`: le registrazioni del microfono e l'audio scaricato dagli URL, per poterli riprodurre in seguito. Vengono rimossi quando la loro trascrizione viene eliminata dalla cronologia.

Per usare un'altra cartella, es. per un'installazione portatile, imposta la variabile d'ambiente `AUDIOTEXT_CONFIG_DIR`.

:::note
Il file `config.ini` della cartella dell'app contiene le impostazioni predefinite e non viene mai modificato.
:::

## Chiavi API

Le chiavi API e il token di Hugging Face sono conservati nell'archivio delle credenziali del sistema:

- **macOS**: il Portachiavi.
- **Windows**: Gestione credenziali.
- **Linux**: il Secret Service (es. GNOME Keyring o KWallet).

Se il sistema non ne ha uno (es. un server senza desktop), vengono salvate in un file `.env` nella cartella di configurazione, leggibile solo dal tuo utente. Le chiavi che le versioni precedenti salvavano in quel file vengono spostate nell'archivio delle credenziali alla prima apertura dell'app.

Le chiavi vengono usate **solo** per inviare richieste alla API di ogni servizio.

## Variabili d'ambiente

Le variabili d'ambiente con i nomi delle chiavi hanno la precedenza su quelle impostate nell'app:

| Variabile | Servizio |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (API di Whisper, riassunti, traduzioni) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text e Google Translate |
| `HF_TOKEN` | Hugging Face (identificazione dei parlanti) |
| `AUDIOTEXT_CONFIG_DIR` | La cartella delle impostazioni e della cronologia |

## Modelli

I modelli di WhisperX e dell'identificazione dei parlanti vengono scaricati al primo utilizzo e memorizzati nella cache da Hugging Face in `~/.cache/huggingface` (`%USERPROFILE%\.cache\huggingface` su Windows). I modelli che allineano le parole di inglese, francese, tedesco, spagnolo e italiano sono memorizzati da PyTorch in `~/.cache/torch` (`%USERPROFILE%\.cache\torch` su Windows). Elimina queste cartelle per liberare lo spazio che occupano. Anche altre app possono tenervi i propri modelli e li riscaricano quando servono, come Audiotext.
