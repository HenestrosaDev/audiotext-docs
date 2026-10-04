---
title: Configuración da transcrición
description: Escolle o motor, os idiomas, o contexto, as opcións e a saída de cada transcrición.
sidebar:
  order: 2
---

Antes de transcribir, Audiotext mostra a configuración da transcrición, agrupada en tarxetas. Lémbrase para a próxima vez, e cada transcrición garda a configuración coa que se fixo.

![A configuración da transcrición dun ficheiro](/screenshots/transcription-settings.png)

## Motor

O **Método de transcrición**:

| Motor | Onde se executa | Custo | Notas |
| --- | --- | --- | --- |
| **WhisperX** (predeterminado) | O teu ordenador | De balde e sen límites | Privado e sen conexión. Máis opcións: falantes, tempos por palabra, texto en directo. |
| **API de Whisper** | Servidores de OpenAI | De pagamento por minuto | Require unha [clave de API de OpenAI](/gl/reference/preferences/#claves-de-api). Para ordenadores que non poden executar WhisperX con fluidez. |
| **API de Google** | Servidores de Google | Gratuíta limitada, ou de pagamento | Menor calidade e sen marcas de tempo. A clave de API é opcional. |

O **Modelo** depende do motor. Con WhisperX, os modelos máis grandes son máis precisos, pero máis lentos. Coa API de Whisper, decide se a transcrición ten marcas de tempo e falantes. Consulta [Motores](/gl/reference/engines/) para comparalos.

## Idioma

- **Idioma do audio**: **Detectar automaticamente** de forma predeterminada. Escollelo evita erros en audios curtos ou mesturados. A API de Google non pode detectalo, así que tes que escollelo.
- **Idioma da transcrición**: **O mesmo que o audio** de forma predeterminada. Escolle outro idioma para traducir o audio mentres se transcribe.

Cando os dous idiomas son distintos, aparecen as opcións de **Tradución**:

- **Traducir con Whisper (recomendado)**: Whisper transcribe e traduce o audio nun só paso. Só pode traducir ao inglés.
- **Escribila directamente en _idioma_ (experimental)**: pídeselle a Whisper que escriba a transcrición directamente nese idioma. Funciona ben en moitos idiomas, pero revisa o resultado.

A API de Google non pode traducir. Para traducir unha transcrición a calquera idioma máis tarde, con máis provedores, usa o botón [Traducir](/gl/guides/summary-and-translation/#tradución) da transcrición.

## Contexto

Dous campos opcionais que axudan ao modelo:

- **Palabras clave**: nomes, termos ou siglas que se din no audio, separados por comas (p. ex. `Audiotext, WhisperX, Henestrosa`), para que se escriban ben. Son só pistas: unha palabra clave só se escribe se se di no audio.
- **Descrición**: de que trata o audio, como o seu tema ou o seu contexto (p. ex. `Unha entrevista sobre recoñecemento de voz`).

Úsanos WhisperX e a API de Whisper, agás o modelo `gpt-4o-transcribe-diarize`. A API de Google non os usa.

## Opcións

- **Tempos por palabra** (WhisperX): aliña cada palabra co audio, para resaltala ao reproducir. Tarda un pouco máis. Os subtítulos xa os usan.
- **Extraer a voz**: reduce a música e o ruído de fondo antes de transcribir.
- **Identificar falantes** (WhisperX): indica quen fala en cada parte, p. ex. `SPEAKER_00`. Se sabes cantas persoas falan, indícao en **Número de falantes** (`0` detéctao). Require un token gratuíto de Hugging Face; consulta [Identifica os falantes](#identifica-os-falantes). Coa API de Whisper, o modelo `gpt-4o-transcribe-diarize` identifica os falantes.

### Identifica os falantes

O modelo que identifica os falantes, [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1), é gratuíto, pero require un token de Hugging Face:

1. Crea unha conta en [Hugging Face](https://huggingface.co/join) e acepta as condicións de [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1).
2. Crea un token co rol `Read` na [túa configuración](https://huggingface.co/settings/tokens).
3. Fai clic en **Configurar o token de Hugging Face…** e pégao.

O modelo descárgase a primeira vez que se usa. Despois, os falantes identifícanse sen conexión.

## Texto en directo

Só se mostra para o micrófono. Consulta [Texto en directo](/gl/guides/sources/#texto-en-directo).

## Cartafol e Saída

Só se mostran para cartafoles:

- **Vixiar o cartafol**: consulta [Vixía un cartafol](/gl/guides/sources/#vixía-un-cartafol).
- **Tipos de ficheiro**: con WhisperX, un ou varios de `.txt`, `.srt`, `.vtt`, `.json`, `.tsv` e `.aud`. Coa API de Whisper, o formato dos ficheiros (`text`, `json`, `verbose_json`, `srt` ou `vtt`); os subtítulos precisan un modelo con marcas de tempo. A API de Google devolve texto plano (`.txt`).
- **Localización**: os ficheiros gárdanse xunto a cada ficheiro de orixe. Fai clic en **Cambiar…** para gardalos noutro cartafol (recréanse os seus subcartafoles), ou en **Xunto á orixe** para volver.
- **Sobrescribir os ficheiros existentes**: volve transcribir os ficheiros que xa teñen unha transcrición e substitúea.

As opcións dos subtítulos (largura de liña, número de liñas, palabras resaltadas) están nas [Preferencias](/gl/reference/preferences/#subtítulos).
