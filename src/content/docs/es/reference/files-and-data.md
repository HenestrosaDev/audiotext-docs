---
title: Archivos y datos
description: Dónde guarda Audiotext sus ajustes, el historial, las grabaciones y las claves de API, y las variables de entorno que lee.
sidebar:
  order: 5
---

Audiotext guarda tus datos en tu ordenador. No se envía nada a ninguna parte salvo que uses un motor remoto (la API de Whisper o la API de Google) o un proveedor de IA distinto de Ollama. Al abrirse, también pregunta a GitHub si hay una versión nueva, lo que puedes desactivar en **Preferencias** → **General** → **Actualizaciones**.

## Carpeta de configuración de usuario

Los ajustes, el historial y las grabaciones se guardan en tu carpeta de configuración de usuario, así que se conservan al actualizar:

| Sistema | Carpeta |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (o `$XDG_CONFIG_HOME/audiotext`) |

Contiene:

- `config.ini`: tus ajustes. Elimínalo para restablecer los valores por defecto.
- `history.json`: tus transcripciones, con sus resúmenes, traducciones y correcciones.
- `media/`: las grabaciones del micrófono y el audio descargado de URL, para poder reproducirlos después. Se eliminan cuando se elimina su transcripción del historial.

Para usar otra carpeta, p. ej. para una instalación portátil, configura la variable de entorno `AUDIOTEXT_CONFIG_DIR`.

:::note
El archivo `config.ini` de la carpeta de la aplicación contiene los ajustes por defecto y nunca se modifica.
:::

## Claves de API

Las claves de API y el token de Hugging Face se guardan en el almacén de credenciales de tu sistema:

- **macOS**: el Llavero.
- **Windows**: el Administrador de credenciales.
- **Linux**: el Secret Service (p. ej. GNOME Keyring o KWallet).

Si el sistema no tiene ninguno (p. ej. un servidor sin escritorio), se guardan en un archivo `.env` en la carpeta de configuración, que solo puede leer tu usuario. Las claves que las versiones anteriores guardaban en ese archivo se mueven al almacén de credenciales la primera vez que se abre la aplicación.

Las claves se usan **solo** para hacer peticiones a la API de cada servicio.

## Variables de entorno

Las variables de entorno con los nombres de las claves tienen prioridad sobre las configuradas en la aplicación:

| Variable | Servicio |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (API de Whisper, resúmenes, traducciones) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text y Google Translate |
| `HF_TOKEN` | Hugging Face (identificación de hablantes) |
| `AUDIOTEXT_CONFIG_DIR` | La carpeta de los ajustes y del historial |

## Modelos

Los modelos de WhisperX y de la identificación de hablantes se descargan la primera vez que se usan y Hugging Face los guarda en la caché de `~/.cache/huggingface` (`%USERPROFILE%\.cache\huggingface` en Windows). Los modelos que alinean las palabras del inglés, el francés, el alemán, el español y el italiano los guarda PyTorch en `~/.cache/torch` (`%USERPROFILE%\.cache\torch` en Windows). Elimina esas carpetas para liberar el espacio que ocupan. Otras aplicaciones también pueden guardar ahí sus modelos, y los vuelven a descargar cuando los necesitan, como Audiotext.
