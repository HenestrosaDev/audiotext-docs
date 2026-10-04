---
title: Resum i traducció
description: Resumeix i tradueix transcripcions amb OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL o Google Translate.
sidebar:
  order: 4
---

Quan una transcripció està llesta, Audiotext la pot resumir i traduir amb un model de llenguatge o un servei de traducció. Tots dos es desen a l'historial, així que només es generen una vegada.

## Resum

Obre el mode **Resum** d'una transcripció i fes clic a **Genera el resum**. El model de llenguatge escriu:

- Un **resum** de la transcripció.
- Els **punts clau**.
- Els **capítols**, si té marques de temps. Fes clic en un capítol per reproduir l'àudio des d'on comença.

**Torna a generar** el torna a escriure (p. ex. després de triar un altre model). **Copia** el copia, i les [exportacions](/ca/guides/transcript/#copia-i-exporta) a Markdown i Word l'inclouen.

Si la clau d'API del proveïdor no està configurada, el mode **Resum** ofereix configurar-la. Les transcripcions molt llargues (unes tres hores de parla o més) només es resumeixen des del principi.

![El resum d'una transcripció, amb els punts clau i els capítols](/screenshots/summary.png)

## Traducció

Fes clic a **Tradueix**, tria l'idioma a **Tradueix a** i el **Proveïdor**, i confirma. La traducció es mostra en un plafó a la dreta del text original.

- Si la transcripció té marques de temps, cada frase es tradueix per separat, així que la traducció les conserva: ressalta la frase que es reprodueix, i en fer clic en una frase es reprodueix.
- Si has editat el text pla, es tradueix el text editat, sense marques de temps.
- Arrossega el separador entre els dos textos per canviar-ne la mida, o fes-hi doble clic per restablir-la.
- El botó **Tradueix** també et permet **Amagar la traducció**, **Traduir a un altre idioma…** o **Eliminar la traducció**.

:::tip
Per obtenir la transcripció directament en un altre idioma, sense proveïdor, també pots traduir mentre transcrius. Consulta [Idioma](/ca/guides/transcription-settings/#idioma).
:::

## Proveïdors

Els proveïdors es trien a **Preferències** → **IA**, per separat per als resums i les traduccions.

| Proveïdor | Model per defecte | Clau d'API |
| --- | --- | --- |
| OpenAI (per defecte) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (local) | `llama3.2` | No cal |

Deixa el **Model** buit per fer servir el model per defecte del proveïdor, o escriu el nom de qualsevol altre model del proveïdor (p. ex. `claude-sonnet-5-5` o `deepseek-reasoner`).

Les traduccions també es poden fer amb:

- **DeepL**, que requereix una [clau d'API de DeepL](https://www.deepl.com/your-account/keys). Les claus del pla gratuït també funcionen.
- **Google Translate**, que fa servir la clau d'API de Google amb la Cloud Translation API activada.

### Ollama

[Ollama](https://ollama.com) executa els models al teu ordinador, sense clau d'API i sense enviar el text enlloc. Instal·la'l, descarrega un model (p. ex. `ollama pull llama3.2`) i tria **Ollama** com a proveïdor. Si no s'executa a l'adreça per defecte, canvia l'**URL del servidor** a **Preferències** → **IA** (`http://localhost:11434` per defecte).

:::note
Cada proveïdor cobra per l'ús de la seva API, del qual Audiotext no es fa responsable. Les claus d'API es desen al magatzem de credencials del sistema. Consulta [Fitxers i dades](/ca/reference/files-and-data/).
:::
