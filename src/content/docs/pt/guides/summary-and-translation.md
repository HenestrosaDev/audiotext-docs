---
title: Resumo e tradução
description: Resuma e traduza transcrições com OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL ou Google Translate.
sidebar:
  order: 4
---

Quando uma transcrição está pronta, o Audiotext pode resumi-la e traduzi-la com um modelo de linguagem ou um serviço de tradução. Ambos são salvos no histórico, então só são gerados uma vez.

## Resumo

Abra o modo **Resumo** de uma transcrição e clique em **Gerar resumo**. O modelo de linguagem escreve:

- Um **resumo** da transcrição.
- Os **pontos-chave**.
- Os **capítulos**, se ela tiver carimbos de tempo. Clique em um capítulo para reproduzir o áudio a partir de onde ele começa.

**Gerar novamente** o escreve de novo (ex.: depois de escolher outro modelo). **Copiar** o copia, e as [exportações](/pt/guides/transcript/#copie-e-exporte) para Markdown e Word o incluem.

Se a chave de API do provedor não estiver definida, o modo **Resumo** oferece defini-la. Transcrições muito longas (cerca de três horas de fala ou mais) são resumidas apenas a partir do início.

![O resumo de uma transcrição, com os pontos-chave e os capítulos](/screenshots/summary.png)

## Tradução

Clique em **Traduzir**, escolha o idioma em **Traduzir para** e o **Provedor**, e confirme. A tradução aparece em um painel à direita do texto original.

- Se a transcrição tiver carimbos de tempo, cada frase é traduzida separadamente, então a tradução os mantém: ela destaca a frase em reprodução, e clicar em uma frase a reproduz.
- Se você editou o texto simples, o texto editado é traduzido, sem carimbos de tempo.
- Arraste o divisor entre os dois textos para redimensioná-los, ou clique duas vezes nele para restaurar os tamanhos.
- O botão **Traduzir** também permite **Ocultar a tradução**, **Traduzir para outro idioma…** ou **Excluir a tradução**.

:::tip
Para obter a transcrição diretamente em outro idioma, sem provedor, você também pode traduzir durante a transcrição. Consulte [Idioma](/pt/guides/transcription-settings/#idioma).
:::

## Provedores

Os provedores são escolhidos em **Preferências** → **IA**, separadamente para os resumos e as traduções.

| Provedor | Modelo padrão | Chave de API |
| --- | --- | --- |
| OpenAI (padrão) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (local) | `llama3.2` | Não é necessária |

Deixe o **Modelo** vazio para usar o modelo padrão do provedor, ou digite o nome de qualquer outro modelo do provedor (ex.: `claude-sonnet-5-5` ou `deepseek-reasoner`).

As traduções também podem ser feitas com:

- **DeepL**, que exige uma [chave de API do DeepL](https://www.deepl.com/your-account/keys). As chaves do plano gratuito também funcionam.
- **Google Translate**, que usa a chave de API do Google com a Cloud Translation API ativada.

### Ollama

O [Ollama](https://ollama.com) roda os modelos no seu computador, sem chave de API e sem enviar o texto para lugar nenhum. Instale-o, baixe um modelo (ex.: `ollama pull llama3.2`) e escolha **Ollama** como provedor. Se ele não rodar no endereço padrão, mude a **URL do servidor** em **Preferências** → **IA** (`http://localhost:11434` por padrão).

:::note
Cada provedor cobra pelo uso da sua API, pelo qual o Audiotext não se responsabiliza. As chaves de API ficam no armazenamento de credenciais do seu sistema. Consulte [Arquivos e dados](/pt/reference/files-and-data/).
:::
