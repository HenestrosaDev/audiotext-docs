---
title: Solução de problemas
description: Soluções para os problemas mais comuns do Audiotext.
sidebar:
  order: 1
---

## A primeira transcrição com o WhisperX demora muito

Na primeira vez que um modelo é usado, ele é baixado, o que pode levar vários minutos dependendo da sua conexão e do tamanho do modelo (até ~3 GB). O progresso mostra quando ele está carregando. O modelo fica na memória enquanto as opções dele não mudarem, então as transcrições seguintes começam na hora.

## O WhisperX falha com `CUDA out of memory`

A sua GPU não tem memória suficiente para as configurações. Tente, nesta ordem:

1. Diminua o **Tamanho do lote** (ex.: `4`) em **Preferências** → **Transcrição**.
2. Use um modelo menor (ex.: `small` ou `base`).
3. Use um **Tipo de computação** mais leve (ex.: `int8`).

Os dois últimos podem reduzir a qualidade. Consulte [Mecanismos](/pt/reference/engines/#modelo) para ver a memória de que cada modelo precisa.

## Transcrever demora demais

A velocidade do WhisperX depende do seu hardware, então não espere resultados instantâneos em CPUs modestas. Tente um modelo menor, como `small`, ou `large-v3-turbo` em uma GPU, ou o tipo de computação `int8`. Em um Mac com Apple Silicon, verifique se **Usar CPU** está desativado em **Preferências** → **Transcrição**, para que transcreva na GPU. Você também pode usar a **API do Whisper** ou a **API do Google**, que rodam em servidores remotos.

## A API do Whisper retorna o erro `429`

```text
RateLimitError("Error code: 429 - {'error': {'message': 'You exceeded your current quota, ...', 'type': 'insufficient_quota', ...}}")
```

A sua conta da OpenAI ficou sem créditos, ou você precisa adicionar fundos antes de usar a API pela primeira vez (mesmo que tenha créditos gratuitos). Compre créditos na seção [Billing](https://platform.openai.com/settings/organization/billing/overview) da sua conta da OpenAI. Pode levar até 10 minutos para a sua conta ser ativada.

Se você criou a chave de API antes de adicionar fundos pela primeira vez e o erro persistir depois de 10 minutos, crie uma chave nova e defina-a em **Preferências** → **Chaves de API**.

## Os falantes não são identificados

Se a transcrição falhar com **Identificar falantes requer um token do Hugging Face.** ou **Não foi possível baixar o modelo de identificação de falantes.**, o token está ausente, não é válido ou não consegue acessar o modelo.

Identificar os falantes exige um token do Hugging Face e aceitar as condições do modelo. Verifique se:

- Você aceitou as condições do [pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1) com a mesma conta.
- O token tem a função `Read` e está definido em **Preferências** → **Chaves de API**.

Consulte [Identifique os falantes](/pt/guides/transcription-settings/#identifique-os-falantes).

## Nenhum microfone é encontrado, ou nada é gravado

- Verifique se o microfone está conectado e clique no botão de atualizar ao lado da lista de microfones.
- No macOS, permita o acesso ao Audiotext em **Ajustes do Sistema** → **Privacidade e Segurança** → **Microfone**. No Windows, em **Configurações** → **Privacidade** → **Microfone**.
- Se o medidor de nível mostrar **Sem som**, escolha outro microfone na lista ou verifique se ele não está mudo.
- Se aparecer **Nenhum áudio foi gravado.**, a gravação terminou antes de o microfone enviar qualquer som. Grave de novo ou escolha outro microfone.

## O texto ao vivo não aparece

Se aparecer **O texto não pode ser mostrado durante a gravação.** durante a gravação, não foi possível carregar o **Modelo ao vivo**: por exemplo, ele é baixado na primeira vez que é usado, o que requer conexão com a Internet, ou não há memória suficiente. A gravação não é afetada e é transcrita normalmente quando você para. Escolha um **Modelo ao vivo** menor (ex.: `tiny` ou `base`) no cartão **Texto ao vivo**.

## O áudio de uma transcrição não pode ser reproduzido

O arquivo de origem foi movido ou excluído. O texto é mantido, mas o áudio só pode ser reproduzido a partir do arquivo original. As gravações do microfone e o áudio de URLs são mantidos pelo Audiotext.

## Um vídeo do YouTube não pode ser baixado

Verifique se a URL está correta e se o vídeo é público. O YouTube muda com frequência, então, se continuar falhando, veja se há uma versão mais recente do Audiotext.

Se aparecer **O vídeo do YouTube não tem faixa de áudio.**, o vídeo não tem som para transcrever.

## Um link não pode ser transcrito

- **A URL não aponta para um arquivo de áudio ou vídeo.**: o link abre uma página da web, não um arquivo. Só funcionam os links de vídeos do YouTube e os links diretos para arquivos de áudio ou vídeo. Procure na página o link que baixa o arquivo (ex.: o episódio de um podcast) e use-o, ou baixe o arquivo e transcreva-o com a fonte **Arquivo**.
- **Não foi possível baixar o arquivo: …**: não foi possível acessar o arquivo. Verifique se o link abre no seu navegador e se você está conectado à Internet. Links que exigem login não podem ser baixados: baixe o arquivo você mesmo e use a fonte **Arquivo**.

## Uma pasta não transcreve nenhum arquivo

Os arquivos que já têm uma transcrição são ignorados, assim como os arquivos ocultos e os que correspondem a **Ignorar arquivos que correspondam a**. Para transcrevê-los de novo, use **Transcrever tudo novamente…** no menu `⋯` da pasta, ou selecione-os na [lista de arquivos](/pt/guides/sources/#os-arquivos-de-uma-pasta) dela. Os arquivos das subpastas só são transcritos com **Incluir subpastas**, e a pasta deve conter [arquivos compatíveis](/pt/reference/formats-and-languages/).

## A API do Google pede o idioma

A API do Google não consegue detectar o idioma. Escolha o **Idioma do áudio** nas configurações.

## Um resumo, uma resposta ou uma tradução falha

- **O DeepL não consegue traduzir para ….**: o DeepL não oferece suporte a esse idioma. Escolha outro provedor, como um modelo de linguagem.
- **A resposta do modelo foi longa demais.**, **O modelo não retornou um resumo válido.**, **O modelo não retornou uma resposta válida.** ou **O modelo não retornou uma tradução válida.**: o modelo não escreveu o resumo, a resposta ou a tradução no formato esperado. Tente de novo ou escolha um modelo maior em **Preferências** → **Provedores**. Os modelos pequenos do Ollama falham com mais frequência.
- Para qualquer outro erro, verifique se a chave de API do provedor está definida em **Preferências** → **Chaves de API** e se a sua conta tem créditos.

## As palavras de baixa confiança não são sublinhadas

Verifique se **Destacar palavras de baixa confiança** está ativado no menu `⋯` da transcrição. Se a transcrição não tiver pontuações, o menu diz por quê:

- **Ative «Tempos por palavra» e transcreva-o novamente**: o WhisperX pontua as palavras quando calcula os tempos delas.
- **Não há modelo de alinhamento para o seu idioma**: as palavras desse idioma não podem ser cronometradas nem pontuadas.
- **Transcreva-o novamente para pontuar as palavras**: ela foi transcrita antes de as palavras serem pontuadas.
- **Só WhisperX e whisper-1 pontuam as palavras**: os outros mecanismos e modelos não pontuam.

Consulte [Revise as palavras de baixa confiança](/pt/guides/transcript/#revise-as-palavras-de-baixa-confiança).

## O vídeo com legendas mostra quadrados

Se **Exportado para …, mas nenhuma fonte tem estes caracteres, por isso são mostrados como quadrados: …** aparecer depois de [exportar o vídeo com as legendas](/pt/guides/transcript/#exporte-o-vídeo-com-as-legendas), nenhuma fonte do seu sistema consegue desenhar esses caracteres. Instale uma fonte para essa escrita (ex.: [Noto](https://fonts.google.com/noto)) e exporte de novo.

## Não é possível verificar atualizações

**Não foi possível verificar atualizações.** significa que o Audiotext não conseguiu acessar o GitHub. Verifique a sua conexão com a Internet, ou se um firewall ou proxy a bloqueia. Você sempre pode baixar a versão mais recente na [página de versões](https://github.com/HenestrosaDev/audiotext/releases/latest).

## Outro problema

Pesquise nas [issues](https://github.com/HenestrosaDev/audiotext/issues) ou pergunte nas [discussões](https://github.com/HenestrosaDev/audiotext/discussions). Se você encontrar um bug, [relate-o](https://github.com/HenestrosaDev/audiotext/issues/new/choose) com o seu sistema, a versão do Audiotext e os passos para reproduzi-lo.
