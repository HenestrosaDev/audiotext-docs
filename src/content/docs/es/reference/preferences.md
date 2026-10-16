---
title: Preferencias
description: Todos los ajustes de la ventana de Preferencias, pestaña por pestaña.
sidebar:
  order: 2
---

Las **Preferencias** contienen los ajustes que no cambian con cada transcripción. Ábrelas con el engranaje de arriba a la derecha de la ventana. Los cambios se guardan automáticamente.

## General

- **Apariencia**: **Sistema** (sigue a tu sistema), **Claro** u **Oscuro**.
- **Tamaño de la interfaz**: el tamaño del texto y de los controles, del 80% al 200%. `100%` por defecto. El cambio se aplica al momento.
- **Idioma de la interfaz**: el idioma de Audiotext, o **Idioma del sistema**. Consulta los [idiomas disponibles](/es/reference/formats-and-languages/#idiomas-de-la-interfaz).
- **Formato de la fecha**: cómo se muestran las fechas de las transcripciones, en el idioma de la interfaz: corto (`4/10/26`), medio (`4 oct 2026`, por defecto), largo (`4 de octubre de 2026`) o ISO (`2026-10-04`). El menú muestra cada formato con un ejemplo.
- **Formato de la hora**: **Automático** (el reloj del idioma de la interfaz), de 12 horas (`1:30 p. m.`) o de 24 horas (`13:30`).
- **Notificaciones**: muestra una notificación del sistema cuando una transcripción está lista (en una carpeta, cuando lo están todos sus archivos, y en una carpeta vigilada, cada vez que lo está un archivo nuevo). Activado por defecto. En macOS provienen de **Editor de Scripts** y en Windows de **Windows PowerShell**, así que se permiten o silencian para esas aplicaciones en los ajustes del sistema. En Linux requieren `notify-send` (el paquete `libnotify-bin` o `libnotify`).
- **Buscar actualizaciones automáticamente**: comprueba si hay una versión nueva al abrir la aplicación y, si la hay, muestra un botón **La versión … está disponible** en la barra superior que abre su página de descarga. No se ofrecen las versiones preliminares. Activado por defecto.

## Proveedores

Los proveedores de los [resúmenes, las preguntas y las traducciones](/es/guides/summary-and-translation/):

- **Resumen** → **Proveedor** y **Modelo**.
- **Preguntar** → **Proveedor** y **Modelo**: los que responden las preguntas sobre las transcripciones. Son los de los resúmenes hasta que los cambies.
- **Traducción** → **Proveedor** y **Modelo**. DeepL y Google Translate no tienen modelos que elegir.
- **Ollama** → **URL del servidor**: la dirección de Ollama, `http://localhost:11434` por defecto.

Deja el **Modelo** vacío para usar el modelo por defecto del proveedor. El botón junto al proveedor configura su clave de API.

## Claves de API

Las claves de cada servicio. Haz clic en **Configurar clave de API…** para introducir una, o en **Cambiar clave de API…** para reemplazarla (déjala vacía para eliminarla). Se guardan en el almacén de credenciales de tu sistema. Se agrupan según para qué sirven, y las que están configuradas muestran una marca.

| Grupo | Clave | Se usa para |
| --- | --- | --- |
| **Proveedores de LLM** | Clave de API de OpenAI | La API de Whisper, y resumir, preguntar y traducir con OpenAI |
| | Clave de API de Anthropic | Resumir, preguntar y traducir con Claude |
| | Clave de API de DeepSeek | Resumir, preguntar y traducir con DeepSeek |
| | Clave de API de Gemini | Resumir, preguntar y traducir con Gemini (de Google AI Studio) |
| | Clave de API de Mistral | Resumir, preguntar y traducir con Mistral |
| | Clave de API de xAI | Resumir, preguntar y traducir con Grok |
| **Traducción** | Clave de API de DeepL | Traducir con DeepL (las claves del plan gratuito también sirven) |
| | Clave de API de Google | Google Speech-to-Text más allá del nivel gratuito, y Google Translate (Cloud Translation API) |
| **Transcripción** | Token de Hugging Face | Identificar a los hablantes con WhisperX |

:::caution
Cada proveedor cobra por el uso de su API, del que Audiotext no se hace responsable. Si OpenAI devuelve el error `429` con una clave nueva, consulta [Solución de problemas](/es/help/troubleshooting/#la-api-de-whisper-devuelve-el-error-429).
:::

## Transcripción

Las opciones de los motores, en una sección cada uno.

### WhisperX

**Tipo de cómputo**, **Tamaño de lote** y **Usar CPU**. Consulta las [opciones avanzadas de WhisperX](/es/reference/engines/#opciones-avanzadas). En un Mac con Apple Silicon, WhisperX transcribe en su GPU salvo que **Usar CPU** esté activado. Consulta [En un Mac](/es/reference/engines/#en-un-mac). En la GPU del Mac, las indicaciones de **Tipo de cómputo** y **Tamaño de lote** dicen que no se aplican, y **Usar CPU** enlaza a los **Modelos compatibles**.

### API de Whisper

**Temperatura** y **Marcas de tiempo de las palabras**. Consulta las [opciones de la API de Whisper](/es/reference/engines/#opciones).

## Subtítulos

Cómo se dividen los subtítulos: los que se muestran sobre el vídeo y en el modo **Subtítulos**, los archivos de subtítulos exportados y los [vídeos con subtítulos](/es/guides/transcript/#exporta-el-vídeo-con-sus-subtítulos). Cada opción tiene un valor para los vídeos horizontales y otro para los verticales (más altos que anchos, p. ej. para móviles), que son más estrechos:

| Opción | Horizontal | Vertical |
| --- | :---: | :---: |
| **Máx. de líneas por subtítulo** | `2` | `2` |
| **Máx. de caracteres por línea** | `42` | `24` |
| **Chino, japonés y coreano**: los caracteres por línea en estos idiomas, cuyos caracteres son aproximadamente el doble de anchos que los latinos | `16` | `10` |

Las líneas de un subtítulo se equilibran, y los idiomas que se escriben sin espacios se parten entre caracteres.

**Resaltar palabras** subraya cada palabra mientras se dice en los archivos `.srt` y `.vtt`. Desactivado por defecto.

## Acerca de

La versión de Audiotext y enlaces a esta documentación, al código fuente en GitHub y a la página de donaciones. **Buscar actualizaciones** comprueba en el momento si hay una versión nueva: si la hay, el botón se convierte en **Descargar** y abre su página.
