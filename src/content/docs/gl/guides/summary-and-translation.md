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

- Se a transcrición ten marcas de tempo, cada segmento tradúcese por separado, así que a tradución comeza coas mesmas marcas de tempo: resalta o segmento que se reproduce, e ao facer clic nun segmento reprodúcese.
- Se editaches o texto plano, tradúcese o texto editado, sen marcas de tempo.
- Arrastra o separador entre os dous textos para cambiar o seu tamaño, ou fai dobre clic nel para restablecelo.
- O botón **Traducir** tamén che permite **Ocultar a tradución**, **Traducir a outro idioma…** ou **Eliminar a tradución**.

### Corrixe e axusta os tempos da tradución

Unha tradución adoita precisar outros tempos ca o orixinal, p. ex. subtítulos que levan máis tempo ler. Fai clic dereito nun segmento da tradución para:

- **Editar o texto…**: cambiar o seu texto.
- **Editar os tempos…**: cambiar cando comeza e remata, ao milisegundo. Escribe os tempos como `00:01:05,900`, `01:05,9` ou `65.9`.
- **Engadir un segmento despois…**: engadir un segmento, que por defecto ocupa o oco ata o seguinte.
- **Eliminar o segmento**.

### Tradúcea ti mesmo

Para escribir a tradución ti mesmo, escolle **Eu mesmo, desde cero** como **Provedor**. Non precisa clave de API. A tradución comeza coas marcas de tempo da transcrición e os segmentos baleiros, que se mostran como **Aínda sen traducir**, e o panel mostra cantos quedan. Fai clic dereito nun e escolle **Traducir o texto…**: o diálogo mostra o texto orixinal que se di mentres tanto.

### Subtítulos e exportación

- Nas transcricións de vídeos, marca **Mostrala como subtítulos do vídeo** no menú **Traducir** para mostrar a tradución como subtítulos. O menú do vídeo tamén os cambia. Consulta [Mira vídeos con subtítulos](/gl/guides/transcript/#mira-vídeos-con-subtítulos).
- Para gardar a tradución como ficheiro, escolle **Tradución ao idioma…** no menú **Exportar** ou fai clic no botón de exportar da tradución. Expórtase nos mesmos [formatos](/gl/guides/transcript/#copia-e-exporta) ca a transcrición, co seu idioma no nome do ficheiro (p. ex. `video.es.srt`), así que os reprodutores de vídeo cárgana co vídeo. Os segmentos aínda sen traducir non se inclúen nos subtítulos.

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
