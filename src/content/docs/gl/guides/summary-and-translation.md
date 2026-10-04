---
title: Resumo e tradución
description: Resume e traduce transcricións con OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL ou Google Translate.
sidebar:
  order: 4
---

Cando unha transcrición está lista, Audiotext pode resumila e traducila cun modelo de linguaxe ou un servizo de tradución. Ambos gárdanse no historial, así que só se xeran unha vez.

## Resumo

Abre o modo **Resumo** dunha transcrición e fai clic en **Xerar resumo**. O modelo de linguaxe escribe:

- Un **resumo** da transcrición.
- Os seus **puntos clave**.
- Os seus **capítulos**, se ten marcas de tempo. Fai clic nun capítulo para reproducir o audio desde onde comeza.

**Rexenerar** vólveo escribir (p. ex. despois de escoller outro modelo). **Copiar** cópiao, e as [exportacións](/gl/guides/transcript/#copia-e-exporta) a Markdown e Word inclúeno.

Se a clave de API do provedor non está configurada, o modo **Resumo** ofrece configurala. As transcricións moi longas (unhas tres horas de fala ou máis) só se resumen desde o seu comezo.

![O resumo dunha transcrición, cos seus puntos clave e os seus capítulos](/screenshots/summary.png)

## Tradución

Fai clic en **Traducir**, escolle o idioma en **Traducir ao** e o **Provedor**, e confirma. A tradución móstrase nun panel á dereita do texto orixinal.

- Se a transcrición ten marcas de tempo, cada frase tradúcese por separado, así que a tradución consérvaas: resalta a frase que se reproduce, e ao facer clic nunha frase reprodúcese.
- Se editaches o texto plano, tradúcese o texto editado, sen marcas de tempo.
- Arrastra o separador entre os dous textos para cambiar o seu tamaño, ou fai dobre clic nel para restablecelo.
- O botón **Traducir** tamén che permite **Ocultar a tradución**, **Traducir a outro idioma…** ou **Eliminar a tradución**.

:::tip
Para obter a transcrición directamente noutro idioma, sen provedor, tamén podes traducir mentres transcribes. Consulta [Idioma](/gl/guides/transcription-settings/#idioma).
:::

## Provedores

Os provedores escóllense en **Preferencias** → **IA**, por separado para os resumos e as traducións.

| Provedor | Modelo predeterminado | Clave de API |
| --- | --- | --- |
| OpenAI (predeterminado) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (local) | `llama3.2` | Non é necesaria |

Deixa o **Modelo** baleiro para usar o modelo predeterminado do provedor, ou escribe o nome de calquera outro modelo do provedor (p. ex. `claude-sonnet-5-5` ou `deepseek-reasoner`).

As traducións tamén se poden facer con:

- **DeepL**, que require unha [clave de API de DeepL](https://www.deepl.com/your-account/keys). As claves do plan gratuíto tamén serven.
- **Google Translate**, que usa a clave de API de Google coa Cloud Translation API activada.

### Ollama

[Ollama](https://ollama.com) executa os modelos no teu ordenador, sen clave de API e sen enviar o texto a ningures. Instálao, descarga un modelo (p. ex. `ollama pull llama3.2`) e escolle **Ollama** como provedor. Se non se executa no enderezo predeterminado, cambia o **URL do servidor** en **Preferencias** → **IA** (`http://localhost:11434` de forma predeterminada).

:::note
Cada provedor cobra polo uso da súa API, do que Audiotext non se fai responsable. As claves de API gárdanse no almacén de credenciais do teu sistema. Consulta [Ficheiros e datos](/gl/reference/files-and-data/).
:::
