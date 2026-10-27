---
title: Origens do áudio
description: Transcreva arquivos, vídeos do YouTube e links, gravações do microfone, pastas e pastas monitoradas.
sidebar:
  order: 1
---

O Audiotext transcreve a partir de quatro tipos de origem, que você escolhe na barra superior, em **Nova transcrição**.

## Arquivo

Transcreve um arquivo de áudio ou vídeo. Clique em **Escolher arquivo…** ou solte o arquivo na janela. O explorador de arquivos mostra **Todos os arquivos compatíveis** por padrão; você pode mostrar apenas **Arquivos de áudio** ou **Arquivos de vídeo**. Consulte [Formatos e idiomas](/pt/reference/formats-and-languages/) para ver os formatos compatíveis.

Só é possível adicionar um arquivo por vez. Para transcrever vários arquivos, use a origem [Pasta](#pasta).

## URL

Transcreve um **vídeo do YouTube** ou um **link direto para um arquivo de áudio ou vídeo** (por exemplo, o episódio de um podcast). Cole a URL (com **Colar** ou `Ctrl+V`) e clique em **Continuar**. A URL deve começar com `http://` ou `https://`.

```text
https://youtu.be/dQw4w9WgXcQ
https://example.com/podcast/episode-12.mp3
```

Primeiro o áudio é baixado, então é preciso conexão com a internet.

## Microfone

Grava a sua voz ou uma reunião e a transcreve. A gravação é mantida no seu histórico, para você poder reproduzi-la depois.

1. Escolha o microfone na lista (clique no botão de atualizar se você acabou de conectá-lo).
2. Clique no botão de gravar (ou pressione `Ctrl+Enter`, `⌘↩` no macOS) para começar a gravar. O medidor de nível indica se o som está **Baixo demais**, com **Bom nível** ou **Alto demais**.
3. Clique nele de novo para parar e transcrever.

### Texto ao vivo

Com o **WhisperX**, ative **Mostrar texto durante a gravação** no cartão **Texto ao vivo** para ver um rascunho do texto enquanto você fala. O rascunho é escrito por um **Modelo ao vivo** rápido (`small` por padrão). Quando você para, toda a gravação é transcrita de novo com o modelo do mecanismo, que é mais preciso, e o rascunho é substituído.

![O texto em direto durante a gravação com o microfone](/screenshots/live-text.png)

:::caution
O seu sistema precisa detectar um dispositivo de entrada e permitir que o aplicativo o use. Caso contrário, é exibido **Nenhum microfone encontrado**. No macOS, permita o acesso ao Audiotext em **Ajustes do Sistema** → **Privacidade e Segurança** → **Microfone**.
:::

### Gravar o áudio do computador

Para transcrever o que o seu computador reproduz (uma videochamada, um webinar, um vídeo que não pode ser baixado), grave-o a partir de um dispositivo que envie o som dos alto-falantes para uma entrada. Configure-o uma vez, clique no botão de atualizar e escolha-o na lista de microfones. Tudo o que o computador reproduz é gravado, inclusive as notificações, mas não a sua voz.

- **Windows**: execute `mmsys.cpl` e, na guia **Gravação**, clique com o botão direito na lista para mostrar os dispositivos desativados e ative **Mixagem estéreo**. Se a sua placa de som não a tiver, instale o [VB-CABLE](https://vb-audio.com/Cable/), defina **CABLE Input** como dispositivo de saída e escolha **CABLE Output** no Audiotext. Para continuar ouvindo o som, marque **Ouvir este dispositivo** nas propriedades de **CABLE Output**.
- **macOS**: instale o [BlackHole](https://existential.audio/blackhole/) (`brew install blackhole-2ch`) e escolha **BlackHole 2ch** no Audiotext. Para continuar ouvindo o som, crie um [dispositivo de saída múltipla](https://github.com/ExistentialAudio/BlackHole/wiki/Multi-Output-Device) com os seus alto-falantes e o BlackHole, e defina-o como dispositivo de saída.
- **Linux** (PulseAudio ou PipeWire): escolha **pulse** no Audiotext e comece a gravar. Depois, na guia **Gravação** do `pavucontrol`, mude a fonte do Audiotext para o monitor dos seus alto-falantes.

## Pasta

Transcreve todos os arquivos de áudio e vídeo de uma pasta e, se **Incluir subpastas** estiver ativado no cartão **Pasta**, das suas subpastas. Clique em **Escolher pasta…** ou solte a pasta na janela. O Audiotext informa quantos arquivos encontrou. Para deixar alguns arquivos de fora, escreva os nomes ou caminhos deles, separados por vírgulas, em **Ignorar arquivos que correspondam a** (ex.: `*.wav, drafts/*`). Os arquivos ocultos são sempre ignorados.

A transcrição de cada arquivo é salva ao lado dele (ou em outra pasta que você escolher no cartão **Saída**), com o mesmo nome e a extensão de cada **tipo de arquivo** selecionado. Por exemplo, com `.txt` e `.vtt`:

```text
files-to-transcribe
├── paranoid-android.mp3
├── paranoid-android.txt
├── paranoid-android.vtt
└── movies
    ├── mulholland-dr.avi
    ├── mulholland-dr.txt
    └── mulholland-dr.vtt
```

Se dois arquivos tiverem o mesmo nome e outra extensão (ex.: `talk.mp3` e `talk.mp4`), as transcrições deles mantêm a extensão no nome (`talk.mp3.txt` e `talk.mp4.txt`), para que uma não substitua a outra.

Os arquivos que já têm uma transcrição **são ignorados**: um arquivo só é ignorado se tiver todos os tipos de arquivo que você selecionou, então adicionar um tipo de arquivo o transcreve de novo. Se um arquivo não puder ser transcrito, os demais continuam sendo transcritos.

### Os arquivos de uma pasta

A página de uma pasta no histórico lista os arquivos dela, com o status, a duração e o tamanho de cada um e uma prévia do texto. Pesquise-os, filtre-os por status (**Todos**, **Concluídos**, **Com erro** ou **Pendentes**) e ordene-os por nome, status, duração ou tamanho. Os arquivos que foram movidos ou excluídos são marcados como **Arquivo não encontrado**.

- Clique em um arquivo para abrir a transcrição dele, ou clique no botão `⋯` dele (ou clique com o botão direito) para copiar o texto, abri-lo direto na exportação, no resumo ou na tradução, mostrá-lo no gerenciador de arquivos ou escolher **Transcrever este arquivo novamente**.
- Selecione vários arquivos com `Ctrl`/`⌘` ou `Shift`, ou todos os arquivos mostrados com `Ctrl+A` / `⌘A`, e escolha **Transcrever novamente**, **Exportar…** (para exportá-los juntos em um único arquivo TXT, Markdown ou Word) ou **Remover do histórico…**. `Enter` abre o arquivo selecionado, e `Esc` limpa a seleção.
- **Tentar novamente os que falharam** transcreve de novo os arquivos que falharam. **Verificar a pasta novamente** transcreve apenas os arquivos sem transcrição, como os novos, e informa quantos foram ignorados porque já tinham uma.
- O menu `⋯` da pasta tem **Transcrever tudo novamente…** (transcreve de novo todos os arquivos dela, substituindo as transcrições), **Exportar tudo…** (em um único arquivo), uma opção para tirar da lista os arquivos ausentes, e as opções para abrir a pasta de origem ou a pasta dos arquivos salvos.
- Quando você altera as configurações da pasta, os arquivos transcritos com outras configurações (mecanismo, modelo, idioma…) são indicados, com o botão **Transcrevê-los novamente**.

O cabeçalho mostra onde os arquivos são salvos e tem um link para a pasta de origem. **Editar configurações** altera as configurações da pasta, e **Salvar e verificar novamente** transcreve com elas os arquivos que ainda não têm transcrição.

### Monitore uma pasta

Ative **Monitorar pasta** no cartão **Pasta** para continuar transcrevendo os arquivos adicionados à pasta (ou às suas subpastas) até você clicar em **Parar de monitorar**. É útil para as gravações de um gravador de voz ou de uma ferramenta de reuniões que são copiadas para uma pasta.

- Os arquivos que a pasta já contém são ignorados, a menos que você ative **Transcrever os arquivos que já estão na pasta**: então os que não têm transcrição são transcritos primeiro.
- Um arquivo é transcrito quando termina de ser copiado (quando o tamanho dele para de mudar), então arquivos grandes não são transcritos pela metade.
- As pastas que estavam sendo monitoradas quando o Audiotext foi fechado voltam a ser monitoradas quando ele abre, continuando a partir dos arquivos que já tinham visto. As pastas paradas podem voltar a ser monitoradas com **Retomar monitoramento**.
- Se a pasta não estiver disponível (ex.: está em uma unidade que não está conectada), o Audiotext espera por ela em vez de falhar.
- Para transcrever outra coisa ou gravar, a pasta é pausada (a nova transcrição mostra **Iniciando…** até que esteja) e depois volta a ser monitorada.
- Os erros não interrompem o monitoramento, e os arquivos transcritos juntos são avisados em uma única notificação.

## A fila

Você pode configurar uma nova transcrição enquanto outra está em andamento: o botão vira **Adicionar à fila**, e ela começa quando a atual terminar. As transcrições na fila e em andamento aparecem no histórico.
