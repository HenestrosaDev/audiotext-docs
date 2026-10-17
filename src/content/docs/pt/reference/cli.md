---
title: Interface de linha de comando
description: Transcreva, resuma e traduza arquivos, pastas e vídeos do YouTube a partir de scripts com a linha de comando do Audiotext.
sidebar:
  order: 3
---

O Audiotext também pode ser usado pela linha de comando, ex.: para transcrever a partir de scripts. Ele tem três comandos:

- `transcribe`: transcreve um arquivo, os arquivos de uma pasta ou um vídeo do YouTube.
- `watch`: transcreve os arquivos adicionados a uma pasta até ser interrompido com `Ctrl+C`.
- `check-update`: verifica se há uma nova versão disponível e mostra o link para baixá-la.

As opções não informadas assumem os valores configurados no aplicativo. As transcrições são sempre salvas ao lado de cada arquivo transcrito, ou na pasta indicada com `--output-dir` (onde as subpastas de uma pasta transcrita são recriadas).

## Execute-a

O aplicativo instalado executa a linha de comando quando recebe um dos seus comandos:

| Sistema | Comando |
| --- | --- |
| Linux | `audiotext` (instalado em `~/.local/bin` pelo `install.sh`) |
| macOS | `/Applications/Audiotext.app/Contents/MacOS/Audiotext` |
| Windows | `audiotext-cli.exe`, na pasta onde o Audiotext está instalado (`%LOCALAPPDATA%\Programs\Audiotext` por padrão) |

Se você o [executa a partir do código-fonte](/pt/help/contributing/#prepare-o-projeto), execute `uv run src/cli.py` no lugar.

## Exemplos

```bash
# Transcreve um arquivo. O texto também é impresso, então pode ser redirecionado
audiotext transcribe interview.mp3 --language es --output-types txt,srt

# Transcreve os arquivos de uma pasta identificando os falantes
audiotext transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transcreve um vídeo do YouTube com a API do Whisper
audiotext transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transcreve uma reunião com a API do Whisper, com as palavras-chave e o contexto
audiotext transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Uma reunião sobre a próxima versão"

# Salva as legendas e um documento do Word, resume e traduz para o espanhol
audiotext transcribe talk.mp4 --output-types srt,docx --summarize --translate-to es

# Transcreve os arquivos adicionados a uma pasta até ser interrompido com Ctrl+C
audiotext watch inbox/ --output-types srt

# O mesmo, transcrevendo primeiro os arquivos que ela já contém
audiotext watch inbox/ --existing
```

## Opções

| Opção | Descrição |
| --- | --- |
| `-m`, `--method` | Método de transcrição: `whisperx`, `whisper-api` ou `google` |
| `-l`, `--language` | Idioma do áudio como código ISO 639-1 (ex.: `pt`), ou `auto` para detectá-lo (não suportado pelo Google) |
| `-t`, `--output-types` | Tipos de arquivo de saída separados por vírgulas, entre `aud`, `json`, `srt`, `txt`, `tsv`, `vtt`, `md`, `docx` e `ass` (ex.: `txt,srt,md`) |
| `-o`, `--output-dir` | Pasta onde as transcrições são salvas (padrão: ao lado de cada arquivo transcrito) |
| `--overwrite` | Transcrever de novo os arquivos que já têm uma transcrição, substituindo-a |
| `--existing` | (só `watch`) Transcrever primeiro os arquivos que a pasta já contém e que ainda não têm transcrição |
| `-p`, `--prompt` | Do que o áudio trata, como o tema ou o contexto (não suportado pelo Google) |
| `-k`, `--keywords` | Nomes, termos ou siglas ditos no áudio, separados por vírgulas, para que sejam escritos corretamente (não suportado pelo Google) |
| `--translate` | Traduzir o áudio para o inglês durante a transcrição (não suportado pelo Google). Consulte `--translate-to` para outros idiomas |
| `-q`, `--quiet` | Imprimir apenas os erros |
| `-v`, `--verbose` | Imprimir os logs para depurar erros |
| `--version` | Imprimir a versão do Audiotext |

Os tipos de saída que o método de transcrição não salva por conta própria (ex.: `md` ou `docx`) são exportados a partir do resultado dele, como no aplicativo. `aud` só é salvo pelo WhisperX.

**Opções de resumo e tradução**

| Opção | Descrição |
| --- | --- |
| `--summarize` | Resumir cada transcrição, com os pontos-chave e os capítulos, em um arquivo `.summary.md` |
| `--summary-provider` | Provedor do modelo de linguagem que resume: `openai`, `anthropic`, `deepseek`, `gemini`, `mistral`, `grok` ou `ollama` |
| `--summary-model` | Modelo de linguagem que resume |
| `--translate-to` | Traduzir cada transcrição para um idioma (um código ISO 639-1), salva nos seus tipos de arquivo de saída (ex.: `talk.es.srt`) |
| `--translation-provider` | Provedor das traduções: os de `--summary-provider`, `deepl` ou `google` |
| `--translation-model` | Modelo de linguagem que traduz, para os provedores de modelos de linguagem |

Os provedores e os modelos são os configurados no aplicativo, a menos que sejam informados. Consulte [Provedores](/pt/guides/summary-and-translation/#provedores).

**Opções do WhisperX**

| Opção | Descrição |
| --- | --- |
| `--diarize` | Identificar os falantes |
| `--speakers` | Número de falantes ao identificá-los (`0` para detectar) |
| `--model-size` | Modelo, ex.: `small` ou `large-v2` (consulte [Mecanismos](/pt/reference/engines/#modelo)) |
| `--compute-type` | `int8`, `float16` ou `float32` |
| `--batch-size` | Tamanho do lote |
| `--cpu` | Rodar na CPU, em vez de em uma GPU NVIDIA ou na GPU de um Mac |

**Opções da API do Whisper**

| Opção | Descrição |
| --- | --- |
| `--openai-model` | Modelo de transcrição: `whisper-1`, `gpt-transcribe` ou `gpt-4o-transcribe-diarize` |

Execute `audiotext transcribe --help` para ver todas as opções e os seus valores.

## Saída e código de saída

O progresso é impresso na saída de erro padrão (oculte-o com `--quiet`), e o texto da transcrição de um único arquivo na saída padrão. O comando termina com o código `1` se uma transcrição, um resumo ou uma tradução falhar, e com `130` se for interrompido com `Ctrl+C`.

Se a chave de API do provedor de `--summarize` ou `--translate-to` não estiver definida, o comando para antes de transcrever. Um resumo ou uma tradução que falha é informado sem perder a transcrição, que é salva mesmo assim.

As chaves de API são as definidas no aplicativo, ou as suas [variáveis de ambiente](/pt/reference/files-and-data/#variáveis-de-ambiente), como `OPENAI_API_KEY`, `GOOGLE_API_KEY` e `HF_TOKEN` (para identificar os falantes).
