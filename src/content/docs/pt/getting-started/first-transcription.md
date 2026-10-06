---
title: Sua primeira transcrição
description: Um tour pela janela do Audiotext e os passos para transcrever um arquivo de áudio ou vídeo.
sidebar:
  order: 2
---

## A janela

A janela do Audiotext tem três partes:

- **A barra superior**: os botões para começar uma **Nova transcrição** a partir de um **Arquivo**, uma **URL**, o **Microfone** ou uma **Pasta**, o status do aplicativo e a engrenagem que abre as [Preferências](/pt/reference/preferences/). O botão à esquerda mostra ou oculta o histórico.
- **O histórico**, à esquerda: todas as suas transcrições, que você pode pesquisar, fixar, agrupar e renomear. Consulte [Histórico](/pt/guides/history/).
- **A área principal**: a origem que você está configurando, o progresso de uma transcrição ou a transcrição que você selecionou no histórico.

![As partes da janela do Audiotext: a barra superior, o histórico e a área principal](/screenshots/window.png)

Ao abrir o aplicativo, a área principal pergunta **O que você quer transcrever?** e mostra um cartão para cada tipo de origem.

:::tip
Solte um arquivo ou uma pasta em qualquer lugar da janela para transcrevê-lo.
:::

## Transcreva um arquivo

1. Clique em **Arquivo** na barra superior (ou pressione `Ctrl+O`, `⌘O` no macOS) e escolha um arquivo de áudio ou vídeo, ou solte-o na janela. Depois, clique em **Continuar**.
2. Revise as configurações. Os valores padrão funcionam bem para a maioria dos áudios:
   - **Mecanismo**: WhisperX, que roda no seu computador. Escolha um **Modelo** menor (como `small`) se o seu computador for lento.
   - **Idioma**: o **Idioma do áudio** é detectado automaticamente. Escolha-o se você souber, para evitar erros. Para traduzir, escolha outro **Idioma da transcrição**.
   - **Contexto** e **Opções**: dicas e recursos opcionais, como identificar os falantes.

   Consulte [Configurações da transcrição](/pt/guides/transcription-settings/) para ver todas.
3. Clique em **Iniciar transcrição** (ou pressione `Ctrl+Enter`, `⌘↩` no macOS).

Enquanto trabalha, o progresso de cada etapa (carregar o modelo, transcrever, alinhar as palavras…) é exibido. Enquanto isso, você pode continuar usando o Audiotext: o resultado é salvo no seu histórico e abre quando estiver pronto. Para cancelá-la, clique em **Cancelar** ou pressione `Esc`.

Se houver outra transcrição em andamento, o botão vira **Adicionar à fila**, e a nova começa quando a atual terminar.

## Leia e use o resultado

Quando termina, a transcrição é aberta:

- Clique em um segmento para reproduzir o áudio a partir dali.
- Alterne entre **Transcrição**, **Texto simples** e **Resumo**.
- Use **Traduzir**, **Copiar** e **Exportar** para traduzi-la, copiá-la ou salvá-la como arquivo.

Consulte [A transcrição](/pt/guides/transcript/) para saber tudo o que você pode fazer com ela.

## Atalhos de teclado

| Atalho | Ação |
| --- | --- |
| `Ctrl+Enter` / `⌘↩` | Iniciar a transcrição, ou iniciar e parar a gravação |
| `Ctrl+O` / `⌘O` | Escolher um arquivo (ou uma pasta, na origem de pasta) |
| `Ctrl+S` / `⌘S` | Exportar a transcrição exibida |
| `Ctrl+F` / `⌘F` | Pesquisar na transcrição |
| `Esc` | Cancelar a transcrição em andamento |
| `Espaço` | Reproduzir ou pausar o áudio |
| `←` / `→` | Voltar ou avançar 5 segundos |
