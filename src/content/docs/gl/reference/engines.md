---
title: Motores
description: Compara WhisperX, a API de Whisper e a API de Google, e escolle os seus modelos e opcións avanzadas.
sidebar:
  order: 1
---

Audiotext transcribe cun de tres motores, que se escolle na tarxeta **Motor** da [configuración da transcrición](/gl/guides/transcription-settings/#motor).

| | WhisperX | API de Whisper | API de Google |
| --- | --- | --- | --- |
| Execútase en | O teu ordenador | Servidores de OpenAI | Servidores de Google |
| Internet | Só para descargar os modelos | Necesario | Necesario |
| Custo | De balde, sen límites | De pagamento | Gratuíta (60 min/mes), ou de pagamento cunha clave de API |
| Detecta o idioma | ✓ | ✓ | ✗ |
| Traduce | ✓ | ✓ | ✗ |
| Marcas de tempo | ✓ | Segundo o modelo | ✗ |
| Identifica falantes | ✓ (token de Hugging Face) | `gpt-4o-transcribe-diarize` | ✗ |
| Tempos por palabra | ✓ | `whisper-1` | ✗ |
| Texto en directo | ✓ | ✗ | ✗ |

## WhisperX

[WhisperX](https://github.com/m-bain/whisperX) é unha implementación rápida de Whisper de OpenAI que se executa no teu ordenador, así que o teu audio nunca sae del. Funciona na CPU ou, moito máis rápido, nunha GPU NVIDIA con CUDA.

### Modelo

Os modelos máis grandes son máis precisos, pero máis lentos e usan máis memoria. O modelo descárgase a primeira vez que se usa.

| Modelo | Parámetros | VRAM necesaria |
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

- **`large-v2`** é o modelo predeterminado, xa que `large-v3` tende a alucinar e repetir texto con máis frecuencia, sobre todo nalgúns idiomas como o xaponés, e omite máis signos de puntuación.
- **`large-v3-turbo`** é unha versión reducida de `large-v3`, moito máis rápida e case igual de precisa.
- Os modelos que rematan en **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) e os **destilados** (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) só transcriben inglés. Son máis rápidos que os modelos multilingües do mesmo tamaño.

:::tip
Para probar Audiotext rapidamente, escolle `tiny` ou `small`. Para obter a mellor calidade, usa `large-v2` ou `large-v3-turbo` nunha GPU.
:::

### Opcións avanzadas

Están en **Preferencias** → **WhisperX**. Cámbiaas só se tes problemas ou sabes o que fas: unha GPU que se queda sen memoria pode bloquear o teu sistema.

- **Tipo de cálculo**: a precisión dos números do modelo. `float16` é máis rápido en GPU (o valor predeterminado con CUDA). `int8` usa menos memoria e é o valor predeterminado na CPU, xa que moitas CPU non admiten `float16` de forma eficiente. `float32` é o máis preciso, para GPU con máis de 8 GB de VRAM.
- **Tamaño do lote**: cantas partes do audio se procesan á vez (`8` de forma predeterminada). Non cambia a calidade, só a velocidade. Báixao se te quedas sen memoria; recoméndase ata `16`.
- **Usar a CPU**: executa WhisperX na CPU. Sempre está activado se non se atopou ningunha GPU con CUDA.

## API de Whisper

Usa a [API de voz a texto de OpenAI](https://platform.openai.com/docs/guides/speech-to-text). Está pensada para ordenadores que non poden executar WhisperX con fluidez, e require unha clave de API de OpenAI (consulta [Claves de API](/gl/reference/preferences/#claves-de-api)).

| Modelo | Marcas de tempo | Falantes | Notas |
| --- | :---: | :---: | --- |
| `whisper-1` (predeterminado) | ✓ | ✗ | Pódese reproducir segmento a segmento e subtitular. Traduce ao inglés. |
| `gpt-transcribe` | ✗ | ✗ | Máis preciso, pero sen marcas de tempo. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Identifica os falantes. Non usa as palabras clave nin a descrición. |

As traducións ao inglés sempre as fai `whisper-1`, xa que é o único modelo que traduce.

Os audios longos divídense en fragmentos de ata 10 minutos, cortados nun silencio para non partir ningunha palabra, xa que a API rexeita os ficheiros de máis de 25 MB. Con `whisper-1`, o final de cada fragmento dáselle como contexto ao seguinte; con `gpt-4o-transcribe-diarize`, envíase unha mostra da voz de cada falante cos seguintes fragmentos, para que manteñan as súas etiquetas.

### Opcións

- **Formato de resposta** (tarxeta Saída, para cartafoles): `text` (predeterminado), `json`, `verbose_json`, `srt` ou `vtt`. Os subtítulos e `verbose_json` precisan un modelo con marcas de tempo.
- **Temperatura** (Preferencias → API de Whisper): entre 0 e 1. Os valores altos como 0,8 fan que o resultado sexa máis aleatorio, e os baixos como 0,2, máis preciso. Con 0 (predeterminado), o modelo súbea automaticamente cando fai falla.
- **Marcas de tempo das palabras** (Preferencias → API de Whisper): se `whisper-1` tamén devolve as marcas de tempo de cada palabra, para resaltala ao reproducir. Tarda máis. Activado de forma predeterminada.

## API de Google

Usa a [API Speech-to-Text de Google](https://cloud.google.com/speech-to-text). Non puntúa as frases (Audiotext engade a puntuación), e a súa calidade é menor que a de Whisper, así que as transcricións adoitan precisar correccións. Non pode detectar o idioma nin traducir, e devolve texto plano sen marcas de tempo.

Sen clave de API, úsase o nivel gratuíto, limitado a 60 minutos ao mes. Para amplialo, configura unha clave de API de Google. Google cobra polo seu uso, do que Audiotext non se fai responsable.
