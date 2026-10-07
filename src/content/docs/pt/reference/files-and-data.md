---
title: Arquivos e dados
description: Onde o Audiotext guarda as configurações, o histórico, as gravações e as chaves de API, e as variáveis de ambiente que ele lê.
sidebar:
  order: 5
---

O Audiotext mantém os seus dados no seu computador. Nada é enviado para lugar nenhum, a menos que você use um mecanismo remoto (a API do Whisper ou a API do Google) ou um provedor de IA diferente do Ollama. Ao abrir, ele também pergunta ao GitHub se há uma nova versão, o que você pode desativar em **Preferências** → **Geral** → **Atualizações**.

## Pasta de configuração do usuário

As configurações, o histórico e as gravações ficam na sua pasta de configuração de usuário, então são mantidos nas atualizações:

| Sistema | Pasta |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (ou `$XDG_CONFIG_HOME/audiotext`) |

Ela contém:

- `config.ini`: as suas configurações. Exclua-o para restaurar os padrões.
- `history.json`: as suas transcrições, com os resumos, as traduções e as correções.
- `media/`: as gravações do microfone e o áudio baixado de URLs, para poderem ser reproduzidos depois. Eles são removidos quando a transcrição correspondente é excluída do histórico.

Para usar outra pasta, ex.: em uma instalação portátil, defina a variável de ambiente `AUDIOTEXT_CONFIG_DIR`.

:::note
O arquivo `config.ini` da pasta do aplicativo contém as configurações padrão e nunca é modificado.
:::

## Chaves de API

As chaves de API e o token do Hugging Face ficam no armazenamento de credenciais do seu sistema:

- **macOS**: as Chaves (Keychain).
- **Windows**: o Gerenciador de Credenciais.
- **Linux**: o Secret Service (ex.: GNOME Keyring ou KWallet).

Se o sistema não tiver nenhum (ex.: um servidor sem desktop), elas ficam em um arquivo `.env` na pasta de configuração, legível apenas pelo seu usuário. As chaves que versões anteriores guardavam nesse arquivo são movidas para o armazenamento de credenciais na primeira vez que o aplicativo é aberto.

As chaves são usadas **apenas** para fazer requisições à API de cada serviço.

## Variáveis de ambiente

As variáveis de ambiente com os nomes das chaves têm prioridade sobre as definidas no aplicativo:

| Variável | Serviço |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (API do Whisper, resumos, traduções) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text e Google Translate |
| `HF_TOKEN` | Hugging Face (identificação de falantes) |
| `AUDIOTEXT_CONFIG_DIR` | A pasta das configurações e do histórico |

## Modelos

Os modelos do WhisperX e da identificação de falantes são baixados na primeira vez que são usados e armazenados em cache pelo Hugging Face em `~/.cache/huggingface` (`%USERPROFILE%\.cache\huggingface` no Windows). Os modelos que alinham as palavras do inglês, francês, alemão, espanhol e italiano são armazenados pelo PyTorch em `~/.cache/torch` (`%USERPROFILE%\.cache\torch` no Windows). Exclua essas pastas para liberar o espaço que ocupam. Outros aplicativos também podem guardar os seus modelos lá, e baixá-los de novo quando precisarem, como o Audiotext.
