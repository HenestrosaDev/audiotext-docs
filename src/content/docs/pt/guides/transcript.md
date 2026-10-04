---
title: A transcrição
description: Reproduza, pesquise, corrija, copie e exporte uma transcrição, e assista a vídeos com as legendas.
sidebar:
  order: 3
---

Selecione uma transcrição no [histórico](/pt/guides/history/) para abri-la. A barra de ferramentas alterna entre três modos, **Transcrição**, **Texto simples** e **Resumo**, e tem os botões **Traduzir**, **Copiar** e **Exportar**.

## Transcrição

Mostra cada frase com o seu carimbo de tempo e, se os falantes foram identificados, o seu falante.

Os carimbos de tempo só estão disponíveis com o **WhisperX** e com os modelos `whisper-1` e `gpt-4o-transcribe-diarize` da **API do Whisper**. Sem eles, a transcrição não pode ser reproduzida frase por frase; use o modo **Texto simples**.

### Reproduza o áudio

- **Clique em uma frase** para reproduzir o áudio a partir dali. A frase em reprodução é destacada, e o texto acompanha a reprodução. Com os tempos por palavra, cada palavra também é destacada.
- Use a barra do player para reproduzir, pausar, ir para qualquer ponto e mudar a **velocidade**, de `0.5×` a `2×`, mantendo o tom das vozes.
- Atalhos de teclado: `Espaço` reproduz ou pausa, e `←`/`→` voltam ou avançam 5 segundos.

Se o arquivo de origem foi movido ou excluído, o áudio não está disponível, mas o texto está. As gravações do microfone são mantidas pelo Audiotext, então sempre podem ser reproduzidas.

![Uma transcrição a ser reproduzida, com a frase atual realçada](/screenshots/transcript.png)

### Assista a vídeos com legendas

As transcrições de vídeos mostram o vídeo acima do texto. O menu dele permite **Mostrar legendas no vídeo** e escolher o **Tamanho** (pequeno, médio ou grande), a **Posição** (embaixo ou em cima) e o **Estilo** (fundo escuro ou contorno).

### Pesquise

Pressione `Ctrl+F` (`⌘F` no macOS) e digite. `Enter` e `Shift+Enter` vão para a ocorrência seguinte e anterior, e `Esc` limpa a pesquisa.

## Corrija a transcrição

Para corrigir a transcrição sem perder os carimbos de tempo (usados pelas legendas e pela reprodução), use as opções do menu `⋯` ou clique com o botão direito em uma frase:

- **Localizar e substituir…**: substitui uma palavra ou expressão em toda a transcrição, ex.: um nome escrito errado. Mostra quantas vezes o texto aparece antes de substituí-lo, e pode **Diferenciar maiúsculas**.
- **Renomear falantes…**: dá um nome a cada falante (`SPEAKER_00` → `Ana`). Dar o mesmo nome a dois falantes os mescla.
- **Editar o texto…**: clique com o botão direito em uma frase para mudar o texto dela.
- **Reproduzir daqui**: clique com o botão direito em uma frase para reproduzi-la.

As palavras que não mudam mantêm os seus tempos, então continuam sendo destacadas durante a reprodução.

## Texto simples

O modo **Texto simples** permite editar o texto livremente, como em um editor de texto. As alterações são salvas automaticamente. A transcrição mantém o texto original com os carimbos de tempo, então as legendas não usam as edições do texto simples.

## Copie e exporte

**Copiar** copia o texto do modo atual (a transcrição, o resumo ou a tradução).

**Exportar** (ou `Ctrl+S`, `⌘S` no macOS) salva a transcrição como:

| Formato | Conteúdo |
| --- | --- |
| Texto simples (`.txt`) | O texto |
| Markdown (`.md`) | O resumo, se houver, e o texto em parágrafos com o carimbo de tempo e o falante de cada um |
| Documento do Word (`.docx`) | O mesmo que o Markdown, pronto para editar ou imprimir |
| Legendas (`.srt`) | Legendas para players de vídeo |
| Legendas web (`.vtt`) | Legendas para a web |
| Tabela (`.tsv`) | Uma linha por frase, com o início e o fim (em milissegundos) e o texto |
| JSON (`.json`) | O texto, os segmentos com os carimbos de tempo, as palavras e os falantes, e o resumo, se houver |

As legendas e a tabela exigem carimbos de tempo.

## Renomeie, marque e adicione notas

O cabeçalho da transcrição mostra o nome, a origem, a data e a etiqueta. Clique duas vezes no nome para renomeá-la, clique na etiqueta para mudá-la ou clique em **Adicionar nota** para escrever uma nota sobre ela. Há mais opções no [histórico](/pt/guides/history/).
