---
title: Interface de linha de comando
description: Transcreva arquivos, pastas e vídeos do YouTube a partir de scripts com a linha de comando do Audiotext.
sidebar:
  order: 3
---

O Audiotext também pode ser usado pela linha de comando para transcrever a partir de scripts, quando você o [executa a partir do código-fonte](/pt/help/contributing/#prepare-o-projeto). Ele tem três comandos:

- `transcribe`: transcreve um arquivo, os arquivos de uma pasta ou um vídeo do YouTube.
- `watch`: transcreve os arquivos adicionados a uma pasta até ser interrompido com `Ctrl+C`.
- `check-update`: verifica se há uma nova versão disponível e mostra o link para baixá-la.

As opções não informadas assumem os valores configurados no aplicativo. As transcrições são sempre salvas ao lado de cada arquivo transcrito, ou na pasta indicada com `--output-dir` (onde as subpastas de uma pasta transcrita são recriadas).

## Exemplos

```bash
# Transcreve um arquivo. O texto também é impresso, então pode ser redirecionado
python src/cli.py transcribe interview.mp3 --language es --output-types txt,srt

# Transcreve os arquivos de uma pasta identificando os falantes
python src/cli.py transcribe recordings/ --diarize --speakers 2 --output-dir transcriptions/

# Transcreve um vídeo do YouTube com a API do Whisper
python src/cli.py transcribe "https://www.youtube.com/watch?v=…" --method whisper-api

# Transcreve uma reunião com a API do Whisper, com as palavras-chave e o contexto
python src/cli.py transcribe meeting.m4a --method whisper-api \
    --openai-model gpt-transcribe --keywords "Audiotext, WhisperX" \
    --prompt "Uma reunião sobre a próxima versão"

# Transcreve os arquivos adicionados a uma pasta até ser interrompido com Ctrl+C
python src/cli.py watch inbox/ --output-types srt
```

## Opções

| Opção | Descrição |
| --- | --- |
| `-m`, `--method` | Método de transcrição: `whisperx`, `whisper-api` ou `google` |
| `-l`, `--language` | Idioma do áudio como código ISO 639-1 (ex.: `pt`), ou `auto` para detectá-lo (não suportado pelo Google) |
| `-o`, `--output-dir` | Pasta onde as transcrições são salvas (padrão: ao lado de cada arquivo transcrito) |
| `--overwrite` | Substituir as transcrições existentes |
| `-p`, `--prompt` | Do que o áudio trata, como o tema ou o contexto (não suportado pelo Google) |
| `-k`, `--keywords` | Nomes, termos ou siglas ditos no áudio, separados por vírgulas, para que sejam escritos corretamente (não suportado pelo Google) |
| `--translate` | Traduzir o áudio para o inglês (não suportado pelo Google) |
| `-q`, `--quiet` | Imprimir apenas os erros |
| `-v`, `--verbose` | Imprimir os logs para depurar erros |

**Opções do WhisperX**

| Opção | Descrição |
| --- | --- |
| `-t`, `--output-types` | Tipos de arquivo de saída separados por vírgulas (ex.: `txt,srt`) |
| `--diarize` | Identificar os falantes |
| `--speakers` | Número de falantes ao identificá-los (`0` para detectar) |
| `--model-size` | Modelo, ex.: `small` ou `large-v2` (consulte [Mecanismos](/pt/reference/engines/#modelo)) |
| `--compute-type` | `int8`, `float16` ou `float32` |
| `--batch-size` | Tamanho do lote |
| `--cpu` | Rodar na CPU |

**Opções da API do Whisper**

| Opção | Descrição |
| --- | --- |
| `--openai-model` | Modelo de transcrição: `whisper-1`, `gpt-transcribe` ou `gpt-4o-transcribe-diarize` |

Execute `python src/cli.py transcribe --help` para ver todas as opções e os seus valores.

## Saída e código de saída

O progresso é impresso na saída de erro padrão (oculte-o com `--quiet`), e o texto da transcrição de um único arquivo na saída padrão. O comando termina com o código `1` se uma transcrição falhar.

As chaves de API são as definidas no aplicativo, ou as variáveis de ambiente `OPENAI_API_KEY`, `GOOGLE_API_KEY` e `HF_TOKEN` (para identificar os falantes).
