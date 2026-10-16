---
title: A transcrição
description: Reproduza, pesquise, corrija, revise, copie e exporte uma transcrição, e assista a vídeos com as legendas ou exporte-os.
sidebar:
  order: 3
---

Selecione uma transcrição no [histórico](/pt/guides/history/) para abri-la. A barra de ferramentas alterna entre quatro modos, **Legendas**, **Texto simples**, **Resumo** e **Perguntar**, e tem o botão **Traduzir** e o menu `⋯`.

A transcrição aparece em um cartão com o título do seu idioma. Os botões do cabeçalho localizam e substituem nela, copiam, exportam e a **Transcrevem novamente** (depois de perguntar, já que as correções do texto são perdidas).

## Legendas

Mostra a transcrição dividida nas legendas do vídeo, com quando cada uma começa e termina e, se os falantes foram identificados, o seu falante. O tamanho delas segue as [preferências das legendas](/pt/reference/preferences/#legendas).

Por padrão, os tempos são mostrados com precisão de milissegundos, como nas legendas (`00:01:05,900 – 00:01:09,350`). Para simplificá-los (`01:05 – 01:09`), desmarque **Marcas de tempo precisas (HH:MM:SS,mmm)** no menu `⋯`.

Os carimbos de tempo só estão disponíveis com o **WhisperX** e com os modelos `whisper-1` e `gpt-4o-transcribe-diarize` da **API do Whisper**. Sem eles, a transcrição não pode ser reproduzida legenda por legenda; use o modo **Texto simples**.

### Reproduza o áudio

- **Clique em uma legenda** para reproduzir o áudio a partir dali. A legenda em reprodução é destacada e mantida no meio do texto. Com os tempos por palavra, cada palavra também é destacada.
- Use a barra do player para reproduzir, pausar, ir para qualquer ponto e mudar a **velocidade**, de `0.5×` a `2×`, mantendo o tom das vozes.
- Atalhos de teclado: `Espaço` reproduz ou pausa, e `←`/`→` voltam ou avançam 5 segundos.

Se o arquivo de origem foi movido ou excluído, o áudio não está disponível, mas o texto está. As gravações do microfone são mantidas pelo Audiotext, então sempre podem ser reproduzidas.

![Uma transcrição a ser reproduzida, com o segmento atual realçado](/screenshots/transcript.png)

### Assista a vídeos com legendas

As transcrições de vídeos mostram o vídeo acima do texto. O menu dele permite **Mostrar legendas no vídeo** e escolher o **Tamanho** (pequeno, médio ou grande), a **Posição** (embaixo ou em cima) e o **Estilo** (fundo escuro ou contorno). Se a transcrição tiver [traduções](/pt/guides/summary-and-translation/#tradução), o menu também escolhe se as legendas mostram a **Transcrição** ou a **Tradução para…** um idioma.

## Localize e substitua

Pressione `Ctrl+F` (`⌘F` no macOS), ou clique na lupa do cabeçalho, para abrir a janela de localizar e substituir no texto em que você está trabalhando: a transcrição ou a sua tradução. Ela encontra o texto enquanto você digita (os carimbos de tempo e os falantes não são pesquisados) e mostra quantas ocorrências há.

- `Enter` e `Shift+Enter`, ou as setas, vão para a ocorrência seguinte e anterior.
- **Substituir** substitui a ocorrência atual, e **Substituir tudo** todas elas, ex.: um nome escrito errado. Marque **Diferenciar maiúsculas** para encontrar só o texto com as mesmas maiúsculas.
- A janela não é modal, então você pode ler e reproduzir o texto enquanto ela está aberta. **Manter no topo** a mantém acima da janela principal.
- `Esc` a fecha.

## Corrija a transcrição

Para corrigir a transcrição sem perder os carimbos de tempo (usados pelas legendas e pela reprodução), use a janela de [Localizar e substituir](#localize-e-substitua) ou clique com o botão direito em uma legenda:

- **Reproduzir daqui**: reproduz a legenda.
- **Copiar**: copia o texto dela.
- **Editar texto…**: muda o texto dela.
- **Renomear falantes…**: dá um nome a cada falante (`SPEAKER_00` → `Ana`). Dar o mesmo nome a dois falantes os mescla. Também está no menu `⋯`.

As palavras que não mudam mantêm os seus tempos, então continuam sendo destacadas durante a reprodução.

## Revise as palavras de baixa confiança

As palavras de que o mecanismo tem menos certeza são sublinhadas, para que você saiba onde revisar primeiro. O WhisperX pontua cada palavra quando calcula os tempos dela (**Tempos por palavra**, ativado por padrão), e o modelo `whisper-1` da API do Whisper pontua cada segmento, então os segmentos dele são sublinhados inteiros.

Uma barra acima do texto mostra quantas palavras faltam revisar (ex.: `3 de 12 por rever`):

- As setas dela, ou `Ctrl+J` e `Shift+Ctrl+J` (`⌘J` e `⇧⌘J` no macOS), vão para a palavra seguinte e anterior, e movem o player até elas. Com **Reprodução automática**, cada palavra é reproduzida com um momento ao redor.
- `Enter` aceita a palavra em que você está como ela é, e vai para a seguinte. **Aceitar as restantes** aceita todas as que faltam, e **Anular** desfaz a última revisão.
- Clique em uma palavra para corrigi-la no lugar: digite o texto correto e pressione `Enter` (ou **Aceitar** sem mudanças). **Reproduzir novamente** (`Ctrl+R`, `⌘R` no macOS) a reproduz de novo, e `Esc` fecha.
- **Só as marcadas** mostra só as legendas com palavras por revisar.
- As palavras também são marcadas abaixo da posição do áudio. Clique em uma marca para ir até a palavra dela.

Quando todas estiverem revisadas, **Rever novamente as palavras aceites** traz de volta as palavras que você aceitou. As palavras corrigidas continuam revisadas.

As palavras são sublinhadas quando a pontuação delas é inferior a 40%. Escolha outro limiar, de 20% a 70%, em `⋯` → **Limiar de baixa confiança**, ou em **Ajustar limiar** na barra. Para deixar de sublinhá-las e ocultar a barra, desmarque **Destacar palavras de baixa confiança** no menu `⋯`.

Se uma transcrição não tiver pontuações, o menu `⋯` diz por quê: **Ative «Tempos por palavra» e transcreva-o novamente**, **Não há modelo de alinhamento para o seu idioma**, **Transcreva-o novamente para pontuar as palavras** (ela foi feita antes de as palavras serem pontuadas) ou **Só WhisperX e whisper-1 pontuam as palavras**.

## Texto simples

O modo **Texto simples** permite editar o texto livremente, como em um editor de texto. As alterações são salvas automaticamente. A transcrição mantém o texto original com os carimbos de tempo, então as legendas não usam as edições do texto simples.

## Copie e exporte

O botão de copiar do cabeçalho copia o texto da transcrição.

O botão de exportar (ou `Ctrl+S`, `⌘S` no macOS) salva a transcrição como:

| Formato | Conteúdo |
| --- | --- |
| Documento do Word (`.docx`) | O mesmo que o Markdown, pronto para editar ou imprimir |
| JSON (`.json`) | O texto, os segmentos com os carimbos de tempo, as palavras e os falantes, e o resumo, se houver |
| Legendas (`.srt`) | Legendas para players de vídeo |
| Legendas com estilo (`.ass`) | Legendas com uma cor para cada falante, para players e editores de vídeo |
| Legendas web (`.vtt`) | Legendas para a web |
| Markdown (`.md`) | O resumo, se houver, e o texto em parágrafos com o carimbo de tempo e o falante de cada um |
| Tabela (`.tsv`) | Uma linha por segmento, com o início e o fim (em milissegundos) e o texto |
| Texto simples (`.txt`) | O texto |

As legendas e a tabela exigem carimbos de tempo. As [traduções](/pt/guides/summary-and-translation/#legendas-e-exportação) e o [resumo](/pt/guides/summary-and-translation/#resumo) são exportados pelos seus próprios painéis.

### Exporte o vídeo com as legendas

Para compartilhar um vídeo onde não é possível carregar arquivos de legendas (ex.: uma rede social), escolha **Vídeo com legendas (.mp4)…** no menu de exportar da transcrição, ou de uma tradução. O Audiotext faz uma cópia do vídeo com as legendas desenhadas nele, como aparecem no aplicativo: com o tamanho, a posição e o estilo delas (consulte [Assista a vídeos com legendas](#assista-a-vídeos-com-legendas)).

Ela é feita em segundo plano, e o status mostra o progresso. Para cancelar, escolha **Parar de adicionar as legendas ao vídeo** no mesmo menu. A cópia é um arquivo MP4 (vídeo H.264 e áudio AAC), e o vídeo original não muda.

Se nenhuma fonte do seu sistema tiver alguns caracteres das legendas, eles são desenhados como quadrados, e o Audiotext os lista ao terminar. Consulte [Solução de problemas](/pt/help/troubleshooting/#o-vídeo-com-legendas-mostra-quadrados).

## Renomeie, marque e adicione notas

O cabeçalho da transcrição mostra o nome, a origem, a data e a etiqueta. Clique duas vezes no nome para renomeá-la, clique na etiqueta para mudá-la ou clique em **Adicionar nota** para escrever uma nota sobre ela. Clique na nota, ou no lápis dela, para editá-la, e na lixeira para excluí-la.

O menu `⋯` também tem essas opções, e abre a pasta do arquivo de origem ou a **pasta dos arquivos salvos**. Há mais opções no [histórico](/pt/guides/history/).
