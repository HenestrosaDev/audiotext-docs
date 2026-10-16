---
title: Preferências
description: Todas as configurações da janela de Preferências, aba por aba.
sidebar:
  order: 2
---

As **Preferências** guardam as configurações que não mudam a cada transcrição. Abra-as com a engrenagem no canto superior direito da janela. As alterações são salvas automaticamente.

## Geral

- **Aparência**: **Sistema** (segue o seu sistema), **Claro** ou **Escuro**.
- **Tamanho da interface**: o tamanho do texto e dos controlos, de 80% a 200%. `100%` por predefinição. A alteração é aplicada de imediato.
- **Idioma da interface**: o idioma do Audiotext, ou **Idioma do sistema**. Consulte os [idiomas disponíveis](/pt/reference/formats-and-languages/#idiomas-da-interface).
- **Formato da data**: como as datas das transcrições são exibidas, no idioma da interface: curto (`04/10/2026`), médio (`4 de out. de 2026`, padrão), longo (`4 de outubro de 2026`) ou ISO (`2026-10-04`). O menu mostra cada formato com um exemplo.
- **Formato da hora**: **Automático** (o relógio do idioma da interface), de 12 horas (`1:30 PM`) ou de 24 horas (`13:30`).
- **Notificações**: mostra uma notificação do sistema quando uma transcrição está pronta (numa pasta, quando todos os seus arquivos estão, e numa pasta monitorada, cada vez que um arquivo novo está). Ativado por padrão. No macOS, vêm do **Editor de Scripts** e no Windows do **Windows PowerShell**, por isso são permitidas ou silenciadas para esses apps nos ajustes do sistema. No Linux, requerem `notify-send` (o pacote `libnotify-bin` ou `libnotify`).
- **Atualizações**: verifica se há uma nova versão ao abrir o aplicativo e, se houver, mostra na barra superior um botão **A versão … está disponível** que abre a página de download. As versões de pré-lançamento não são oferecidas. Ativado por padrão.

## IA

Os provedores dos [resumos, das perguntas e das traduções](/pt/guides/summary-and-translation/):

- **Resumo** → **Provedor** e **Modelo**.
- **Perguntar** → **Provedor** e **Modelo**: os que respondem às perguntas sobre as transcrições. São os dos resumos até você mudá-los.
- **Tradução** → **Provedor** e **Modelo**. DeepL e Google Translate não têm modelos para escolher.
- **Ollama** → **URL do servidor**: o endereço do Ollama, `http://localhost:11434` por padrão.

Deixe o **Modelo** vazio para usar o modelo padrão do provedor. O botão ao lado do provedor define a chave de API dele.

## Chaves de API

As chaves de cada serviço. Clique em **Definir chave de API…** para inserir uma, ou em **Alterar chave de API…** para substituí-la (deixe-a vazia para removê-la). Elas ficam no armazenamento de credenciais do seu sistema.

| Chave | Usada para |
| --- | --- |
| Chave de API da OpenAI | A API do Whisper, e resumir, perguntar e traduzir com a OpenAI |
| Chave de API da Anthropic | Resumir, perguntar e traduzir com o Claude |
| Chave de API do DeepSeek | Resumir, perguntar e traduzir com o DeepSeek |
| Chave de API do Gemini | Resumir, perguntar e traduzir com o Gemini (do Google AI Studio) |
| Chave de API da Mistral | Resumir, perguntar e traduzir com a Mistral |
| Chave de API da xAI | Resumir, perguntar e traduzir com o Grok |
| Chave de API do DeepL | Traduzir com o DeepL (chaves do plano gratuito também funcionam) |
| Chave de API do Google | Google Speech-to-Text além da camada gratuita, e Google Translate (Cloud Translation API) |
| Token do Hugging Face | Identificar os falantes com o WhisperX |

:::caution
Cada provedor cobra pelo uso da sua API, pelo qual o Audiotext não se responsabiliza. Se a OpenAI retornar o erro `429` com uma chave nova, consulte [Solução de problemas](/pt/help/troubleshooting/#a-api-do-whisper-retorna-o-erro-429).
:::

## WhisperX

**Tipo de computação**, **Tamanho do lote** e **Usar CPU**. Consulte as [opções avançadas do WhisperX](/pt/reference/engines/#opções-avançadas). Em um Mac com Apple Silicon, o WhisperX transcreve na GPU dele, a menos que **Usar CPU** esteja ativado. Consulte [Em um Mac](/pt/reference/engines/#em-um-mac).

## Legendas

Como as legendas são divididas: as mostradas sobre o vídeo e no modo **Legendas**, os arquivos de legendas exportados e os [vídeos com legendas](/pt/guides/transcript/#exporte-o-vídeo-com-as-legendas). Cada opção tem um valor para os vídeos horizontais e outro para os verticais (mais altos do que largos, ex.: para celulares), que são mais estreitos:

| Opção | Horizontal | Vertical |
| --- | :---: | :---: |
| **Máx. de linhas por legenda** | `2` | `2` |
| **Máx. de caracteres por linha** | `42` | `24` |
| **Chinês, japonês e coreano**: os caracteres por linha nesses idiomas, cujos caracteres são cerca de duas vezes mais largos que os latinos | `16` | `10` |

As linhas de uma legenda são equilibradas, e os idiomas escritos sem espaços são quebrados entre caracteres.

**Destacar palavras** sublinha cada palavra enquanto ela é dita nos arquivos `.srt` e `.vtt`. Desativado por padrão.

## API do Whisper

**Temperatura** e **Carimbos de tempo das palavras**. Consulte as [opções da API do Whisper](/pt/reference/engines/#opções).

## Sobre

A versão do Audiotext e links para esta documentação, para o código-fonte no GitHub e para a página de doações. **Verificar atualizações** verifica na hora se há uma nova versão: se houver, o botão vira **Baixar** e abre a página dela.
