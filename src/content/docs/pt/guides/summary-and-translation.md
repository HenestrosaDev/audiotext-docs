---
title: Resumo, perguntas e tradução
description: Resuma, faça perguntas e traduza transcrições com OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL ou Google Translate.
sidebar:
  order: 4
---

Quando uma transcrição está pronta, o Audiotext pode resumi-la, responder a perguntas sobre ela e traduzi-la com um modelo de linguagem ou um serviço de tradução. Tudo é salvo no histórico, então só é gerado uma vez.

## Resumo

Abra o modo **Resumo** de uma transcrição e clique em **Gerar resumo**. O modelo de linguagem escreve:

- Um **resumo** da transcrição.
- Os **pontos-chave**.
- Os **capítulos**, se ela tiver carimbos de tempo. Clique em um capítulo para reproduzir o áudio a partir de onde ele começa.

Abaixo do título, o painel diz qual modelo o gerou e quando. Os botões do cabeçalho:

- **Pesquisar** (`Ctrl+F`, `⌘F` no macOS): encontra um texto no resumo.
- **Copiar**: copia o resumo.
- **Exportar**: salva o resumo sozinho como texto simples, Markdown ou documento do Word, com um nome como `video.summary.md` para não substituir a transcrição. As [exportações](/pt/guides/transcript/#copie-e-exporte) para Markdown e Word da transcrição também o incluem.
- **Regenerar resumo**: escreve-o de novo (ex.: depois de escolher outro modelo), depois de perguntar, já que o atual é substituído.

Se a chave de API do provedor não estiver definida, o modo **Resumo** oferece defini-la. Transcrições muito longas (cerca de três horas de fala ou mais) são resumidas apenas a partir do início.

![O resumo de uma transcrição, com os pontos-chave e os capítulos](/screenshots/summary.png)

## Pergunte sobre a transcrição

Abra o modo **Perguntar**, digite uma pergunta em **Faça uma pergunta sobre a transcrição…** (ex.: o que foi decidido, ou quem disse algo) e pressione `Enter` ou clique em **Perguntar**.

- O modelo de linguagem responde com a transcrição, e com as perguntas anteriores e as respostas delas, então uma pergunta pode se referir a elas (ex.: “Por quê?”).
- Se a transcrição tiver carimbos de tempo, cada resposta tem links para as partes da transcrição onde isso é dito. Clique em uma para reproduzir o áudio a partir dali.
- As perguntas e as respostas são salvas no histórico com a transcrição. A lixeira do cabeçalho limpa a conversa, depois de perguntar.

As perguntas são respondidas pelo provedor escolhido para elas em **Preferências** → **Provedores** → **Perguntar**, que é o dos resumos até você mudá-lo. Como nos resumos, das transcrições muito longas só é lido o começo.

## Tradução

Clique em **Traduzir**, escolha o idioma em **Traduzir para:** e o provedor em **Traduzir com:**, e confirme. A caixa de diálogo diz o que o provedor escolhido faz, e oferece definir a chave de API dele se estiver faltando. A tradução aparece em um painel à direita do texto original.

- Se a transcrição tiver carimbos de tempo, ela é traduzida frase por frase, com o texto dito antes e depois de cada parte como contexto, então a tradução começa com os carimbos de tempo de cada frase: ela destaca a frase em reprodução, e clicar em uma a reproduz.
- Se a transcrição não tem carimbos de tempo, todo o texto é traduzido de uma vez.
- Os dois textos rolam juntos, então mostram a mesma parte do áudio. O botão redondo no divisor entre eles ativa e desativa isso. Arraste o divisor para redimensioná-los, ou clique duas vezes nele para restaurar os tamanhos.

Os botões do cabeçalho da tradução localizam e substituem nela, copiam, exportam, **Traduzir novamente** (com o mesmo provedor e modelo) e **Ocultar tradução**. O botão **Traduzir** também permite mostrá-la de novo, **Traduzir para outro idioma…** ou **Excluir tradução**.

### Vários idiomas

Uma transcrição pode ser traduzida para vários idiomas, até ao mesmo tempo, e cada tradução é mantida. O título do painel escolhe a que é mostrada, diz quanto de cada uma está traduzido e termina com a opção de traduzir para outro idioma. Traduzir para um idioma que já tem uma tradução a substitui, depois de perguntar, já que as correções dela são perdidas. O menu do título mostra quantas legendas de cada tradução não concluída estão traduzidas (ex.: `Inglês · 148/150`).

### Progresso da tradução

O progresso é contado em legendas: uma está traduzida quando tem texto. Acima da tradução, uma linha mostra quantas estão traduzidas (ex.: `Traduzido: 148/150 · 98%`). A porcentagem é arredondada para baixo, então `100%` só aparece quando todas estão traduzidas.

Enquanto faltarem algumas, as setas ao lado dela vão para as legendas anterior e seguinte **Ainda não traduzido**, destacando cada uma, e mostram em qual você está (ex.: `1 de 2`). Passe o mouse sobre uma delas para mostrar o botão **Traduzir texto…** à direita, que abre a caixa de diálogo para traduzi-la.

### Corrija e ajuste os tempos da tradução

Uma tradução costuma precisar de outros tempos que o original, por exemplo legendas que levam mais tempo para ler. Clique com o botão direito em uma legenda da tradução para:

- **Editar texto…**: mudar o texto dele.
- **Editar tempos…**: mudar quando ele começa e termina, com precisão de milissegundos. Digite os tempos como `00:01:05,900`, `01:05,9` ou `65.9`.
- **Adicionar legenda depois…**: adicionar uma legenda, que por padrão preenche o intervalo até a seguinte.
- **Eliminar legenda**.

Você também pode mudar os tempos da transcrição e adicionar legendas a ela: veja [Corrija a transcrição](/pt/guides/transcript/#corrija-a-transcrição).

### Traduza você mesmo

Para escrever a tradução você mesmo, escolha **Manual** em **Traduzir com:**. Não precisa de chave de API. A tradução começa com uma legenda vazia para cada uma da transcrição, exibida como **Ainda não traduzido**, e o painel mostra quantas faltam. Clique com o botão direito em uma delas e escolha **Traduzir texto…**: a caixa de diálogo mostra o texto original dito nesse intervalo. Ao passar o mouse sobre uma delas, aparece um botão **Traduzir texto…** à direita, que abre a mesma caixa de diálogo.

### Legendas e exportação

- Nas transcrições de vídeos, marque **Mostrar como legendas do vídeo** no menu **Traduzir** para mostrar a tradução como legendas. O menu do vídeo também as troca. Veja [Assista a vídeos com legendas](/pt/guides/transcript/#assista-a-vídeos-com-legendas).
- Para salvar a tradução em um arquivo, clique no botão de exportar do painel dela. Ela é exportada nos mesmos [formatos](/pt/guides/transcript/#copie-e-exporte) da transcrição, com o idioma no nome do arquivo (ex.: `video.es.srt`), então os players de vídeo a carregam junto com o vídeo. As legendas ainda não traduzidas não são exportadas. O mesmo menu faz uma [cópia do vídeo com as legendas](/pt/guides/transcript/#exporte-o-vídeo-com-as-legendas).

:::tip
Para obter a transcrição diretamente em outro idioma, sem provedor, você também pode traduzir durante a transcrição. Consulte [Idioma](/pt/guides/transcription-settings/#idioma).
:::

## Provedores

Os provedores são escolhidos em **Preferências** → **Provedores**, separadamente para os resumos, as perguntas e as traduções.

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

O [Ollama](https://ollama.com) roda os modelos no seu computador, sem chave de API e sem enviar o texto para lugar nenhum. Instale-o, baixe um modelo (ex.: `ollama pull llama3.2`) e escolha **Ollama** como provedor. Se ele não rodar no endereço padrão, mude a **URL do servidor** em **Preferências** → **Provedores** (`http://localhost:11434` por padrão).

:::note
Cada provedor cobra pelo uso da sua API, pelo qual o Audiotext não se responsabiliza. As chaves de API ficam no armazenamento de credenciais do seu sistema. Consulte [Arquivos e dados](/pt/reference/files-and-data/).
:::
