---
title: Origens do áudio
description: Transcreva arquivos, vídeos do YouTube e links, gravações do microfone, pastas e pastas monitoradas.
sidebar:
  order: 1
---

O Audiotext transcreve a partir de quatro tipos de origem, que você escolhe na barra superior, em **Nova transcrição**.

## Arquivo

Transcreve um arquivo de áudio ou vídeo. Clique em **Escolher um arquivo…** ou solte o arquivo na janela. O explorador de arquivos mostra **Todos os arquivos compatíveis** por padrão; você pode mostrar apenas **Arquivos de áudio** ou **Arquivos de vídeo**. Consulte [Formatos e idiomas](/pt/reference/formats-and-languages/) para ver os formatos compatíveis.

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

Com o **WhisperX**, ative **Mostrar o texto durante a gravação** no cartão **Texto ao vivo** para ver um rascunho do texto enquanto você fala. O rascunho é escrito por um **Modelo ao vivo** rápido (`small` por padrão). Quando você para, toda a gravação é transcrita de novo com o modelo do mecanismo, que é mais preciso, e o rascunho é substituído.

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

Transcreve todos os arquivos de áudio e vídeo de uma pasta **e das suas subpastas**. Clique em **Escolher uma pasta…** ou solte a pasta na janela. O Audiotext informa quantos arquivos encontrou.

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

Os arquivos que já têm uma transcrição **são ignorados**, a menos que você ative **Substituir arquivos existentes**. Assim, se você adicionar um arquivo à pasta e transcrevê-la de novo, apenas o arquivo novo é transcrito.

Se um arquivo não puder ser transcrito, os demais continuam sendo transcritos, e a visualização da pasta mostra quais falharam e por quê. **Transcrever de novo** repete a pasta, e o botão de pasta abre a pasta dos arquivos salvos.

### Monitore uma pasta

Ative **Monitorar a pasta** no cartão **Pasta** para continuar transcrevendo os arquivos adicionados à pasta (ou às suas subpastas) até você clicar em **Parar de monitorar**. É útil para as gravações de um gravador de voz ou de uma ferramenta de reuniões que são copiadas para uma pasta.

- Os arquivos que a pasta já contém são ignorados. Para transcrevê-los, transcreva a pasta sem monitorá-la.
- Um arquivo é transcrito quando termina de ser copiado (quando o tamanho dele para de mudar), então arquivos grandes não são transcritos pela metade.
- Os erros não interrompem o monitoramento.

## A fila

Você pode configurar uma nova transcrição enquanto outra está em andamento: o botão vira **Adicionar à fila**, e ela começa quando a atual terminar. As transcrições na fila e em andamento aparecem no histórico.
