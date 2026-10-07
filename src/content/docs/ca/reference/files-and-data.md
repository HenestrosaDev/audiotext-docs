---
title: Fitxers i dades
description: On desa Audiotext la configuració, l'historial, els enregistraments i les claus d'API, i les variables d'entorn que llegeix.
sidebar:
  order: 5
---

Audiotext desa les teves dades al teu ordinador. No s'envia res enlloc tret que facis servir un motor remot (l'API de Whisper o l'API de Google) o un proveïdor d'IA diferent d'Ollama. En obrir-se, també pregunta a GitHub si hi ha una versió nova, cosa que pots desactivar a **Preferències** → **General** → **Actualitzacions**.

## Carpeta de configuració d'usuari

La configuració, l'historial i els enregistraments es desen a la carpeta de configuració d'usuari, així que es conserven en actualitzar:

| Sistema | Carpeta |
| --- | --- |
| Windows | `%APPDATA%\Audiotext` |
| macOS | `~/Library/Application Support/Audiotext` |
| Linux | `~/.config/audiotext` (o `$XDG_CONFIG_HOME/audiotext`) |

Conté:

- `config.ini`: la teva configuració. Elimina'l per restablir els valors per defecte.
- `history.json`: les teves transcripcions, amb els resums, les traduccions i les correccions.
- `media/`: els enregistraments del micròfon i l'àudio descarregat d'URL, per poder-los reproduir més tard. S'eliminen quan se n'elimina la transcripció de l'historial.

Per fer servir una altra carpeta, p. ex. per a una instal·lació portàtil, configura la variable d'entorn `AUDIOTEXT_CONFIG_DIR`.

:::note
El fitxer `config.ini` de la carpeta de l'aplicació conté la configuració per defecte i no es modifica mai.
:::

## Claus d'API

Les claus d'API i el token de Hugging Face es desen al magatzem de credencials del sistema:

- **macOS**: el Clauer.
- **Windows**: l'Administrador de credencials.
- **Linux**: el Secret Service (p. ex. GNOME Keyring o KWallet).

Si el sistema no en té cap (p. ex. un servidor sense escriptori), es desen en un fitxer `.env` a la carpeta de configuració, que només pot llegir el teu usuari. Les claus que les versions anteriors desaven en aquest fitxer es mouen al magatzem de credencials la primera vegada que s'obre l'aplicació.

Les claus es fan servir **només** per fer peticions a l'API de cada servei.

## Variables d'entorn

Les variables d'entorn amb els noms de les claus tenen prioritat sobre les configurades a l'aplicació:

| Variable | Servei |
| --- | --- |
| `OPENAI_API_KEY` | OpenAI (API de Whisper, resums, traduccions) |
| `ANTHROPIC_API_KEY` | Claude |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GEMINI_API_KEY` | Gemini |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | Grok (xAI) |
| `DEEPL_API_KEY` | DeepL |
| `GOOGLE_API_KEY` | Google Speech-to-Text i Google Translate |
| `HF_TOKEN` | Hugging Face (identificació de parlants) |
| `AUDIOTEXT_CONFIG_DIR` | La carpeta de la configuració i de l'historial |

## Models

Els models de WhisperX i de la identificació de parlants es descarreguen la primera vegada que es fan servir, i Hugging Face els desa a la memòria cau a `~/.cache/huggingface` (o `%USERPROFILE%\.cache\huggingface` a Windows). Elimina aquesta carpeta per alliberar l'espai que ocupen.
