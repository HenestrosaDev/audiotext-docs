---
title: Instalação
description: Baixe o Audiotext para Windows, macOS ou Linux e abra-o pela primeira vez.
sidebar:
  order: 1
---

O Audiotext é um aplicativo de desktop para **Windows**, **macOS** e **Linux**. Ele transcreve para texto o áudio de arquivos, vídeos do YouTube e gravações do microfone, e pode traduzi-lo, resumi-lo e legendá-lo.

## Baixe o aplicativo

Baixe o arquivo do seu sistema na [versão mais recente](https://github.com/HenestrosaDev/audiotext/releases/latest) no GitHub:

| Sistema | Arquivo |
| --- | --- |
| Windows (64 bits) | `Audiotext-<version>-windows-x64-setup.exe` |
| macOS 15 ou posterior (Apple Silicon) | `Audiotext-<version>-macos-arm64.dmg` |
| Linux (x86_64) | `Audiotext-<version>-linux-x86_64.tar.gz` |

O aplicativo inclui tudo de que precisa, inclusive o FFmpeg.

### Windows

Execute o instalador e siga os passos. Ele não precisa de permissões de administrador. Se você tiver uma GPU NVIDIA, marque a opção de usar a GPU da NVIDIA (CUDA): o instalador baixará o complemento de GPU, que deixa o WhisperX muito mais rápido. O instalador não é assinado, então o Windows SmartScreen pode exibir um aviso: abra as informações adicionais e escolha executá-lo mesmo assim.

### macOS

Abra o arquivo `.dmg` e arraste o **Audiotext** para a pasta **Aplicativos**. O aplicativo não é notarizado pela Apple, então o macOS o bloqueia na primeira vez que você o abre: vá em **Ajustes do Sistema** → **Privacidade e Segurança** e clique em **Abrir Mesmo Assim** ao lado da mensagem sobre o Audiotext. No macOS, o WhisperX roda na CPU, já que o CUDA não está disponível. Macs com Intel não são suportados, já que o PyTorch não os suporta mais.

### Linux

Extraia o arquivo e execute o instalador em um terminal:

```bash
tar -xzf Audiotext-<version>-linux-x86_64.tar.gz
cd Audiotext-<version>-linux-x86_64
./install.sh
```

Ele instala o Audiotext para o seu usuário e o adiciona ao menu de aplicativos (também pode ser aberto com o comando `audiotext`). Se detectar uma GPU NVIDIA, oferece baixar o complemento de GPU. Execute `./install.sh --gpu` ou `./install.sh --cpu` para escolher sem ser perguntado, e `./install.sh --uninstall` para desinstalá-lo (suas configurações são mantidas).

:::tip
O complemento de GPU é um download de cerca de 2 GB no Windows e 4 GB no Linux, então só vale a pena com uma GPU NVIDIA. Sem ele, o WhisperX roda na CPU, e a API do Whisper e a API do Google funcionam do mesmo jeito. Para trocar depois entre a versão para CPU e a versão para GPU, instale o app de novo e escolha a outra opção.
:::

:::note
Na primeira vez que você transcreve com o **WhisperX** (o mecanismo padrão), o modelo dele é baixado. Ele ocupa de ~75 MB para o `tiny` até ~3 GB para o `large-v2`, então pode demorar um pouco. As transcrições seguintes começam na hora.
:::

## Requisitos

- O **WhisperX** roda no seu computador. Ele funciona em qualquer CPU, mas é muito mais rápido em uma GPU NVIDIA com CUDA. Consulte [Mecanismos](/pt/reference/engines/) para escolher um modelo adequado ao seu hardware.
- A **API do Whisper** e a **API do Google** rodam em servidores remotos, então precisam de conexão com a internet, mas não de um hardware potente.
- Para transcrever pelo microfone, o seu sistema precisa detectar um dispositivo de entrada.
- No Linux, gravar e reproduzir áudio exige o [PortAudio](https://www.portaudio.com/) (`sudo apt install libportaudio2` no Ubuntu ou Debian).

## Atualize o aplicativo

Quando uma nova versão é lançada, o Audiotext mostra um botão **A versão … está disponível** na barra superior. Clique nele para abrir a página da versão, baixe o arquivo do seu sistema e instale-o como na primeira vez: execute o novo instalador no Windows, arraste o novo aplicativo para a pasta **Aplicativos** no macOS ou execute o `install.sh` do novo arquivo no Linux. A versão anterior é substituída, e as suas configurações e o seu histórico são mantidos, pois ficam guardados na sua [pasta de configuração do usuário](/pt/reference/files-and-data/#pasta-de-configuração-do-usuário). Se você usa o complemento de GPU, escolha-o de novo ao instalar.

Para verificar você mesmo se há uma nova versão, abra **Preferências** → **Sobre** → **Verificar atualizações**. Para não verificar mais ao abrir o aplicativo, desative **Geral** → **Atualizações**.

## Desinstale o aplicativo

- **Windows**: desinstale-o em **Configurações** → **Aplicativos**, como qualquer outro aplicativo.
- **macOS**: arraste o **Audiotext** da pasta **Aplicativos** para o Lixo.
- **Linux**: execute `./install.sh --uninstall` na pasta do arquivo. Se você não a tiver mais, exclua `~/.local/share/audiotext`, `~/.local/bin/audiotext` e `~/.local/share/applications/audiotext.desktop`.

As suas configurações, o seu histórico e as suas gravações são mantidos, então continuam lá se você o instalar de novo. Para remover tudo:

1. Antes de desinstalar, remova as suas chaves de API em **Preferências** → **Chaves de API** (clique em **Alterar…** e deixe o campo vazio), pois elas ficam guardadas no armazenamento de credenciais do seu sistema.
2. Exclua a sua [pasta de configuração do usuário](/pt/reference/files-and-data/#pasta-de-configuração-do-usuário).
3. Exclua os [modelos](/pt/reference/files-and-data/#modelos) que foram baixados.

## Mude o idioma da interface

O Audiotext usa o idioma do seu sistema, se estiver disponível. Para mudá-lo, abra as **Preferências** (a engrenagem no canto superior direito) e escolha um idioma em **Geral** → **Idioma da interface**.

## Execute a partir do código-fonte

Se você quiser executar o código mais recente ou contribuir, consulte [Contribuir](/pt/help/contributing/) para preparar o projeto com Python.

## Próximos passos

- [Sua primeira transcrição](/pt/getting-started/first-transcription/) explica a janela e os passos para transcrever.
