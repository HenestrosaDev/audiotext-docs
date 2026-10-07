---
title: Preferencias
description: Todos los ajustes de la ventana de Preferencias, pestaña por pestaña.
sidebar:
  order: 2
---

Las **Preferencias** contienen los ajustes que no cambian con cada transcripción. Ábrelas con el engranaje de arriba a la derecha de la ventana. Los cambios se guardan automáticamente.

## General

- **Apariencia**: **Sistema** (sigue a tu sistema), **Claro** u **Oscuro**.
- **Idioma de la interfaz**: el idioma de Audiotext, o **Idioma del sistema**. Consulta los [idiomas disponibles](/es/reference/formats-and-languages/#idiomas-de-la-interfaz).
- **Formato de la fecha**: cómo se muestran las fechas de las transcripciones, en el idioma de la interfaz: corto (`4/10/26`), medio (`4 oct 2026`, por defecto), largo (`4 de octubre de 2026`) o ISO (`2026-10-04`). El menú muestra cada formato con un ejemplo.
- **Formato de la hora**: **Automático** (el reloj del idioma de la interfaz), de 12 horas (`1:30 p. m.`) o de 24 horas (`13:30`).
- **Notificaciones**: muestra una notificación del sistema cuando una transcripción está lista (en una carpeta, cuando lo están todos sus archivos, y en una carpeta vigilada, cada vez que lo está un archivo nuevo). Activado por defecto. En macOS provienen de **Editor de Scripts** y en Windows de **Windows PowerShell**, así que se permiten o silencian para esas aplicaciones en los ajustes del sistema. En Linux requieren `notify-send` (el paquete `libnotify-bin` o `libnotify`).
- **Actualizaciones**: comprueba si hay una versión nueva al abrir la aplicación y, si la hay, muestra un botón **La versión … está disponible** en la barra superior que abre su página de descarga. No se ofrecen las versiones preliminares. Activado por defecto.

## IA

Los proveedores de los [resúmenes y las traducciones](/es/guides/summary-and-translation/):

- **Resumen** → **Proveedor** y **Modelo**.
- **Traducción** → **Proveedor** y **Modelo**. DeepL y Google Translate no tienen modelos que elegir.
- **Ollama** → **URL del servidor**: la dirección de Ollama, `http://localhost:11434` por defecto.

Deja el **Modelo** vacío para usar el modelo por defecto del proveedor. El botón junto al proveedor configura su clave de API.

## Claves de API

Las claves de cada servicio. Haz clic en **Configurar…** para introducir una, o en **Cambiar…** para reemplazarla (déjala vacía para eliminarla). Se guardan en el almacén de credenciales de tu sistema.

| Clave | Se usa para |
| --- | --- |
| Clave de API de OpenAI | La API de Whisper, y resumir y traducir con OpenAI |
| Clave de API de Anthropic | Resumir y traducir con Claude |
| Clave de API de DeepSeek | Resumir y traducir con DeepSeek |
| Clave de API de Gemini | Resumir y traducir con Gemini (de Google AI Studio) |
| Clave de API de Mistral | Resumir y traducir con Mistral |
| Clave de API de xAI | Resumir y traducir con Grok |
| Clave de API de DeepL | Traducir con DeepL (las claves del plan gratuito también sirven) |
| Clave de API de Google | Google Speech-to-Text más allá del nivel gratuito, y Google Translate (Cloud Translation API) |
| Token de Hugging Face | Identificar a los hablantes con WhisperX |

:::caution
Cada proveedor cobra por el uso de su API, del que Audiotext no se hace responsable. Si OpenAI devuelve el error `429` con una clave nueva, consulta [Solución de problemas](/es/help/troubleshooting/#la-api-de-whisper-devuelve-el-error-429).
:::

## WhisperX

**Tipo de cómputo**, **Tamaño de lote** y **Usar CPU**. Consulta las [opciones avanzadas de WhisperX](/es/reference/engines/#opciones-avanzadas).

## Subtítulos

Las opciones de los archivos `.srt` y `.vtt` que se guardan al transcribir una carpeta con WhisperX:

- **Resaltar palabras**: subraya cada palabra mientras se dice. Desactivado por defecto.
- **Máx. de líneas**: el número máximo de líneas de cada subtítulo. `2` por defecto.
- **Máx. de caracteres por línea**: el número máximo de caracteres de una línea antes de partirla. `42` por defecto.

## API de Whisper

**Temperatura** y **Marcas de tiempo de las palabras**. Consulta las [opciones de la API de Whisper](/es/reference/engines/#opciones).

## Acerca de

La versión de Audiotext y enlaces a esta documentación, al código fuente en GitHub y a la página de donaciones. **Buscar actualizaciones** comprueba en el momento si hay una versión nueva: si la hay, el botón se convierte en **Descargar** y abre su página.
