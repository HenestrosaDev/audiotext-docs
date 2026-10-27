---
title: Resumen, preguntas y traducción
description: Resume, pregunta sobre y traduce transcripciones con OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL o Google Translate.
sidebar:
  order: 4
---

Cuando una transcripción está lista, Audiotext puede resumirla, responder preguntas sobre ella y traducirla con un modelo de lenguaje o un servicio de traducción. Todo se guarda en el historial, así que solo se genera una vez.

## Resumen

Abre el modo **Resumen** de una transcripción y haz clic en **Generar resumen**. El modelo de lenguaje escribe:

- Un **resumen** de la transcripción.
- Sus **puntos clave**.
- Sus **capítulos**, si tiene marcas de tiempo. Haz clic en un capítulo para reproducir el audio desde donde empieza.

Bajo su título, el panel dice qué modelo lo generó y cuándo. Los botones de su cabecera:

- **Buscar** (`Ctrl+F`, `⌘F` en macOS): busca un texto en el resumen.
- **Copiar**: lo copia.
- **Exportar**: lo guarda por separado como texto plano, Markdown o documento de Word, con un nombre como `video.summary.md` para que no reemplace la transcripción. Las [exportaciones](/es/guides/transcript/#copia-y-exporta) a Markdown y Word de la transcripción también lo incluyen.
- **Regenerar resumen**: lo vuelve a escribir (p. ej. después de elegir otro modelo), después de preguntarte, ya que se reemplaza el actual.

Si la clave de API del proveedor no está configurada, el modo **Resumen** ofrece configurarla. Las transcripciones muy largas (unas tres horas de habla o más) solo se resumen desde su principio.

![El resumen de una transcripción, con sus puntos clave y sus capítulos](/screenshots/summary.png)

## Pregunta sobre la transcripción

Abre el modo **Preguntar**, escribe una pregunta en **Haz una pregunta sobre la transcripción…** (p. ej. qué se decidió, o quién dijo algo) y pulsa `Enter` o haz clic en **Preguntar**.

- El modelo de lenguaje responde con la transcripción, y con las preguntas anteriores y sus respuestas, así que una pregunta puede referirse a ellas (p. ej. «¿Por qué?»).
- Si la transcripción tiene marcas de tiempo, cada respuesta enlaza a las partes de la transcripción donde se dice. Haz clic en una para reproducir el audio desde ahí.
- Las preguntas y sus respuestas se guardan en el historial con la transcripción. La papelera de la cabecera borra la conversación, después de preguntarte.

Las preguntas las responde el proveedor elegido para ellas en **Preferencias** → **Proveedores** → **Preguntar**, que es el de los resúmenes hasta que lo cambies. Como en los resúmenes, de las transcripciones muy largas solo se lee el principio.

## Traducción

Haz clic en **Traducir**, elige el idioma en **Traducir al:** y el proveedor en **Traducir con:**, y confirma. El diálogo dice qué hace el proveedor elegido, y ofrece configurar su clave de API si falta. La traducción se muestra en un panel a la derecha del texto original.

- Si la transcripción tiene marcas de tiempo, se traduce frase a frase, con el texto que se dice antes y después de cada parte como contexto, así que la traducción empieza con las marcas de tiempo de cada frase: resalta la frase que se reproduce, y al hacer clic en una se reproduce.
- Si la transcripción no tiene marcas de tiempo, se traduce todo su texto de una vez.
- Los dos textos se desplazan juntos, así que muestran la misma parte del audio. El botón redondo del separador entre ellos lo activa y desactiva. Arrastra el separador para cambiar su tamaño, o haz doble clic en él para restablecerlo.

Los botones de la cabecera de la traducción buscan y reemplazan en ella, la copian, la exportan, la **Vuelven a traducir** (con el mismo proveedor y el mismo modelo) y la ocultan (**Ocultar traducción**). El botón **Traducir** también te permite volver a mostrarla, **Traducir a otro idioma…** o **Eliminar traducción**.

### Varios idiomas

Una transcripción se puede traducir a varios idiomas, incluso a la vez, y se guarda cada traducción. El título del panel elige la que se muestra, dice cuánto está traducido de cada una y termina con la opción de traducir a otro idioma. Traducir a un idioma que ya tiene una traducción la reemplaza, después de preguntarte, ya que se pierden sus correcciones. El menú del título muestra cuántos subtítulos de cada traducción sin terminar están traducidos (p. ej. `Inglés · 148/150`).

### Progreso de la traducción

El progreso se cuenta en subtítulos: uno está traducido cuando tiene texto. Encima de la traducción, una línea muestra cuántos están traducidos (p. ej. `Traducido: 148/150 · 98 %`). El porcentaje se redondea hacia abajo, así que `100 %` solo aparece cuando están todos traducidos.

Mientras queden algunos, las flechas junto a ella van a los subtítulos anterior y siguiente **Sin traducir todavía**, resaltando cada uno, y muestran en cuál estás (p. ej. `1 de 2`). Pasa el ratón por encima de uno para mostrar el botón **Traducir texto…** a su derecha, que abre el diálogo para traducirlo.

### Corrige y ajusta los tiempos de la traducción

Una traducción suele necesitar otros tiempos que el original, p. ej. subtítulos que se tardan más en leer. Haz clic derecho en un subtítulo de la traducción para:

- **Editar texto…**: cambiar su texto.
- **Editar tiempos…**: cambiar cuándo empieza y termina, al milisegundo. Escribe los tiempos como `00:01:05,900`, `01:05,9` o `65.9`.
- **Añadir subtítulo después…**: añadir un subtítulo, que por defecto ocupa el hueco hasta el siguiente.
- **Eliminar subtítulo**.

También puedes cambiar los tiempos de la transcripción y añadirle subtítulos: consulta [Corrige la transcripción](/es/guides/transcript/#corrige-la-transcripción).

### Tradúcela tú mismo

Para escribir la traducción tú mismo, elige **Manual** en **Traducir con:**. No necesita clave de API. La traducción empieza con un subtítulo vacío por cada uno de la transcripción, que se muestra como **Sin traducir todavía**, y el panel muestra cuántos quedan. Haz clic derecho en uno y elige **Traducir texto…**: el diálogo muestra el texto original que se dice mientras tanto. Al pasar el ratón por encima de uno aparece un botón **Traducir texto…** a su derecha, que abre el mismo diálogo.

### Subtítulos y exportación

- En las transcripciones de vídeos, marca **Mostrar como subtítulos del vídeo** en el menú **Traducir** para mostrar la traducción como subtítulos. El menú del vídeo también los cambia. Consulta [Mira vídeos con subtítulos](/es/guides/transcript/#mira-vídeos-con-subtítulos).
- Para guardar la traducción como archivo, haz clic en el botón de exportar de su panel. Se exporta en los mismos [formatos](/es/guides/transcript/#copia-y-exporta) que la transcripción, con su idioma en el nombre del archivo (p. ej. `video.es.srt`), así que los reproductores de vídeo la cargan con el vídeo. Los subtítulos sin traducir todavía no se exportan. El mismo menú hace una [copia del vídeo con sus subtítulos](/es/guides/transcript/#exporta-el-vídeo-con-sus-subtítulos).

:::tip
Para obtener la transcripción directamente en otro idioma, sin proveedor, también puedes traducir mientras transcribes. Consulta [Idioma](/es/guides/transcription-settings/#idioma).
:::

## Proveedores

Los proveedores se eligen en **Preferencias** → **Proveedores**, por separado para los resúmenes, las preguntas y las traducciones.

| Proveedor | Modelo por defecto | Clave de API |
| --- | --- | --- |
| OpenAI (por defecto) | `gpt-5.4-mini` | [OpenAI](https://platform.openai.com/api-keys) |
| Claude (Anthropic) | `claude-haiku-4-5` | [Anthropic](https://console.anthropic.com/settings/keys) |
| DeepSeek | `deepseek-chat` | [DeepSeek](https://platform.deepseek.com/api_keys) |
| Gemini (Google) | `gemini-3.8-flash` | [Google AI Studio](https://aistudio.google.com/apikey) |
| Mistral | `mistral-small-latest` | [Mistral](https://console.mistral.ai/api-keys) |
| Grok (xAI) | `grok-4.3` | [xAI](https://console.x.ai) |
| Ollama (local) | `llama3.2` | No es necesaria |

Deja el **Modelo** vacío para usar el modelo por defecto del proveedor, o escribe el nombre de cualquier otro modelo del proveedor (p. ej. `claude-sonnet-5-5` o `deepseek-reasoner`).

Las traducciones también se pueden hacer con:

- **DeepL**, que requiere una [clave de API de DeepL](https://www.deepl.com/your-account/keys). Las claves del plan gratuito también sirven.
- **Google Translate**, que usa la clave de API de Google con la Cloud Translation API activada.

### Ollama

[Ollama](https://ollama.com) ejecuta los modelos en tu ordenador, sin clave de API y sin enviar el texto a ninguna parte. Instálalo, descarga un modelo (p. ej. `ollama pull llama3.2`) y elige **Ollama** como proveedor. Si no se ejecuta en la dirección por defecto, cambia la **URL del servidor** en **Preferencias** → **Proveedores** (`http://localhost:11434` por defecto).

:::note
Cada proveedor cobra por el uso de su API, del que Audiotext no se hace responsable. Las claves de API se guardan en el almacén de credenciales de tu sistema. Consulta [Archivos y datos](/es/reference/files-and-data/).
:::
