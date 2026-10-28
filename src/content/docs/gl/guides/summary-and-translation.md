---
title: Resumo, preguntas e tradución
description: Resume, pregunta sobre e traduce transcricións con OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL ou Google Translate.
sidebar:
  order: 4
---

Cando unha transcrición está lista, Audiotext pode resumila, responder preguntas sobre ela e traducila cun modelo de linguaxe ou un servizo de tradución. Todo gárdase no historial, así que só se xera unha vez.

## Resumo

Abre o modo **Resumo** dunha transcrición e fai clic en **Xerar resumo**. O modelo de linguaxe escribe:

- Un **resumo** da transcrición.
- Os seus **puntos clave**.
- Os seus **capítulos**, se ten marcas de tempo. Fai clic nun capítulo para reproducir o audio desde onde comeza.

Baixo o seu título, o panel di que modelo o xerou e cando. Os botóns da súa cabeceira:

- **Buscar** (`Ctrl+F`, `⌘F` en macOS): busca un texto no resumo.
- **Copiar**: cópiao.
- **Exportar**: gárdao por separado como texto simple, Markdown ou documento de Word, cun nome como `video.summary.md` para que non substitúa a transcrición. As [exportacións](/gl/guides/transcript/#copia-e-exporta) a Markdown e Word da transcrición tamén o inclúen.
- **Rexenerar resumo**: vólveo escribir (p. ex. despois de escoller outro modelo), despois de preguntarche, xa que se substitúe o actual.

Se a clave de API do provedor non está configurada, o modo **Resumo** ofrece configurala. As transcricións moi longas (unhas tres horas de fala ou máis) só se resumen desde o seu comezo.

![O resumo dunha transcrición, cos seus puntos clave e os seus capítulos](/screenshots/summary.png)

## Pregunta sobre a transcrición

Abre o modo **Preguntar**, escribe unha pregunta en **Fai unha pregunta sobre a transcrición…** (p. ex. que se decidiu, ou quen dixo algo) e preme `Intro` ou fai clic en **Preguntar**.

- O modelo de linguaxe responde coa transcrición, e coas preguntas anteriores e as súas respostas, así que unha pregunta pode referirse a elas (p. ex. «Por que?»).
- Se a transcrición ten marcas de tempo, cada resposta enlaza coas partes da transcrición onde se di. Fai clic nunha para reproducir o audio desde aí.
- As preguntas e as súas respostas gárdanse no historial coa transcrición. A papeleira da cabeceira borra a conversa, despois de preguntarche.

As preguntas respóndeas o provedor escollido para elas en **Preferencias** → **Provedores** → **Preguntar**, que é o dos resumos ata que o cambies. Como nos resumos, das transcricións moi longas só se le o comezo.

## Tradución

Fai clic en **Traducir**, escolle o idioma en **Traducir ao:** e o provedor en **Traducir con:**, e confirma. O diálogo di que fai o provedor escollido, e ofrece configurar a súa clave de API se falta. A tradución móstrase nun panel á dereita do texto orixinal.

- Se a transcrición ten marcas de tempo, tradúcese frase a frase, co texto que se di antes e despois de cada parte como contexto, así que a tradución comeza coas marcas de tempo de cada frase: resalta a frase que se reproduce, e ao facer clic nunha reprodúcese.
- Se a transcrición non ten marcas de tempo, tradúcese todo o seu texto dunha vez.
- Os dous textos desprázanse xuntos, así que mostran a mesma parte do audio. O botón redondo do separador entre eles actívao e desactívao. Arrastra o separador para cambiar o seu tamaño, ou fai dobre clic nel para restablecelo.

Os botóns da cabeceira da tradución buscan e substitúen nela, cópiana, expórtana, **Tradúcena de novo** (co mesmo provedor e o mesmo modelo) e ocúltana (**Ocultar tradución**). O botón **Traducir** tamén che permite mostrala de novo, **Traducir a outro idioma…** ou **Eliminar tradución**.

### Varios idiomas

Unha transcrición pódese traducir a varios idiomas, mesmo á vez, e gárdase cada tradución. O título do panel escolle a que se mostra, di canto está traducida cada unha e remata coa opción de traducir a outro idioma. Traducir a un idioma que xa ten unha tradución substitúea, despois de preguntarche, xa que se perden as súas correccións. O menú do título mostra cantos subtítulos de cada tradución sen rematar están traducidos (p. ex. `Inglés · 148/150`).

### Progreso da tradución

O progreso cóntase en subtítulos: un está traducido cando ten texto. Enriba da tradución, unha liña mostra cantos están traducidos (p. ex. `Traducido: 148/150 · 98 %`). A porcentaxe arredóndase cara abaixo, así que `100 %` só aparece cando están todos traducidos.

Mentres queden algúns, as frechas xunto a ela van aos subtítulos anterior e seguinte **Aínda sen traducir**, resaltando cada un, e mostran en cal estás (p. ex. `1 de 2`). Pasa o rato por riba dun para mostrar o botón **Traducir texto…** á súa dereita, que abre o diálogo para traducilo.

### Corrixe e axusta os tempos da tradución

Unha tradución adoita precisar outros tempos ca o orixinal, p. ex. subtítulos que levan máis tempo ler. Fai clic dereito nun subtítulo da tradución para:

- **Editar texto…**: cambiar o seu texto.
- **Editar tempos…**: cambiar cando comeza e remata, ao milisegundo. Escribe os tempos como `00:01:05,900`, `01:05,9` ou `65.9`.
- **Engadir subtítulo despois…**: engadir un subtítulo, que por defecto ocupa o oco ata o seguinte.
- **Eliminar subtítulo**.

Tamén podes cambiar os tempos da transcrición e engadirlle subtítulos: consulta [Corrixe a transcrición](/gl/guides/transcript/#corrixe-a-transcrición).

### Tradúcea ti mesmo

Para escribir a tradución ti mesmo, escolle **Manual** en **Traducir con:**. Non precisa clave de API. A tradución comeza cun subtítulo baleiro por cada un da transcrición, que se mostra como **Aínda sen traducir**, e o panel mostra cantos quedan. Fai clic dereito nun e escolle **Traducir texto…**: o diálogo mostra o texto orixinal que se di mentres tanto. Ao pasar o rato por riba dun aparece un botón **Traducir texto…** á súa dereita, que abre o mesmo diálogo.

### Subtítulos e exportación

- Nas transcricións de vídeos, marca **Mostrar como subtítulos do vídeo** no menú **Traducir** para mostrar a tradución como subtítulos. O menú do vídeo tamén os cambia. Consulta [Mira vídeos con subtítulos](/gl/guides/transcript/#mira-vídeos-con-subtítulos).
- Para gardar a tradución como ficheiro, fai clic no botón de exportar do seu panel. Expórtase nos mesmos [formatos](/gl/guides/transcript/#copia-e-exporta) ca a transcrición, co seu idioma no nome do ficheiro (p. ex. `video.es.srt`), así que os reprodutores de vídeo cárgana co vídeo. Os subtítulos aínda sen traducir non se exportan. O mesmo menú fai unha [copia do vídeo cos seus subtítulos](/gl/guides/transcript/#exporta-o-vídeo-cos-seus-subtítulos).

:::tip
Para obter a transcrición directamente noutro idioma, sen provedor, tamén podes traducir mentres transcribes. Consulta [Idioma](/gl/guides/transcription-settings/#idioma).
:::

## Provedores

Os provedores escóllense en **Preferencias** → **Provedores**, por separado para os resumos, as preguntas e as traducións.

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

[Ollama](https://ollama.com) executa os modelos no teu ordenador, sen clave de API e sen enviar o texto a ningures. Instálao, descarga un modelo (p. ex. `ollama pull llama3.2`) e escolle **Ollama** como provedor. Se non se executa no enderezo predeterminado, cambia o **URL do servidor** en **Preferencias** → **Provedores** (`http://localhost:11434` de forma predeterminada).

:::note
Cada provedor cobra polo uso da súa API, do que Audiotext non se fai responsable. As claves de API gárdanse no almacén de credenciais do teu sistema. Consulta [Ficheiros e datos](/gl/reference/files-and-data/).
:::
