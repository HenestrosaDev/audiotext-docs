---
title: Mecanismos
description: Compare o WhisperX, a API do Whisper e a API do Google, e escolha os modelos e as opções avançadas deles.
sidebar:
  order: 1
---

O Audiotext transcreve com um de três mecanismos, escolhido no cartão **Mecanismo** das [configurações da transcrição](/pt/guides/transcription-settings/#mecanismo).

| | WhisperX | API do Whisper | API do Google |
| --- | --- | --- | --- |
| Roda em | Seu computador | Servidores da OpenAI | Servidores do Google |
| Internet | Só para baixar os modelos | Necessária | Necessária |
| Custo | Grátis, ilimitado | Pago | Camada gratuita (60 min/mês), ou pago com uma chave de API |
| Detecta o idioma | ✓ | ✓ | ✗ |
| Traduz | ✓ | ✓ | ✗ |
| Carimbos de tempo | ✓ | Depende do modelo | ✗ |
| Identifica falantes | ✓ (token do Hugging Face) | `gpt-4o-transcribe-diarize` | ✗ |
| Tempos por palavra | ✓ | `whisper-1` | ✗ |
| Texto ao vivo | ✓ | ✗ | ✗ |

## WhisperX

O [WhisperX](https://github.com/m-bain/whisperX) é uma implementação rápida do Whisper da OpenAI que roda no seu computador, então o seu áudio nunca sai dele. Ele roda na CPU ou, muito mais rápido, em uma GPU NVIDIA com CUDA.

### Modelo

Os modelos maiores são mais precisos, porém mais lentos e usam mais memória. O modelo é baixado na primeira vez que é usado.

| Modelo | Parâmetros | VRAM necessária |
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

- **`large-v2`** é o padrão, já que o `large-v3` tende a alucinar e repetir texto com mais frequência, especialmente em alguns idiomas como o japonês, e omite mais pontuação.
- **`large-v3-turbo`** é uma versão reduzida do `large-v3`, muito mais rápida e quase tão precisa quanto ele.
- Os modelos terminados em **`.en`** (`tiny.en`, `base.en`, `small.en`, `medium.en`) e os **destilados** (`distil-small.en`, `distil-medium.en`, `distil-large-v2`, `distil-large-v3`, `distil-large-v3.5`) só transcrevem inglês. Eles são mais rápidos que os modelos multilíngues do mesmo tamanho.

:::tip
Para testar o Audiotext rapidamente, escolha `tiny` ou `small`. Para a melhor qualidade, use `large-v2` ou `large-v3-turbo` em uma GPU.
:::

### Opções avançadas

Ficam em **Preferências** → **WhisperX**. Mude-as apenas se tiver problemas ou souber o que está fazendo: uma GPU sem memória pode travar o seu sistema.

- **Tipo de computação**: a precisão dos números do modelo. `float16` é mais rápido em GPUs (o padrão com CUDA). `int8` usa menos memória e é o padrão na CPU, já que muitas CPUs não suportam `float16` com eficiência. `float32` é o mais preciso, para GPUs com mais de 8 GB de VRAM.
- **Tamanho do lote**: quantas partes do áudio são processadas de uma vez (`8` por padrão). Não muda a qualidade, só a velocidade. Diminua-o se faltar memória; recomenda-se até `16`.
- **Usar CPU**: roda o WhisperX na CPU. Fica sempre ativado se nenhuma GPU com CUDA for encontrada.

## API do Whisper

Usa a [API de fala para texto da OpenAI](https://platform.openai.com/docs/guides/speech-to-text). Ela é indicada para computadores que não rodam o WhisperX com fluidez, e exige uma chave de API da OpenAI (consulte [Chaves de API](/pt/reference/preferences/#chaves-de-api)).

| Modelo | Carimbos de tempo | Falantes | Observações |
| --- | :---: | :---: | --- |
| `whisper-1` (padrão) | ✓ | ✗ | Pode ser reproduzido frase por frase e legendado. Traduz para o inglês. |
| `gpt-transcribe` | ✗ | ✗ | Mais preciso, mas sem carimbos de tempo. |
| `gpt-4o-transcribe-diarize` | ✓ | ✓ | Identifica os falantes. Não usa as palavras-chave nem a descrição. |

As traduções para o inglês são sempre feitas pelo `whisper-1`, já que é o único modelo que traduz.

Os áudios longos são divididos em trechos de até 10 minutos, cortados em um silêncio para não partir nenhuma palavra, já que a API rejeita arquivos maiores que 25 MB. Com o `whisper-1`, o final de cada trecho é passado como contexto para o seguinte; com o `gpt-4o-transcribe-diarize`, uma amostra da voz de cada falante é enviada com os trechos seguintes, para que mantenham os seus rótulos.

### Opções

- **Formato da resposta** (cartão Saída, para pastas): `text` (padrão), `json`, `verbose_json`, `srt` ou `vtt`. As legendas e o `verbose_json` exigem um modelo com carimbos de tempo.
- **Temperatura** (Preferências → API do Whisper): entre 0 e 1. Valores altos como 0,8 tornam o resultado mais aleatório, e valores baixos como 0,2, mais focado. Com 0 (padrão), o modelo a aumenta automaticamente quando necessário.
- **Carimbos de tempo das palavras** (Preferências → API do Whisper): se o `whisper-1` também retorna os carimbos de tempo de cada palavra, para destacá-la durante a reprodução. Demora mais. Ativado por padrão.

## API do Google

Usa a [API Speech-to-Text do Google](https://cloud.google.com/speech-to-text). Ela não pontua as frases (o Audiotext adiciona a pontuação), e a qualidade é menor que a do Whisper, então as transcrições costumam precisar de correções. Ela não detecta o idioma nem traduz, e retorna texto simples sem carimbos de tempo.

Sem chave de API, é usada a camada gratuita, limitada a 60 minutos por mês. Para ampliá-la, defina uma chave de API do Google. O Google cobra pelo uso, pelo qual o Audiotext não se responsabiliza.
