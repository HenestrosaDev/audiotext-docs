---
title: Resumen y traducción
description: Resume y traduce transcripciones con OpenAI, Claude, Gemini, DeepSeek, Mistral, Grok, Ollama, DeepL o Google Translate.
sidebar:
  order: 4
---

Cuando una transcripción está lista, Audiotext puede resumirla y traducirla con un modelo de lenguaje o un servicio de traducción. Ambos se guardan en el historial, así que solo se generan una vez.

## Resumen

Abre el modo **Resumen** de una transcripción y haz clic en **Generar resumen**. El modelo de lenguaje escribe:

- Un **resumen** de la transcripción.
- Sus **puntos clave**.
- Sus **capítulos**, si tiene marcas de tiempo. Haz clic en un capítulo para reproducir el audio desde donde empieza.

**Regenerar** lo vuelve a escribir (p. ej. después de elegir otro modelo). **Copiar** lo copia, y las [exportaciones](/es/guides/transcript/#copia-y-exporta) a Markdown y Word lo incluyen.

Si la clave de API del proveedor no está configurada, el modo **Resumen** ofrece configurarla. Las transcripciones muy largas (unas tres horas de habla o más) solo se resumen desde su principio.

![El resumen de una transcripción, con sus puntos clave y sus capítulos](/screenshots/summary.png)

## Traducción

Haz clic en **Traducir**, elige el idioma en **Traducir al** y el **Proveedor**, y confirma. La traducción se muestra en un panel a la derecha del texto original.

- Si la transcripción tiene marcas de tiempo, cada segmento se traduce por separado, así que la traducción empieza con las mismas marcas de tiempo: resalta el segmento que se reproduce, y al hacer clic en un segmento se reproduce.
- Si has editado el texto plano, se traduce el texto editado, sin marcas de tiempo.
- Arrastra el separador entre los dos textos para cambiar su tamaño, o haz doble clic en él para restablecerlo.
- El botón **Traducir** también te permite **Ocultar la traducción**, **Traducir a otro idioma…** o **Eliminar la traducción**.

### Corrige y ajusta los tiempos de la traducción

Una traducción suele necesitar otros tiempos que el original, p. ej. subtítulos que se tardan más en leer. Haz clic derecho en un segmento de la traducción para:

- **Editar el texto…**: cambiar su texto.
- **Editar los tiempos…**: cambiar cuándo empieza y termina, al milisegundo. Escribe los tiempos como `00:01:05,900`, `01:05,9` o `65.9`.
- **Añadir un segmento después…**: añadir un segmento, que por defecto ocupa el hueco hasta el siguiente.
- **Eliminar el segmento**.

### Tradúcela tú mismo

Para escribir la traducción tú mismo, elige **Yo mismo, desde cero** como **Proveedor**. No necesita clave de API. La traducción empieza con las marcas de tiempo de la transcripción y los segmentos vacíos, que se muestran como **Sin traducir todavía**, y el panel muestra cuántos quedan. Haz clic derecho en uno y elige **Traducir el texto…**: el diálogo muestra el texto original que se dice mientras tanto.

### Subtítulos y exportación

- En las transcripciones de vídeos, marca **Mostrarla como subtítulos del vídeo** en el menú **Traducir** para mostrar la traducción como subtítulos. El menú del vídeo también los cambia. Consulta [Mira vídeos con subtítulos](/es/guides/transcript/#mira-vídeos-con-subtítulos).
- Para guardar la traducción como archivo, elige **Traducción al…** en el menú **Exportar** o haz clic en el botón de exportar de la traducción. Se exporta en los mismos [formatos](/es/guides/transcript/#copia-y-exporta) que la transcripción, con su idioma en el nombre del archivo (p. ej. `video.es.srt`), así que los reproductores de vídeo la cargan con el vídeo. Los segmentos sin traducir todavía no se incluyen en los subtítulos.

:::tip
Para obtener la transcripción directamente en otro idioma, sin proveedor, también puedes traducir mientras transcribes. Consulta [Idioma](/es/guides/transcription-settings/#idioma).
:::

## Proveedores

Los proveedores se eligen en **Preferencias** → **IA**, por separado para los resúmenes y las traducciones.

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

[Ollama](https://ollama.com) ejecuta los modelos en tu ordenador, sin clave de API y sin enviar el texto a ninguna parte. Instálalo, descarga un modelo (p. ej. `ollama pull llama3.2`) y elige **Ollama** como proveedor. Si no se ejecuta en la dirección por defecto, cambia la **URL del servidor** en **Preferencias** → **IA** (`http://localhost:11434` por defecto).

:::note
Cada proveedor cobra por el uso de su API, del que Audiotext no se hace responsable. Las claves de API se guardan en el almacén de credenciales de tu sistema. Consulta [Archivos y datos](/es/reference/files-and-data/).
:::
