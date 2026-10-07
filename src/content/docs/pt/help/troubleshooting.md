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

1. Diminua o **Tamanho do lote** (ex.: `4`) em **Preferências** → **WhisperX**.
2. Use um modelo menor (ex.: `small` ou `base`).
3. Use um **Tipo de computação** mais leve (ex.: `int8`).

Os dois últimos podem reduzir a qualidade. Consulte [Mecanismos](/pt/reference/engines/#modelo) para ver a memória de que cada modelo precisa.

## Transcrever demora demais

A velocidade do WhisperX depende do seu hardware, então não espere resultados instantâneos em CPUs modestas. Tente um modelo menor, como `small`, ou `large-v3-turbo` em uma GPU, ou o tipo de computação `int8`. Você também pode usar a **API do Whisper** ou a **API do Google**, que rodam em servidores remotos.

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

Os arquivos que já têm uma transcrição são ignorados. Ative **Substituir arquivos existentes** para transcrevê-los de novo. A pasta também precisa conter [arquivos compatíveis](/pt/reference/formats-and-languages/).

## A API do Google pede o idioma

A API do Google não consegue detectar o idioma. Escolha o **Idioma do áudio** nas configurações.

## Um resumo ou uma tradução falha

- **O DeepL não consegue traduzir para ….**: o DeepL não oferece suporte a esse idioma. Escolha outro provedor, como um modelo de linguagem.
- **A resposta do modelo foi longa demais.**, **O modelo não retornou um resumo válido.** ou **O modelo não retornou uma tradução válida.**: o modelo não escreveu o resumo ou a tradução no formato esperado. Tente de novo ou escolha um modelo maior em **Preferências** → **IA**. Os modelos pequenos do Ollama falham com mais frequência.
- Para qualquer outro erro, verifique se a chave de API do provedor está definida em **Preferências** → **Chaves de API** e se a sua conta tem créditos.

## Não é possível verificar atualizações

**Não foi possível verificar atualizações.** significa que o Audiotext não conseguiu acessar o GitHub. Verifique a sua conexão com a Internet, ou se um firewall ou proxy a bloqueia. Você sempre pode baixar a versão mais recente na [página de versões](https://github.com/HenestrosaDev/audiotext/releases/latest).

## Outro problema

Pesquise nas [issues](https://github.com/HenestrosaDev/audiotext/issues) ou pergunte nas [discussões](https://github.com/HenestrosaDev/audiotext/discussions). Se você encontrar um bug, [relate-o](https://github.com/HenestrosaDev/audiotext/issues/new/choose) com o seu sistema, a versão do Audiotext e os passos para reproduzi-lo.
