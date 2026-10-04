---
title: Ficheiros e datos
description: Onde garda Audiotext a súa configuración, o historial, as gravacións e as claves de API, e as variables de contorno que le.
sidebar:
  order: 5
---

Audiotext garda os teus datos no teu ordenador. Non se envía nada a ningures agás que uses un motor remoto (a API de Whisper ou a API de Google) ou un provedor de IA distinto de Ollama.

## Cartafol de configuración de usuario

A configuración, o historial e as gravacións gárdanse no teu cartafol de configuración de usuario, así que se conservan ao actualizar:

| Sistema | Cartafol |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (ou `$XDG_CONFIG_HOME/audiotext`) |

Contén:

- `config.ini`: a túa configuración. Elimínao para restablecer os valores predeterminados.
- `history.json`: as túas transcricións, cos seus resumos, traducións e correccións.
- `media/`: as gravacións do micrófono e o audio descargado de URL, para poder reproducilos despois. Elimínanse cando se elimina a súa transcrición do historial.

Para usar outro cartafol, p. ex. para unha instalación portátil, configura a variable de contorno `AUDIOTEXT_CONFIG_DIR`.

:::note
O ficheiro `config.ini` do cartafol da aplicación contén a configuración predeterminada e nunca se modifica.
:::

## Claves de API

As claves de API e o token de Hugging Face gárdanse no almacén de credenciais do teu sistema:

- **macOS**: o Chaveiro.
- **Windows**: o Administrador de credenciais.
- **Linux**: o Secret Service (p. ex. GNOME Keyring ou KWallet).

Se o sistema non ten ningún (p. ex. un servidor sen escritorio), gárdanse nun ficheiro `.env` no cartafol de configuración, que só pode ler o teu usuario. As claves que as versións anteriores gardaban nese ficheiro móvense ao almacén de credenciais a primeira vez que se abre a aplicación.

As claves úsanse **só** para facer peticións á API de cada servizo.

## Variables de contorno

As variables de contorno cos nomes das claves teñen prioridade sobre as configuradas na aplicación:

| Variable | Servizo |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (API de Whisper, resumos, traducións) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text e Google Translate |
| `HF_TOKEN` | Hugging Face (identificación de falantes) |
| `AUDIOTEXT_CONFIG_DIR` | O cartafol da configuración e do historial |

## Modelos

Os modelos de WhisperX e da identificación de falantes descárganse a primeira vez que se usan, e Hugging Face gárdaos na caché en `~/.cache/huggingface` (ou `%USERPROFILE%\.cache\huggingface` en Windows). Elimina ese cartafol para liberar o espazo que ocupan.
