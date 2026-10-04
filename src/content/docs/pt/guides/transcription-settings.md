---
title: Configurações da transcrição
description: Escolha o mecanismo, os idiomas, o contexto, as opções e a saída de cada transcrição.
sidebar:
  order: 2
---

Antes de transcrever, o Audiotext mostra as configurações da transcrição, agrupadas em cartões. Elas são lembradas para a próxima vez, e cada transcrição guarda as configurações com que foi feita.

![As configurações da transcrição de um ficheiro](/screenshots/transcription-settings.png)

## Mecanismo

O **Método de transcrição**:

| Mecanismo | Onde roda | Custo | Observações |
| --- | --- | --- | --- |
| **WhisperX** (padrão) | Seu computador | Grátis e ilimitado | Privado e offline. Mais opções: falantes, tempos por palavra, texto ao vivo. |
| **API do Whisper** | Servidores da OpenAI | Pago por minuto | Exige uma [chave de API da OpenAI](/pt/reference/preferences/#chaves-de-api). Para computadores que não rodam o WhisperX com fluidez. |
| **API do Google** | Servidores do Google | Camada gratuita, ou pago | Qualidade menor e sem carimbos de tempo. A chave de API é opcional. |

O **Modelo** depende do mecanismo. Com o WhisperX, os modelos maiores são mais precisos, porém mais lentos. Com a API do Whisper, ele define se a transcrição tem carimbos de tempo e falantes. Consulte [Mecanismos](/pt/reference/engines/) para compará-los.

## Idioma

- **Idioma do áudio**: **Detectar automaticamente** por padrão. Escolhê-lo evita erros em áudios curtos ou misturados. A API do Google não consegue detectá-lo, então você precisa escolhê-lo.
- **Idioma da transcrição**: **O mesmo do áudio** por padrão. Escolha outro idioma para traduzir o áudio durante a transcrição.

Quando os dois idiomas são diferentes, aparecem as opções de **Tradução**:

- **Traduzir com o Whisper (recomendado)**: o Whisper transcreve e traduz o áudio em uma única etapa. Ele só traduz para o inglês.
- **Escrevê-la diretamente em _idioma_ (experimental)**: o Whisper é instruído a escrever a transcrição diretamente nesse idioma. Funciona bem em muitos idiomas, mas confira o resultado.

A API do Google não traduz. Para traduzir uma transcrição para qualquer idioma depois, com mais provedores, use o botão [Traduzir](/pt/guides/summary-and-translation/#tradução) da transcrição.

## Contexto

Dois campos opcionais que ajudam o modelo:

- **Palavras-chave**: nomes, termos ou siglas ditos no áudio, separados por vírgulas (ex.: `Audiotext, WhisperX, Henestrosa`), para que sejam escritos corretamente. São só dicas: uma palavra-chave só é escrita se for dita no áudio.
- **Descrição**: do que o áudio trata, como o tema ou o contexto (ex.: `Uma entrevista sobre reconhecimento de fala`).

Eles são usados pelo WhisperX e pela API do Whisper, exceto pelo modelo `gpt-4o-transcribe-diarize`. A API do Google não os usa.

## Opções

- **Tempos por palavra** (WhisperX): alinha cada palavra ao áudio, para destacá-la durante a reprodução. Demora um pouco mais. As legendas já os usam.
- **Extrair a voz**: reduz a música e o ruído de fundo antes de transcrever.
- **Identificar falantes** (WhisperX): indica quem fala em cada parte, ex.: `SPEAKER_00`. Se você souber quantas pessoas falam, informe em **Número de falantes** (`0` detecta automaticamente). Exige um token gratuito do Hugging Face; consulte [Identifique os falantes](#identifique-os-falantes). Com a API do Whisper, o modelo `gpt-4o-transcribe-diarize` identifica os falantes.

### Identifique os falantes

O modelo que identifica os falantes, [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1), é gratuito, mas exige um token do Hugging Face:

1. Crie uma conta no [Hugging Face](https://huggingface.co/join) e aceite as condições do [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1).
2. Crie um token com a função `Read` nas [suas configurações](https://huggingface.co/settings/tokens).
3. Clique em **Definir token do Hugging Face…** e cole-o.

O modelo é baixado na primeira vez que é usado. Depois disso, os falantes são identificados offline.

## Texto ao vivo

Só aparece para o microfone. Consulte [Texto ao vivo](/pt/guides/sources/#texto-ao-vivo).

## Pasta e Saída

Só aparecem para pastas:

- **Monitorar a pasta**: consulte [Monitore uma pasta](/pt/guides/sources/#monitore-uma-pasta).
- **Tipos de arquivo**: com o WhisperX, um ou mais entre `.txt`, `.srt`, `.vtt`, `.json`, `.tsv` e `.aud`. Com a API do Whisper, o formato dos arquivos (`text`, `json`, `verbose_json`, `srt` ou `vtt`); as legendas exigem um modelo com carimbos de tempo. A API do Google retorna texto simples (`.txt`).
- **Local**: os arquivos são salvos ao lado de cada arquivo de origem. Clique em **Alterar…** para salvá-los em outra pasta (as subpastas são recriadas), ou em **Ao lado da origem** para voltar.
- **Substituir arquivos existentes**: transcreve de novo os arquivos que já têm uma transcrição, substituindo-a.

As opções das legendas (largura da linha, número de linhas, palavras destacadas) ficam nas [Preferências](/pt/reference/preferences/#legendas).
