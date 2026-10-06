---
title: Motori
description: Confronta WhisperX, la API di Whisper e la API di Google, e scegli i loro modelli e le opzioni avanzate.
sidebar:
  order: 1
---

Audiotext trascrive con uno di tre motori, scelto nella scheda **Motore** delle [impostazioni della trascrizione](/it/guides/transcription-settings/#motore).

| | WhisperX | API di Whisper | API di Google |
| --- | --- | --- | --- |
| Funziona su | Il tuo computer | Server di OpenAI | Server di Google |
| Internet | Solo per scaricare i modelli | Necessaria | Necessaria |
| Costo | Gratis, senza limiti | A pagamento | Livello gratuito (60 min/mese), o a pagamento con una chiave API |
| Rileva la lingua | ✓ | ✓ | ✗ |
| Traduce | ✓ | ✓ | ✗ |
| Marcatori temporali | ✓ | Dipende dal modello | ✗ |
| Identifica i parlanti | ✓ (token di Hugging Face) | `gpt-4o-transcribe-diarize` | ✗ |
| Tempi per parola | ✓ | `whisper-1` | ✗ |
| Testo dal vivo | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) è un'implementazione veloce di Whisper di OpenAI che funziona sul tuo computer, quindi il tuo audio non lo lascia mai. Funziona sulla CPU o, molto più velocemente, su una GPU NVIDIA con CUDA.

### Modello

I modelli più grandi sono più precisi, ma più lenti e usano più memoria. Il modello viene scaricato al primo utilizzo.

| Modello | Parametri | VRAM necessaria |
| :---: | :---: | :---: |
| `tiny`, `tiny.en` | 39 M | ~1 GB |
| `base`, `base.en` | 74 M | ~1 GB |
| `small`, `small.en` | 244 M | ~2 GB |
| `distil-small.en` | 166 M | ~2 GB |
| `medium`, `medium.en` | 769 M | ~5 GB |
| `distil-medium.en` | 394 M | ~3 GB |
| `large-v1`, `large-v2`, `large-v3` | 1550 M | <8 GB |
| `large-v3-turbo` | 809 M | ~6 GB |
| `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5` | 756 M | ~5 GB |

- **`large-v2`** è il predefinito, perché `large-v3` tende ad allucinare e ripetere il testo più spesso, soprattutto in alcune lingue come il giapponese, e omette più punteggiatura.
- **`large-v3-turbo`** è una versione ridotta di `large-v3`, molto più veloce e quasi altrettanto precisa.
- I modelli che terminano con **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) e quelli **distillati** (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) trascrivono solo l'inglese. Sono più veloci dei modelli multilingue della stessa dimensione.

:::tip
Per provare Audiotext rapidamente, scegli `tiny` o `small`. Per la migliore qualità, usa `large-v2` o `large-v3-turbo` su una GPU.
:::

### Opzioni avanzate

Si trovano in **Preferenze** → **WhisperX**. Cambiale solo se hai problemi o sai cosa stai facendo: una GPU senza memoria può bloccare il sistema.

- **Tipo di calcolo**: la precisione dei numeri del modello. `float16` è più veloce sulle GPU (il predefinito con CUDA). `int8` usa meno memoria ed è il predefinito sulla CPU, perché molte CPU non supportano `float16` in modo efficiente. `float32` è il più preciso, per GPU con più di 8 GB di VRAM.
- **Dimensione del batch**: quante parti dell'audio vengono elaborate insieme (`8` per impostazione predefinita). Non cambia la qualità, solo la velocità. Abbassala se finisci la memoria; si consiglia fino a `16`.
- **Usa la CPU**: esegue WhisperX sulla CPU. È sempre attiva se non è stata trovata una GPU CUDA.

## API di Whisper

Usa la [API di trascrizione vocale di OpenAI](https://platform.openai.com/docs/guides/speech-to-text). È pensata per i computer che non riescono a eseguire WhisperX in modo fluido, e richiede una chiave API di OpenAI (consulta [Chiavi API](/it/reference/preferences/#chiavi-api)).

| Modello | Marcatori temporali | Parlanti | Note |
| --- | :---: | :---: | --- |
| `whisper-1` (predefinito) | ✓ | ✗ | Si può riprodurre segmento per segmento e sottotitolare. Traduce in inglese. |
| `gpt-transcribe` | ✗ | ✗ | Più preciso, ma senza marcatori temporali. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Identifica i parlanti. Non usa le parole chiave né la descrizione. |

Le traduzioni in inglese sono sempre fatte da `whisper-1`, l'unico modello che traduce.

Gli audio lunghi vengono divisi in parti di massimo 10 minuti, tagliate in un silenzio per non spezzare alcuna parola, perché la API rifiuta i file più grandi di 25 MB. Con `whisper-1`, la fine di ogni parte viene data come contesto alla successiva; con `gpt-4o-transcribe-diarize`, un campione della voce di ogni parlante viene inviato con le parti successive, così mantengono le loro etichette.

### Opzioni

- **Formato della risposta** (scheda Output, per le cartelle): `text` (predefinito), `json`, `verbose_json`, `srt` o `vtt`. I sottotitoli e `verbose_json` richiedono un modello con marcatori temporali.
- **Temperatura** (Preferenze → Whisper API): tra 0 e 1. Valori alti come 0,8 rendono il risultato più casuale, valori bassi come 0,2 più mirato. Con 0 (predefinito), il modello la aumenta automaticamente quando serve.
- **Marcatori temporali delle parole** (Preferenze → Whisper API): se `whisper-1` restituisce anche i marcatori temporali di ogni parola, per evidenziarla durante la riproduzione. Richiede più tempo. Attivo per impostazione predefinita.

## API di Google

Usa la [API Speech-to-Text di Google](https://cloud.google.com/speech-to-text). Non punteggia le frasi (Audiotext aggiunge la punteggiatura), e la sua qualità è inferiore a quella di Whisper, quindi le trascrizioni richiedono spesso correzioni. Non può rilevare la lingua né tradurre, e restituisce testo semplice senza marcatori temporali.

Senza chiave API si usa il livello gratuito, limitato a 60 minuti al mese. Per estenderlo, imposta una chiave API di Google. Google addebita il suo utilizzo, di cui Audiotext non è responsabile.
